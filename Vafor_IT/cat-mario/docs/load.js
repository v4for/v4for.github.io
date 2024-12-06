var Dlm;
var Module = {
  ios: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  screen: document.getElementById('container'),
  canvas: document.getElementById('canvas'),
  pause: false,
  ready: false,
  status: 'loading',
  setStatus: function (text) {
    Module.status = text;
  }
};

window.onerror = function (event) {
    $('#error').show();
    $('#error_text').text(event);
};

window.onpopstate = function() {
  if (history.state == 'title') {
    if (Module.ready) Module["_dlm_title"]();
    $('#title').show();
    $('#settings_window').hide();
    Module.pause = false;
  }
}

history.replaceState('title', '', location.pathname);

(function (Module) {
    var canvas = Module.canvas;
    var mainTask = null;
    var canvasRect = canvas.getBoundingClientRect();
    canvas.height = canvas.width * canvasRect.height / canvasRect.width;

    var angle = 0;
    function loading() {
      if (!Module.dlm && Dlm) {
        Module.dlm = Dlm(Module);
      }
      if (!Module.loading && Module.status == '') {
        Module.ready = true;
        Module["_dlm_init"]();
        Module["_dlm_frame"]();
        mainTask = game;

        if (Module.autoEnterGame) {
            Module.startGame();
        }
        else {
          $('#title').show();
        }
        return;
      }

      var ctx = canvas.getContext('2d');
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.font = '20px sans-serif';
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'white';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.globalAlpha = 0.5;
      ctx.fillText('加载中...', 0, 40);

      var t = Math.PI * 2 * 0.9;
      var step = t / 20;
      ctx.rotate(angle);
      for (var i = 0; i < t; i += step) {
        ctx.globalAlpha = i / t * 0.5;
        ctx.beginPath();
        ctx.arc(0, 0, 20, i, i + step);
        ctx.stroke();
      }
      angle += 0.1;

      ctx.restore();

    }

    function game() {
      if (Module.pause === false) {
        Module["_dlm_frame"]();
      }
    }

    mainTask = loading;
    function runFrame() {
      if (mainTask) mainTask();
      window.requestAnimationFrame(runFrame);
    }
    runFrame();
})(Module);

$('#startgame').click(function () {
    history.pushState('game', '', location.href);
    Module["_dlm_start"]();
    $('#title').hide();
    $('#canvas').focus();
    if (Module.unlockAudio) {
        Module.unlockAudio();
        Module.unlockAudio = null;
    }
});

$('#settings').click(function () {
    $('#settings_se').prop('checked', !localStorage.disableSe);
    $('#settings_bgm').prop('checked', !localStorage.disableBgm);
    $('#settings_onehand').prop('checked', !!localStorage.onehandMode);
    $('#settings_window').show();
});

$('#settings_back').click(function () {
    $('#settings_window').hide();
});

$('#settings_se').change(function() {
    localStorage.setItem('disableSe', $(this).prop('checked') ? '' : '1');
});

$('#settings_bgm').change(function() {
    localStorage.setItem('disableBgm', $(this).prop('checked') ? '' : '1');
});

$('#settings_onehand').change(function() {
    localStorage.setItem('onehandMode', $(this).prop('checked') ? '1' : '');
});

$('#settings_cleardata').click(function() {
  if (confirm('游戏进度将被删除，确定吗？')) {
    Module['_dlm_reset']();
  }
});

$('#error_close').click(function() {
    $('#error').hide();
    location.reload();
});

// 不允许屏幕移动
$(function() {
    var supportsPassiveOption = false;
    try {
        addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveOption = true;
            }
        }));
    } catch(e) {}

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, supportsPassiveOption ? {
      capture: false,
      passive: false
    } : false);
});

