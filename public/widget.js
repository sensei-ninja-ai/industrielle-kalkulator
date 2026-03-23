(function() {
  'use strict';

  // Config fra URL-parameter eller defaults
  var scriptTag = document.currentScript;
  var params = new URL(scriptTag.src).searchParams;
  var color = params.get('color') || '#ff6b35';
  var kalkulatorUrl = params.get('url') || 'https://ninjabygg.no/kalkulator';
  var label = params.get('label') || '💬 Prisestimat';

  // Inject CSS
  var style = document.createElement('style');
  style.textContent = '\
    @keyframes nk-pulse { 0%,100%{box-shadow:0 4px 15px rgba(0,0,0,.3)} 50%{box-shadow:0 4px 25px rgba(0,0,0,.5)} }\
    #nk-widget-bubble {\
      position:fixed; bottom:24px; right:24px; z-index:9999;\
      background:' + color + '; color:#fff; border:none; border-radius:30px;\
      padding:12px 20px; font:600 15px/1 -apple-system,BlinkMacSystemFont,sans-serif;\
      cursor:pointer; animation:nk-pulse 2s infinite;\
      transition:transform .2s; white-space:nowrap;\
    }\
    #nk-widget-bubble:hover { transform:scale(1.08); }\
    #nk-widget-overlay {\
      display:none; position:fixed; inset:0; z-index:10000;\
      background:rgba(0,0,0,.5); justify-content:center; align-items:center;\
    }\
    #nk-widget-overlay.nk-open { display:flex; }\
    #nk-widget-frame-wrap {\
      background:#fff; border-radius:16px; overflow:hidden;\
      width:min(480px,94vw); height:min(700px,90vh);\
      box-shadow:0 20px 60px rgba(0,0,0,.3); position:relative;\
    }\
    #nk-widget-close {\
      position:absolute; top:8px; right:12px; z-index:1;\
      background:none; border:none; font-size:24px; cursor:pointer;\
      color:#666; line-height:1;\
    }\
    #nk-widget-iframe { width:100%; height:100%; border:none; }\
    @media(max-width:600px) {\
      #nk-widget-frame-wrap { width:100vw; height:100vh; border-radius:0; }\
      #nk-widget-bubble { bottom:16px; right:16px; padding:10px 16px; font-size:14px; }\
    }\
  ';
  document.head.appendChild(style);

  // Bubble
  var bubble = document.createElement('button');
  bubble.id = 'nk-widget-bubble';
  bubble.textContent = label;
  document.body.appendChild(bubble);

  // Overlay
  var overlay = document.createElement('div');
  overlay.id = 'nk-widget-overlay';
  overlay.innerHTML = '<div id="nk-widget-frame-wrap">' +
    '<button id="nk-widget-close">&times;</button>' +
    '<iframe id="nk-widget-iframe" loading="lazy"></iframe></div>';
  document.body.appendChild(overlay);

  var iframe = document.getElementById('nk-widget-iframe');
  var closeBtn = document.getElementById('nk-widget-close');

  function open() {
    if (!iframe.src) iframe.src = kalkulatorUrl;
    overlay.classList.add('nk-open');
  }
  function close() { overlay.classList.remove('nk-open'); }

  bubble.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') close(); });
})();
