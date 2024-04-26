//"use strict";
var LibraryDLM = {
    $gfxContext: null,
    $DLM: {
        audioCtx: null,
        audioBuffer: [],
        audioSources: [],
        bgmId: 0,
        bgmPlaying: 0,
        bgmCurrent: 0,
        bgmSource: null,
        mirror: false,
        images: [],
        fontSize: 14,
        fontType: 0,
        color: 'white',
        mouse: 0,
        touch: 0,
        key: 0,

    },

    //------------------------------------------------------------------------------
    // Graphics
    //------------------------------------------------------------------------------

    graphics_init: function() {
      DLM.images.push(null);
    },

    getscreenheight: function () {
        return Module['canvas'].height;
    },

    loadimage: function(filename) {
        filename = UTF8ToString(filename);
        var img = new Image();
        img.src = filename;
        DLM.images.push({
            img: img,
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        });
        return DLM.images.length - 1;
    },

    subimage: function(x, y, w, h, img) {
        var src = DLM.images[img];
        DLM.images.push({
            img: src.img,
            x: x,
            y: y,
            w: w,
            h: h
        });
        return DLM.images.length - 1;
    },

    getimagesize: function(img, pw, ph) {
        var src = DLM.images[img];
        if (src) {
          setValue(pw, src.w, 'i32');
          setValue(ph, src.h, 'i32');
        }
        else {
          setValue(pw, 0, 'i32');
          setValue(ph, 0, 'i32');
        }
    },

    clearscreen: function() {
        gfxContext.fillStyle = DLM.color;
        gfxContext.fillRect(0, 0, 480, Module['canvas'].height);
    },

    drawline: function(x, y, w, h) {
        gfxContext.beginPath();
        gfxContext.moveTo(x, y);
        gfxContext.lineTo(w, h);
        gfxContext.closePath();
        gfxContext.strokeStyle = DLM.color;
        gfxContext.stroke();
    },

    drawrect: function(x, y, w, h) {
        if (x + w < 0 || x > 480)
          return;
        gfxContext.strokeStyle = DLM.color;
        gfxContext.strokeRect(x, y, w, h);
    },

    fillrect: function(x, y, w, h) {
        if (x + w < 0 || x > 480)
          return;
        gfxContext.fillStyle = DLM.color;
        gfxContext.fillRect(x, y, w, h);
    },

    drawarc: function(x, y, w, h) {
        gfxContext.lineWidth = 0.5;
        gfxContext.arc(x, y, w, 0, Math.PI * 2);
        gfxContext.strokeStyle = DLM.color;
        gfxContext.stroke();
    },

    fillarc: function(x, y, w, h) {
        gfxContext.beginPath();
        gfxContext.arc(x, y, w, 0, Math.PI * 2);
        gfxContext.closePath();
        gfxContext.fillStyle = DLM.color;
        gfxContext.fill();
    },


    drawimage: function(img, x, y) {
        var src = DLM.images[img];
        if (!src)
            return;

        if (x + src.w < 0 || x > 480)
          return;

        gfxContext.fillStyle = 'white';
        if (DLM.mirror) {
            gfxContext.save();
            gfxContext.translate(x + src.w, y);
            gfxContext.scale(-1, 1);
            gfxContext.drawImage(src.img, src.x, src.y, src.w, src.h, 0, 0, src.w, src.h);
            gfxContext.restore();
        }
        else {
            gfxContext.drawImage(src.img, src.x, src.y, src.w, src.h, x, y, src.w, src.h);
        }
    },

    drawimageflip: function(img, x, y) {
        var src = DLM.images[img];
        if (!src)
            return;

        if (x + src.w < 0 || x > 480)
          return;

        gfxContext.fillStyle = 'white';
        gfxContext.save();
        gfxContext.translate(x, y + src.h);
        gfxContext.scale(1, -1);
        gfxContext.drawImage(src.img, src.x, src.y, src.w, src.h, 0, 0, src.w, src.h);
        gfxContext.restore();
    },

    setfont: function (size, thick) {
        DLM.fontSize = size;
    },

    setfonttype: function(type) {
        DLM.fontType = type;
    },

    drawstring: function(x, y, str) {
        str = UTF8ToString(str);
        gfxContext.font = DLM.fontSize + 'px sans-serif';
        if (DLM.fontType == 1) {
            gfxContext.fillStyle = 'black';
            gfxContext.fillText(str, x, y - 1);
            gfxContext.fillText(str, x, y + 1);
            gfxContext.fillText(str, x - 1, y);
            gfxContext.fillText(str, x + 1, y);

        }
        gfxContext.textAlign = 'left';
        gfxContext.fillStyle = DLM.color;
        gfxContext.fillText(str, x, y);
    },

    drawstringc: function(x, y, str) {
        str = UTF8ToString(str);
        gfxContext.font = DLM.fontSize + 'px sans-serif';
        if (DLM.fontType == 1) {
            gfxContext.fillStyle = 'black';
            gfxContext.fillText(str, x, y - 1);
            gfxContext.fillText(str, x, y + 1);
            gfxContext.fillText(str, x - 1, y);
            gfxContext.fillText(str, x + 1, y);

        }
        gfxContext.fillStyle = DLM.color;
        gfxContext.textAlign = 'center';
        gfxContext.fillText(str, x, y);
    },

    setcolor: function(r, g, b) {
        DLM.color = 'rgba(' + r + ',' + g + ',' + b + ',' + 255 + ')';
    },

    setmirror: function(mirror) {
        DLM.mirror = (mirror != 0);
    },

    begindraw: function() {
        var canvas = Module['canvas'];
        gfxContext = canvas.getContext('2d');
        gfxContext.textBaseline = 'top';
        gfxContext.strokeStyle = 'black';
    },

    enddraw: function() {
    },

    drawpad : function() {
        var canvas = Module['canvas'];
        var h = canvas.height;
        if (h <= 420)
            return;

        gfxContext.clearRect(0, 420, canvas.width, h - 420);
        gfxContext.save();

        var key = [];
        var k = DLM.touch | DLM.mouse;
        key[0] = (k & 1) != 0;
        key[1] = (k & 8) != 0;
        key[2] = (k & 2) != 0;
        key[3] = (k & 4) != 0;

        gfxContext.fillStyle = 'white';
        gfxContext.strokeStyle = 'black';
        gfxContext.strokeWidth = 2;

        var singleHand = localStorage.onehandMode;
        if (singleHand) {
            key[1] = (k & 0x10) != 0;
            gfxContext.translate(240, 420 + (h - 420) / 2);
        }
        else {
            gfxContext.translate(120, 420 + (h - 420) / 2);
        }

        for (var i = 0; i < 4; i++) {
            gfxContext.globalAlpha =  key[i] ? 0.6 : 0.3;
            gfxContext.beginPath();
            gfxContext.moveTo(-5, 0);
            gfxContext.lineTo(-35, -30);
            gfxContext.lineTo(-80, -30);
            gfxContext.lineTo(-80, 30);
            gfxContext.lineTo(-35, 30);
            gfxContext.closePath();
            gfxContext.fill();
            gfxContext.stroke();
            gfxContext.rotate(Math.PI / 2);
        }

        if (!singleHand) {
            gfxContext.translate(260, 0);
            gfxContext.globalAlpha = (k & 0x10) != 0 ? 0.6 : 0.3;
            gfxContext.fillRect(-40, -40, 80, 80);
            gfxContext.strokeRect(-40, -40, 80, 80);
        }

        gfxContext.restore();
    },

    //------------------------------------------------------------------------------
    // Input
    //------------------------------------------------------------------------------
    input_init: function() {
        DLM.key = 0;
        DLM.touch = 0;
        DLM.mouse = 0;

        var canvas = Module['canvas'];
        var key_callback = function (e) {
            e.preventDefault();
            if (e.repeat)
                return;

            var buttons = 0;
            switch (e.keyCode) {
                case 37: buttons |= 1; break;
                case 38: buttons |= 16; break;
                case 39: buttons |= 2; break;
                case 40: buttons |= 4; break;
                case 13: buttons |= 32; break;
                case 32: buttons |= 16; break;
            }

            if (e.type == 'keydown') {
                DLM.key |= buttons;
            }
            else if (e.type == 'keyup') {
                DLM.key = DLM.key & (~buttons);
            }
        };

        var check_touch = function (x, y, x1, y1, x2, y2) {
            return (x > x1 && x < x2 && y > y1 && y < y2);
        }

        var check_pad = function (px, py) {
            var rect = canvas.getBoundingClientRect();
            var x = (px - rect.left) / (rect.right - rect.left) * canvas.width;
            var y = (py - rect.top) / (rect.bottom - rect.top) * canvas.height;
            var touch = 0;
            var cy = 420 + (canvas.height - 420) / 2;
            var singleHand = localStorage.onehandMode;
            
            if (check_touch(x, y, 0, 0, 480, 420)) {
                touch |= 0x20;
            } else if (singleHand) {
                var cx = 240;
                var w1 = 40 * 1.0;
                var w2 = 200 * 1.0;
                if (check_touch(x, y, cx - w1, cy + w1, cx + w1, cy + w2)) touch |= 4; // down
                if (check_touch(x, y, cx - w1, cy - w2, cx + w1, cy - w1)) touch |= 16; // up
                if (check_touch(x, y, cx - w2, cy - w1, cx, cy + w1)) touch |= 1; // left
                if (check_touch(x, y, cx, cy - w1, cx + w2, cy + w1)) touch |= 2; // right

                if (check_touch(x, y, cx - w2, cy - w2, cx - w1, cy - w1)) touch |= (16 | 1); // upleft
                if (check_touch(x, y, cx + w1, cy - w2, cx + w2, cy - w1)) touch |= (16 | 2); // upright
                if (check_touch(x, y, cx - w2, cy + w1, cx - w1, cy + w2)) touch |= (4 | 1); // downleft
                if (check_touch(x, y, cx + w1, cy + w1, cx + w2, cy + w2)) touch |= (4 | 2); // downright
            }
            else {
                var cx = 120;
                var w1 = 40;
                var w2 = 120;
                if (check_touch(x, y, 380 - 80, cy - 80, 380 + 80, cy + 80)) touch |= 0x10; // jump
                else if (check_touch(x, y, cx - w1, cy + w1, cx + w1, cy + w2)) touch |= 4; // down
                else if (check_touch(x, y, cx - w1, cy - w2, cx + w1, cy - w1)) touch |= 8; // up
                else if (check_touch(x, y, cx - w2, cy - w1, cx, cy + w1)) touch |= 1; // left
                else if (check_touch(x, y, cx, cy - w1, cx + w2, cy + w1)) touch |= 2; // right
            }

            return touch;
        }

        var mouse_callback = function (e) {
            DLM.mouse = 0;
            if (e.buttons) {
                DLM.mouse = check_pad(e.clientX, e.clientY);
            }
        }

        var touch_callback = function (e) {
            e.preventDefault();
            var touch = 0;

            for (var i = 0; i < e.touches.length; i++) {
                var t = e.touches.item(i);
                touch |= check_pad(t.clientX, t.clientY);
            }
            DLM.touch = touch;
        }

        canvas.addEventListener('keydown', key_callback, true);
        canvas.addEventListener('keyup', key_callback, true);
        canvas.addEventListener('mousedown', mouse_callback, true);
        canvas.addEventListener('mouseup', mouse_callback, true);
        canvas.addEventListener('mousemove', mouse_callback, true);
        canvas.addEventListener('touchstart', touch_callback, true);
        canvas.addEventListener('touchend', touch_callback, true);
        canvas.addEventListener('touchmove', touch_callback, true);
        canvas.addEventListener('touchcancel', touch_callback, true);

        if (Module.ios) {
          canvas.addEventListener('touchend', function() {
            if (Module.unlockAudio) {
              Module.unlockAudio();
              Module.unlockAudio = null;
            }
          }, true);
        }
    },

    input_waitkey: function() {
    },

    input_get: function() {
        return DLM.key | DLM.touch | DLM.mouse;
    },

    getrand: function(maxValue) {
        return Math.floor(Math.random() * maxValue);
    },

    gettime: function() {
        var t = new Date().getTime();
        return t % 0xfffffff;
    },

    //------------------------------------------------------------------------------
    // Sound
    //------------------------------------------------------------------------------
    sound_init: function() {
        Module.unlockAudio = function() {
            if (!DLM.audioCtx)
              return;

            // create empty buffer
            var buffer = DLM.audioCtx.createBuffer(1, 1, 22050);
            var source = DLM.audioCtx.createBufferSource();
            source.buffer = buffer;

            // connect to output (your speakers)
            source.connect(DLM.audioCtx.destination);

            // play the file
            source.start(0);
        };

        DLM.loadAudio = function (id, url, cb) {
            if (!DLM.audioCtx)
              return;

            if (DLM.audioBuffer[id]) {
                if (cb) cb(id);
                return;
            }

            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function (e) {
                DLM.audioCtx.decodeAudioData(this.response, function (buffer) {
                    DLM.audioBuffer[id] = buffer;
                    if (cb) cb(id);
                });
            };
            DLM.audioBuffer[id] = xhr;
            xhr.send();
        };

        DLM.bgmUpdate = function() {
            if (!DLM.audioCtx)
              return;

            if (DLM.bgmPlaying == DLM.bgmCurrent)
                return;

            // stop current bgm
            if (DLM.bgmSource) {
                try {DLM.bgmSource.stop(0)} catch (err) {}
                DLM.bgmSource = null;
            }

            if (localStorage.disableBgm)
                return;

            var buf = DLM.audioBuffer[DLM.bgmPlaying];
            if (buf instanceof AudioBuffer) {
                var audioCtx = DLM.audioCtx;
                var source = audioCtx.createBufferSource();
                source.buffer = buf;
                source.loop = true;
                var gainNode = audioCtx.createGain();
                source.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                gainNode.gain.value = 0.5;
                source.start(0);
                DLM.bgmSource = source;
                DLM.bgmCurrent = DLM.bgmPlaying;
            }
        }

        DLM.loadSe = function() {
            DLM.loadAudio(1, 'snd/se1.mp3');
            DLM.loadAudio(2, 'snd/se2.mp3');
            DLM.loadSe = null;
        };

        var audioCtx;
        try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {}

        if (audioCtx) {
            DLM.audioCtx = audioCtx;

            // Old Web Audio API (e.g. Safari 6.0.5) had an inconsistently named createGainNode function.
            if (typeof (audioCtx.createGain) === 'undefined') audioCtx.createGain = audioCtx.createGainNode;


            var visibilitychange = function () {
                if (document.visibilityState == 'visible') {
                    audioCtx.resume();
                }
                else {
                    audioCtx.suspend();
                }
            };
            document.addEventListener("visibilitychange", visibilitychange);
        }
    },

    soundplay: function(x) {
        if (localStorage.disableSe) {
          return;
        }

        var audioCtx = DLM.audioCtx;
        if (!audioCtx)
          return;

        if (DLM.loadSe)
            DLM.loadSe();

        var i = 0;
        var s = 0;
        var d = 0;
        switch (x) {
            case 1: i = 1; s = 0.000; d = 0.641; break;
            case 3: i = 1; s = 0.700; d = 0.432; break;
            case 4: i = 1; s = 1.200; d = 0.928; break;
            case 5: i = 1; s = 2.200; d = 0.458; break;
            case 6: i = 1; s = 2.700; d = 0.249; break;
            case 7: i = 1; s = 3.000; d = 0.928; break;
            case 8: i = 1; s = 4.000; d = 0.928; break;
            case 9: i = 1; s = 5.000; d = 0.928; break;
            case 10: i = 1; s = 6.000; d = 0.432; break;
            case 11: i = 1; s = 6.500; d = 6.936; break;
            case 12: i = 1; s = 13.500; d = 3.253; break;

            case 13: i = 2; s = 0.000; d = 0.275; break;
            case 14: i = 2; s = 0.300; d = 0.118; break;
            case 15: i = 2; s = 0.500; d = 0.797; break;
            case 16: i = 2; s = 1.400; d = 4.428; break;
            case 17: i = 2; s = 5.900; d = 6.936; break;
            case 18: i = 2; s = 13.000; d = 1.476; break;
        }

        if (i > 0) {
            var buf = DLM.audioBuffer[i];
            if (buf instanceof AudioBuffer) {
                var source = audioCtx.createBufferSource();
                source.buffer = buf;
                source.connect(audioCtx.destination);
                source.start(0, s, d);
                source.onended = function () {
                    if (DLM.audioSources[x] == source) {
                        DLM.audioSources[x] = null;
                    }
                }
                DLM.audioSources[x] = source;
            }
        }
    },

    soundstop: function(x) {
        var s = DLM.audioSources[x];
        if (s) {
            try { s.stop(0); } catch (err) {}
            DLM.audioSources[x] = null;
        }
    },

    soundcheck: function(x) {
        return DLM.audioSources[x] != null;
    },

    bgmchange: function (x) {
        DLM.bgmId = x;
        if (localStorage.disableBgm) {
          return;
        }

        var buf = DLM.audioBuffer[x];
        if (!buf) {
            var src;
            switch (DLM.bgmId) {
                case 100: src = "snd/field.mp3"; break;
                case 103: src = "snd/dungeon.mp3"; break;
                case 104: src = "snd/star4.mp3"; break;
                case 105: src = "snd/castle.mp3"; break;
                case 106: src = "snd/puyo.mp3"; break;
                default: return;
            }
            DLM.loadAudio(DLM.bgmId, src, function (id) {
                DLM.bgmUpdate();
            });
        }
    },

    bgmstop: function (x) {
        DLM.bgmPlaying = 0;
        DLM.bgmUpdate();
    },

    bgmplay: function(x) {
        DLM.bgmPlaying = DLM.bgmId;
        DLM.bgmCurrent = 0;
        DLM.bgmUpdate();
    },

    //------------------------------------------------------------------------------
    // AD
    //------------------------------------------------------------------------------
    adshow: function() {
        var ad = document.getElementById('ad');
        if (ad) {
            DLM.ad = ad;
        }
        if (DLM.ad) {
            var ad = DLM.ad;
            var canvas = Module['canvas'];
            var rect = canvas.getBoundingClientRect();
            ad.style.left = rect.left + 'px';
            ad.style.top = rect.top + 'px';
            ad.style.width = rect.width + 'px';
            ad.style.height = 100;
            DLM.ad.hidden = false;
        }
    },

    adhide: function() {
        if (DLM.ad) {
            DLM.ad.hidden = true;
        }
    },

    dlm_score: function(type, score) {
    }
};
autoAddDeps(LibraryDLM, '$DLM', '$gfxContext');
mergeInto(LibraryManager.library, LibraryDLM);
