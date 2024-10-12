function makeObj(type, name, options, build){return {type, name, options, build}}
(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.from;

    lib.Body_Dragon = makeObj("Container", 'Body_Dragon', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Dragon.png"]))
            .setTransform(-94, -67, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Dragon = makeObj("Container", 'Tail_Dragon', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Dragon 1.png"]))
            .setTransform(-22, 3, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Dragon = makeObj("MovieClip", 'Animated_Dragon',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Dragon();
        var instance1 = new lib.Body_Dragon();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-40, -15, 0.922, 0.922);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 44.8,
                    r: 0
                },
                "2": {
                    x: 0.15,
                    y: 44.65,
                    r: -0.175
                },
                "3": {
                    x: 0.122,
                    y: 44.749,
                    r: -0.174
                },
                "4": {
                    x: 0.074,
                    y: 44.75,
                    r: -0.169
                },
                "5": {
                    x: 0.084,
                    y: 44.746,
                    r: -0.157
                },
                "6": {
                    x: 0.085,
                    y: 44.769,
                    r: -0.134
                },
                "7": {
                    x: 0.057,
                    y: 44.771,
                    r: -0.095
                },
                "8": {
                    x: 0.089,
                    y: 44.752,
                    r: -0.037
                },
                "9": {
                    x: 0.062,
                    y: 44.835,
                    r: 0.037
                },
                "10": {
                    x: 0.052,
                    y: 44.829,
                    r: 0.095
                },
                "11": {
                    x: 0.141,
                    y: 44.792,
                    r: 0.134
                },
                "12": {
                    x: 0.143,
                    y: 44.815,
                    r: 0.157
                },
                "13": {
                    x: 0.134,
                    y: 44.788,
                    r: 0.169
                },
                "14": {
                    x: 0.147,
                    y: 44.82,
                    r: 0.174
                },
                "15": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "16": {
                    x: 0.018,
                    y: 44.799,
                    r: 0.174
                },
                "17": {
                    x: -0.002,
                    r: 0.171
                },
                "18": {
                    x: 0,
                    y: 44.797,
                    r: 0.163
                },
                "19": {
                    x: -0.015,
                    y: 44.784,
                    r: 0.148
                },
                "20": {
                    x: 0.013,
                    y: 44.79,
                    r: 0.123
                },
                "21": {
                    x: -0.007,
                    y: 44.771,
                    r: 0.085
                },
                "22": {
                    x: -0.022,
                    y: 44.8,
                    r: 0.033
                },
                "23": {
                    x: 0.053,
                    y: 44.843,
                    r: -0.033
                },
                "24": {
                    x: 0.039,
                    y: 44.848,
                    r: -0.085
                },
                "25": {
                    x: 0.06,
                    y: 44.835,
                    r: -0.123
                },
                "26": {
                    x: 0.035,
                    y: 44.841,
                    r: -0.148
                },
                "27": {
                    x: 0.033,
                    y: 44.819,
                    r: -0.163
                },
                "28": {
                    x: 0.064,
                    y: 44.851,
                    r: -0.171
                },
                "29": {
                    x: 0.037,
                    y: 44.857,
                    r: -0.174
                },
                "30": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                },
                "32": {
                    x: -0.036,
                    y: 44.845,
                    r: -0.16
                },
                "33": {
                    x: -0.048,
                    y: 44.827,
                    r: -0.118
                },
                "34": {
                    x: -0.021,
                    y: 44.832,
                    r: -0.046
                },
                "35": {
                    x: -0.001,
                    y: 44.814,
                    r: 0.046
                },
                "36": {
                    x: 0.016,
                    y: 44.805,
                    r: 0.118
                },
                "37": {
                    x: -0.004,
                    y: 44.815,
                    r: 0.16
                },
                "38": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "39": {
                    x: -0.014,
                    y: 44.795,
                    r: 0.16
                },
                "40": {
                    x: -0.001,
                    y: 44.777,
                    r: 0.118
                },
                "41": {
                    x: -0.028,
                    y: 44.782,
                    r: 0.046
                },
                "42": {
                    x: 0.051,
                    y: 44.862,
                    r: -0.046
                },
                "43": {
                    x: 0.034,
                    y: 44.854,
                    r: -0.118
                },
                "44": {
                    x: 0.053,
                    y: 44.864,
                    r: -0.16
                },
                "45": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Oarfish = makeObj("Container", 'Body_Oarfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Oarfish.png"]))
            .setTransform(-76, -85, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Oarfish = makeObj("Container", 'Tail_Oarfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Oarfish 1.png"]))
            .setTransform(-20, -16, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Oarfish = makeObj("MovieClip", 'Animated_Oarfish',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Oarfish();
        var instance1 = new lib.Body_Oarfish();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -31);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 1.6,
                    y: 50,
                    sx: 1,
                    sy: 1,
                    r: 0
                },
                "2": {
                    y: 49.95,
                    r: -0.175
                },
                "3": {
                    x: 1.569,
                    y: 50,
                    r: -0.174
                },
                "4": {
                    x: 1.597,
                    y: 50.007,
                    r: -0.169
                },
                "5": {
                    x: 1.594,
                    y: 50.017,
                    r: -0.157
                },
                "6": {
                    x: 1.518,
                    y: 50.016,
                    r: -0.134
                },
                "7": {
                    x: 1.533,
                    y: 50.005,
                    r: -0.095
                },
                "8": {
                    x: 1.552,
                    y: 49.976,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.037
                },
                "9": {
                    x: 1.522,
                    y: 49.935,
                    r: 0.037
                },
                "10": {
                    x: 1.549,
                    y: 49.927,
                    r: 0.095
                },
                "11": {
                    x: 1.529,
                    y: 49.98,
                    r: 0.134
                },
                "12": {
                    x: 1.555,
                    y: 49.993,
                    r: 0.157
                },
                "13": {
                    x: 1.53,
                    y: 49.959,
                    r: 0.169
                },
                "14": {
                    x: 1.519,
                    y: 49.989,
                    r: 0.174
                },
                "15": {
                    x: 1.55,
                    y: 49.9,
                    r: 0.175
                },
                "16": {
                    x: 1.57,
                    y: 49.999,
                    r: 0.174
                },
                "17": {
                    x: 1.565,
                    y: 49.994,
                    r: 0.171
                },
                "18": {
                    x: 1.557,
                    y: 49.98,
                    r: 0.163
                },
                "19": {
                    x: 1.571,
                    y: 49.995,
                    r: 0.148
                },
                "20": {
                    x: 1.577,
                    y: 50.01,
                    r: 0.123
                },
                "21": {
                    x: 1.598,
                    y: 49.975,
                    r: 0.085
                },
                "22": {
                    x: 1.595,
                    y: 49.951,
                    r: 0.033
                },
                "23": {
                    x: 1.587,
                    y: 49.997,
                    r: -0.033
                },
                "24": {
                    x: 1.573,
                    y: 49.969,
                    sx: 1,
                    sy: 1,
                    r: -0.085
                },
                "25": {
                    x: 1.566,
                    y: 50.002,
                    r: -0.123
                },
                "26": {
                    x: 1.556,
                    y: 49.984,
                    r: -0.148
                },
                "27": {
                    x: 1.573,
                    y: 50.016,
                    r: -0.163
                },
                "28": {
                    x: 1.589,
                    y: 50.024,
                    r: -0.171
                },
                "29": {
                    x: 1.574,
                    y: 50.022,
                    r: -0.174
                },
                "30": {
                    x: 1.6,
                    y: 49.95,
                    r: -0.175
                },
                "32": {
                    x: 1.578,
                    y: 50.008,
                    r: -0.168
                },
                "33": {
                    x: 1.517,
                    y: 50.007,
                    r: -0.123
                },
                "34": {
                    x: 1.507,
                    y: 49.99,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0
                },
                "35": {
                    x: 1.56,
                    y: 49.979,
                    r: 0.123
                },
                "36": {
                    x: 1.547,
                    y: 49.98,
                    r: 0.168
                },
                "37": {
                    x: 1.55,
                    y: 49.9,
                    r: 0.175
                },
                "38": {
                    x: 1.586,
                    y: 49.995,
                    r: 0.172
                },
                "39": {
                    x: 1.589,
                    y: 50.007,
                    r: 0.153
                },
                "40": {
                    x: 1.568,
                    y: 49.961,
                    r: 0.101
                },
                "41": {
                    x: 1.595,
                    y: 50,
                    r: 0
                },
                "42": {
                    x: 1.574,
                    y: 49.99,
                    sx: 1,
                    sy: 1,
                    r: -0.101
                },
                "43": {
                    y: 50.004,
                    r: -0.153
                },
                "44": {
                    x: 1.566,
                    y: 50.014,
                    r: -0.172
                },
                "45": {
                    x: 1.6,
                    y: 49.95,
                    r: -0.175
                },
                "46": {
                    x: 4,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Koi = makeObj("Container", 'Body_Koi', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Koi.png"]))
            .setTransform(-70, -48, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Koi = makeObj("Container", 'Tail_Koi', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Koi 1.png"]))
            .setTransform(-29, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Koi = makeObj("MovieClip", 'Animated_Koi',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Koi();
        var instance1 = new lib.Body_Koi();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -31);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    sx: 1,
                    sy: 1,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.022,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.075,
                    y: 50.095,
                    r: -0.385
                },
                "5": {
                    x: -0.042,
                    y: 50.107,
                    r: -0.358
                },
                "6": {
                    x: -0.048,
                    y: 50.08,
                    r: -0.304
                },
                "7": {
                    x: -0.044,
                    y: 50.078,
                    r: -0.217
                },
                "8": {
                    x: -0.088,
                    y: 50.08,
                    r: -0.086
                },
                "9": {
                    x: -0.056,
                    y: 50.074,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.083
                },
                "10": {
                    x: -0.094,
                    y: 50.026,
                    r: 0.214
                },
                "11": {
                    x: -0.067,
                    y: 50.051,
                    r: 0.302
                },
                "12": {
                    x: -0.105,
                    y: 50.084,
                    r: 0.355
                },
                "13": {
                    x: -0.088,
                    y: 50.085,
                    r: 0.383
                },
                "14": {
                    x: -0.095,
                    y: 50.08,
                    r: 0.393
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.394
                },
                "16": {
                    x: 0.046,
                    y: 50.099,
                    r: 0.393
                },
                "17": {
                    x: 0.024,
                    y: 50.098,
                    r: 0.387
                },
                "18": {
                    x: 0.064,
                    y: 50.085,
                    r: 0.369
                },
                "19": {
                    x: 0.045,
                    y: 50.115,
                    r: 0.334
                },
                "20": {
                    x: 0.043,
                    y: 50.064,
                    r: 0.277
                },
                "21": {
                    x: 0.053,
                    y: 50.044,
                    r: 0.192
                },
                "22": {
                    x: 0.05,
                    y: 50.062,
                    r: 0.073
                },
                "23": {
                    x: 0.073,
                    y: 50.077,
                    r: -0.075
                },
                "24": {
                    x: 0.115,
                    y: 50.084,
                    sx: 1,
                    sy: 1,
                    r: -0.194
                },
                "25": {
                    x: 0.114,
                    y: 50.073,
                    r: -0.279
                },
                "26": {
                    x: 0.101,
                    y: 50.079,
                    r: -0.337
                },
                "27": {
                    x: 0.126,
                    y: 50.051,
                    r: -0.371
                },
                "28": {
                    x: 0.113,
                    y: 50.079,
                    r: -0.389
                },
                "29": {
                    x: 0.046,
                    y: 50.046,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.061,
                    y: 50.12,
                    r: -0.364
                },
                "33": {
                    x: -0.083,
                    y: 50.074,
                    r: -0.268
                },
                "34": {
                    x: -0.061,
                    y: 50.085,
                    r: -0.106
                },
                "35": {
                    x: -0.059,
                    y: 50.041,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.104
                },
                "36": {
                    x: -0.085,
                    y: 50.013,
                    r: 0.265
                },
                "37": {
                    x: -0.095,
                    y: 50.058,
                    r: 0.362
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.394
                },
                "39": {
                    x: 0.061,
                    y: 50.125,
                    r: 0.362
                },
                "40": {
                    x: 0.085,
                    y: 50.043,
                    r: 0.265
                },
                "41": {
                    x: 0.073,
                    y: 50.076,
                    r: 0.104
                },
                "42": {
                    x: 0.095,
                    y: 50.058,
                    sx: 1,
                    sy: 1,
                    r: -0.106
                },
                "43": {
                    x: 0.094,
                    y: 50.091,
                    r: -0.267
                },
                "44": {
                    x: 0.122,
                    r: -0.364
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Mosasaurus = makeObj("Container", 'Body_Mosasaurus', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Mosasaurus.png"]))
            .setTransform(-80, -68, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Mosasaurus = makeObj("Container", 'Tail_Mosasaurus', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Mosasaurus 1.png"]))
            .setTransform(-19, -13, 0.5, 0.528);
        this.addChild(instance1);
    });

    lib.Animated_Mosasaurus = makeObj("MovieClip", 'Animated_Mosasaurus',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Mosasaurus();
        var instance1 = new lib.Body_Mosasaurus();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -42);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 44.8,
                    r: 0
                },
                "2": {
                    x: 0.15,
                    y: 44.65,
                    r: -0.175
                },
                "3": {
                    x: 0.122,
                    y: 44.749,
                    r: -0.174
                },
                "4": {
                    x: 0.074,
                    y: 44.75,
                    r: -0.169
                },
                "5": {
                    x: 0.084,
                    y: 44.746,
                    r: -0.157
                },
                "6": {
                    x: 0.085,
                    y: 44.769,
                    r: -0.134
                },
                "7": {
                    x: 0.057,
                    y: 44.771,
                    r: -0.095
                },
                "8": {
                    x: 0.089,
                    y: 44.752,
                    r: -0.037
                },
                "9": {
                    x: 0.062,
                    y: 44.835,
                    r: 0.037
                },
                "10": {
                    x: 0.052,
                    y: 44.829,
                    r: 0.095
                },
                "11": {
                    x: 0.141,
                    y: 44.792,
                    r: 0.134
                },
                "12": {
                    x: 0.143,
                    y: 44.815,
                    r: 0.157
                },
                "13": {
                    x: 0.134,
                    y: 44.788,
                    r: 0.169
                },
                "14": {
                    x: 0.147,
                    y: 44.82,
                    r: 0.174
                },
                "15": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "16": {
                    x: 0.018,
                    y: 44.799,
                    r: 0.174
                },
                "17": {
                    x: -0.002,
                    r: 0.171
                },
                "18": {
                    x: 0,
                    y: 44.797,
                    r: 0.163
                },
                "19": {
                    x: -0.015,
                    y: 44.784,
                    r: 0.148
                },
                "20": {
                    x: 0.013,
                    y: 44.79,
                    r: 0.123
                },
                "21": {
                    x: -0.007,
                    y: 44.771,
                    r: 0.085
                },
                "22": {
                    x: -0.022,
                    y: 44.8,
                    r: 0.033
                },
                "23": {
                    x: 0.053,
                    y: 44.843,
                    r: -0.033
                },
                "24": {
                    x: 0.039,
                    y: 44.848,
                    r: -0.085
                },
                "25": {
                    x: 0.06,
                    y: 44.835,
                    r: -0.123
                },
                "26": {
                    x: 0.035,
                    y: 44.841,
                    r: -0.148
                },
                "27": {
                    x: 0.033,
                    y: 44.819,
                    r: -0.163
                },
                "28": {
                    x: 0.064,
                    y: 44.851,
                    r: -0.171
                },
                "29": {
                    x: 0.037,
                    y: 44.857,
                    r: -0.174
                },
                "30": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                },
                "32": {
                    x: -0.036,
                    y: 44.845,
                    r: -0.16
                },
                "33": {
                    x: -0.048,
                    y: 44.827,
                    r: -0.118
                },
                "34": {
                    x: -0.021,
                    y: 44.832,
                    r: -0.046
                },
                "35": {
                    x: -0.001,
                    y: 44.814,
                    r: 0.046
                },
                "36": {
                    x: 0.016,
                    y: 44.805,
                    r: 0.118
                },
                "37": {
                    x: -0.004,
                    y: 44.815,
                    r: 0.16
                },
                "38": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "39": {
                    x: -0.014,
                    y: 44.795,
                    r: 0.16
                },
                "40": {
                    x: -0.001,
                    y: 44.777,
                    r: 0.118
                },
                "41": {
                    x: -0.028,
                    y: 44.782,
                    r: 0.046
                },
                "42": {
                    x: 0.051,
                    y: 44.862,
                    r: -0.046
                },
                "43": {
                    x: 0.034,
                    y: 44.854,
                    r: -0.118
                },
                "44": {
                    x: 0.053,
                    y: 44.864,
                    r: -0.16
                },
                "45": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Kronosaurus = makeObj("Container", 'Body_Kronosaurus', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Kronosaurus.png"]))
            .setTransform(-72, -59, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Kronosaurus = makeObj("Container", 'Tail_Kronosaurus', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Kronosaurus 1.png"]))
            .setTransform(-16, -13, 0.5, 0.535);
        this.addChild(instance1);
    });

    lib.Animated_Kronosaurus = makeObj("MovieClip", 'Animated_Kronosaurus',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Kronosaurus();
        var instance1 = new lib.Body_Kronosaurus();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -42);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 44.8,
                    r: 0
                },
                "2": {
                    x: 0.15,
                    y: 44.65,
                    r: -0.175
                },
                "3": {
                    x: 0.122,
                    y: 44.749,
                    r: -0.174
                },
                "4": {
                    x: 0.074,
                    y: 44.75,
                    r: -0.169
                },
                "5": {
                    x: 0.084,
                    y: 44.746,
                    r: -0.157
                },
                "6": {
                    x: 0.085,
                    y: 44.769,
                    r: -0.134
                },
                "7": {
                    x: 0.057,
                    y: 44.771,
                    r: -0.095
                },
                "8": {
                    x: 0.089,
                    y: 44.752,
                    r: -0.037
                },
                "9": {
                    x: 0.062,
                    y: 44.835,
                    r: 0.037
                },
                "10": {
                    x: 0.052,
                    y: 44.829,
                    r: 0.095
                },
                "11": {
                    x: 0.141,
                    y: 44.792,
                    r: 0.134
                },
                "12": {
                    x: 0.143,
                    y: 44.815,
                    r: 0.157
                },
                "13": {
                    x: 0.134,
                    y: 44.788,
                    r: 0.169
                },
                "14": {
                    x: 0.147,
                    y: 44.82,
                    r: 0.174
                },
                "15": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "16": {
                    x: 0.018,
                    y: 44.799,
                    r: 0.174
                },
                "17": {
                    x: -0.002,
                    r: 0.171
                },
                "18": {
                    x: 0,
                    y: 44.797,
                    r: 0.163
                },
                "19": {
                    x: -0.015,
                    y: 44.784,
                    r: 0.148
                },
                "20": {
                    x: 0.013,
                    y: 44.79,
                    r: 0.123
                },
                "21": {
                    x: -0.007,
                    y: 44.771,
                    r: 0.085
                },
                "22": {
                    x: -0.022,
                    y: 44.8,
                    r: 0.033
                },
                "23": {
                    x: 0.053,
                    y: 44.843,
                    r: -0.033
                },
                "24": {
                    x: 0.039,
                    y: 44.848,
                    r: -0.085
                },
                "25": {
                    x: 0.06,
                    y: 44.835,
                    r: -0.123
                },
                "26": {
                    x: 0.035,
                    y: 44.841,
                    r: -0.148
                },
                "27": {
                    x: 0.033,
                    y: 44.819,
                    r: -0.163
                },
                "28": {
                    x: 0.064,
                    y: 44.851,
                    r: -0.171
                },
                "29": {
                    x: 0.037,
                    y: 44.857,
                    r: -0.174
                },
                "30": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                },
                "32": {
                    x: -0.036,
                    y: 44.845,
                    r: -0.16
                },
                "33": {
                    x: -0.048,
                    y: 44.827,
                    r: -0.118
                },
                "34": {
                    x: -0.021,
                    y: 44.832,
                    r: -0.046
                },
                "35": {
                    x: -0.001,
                    y: 44.814,
                    r: 0.046
                },
                "36": {
                    x: 0.016,
                    y: 44.805,
                    r: 0.118
                },
                "37": {
                    x: -0.004,
                    y: 44.815,
                    r: 0.16
                },
                "38": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "39": {
                    x: -0.014,
                    y: 44.795,
                    r: 0.16
                },
                "40": {
                    x: -0.001,
                    y: 44.777,
                    r: 0.118
                },
                "41": {
                    x: -0.028,
                    y: 44.782,
                    r: 0.046
                },
                "42": {
                    x: 0.051,
                    y: 44.862,
                    r: -0.046
                },
                "43": {
                    x: 0.034,
                    y: 44.854,
                    r: -0.118
                },
                "44": {
                    x: 0.053,
                    y: 44.864,
                    r: -0.16
                },
                "45": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Crocodile = makeObj("Container", 'Body_Crocodile', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Crocodile.png"]))
            .setTransform(-60, -60, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Crocodile = makeObj("Container", 'Tail_Crocodile', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Crocodile 1.png"]))
            .setTransform(-18, -7, 0.5, 0.537);
        this.addChild(instance1);
    });

    lib.Animated_Crocodile = makeObj("MovieClip", 'Animated_Crocodile',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Crocodile();
        var instance1 = new lib.Body_Crocodile();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -42);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 44.8,
                    r: 0
                },
                "2": {
                    x: 0.15,
                    y: 44.65,
                    r: -0.175
                },
                "3": {
                    x: 0.122,
                    y: 44.749,
                    r: -0.174
                },
                "4": {
                    x: 0.074,
                    y: 44.75,
                    r: -0.169
                },
                "5": {
                    x: 0.084,
                    y: 44.746,
                    r: -0.157
                },
                "6": {
                    x: 0.085,
                    y: 44.769,
                    r: -0.134
                },
                "7": {
                    x: 0.057,
                    y: 44.771,
                    r: -0.095
                },
                "8": {
                    x: 0.089,
                    y: 44.752,
                    r: -0.037
                },
                "9": {
                    x: 0.062,
                    y: 44.835,
                    r: 0.037
                },
                "10": {
                    x: 0.052,
                    y: 44.829,
                    r: 0.095
                },
                "11": {
                    x: 0.141,
                    y: 44.792,
                    r: 0.134
                },
                "12": {
                    x: 0.143,
                    y: 44.815,
                    r: 0.157
                },
                "13": {
                    x: 0.134,
                    y: 44.788,
                    r: 0.169
                },
                "14": {
                    x: 0.147,
                    y: 44.82,
                    r: 0.174
                },
                "15": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "16": {
                    x: 0.018,
                    y: 44.799,
                    r: 0.174
                },
                "17": {
                    x: -0.002,
                    r: 0.171
                },
                "18": {
                    x: 0,
                    y: 44.797,
                    r: 0.163
                },
                "19": {
                    x: -0.015,
                    y: 44.784,
                    r: 0.148
                },
                "20": {
                    x: 0.013,
                    y: 44.79,
                    r: 0.123
                },
                "21": {
                    x: -0.007,
                    y: 44.771,
                    r: 0.085
                },
                "22": {
                    x: -0.022,
                    y: 44.8,
                    r: 0.033
                },
                "23": {
                    x: 0.053,
                    y: 44.843,
                    r: -0.033
                },
                "24": {
                    x: 0.039,
                    y: 44.848,
                    r: -0.085
                },
                "25": {
                    x: 0.06,
                    y: 44.835,
                    r: -0.123
                },
                "26": {
                    x: 0.035,
                    y: 44.841,
                    r: -0.148
                },
                "27": {
                    x: 0.033,
                    y: 44.819,
                    r: -0.163
                },
                "28": {
                    x: 0.064,
                    y: 44.851,
                    r: -0.171
                },
                "29": {
                    x: 0.037,
                    y: 44.857,
                    r: -0.174
                },
                "30": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                },
                "32": {
                    x: -0.036,
                    y: 44.845,
                    r: -0.16
                },
                "33": {
                    x: -0.048,
                    y: 44.827,
                    r: -0.118
                },
                "34": {
                    x: -0.021,
                    y: 44.832,
                    r: -0.046
                },
                "35": {
                    x: -0.001,
                    y: 44.814,
                    r: 0.046
                },
                "36": {
                    x: 0.016,
                    y: 44.805,
                    r: 0.118
                },
                "37": {
                    x: -0.004,
                    y: 44.815,
                    r: 0.16
                },
                "38": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "39": {
                    x: -0.014,
                    y: 44.795,
                    r: 0.16
                },
                "40": {
                    x: -0.001,
                    y: 44.777,
                    r: 0.118
                },
                "41": {
                    x: -0.028,
                    y: 44.782,
                    r: 0.046
                },
                "42": {
                    x: 0.051,
                    y: 44.862,
                    r: -0.046
                },
                "43": {
                    x: 0.034,
                    y: 44.854,
                    r: -0.118
                },
                "44": {
                    x: 0.053,
                    y: 44.864,
                    r: -0.16
                },
                "45": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.SpiderCrabClaw = makeObj("Container", 'SpiderCrabClaw', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Spider_Crab_skin 2.png"]))
            .setTransform(-95, -9, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.SpiderCrabLeg = makeObj("Container", 'SpiderCrabLeg', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Spider_Crab_skin 1.png"]))
            .setTransform(-72, -7, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_SpiderCrabLegs = makeObj("Container", 'Animated_SpiderCrabLegs', undefined, function(){
        var instance10 = new lib.SpiderCrabLeg()
            .setTransform(43.35, 69.6, 0.832, 0.886, 0.714);
        var instance9 = new lib.SpiderCrabLeg()
            .setTransform(63.7, 50.05, 0.939, 1, 0.349);
        var instance8 = new lib.SpiderCrabLeg()
            .setTransform(74.35, 22.5);
        var instance7 = new lib.SpiderCrabLeg()
            .setTransform(74.5, -2.5, 1, 1, -0.282);
        var instance6 = new lib.SpiderCrabLeg()
            .setTransform(-43.35, 69.6, 0.832, 0.886, 0, 0.714, 2.428);
        var instance5 = new lib.SpiderCrabLeg()
            .setTransform(-63.7, 50.05, 0.939, 1, 0, 0.349, 2.793);
        var instance4 = new lib.SpiderCrabLeg()
            .setTransform(-74.35, 22.5, 1, 1, 0, 0, 3.142);
        var instance3 = new lib.SpiderCrabLeg()
            .setTransform(-74.5, -2.5, 1, 1, 0, -0.282, -2.859);
        var instance2 = new lib.SpiderCrabClaw()
            .setTransform(73.15, -50.85, 1, 1, -0.733);
        var instance1 = new lib.SpiderCrabClaw()
            .setTransform(-73.15, -50.85, 1, 1, 0, -0.733, -2.409);
        this.addChild(instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.SpiderCrabLegsContainer = makeObj("Container", 'SpiderCrabLegsContainer', undefined, function(){
        var instance1 = new lib.Animated_SpiderCrabLegs();
        this.addChild(instance1);
    });

    lib.Body_SpiderCrab = makeObj("Container", 'Body_SpiderCrab', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Spider_Crab_skin.png"]))
            .setTransform(-77, -63, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_SpiderCrabSf1 = makeObj("MovieClip", 'Animated_SpiderCrabSf1',{
            duration: 10,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 5,
                dead: 8
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Body_SpiderCrab();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        var instance1 = new lib.SpiderCrabLegsContainer();
        this[instance1.name = "legs"] = instance1;
        this.addTimedChild(instance2)
            .addTimedChild(instance3, 9, 1)
            .addTimedChild(instance1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.stop();
            }, 3)
            .addAction(function () {
                this.stop();
            }, 6)
            .addAction(function () {
                this.stop();
            }, 9);
    });

    lib.Animated_SpiderCrabLegsExtended = makeObj("MovieClip", 'Animated_SpiderCrabLegsExtended',{
            duration: 20
        }, function(){
		this.stop()
        var instance10 = new lib.SpiderCrabLeg()
            .setTransform(43.35, 69.6, 0.832, 0.886, 0.714);
        var instance9 = new lib.SpiderCrabLeg()
            .setTransform(63.7, 50.05, 0.939, 1, 0.349);
        var instance8 = new lib.SpiderCrabLeg()
            .setTransform(74.35, 22.5);
        var instance7 = new lib.SpiderCrabLeg()
            .setTransform(74.5, -2.5, 1, 1, -0.282);
        var instance6 = new lib.SpiderCrabLeg()
            .setTransform(-43.35, 69.6, 0.832, 0.886, 0, 0.714, 2.428);
        var instance5 = new lib.SpiderCrabLeg()
            .setTransform(-63.7, 50.05, 0.939, 1, 0, 0.349, 2.793);
        var instance4 = new lib.SpiderCrabLeg()
            .setTransform(-74.35, 22.5, 1, 1, 0, 0, 3.142);
        var instance3 = new lib.SpiderCrabLeg()
            .setTransform(-74.5, -2.5, 1, 1, 0, -0.282, -2.859);
        var instance2 = new lib.SpiderCrabClaw();
        var instance1 = new lib.SpiderCrabClaw();
        this.addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2, 0, 20, {
                "0": {
                    x: 73.4,
                    y: -50.75,
                    sx: 0.811,
                    kx: 0,
                    ky: 0,
                    r: -0.302
                },
                "1": {
                    x: 73.469,
                    y: -50.892,
                    sx: 0.84,
                    r: 0.087
                },
                "2": {
                    x: 73.385,
                    y: -50.839,
                    sx: 0.865,
                    r: 0.414
                },
                "3": {
                    x: 73.38,
                    y: -50.866,
                    sx: 0.886,
                    r: 0.693
                },
                "4": {
                    x: 73.369,
                    y: -50.84,
                    sx: 0.905,
                    r: 0.932
                },
                "5": {
                    x: 73.383,
                    y: -50.879,
                    sx: 0.92,
                    r: 1.138
                },
                "6": {
                    x: 73.403,
                    y: -50.864,
                    sx: 0.934,
                    r: 1.317
                },
                "7": {
                    x: 73.421,
                    y: -50.861,
                    sx: 0.946,
                    r: 1.471
                },
                "8": {
                    x: 73.371,
                    y: -50.897,
                    sx: 0.956,
                    kx: 4.678,
                    ky: 1.605,
                    r: 0
                },
                "9": {
                    x: 73.359,
                    y: -50.838,
                    sx: 0.965,
                    kx: 4.563,
                    ky: 1.721
                },
                "10": {
                    x: 73.356,
                    y: -50.872,
                    sx: 0.972,
                    kx: 4.464,
                    ky: 1.82
                },
                "11": {
                    x: 73.337,
                    y: -50.902,
                    sx: 0.979,
                    kx: 4.379,
                    ky: 1.904
                },
                "12": {
                    x: 73.325,
                    y: -50.846,
                    sx: 0.984,
                    kx: 4.308,
                    ky: 1.975
                },
                "13": {
                    x: 73.33,
                    y: -50.909,
                    sx: 0.989,
                    kx: 4.249,
                    ky: 2.034
                },
                "14": {
                    x: 73.315,
                    y: -50.873,
                    sx: 0.992,
                    kx: 4.202,
                    ky: 2.082
                },
                "15": {
                    x: 73.319,
                    y: -50.881,
                    sx: 0.995,
                    kx: 4.164,
                    ky: 2.119
                },
                "16": {
                    x: 73.359,
                    y: -50.877,
                    sx: 0.997,
                    kx: 4.136,
                    ky: 2.147
                },
                "17": {
                    x: 73.343,
                    y: -50.892,
                    sx: 0.999,
                    kx: 4.116,
                    ky: 2.167
                },
                "18": {
                    x: 73.348,
                    y: -50.888,
                    sx: 1,
                    kx: 4.105,
                    ky: 2.178
                },
                "19": {
                    x: 73.3,
                    y: -50.9,
                    kx: 4.102,
                    ky: 2.182
                }
            })
            .addTimedChild(instance1, 0, 20, {
                "0": {
                    x: -73.4,
                    y: -50.75,
                    sx: 0.811,
                    kx: -0.302,
                    ky: -2.84
                },
                "1": {
                    x: -73.469,
                    y: -50.892,
                    sx: 0.84,
                    kx: 0.087,
                    ky: 3.054
                },
                "2": {
                    x: -73.385,
                    y: -50.839,
                    sx: 0.865,
                    kx: 0.414,
                    ky: 2.727
                },
                "3": {
                    x: -73.38,
                    y: -50.866,
                    sx: 0.886,
                    kx: 0.693,
                    ky: 2.449
                },
                "4": {
                    x: -73.369,
                    y: -50.84,
                    sx: 0.905,
                    kx: 0.932,
                    ky: 2.21
                },
                "5": {
                    x: -73.383,
                    y: -50.879,
                    sx: 0.92,
                    kx: 1.138,
                    ky: 2.003
                },
                "6": {
                    x: -73.403,
                    y: -50.864,
                    sx: 0.934,
                    kx: 1.317,
                    ky: 1.825
                },
                "7": {
                    x: -73.421,
                    y: -50.861,
                    sx: 0.946,
                    kx: 1.471,
                    ky: 1.67
                },
                "8": {
                    x: -73.371,
                    y: -50.897,
                    sx: 0.956,
                    kx: 1.605,
                    ky: 1.536
                },
                "9": {
                    x: -73.359,
                    y: -50.838,
                    sx: 0.965,
                    kx: 1.721,
                    ky: 1.421
                },
                "10": {
                    x: -73.356,
                    y: -50.872,
                    sx: 0.972,
                    kx: 1.82,
                    ky: 1.322
                },
                "11": {
                    x: -73.337,
                    y: -50.902,
                    sx: 0.979,
                    kx: 1.904,
                    ky: 1.238
                },
                "12": {
                    x: -73.325,
                    y: -50.846,
                    sx: 0.984,
                    kx: 1.975,
                    ky: 1.167
                },
                "13": {
                    x: -73.33,
                    y: -50.909,
                    sx: 0.989,
                    kx: 2.034,
                    ky: 1.108
                },
                "14": {
                    x: -73.315,
                    y: -50.873,
                    sx: 0.992,
                    kx: 2.082,
                    ky: 1.06
                },
                "15": {
                    x: -73.319,
                    y: -50.881,
                    sx: 0.995,
                    kx: 2.119,
                    ky: 1.022
                },
                "16": {
                    x: -73.359,
                    y: -50.877,
                    sx: 0.997,
                    kx: 2.147,
                    ky: 0.994
                },
                "17": {
                    x: -73.343,
                    y: -50.892,
                    sx: 0.999,
                    kx: 2.167,
                    ky: 0.975
                },
                "18": {
                    x: -73.348,
                    y: -50.888,
                    sx: 1,
                    kx: 2.178,
                    ky: 0.964
                },
                "19": {
                    x: -73.3,
                    y: -50.9,
                    kx: 2.182,
                    ky: 0.96
                }
            })
            .addAction(function () {
                this.stop();
            }, 19);
    });

    lib.Animated_SpiderCrab = makeObj("MovieClip", 'Animated_SpiderCrab',{
            duration: 10,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 5,
                dead: 8
            }
        }, function(){
		this.stop()
        var instance3 = new lib.Body_SpiderCrab();
        var instance4 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        var instance2 = new lib.Animated_SpiderCrabLegsExtended()
            .setAlpha(0);
        this[instance2.name = "legs2"] = instance2;
        var instance1 = new lib.SpiderCrabLegsContainer();
        this[instance1.name = "legs"] = instance1;
        this.addTimedChild(instance3)
            .addTimedChild(instance4, 9, 1)
            .addTimedChild(instance2)
            .addTimedChild(instance1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.stop();
            }, 3)
            .addAction(function () {
                this.stop();
            }, 6)
            .addAction(function () {
                this.stop();
            }, 9);
    });

    lib.Body_KingCrab = makeObj("Container", 'Body_KingCrab', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/King_Crab.png"]))
            .setTransform(-85, -63, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_KingCrab = makeObj("MovieClip", 'Animated_KingCrab',{
            duration: 10,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 5,
                dead: 8
            }
        }, function(){
		this.stop()
        var instance1 = new lib.Body_KingCrab();
        var instance2 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance1)
            .addTimedChild(instance2, 9, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.stop();
            }, 3)
            .addAction(function () {
                this.stop();
            }, 6)
            .addAction(function () {
                this.stop();
            }, 9);
    });

    lib.Body_BlueCrab = makeObj("Container", 'Body_BlueCrab', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Blue_Crab.png"]))
            .setTransform(-63, -69, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_BlueCrab = makeObj("MovieClip", 'Animated_BlueCrab',{
            duration: 10,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 5,
                dead: 8
            }
        }, function(){
		this.stop()
        var instance1 = new lib.Body_BlueCrab();
        var instance2 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance1)
            .addTimedChild(instance2, 9, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.stop();
            }, 3)
            .addAction(function () {
                this.stop();
            }, 6)
            .addAction(function () {
                this.stop();
            }, 9);
    });

    lib.Body_Sailfish = makeObj("Container", 'Body_Sailfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Sailfish.png"]))
            .setTransform(-87, -81, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Sailfish = makeObj("Container", 'Tail_Sailfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Sailfish 1.png"]))
            .setTransform(-30, 2, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Sailfish = makeObj("MovieClip", 'Animated_Sailfish',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance4 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Sailfish 2.png"]));
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Sailfish 2.png"]));
        var instance2 = new lib.Tail_Sailfish();
        var instance1 = new lib.Body_Sailfish();
        var instance5 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance4, 31, 15, {
                "31": {
                    x: -81,
                    y: 52,
                    sx: 0.5,
                    sy: 0.34
                },
                "33": {
                    sy: 0.5
                },
                "35": {
                    sy: 0.34
                },
                "37": {
                    sy: 0.5
                },
                "39": {
                    sy: 0.34
                },
                "41": {
                    sy: 0.5
                },
                "43": {
                    sy: 0.34
                },
                "45": {
                    sy: 0.5
                }
            })
            .addTimedChild(instance3, 31, 15, {
                "31": {
                    x: 81.5,
                    y: 52,
                    sx: 0.5,
                    sy: 0.34,
                    ky: 3.142
                },
                "33": {
                    sy: 0.5
                },
                "35": {
                    sy: 0.34
                },
                "37": {
                    sy: 0.5
                },
                "39": {
                    sy: 0.34
                },
                "41": {
                    sy: 0.5
                },
                "43": {
                    sy: 0.34
                },
                "45": {
                    sy: 0.5
                }
            })
            .addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    y: 49.95,
                    r: -0.262
                },
                "3": {
                    x: -0.047,
                    y: 50.048,
                    r: -0.261
                },
                "4": {
                    x: -0.03,
                    y: 50.047,
                    r: -0.254
                },
                "5": {
                    x: -0.034,
                    y: 50.032,
                    r: -0.236
                },
                "6": {
                    x: -0.045,
                    y: 50.005,
                    r: -0.201
                },
                "7": {
                    x: -0.037,
                    y: 50.046,
                    r: -0.143
                },
                "8": {
                    x: -0.062,
                    y: 50.044,
                    r: -0.056
                },
                "9": {
                    x: -0.051,
                    y: 50.001,
                    r: 0.056
                },
                "10": {
                    x: -0.054,
                    y: 50.02,
                    r: 0.143
                },
                "11": {
                    x: 0.009,
                    y: 50.002,
                    r: 0.201
                },
                "12": {
                    x: -0.002,
                    y: 49.988,
                    r: 0.236
                },
                "13": {
                    x: 0.007,
                    y: 49.998,
                    r: 0.254
                },
                "14": {
                    x: 0.017,
                    y: 49.983,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.031,
                    y: 49.998,
                    r: 0.261
                },
                "17": {
                    x: -0.002,
                    r: 0.257
                },
                "18": {
                    x: 0.038,
                    y: 50.042,
                    r: 0.245
                },
                "19": {
                    x: 0.036,
                    y: 50.01,
                    r: 0.222
                },
                "20": {
                    x: 0.024,
                    y: 49.999,
                    r: 0.184
                },
                "21": {
                    x: 0.081,
                    y: 50.05,
                    r: 0.128
                },
                "22": {
                    x: 0.061,
                    y: 50.07,
                    r: 0.049
                },
                "23": {
                    x: 0.087,
                    y: 50.053,
                    r: -0.049
                },
                "24": {
                    y: 50.052,
                    r: -0.128
                },
                "25": {
                    x: 0.067,
                    y: 50.056,
                    r: -0.184
                },
                "26": {
                    x: 0.058,
                    y: 50.057,
                    r: -0.222
                },
                "27": {
                    x: 0.068,
                    y: 50.062,
                    r: -0.245
                },
                "28": {
                    x: 0.082,
                    y: 50.073,
                    r: -0.257
                },
                "29": {
                    x: 0.071,
                    y: 50.064,
                    r: -0.261
                },
                "30": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                },
                "32": {
                    x: -0.066,
                    y: 50.037,
                    r: -0.24
                },
                "33": {
                    x: -0.064,
                    y: 50.016,
                    r: -0.176
                },
                "34": {
                    x: -0.047,
                    y: 50.028,
                    r: -0.069
                },
                "35": {
                    x: -0.044,
                    y: 50.035,
                    r: 0.069
                },
                "36": {
                    x: 0.011,
                    y: 49.984,
                    r: 0.176
                },
                "37": {
                    x: 0.006,
                    y: 49.983,
                    r: 0.24
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: 0.018,
                    y: 50.038,
                    r: 0.24
                },
                "40": {
                    x: 0.019,
                    y: 50.017,
                    r: 0.176
                },
                "41": {
                    x: 0.057,
                    y: 50.077,
                    r: 0.069
                },
                "42": {
                    x: 0.059,
                    y: 50.079,
                    r: -0.069
                },
                "43": {
                    y: 50.074,
                    r: -0.176
                },
                "44": {
                    x: 0.066,
                    y: 50.072,
                    r: -0.24
                },
                "45": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance5, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Marlin = makeObj("Container", 'Body_Marlin', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Marlin.png"]))
            .setTransform(-73, -74, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Marlin = makeObj("Container", 'Tail_Marlin', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Marlin 1.png"]))
            .setTransform(-30, 2, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Marlin = makeObj("MovieClip", 'Animated_Marlin',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Marlin();
        var instance1 = new lib.Body_Marlin();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    y: 49.95,
                    r: -0.262
                },
                "3": {
                    x: -0.047,
                    y: 50.048,
                    r: -0.261
                },
                "4": {
                    x: -0.03,
                    y: 50.047,
                    r: -0.254
                },
                "5": {
                    x: -0.034,
                    y: 50.032,
                    r: -0.236
                },
                "6": {
                    x: -0.045,
                    y: 50.005,
                    r: -0.201
                },
                "7": {
                    x: -0.037,
                    y: 50.046,
                    r: -0.143
                },
                "8": {
                    x: -0.062,
                    y: 50.044,
                    r: -0.056
                },
                "9": {
                    x: -0.051,
                    y: 50.001,
                    r: 0.056
                },
                "10": {
                    x: -0.054,
                    y: 50.02,
                    r: 0.143
                },
                "11": {
                    x: 0.009,
                    y: 50.002,
                    r: 0.201
                },
                "12": {
                    x: -0.002,
                    y: 49.988,
                    r: 0.236
                },
                "13": {
                    x: 0.007,
                    y: 49.998,
                    r: 0.254
                },
                "14": {
                    x: 0.017,
                    y: 49.983,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.031,
                    y: 49.998,
                    r: 0.261
                },
                "17": {
                    x: -0.002,
                    r: 0.257
                },
                "18": {
                    x: 0.038,
                    y: 50.042,
                    r: 0.245
                },
                "19": {
                    x: 0.036,
                    y: 50.01,
                    r: 0.222
                },
                "20": {
                    x: 0.024,
                    y: 49.999,
                    r: 0.184
                },
                "21": {
                    x: 0.081,
                    y: 50.05,
                    r: 0.128
                },
                "22": {
                    x: 0.061,
                    y: 50.07,
                    r: 0.049
                },
                "23": {
                    x: 0.087,
                    y: 50.053,
                    r: -0.049
                },
                "24": {
                    y: 50.052,
                    r: -0.128
                },
                "25": {
                    x: 0.067,
                    y: 50.056,
                    r: -0.184
                },
                "26": {
                    x: 0.058,
                    y: 50.057,
                    r: -0.222
                },
                "27": {
                    x: 0.068,
                    y: 50.062,
                    r: -0.245
                },
                "28": {
                    x: 0.082,
                    y: 50.073,
                    r: -0.257
                },
                "29": {
                    x: 0.071,
                    y: 50.064,
                    r: -0.261
                },
                "30": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                },
                "32": {
                    x: -0.066,
                    y: 50.037,
                    r: -0.24
                },
                "33": {
                    x: -0.064,
                    y: 50.016,
                    r: -0.176
                },
                "34": {
                    x: -0.047,
                    y: 50.028,
                    r: -0.069
                },
                "35": {
                    x: -0.044,
                    y: 50.035,
                    r: 0.069
                },
                "36": {
                    x: 0.011,
                    y: 49.984,
                    r: 0.176
                },
                "37": {
                    x: 0.006,
                    y: 49.983,
                    r: 0.24
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: 0.018,
                    y: 50.038,
                    r: 0.24
                },
                "40": {
                    x: 0.019,
                    y: 50.017,
                    r: 0.176
                },
                "41": {
                    x: 0.057,
                    y: 50.077,
                    r: 0.069
                },
                "42": {
                    x: 0.059,
                    y: 50.079,
                    r: -0.069
                },
                "43": {
                    y: 50.074,
                    r: -0.176
                },
                "44": {
                    x: 0.066,
                    y: 50.072,
                    r: -0.24
                },
                "45": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Swordfish = makeObj("Container", 'Body_Swordfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Swordfish_.png"]))
            .setTransform(-75, -76, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Swordfish = makeObj("Container", 'Tail_Swordfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Swordfish_ 1.png"]))
            .setTransform(-30, 2, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Swordfish = makeObj("MovieClip", 'Animated_Swordfish',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Swordfish();
        var instance1 = new lib.Body_Swordfish();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    y: 49.95,
                    r: -0.262
                },
                "3": {
                    x: -0.047,
                    y: 50.048,
                    r: -0.261
                },
                "4": {
                    x: -0.03,
                    y: 50.047,
                    r: -0.254
                },
                "5": {
                    x: -0.034,
                    y: 50.032,
                    r: -0.236
                },
                "6": {
                    x: -0.045,
                    y: 50.005,
                    r: -0.201
                },
                "7": {
                    x: -0.037,
                    y: 50.046,
                    r: -0.143
                },
                "8": {
                    x: -0.062,
                    y: 50.044,
                    r: -0.056
                },
                "9": {
                    x: -0.051,
                    y: 50.001,
                    r: 0.056
                },
                "10": {
                    x: -0.054,
                    y: 50.02,
                    r: 0.143
                },
                "11": {
                    x: 0.009,
                    y: 50.002,
                    r: 0.201
                },
                "12": {
                    x: -0.002,
                    y: 49.988,
                    r: 0.236
                },
                "13": {
                    x: 0.007,
                    y: 49.998,
                    r: 0.254
                },
                "14": {
                    x: 0.017,
                    y: 49.983,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.031,
                    y: 49.998,
                    r: 0.261
                },
                "17": {
                    x: -0.002,
                    r: 0.257
                },
                "18": {
                    x: 0.038,
                    y: 50.042,
                    r: 0.245
                },
                "19": {
                    x: 0.036,
                    y: 50.01,
                    r: 0.222
                },
                "20": {
                    x: 0.024,
                    y: 49.999,
                    r: 0.184
                },
                "21": {
                    x: 0.081,
                    y: 50.05,
                    r: 0.128
                },
                "22": {
                    x: 0.061,
                    y: 50.07,
                    r: 0.049
                },
                "23": {
                    x: 0.087,
                    y: 50.053,
                    r: -0.049
                },
                "24": {
                    y: 50.052,
                    r: -0.128
                },
                "25": {
                    x: 0.067,
                    y: 50.056,
                    r: -0.184
                },
                "26": {
                    x: 0.058,
                    y: 50.057,
                    r: -0.222
                },
                "27": {
                    x: 0.068,
                    y: 50.062,
                    r: -0.245
                },
                "28": {
                    x: 0.082,
                    y: 50.073,
                    r: -0.257
                },
                "29": {
                    x: 0.071,
                    y: 50.064,
                    r: -0.261
                },
                "30": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                },
                "32": {
                    x: -0.066,
                    y: 50.037,
                    r: -0.24
                },
                "33": {
                    x: -0.064,
                    y: 50.016,
                    r: -0.176
                },
                "34": {
                    x: -0.047,
                    y: 50.028,
                    r: -0.069
                },
                "35": {
                    x: -0.044,
                    y: 50.035,
                    r: 0.069
                },
                "36": {
                    x: 0.011,
                    y: 49.984,
                    r: 0.176
                },
                "37": {
                    x: 0.006,
                    y: 49.983,
                    r: 0.24
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: 0.018,
                    y: 50.038,
                    r: 0.24
                },
                "40": {
                    x: 0.019,
                    y: 50.017,
                    r: 0.176
                },
                "41": {
                    x: 0.057,
                    y: 50.077,
                    r: 0.069
                },
                "42": {
                    x: 0.059,
                    y: 50.079,
                    r: -0.069
                },
                "43": {
                    y: 50.074,
                    r: -0.176
                },
                "44": {
                    x: 0.066,
                    y: 50.072,
                    r: -0.24
                },
                "45": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_ColossalSquid = makeObj("Container", 'Body_ColossalSquid', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Colossal_Squid.png"]))
            .setTransform(-58, -56, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_ColossalSquid = makeObj("Container", 'Tail_ColossalSquid', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Colossal_Squid 1.png"]))
            .setTransform(-52, -18, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.ColossalSquidTentacles = makeObj("Container", 'ColossalSquidTentacles', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/ColossalSquidTentacles.png"]))
            .setTransform(-37, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_ColossalSquid = makeObj("MovieClip", 'Animated_ColossalSquid',{
            duration: 91,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 59,
                dead: 89
            }
        }, function(){
		this.stop()
        var instance3 = new lib.ColossalSquidTentacles()
            .setTransform(0, 34.5);
        this[instance3.name = "tentacles"] = instance3;
        var instance2 = new lib.Tail_ColossalSquid();
        var instance1 = new lib.Body_ColossalSquid();
        var instance4 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-33, 29, 0.784, 0.784);
        this.addTimedChild(instance3)
            .addTimedChild(instance2, 0, 91, {
                "0": {
                    y: 41.8,
                    sx: 1,
                    sy: 1
                },
                "2": {
                    sy: 0.883
                },
                "3": {
                    y: 41.826,
                    sx: 0.999,
                    sy: 0.882
                },
                "4": {
                    y: 41.752,
                    sx: 0.998,
                    sy: 0.88
                },
                "5": {
                    y: 41.615,
                    sx: 0.995,
                    sy: 0.878
                },
                "6": {
                    y: 41.454,
                    sx: 0.99,
                    sy: 0.873
                },
                "7": {
                    y: 41.15,
                    sx: 0.983,
                    sy: 0.867
                },
                "8": {
                    y: 40.738,
                    sx: 0.974,
                    sy: 0.858
                },
                "9": {
                    y: 40.255,
                    sx: 0.963,
                    sy: 0.847
                },
                "10": {
                    y: 39.35,
                    sx: 0.949,
                    sy: 0.833
                },
                "11": {
                    y: 40.032,
                    sy: 0.892
                },
                "12": {
                    y: 40.504,
                    sy: 0.938
                },
                "13": {
                    y: 40.883,
                    sy: 0.975
                },
                "14": {
                    y: 41.176,
                    sy: 1.004
                },
                "15": {
                    y: 41.455,
                    sy: 1.028
                },
                "16": {
                    y: 41.621,
                    sx: 0.95,
                    sy: 1.048
                },
                "17": {
                    y: 41.812,
                    sy: 1.063
                },
                "18": {
                    y: 41.954,
                    sy: 1.076
                },
                "19": {
                    y: 42.07,
                    sy: 1.086
                },
                "20": {
                    y: 42.127,
                    sy: 1.093
                },
                "21": {
                    y: 42.237,
                    sy: 1.099
                },
                "22": {
                    y: 42.213,
                    sy: 1.103
                },
                "23": {
                    y: 42.263,
                    sy: 1.105
                },
                "24": {
                    y: 42.25
                },
                "25": {
                    y: 42.285
                },
                "26": {
                    y: 42.291,
                    sy: 1.104
                },
                "27": {
                    y: 42.261,
                    sx: 0.951,
                    sy: 1.102
                },
                "28": {
                    y: 42.239,
                    sy: 1.099
                },
                "29": {
                    y: 42.217,
                    sx: 0.952,
                    sy: 1.094
                },
                "30": {
                    y: 42.184,
                    sx: 0.953,
                    sy: 1.088
                },
                "31": {
                    y: 42.175,
                    sx: 0.955,
                    sy: 1.08
                },
                "32": {
                    y: 42.068,
                    sx: 0.957,
                    sy: 1.069
                },
                "33": {
                    y: 42.035,
                    sx: 0.96,
                    sy: 1.055
                },
                "34": {
                    y: 41.933,
                    sx: 0.963,
                    sy: 1.037
                },
                "35": {
                    y: 41.86,
                    sx: 0.968,
                    sy: 1.013
                },
                "36": {
                    y: 41.682,
                    sx: 0.974,
                    sy: 0.982
                },
                "37": {
                    y: 41.541,
                    sx: 0.981,
                    sy: 0.947
                },
                "38": {
                    y: 41.349,
                    sx: 0.987,
                    sy: 0.914
                },
                "39": {
                    y: 41.285,
                    sx: 0.992,
                    sy: 0.889
                },
                "40": {
                    y: 41.194,
                    sx: 0.996,
                    sy: 0.871
                },
                "41": {
                    y: 41.161,
                    sx: 0.998,
                    sy: 0.858
                },
                "42": {
                    y: 41.05,
                    sx: 1,
                    sy: 0.85
                },
                "43": {
                    y: 41.056
                },
                "44": {
                    y: 41.079
                },
                "45": {
                    y: 41.07,
                    sy: 0.851
                },
                "46": {
                    y: 41.133,
                    sy: 0.852
                },
                "47": {
                    y: 41.124,
                    sy: 0.854
                },
                "48": {
                    y: 41.195,
                    sy: 0.857
                },
                "49": {
                    y: 41.249,
                    sy: 0.86
                },
                "50": {
                    y: 41.285,
                    sy: 0.864
                },
                "51": {
                    y: 41.388,
                    sy: 0.868
                },
                "52": {
                    y: 41.434,
                    sy: 0.872
                },
                "53": {
                    y: 41.454,
                    sy: 0.876
                },
                "54": {
                    y: 41.536,
                    sy: 0.878
                },
                "55": {
                    y: 41.529,
                    sy: 0.88
                },
                "56": {
                    y: 41.59,
                    sy: 0.882
                },
                "57": {
                    y: 41.572
                },
                "58": {
                    y: 41.8,
                    sy: 0.883
                },
                "60": {
                    y: 41.752,
                    sx: 0.998,
                    sy: 0.88
                },
                "61": {
                    y: 41.454,
                    sx: 0.99,
                    sy: 0.873
                },
                "62": {
                    y: 40.738,
                    sx: 0.974,
                    sy: 0.858
                },
                "63": {
                    y: 39.35,
                    sx: 0.949,
                    sy: 0.833
                },
                "64": {
                    y: 40.358,
                    sy: 0.928
                },
                "65": {
                    y: 41.066,
                    sy: 0.99
                },
                "66": {
                    y: 41.503,
                    sy: 1.033
                },
                "67": {
                    y: 41.812,
                    sx: 0.95,
                    sy: 1.063
                },
                "68": {
                    y: 42.014,
                    sy: 1.084
                },
                "69": {
                    y: 42.168,
                    sy: 1.096
                },
                "70": {
                    y: 42.244,
                    sy: 1.103
                },
                "71": {
                    y: 42.25,
                    sy: 1.105
                },
                "72": {
                    y: 42.291,
                    sy: 1.104
                },
                "73": {
                    y: 42.239,
                    sx: 0.951,
                    sy: 1.099
                },
                "74": {
                    y: 42.184,
                    sx: 0.953,
                    sy: 1.088
                },
                "75": {
                    y: 42.068,
                    sx: 0.957,
                    sy: 1.069
                },
                "76": {
                    y: 41.933,
                    sx: 0.963,
                    sy: 1.037
                },
                "77": {
                    y: 41.682,
                    sx: 0.974,
                    sy: 0.982
                },
                "78": {
                    y: 41.349,
                    sx: 0.987,
                    sy: 0.914
                },
                "79": {
                    y: 41.194,
                    sx: 0.996,
                    sy: 0.871
                },
                "80": {
                    y: 41.05,
                    sx: 1,
                    sy: 0.85
                },
                "81": {
                    y: 41.073
                },
                "82": {
                    y: 41.103,
                    sy: 0.852
                },
                "83": {
                    y: 41.161,
                    sy: 0.855
                },
                "84": {
                    y: 41.219,
                    sy: 0.86
                },
                "85": {
                    y: 41.315,
                    sy: 0.868
                },
                "86": {
                    y: 41.451,
                    sy: 0.875
                },
                "87": {
                    y: 41.533,
                    sy: 0.879
                },
                "88": {
                    y: 41.55,
                    sy: 0.882
                },
                "89": {
                    y: 41.8,
                    sy: 0.883
                }
            })
            .addTimedChild(instance1, 0, 91, {
                "0": {
                    y: -3
                }
            })
            .addTimedChild(instance4, 90, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 57)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 87)
            .addAction(function () {
                this.stop();
            }, 90);
    });

    lib.Body_Cuttlefish = makeObj("Container", 'Body_Cuttlefish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Cuttlefish.png"]))
            .setTransform(-42, -32, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Cuttlefish = makeObj("Container", 'Tail_Cuttlefish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Cuttlefish 1.png"]))
            .setTransform(-65, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.CuttlefishArm = makeObj("Container", 'CuttlefishArm', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Cuttlefish 3.png"]))
            .setTransform(-29, -9, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Cuttlefish = makeObj("MovieClip", 'Animated_Cuttlefish',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance5 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Cuttlefish 2.png"]))
            .setTransform(-65, -48, 0.5, 0.5);
        var instance4 = new lib.CuttlefishArm();
        var instance3 = new lib.CuttlefishArm();
        var instance2 = new lib.Tail_Cuttlefish();
        var instance1 = new lib.Body_Cuttlefish();
        var instance6 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance5)
            .addTimedChild(instance4, 0, 48, {
                "0": {
                    x: 32,
                    y: 6,
                    kx: 0,
                    ky: 3.142
                },
                "2": {
                    kx: 0.175,
                    ky: 2.967
                },
                "3": {
                    x: 32.039,
                    y: 6.057,
                    kx: 0.173,
                    ky: 2.969
                },
                "4": {
                    x: 32.052,
                    y: 6.052,
                    kx: 0.167,
                    ky: 2.975
                },
                "5": {
                    x: 32.025,
                    y: 6.029,
                    kx: 0.155,
                    ky: 2.987
                },
                "6": {
                    x: 32.039,
                    y: 6.056,
                    kx: 0.135,
                    ky: 3.006
                },
                "7": {
                    x: 32.049,
                    y: 6.035,
                    kx: 0.104,
                    ky: 3.037
                },
                "8": {
                    x: 32.029,
                    y: 6.047,
                    kx: 0.057,
                    ky: 3.084
                },
                "9": {
                    x: 32.106,
                    y: 6.136,
                    kx: -0.006,
                    ky: -3.136
                },
                "10": {
                    x: 32.098,
                    y: 6.16,
                    kx: -0.07,
                    ky: -3.072
                },
                "11": {
                    x: 32.075,
                    y: 6.142,
                    kx: -0.117,
                    ky: -3.025
                },
                "12": {
                    x: 32.121,
                    y: 6.141,
                    kx: -0.147,
                    ky: -2.995
                },
                "13": {
                    x: 32.097,
                    y: 6.174,
                    kx: -0.164,
                    ky: -2.978
                },
                "14": {
                    x: 32.109,
                    y: 6.163,
                    kx: -0.172,
                    ky: -2.97
                },
                "15": {
                    x: 32,
                    y: 6,
                    kx: -0.175,
                    ky: -2.967
                },
                "16": {
                    x: 32.107,
                    y: 6.108,
                    kx: -0.173,
                    ky: -2.968
                },
                "17": {
                    x: 32.084,
                    y: 6.066,
                    kx: -0.169,
                    ky: -2.973
                },
                "18": {
                    x: 32.081,
                    y: 6.097,
                    kx: -0.16,
                    ky: -2.981
                },
                "19": {
                    x: 32.104,
                    y: 6.111,
                    kx: -0.147,
                    ky: -2.995
                },
                "20": {
                    x: 32.102,
                    y: 6.1,
                    kx: -0.126,
                    ky: -3.015
                },
                "21": {
                    x: 32.071,
                    y: 6.079,
                    kx: -0.096,
                    ky: -3.045
                },
                "22": {
                    x: 32.089,
                    y: 6.099,
                    kx: -0.054,
                    ky: -3.088
                },
                "23": {
                    x: 32.006,
                    y: 6.016,
                    kx: 0.001,
                    ky: 3.14
                },
                "24": {
                    x: 32.022,
                    y: 5.916,
                    kx: 0.058,
                    ky: 3.084
                },
                "25": {
                    x: 32.018,
                    y: 5.94,
                    kx: 0.103,
                    ky: 3.038
                },
                "26": {
                    x: 32.008,
                    y: 5.93,
                    kx: 0.135,
                    ky: 3.007
                },
                "27": {
                    x: 32.021,
                    y: 5.935,
                    kx: 0.155,
                    ky: 2.987
                },
                "28": {
                    x: 32.013,
                    y: 5.95,
                    kx: 0.167,
                    ky: 2.975
                },
                "29": {
                    x: 31.982,
                    y: 5.953,
                    kx: 0.173,
                    ky: 2.969
                },
                "30": {
                    x: 32,
                    y: 6,
                    kx: 0.175,
                    ky: 2.967
                },
                "32": {
                    x: 32.009,
                    y: 6.014,
                    kx: 0.168,
                    ky: 2.974
                },
                "33": {
                    x: 32.036,
                    y: 6.046,
                    kx: 0.142,
                    ky: 3
                },
                "34": {
                    x: 32.038,
                    y: 6.054,
                    kx: 0.08,
                    ky: 3.062
                },
                "35": {
                    x: 32.11,
                    y: 6.155,
                    kx: -0.034,
                    ky: -3.107
                },
                "36": {
                    x: 32.124,
                    y: 6.132,
                    kx: -0.127,
                    ky: -3.015
                },
                "37": {
                    x: 32.12,
                    y: 6.171,
                    kx: -0.165,
                    ky: -2.976
                },
                "38": {
                    x: 32,
                    y: 6,
                    kx: -0.175,
                    ky: -2.967
                },
                "39": {
                    x: 32.073,
                    y: 6.076,
                    kx: -0.171,
                    ky: -2.971
                },
                "40": {
                    x: 32.103,
                    y: 6.073,
                    kx: -0.157,
                    ky: -2.985
                },
                "41": {
                    x: 32.102,
                    y: 6.1,
                    kx: -0.126,
                    ky: -3.015
                },
                "42": {
                    y: 6.059,
                    kx: -0.069,
                    ky: -3.072
                },
                "43": {
                    x: 32.007,
                    y: 5.93,
                    kx: 0.021,
                    ky: 3.121
                },
                "44": {
                    x: 32.018,
                    y: 5.94,
                    kx: 0.103,
                    ky: 3.038
                },
                "45": {
                    x: 31.997,
                    y: 5.916,
                    kx: 0.149,
                    ky: 2.993
                },
                "46": {
                    x: 32.001,
                    kx: 0.169,
                    ky: 2.972
                },
                "47": {
                    x: 32,
                    y: 6,
                    kx: 0.175,
                    ky: 2.967
                }
            })
            .addTimedChild(instance3, 0, 48, {
                "0": {
                    x: -32,
                    y: 6,
                    r: 0
                },
                "2": {
                    r: 0.175
                },
                "3": {
                    x: -32.039,
                    y: 6.057,
                    r: 0.173
                },
                "4": {
                    x: -32.052,
                    y: 6.052,
                    r: 0.167
                },
                "5": {
                    x: -32.025,
                    y: 6.029,
                    r: 0.155
                },
                "6": {
                    x: -32.039,
                    y: 6.056,
                    r: 0.135
                },
                "7": {
                    x: -32.049,
                    y: 6.035,
                    r: 0.104
                },
                "8": {
                    x: -32.029,
                    y: 6.047,
                    r: 0.057
                },
                "9": {
                    x: -32.106,
                    y: 6.136,
                    r: -0.006
                },
                "10": {
                    x: -32.098,
                    y: 6.16,
                    r: -0.07
                },
                "11": {
                    x: -32.075,
                    y: 6.142,
                    r: -0.117
                },
                "12": {
                    x: -32.121,
                    y: 6.141,
                    r: -0.147
                },
                "13": {
                    x: -32.097,
                    y: 6.174,
                    r: -0.164
                },
                "14": {
                    x: -32.109,
                    y: 6.163,
                    r: -0.172
                },
                "15": {
                    x: -32,
                    y: 6,
                    r: -0.175
                },
                "16": {
                    x: -32.107,
                    y: 6.108,
                    r: -0.173
                },
                "17": {
                    x: -32.084,
                    y: 6.066,
                    r: -0.169
                },
                "18": {
                    x: -32.081,
                    y: 6.097,
                    r: -0.16
                },
                "19": {
                    x: -32.104,
                    y: 6.111,
                    r: -0.147
                },
                "20": {
                    x: -32.102,
                    y: 6.1,
                    r: -0.126
                },
                "21": {
                    x: -32.071,
                    y: 6.079,
                    r: -0.096
                },
                "22": {
                    x: -32.089,
                    y: 6.099,
                    r: -0.054
                },
                "23": {
                    x: -32.006,
                    y: 6.016,
                    r: 0.001
                },
                "24": {
                    x: -32.022,
                    y: 5.916,
                    r: 0.058
                },
                "25": {
                    x: -32.018,
                    y: 5.94,
                    r: 0.103
                },
                "26": {
                    x: -32.008,
                    y: 5.93,
                    r: 0.135
                },
                "27": {
                    x: -32.021,
                    y: 5.935,
                    r: 0.155
                },
                "28": {
                    x: -32.013,
                    y: 5.95,
                    r: 0.167
                },
                "29": {
                    x: -31.982,
                    y: 5.953,
                    r: 0.173
                },
                "30": {
                    x: -32,
                    y: 6,
                    r: 0.175
                },
                "32": {
                    x: -32.009,
                    y: 6.014,
                    r: 0.168
                },
                "33": {
                    x: -32.036,
                    y: 6.046,
                    r: 0.142
                },
                "34": {
                    x: -32.038,
                    y: 6.054,
                    r: 0.08
                },
                "35": {
                    x: -32.11,
                    y: 6.155,
                    r: -0.034
                },
                "36": {
                    x: -32.124,
                    y: 6.132,
                    r: -0.127
                },
                "37": {
                    x: -32.12,
                    y: 6.171,
                    r: -0.165
                },
                "38": {
                    x: -32,
                    y: 6,
                    r: -0.175
                },
                "39": {
                    x: -32.073,
                    y: 6.076,
                    r: -0.171
                },
                "40": {
                    x: -32.103,
                    y: 6.073,
                    r: -0.157
                },
                "41": {
                    x: -32.102,
                    y: 6.1,
                    r: -0.126
                },
                "42": {
                    y: 6.059,
                    r: -0.069
                },
                "43": {
                    x: -32.007,
                    y: 5.93,
                    r: 0.021
                },
                "44": {
                    x: -32.018,
                    y: 5.94,
                    r: 0.103
                },
                "45": {
                    x: -31.997,
                    y: 5.916,
                    r: 0.149
                },
                "46": {
                    x: -32.001,
                    r: 0.169
                },
                "47": {
                    x: -32,
                    y: 6,
                    r: 0.175
                }
            })
            .addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: -12.4,
                    sx: 1,
                    sy: 1,
                    kx: 0
                },
                "3": {
                    y: -12.411,
                    sx: 0.981,
                    sy: 0.952
                },
                "4": {
                    y: -12.403,
                    sx: 0.971,
                    sy: 0.928
                },
                "5": {
                    y: -12.4,
                    sx: 0.969,
                    sy: 0.922
                },
                "6": {
                    x: -0.001,
                    y: -12.479,
                    sy: 0.924
                },
                "7": {
                    x: -0.006,
                    y: -12.481,
                    sx: 0.972,
                    sy: 0.931
                },
                "8": {
                    x: -0.017,
                    y: -12.535,
                    sx: 0.977,
                    sy: 0.947,
                    kx: 0.001
                },
                "9": {
                    x: -0.036,
                    y: -12.598,
                    sx: 0.986,
                    sy: 0.974,
                    kx: 0.003
                },
                "10": {
                    x: 0,
                    y: -12.4,
                    sx: 1.002,
                    sy: 1.023,
                    kx: 0.005
                },
                "11": {
                    x: 0.105,
                    y: -12.537,
                    sx: 1.005,
                    sy: 1.059
                },
                "12": {
                    x: 0.161,
                    y: -12.591,
                    sx: 1.007,
                    sy: 1.092,
                    kx: 0.004
                },
                "13": {
                    x: 0.266,
                    y: -12.614,
                    sx: 1.009,
                    sy: 1.119
                },
                "14": {
                    x: 0.319,
                    y: -12.693,
                    sx: 1.011,
                    sy: 1.137,
                    kx: 0.003
                },
                "15": {
                    x: 0.322,
                    y: -12.696,
                    sx: 1.012,
                    sy: 1.15
                },
                "16": {
                    x: 0.374,
                    y: -12.744,
                    sy: 1.158
                },
                "17": {
                    x: 0.375,
                    y: -12.702,
                    sx: 1.013,
                    sy: 1.163
                },
                "18": {
                    y: -12.731,
                    sy: 1.165
                },
                "19": {
                    x: 0.05,
                    y: -12.35,
                    sy: 1.166
                },
                "20": {
                    y: -12.444,
                    sy: 1.165
                },
                "21": {
                    y: -12.425,
                    sy: 1.164
                },
                "22": {
                    x: 0.051,
                    y: -12.439,
                    sx: 1.012,
                    sy: 1.16
                },
                "23": {
                    x: 0.052,
                    y: -12.383,
                    sy: 1.155
                },
                "24": {
                    x: 0.004,
                    y: -12.401,
                    sx: 1.011,
                    sy: 1.147
                },
                "25": {
                    x: 0.007,
                    y: -12.338,
                    sy: 1.137,
                    kx: 0.002
                },
                "26": {
                    x: -0.04,
                    y: -12.38,
                    sx: 1.009,
                    sy: 1.122
                },
                "27": {
                    x: -0.085,
                    y: -12.266,
                    sx: 1.008,
                    sy: 1.101
                },
                "28": {
                    x: -0.129,
                    y: -12.227,
                    sx: 1.006,
                    sy: 1.074,
                    kx: 0.001
                },
                "29": {
                    x: -0.173,
                    y: -12.158,
                    sx: 1.003,
                    sy: 1.039
                },
                "30": {
                    x: 0,
                    y: -12.4,
                    sx: 1,
                    sy: 1,
                    kx: 0
                },
                "32": {
                    y: -12.42,
                    sx: 0.975,
                    sy: 0.937
                },
                "33": {
                    y: -12.4,
                    sx: 0.969,
                    sy: 0.922
                },
                "34": {
                    x: -0.004,
                    y: -12.488,
                    sx: 0.971,
                    sy: 0.928
                },
                "35": {
                    x: -0.022,
                    y: -12.535,
                    sx: 0.979,
                    sy: 0.954,
                    kx: 0.002
                },
                "36": {
                    x: 0,
                    y: -12.4,
                    sx: 1.002,
                    sy: 1.023,
                    kx: 0.005
                },
                "37": {
                    x: 0.16,
                    y: -12.566,
                    sx: 1.007,
                    sy: 1.086,
                    kx: 0.004
                },
                "38": {
                    x: 0.268,
                    y: -12.662,
                    sx: 1.01,
                    sy: 1.131
                },
                "39": {
                    x: 0.323,
                    y: -12.741,
                    sx: 1.012,
                    sy: 1.154,
                    kx: 0.003
                },
                "40": {
                    x: 0.375,
                    y: -12.71,
                    sx: 1.013,
                    sy: 1.164
                },
                "41": {
                    x: 0.05,
                    y: -12.35,
                    sy: 1.166
                },
                "42": {
                    y: -12.429,
                    sy: 1.164
                },
                "43": {
                    x: 0.052,
                    y: -12.454,
                    sx: 1.012,
                    sy: 1.157
                },
                "44": {
                    x: 0.006,
                    y: -12.399,
                    sx: 1.011,
                    sy: 1.142
                },
                "45": {
                    x: -0.039,
                    y: -12.316,
                    sx: 1.009,
                    sy: 1.116,
                    kx: 0.002
                },
                "46": {
                    x: -0.128,
                    y: -12.221,
                    sx: 1.005,
                    sy: 1.069,
                    kx: 0.001
                },
                "47": {
                    x: 0,
                    y: -12.4,
                    sx: 1,
                    sy: 1,
                    kx: 0
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance6, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_VampireSquid = makeObj("Container", 'Body_VampireSquid', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Vampire_Squid.png"]))
            .setTransform(-66, -50, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_VampireSquid = makeObj("Container", 'Tail_VampireSquid', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Vampire_Squid 1.png"]))
            .setTransform(-60, -13, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_VampireSquid = makeObj("MovieClip", 'Animated_VampireSquid',{
            duration: 28,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 18,
                dead: 26
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_VampireSquid();
        var instance1 = new lib.Body_VampireSquid();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -13);
        this.addTimedChild(instance2, 0, 28, {
                "0": {
                    x: 0.5,
                    y: -25.95,
                    kx: 0
                },
                "10": {
                    y: -41.95,
                    kx: 3.142
                },
                "18": {
                    y: -25.95,
                    kx: 0
                },
                "22": {
                    y: -41.95,
                    kx: 3.142
                },
                "26": {
                    y: -25.95,
                    kx: 0
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 27, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 16)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 25)
            .addAction(function () {
                this.stop();
            }, 27);
    });

    lib.Body_Axolotl = makeObj("Container", 'Body_Axolotl', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Axolotl.png"]))
            .setTransform(-86, -62, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Axolotl = makeObj("Container", 'Tail_Axolotl', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/AxolotlTail.png"]))
            .setTransform(-30, -41, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Axolotl = makeObj("MovieClip", 'Animated_Axolotl',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Axolotl();
        this[instance2.name = "tail"] = instance2;
        var instance1 = new lib.Body_Axolotl();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -33);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 44.8,
                    r: 0
                },
                "2": {
                    x: 2.65,
                    y: 44.65,
                    r: -0.175
                },
                "3": {
                    x: 2.622,
                    y: 44.751,
                    r: -0.174
                },
                "4": {
                    x: 2.574,
                    y: 44.763,
                    r: -0.169
                },
                "5": {
                    x: 2.384,
                    y: 44.739,
                    r: -0.157
                },
                "6": {
                    x: 2.033,
                    y: 44.72,
                    r: -0.134
                },
                "7": {
                    x: 1.45,
                    y: 44.769,
                    r: -0.095
                },
                "8": {
                    x: 0.616,
                    y: 44.744,
                    r: -0.037
                },
                "9": {
                    x: -0.444,
                    y: 44.81,
                    r: 0.037
                },
                "10": {
                    x: -1.288,
                    y: 44.795,
                    r: 0.095
                },
                "11": {
                    x: -1.777,
                    y: 44.8,
                    r: 0.134
                },
                "12": {
                    x: -2.094,
                    y: 44.779,
                    r: 0.157
                },
                "13": {
                    x: -2.312,
                    y: 44.781,
                    r: 0.169
                },
                "14": {
                    x: -2.353,
                    y: 44.774,
                    r: 0.174
                },
                "15": {
                    x: -2.5,
                    y: 44.75,
                    r: 0.175
                },
                "16": {
                    x: -2.582,
                    r: 0.174
                },
                "17": {
                    x: -2.502,
                    y: 44.758,
                    r: 0.171
                },
                "18": {
                    x: -2.4,
                    y: 44.775,
                    r: 0.163
                },
                "19": {
                    x: -2.164,
                    y: 44.75,
                    r: 0.148
                },
                "20": {
                    x: -1.834,
                    y: 44.769,
                    r: 0.123
                },
                "21": {
                    x: -1.197,
                    y: 44.794,
                    r: 0.085
                },
                "22": {
                    x: -0.446,
                    y: 44.754,
                    r: 0.033
                },
                "23": {
                    x: 0.507,
                    y: 44.807,
                    r: -0.033
                },
                "24": {
                    x: 1.223,
                    y: 44.84,
                    r: -0.085
                },
                "25": {
                    x: 1.769,
                    y: 44.818,
                    r: -0.123
                },
                "26": {
                    x: 2.114,
                    y: 44.834,
                    r: -0.148
                },
                "27": {
                    x: 2.375,
                    y: 44.847,
                    r: -0.163
                },
                "28": {
                    x: 2.462,
                    y: 44.848,
                    r: -0.171
                },
                "29": {
                    x: 2.537,
                    y: 44.811,
                    r: -0.174
                },
                "30": {
                    x: 2.5,
                    y: 44.75,
                    r: -0.175
                },
                "32": {
                    x: 2.314,
                    y: 44.83,
                    r: -0.16
                },
                "33": {
                    x: 1.648,
                    y: 44.819,
                    r: -0.118
                },
                "34": {
                    x: 0.608,
                    y: 44.852,
                    r: -0.046
                },
                "35": {
                    x: -0.612,
                    y: 44.761,
                    r: 0.046
                },
                "36": {
                    x: -1.69,
                    y: 44.775,
                    r: 0.118
                },
                "37": {
                    x: -2.293,
                    y: 44.787,
                    r: 0.16
                },
                "38": {
                    x: -2.5,
                    y: 44.75,
                    r: 0.175
                },
                "39": {
                    x: -2.363,
                    y: 44.781,
                    r: 0.16
                },
                "40": {
                    x: -1.697,
                    y: 44.769,
                    r: 0.118
                },
                "41": {
                    x: -0.657,
                    y: 44.802,
                    r: 0.046
                },
                "42": {
                    x: 0.661,
                    y: 44.81,
                    r: -0.046
                },
                "43": {
                    x: 1.74,
                    y: 44.824,
                    r: -0.118
                },
                "44": {
                    x: 2.342,
                    y: 44.835,
                    r: -0.16
                },
                "45": {
                    x: 2.5,
                    y: 44.75,
                    r: -0.175
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_FireSalamander = makeObj("Container", 'Body_FireSalamander', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Fire_Salamander.png"]))
            .setTransform(-58, -49, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_FireSalamander = makeObj("Container", 'Tail_FireSalamander', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Fire_Salamander 1.png"]))
            .setTransform(-11, -5, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_FireSalamander = makeObj("MovieClip", 'Animated_FireSalamander',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_FireSalamander();
        var instance1 = new lib.Body_FireSalamander();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 44.8,
                    r: 0
                },
                "2": {
                    x: 0.15,
                    y: 44.65,
                    r: -0.175
                },
                "3": {
                    x: 0.122,
                    y: 44.749,
                    r: -0.174
                },
                "4": {
                    x: 0.074,
                    y: 44.75,
                    r: -0.169
                },
                "5": {
                    x: 0.084,
                    y: 44.746,
                    r: -0.157
                },
                "6": {
                    x: 0.085,
                    y: 44.769,
                    r: -0.134
                },
                "7": {
                    x: 0.057,
                    y: 44.771,
                    r: -0.095
                },
                "8": {
                    x: 0.089,
                    y: 44.752,
                    r: -0.037
                },
                "9": {
                    x: 0.062,
                    y: 44.835,
                    r: 0.037
                },
                "10": {
                    x: 0.052,
                    y: 44.829,
                    r: 0.095
                },
                "11": {
                    x: 0.141,
                    y: 44.792,
                    r: 0.134
                },
                "12": {
                    x: 0.143,
                    y: 44.815,
                    r: 0.157
                },
                "13": {
                    x: 0.134,
                    y: 44.788,
                    r: 0.169
                },
                "14": {
                    x: 0.147,
                    y: 44.82,
                    r: 0.174
                },
                "15": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "16": {
                    x: 0.018,
                    y: 44.799,
                    r: 0.174
                },
                "17": {
                    x: -0.002,
                    r: 0.171
                },
                "18": {
                    x: 0,
                    y: 44.797,
                    r: 0.163
                },
                "19": {
                    x: -0.015,
                    y: 44.784,
                    r: 0.148
                },
                "20": {
                    x: 0.013,
                    y: 44.79,
                    r: 0.123
                },
                "21": {
                    x: -0.007,
                    y: 44.771,
                    r: 0.085
                },
                "22": {
                    x: -0.022,
                    y: 44.8,
                    r: 0.033
                },
                "23": {
                    x: 0.053,
                    y: 44.843,
                    r: -0.033
                },
                "24": {
                    x: 0.039,
                    y: 44.848,
                    r: -0.085
                },
                "25": {
                    x: 0.06,
                    y: 44.835,
                    r: -0.123
                },
                "26": {
                    x: 0.035,
                    y: 44.841,
                    r: -0.148
                },
                "27": {
                    x: 0.033,
                    y: 44.819,
                    r: -0.163
                },
                "28": {
                    x: 0.064,
                    y: 44.851,
                    r: -0.171
                },
                "29": {
                    x: 0.037,
                    y: 44.857,
                    r: -0.174
                },
                "30": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                },
                "32": {
                    x: -0.036,
                    y: 44.845,
                    r: -0.16
                },
                "33": {
                    x: -0.048,
                    y: 44.827,
                    r: -0.118
                },
                "34": {
                    x: -0.021,
                    y: 44.832,
                    r: -0.046
                },
                "35": {
                    x: -0.001,
                    y: 44.814,
                    r: 0.046
                },
                "36": {
                    x: 0.016,
                    y: 44.805,
                    r: 0.118
                },
                "37": {
                    x: -0.004,
                    y: 44.815,
                    r: 0.16
                },
                "38": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "39": {
                    x: -0.014,
                    y: 44.795,
                    r: 0.16
                },
                "40": {
                    x: -0.001,
                    y: 44.777,
                    r: 0.118
                },
                "41": {
                    x: -0.028,
                    y: 44.782,
                    r: 0.046
                },
                "42": {
                    x: 0.051,
                    y: 44.862,
                    r: -0.046
                },
                "43": {
                    x: 0.034,
                    y: 44.854,
                    r: -0.118
                },
                "44": {
                    x: 0.053,
                    y: 44.864,
                    r: -0.16
                },
                "45": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_FirebellyNewt = makeObj("Container", 'Body_FirebellyNewt', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Firebelly_Newt.png"]))
            .setTransform(-58, -76, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_FirebellyNewt = makeObj("Container", 'Tail_FirebellyNewt', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Firebelly_Newt 1.png"]))
            .setTransform(-11, -7, 0.5, 0.555);
        this.addChild(instance1);
    });

    lib.Animated_FirebellyNewt = makeObj("MovieClip", 'Animated_FirebellyNewt',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_FirebellyNewt();
        var instance1 = new lib.Body_FirebellyNewt();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 44.8,
                    r: 0
                },
                "2": {
                    x: 0.15,
                    y: 44.65,
                    r: -0.175
                },
                "3": {
                    x: 0.122,
                    y: 44.749,
                    r: -0.174
                },
                "4": {
                    x: 0.074,
                    y: 44.75,
                    r: -0.169
                },
                "5": {
                    x: 0.084,
                    y: 44.746,
                    r: -0.157
                },
                "6": {
                    x: 0.085,
                    y: 44.769,
                    r: -0.134
                },
                "7": {
                    x: 0.057,
                    y: 44.771,
                    r: -0.095
                },
                "8": {
                    x: 0.089,
                    y: 44.752,
                    r: -0.037
                },
                "9": {
                    x: 0.062,
                    y: 44.835,
                    r: 0.037
                },
                "10": {
                    x: 0.052,
                    y: 44.829,
                    r: 0.095
                },
                "11": {
                    x: 0.141,
                    y: 44.792,
                    r: 0.134
                },
                "12": {
                    x: 0.143,
                    y: 44.815,
                    r: 0.157
                },
                "13": {
                    x: 0.134,
                    y: 44.788,
                    r: 0.169
                },
                "14": {
                    x: 0.147,
                    y: 44.82,
                    r: 0.174
                },
                "15": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "16": {
                    x: 0.018,
                    y: 44.799,
                    r: 0.174
                },
                "17": {
                    x: -0.002,
                    r: 0.171
                },
                "18": {
                    x: 0,
                    y: 44.797,
                    r: 0.163
                },
                "19": {
                    x: -0.015,
                    y: 44.784,
                    r: 0.148
                },
                "20": {
                    x: 0.013,
                    y: 44.79,
                    r: 0.123
                },
                "21": {
                    x: -0.007,
                    y: 44.771,
                    r: 0.085
                },
                "22": {
                    x: -0.022,
                    y: 44.8,
                    r: 0.033
                },
                "23": {
                    x: 0.053,
                    y: 44.843,
                    r: -0.033
                },
                "24": {
                    x: 0.039,
                    y: 44.848,
                    r: -0.085
                },
                "25": {
                    x: 0.06,
                    y: 44.835,
                    r: -0.123
                },
                "26": {
                    x: 0.035,
                    y: 44.841,
                    r: -0.148
                },
                "27": {
                    x: 0.033,
                    y: 44.819,
                    r: -0.163
                },
                "28": {
                    x: 0.064,
                    y: 44.851,
                    r: -0.171
                },
                "29": {
                    x: 0.037,
                    y: 44.857,
                    r: -0.174
                },
                "30": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                },
                "32": {
                    x: -0.036,
                    y: 44.845,
                    r: -0.16
                },
                "33": {
                    x: -0.048,
                    y: 44.827,
                    r: -0.118
                },
                "34": {
                    x: -0.021,
                    y: 44.832,
                    r: -0.046
                },
                "35": {
                    x: -0.001,
                    y: 44.814,
                    r: 0.046
                },
                "36": {
                    x: 0.016,
                    y: 44.805,
                    r: 0.118
                },
                "37": {
                    x: -0.004,
                    y: 44.815,
                    r: 0.16
                },
                "38": {
                    x: 0,
                    y: 44.75,
                    r: 0.175
                },
                "39": {
                    x: -0.014,
                    y: 44.795,
                    r: 0.16
                },
                "40": {
                    x: -0.001,
                    y: 44.777,
                    r: 0.118
                },
                "41": {
                    x: -0.028,
                    y: 44.782,
                    r: 0.046
                },
                "42": {
                    x: 0.051,
                    y: 44.862,
                    r: -0.046
                },
                "43": {
                    x: 0.034,
                    y: 44.854,
                    r: -0.118
                },
                "44": {
                    x: 0.053,
                    y: 44.864,
                    r: -0.16
                },
                "45": {
                    x: 0,
                    y: 44.75,
                    r: -0.175
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.MantisShrimpLegSymbol = makeObj("Container", 'MantisShrimpLegSymbol', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Mantis_Shrimp 2.png"]))
            .setTransform(-28, -9, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.MantisShrimpLegsAnimated = makeObj("MovieClip", 'MantisShrimpLegsAnimated',{
            duration: 15
        }, function(){
		this.stop()
        var instance1 = new lib.MantisShrimpLegSymbol();
        this[instance1.name = "legs"] = instance1;
        this.addTimedChild(instance1, 0, 15, {
                "0": {
                    sy: 1,
                    kx: 0
                },
                "1": {
                    sy: 0.979
                },
                "2": {
                    sy: 0.869
                },
                "3": {
                    sy: 0.479
                },
                "4": {
                    sy: 3.676,
                    kx: 3.142
                },
                "5": {
                    sy: 3.59
                },
                "6": {
                    sy: 3.069
                },
                "7": {
                    sy: 0.506
                },
                "8": {
                    sy: 0.453,
                    kx: 0
                },
                "9": {
                    sy: 0.652
                },
                "10": {
                    sy: 0.808
                },
                "11": {
                    sy: 0.907
                },
                "12": {
                    sy: 0.964
                },
                "13": {
                    sy: 0.992
                },
                "14": {
                    sy: 1
                }
            })
            .addAction(function () {
                this.stop();
            }, 0)
            .addAction(function () {
                this.stop();
            }, 14);
    });

    lib.Body_MantisShrimp = makeObj("Container", 'Body_MantisShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Mantis_Shrimp.png"]))
            .setTransform(-88, -112, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_MantisShrimp = makeObj("Container", 'Tail_MantisShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Mantis_Shrimp 1.png"]))
            .setTransform(-36, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_MantisShrimp = makeObj("MovieClip", 'Animated_MantisShrimp',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance3 = new lib.Tail_MantisShrimp();
        var instance2 = new lib.Body_MantisShrimp();
        var instance4 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneSmall.png"]))
            .setTransform(-28, -38, 0.837, 0.837);
        var instance1 = new lib.MantisShrimpLegsAnimated();
        this[instance1.name = "legs"] = instance1;
        this.addTimedChild(instance3, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    y: 49.95,
                    r: -0.262
                },
                "3": {
                    x: -0.047,
                    y: 50.048,
                    r: -0.261
                },
                "4": {
                    x: -0.03,
                    y: 50.047,
                    r: -0.254
                },
                "5": {
                    x: -0.034,
                    y: 50.032,
                    r: -0.236
                },
                "6": {
                    x: -0.045,
                    y: 50.005,
                    r: -0.201
                },
                "7": {
                    x: -0.037,
                    y: 50.046,
                    r: -0.143
                },
                "8": {
                    x: -0.062,
                    y: 50.044,
                    r: -0.056
                },
                "9": {
                    x: -0.051,
                    y: 50.001,
                    r: 0.056
                },
                "10": {
                    x: -0.054,
                    y: 50.02,
                    r: 0.143
                },
                "11": {
                    x: 0.009,
                    y: 50.002,
                    r: 0.201
                },
                "12": {
                    x: -0.002,
                    y: 49.988,
                    r: 0.236
                },
                "13": {
                    x: 0.007,
                    y: 49.998,
                    r: 0.254
                },
                "14": {
                    x: 0.017,
                    y: 49.983,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.031,
                    y: 49.998,
                    r: 0.261
                },
                "17": {
                    x: -0.002,
                    r: 0.257
                },
                "18": {
                    x: 0.038,
                    y: 50.042,
                    r: 0.245
                },
                "19": {
                    x: 0.036,
                    y: 50.01,
                    r: 0.222
                },
                "20": {
                    x: 0.024,
                    y: 49.999,
                    r: 0.184
                },
                "21": {
                    x: 0.081,
                    y: 50.05,
                    r: 0.128
                },
                "22": {
                    x: 0.061,
                    y: 50.07,
                    r: 0.049
                },
                "23": {
                    x: 0.087,
                    y: 50.053,
                    r: -0.049
                },
                "24": {
                    y: 50.052,
                    r: -0.128
                },
                "25": {
                    x: 0.067,
                    y: 50.056,
                    r: -0.184
                },
                "26": {
                    x: 0.058,
                    y: 50.057,
                    r: -0.222
                },
                "27": {
                    x: 0.068,
                    y: 50.062,
                    r: -0.245
                },
                "28": {
                    x: 0.082,
                    y: 50.073,
                    r: -0.257
                },
                "29": {
                    x: 0.071,
                    y: 50.064,
                    r: -0.261
                },
                "30": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                },
                "32": {
                    x: -0.066,
                    y: 50.037,
                    r: -0.24
                },
                "33": {
                    x: -0.064,
                    y: 50.016,
                    r: -0.176
                },
                "34": {
                    x: -0.047,
                    y: 50.028,
                    r: -0.069
                },
                "35": {
                    x: -0.044,
                    y: 50.035,
                    r: 0.069
                },
                "36": {
                    x: 0.011,
                    y: 49.984,
                    r: 0.176
                },
                "37": {
                    x: 0.006,
                    y: 49.983,
                    r: 0.24
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: 0.018,
                    y: 50.038,
                    r: 0.24
                },
                "40": {
                    x: 0.019,
                    y: 50.017,
                    r: 0.176
                },
                "41": {
                    x: 0.057,
                    y: 50.077,
                    r: 0.069
                },
                "42": {
                    x: 0.059,
                    y: 50.079,
                    r: -0.069
                },
                "43": {
                    y: 50.074,
                    r: -0.176
                },
                "44": {
                    x: 0.066,
                    y: 50.072,
                    r: -0.24
                },
                "45": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                }
            })
            .addTimedChild(instance2)
            .addTimedChild(instance4, 47, 1)
            .addTimedChild(instance1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_PistolShrimp = makeObj("Container", 'Body_PistolShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Pistol_Shrimp.png"]))
            .setTransform(-72, -99, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_PistolShrimp = makeObj("Container", 'Tail_PistolShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Pistol_Shrimp 1.png"]))
            .setTransform(-26, 3, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_PistolShrimp = makeObj("MovieClip", 'Animated_PistolShrimp',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_PistolShrimp();
        var instance1 = new lib.Body_PistolShrimp();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-37, -36, 0.876, 0.876);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    y: 49.95,
                    r: -0.262
                },
                "3": {
                    x: -0.047,
                    y: 50.048,
                    r: -0.261
                },
                "4": {
                    x: -0.03,
                    y: 50.047,
                    r: -0.254
                },
                "5": {
                    x: -0.034,
                    y: 50.032,
                    r: -0.236
                },
                "6": {
                    x: -0.045,
                    y: 50.005,
                    r: -0.201
                },
                "7": {
                    x: -0.037,
                    y: 50.046,
                    r: -0.143
                },
                "8": {
                    x: -0.062,
                    y: 50.044,
                    r: -0.056
                },
                "9": {
                    x: -0.051,
                    y: 50.001,
                    r: 0.056
                },
                "10": {
                    x: -0.054,
                    y: 50.02,
                    r: 0.143
                },
                "11": {
                    x: 0.009,
                    y: 50.002,
                    r: 0.201
                },
                "12": {
                    x: -0.002,
                    y: 49.988,
                    r: 0.236
                },
                "13": {
                    x: 0.007,
                    y: 49.998,
                    r: 0.254
                },
                "14": {
                    x: 0.017,
                    y: 49.983,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.031,
                    y: 49.998,
                    r: 0.261
                },
                "17": {
                    x: -0.002,
                    r: 0.257
                },
                "18": {
                    x: 0.038,
                    y: 50.042,
                    r: 0.245
                },
                "19": {
                    x: 0.036,
                    y: 50.01,
                    r: 0.222
                },
                "20": {
                    x: 0.024,
                    y: 49.999,
                    r: 0.184
                },
                "21": {
                    x: 0.081,
                    y: 50.05,
                    r: 0.128
                },
                "22": {
                    x: 0.061,
                    y: 50.07,
                    r: 0.049
                },
                "23": {
                    x: 0.087,
                    y: 50.053,
                    r: -0.049
                },
                "24": {
                    y: 50.052,
                    r: -0.128
                },
                "25": {
                    x: 0.067,
                    y: 50.056,
                    r: -0.184
                },
                "26": {
                    x: 0.058,
                    y: 50.057,
                    r: -0.222
                },
                "27": {
                    x: 0.068,
                    y: 50.062,
                    r: -0.245
                },
                "28": {
                    x: 0.082,
                    y: 50.073,
                    r: -0.257
                },
                "29": {
                    x: 0.071,
                    y: 50.064,
                    r: -0.261
                },
                "30": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                },
                "32": {
                    x: -0.066,
                    y: 50.037,
                    r: -0.24
                },
                "33": {
                    x: -0.064,
                    y: 50.016,
                    r: -0.176
                },
                "34": {
                    x: -0.047,
                    y: 50.028,
                    r: -0.069
                },
                "35": {
                    x: -0.044,
                    y: 50.035,
                    r: 0.069
                },
                "36": {
                    x: 0.011,
                    y: 49.984,
                    r: 0.176
                },
                "37": {
                    x: 0.006,
                    y: 49.983,
                    r: 0.24
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: 0.018,
                    y: 50.038,
                    r: 0.24
                },
                "40": {
                    x: 0.019,
                    y: 50.017,
                    r: 0.176
                },
                "41": {
                    x: 0.057,
                    y: 50.077,
                    r: 0.069
                },
                "42": {
                    x: 0.059,
                    y: 50.079,
                    r: -0.069
                },
                "43": {
                    y: 50.074,
                    r: -0.176
                },
                "44": {
                    x: 0.066,
                    y: 50.072,
                    r: -0.24
                },
                "45": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_SakuraShrimp = makeObj("Container", 'Body_SakuraShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Sakura_Shrimp.png"]))
            .setTransform(-90, -72, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_SakuraShrimp = makeObj("Container", 'Tail_SakuraShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Sakura_Shrimp 1.png"]))
            .setTransform(-26, 3, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_SakuraShrimp = makeObj("MovieClip", 'Animated_SakuraShrimp',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_SakuraShrimp();
        var instance1 = new lib.Body_SakuraShrimp();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-39, -36, 0.901, 0.901);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    y: 49.95,
                    r: -0.262
                },
                "3": {
                    x: -0.047,
                    y: 50.048,
                    r: -0.261
                },
                "4": {
                    x: -0.03,
                    y: 50.047,
                    r: -0.254
                },
                "5": {
                    x: -0.034,
                    y: 50.032,
                    r: -0.236
                },
                "6": {
                    x: -0.045,
                    y: 50.005,
                    r: -0.201
                },
                "7": {
                    x: -0.037,
                    y: 50.046,
                    r: -0.143
                },
                "8": {
                    x: -0.062,
                    y: 50.044,
                    r: -0.056
                },
                "9": {
                    x: -0.051,
                    y: 50.001,
                    r: 0.056
                },
                "10": {
                    x: -0.054,
                    y: 50.02,
                    r: 0.143
                },
                "11": {
                    x: 0.009,
                    y: 50.002,
                    r: 0.201
                },
                "12": {
                    x: -0.002,
                    y: 49.988,
                    r: 0.236
                },
                "13": {
                    x: 0.007,
                    y: 49.998,
                    r: 0.254
                },
                "14": {
                    x: 0.017,
                    y: 49.983,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.031,
                    y: 49.998,
                    r: 0.261
                },
                "17": {
                    x: -0.002,
                    r: 0.257
                },
                "18": {
                    x: 0.038,
                    y: 50.042,
                    r: 0.245
                },
                "19": {
                    x: 0.036,
                    y: 50.01,
                    r: 0.222
                },
                "20": {
                    x: 0.024,
                    y: 49.999,
                    r: 0.184
                },
                "21": {
                    x: 0.081,
                    y: 50.05,
                    r: 0.128
                },
                "22": {
                    x: 0.061,
                    y: 50.07,
                    r: 0.049
                },
                "23": {
                    x: 0.087,
                    y: 50.053,
                    r: -0.049
                },
                "24": {
                    y: 50.052,
                    r: -0.128
                },
                "25": {
                    x: 0.067,
                    y: 50.056,
                    r: -0.184
                },
                "26": {
                    x: 0.058,
                    y: 50.057,
                    r: -0.222
                },
                "27": {
                    x: 0.068,
                    y: 50.062,
                    r: -0.245
                },
                "28": {
                    x: 0.082,
                    y: 50.073,
                    r: -0.257
                },
                "29": {
                    x: 0.071,
                    y: 50.064,
                    r: -0.261
                },
                "30": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                },
                "32": {
                    x: -0.066,
                    y: 50.037,
                    r: -0.24
                },
                "33": {
                    x: -0.064,
                    y: 50.016,
                    r: -0.176
                },
                "34": {
                    x: -0.047,
                    y: 50.028,
                    r: -0.069
                },
                "35": {
                    x: -0.044,
                    y: 50.035,
                    r: 0.069
                },
                "36": {
                    x: 0.011,
                    y: 49.984,
                    r: 0.176
                },
                "37": {
                    x: 0.006,
                    y: 49.983,
                    r: 0.24
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: 0.018,
                    y: 50.038,
                    r: 0.24
                },
                "40": {
                    x: 0.019,
                    y: 50.017,
                    r: 0.176
                },
                "41": {
                    x: 0.057,
                    y: 50.077,
                    r: 0.069
                },
                "42": {
                    x: 0.059,
                    y: 50.079,
                    r: -0.069
                },
                "43": {
                    y: 50.074,
                    r: -0.176
                },
                "44": {
                    x: 0.066,
                    y: 50.072,
                    r: -0.24
                },
                "45": {
                    x: 0,
                    y: 49.95,
                    r: -0.262
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_ElectricRay = makeObj("Container", 'Body_ElectricRay', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Electric_Ray.png"]))
            .setTransform(-62, -64, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_ElectricRay = makeObj("Container", 'Tail_ElectricRay', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Electric_Ray 1.png"]))
            .setTransform(-11, 9, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_ElectricRay = makeObj("MovieClip", 'Animated_ElectricRay',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_ElectricRay();
        var instance1 = new lib.Body_ElectricRay();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -36);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 42,
                    r: 0
                },
                "2": {
                    x: 0.05,
                    r: -0.087
                },
                "3": {
                    x: 0.037,
                    y: 41.999
                },
                "4": {
                    x: -0.006,
                    r: -0.085
                },
                "5": {
                    x: -0.01,
                    r: -0.079
                },
                "6": {
                    x: -0.004,
                    y: 41.992,
                    r: -0.067
                },
                "7": {
                    x: 0.032,
                    y: 42.018,
                    r: -0.048
                },
                "8": {
                    x: 0.02,
                    y: 42.004,
                    r: -0.019
                },
                "9": {
                    x: 0.012,
                    y: 42.019,
                    r: 0.019
                },
                "10": {
                    x: -0.043,
                    y: 42.074,
                    r: 0.048
                },
                "11": {
                    x: -0.049,
                    y: 42.058,
                    r: 0.067
                },
                "12": {
                    x: -0.036,
                    y: 42.081,
                    r: 0.079
                },
                "13": {
                    x: -0.037,
                    y: 42.088,
                    r: 0.085
                },
                "14": {
                    x: -0.028,
                    y: 42.072,
                    r: 0.087
                },
                "15": {
                    x: -0.05,
                    y: 42
                },
                "16": {
                    x: -0.042,
                    y: 42.05
                },
                "17": {
                    x: 0.019,
                    y: 42.051,
                    r: 0.086
                },
                "18": {
                    x: 0.034,
                    y: 42.05,
                    r: 0.082
                },
                "19": {
                    x: 0.055,
                    y: 42.047,
                    r: 0.074
                },
                "20": {
                    x: 0.035,
                    y: 42.087,
                    r: 0.061
                },
                "21": {
                    x: -0.024,
                    y: 42.011,
                    r: 0.043
                },
                "22": {
                    x: -0.023,
                    y: 41.999,
                    r: 0.016
                },
                "23": {
                    x: -0.008,
                    y: 42.031,
                    r: -0.016
                },
                "24": {
                    x: -0.012,
                    y: 42.004,
                    r: -0.043
                },
                "25": {
                    x: -0.029,
                    y: 42.045,
                    r: -0.061
                },
                "26": {
                    x: -0.005,
                    y: 42.014,
                    r: -0.074
                },
                "27": {
                    x: -0.039,
                    y: 42.011,
                    r: -0.082
                },
                "28": {
                    x: -0.026,
                    y: 42.034,
                    r: -0.086
                },
                "29": {
                    x: -0.016,
                    y: 42.023,
                    r: -0.087
                },
                "30": {
                    x: 0.05,
                    y: 42
                },
                "32": {
                    x: 0.001,
                    y: 41.998,
                    r: -0.08
                },
                "33": {
                    x: 0.004,
                    y: 42.033,
                    r: -0.059
                },
                "34": {
                    x: 0.01,
                    y: 42.017,
                    r: -0.023
                },
                "35": {
                    x: 0.023,
                    y: 41.999,
                    r: 0.023
                },
                "36": {
                    x: -0.06,
                    y: 42.059,
                    r: 0.059
                },
                "37": {
                    x: -0.047,
                    y: 42.07,
                    r: 0.08
                },
                "38": {
                    x: -0.05,
                    y: 42,
                    r: 0.087
                },
                "39": {
                    x: 0.048,
                    y: 42.049,
                    r: 0.08
                },
                "40": {
                    x: 0.045,
                    y: 42.084,
                    r: 0.059
                },
                "41": {
                    x: -0.01,
                    y: 42.018,
                    r: 0.023
                },
                "42": {
                    x: -0.023,
                    y: 42,
                    r: -0.023
                },
                "43": {
                    x: -0.039,
                    y: 42.011,
                    r: -0.059
                },
                "44": {
                    x: -0.002,
                    y: 42.022,
                    r: -0.08
                },
                "45": {
                    x: 0.05,
                    y: 42,
                    r: -0.087
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_BatRay = makeObj("Container", 'Body_BatRay', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Bat_Ray.png"]))
            .setTransform(-81, -58, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_BatRay = makeObj("Container", 'Tail_BatRay', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Bat_Ray 1.png"]))
            .setTransform(-11, -9, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_BatRay = makeObj("MovieClip", 'Animated_BatRay',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_BatRay();
        var instance1 = new lib.Body_BatRay();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -36);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 42,
                    r: 0
                },
                "2": {
                    x: 0.05,
                    r: -0.087
                },
                "3": {
                    x: 0.037,
                    y: 41.999
                },
                "4": {
                    x: -0.006,
                    r: -0.085
                },
                "5": {
                    x: -0.01,
                    r: -0.079
                },
                "6": {
                    x: -0.004,
                    y: 41.992,
                    r: -0.067
                },
                "7": {
                    x: 0.032,
                    y: 42.018,
                    r: -0.048
                },
                "8": {
                    x: 0.02,
                    y: 42.004,
                    r: -0.019
                },
                "9": {
                    x: 0.012,
                    y: 42.019,
                    r: 0.019
                },
                "10": {
                    x: -0.043,
                    y: 42.074,
                    r: 0.048
                },
                "11": {
                    x: -0.049,
                    y: 42.058,
                    r: 0.067
                },
                "12": {
                    x: -0.036,
                    y: 42.081,
                    r: 0.079
                },
                "13": {
                    x: -0.037,
                    y: 42.088,
                    r: 0.085
                },
                "14": {
                    x: -0.028,
                    y: 42.072,
                    r: 0.087
                },
                "15": {
                    x: -0.05,
                    y: 42
                },
                "16": {
                    x: -0.042,
                    y: 42.05
                },
                "17": {
                    x: 0.019,
                    y: 42.051,
                    r: 0.086
                },
                "18": {
                    x: 0.034,
                    y: 42.05,
                    r: 0.082
                },
                "19": {
                    x: 0.055,
                    y: 42.047,
                    r: 0.074
                },
                "20": {
                    x: 0.035,
                    y: 42.087,
                    r: 0.061
                },
                "21": {
                    x: -0.024,
                    y: 42.011,
                    r: 0.043
                },
                "22": {
                    x: -0.023,
                    y: 41.999,
                    r: 0.016
                },
                "23": {
                    x: -0.008,
                    y: 42.031,
                    r: -0.016
                },
                "24": {
                    x: -0.012,
                    y: 42.004,
                    r: -0.043
                },
                "25": {
                    x: -0.029,
                    y: 42.045,
                    r: -0.061
                },
                "26": {
                    x: -0.005,
                    y: 42.014,
                    r: -0.074
                },
                "27": {
                    x: -0.039,
                    y: 42.011,
                    r: -0.082
                },
                "28": {
                    x: -0.026,
                    y: 42.034,
                    r: -0.086
                },
                "29": {
                    x: -0.016,
                    y: 42.023,
                    r: -0.087
                },
                "30": {
                    x: 0.05,
                    y: 42
                },
                "32": {
                    x: 0.001,
                    y: 41.998,
                    r: -0.08
                },
                "33": {
                    x: 0.004,
                    y: 42.033,
                    r: -0.059
                },
                "34": {
                    x: 0.01,
                    y: 42.017,
                    r: -0.023
                },
                "35": {
                    x: 0.023,
                    y: 41.999,
                    r: 0.023
                },
                "36": {
                    x: -0.06,
                    y: 42.059,
                    r: 0.059
                },
                "37": {
                    x: -0.047,
                    y: 42.07,
                    r: 0.08
                },
                "38": {
                    x: -0.05,
                    y: 42,
                    r: 0.087
                },
                "39": {
                    x: 0.048,
                    y: 42.049,
                    r: 0.08
                },
                "40": {
                    x: 0.045,
                    y: 42.084,
                    r: 0.059
                },
                "41": {
                    x: -0.01,
                    y: 42.018,
                    r: 0.023
                },
                "42": {
                    x: -0.023,
                    y: 42,
                    r: -0.023
                },
                "43": {
                    x: -0.039,
                    y: 42.011,
                    r: -0.059
                },
                "44": {
                    x: -0.002,
                    y: 42.022,
                    r: -0.08
                },
                "45": {
                    x: 0.05,
                    y: 42,
                    r: -0.087
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_StingRay = makeObj("Container", 'Body_StingRay', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Stingray.png"]))
            .setTransform(-69, -51, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Stingray = makeObj("Container", 'Tail_Stingray', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Stingray 1.png"]))
            .setTransform(-11, -6, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_StingRay = makeObj("MovieClip", 'Animated_StingRay',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Stingray();
        var instance1 = new lib.Body_StingRay();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -36);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 42,
                    r: 0
                },
                "2": {
                    x: 0.05,
                    r: -0.087
                },
                "3": {
                    x: 0.037,
                    y: 41.999
                },
                "4": {
                    x: -0.006,
                    r: -0.085
                },
                "5": {
                    x: -0.01,
                    r: -0.079
                },
                "6": {
                    x: -0.004,
                    y: 41.992,
                    r: -0.067
                },
                "7": {
                    x: 0.032,
                    y: 42.018,
                    r: -0.048
                },
                "8": {
                    x: 0.02,
                    y: 42.004,
                    r: -0.019
                },
                "9": {
                    x: 0.012,
                    y: 42.019,
                    r: 0.019
                },
                "10": {
                    x: -0.043,
                    y: 42.074,
                    r: 0.048
                },
                "11": {
                    x: -0.049,
                    y: 42.058,
                    r: 0.067
                },
                "12": {
                    x: -0.036,
                    y: 42.081,
                    r: 0.079
                },
                "13": {
                    x: -0.037,
                    y: 42.088,
                    r: 0.085
                },
                "14": {
                    x: -0.028,
                    y: 42.072,
                    r: 0.087
                },
                "15": {
                    x: -0.05,
                    y: 42
                },
                "16": {
                    x: -0.042,
                    y: 42.05
                },
                "17": {
                    x: 0.019,
                    y: 42.051,
                    r: 0.086
                },
                "18": {
                    x: 0.034,
                    y: 42.05,
                    r: 0.082
                },
                "19": {
                    x: 0.055,
                    y: 42.047,
                    r: 0.074
                },
                "20": {
                    x: 0.035,
                    y: 42.087,
                    r: 0.061
                },
                "21": {
                    x: -0.024,
                    y: 42.011,
                    r: 0.043
                },
                "22": {
                    x: -0.023,
                    y: 41.999,
                    r: 0.016
                },
                "23": {
                    x: -0.008,
                    y: 42.031,
                    r: -0.016
                },
                "24": {
                    x: -0.012,
                    y: 42.004,
                    r: -0.043
                },
                "25": {
                    x: -0.029,
                    y: 42.045,
                    r: -0.061
                },
                "26": {
                    x: -0.005,
                    y: 42.014,
                    r: -0.074
                },
                "27": {
                    x: -0.039,
                    y: 42.011,
                    r: -0.082
                },
                "28": {
                    x: -0.026,
                    y: 42.034,
                    r: -0.086
                },
                "29": {
                    x: -0.016,
                    y: 42.023,
                    r: -0.087
                },
                "30": {
                    x: 0.05,
                    y: 42
                },
                "32": {
                    x: 0.001,
                    y: 41.998,
                    r: -0.08
                },
                "33": {
                    x: 0.004,
                    y: 42.033,
                    r: -0.059
                },
                "34": {
                    x: 0.01,
                    y: 42.017,
                    r: -0.023
                },
                "35": {
                    x: 0.023,
                    y: 41.999,
                    r: 0.023
                },
                "36": {
                    x: -0.06,
                    y: 42.059,
                    r: 0.059
                },
                "37": {
                    x: -0.047,
                    y: 42.07,
                    r: 0.08
                },
                "38": {
                    x: -0.05,
                    y: 42,
                    r: 0.087
                },
                "39": {
                    x: 0.048,
                    y: 42.049,
                    r: 0.08
                },
                "40": {
                    x: 0.045,
                    y: 42.084,
                    r: 0.059
                },
                "41": {
                    x: -0.01,
                    y: 42.018,
                    r: 0.023
                },
                "42": {
                    x: -0.023,
                    y: 42,
                    r: -0.023
                },
                "43": {
                    x: -0.039,
                    y: 42.011,
                    r: -0.059
                },
                "44": {
                    x: -0.002,
                    y: 42.022,
                    r: -0.08
                },
                "45": {
                    x: 0.05,
                    y: 42,
                    r: -0.087
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Tail_SnappingTurtle = makeObj("Container", 'Tail_SnappingTurtle', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Snapping_Turtle 1.png"]))
            .setTransform(-10, -2, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_AlligatorSnappingTurtle = makeObj("MovieClip", 'Animated_AlligatorSnappingTurtle',{
            duration: 35,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 33
            }
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Snapping_Turtle.png"]));
        var instance2 = new lib.Tail_SnappingTurtle();
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Snapping_Turtle 2.png"]));
        var instance6 = new lib.Tail_SnappingTurtle()
            .setTransform(0, 44.4, 1, 1, -0.397);
        var instance5 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Snapping_Turtle 2.png"]))
            .setTransform(-72, -54, 0.5, 0.5);
        var instance4 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneSmall.png"]))
            .setTransform(-33, -37);
        this.addTimedChild(instance3, 0, 35, {
                "0": {
                    x: -68,
                    y: -68,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance2, 0, 31, {
                "0": {
                    x: 0,
                    y: 44.4,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.003,
                    y: 44.449,
                    r: -0.395
                },
                "4": {
                    x: -0.025,
                    y: 44.447,
                    r: -0.387
                },
                "5": {
                    x: -0.036,
                    y: 44.426,
                    r: -0.364
                },
                "6": {
                    x: -0.002,
                    y: 44.419,
                    r: -0.32
                },
                "7": {
                    x: -0.027,
                    y: 44.452,
                    r: -0.247
                },
                "8": {
                    x: -0.017,
                    y: 44.419,
                    r: -0.138
                },
                "9": {
                    y: 44.404,
                    r: 0.003
                },
                "10": {
                    y: 44.432,
                    r: 0.112
                },
                "11": {
                    x: -0.042,
                    y: 44.449,
                    r: 0.185
                },
                "12": {
                    x: -0.012,
                    y: 44.431,
                    r: 0.229
                },
                "13": {
                    x: -0.025,
                    y: 44.429,
                    r: 0.252
                },
                "14": {
                    x: -0.021,
                    y: 44.453,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 44.4,
                    r: 0.262
                },
                "16": {
                    x: 0.035,
                    y: 44.399,
                    r: 0.261
                },
                "17": {
                    x: 0.027,
                    y: 44.398,
                    r: 0.256
                },
                "18": {
                    x: 0.036,
                    y: 44.389,
                    r: 0.241
                },
                "19": {
                    x: 0.017,
                    y: 44.394,
                    r: 0.212
                },
                "20": {
                    x: 0.024,
                    y: 44.388,
                    r: 0.164
                },
                "21": {
                    x: -0.002,
                    y: 44.42,
                    r: 0.093
                },
                "22": {
                    x: 0.04,
                    y: 44.419,
                    r: -0.006
                },
                "23": {
                    x: 0.009,
                    y: 44.403,
                    r: -0.129
                },
                "24": {
                    x: 0.038,
                    y: 44.429,
                    r: -0.228
                },
                "25": {
                    x: 0.014,
                    y: 44.398,
                    r: -0.299
                },
                "26": {
                    x: 0.026,
                    y: 44.433,
                    r: -0.347
                },
                "27": {
                    x: 0.017,
                    y: 44.435,
                    r: -0.375
                },
                "28": {
                    x: -0.006,
                    y: 44.439,
                    r: -0.39
                },
                "29": {
                    x: 0.036,
                    y: 44.441,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 44.4,
                    r: -0.397
                }
            })
            .addTimedChild(instance1, 0, 31, {
                "0": {
                    x: -72,
                    y: -54,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance6, 33, 2)
            .addTimedChild(instance5, 33, 2)
            .addTimedChild(instance4, 33, 2)
            .addAction(function () {
                this.stop();
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.stop();
            }, 32)
            .addAction(function () {
                this.stop();
            }, 34);
    });

    lib.Tail_LeatherbackTurtle = makeObj("Container", 'Tail_LeatherbackTurtle', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Leatherback_Turtle 1.png"]))
            .setTransform(-7, -9, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_LeatherbackTurtle_2 = makeObj("Container", 'Tail_LeatherbackTurtle_2', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Leatherback_Turtle 2.png"]))
            .setTransform(-7, -9, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_LeatherbackTurtle = makeObj("MovieClip", 'Animated_LeatherbackTurtle',{
            duration: 85,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 81,
                dead: 83
            }
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Leatherback_Turtle.png"]))
            .setTransform(-70, -105, 0.5, 0.5);
        var instance2 = new lib.Tail_LeatherbackTurtle_2();
        var instance1 = new lib.Tail_LeatherbackTurtle();
        var instance4 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneSmall.png"]))
            .setTransform(-33, -37);
        this.addTimedChild(instance3)
            .addTimedChild(instance2, 0, 85, {
                "0": {
                    x: 31.35,
                    y: 0.6,
                    r: 0
                },
                "3": {
                    x: 31.4,
                    y: 0.643
                },
                "4": {
                    x: 31.35,
                    y: 0.62,
                    r: -0.001
                },
                "5": {
                    x: 31.351,
                    y: 0.631,
                    r: -0.002
                },
                "6": {
                    x: 31.352,
                    y: 0.624,
                    r: -0.004
                },
                "7": {
                    x: 31.353,
                    y: 0.647,
                    r: -0.006
                },
                "8": {
                    x: 31.354,
                    y: 0.597,
                    r: -0.01
                },
                "9": {
                    x: 31.355,
                    y: 0.574,
                    r: -0.014
                },
                "10": {
                    y: 0.573,
                    r: -0.018
                },
                "11": {
                    y: 0.493,
                    r: -0.024
                },
                "12": {
                    x: 31.353,
                    y: 0.478,
                    r: -0.031
                },
                "13": {
                    x: 31.449,
                    y: 0.424,
                    r: -0.039
                },
                "14": {
                    x: 31.442,
                    y: 0.426,
                    r: -0.049
                },
                "15": {
                    x: 31.429,
                    y: 0.376,
                    r: -0.06
                },
                "16": {
                    x: 31.41,
                    y: 0.317,
                    r: -0.073
                },
                "17": {
                    x: 31.431,
                    y: 0.287,
                    r: -0.088
                },
                "18": {
                    x: 31.487,
                    y: 0.222,
                    r: -0.106
                },
                "19": {
                    x: 31.471,
                    y: 0.107,
                    r: -0.128
                },
                "20": {
                    x: 31.476,
                    y: 0.021,
                    r: -0.153
                },
                "21": {
                    x: 31.537,
                    y: -0.059,
                    r: -0.183
                },
                "22": {
                    x: 31.536,
                    y: -0.2,
                    r: -0.218
                },
                "23": {
                    x: 31.558,
                    y: -0.35,
                    r: -0.259
                },
                "24": {
                    x: 31.642,
                    y: -0.46,
                    r: -0.304
                },
                "25": {
                    x: 31.609,
                    y: -0.624,
                    r: -0.35
                },
                "26": {
                    x: 31.652,
                    y: -0.77,
                    r: -0.392
                },
                "27": {
                    x: 31.714,
                    y: -0.932,
                    r: -0.429
                },
                "28": {
                    x: 31.721,
                    y: -1.002,
                    r: -0.459
                },
                "29": {
                    x: 31.779,
                    y: -1.104,
                    r: -0.484
                },
                "30": {
                    x: 31.789,
                    y: -1.169,
                    r: -0.504
                },
                "31": {
                    x: 31.794,
                    y: -1.225,
                    r: -0.521
                },
                "32": {
                    x: 31.789,
                    y: -1.292,
                    r: -0.534
                },
                "33": {
                    x: 31.82,
                    y: -1.337,
                    r: -0.545
                },
                "34": {
                    x: 31.831,
                    y: -1.324,
                    r: -0.554
                },
                "35": {
                    x: 31.82,
                    y: -1.361,
                    r: -0.561
                },
                "36": {
                    x: 31.831,
                    y: -1.358,
                    r: -0.566
                },
                "37": {
                    x: 31.813,
                    y: -1.419,
                    r: -0.57
                },
                "38": {
                    y: -1.449,
                    r: -0.573
                },
                "39": {
                    x: 31.83,
                    y: -1.404,
                    r: -0.575
                },
                "40": {
                    x: 31.811,
                    y: -1.434,
                    r: -0.576
                },
                "41": {
                    x: 31.75,
                    y: -1.5,
                    r: -0.577
                },
                "42": {
                    y: -1.544
                },
                "43": {
                    x: 31.751,
                    y: -1.575,
                    r: -0.576
                },
                "44": {
                    x: 31.752,
                    y: -1.54,
                    r: -0.575
                },
                "45": {
                    x: 31.755,
                    r: -0.573
                },
                "46": {
                    x: 31.757,
                    y: -1.572,
                    r: -0.571
                },
                "47": {
                    x: 31.761,
                    y: -1.535,
                    r: -0.568
                },
                "48": {
                    x: 31.765,
                    y: -1.526,
                    r: -0.565
                },
                "49": {
                    x: 31.77,
                    y: -1.493,
                    r: -0.561
                },
                "50": {
                    x: 31.774,
                    y: -1.533,
                    r: -0.556
                },
                "51": {
                    x: 31.778,
                    y: -1.441,
                    r: -0.55
                },
                "52": {
                    x: 31.732,
                    y: -1.463,
                    r: -0.543
                },
                "53": {
                    x: 31.734,
                    y: -1.394,
                    r: -0.534
                },
                "54": {
                    y: -1.324,
                    r: -0.524
                },
                "55": {
                    x: 31.73,
                    y: -1.295,
                    r: -0.512
                },
                "56": {
                    x: 31.719,
                    y: -1.244,
                    r: -0.498
                },
                "57": {
                    x: 31.747,
                    y: -1.153,
                    r: -0.481
                },
                "58": {
                    x: 31.708,
                    y: -1.096,
                    r: -0.46
                },
                "59": {
                    x: 31.692,
                    y: -1.04,
                    r: -0.435
                },
                "60": {
                    x: 31.63,
                    y: -0.933,
                    r: -0.403
                },
                "61": {
                    x: 31.642,
                    y: -0.765,
                    r: -0.363
                },
                "62": {
                    x: 31.587,
                    y: -0.596,
                    r: -0.312
                },
                "63": {
                    x: 31.594,
                    y: -0.431,
                    r: -0.255
                },
                "64": {
                    x: 31.529,
                    y: -0.225,
                    r: -0.2
                },
                "65": {
                    x: 31.49,
                    y: -0.094,
                    r: -0.156
                },
                "66": {
                    x: 31.473,
                    y: 0.069,
                    r: -0.121
                },
                "67": {
                    x: 31.427,
                    y: 0.139,
                    r: -0.095
                },
                "68": {
                    x: 31.442,
                    y: 0.236,
                    r: -0.074
                },
                "69": {
                    x: 31.458,
                    y: 0.304,
                    r: -0.058
                },
                "70": {
                    x: 31.465,
                    y: 0.327,
                    r: -0.044
                },
                "71": {
                    x: 31.455,
                    y: 0.375,
                    r: -0.034
                },
                "72": {
                    x: 31.425,
                    y: 0.364,
                    r: -0.025
                },
                "73": {
                    x: 31.418,
                    y: 0.455,
                    r: -0.018
                },
                "74": {
                    x: 31.382,
                    y: 0.408,
                    r: -0.013
                },
                "75": {
                    x: 31.415,
                    y: 0.425,
                    r: -0.008
                },
                "76": {
                    x: 31.413,
                    y: 0.466,
                    r: -0.005
                },
                "77": {
                    x: 31.425,
                    y: 0.481,
                    r: -0.003
                },
                "78": {
                    x: 31.4,
                    y: 0.475,
                    r: -0.001
                },
                "79": {
                    x: 31.385,
                    y: 0.499,
                    r: 0
                },
                "80": {
                    x: 31.35,
                    y: 0.6
                },
                "81": {
                    y: 3.75,
                    r: 0.105
                }
            })
            .addTimedChild(instance1, 0, 85, {
                "0": {
                    x: -31.35,
                    y: 0.6,
                    kx: 0,
                    ky: 3.142
                },
                "3": {
                    x: -31.4,
                    y: 0.643,
                    ky: -3.141
                },
                "4": {
                    x: -31.35,
                    y: 0.62,
                    kx: -0.001
                },
                "5": {
                    x: -31.351,
                    y: 0.631,
                    kx: -0.002,
                    ky: -3.139
                },
                "6": {
                    x: -31.352,
                    y: 0.624,
                    kx: -0.004,
                    ky: -3.138
                },
                "7": {
                    x: -31.353,
                    y: 0.647,
                    kx: -0.006,
                    ky: -3.135
                },
                "8": {
                    x: -31.354,
                    y: 0.597,
                    kx: -0.01,
                    ky: -3.132
                },
                "9": {
                    x: -31.355,
                    y: 0.574,
                    kx: -0.014,
                    ky: -3.128
                },
                "10": {
                    y: 0.573,
                    kx: -0.018,
                    ky: -3.123
                },
                "11": {
                    y: 0.493,
                    kx: -0.024,
                    ky: -3.117
                },
                "12": {
                    x: -31.353,
                    y: 0.478,
                    kx: -0.031,
                    ky: -3.111
                },
                "13": {
                    x: -31.449,
                    y: 0.424,
                    kx: -0.039,
                    ky: -3.102
                },
                "14": {
                    x: -31.442,
                    y: 0.426,
                    kx: -0.049,
                    ky: -3.093
                },
                "15": {
                    x: -31.429,
                    y: 0.376,
                    kx: -0.06,
                    ky: -3.082
                },
                "16": {
                    x: -31.41,
                    y: 0.317,
                    kx: -0.073,
                    ky: -3.069
                },
                "17": {
                    x: -31.431,
                    y: 0.287,
                    kx: -0.088,
                    ky: -3.053
                },
                "18": {
                    x: -31.487,
                    y: 0.222,
                    kx: -0.106,
                    ky: -3.035
                },
                "19": {
                    x: -31.471,
                    y: 0.107,
                    kx: -0.128,
                    ky: -3.014
                },
                "20": {
                    x: -31.476,
                    y: 0.021,
                    kx: -0.153,
                    ky: -2.989
                },
                "21": {
                    x: -31.537,
                    y: -0.059,
                    kx: -0.183,
                    ky: -2.959
                },
                "22": {
                    x: -31.536,
                    y: -0.2,
                    kx: -0.218,
                    ky: -2.923
                },
                "23": {
                    x: -31.558,
                    y: -0.35,
                    kx: -0.259,
                    ky: -2.883
                },
                "24": {
                    x: -31.642,
                    y: -0.46,
                    kx: -0.304,
                    ky: -2.838
                },
                "25": {
                    x: -31.609,
                    y: -0.624,
                    kx: -0.35,
                    ky: -2.792
                },
                "26": {
                    x: -31.652,
                    y: -0.77,
                    kx: -0.392,
                    ky: -2.75
                },
                "27": {
                    x: -31.714,
                    y: -0.932,
                    kx: -0.429,
                    ky: -2.713
                },
                "28": {
                    x: -31.721,
                    y: -1.002,
                    kx: -0.459,
                    ky: -2.683
                },
                "29": {
                    x: -31.779,
                    y: -1.104,
                    kx: -0.484,
                    ky: -2.658
                },
                "30": {
                    x: -31.789,
                    y: -1.169,
                    kx: -0.504,
                    ky: -2.637
                },
                "31": {
                    x: -31.794,
                    y: -1.225,
                    kx: -0.521,
                    ky: -2.621
                },
                "32": {
                    x: -31.789,
                    y: -1.292,
                    kx: -0.534,
                    ky: -2.608
                },
                "33": {
                    x: -31.82,
                    y: -1.337,
                    kx: -0.545,
                    ky: -2.597
                },
                "34": {
                    x: -31.831,
                    y: -1.324,
                    kx: -0.554,
                    ky: -2.588
                },
                "35": {
                    x: -31.82,
                    y: -1.361,
                    kx: -0.561,
                    ky: -2.581
                },
                "36": {
                    x: -31.831,
                    y: -1.358,
                    kx: -0.566,
                    ky: -2.576
                },
                "37": {
                    x: -31.813,
                    y: -1.419,
                    kx: -0.57,
                    ky: -2.571
                },
                "38": {
                    y: -1.449,
                    kx: -0.573,
                    ky: -2.568
                },
                "39": {
                    x: -31.83,
                    y: -1.404,
                    kx: -0.575,
                    ky: -2.566
                },
                "40": {
                    x: -31.811,
                    y: -1.434,
                    kx: -0.576,
                    ky: -2.565
                },
                "41": {
                    x: -31.75,
                    y: -1.5,
                    kx: -0.577
                },
                "42": {
                    y: -1.544
                },
                "43": {
                    x: -31.751,
                    y: -1.575,
                    kx: -0.576,
                    ky: -2.566
                },
                "44": {
                    x: -31.752,
                    y: -1.54,
                    kx: -0.575,
                    ky: -2.567
                },
                "45": {
                    x: -31.755,
                    kx: -0.573,
                    ky: -2.568
                },
                "46": {
                    x: -31.757,
                    y: -1.572,
                    kx: -0.571,
                    ky: -2.57
                },
                "47": {
                    x: -31.761,
                    y: -1.535,
                    kx: -0.568,
                    ky: -2.573
                },
                "48": {
                    x: -31.765,
                    y: -1.526,
                    kx: -0.565,
                    ky: -2.577
                },
                "49": {
                    x: -31.77,
                    y: -1.493,
                    kx: -0.561,
                    ky: -2.581
                },
                "50": {
                    x: -31.774,
                    y: -1.533,
                    kx: -0.556,
                    ky: -2.586
                },
                "51": {
                    x: -31.778,
                    y: -1.441,
                    kx: -0.55,
                    ky: -2.592
                },
                "52": {
                    x: -31.732,
                    y: -1.463,
                    kx: -0.543,
                    ky: -2.599
                },
                "53": {
                    x: -31.734,
                    y: -1.394,
                    kx: -0.534,
                    ky: -2.607
                },
                "54": {
                    y: -1.324,
                    kx: -0.524,
                    ky: -2.618
                },
                "55": {
                    x: -31.73,
                    y: -1.295,
                    kx: -0.512,
                    ky: -2.629
                },
                "56": {
                    x: -31.719,
                    y: -1.244,
                    kx: -0.498,
                    ky: -2.644
                },
                "57": {
                    x: -31.747,
                    y: -1.153,
                    kx: -0.481,
                    ky: -2.661
                },
                "58": {
                    x: -31.708,
                    y: -1.096,
                    kx: -0.46,
                    ky: -2.681
                },
                "59": {
                    x: -31.692,
                    y: -1.04,
                    kx: -0.435,
                    ky: -2.707
                },
                "60": {
                    x: -31.63,
                    y: -0.933,
                    kx: -0.403,
                    ky: -2.739
                },
                "61": {
                    x: -31.642,
                    y: -0.765,
                    kx: -0.363,
                    ky: -2.779
                },
                "62": {
                    x: -31.587,
                    y: -0.596,
                    kx: -0.312,
                    ky: -2.829
                },
                "63": {
                    x: -31.594,
                    y: -0.431,
                    kx: -0.255,
                    ky: -2.887
                },
                "64": {
                    x: -31.529,
                    y: -0.225,
                    kx: -0.2,
                    ky: -2.941
                },
                "65": {
                    x: -31.49,
                    y: -0.094,
                    kx: -0.156,
                    ky: -2.986
                },
                "66": {
                    x: -31.473,
                    y: 0.069,
                    kx: -0.121,
                    ky: -3.02
                },
                "67": {
                    x: -31.427,
                    y: 0.139,
                    kx: -0.095,
                    ky: -3.047
                },
                "68": {
                    x: -31.442,
                    y: 0.236,
                    kx: -0.074,
                    ky: -3.068
                },
                "69": {
                    x: -31.458,
                    y: 0.304,
                    kx: -0.058,
                    ky: -3.084
                },
                "70": {
                    x: -31.465,
                    y: 0.327,
                    kx: -0.044,
                    ky: -3.097
                },
                "71": {
                    x: -31.455,
                    y: 0.375,
                    kx: -0.034,
                    ky: -3.108
                },
                "72": {
                    x: -31.425,
                    y: 0.364,
                    kx: -0.025,
                    ky: -3.117
                },
                "73": {
                    x: -31.418,
                    y: 0.455,
                    kx: -0.018,
                    ky: -3.123
                },
                "74": {
                    x: -31.382,
                    y: 0.408,
                    kx: -0.013,
                    ky: -3.129
                },
                "75": {
                    x: -31.415,
                    y: 0.425,
                    kx: -0.008,
                    ky: -3.133
                },
                "76": {
                    x: -31.413,
                    y: 0.466,
                    kx: -0.005,
                    ky: -3.136
                },
                "77": {
                    x: -31.425,
                    y: 0.481,
                    kx: -0.003,
                    ky: -3.139
                },
                "78": {
                    x: -31.4,
                    y: 0.475,
                    kx: -0.001,
                    ky: -3.14
                },
                "79": {
                    x: -31.385,
                    y: 0.499,
                    kx: 0,
                    ky: -3.141
                },
                "80": {
                    x: -31.35,
                    y: 0.6,
                    ky: 3.142
                },
                "81": {
                    y: 3.75,
                    kx: 0.105,
                    ky: 3.037
                }
            })
            .addTimedChild(instance4, 83, 2)
            .addAction(function () {
                this.stop();
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 79)
            .addAction(function () {
                this.stop();
            }, 82)
            .addAction(function () {
                this.stop();
            }, 84);
    });

    lib.Tail_SeaTurtle = makeObj("Container", 'Tail_SeaTurtle', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Sea_Turtle 1.png"]))
            .setTransform(-8, -8, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_GreenSeaTurtle = makeObj("MovieClip", 'Animated_GreenSeaTurtle',{
            duration: 85,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 81,
                dead: 83
            }
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Sea_Turtle.png"]))
            .setTransform(-66, -75, 0.5, 0.5);
        var instance2 = new lib.Tail_SeaTurtle();
        var instance1 = new lib.Tail_SeaTurtle();
        var instance4 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneSmall.png"]))
            .setTransform(-33, -37);
        this.addTimedChild(instance3)
            .addTimedChild(instance2, 0, 85, {
                "0": {
                    x: 31.35,
                    y: 0.6,
                    r: 0
                },
                "3": {
                    x: 31.4,
                    y: 0.643
                },
                "4": {
                    x: 31.35,
                    y: 0.62,
                    r: -0.001
                },
                "5": {
                    x: 31.351,
                    y: 0.631,
                    r: -0.002
                },
                "6": {
                    x: 31.352,
                    y: 0.624,
                    r: -0.004
                },
                "7": {
                    x: 31.353,
                    y: 0.647,
                    r: -0.006
                },
                "8": {
                    x: 31.354,
                    y: 0.597,
                    r: -0.01
                },
                "9": {
                    x: 31.355,
                    y: 0.574,
                    r: -0.014
                },
                "10": {
                    y: 0.573,
                    r: -0.018
                },
                "11": {
                    y: 0.493,
                    r: -0.024
                },
                "12": {
                    x: 31.353,
                    y: 0.478,
                    r: -0.031
                },
                "13": {
                    x: 31.449,
                    y: 0.424,
                    r: -0.039
                },
                "14": {
                    x: 31.442,
                    y: 0.426,
                    r: -0.049
                },
                "15": {
                    x: 31.429,
                    y: 0.376,
                    r: -0.06
                },
                "16": {
                    x: 31.41,
                    y: 0.317,
                    r: -0.073
                },
                "17": {
                    x: 31.431,
                    y: 0.287,
                    r: -0.088
                },
                "18": {
                    x: 31.487,
                    y: 0.222,
                    r: -0.106
                },
                "19": {
                    x: 31.471,
                    y: 0.107,
                    r: -0.128
                },
                "20": {
                    x: 31.476,
                    y: 0.021,
                    r: -0.153
                },
                "21": {
                    x: 31.537,
                    y: -0.059,
                    r: -0.183
                },
                "22": {
                    x: 31.536,
                    y: -0.2,
                    r: -0.218
                },
                "23": {
                    x: 31.558,
                    y: -0.35,
                    r: -0.259
                },
                "24": {
                    x: 31.642,
                    y: -0.46,
                    r: -0.304
                },
                "25": {
                    x: 31.609,
                    y: -0.624,
                    r: -0.35
                },
                "26": {
                    x: 31.652,
                    y: -0.77,
                    r: -0.392
                },
                "27": {
                    x: 31.714,
                    y: -0.932,
                    r: -0.429
                },
                "28": {
                    x: 31.721,
                    y: -1.002,
                    r: -0.459
                },
                "29": {
                    x: 31.779,
                    y: -1.104,
                    r: -0.484
                },
                "30": {
                    x: 31.789,
                    y: -1.169,
                    r: -0.504
                },
                "31": {
                    x: 31.794,
                    y: -1.225,
                    r: -0.521
                },
                "32": {
                    x: 31.789,
                    y: -1.292,
                    r: -0.534
                },
                "33": {
                    x: 31.82,
                    y: -1.337,
                    r: -0.545
                },
                "34": {
                    x: 31.831,
                    y: -1.324,
                    r: -0.554
                },
                "35": {
                    x: 31.82,
                    y: -1.361,
                    r: -0.561
                },
                "36": {
                    x: 31.831,
                    y: -1.358,
                    r: -0.566
                },
                "37": {
                    x: 31.813,
                    y: -1.419,
                    r: -0.57
                },
                "38": {
                    y: -1.449,
                    r: -0.573
                },
                "39": {
                    x: 31.83,
                    y: -1.404,
                    r: -0.575
                },
                "40": {
                    x: 31.811,
                    y: -1.434,
                    r: -0.576
                },
                "41": {
                    x: 31.75,
                    y: -1.5,
                    r: -0.577
                },
                "42": {
                    y: -1.544
                },
                "43": {
                    x: 31.751,
                    y: -1.575,
                    r: -0.576
                },
                "44": {
                    x: 31.752,
                    y: -1.54,
                    r: -0.575
                },
                "45": {
                    x: 31.755,
                    r: -0.573
                },
                "46": {
                    x: 31.757,
                    y: -1.572,
                    r: -0.571
                },
                "47": {
                    x: 31.761,
                    y: -1.535,
                    r: -0.568
                },
                "48": {
                    x: 31.765,
                    y: -1.526,
                    r: -0.565
                },
                "49": {
                    x: 31.77,
                    y: -1.493,
                    r: -0.561
                },
                "50": {
                    x: 31.774,
                    y: -1.533,
                    r: -0.556
                },
                "51": {
                    x: 31.778,
                    y: -1.441,
                    r: -0.55
                },
                "52": {
                    x: 31.732,
                    y: -1.463,
                    r: -0.543
                },
                "53": {
                    x: 31.734,
                    y: -1.394,
                    r: -0.534
                },
                "54": {
                    y: -1.324,
                    r: -0.524
                },
                "55": {
                    x: 31.73,
                    y: -1.295,
                    r: -0.512
                },
                "56": {
                    x: 31.719,
                    y: -1.244,
                    r: -0.498
                },
                "57": {
                    x: 31.747,
                    y: -1.153,
                    r: -0.481
                },
                "58": {
                    x: 31.708,
                    y: -1.096,
                    r: -0.46
                },
                "59": {
                    x: 31.692,
                    y: -1.04,
                    r: -0.435
                },
                "60": {
                    x: 31.63,
                    y: -0.933,
                    r: -0.403
                },
                "61": {
                    x: 31.642,
                    y: -0.765,
                    r: -0.363
                },
                "62": {
                    x: 31.587,
                    y: -0.596,
                    r: -0.312
                },
                "63": {
                    x: 31.594,
                    y: -0.431,
                    r: -0.255
                },
                "64": {
                    x: 31.529,
                    y: -0.225,
                    r: -0.2
                },
                "65": {
                    x: 31.49,
                    y: -0.094,
                    r: -0.156
                },
                "66": {
                    x: 31.473,
                    y: 0.069,
                    r: -0.121
                },
                "67": {
                    x: 31.427,
                    y: 0.139,
                    r: -0.095
                },
                "68": {
                    x: 31.442,
                    y: 0.236,
                    r: -0.074
                },
                "69": {
                    x: 31.458,
                    y: 0.304,
                    r: -0.058
                },
                "70": {
                    x: 31.465,
                    y: 0.327,
                    r: -0.044
                },
                "71": {
                    x: 31.455,
                    y: 0.375,
                    r: -0.034
                },
                "72": {
                    x: 31.425,
                    y: 0.364,
                    r: -0.025
                },
                "73": {
                    x: 31.418,
                    y: 0.455,
                    r: -0.018
                },
                "74": {
                    x: 31.382,
                    y: 0.408,
                    r: -0.013
                },
                "75": {
                    x: 31.415,
                    y: 0.425,
                    r: -0.008
                },
                "76": {
                    x: 31.413,
                    y: 0.466,
                    r: -0.005
                },
                "77": {
                    x: 31.425,
                    y: 0.481,
                    r: -0.003
                },
                "78": {
                    x: 31.4,
                    y: 0.475,
                    r: -0.001
                },
                "79": {
                    x: 31.385,
                    y: 0.499,
                    r: 0
                },
                "80": {
                    x: 31.35,
                    y: 0.6
                },
                "81": {
                    y: 3.75,
                    r: 0.105
                }
            })
            .addTimedChild(instance1, 0, 85, {
                "0": {
                    x: -31.35,
                    y: 0.6,
                    kx: 0,
                    ky: 3.142
                },
                "3": {
                    x: -31.4,
                    y: 0.643,
                    ky: -3.141
                },
                "4": {
                    x: -31.35,
                    y: 0.62,
                    kx: -0.001
                },
                "5": {
                    x: -31.351,
                    y: 0.631,
                    kx: -0.002,
                    ky: -3.139
                },
                "6": {
                    x: -31.352,
                    y: 0.624,
                    kx: -0.004,
                    ky: -3.138
                },
                "7": {
                    x: -31.353,
                    y: 0.647,
                    kx: -0.006,
                    ky: -3.135
                },
                "8": {
                    x: -31.354,
                    y: 0.597,
                    kx: -0.01,
                    ky: -3.132
                },
                "9": {
                    x: -31.355,
                    y: 0.574,
                    kx: -0.014,
                    ky: -3.128
                },
                "10": {
                    y: 0.573,
                    kx: -0.018,
                    ky: -3.123
                },
                "11": {
                    y: 0.493,
                    kx: -0.024,
                    ky: -3.117
                },
                "12": {
                    x: -31.353,
                    y: 0.478,
                    kx: -0.031,
                    ky: -3.111
                },
                "13": {
                    x: -31.449,
                    y: 0.424,
                    kx: -0.039,
                    ky: -3.102
                },
                "14": {
                    x: -31.442,
                    y: 0.426,
                    kx: -0.049,
                    ky: -3.093
                },
                "15": {
                    x: -31.429,
                    y: 0.376,
                    kx: -0.06,
                    ky: -3.082
                },
                "16": {
                    x: -31.41,
                    y: 0.317,
                    kx: -0.073,
                    ky: -3.069
                },
                "17": {
                    x: -31.431,
                    y: 0.287,
                    kx: -0.088,
                    ky: -3.053
                },
                "18": {
                    x: -31.487,
                    y: 0.222,
                    kx: -0.106,
                    ky: -3.035
                },
                "19": {
                    x: -31.471,
                    y: 0.107,
                    kx: -0.128,
                    ky: -3.014
                },
                "20": {
                    x: -31.476,
                    y: 0.021,
                    kx: -0.153,
                    ky: -2.989
                },
                "21": {
                    x: -31.537,
                    y: -0.059,
                    kx: -0.183,
                    ky: -2.959
                },
                "22": {
                    x: -31.536,
                    y: -0.2,
                    kx: -0.218,
                    ky: -2.923
                },
                "23": {
                    x: -31.558,
                    y: -0.35,
                    kx: -0.259,
                    ky: -2.883
                },
                "24": {
                    x: -31.642,
                    y: -0.46,
                    kx: -0.304,
                    ky: -2.838
                },
                "25": {
                    x: -31.609,
                    y: -0.624,
                    kx: -0.35,
                    ky: -2.792
                },
                "26": {
                    x: -31.652,
                    y: -0.77,
                    kx: -0.392,
                    ky: -2.75
                },
                "27": {
                    x: -31.714,
                    y: -0.932,
                    kx: -0.429,
                    ky: -2.713
                },
                "28": {
                    x: -31.721,
                    y: -1.002,
                    kx: -0.459,
                    ky: -2.683
                },
                "29": {
                    x: -31.779,
                    y: -1.104,
                    kx: -0.484,
                    ky: -2.658
                },
                "30": {
                    x: -31.789,
                    y: -1.169,
                    kx: -0.504,
                    ky: -2.637
                },
                "31": {
                    x: -31.794,
                    y: -1.225,
                    kx: -0.521,
                    ky: -2.621
                },
                "32": {
                    x: -31.789,
                    y: -1.292,
                    kx: -0.534,
                    ky: -2.608
                },
                "33": {
                    x: -31.82,
                    y: -1.337,
                    kx: -0.545,
                    ky: -2.597
                },
                "34": {
                    x: -31.831,
                    y: -1.324,
                    kx: -0.554,
                    ky: -2.588
                },
                "35": {
                    x: -31.82,
                    y: -1.361,
                    kx: -0.561,
                    ky: -2.581
                },
                "36": {
                    x: -31.831,
                    y: -1.358,
                    kx: -0.566,
                    ky: -2.576
                },
                "37": {
                    x: -31.813,
                    y: -1.419,
                    kx: -0.57,
                    ky: -2.571
                },
                "38": {
                    y: -1.449,
                    kx: -0.573,
                    ky: -2.568
                },
                "39": {
                    x: -31.83,
                    y: -1.404,
                    kx: -0.575,
                    ky: -2.566
                },
                "40": {
                    x: -31.811,
                    y: -1.434,
                    kx: -0.576,
                    ky: -2.565
                },
                "41": {
                    x: -31.75,
                    y: -1.5,
                    kx: -0.577
                },
                "42": {
                    y: -1.544
                },
                "43": {
                    x: -31.751,
                    y: -1.575,
                    kx: -0.576,
                    ky: -2.566
                },
                "44": {
                    x: -31.752,
                    y: -1.54,
                    kx: -0.575,
                    ky: -2.567
                },
                "45": {
                    x: -31.755,
                    kx: -0.573,
                    ky: -2.568
                },
                "46": {
                    x: -31.757,
                    y: -1.572,
                    kx: -0.571,
                    ky: -2.57
                },
                "47": {
                    x: -31.761,
                    y: -1.535,
                    kx: -0.568,
                    ky: -2.573
                },
                "48": {
                    x: -31.765,
                    y: -1.526,
                    kx: -0.565,
                    ky: -2.577
                },
                "49": {
                    x: -31.77,
                    y: -1.493,
                    kx: -0.561,
                    ky: -2.581
                },
                "50": {
                    x: -31.774,
                    y: -1.533,
                    kx: -0.556,
                    ky: -2.586
                },
                "51": {
                    x: -31.778,
                    y: -1.441,
                    kx: -0.55,
                    ky: -2.592
                },
                "52": {
                    x: -31.732,
                    y: -1.463,
                    kx: -0.543,
                    ky: -2.599
                },
                "53": {
                    x: -31.734,
                    y: -1.394,
                    kx: -0.534,
                    ky: -2.607
                },
                "54": {
                    y: -1.324,
                    kx: -0.524,
                    ky: -2.618
                },
                "55": {
                    x: -31.73,
                    y: -1.295,
                    kx: -0.512,
                    ky: -2.629
                },
                "56": {
                    x: -31.719,
                    y: -1.244,
                    kx: -0.498,
                    ky: -2.644
                },
                "57": {
                    x: -31.747,
                    y: -1.153,
                    kx: -0.481,
                    ky: -2.661
                },
                "58": {
                    x: -31.708,
                    y: -1.096,
                    kx: -0.46,
                    ky: -2.681
                },
                "59": {
                    x: -31.692,
                    y: -1.04,
                    kx: -0.435,
                    ky: -2.707
                },
                "60": {
                    x: -31.63,
                    y: -0.933,
                    kx: -0.403,
                    ky: -2.739
                },
                "61": {
                    x: -31.642,
                    y: -0.765,
                    kx: -0.363,
                    ky: -2.779
                },
                "62": {
                    x: -31.587,
                    y: -0.596,
                    kx: -0.312,
                    ky: -2.829
                },
                "63": {
                    x: -31.594,
                    y: -0.431,
                    kx: -0.255,
                    ky: -2.887
                },
                "64": {
                    x: -31.529,
                    y: -0.225,
                    kx: -0.2,
                    ky: -2.941
                },
                "65": {
                    x: -31.49,
                    y: -0.094,
                    kx: -0.156,
                    ky: -2.986
                },
                "66": {
                    x: -31.473,
                    y: 0.069,
                    kx: -0.121,
                    ky: -3.02
                },
                "67": {
                    x: -31.427,
                    y: 0.139,
                    kx: -0.095,
                    ky: -3.047
                },
                "68": {
                    x: -31.442,
                    y: 0.236,
                    kx: -0.074,
                    ky: -3.068
                },
                "69": {
                    x: -31.458,
                    y: 0.304,
                    kx: -0.058,
                    ky: -3.084
                },
                "70": {
                    x: -31.465,
                    y: 0.327,
                    kx: -0.044,
                    ky: -3.097
                },
                "71": {
                    x: -31.455,
                    y: 0.375,
                    kx: -0.034,
                    ky: -3.108
                },
                "72": {
                    x: -31.425,
                    y: 0.364,
                    kx: -0.025,
                    ky: -3.117
                },
                "73": {
                    x: -31.418,
                    y: 0.455,
                    kx: -0.018,
                    ky: -3.123
                },
                "74": {
                    x: -31.382,
                    y: 0.408,
                    kx: -0.013,
                    ky: -3.129
                },
                "75": {
                    x: -31.415,
                    y: 0.425,
                    kx: -0.008,
                    ky: -3.133
                },
                "76": {
                    x: -31.413,
                    y: 0.466,
                    kx: -0.005,
                    ky: -3.136
                },
                "77": {
                    x: -31.425,
                    y: 0.481,
                    kx: -0.003,
                    ky: -3.139
                },
                "78": {
                    x: -31.4,
                    y: 0.475,
                    kx: -0.001,
                    ky: -3.14
                },
                "79": {
                    x: -31.385,
                    y: 0.499,
                    kx: 0,
                    ky: -3.141
                },
                "80": {
                    x: -31.35,
                    y: 0.6,
                    ky: 3.142
                },
                "81": {
                    y: 3.75,
                    kx: 0.105,
                    ky: 3.037
                }
            })
            .addTimedChild(instance4, 83, 2)
            .addAction(function () {
                this.stop();
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 80)
            .addAction(function () {
                this.stop();
            }, 82)
            .addAction(function () {
                this.stop();
            }, 84);
    });

    lib.Body_ElectricEel = makeObj("Container", 'Body_ElectricEel', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Electric_Eel.png"]))
            .setTransform(-80, -71, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_ElectricEel = makeObj("Container", 'Tail_ElectricEel', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Electric_Eel 1.png"]))
            .setTransform(-11, -16, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_ElectricEel = makeObj("MovieClip", 'Animated_ElectricEel',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_ElectricEel();
        var instance1 = new lib.Body_ElectricEel();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -35);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 42,
                    r: 0
                },
                "2": {
                    y: 39.8,
                    r: -0.397
                },
                "3": {
                    x: -0.047,
                    y: 39.849,
                    r: -0.395
                },
                "4": {
                    x: -0.031,
                    y: 39.847,
                    r: -0.387
                },
                "5": {
                    x: -0.037,
                    y: 39.829,
                    r: -0.364
                },
                "6": {
                    x: -0.05,
                    y: 39.832,
                    r: -0.32
                },
                "7": {
                    x: -0.041,
                    y: 39.854,
                    r: -0.247
                },
                "8": {
                    x: -0.039,
                    y: 39.822,
                    r: -0.138
                },
                "9": {
                    x: -0.028,
                    y: 39.816,
                    r: 0.003
                },
                "10": {
                    x: -0.027,
                    y: 39.814,
                    r: 0.112
                },
                "11": {
                    x: -0.065,
                    y: 39.855,
                    r: 0.185
                },
                "12": {
                    x: -0.067,
                    y: 39.853,
                    r: 0.229
                },
                "13": {
                    x: -0.046,
                    y: 39.814,
                    r: 0.252
                },
                "14": {
                    x: -0.061,
                    y: 39.811,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 39.8,
                    r: 0.262
                },
                "16": {
                    x: 0.031,
                    y: 39.799,
                    r: 0.261
                },
                "17": {
                    x: 0.048,
                    y: 39.798,
                    r: 0.256
                },
                "18": {
                    x: 0.039,
                    y: 39.84,
                    r: 0.241
                },
                "19": {
                    x: 0.037,
                    y: 39.8,
                    r: 0.212
                },
                "20": {
                    x: 0.026,
                    y: 39.81,
                    r: 0.164
                },
                "21": {
                    y: 39.835,
                    r: 0.093
                },
                "22": {
                    x: 0.024,
                    y: 39.833,
                    r: -0.006
                },
                "23": {
                    x: 0.008,
                    y: 39.8,
                    r: -0.129
                },
                "24": {
                    x: 0.024,
                    y: 39.82,
                    r: -0.228
                },
                "25": {
                    x: 0.017,
                    y: 39.803,
                    r: -0.299
                },
                "26": {
                    x: 0.047,
                    y: 39.808,
                    r: -0.347
                },
                "27": {
                    x: 0.03,
                    y: 39.838,
                    r: -0.375
                },
                "28": {
                    x: 0.002,
                    y: 39.833,
                    r: -0.39
                },
                "29": {
                    x: 0.024,
                    y: 39.8,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    r: -0.397
                },
                "32": {
                    x: -0.019,
                    y: 39.835,
                    r: -0.37
                },
                "33": {
                    y: 39.819,
                    r: -0.289
                },
                "34": {
                    x: -0.032,
                    y: 39.841,
                    r: -0.155
                },
                "35": {
                    x: -0.051,
                    y: 39.847,
                    r: 0.02
                },
                "36": {
                    x: -0.031,
                    y: 39.812,
                    r: 0.154
                },
                "37": {
                    x: -0.045,
                    y: 39.825,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 39.8,
                    r: 0.262
                },
                "39": {
                    x: 0.019,
                    y: 39.835,
                    r: 0.235
                },
                "40": {
                    y: 39.82,
                    r: 0.154
                },
                "41": {
                    x: 0.031,
                    y: 39.841,
                    r: 0.02
                },
                "42": {
                    x: 0.001,
                    y: 39.797,
                    r: -0.155
                },
                "43": {
                    x: 0.032,
                    y: 39.812,
                    r: -0.289
                },
                "44": {
                    x: 0.045,
                    y: 39.824,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 39.8,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_GulperEel = makeObj("Container", 'Body_GulperEel', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Gulper_Eel.png"]))
            .setTransform(-60, -59, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_GulperEel = makeObj("Container", 'Tail_GulperEel', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Gulper_Eel 1.png"]))
            .setTransform(-12, -15, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_GulperEel = makeObj("MovieClip", 'Animated_GulperEel',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_GulperEel();
        var instance1 = new lib.Body_GulperEel();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneSmall.png"]))
            .setTransform(-33, -43);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_MorayEel = makeObj("Container", 'Body_MorayEel', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Moray_Eel.png"]))
            .setTransform(-74, -80, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_MorayEel = makeObj("Container", 'Tail_MorayEel', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Moray_Eel 1.png"]))
            .setTransform(-13, -13, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_MorayEel = makeObj("MovieClip", 'Animated_MorayEel',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_MorayEel();
        var instance1 = new lib.Body_MorayEel();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -36);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 42,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.05,
                    y: 42.049,
                    r: -0.395
                },
                "4": {
                    x: -0.052,
                    y: 42.047,
                    r: -0.387
                },
                "5": {
                    x: -0.059,
                    y: 42.028,
                    r: -0.364
                },
                "6": {
                    x: -0.068,
                    y: 42.026,
                    r: -0.32
                },
                "7": {
                    x: -0.069,
                    y: 42.029,
                    r: -0.247
                },
                "8": {
                    x: -0.053,
                    y: 41.999,
                    r: -0.138
                },
                "9": {
                    x: -0.033,
                    y: 41.993,
                    r: 0.003
                },
                "10": {
                    x: -0.048,
                    y: 42.035,
                    r: 0.112
                },
                "11": {
                    x: -0.023,
                    y: 41.993,
                    r: 0.185
                },
                "12": {
                    x: -0.056,
                    y: 41.986,
                    r: 0.229
                },
                "13": {
                    x: -0.025,
                    y: 42.017,
                    r: 0.252
                },
                "14": {
                    x: -0.055,
                    y: 42.003,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 42,
                    r: 0.262
                },
                "16": {
                    x: 0.033,
                    y: 42.049,
                    r: 0.261
                },
                "17": {
                    x: 0.062,
                    y: 42.048,
                    r: 0.256
                },
                "18": {
                    x: 0.035,
                    y: 42.04,
                    r: 0.241
                },
                "19": {
                    x: 0.047,
                    y: 42.047,
                    r: 0.212
                },
                "20": {
                    x: 0.04,
                    y: 42.049,
                    r: 0.164
                },
                "21": {
                    x: 0.045,
                    y: 42.054,
                    r: 0.093
                },
                "22": {
                    x: 0.056,
                    r: -0.006
                },
                "23": {
                    x: 0.045,
                    y: 42.034,
                    r: -0.129
                },
                "24": {
                    x: 0.059,
                    y: 42.061,
                    r: -0.228
                },
                "25": {
                    x: 0.037,
                    y: 42.016,
                    r: -0.299
                },
                "26": {
                    x: 0.054,
                    y: 42.013,
                    r: -0.347
                },
                "27": {
                    x: 0.039,
                    y: 42.056,
                    r: -0.375
                },
                "28": {
                    x: 0.037,
                    y: 42.032,
                    r: -0.39
                },
                "29": {
                    x: 0.069,
                    y: 42.041,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 42,
                    r: -0.397
                },
                "32": {
                    x: -0.028,
                    y: 42.034,
                    r: -0.37
                },
                "33": {
                    x: -0.055,
                    y: 42.006,
                    r: -0.289
                },
                "34": {
                    x: -0.058,
                    y: 42.027,
                    r: -0.155
                },
                "35": {
                    x: -0.041,
                    y: 42.009,
                    r: 0.02
                },
                "36": {
                    x: -0.032,
                    y: 42.037,
                    r: 0.154
                },
                "37": {
                    x: -0.043,
                    y: 42.001,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 42,
                    r: 0.262
                },
                "39": {
                    x: 0.028,
                    y: 42.034,
                    r: 0.235
                },
                "40": {
                    x: 0.055,
                    y: 42.057,
                    r: 0.154
                },
                "41": {
                    x: 0.058,
                    y: 42.027,
                    r: 0.02
                },
                "42": {
                    x: 0.041,
                    y: 42.059,
                    r: -0.155
                },
                "43": {
                    x: 0.033,
                    y: 42.036,
                    r: -0.289
                },
                "44": {
                    x: 0.043,
                    y: 42.05,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 42,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Kraken = makeObj("Container", 'Body_Kraken', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Kraken.png"]))
            .setTransform(-74, -62, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Kraken_2 = makeObj("Container", 'Tail_Kraken_2', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Kraken 2.png"]))
            .setTransform(-61, 8, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Kraken = makeObj("Container", 'Tail_Kraken', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Kraken 1.png"]))
            .setTransform(-18, 10, 0.5, 0.5, 0, 0, 3.142);
        this.addChild(instance1);
    });

    lib.Animated_Kraken = makeObj("MovieClip", 'Animated_Kraken',{
            duration: 78,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 51,
                dead: 76
            }
        }, function(){
		this.stop()
        var instance3 = new lib.Tail_Kraken();
        var instance2 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Kraken 2.png"]));
        var instance4 = new lib.Tail_Kraken_2();
        var instance1 = new lib.Body_Kraken();
        var instance5 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneSmall.png"]))
            .setTransform(-33, -43);
        this.addTimedChild(instance3, 0, 78, {
                "0": {
                    x: 0,
                    y: 15.05,
                    kx: 0,
                    ky: 3.142
                },
                "2": {
                    kx: -0.397,
                    ky: -2.745
                },
                "3": {
                    x: 0.003,
                    kx: -0.396
                },
                "4": {
                    x: 0.026,
                    kx: -0.395,
                    ky: -2.747
                },
                "5": {
                    x: 0.037,
                    kx: -0.391,
                    ky: -2.751
                },
                "6": {
                    x: 0.058,
                    y: 15.048,
                    kx: -0.383,
                    ky: -2.759
                },
                "7": {
                    x: 0.057,
                    y: 15.044,
                    kx: -0.37,
                    ky: -2.772
                },
                "8": {
                    x: 0.053,
                    y: 15.083,
                    kx: -0.35,
                    ky: -2.792
                },
                "9": {
                    x: 0.066,
                    y: 15.058,
                    kx: -0.322,
                    ky: -2.819
                },
                "10": {
                    x: 0.064,
                    y: 15.057,
                    kx: -0.286,
                    ky: -2.856
                },
                "11": {
                    x: 0.065,
                    y: 15.063,
                    kx: -0.239,
                    ky: -2.903
                },
                "12": {
                    x: 0.032,
                    y: 15.049,
                    kx: -0.18,
                    ky: -2.961
                },
                "13": {
                    x: 0.026,
                    y: 15.079,
                    kx: -0.108,
                    ky: -3.033
                },
                "14": {
                    x: 0.046,
                    y: 15.08,
                    kx: -0.026,
                    ky: -3.115
                },
                "15": {
                    x: 0.036,
                    y: 15.054,
                    kx: 0.045,
                    ky: 3.096
                },
                "16": {
                    x: 0.022,
                    y: 15.053,
                    kx: 0.104,
                    ky: 3.038
                },
                "17": {
                    x: 0.034,
                    y: 15.05,
                    kx: 0.151,
                    ky: 2.991
                },
                "18": {
                    x: 0.049,
                    y: 15.055,
                    kx: 0.188,
                    ky: 2.954
                },
                "19": {
                    x: 0.041,
                    y: 15.072,
                    kx: 0.215,
                    ky: 2.927
                },
                "20": {
                    x: 0.032,
                    y: 15.049,
                    kx: 0.235,
                    ky: 2.907
                },
                "21": {
                    x: 0.042,
                    y: 15.031,
                    kx: 0.248,
                    ky: 2.894
                },
                "22": {
                    x: 0.038,
                    y: 15.058,
                    kx: 0.256,
                    ky: 2.886
                },
                "23": {
                    x: 0.037,
                    y: 15.07,
                    kx: 0.26,
                    ky: 2.882
                },
                "24": {
                    x: 0.055,
                    y: 15.056,
                    kx: 0.262,
                    ky: 2.88
                },
                "25": {
                    x: 0,
                    y: 15.05
                },
                "26": {
                    x: -0.003
                },
                "27": {
                    x: -0.02,
                    kx: 0.26,
                    ky: 2.881
                },
                "28": {
                    x: -0.018,
                    kx: 0.257,
                    ky: 2.884
                },
                "29": {
                    x: -0.012,
                    y: 15.049,
                    kx: 0.251,
                    ky: 2.891
                },
                "30": {
                    x: -0.017,
                    y: 15.046,
                    kx: 0.241,
                    ky: 2.901
                },
                "31": {
                    x: -0.047,
                    y: 15.04,
                    kx: 0.225,
                    ky: 2.916
                },
                "32": {
                    x: -0.019,
                    y: 15.075,
                    kx: 0.204,
                    ky: 2.938
                },
                "33": {
                    x: -0.047,
                    y: 15.044,
                    kx: 0.175,
                    ky: 2.966
                },
                "34": {
                    x: -0.044,
                    y: 15.086,
                    kx: 0.139,
                    ky: 3.003
                },
                "35": {
                    x: -0.024,
                    kx: 0.093,
                    ky: 3.048
                },
                "36": {
                    x: 0.002,
                    y: 15.073,
                    kx: 0.037,
                    ky: 3.104
                },
                "37": {
                    x: -0.021,
                    y: 15.066,
                    kx: -0.029,
                    ky: -3.112
                },
                "38": {
                    x: -0.001,
                    y: 15.047,
                    kx: -0.105,
                    ky: -3.036
                },
                "39": {
                    x: -0.029,
                    y: 15.054,
                    kx: -0.172,
                    ky: -2.969
                },
                "40": {
                    x: -0.03,
                    y: 15.08,
                    kx: -0.228,
                    ky: -2.914
                },
                "41": {
                    x: -0.029,
                    y: 15.043,
                    kx: -0.274,
                    ky: -2.868
                },
                "42": {
                    x: 0.003,
                    y: 15.054,
                    kx: -0.31,
                    ky: -2.831
                },
                "43": {
                    x: -0.004,
                    y: 15.066,
                    kx: -0.339,
                    ky: -2.803
                },
                "44": {
                    x: -0.018,
                    y: 15.082,
                    kx: -0.36,
                    ky: -2.781
                },
                "45": {
                    x: -0.005,
                    y: 15.046,
                    kx: -0.375,
                    ky: -2.766
                },
                "46": {
                    x: -0.029,
                    y: 15.053,
                    kx: -0.386,
                    ky: -2.756
                },
                "47": {
                    x: -0.003,
                    y: 15.046,
                    kx: -0.392,
                    ky: -2.75
                },
                "48": {
                    x: 0.009,
                    y: 15.067,
                    kx: -0.395,
                    ky: -2.746
                },
                "49": {
                    x: -0.005,
                    y: 15.056,
                    kx: -0.396,
                    ky: -2.745
                },
                "50": {
                    x: 0,
                    y: 15.05,
                    kx: -0.397
                },
                "52": {
                    x: 0.038,
                    y: 15.049,
                    kx: -0.387,
                    ky: -2.754
                },
                "53": {
                    x: 0.05,
                    y: 15.04,
                    kx: -0.36,
                    ky: -2.782
                },
                "54": {
                    x: 0.037,
                    y: 15.049,
                    kx: -0.314,
                    ky: -2.827
                },
                "55": {
                    x: 0.044,
                    y: 15.039,
                    kx: -0.25,
                    ky: -2.891
                },
                "56": {
                    x: 0.06,
                    y: 15.058,
                    kx: -0.168,
                    ky: -2.974
                },
                "57": {
                    x: 0.015,
                    y: 15.042,
                    kx: -0.067,
                    ky: -3.074
                },
                "58": {
                    x: 0.02,
                    y: 15.081,
                    kx: 0.033,
                    ky: 3.108
                },
                "59": {
                    x: 0.024,
                    y: 15.07,
                    kx: 0.115,
                    ky: 3.026
                },
                "60": {
                    x: 0.048,
                    y: 15.071,
                    kx: 0.179,
                    ky: 2.962
                },
                "61": {
                    x: 0.016,
                    y: 15.033,
                    kx: 0.225,
                    ky: 2.916
                },
                "62": {
                    x: 0.048,
                    y: 15.038,
                    kx: 0.253,
                    ky: 2.889
                },
                "63": {
                    x: 0,
                    y: 15.05,
                    kx: 0.262,
                    ky: 2.88
                },
                "64": {
                    x: -0.038,
                    y: 15.049,
                    kx: 0.253,
                    ky: 2.889
                },
                "65": {
                    x: 0,
                    y: 15.04,
                    kx: 0.225,
                    ky: 2.916
                },
                "66": {
                    x: -0.037,
                    y: 15.049,
                    kx: 0.179,
                    ky: 2.962
                },
                "67": {
                    x: -0.044,
                    y: 15.039,
                    kx: 0.115,
                    ky: 3.026
                },
                "68": {
                    x: -0.01,
                    y: 15.058,
                    kx: 0.033,
                    ky: 3.108
                },
                "69": {
                    x: -0.015,
                    y: 15.042,
                    kx: -0.067,
                    ky: -3.074
                },
                "70": {
                    x: -0.02,
                    y: 15.081,
                    kx: -0.168,
                    ky: -2.974
                },
                "71": {
                    x: -0.024,
                    y: 15.07,
                    kx: -0.25,
                    ky: -2.891
                },
                "72": {
                    x: 0.002,
                    y: 15.071,
                    kx: -0.314,
                    ky: -2.827
                },
                "73": {
                    x: -0.016,
                    y: 15.083,
                    kx: -0.36,
                    ky: -2.782
                },
                "74": {
                    x: 0.002,
                    y: 15.088,
                    kx: -0.387,
                    ky: -2.754
                },
                "75": {
                    x: 0,
                    y: 15.05,
                    kx: -0.397,
                    ky: -2.745
                }
            })
            .addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -62,
                    y: 24,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance4, 2, 76, {
                "2": {
                    x: 0,
                    y: 15.05,
                    r: -0.397
                },
                "3": {
                    x: -0.003,
                    r: -0.396
                },
                "4": {
                    x: -0.026,
                    r: -0.395
                },
                "5": {
                    x: -0.037,
                    r: -0.391
                },
                "6": {
                    x: -0.058,
                    y: 15.048,
                    r: -0.383
                },
                "7": {
                    x: -0.057,
                    y: 15.044,
                    r: -0.37
                },
                "8": {
                    x: -0.053,
                    y: 15.083,
                    r: -0.35
                },
                "9": {
                    x: -0.066,
                    y: 15.058,
                    r: -0.322
                },
                "10": {
                    x: -0.064,
                    y: 15.057,
                    r: -0.286
                },
                "11": {
                    x: -0.065,
                    y: 15.063,
                    r: -0.239
                },
                "12": {
                    x: -0.032,
                    y: 15.049,
                    r: -0.18
                },
                "13": {
                    x: -0.026,
                    y: 15.079,
                    r: -0.108
                },
                "14": {
                    x: -0.046,
                    y: 15.08,
                    r: -0.026
                },
                "15": {
                    x: -0.036,
                    y: 15.054,
                    r: 0.045
                },
                "16": {
                    x: -0.022,
                    y: 15.053,
                    r: 0.104
                },
                "17": {
                    x: -0.034,
                    y: 15.05,
                    r: 0.151
                },
                "18": {
                    x: -0.049,
                    y: 15.055,
                    r: 0.188
                },
                "19": {
                    x: -0.041,
                    y: 15.072,
                    r: 0.215
                },
                "20": {
                    x: -0.032,
                    y: 15.049,
                    r: 0.235
                },
                "21": {
                    x: -0.042,
                    y: 15.031,
                    r: 0.248
                },
                "22": {
                    x: -0.038,
                    y: 15.058,
                    r: 0.256
                },
                "23": {
                    x: -0.037,
                    y: 15.07,
                    r: 0.26
                },
                "24": {
                    x: -0.055,
                    y: 15.056,
                    r: 0.262
                },
                "25": {
                    x: 0,
                    y: 15.05
                },
                "26": {
                    x: 0.003
                },
                "27": {
                    x: 0.02,
                    r: 0.26
                },
                "28": {
                    x: 0.018,
                    r: 0.257
                },
                "29": {
                    x: 0.012,
                    y: 15.049,
                    r: 0.251
                },
                "30": {
                    x: 0.017,
                    y: 15.046,
                    r: 0.241
                },
                "31": {
                    x: 0.047,
                    y: 15.04,
                    r: 0.225
                },
                "32": {
                    x: 0.019,
                    y: 15.075,
                    r: 0.204
                },
                "33": {
                    x: 0.047,
                    y: 15.044,
                    r: 0.175
                },
                "34": {
                    x: 0.044,
                    y: 15.086,
                    r: 0.139
                },
                "35": {
                    x: 0.024,
                    r: 0.093
                },
                "36": {
                    x: -0.002,
                    y: 15.073,
                    r: 0.037
                },
                "37": {
                    x: 0.021,
                    y: 15.066,
                    r: -0.029
                },
                "38": {
                    x: 0.001,
                    y: 15.047,
                    r: -0.105
                },
                "39": {
                    x: 0.029,
                    y: 15.054,
                    r: -0.172
                },
                "40": {
                    x: 0.03,
                    y: 15.08,
                    r: -0.228
                },
                "41": {
                    x: 0.029,
                    y: 15.043,
                    r: -0.274
                },
                "42": {
                    x: -0.003,
                    y: 15.054,
                    r: -0.31
                },
                "43": {
                    x: 0.004,
                    y: 15.066,
                    r: -0.339
                },
                "44": {
                    x: 0.018,
                    y: 15.082,
                    r: -0.36
                },
                "45": {
                    x: 0.005,
                    y: 15.046,
                    r: -0.375
                },
                "46": {
                    x: 0.029,
                    y: 15.053,
                    r: -0.386
                },
                "47": {
                    x: 0.003,
                    y: 15.046,
                    r: -0.392
                },
                "48": {
                    x: -0.009,
                    y: 15.067,
                    r: -0.395
                },
                "49": {
                    x: 0.005,
                    y: 15.056,
                    r: -0.396
                },
                "50": {
                    x: 0,
                    y: 15.05,
                    r: -0.397
                },
                "52": {
                    x: -0.038,
                    y: 15.049,
                    r: -0.387
                },
                "53": {
                    x: -0.05,
                    y: 15.04,
                    r: -0.36
                },
                "54": {
                    x: -0.037,
                    y: 15.049,
                    r: -0.314
                },
                "55": {
                    x: -0.044,
                    y: 15.039,
                    r: -0.25
                },
                "56": {
                    x: -0.06,
                    y: 15.058,
                    r: -0.168
                },
                "57": {
                    x: -0.015,
                    y: 15.042,
                    r: -0.067
                },
                "58": {
                    x: -0.02,
                    y: 15.081,
                    r: 0.033
                },
                "59": {
                    x: -0.024,
                    y: 15.07,
                    r: 0.115
                },
                "60": {
                    x: -0.048,
                    y: 15.071,
                    r: 0.179
                },
                "61": {
                    x: -0.016,
                    y: 15.033,
                    r: 0.225
                },
                "62": {
                    x: -0.048,
                    y: 15.038,
                    r: 0.253
                },
                "63": {
                    x: 0,
                    y: 15.05,
                    r: 0.262
                },
                "64": {
                    x: 0.038,
                    y: 15.049,
                    r: 0.253
                },
                "65": {
                    x: 0,
                    y: 15.04,
                    r: 0.225
                },
                "66": {
                    x: 0.037,
                    y: 15.049,
                    r: 0.179
                },
                "67": {
                    x: 0.044,
                    y: 15.039,
                    r: 0.115
                },
                "68": {
                    x: 0.01,
                    y: 15.058,
                    r: 0.033
                },
                "69": {
                    x: 0.015,
                    y: 15.042,
                    r: -0.067
                },
                "70": {
                    x: 0.02,
                    y: 15.081,
                    r: -0.168
                },
                "71": {
                    x: 0.024,
                    y: 15.07,
                    r: -0.25
                },
                "72": {
                    x: -0.002,
                    y: 15.071,
                    r: -0.314
                },
                "73": {
                    x: 0.016,
                    y: 15.083,
                    r: -0.36
                },
                "74": {
                    x: -0.002,
                    y: 15.088,
                    r: -0.387
                },
                "75": {
                    x: 0,
                    y: 15.05,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance5, 77, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 49)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 74)
            .addAction(function () {
                this.stop();
            }, 77);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 25, loop: false });
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Tako 1.png"]))
            .setTransform(-25, -9, 0.5, 0.5);
        this.addTimedChild(instance1);
    });

    lib.Animated_Tako = makeObj("MovieClip", 'Animated_Tako',{
            duration: 25,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 21,
                dead: 23
            }
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Tako 2.png"]));
        var instance4 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Tako 3.png"]));
        var instance2 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Tako.png"]))
            .setTransform(-71, -87, 0.5, 0.5);
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        var instance5 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -36);
        this.addTimedChild(instance3, 0, 21, {
                "0": {
                    x: -38,
                    y: 37,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance4, 21, 4, {
                "21": {
                    x: -38,
                    y: 37,
                    sx: 0.5,
                    sy: 0.5,
                    kx: 0
                },
                "23": {
                    sy: 0.534,
                    kx: 0.358
                }
            })
            .addTimedChild(instance2)
            .addTimedChild(instance1, 0, 25, {
                "0": {
                    x: 0,
                    y: -15,
                    sx: 1,
                    sy: 1
                },
                "3": {
                    y: -15.017,
                    sx: 0.978,
                    sy: 0.978
                },
                "4": {
                    y: -15.033,
                    sx: 0.956,
                    sy: 0.956
                },
                "5": {
                    y: -15,
                    sx: 0.933,
                    sy: 0.933
                },
                "6": {
                    y: -15.017,
                    sx: 0.911,
                    sy: 0.911
                },
                "7": {
                    y: -15.033,
                    sx: 0.889,
                    sy: 0.889
                },
                "8": {
                    y: -15.05,
                    sx: 0.867,
                    sy: 0.867
                },
                "9": {
                    y: -15.017,
                    sx: 0.844,
                    sy: 0.844
                },
                "10": {
                    y: -15.033,
                    sx: 0.822,
                    sy: 0.822
                },
                "11": {
                    y: -14.95,
                    sx: 0.8,
                    sy: 0.8
                },
                "12": {
                    y: -14.965,
                    sx: 0.822,
                    sy: 0.822
                },
                "13": {
                    y: -14.981,
                    sx: 0.844,
                    sy: 0.844
                },
                "14": {
                    y: -14.996,
                    sx: 0.867,
                    sy: 0.867
                },
                "15": {
                    y: -14.961,
                    sx: 0.889,
                    sy: 0.889
                },
                "16": {
                    y: -14.976,
                    sx: 0.911,
                    sy: 0.911
                },
                "17": {
                    y: -14.942,
                    sx: 0.933,
                    sy: 0.933
                },
                "18": {
                    y: -14.957,
                    sx: 0.956,
                    sy: 0.956
                },
                "19": {
                    y: -14.972,
                    sx: 0.978,
                    sy: 0.978
                },
                "20": {
                    y: -15,
                    sx: 1,
                    sy: 1
                },
                "21": {
                    x: 0.5,
                    y: -10.5,
                    sx: 0.611,
                    sy: 0.611
                }
            })
            .addTimedChild(instance5, 23, 2)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 20)
            .addAction(function () {
                this.stop()
            }, 22)
            .addAction(function () {
                this.stop()
            }, 24);
    });

    lib.Body_DumboOctopus = makeObj("Container", 'Body_DumboOctopus', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Dumbo_Octopus.png"]))
            .setTransform(-53, -65, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_DumboOctopus = makeObj("Container", 'Tail_DumboOctopus', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Dumbo_Octopus 1.png"]))
            .setTransform(-50, -4, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_DumboOctopus = makeObj("MovieClip", 'Animated_DumboOctopus',{
            duration: 28,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 18,
                dead: 26
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_DumboOctopus();
        var instance1 = new lib.Body_DumboOctopus();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -36);
        this.addTimedChild(instance2, 0, 28, {
                "0": {
                    x: 0.5,
                    y: -25.95,
                    kx: 0
                },
                "10": {
                    kx: 3.142
                },
                "18": {
                    kx: 0
                },
                "22": {
                    kx: 3.142
                },
                "26": {
                    kx: 0
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 27, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 16)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 25)
            .addAction(function () {
                this.stop();
            }, 27);
    });

    lib.Body_Archbeluga = makeObj("Container", 'Body_Archbeluga', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/ArchBeluga.png"]))
            .setTransform(-116, -57, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Archbeluga = makeObj("Container", 'Tail_Archbeluga', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/ArchBeluga 1.png"]))
            .setTransform(-31, -3, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_ArchBeluga = makeObj("MovieClip", 'Animated_ArchBeluga',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Archbeluga();
        var instance1 = new lib.Body_Archbeluga();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    y: 49.8,
                    r: -0.297
                },
                "3": {
                    x: -0.05,
                    y: 49.899,
                    r: -0.296
                },
                "4": {
                    x: -0.054,
                    y: 49.898,
                    r: -0.289
                },
                "5": {
                    x: -0.066,
                    y: 49.93,
                    r: -0.269
                },
                "6": {
                    x: -0.038,
                    y: 49.894,
                    r: -0.232
                },
                "7": {
                    x: -0.062,
                    y: 49.898,
                    r: -0.17
                },
                "8": {
                    x: -0.049,
                    y: 49.903,
                    r: -0.077
                },
                "9": {
                    x: 0.047,
                    y: 49.869,
                    r: 0.042
                },
                "10": {
                    x: 0.028,
                    y: 49.838,
                    r: 0.135
                },
                "11": {
                    x: 0.064,
                    y: 49.861,
                    r: 0.197
                },
                "12": {
                    x: 0.031,
                    y: 49.843,
                    r: 0.234
                },
                "13": {
                    x: 0.056,
                    y: 49.847,
                    r: 0.254
                },
                "14": {
                    x: 0.054,
                    y: 49.86,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.033,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.015,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: -0.006,
                    y: 50.041,
                    r: 0.244
                },
                "19": {
                    x: 0.018,
                    y: 50.004,
                    r: 0.219
                },
                "20": {
                    x: 0.032,
                    y: 50.028,
                    r: 0.179
                },
                "21": {
                    x: 0.024,
                    y: 50.039,
                    r: 0.119
                },
                "22": {
                    x: 0.004,
                    y: 50.016,
                    r: 0.035
                },
                "23": {
                    x: 0.069,
                    y: 50.078,
                    r: -0.07
                },
                "24": {
                    x: 0.081,
                    y: 50.044,
                    r: -0.154
                },
                "25": {
                    x: 0.097,
                    y: 50.047,
                    r: -0.214
                },
                "26": {
                    x: 0.073,
                    y: 50.035,
                    r: -0.254
                },
                "27": {
                    x: 0.082,
                    y: 50.069,
                    r: -0.279
                },
                "28": {
                    x: 0.069,
                    y: 50.042,
                    r: -0.291
                },
                "29": {
                    x: 0.065,
                    y: 50.069,
                    r: -0.296
                },
                "30": {
                    x: 0,
                    y: 49.8,
                    r: -0.297
                },
                "32": {
                    x: -0.084,
                    y: 49.886,
                    r: -0.274
                },
                "33": {
                    x: -0.083,
                    y: 49.893,
                    r: -0.206
                },
                "34": {
                    x: -0.044,
                    y: 49.905,
                    r: -0.092
                },
                "35": {
                    x: 0.019,
                    y: 49.874,
                    r: 0.057
                },
                "36": {
                    x: 0.067,
                    y: 49.861,
                    r: 0.171
                },
                "37": {
                    x: 0.031,
                    y: 49.874,
                    r: 0.239
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: 0.039,
                    y: 50.036,
                    r: 0.239
                },
                "40": {
                    x: 0.002,
                    y: 50.041,
                    r: 0.171
                },
                "41": {
                    x: 0.035,
                    y: 50,
                    r: 0.057
                },
                "42": {
                    x: 0.049,
                    y: 50.06,
                    r: -0.092
                },
                "43": {
                    x: 0.072,
                    y: 50.038,
                    r: -0.205
                },
                "44": {
                    x: 0.07,
                    y: 50.044,
                    r: -0.274
                },
                "45": {
                    x: 0,
                    y: 49.8,
                    r: -0.297
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Beluga = makeObj("Container", 'Body_Beluga', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Beluga.png"]))
            .setTransform(-64, -75, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Beluga = makeObj("Container", 'Tail_Beluga', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Beluga 1.png"]))
            .setTransform(-29, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Beluga = makeObj("MovieClip", 'Animated_Beluga',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Beluga();
        var instance1 = new lib.Body_Beluga();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Narwhal = makeObj("Container", 'Body_Narwhal', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Narwhal.png"]))
            .setTransform(-64, -62, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Narwhal = makeObj("Container", 'Tail_Narwhal', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Narwhal 1.png"]))
            .setTransform(-29, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Narwhal = makeObj("MovieClip", 'Animated_Narwhal',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Narwhal();
        var instance1 = new lib.Body_Narwhal();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Diamondfish = makeObj("Container", 'Body_Diamondfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Diamondfish.png"]))
            .setTransform(-74, -87, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Diamondfish = makeObj("Container", 'Tail_Diamondfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Diamondfish 1.png"]))
            .setTransform(-106, -112, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Diamondfish = makeObj("MovieClip", 'Animated_Diamondfish',{
            duration: 64,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 41,
                dead: 62
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Diamondfish();
        var instance1 = new lib.Body_Diamondfish();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-46, -25, 1.076, 1.076);
        this.addTimedChild(instance2, 0, 64, {
                "0": {
                    x: 0,
                    y: 37,
                    r: 0
                },
                "2": {
                    x: 0.05,
                    y: 36.95,
                    r: -0.087
                },
                "3": {
                    x: -0.003,
                    y: 37.051
                },
                "4": {
                    x: 0.015,
                    r: -0.086
                },
                "5": {
                    x: -0.068,
                    y: 37.05,
                    r: -0.084
                },
                "6": {
                    x: -0.032,
                    y: 37.049,
                    r: -0.08
                },
                "7": {
                    x: -0.052,
                    y: 37.047,
                    r: -0.072
                },
                "8": {
                    x: -0.055,
                    y: 37.039,
                    r: -0.061
                },
                "9": {
                    x: -0.066,
                    y: 37.022,
                    r: -0.046
                },
                "10": {
                    x: -0.063,
                    y: 37.034,
                    r: -0.026
                },
                "11": {
                    x: -0.02,
                    y: 37.015,
                    r: 0
                },
                "12": {
                    x: -0.025,
                    y: 37.019,
                    r: 0.026
                },
                "13": {
                    x: -0.067,
                    y: 37.029,
                    r: 0.046
                },
                "14": {
                    x: -0.023,
                    y: 37.05,
                    r: 0.061
                },
                "15": {
                    x: -0.071,
                    y: 37.039,
                    r: 0.072
                },
                "16": {
                    x: -0.037,
                    y: 37.045,
                    r: 0.08
                },
                "17": {
                    x: -0.049,
                    y: 37.018,
                    r: 0.084
                },
                "18": {
                    x: -0.031,
                    y: 37.054,
                    r: 0.086
                },
                "19": {
                    x: -0.062,
                    y: 37.048,
                    r: 0.087
                },
                "20": {
                    x: 0,
                    y: 37
                },
                "21": {
                    x: 0.052,
                    y: 37.101
                },
                "22": {
                    x: 0.025,
                    y: 37.1
                },
                "23": {
                    x: 0.086,
                    r: 0.085
                },
                "24": {
                    x: 0.106,
                    y: 37.099,
                    r: 0.082
                },
                "25": {
                    x: 0.103,
                    y: 37.098,
                    r: 0.076
                },
                "26": {
                    x: 0.097,
                    y: 37.093,
                    r: 0.068
                },
                "27": {
                    x: 0.107,
                    y: 37.084,
                    r: 0.057
                },
                "28": {
                    x: 0.102,
                    y: 37.063,
                    r: 0.043
                },
                "29": {
                    y: 37.075,
                    r: 0.024
                },
                "30": {
                    x: 0.074,
                    y: 37.06,
                    r: 0
                },
                "31": {
                    x: 0.094,
                    y: 37.073,
                    r: -0.024
                },
                "32": {
                    x: 0.09,
                    y: 37.089,
                    r: -0.043
                },
                "33": {
                    x: 0.081,
                    y: 37.064,
                    r: -0.057
                },
                "34": {
                    x: 0.086,
                    y: 37.103,
                    r: -0.068
                },
                "35": {
                    x: 0.126,
                    y: 37.057,
                    r: -0.076
                },
                "36": {
                    x: 0.12,
                    y: 37.073,
                    r: -0.082
                },
                "37": {
                    x: 0.088,
                    y: 37.103,
                    r: -0.085
                },
                "38": {
                    x: 0.099,
                    y: 37.093,
                    r: -0.087
                },
                "39": {
                    x: 0.121,
                    y: 37.089
                },
                "40": {
                    x: 0.05,
                    y: 36.95
                },
                "42": {
                    x: -0.028,
                    y: 37.05,
                    r: -0.084
                },
                "43": {
                    x: -0.065,
                    y: 37.047,
                    r: -0.073
                },
                "44": {
                    x: -0.06,
                    y: 37.034,
                    r: -0.056
                },
                "45": {
                    x: -0.062,
                    y: 37.045,
                    r: -0.031
                },
                "46": {
                    x: -0.02,
                    y: 37.015,
                    r: 0
                },
                "47": {
                    x: -0.024,
                    y: 37.046,
                    r: 0.031
                },
                "48": {
                    x: -0.07,
                    y: 37.029,
                    r: 0.056
                },
                "49": {
                    x: -0.058,
                    y: 37.033,
                    r: 0.073
                },
                "50": {
                    x: -0.039,
                    y: 37.02,
                    r: 0.084
                },
                "51": {
                    x: 0,
                    y: 37,
                    r: 0.087
                },
                "52": {
                    x: 0.078,
                    y: 37.1,
                    r: 0.084
                },
                "53": {
                    x: 0.115,
                    y: 37.096,
                    r: 0.073
                },
                "54": {
                    x: 0.111,
                    y: 37.082,
                    r: 0.056
                },
                "55": {
                    x: 0.115,
                    y: 37.092,
                    r: 0.031
                },
                "56": {
                    x: 0.074,
                    y: 37.06,
                    r: 0
                },
                "57": {
                    x: 0.08,
                    y: 37.09,
                    r: -0.031
                },
                "58": {
                    x: 0.127,
                    y: 37.072,
                    r: -0.056
                },
                "59": {
                    x: 0.115,
                    y: 37.074,
                    r: -0.073
                },
                "60": {
                    x: 0.097,
                    y: 37.06,
                    r: -0.084
                },
                "61": {
                    x: 0.05,
                    y: 36.95,
                    r: -0.087
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 63, 1)
            .addAction(function () {
                this.stop();
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 39)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 60)
            .addAction(function () {
                this.stop();
            }, 63);
    });

    lib.Body_Goldenfish = makeObj("Container", 'Body_Goldenfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Goldenfish.png"]))
            .setTransform(-61, -68, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Goldenfish = makeObj("Container", 'Tail_Goldenfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Goldenfish_ 1.png"]))
            .setTransform(-60, -56, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Goldenfish = makeObj("MovieClip", 'Animated_Goldenfish',{
            duration: 64,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 41,
                dead: 62
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Goldenfish();
        var instance1 = new lib.Body_Goldenfish();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-46, -25, 1.076, 1.076);
        this.addTimedChild(instance2, 0, 64, {
                "0": {
                    x: 0,
                    y: 37,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.016,
                    y: 36.999,
                    r: -0.396
                },
                "4": {
                    x: -0.033,
                    r: -0.393
                },
                "5": {
                    x: -0.001,
                    y: 36.996,
                    r: -0.384
                },
                "6": {
                    x: -0.019,
                    y: 36.984,
                    r: -0.368
                },
                "7": {
                    x: -0.037,
                    y: 36.99,
                    r: -0.34
                },
                "8": {
                    x: -0.003,
                    y: 37.023,
                    r: -0.299
                },
                "9": {
                    x: -0.007,
                    y: 37.007,
                    r: -0.242
                },
                "10": {
                    x: -0.028,
                    y: 37.015,
                    r: -0.165
                },
                "11": {
                    x: -0.01,
                    y: 37.013,
                    r: -0.067
                },
                "12": {
                    x: -0.027,
                    y: 37.025,
                    r: 0.031
                },
                "13": {
                    x: 0,
                    y: 37.008,
                    r: 0.107
                },
                "14": {
                    x: -0.028,
                    y: 36.982,
                    r: 0.164
                },
                "15": {
                    x: 0.001,
                    y: 36.997,
                    r: 0.205
                },
                "16": {
                    x: -0.031,
                    y: 37.008,
                    r: 0.233
                },
                "17": {
                    x: -0.028,
                    y: 36.991,
                    r: 0.25
                },
                "18": {
                    x: -0.03,
                    y: 36.999,
                    r: 0.258
                },
                "19": {
                    x: -0.023,
                    y: 37.027,
                    r: 0.261
                },
                "20": {
                    x: 0,
                    y: 37,
                    r: 0.262
                },
                "21": {
                    x: 0.012,
                    y: 36.999,
                    r: 0.261
                },
                "22": {
                    x: -0.003,
                    r: 0.259
                },
                "23": {
                    x: 0.029,
                    y: 36.998,
                    r: 0.253
                },
                "24": {
                    x: -0.02,
                    y: 36.991,
                    r: 0.241
                },
                "25": {
                    x: 0.022,
                    y: 37.018,
                    r: 0.221
                },
                "26": {
                    x: -0.022,
                    y: 37.006,
                    r: 0.191
                },
                "27": {
                    x: 0.019,
                    y: 37.014,
                    r: 0.149
                },
                "28": {
                    x: 0.006,
                    y: 37.025,
                    r: 0.093
                },
                "29": {
                    x: -0.007,
                    y: 36.989,
                    r: 0.022
                },
                "30": {
                    x: 0.011,
                    y: 37.013,
                    r: -0.067
                },
                "31": {
                    x: -0.018,
                    y: 37.008,
                    r: -0.157
                },
                "32": {
                    x: 0.006,
                    y: 36.999,
                    r: -0.228
                },
                "33": {
                    x: -0.005,
                    y: 37.031,
                    r: -0.284
                },
                "34": {
                    x: 0,
                    y: 37.001,
                    r: -0.325
                },
                "35": {
                    x: 0.013,
                    y: 37.023,
                    r: -0.355
                },
                "36": {
                    x: 0.014,
                    y: 37.037,
                    r: -0.375
                },
                "37": {
                    x: -0.025,
                    y: 37.017,
                    r: -0.388
                },
                "38": {
                    x: 0.009,
                    y: 37.026,
                    r: -0.394
                },
                "39": {
                    x: -0.024,
                    y: 37.024,
                    r: -0.396
                },
                "40": {
                    x: 0,
                    y: 37,
                    r: -0.397
                },
                "42": {
                    x: -0.037,
                    y: 36.996,
                    r: -0.383
                },
                "43": {
                    x: -0.047,
                    y: 36.998,
                    r: -0.344
                },
                "44": {
                    x: -0.024,
                    y: 36.99,
                    r: -0.278
                },
                "45": {
                    x: -0.037,
                    y: 36.981,
                    r: -0.186
                },
                "46": {
                    x: -0.01,
                    y: 37.013,
                    r: -0.067
                },
                "47": {
                    x: -0.015,
                    y: 37.003,
                    r: 0.051
                },
                "48": {
                    x: -0.017,
                    y: 36.988,
                    r: 0.143
                },
                "49": {
                    x: -0.014,
                    y: 37.018,
                    r: 0.209
                },
                "50": {
                    x: 0.001,
                    y: 37.013,
                    r: 0.249
                },
                "51": {
                    x: 0,
                    y: 37,
                    r: 0.262
                },
                "52": {
                    x: -0.013,
                    y: 36.996,
                    r: 0.249
                },
                "53": {
                    x: -0.003,
                    y: 36.998,
                    r: 0.209
                },
                "54": {
                    x: 0.024,
                    y: 36.99,
                    r: 0.143
                },
                "55": {
                    x: -0.013,
                    y: 37.031,
                    r: 0.051
                },
                "56": {
                    x: 0.011,
                    y: 37.013,
                    r: -0.067
                },
                "57": {
                    x: 0.015,
                    y: 37.003,
                    r: -0.186
                },
                "58": {
                    x: 0.017,
                    y: 37.038,
                    r: -0.278
                },
                "59": {
                    x: 0.014,
                    y: 37.018,
                    r: -0.344
                },
                "60": {
                    x: -0.001,
                    y: 37.012,
                    r: -0.383
                },
                "61": {
                    x: 0,
                    y: 37,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 63, 1)
            .addAction(function () {
                this.stop();
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 39)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 60)
            .addAction(function () {
                this.stop();
            }, 63);
    });

    lib.Body_Goldfish = makeObj("Container", 'Body_Goldfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Goldfish_.png"]))
            .setTransform(-61, -68, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Goldfish = makeObj("Container", 'Tail_Goldfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Goldfish_ 1.png"]))
            .setTransform(-60, -56, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Goldfish = makeObj("MovieClip", 'Animated_Goldfish',{
            duration: 64,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 41,
                dead: 62
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Goldfish();
        var instance1 = new lib.Body_Goldfish();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-46, -25, 1.076, 1.076);
        this.addTimedChild(instance2, 0, 64, {
                "0": {
                    x: 0,
                    y: 37,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.016,
                    y: 36.999,
                    r: -0.396
                },
                "4": {
                    x: -0.033,
                    r: -0.393
                },
                "5": {
                    x: -0.001,
                    y: 36.996,
                    r: -0.384
                },
                "6": {
                    x: -0.019,
                    y: 36.984,
                    r: -0.368
                },
                "7": {
                    x: -0.037,
                    y: 36.99,
                    r: -0.34
                },
                "8": {
                    x: -0.003,
                    y: 37.023,
                    r: -0.299
                },
                "9": {
                    x: -0.007,
                    y: 37.007,
                    r: -0.242
                },
                "10": {
                    x: -0.028,
                    y: 37.015,
                    r: -0.165
                },
                "11": {
                    x: -0.01,
                    y: 37.013,
                    r: -0.067
                },
                "12": {
                    x: -0.027,
                    y: 37.025,
                    r: 0.031
                },
                "13": {
                    x: 0,
                    y: 37.008,
                    r: 0.107
                },
                "14": {
                    x: -0.028,
                    y: 36.982,
                    r: 0.164
                },
                "15": {
                    x: 0.001,
                    y: 36.997,
                    r: 0.205
                },
                "16": {
                    x: -0.031,
                    y: 37.008,
                    r: 0.233
                },
                "17": {
                    x: -0.028,
                    y: 36.991,
                    r: 0.25
                },
                "18": {
                    x: -0.03,
                    y: 36.999,
                    r: 0.258
                },
                "19": {
                    x: -0.023,
                    y: 37.027,
                    r: 0.261
                },
                "20": {
                    x: 0,
                    y: 37,
                    r: 0.262
                },
                "21": {
                    x: 0.012,
                    y: 36.999,
                    r: 0.261
                },
                "22": {
                    x: -0.003,
                    r: 0.259
                },
                "23": {
                    x: 0.029,
                    y: 36.998,
                    r: 0.253
                },
                "24": {
                    x: -0.02,
                    y: 36.991,
                    r: 0.241
                },
                "25": {
                    x: 0.022,
                    y: 37.018,
                    r: 0.221
                },
                "26": {
                    x: -0.022,
                    y: 37.006,
                    r: 0.191
                },
                "27": {
                    x: 0.019,
                    y: 37.014,
                    r: 0.149
                },
                "28": {
                    x: 0.006,
                    y: 37.025,
                    r: 0.093
                },
                "29": {
                    x: -0.007,
                    y: 36.989,
                    r: 0.022
                },
                "30": {
                    x: 0.011,
                    y: 37.013,
                    r: -0.067
                },
                "31": {
                    x: -0.018,
                    y: 37.008,
                    r: -0.157
                },
                "32": {
                    x: 0.006,
                    y: 36.999,
                    r: -0.228
                },
                "33": {
                    x: -0.005,
                    y: 37.031,
                    r: -0.284
                },
                "34": {
                    x: 0,
                    y: 37.001,
                    r: -0.325
                },
                "35": {
                    x: 0.013,
                    y: 37.023,
                    r: -0.355
                },
                "36": {
                    x: 0.014,
                    y: 37.037,
                    r: -0.375
                },
                "37": {
                    x: -0.025,
                    y: 37.017,
                    r: -0.388
                },
                "38": {
                    x: 0.009,
                    y: 37.026,
                    r: -0.394
                },
                "39": {
                    x: -0.024,
                    y: 37.024,
                    r: -0.396
                },
                "40": {
                    x: 0,
                    y: 37,
                    r: -0.397
                },
                "42": {
                    x: -0.037,
                    y: 36.996,
                    r: -0.383
                },
                "43": {
                    x: -0.047,
                    y: 36.998,
                    r: -0.344
                },
                "44": {
                    x: -0.024,
                    y: 36.99,
                    r: -0.278
                },
                "45": {
                    x: -0.037,
                    y: 36.981,
                    r: -0.186
                },
                "46": {
                    x: -0.01,
                    y: 37.013,
                    r: -0.067
                },
                "47": {
                    x: -0.015,
                    y: 37.003,
                    r: 0.051
                },
                "48": {
                    x: -0.017,
                    y: 36.988,
                    r: 0.143
                },
                "49": {
                    x: -0.014,
                    y: 37.018,
                    r: 0.209
                },
                "50": {
                    x: 0.001,
                    y: 37.013,
                    r: 0.249
                },
                "51": {
                    x: 0,
                    y: 37,
                    r: 0.262
                },
                "52": {
                    x: -0.013,
                    y: 36.996,
                    r: 0.249
                },
                "53": {
                    x: -0.003,
                    y: 36.998,
                    r: 0.209
                },
                "54": {
                    x: 0.024,
                    y: 36.99,
                    r: 0.143
                },
                "55": {
                    x: -0.013,
                    y: 37.031,
                    r: 0.051
                },
                "56": {
                    x: 0.011,
                    y: 37.013,
                    r: -0.067
                },
                "57": {
                    x: 0.015,
                    y: 37.003,
                    r: -0.186
                },
                "58": {
                    x: 0.017,
                    y: 37.038,
                    r: -0.278
                },
                "59": {
                    x: 0.014,
                    y: 37.018,
                    r: -0.344
                },
                "60": {
                    x: -0.001,
                    y: 37.012,
                    r: -0.383
                },
                "61": {
                    x: 0,
                    y: 37,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 63, 1)
            .addAction(function () {
                this.stop();
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 39)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 60)
            .addAction(function () {
                this.stop();
            }, 63);
    });

    lib.Body_Dolphin_Spinner = makeObj("Container", 'Body_Dolphin_Spinner', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Spinner_Dolphin.png"]))
            .setTransform(-65, -82, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Dolphin_Spinner = makeObj("Container", 'Tail_Dolphin_Spinner', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Spinner_Dolphin 1.png"]))
            .setTransform(-31, -8, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_SpinnerDolphin = makeObj("MovieClip", 'Animated_SpinnerDolphin',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Dolphin_Spinner();
        var instance1 = new lib.Body_Dolphin_Spinner();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Dolphin_Miami = makeObj("Container", 'Body_Dolphin_Miami', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Miami_Dolphin.png"]))
            .setTransform(-64, -74, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Dolphin_Miami = makeObj("Container", 'Tail_Dolphin_Miami', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Miami_Dolphin 1.png"]))
            .setTransform(-29, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_CommonDolphin = makeObj("MovieClip", 'Animated_CommonDolphin',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Dolphin_Miami();
        var instance1 = new lib.Body_Dolphin_Miami();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Dolphin = makeObj("Container", 'Body_Dolphin', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Dolphin.png"]))
            .setTransform(-63, -49, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Dolphin = makeObj("Container", 'Tail_Dolphin', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Dolphin 1.png"]))
            .setTransform(-29, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_BottlenoseDolphin = makeObj("MovieClip", 'Animated_BottlenoseDolphin',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Dolphin();
        var instance1 = new lib.Body_Dolphin();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Onifugu = makeObj("Container", 'Body_Onifugu', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Onifugu.png"]))
            .setTransform(-117, -86, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Onifugu = makeObj("Container", 'Tail_Onifugu', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Onifugu 1.png"]))
            .setTransform(-18, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Onifugu = makeObj("MovieClip", 'Animated_Onifugu',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Onifugu();
        var instance1 = new lib.Body_Onifugu();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 44.4,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.003,
                    y: 44.449,
                    r: -0.395
                },
                "4": {
                    x: -0.025,
                    y: 44.447,
                    r: -0.387
                },
                "5": {
                    x: -0.036,
                    y: 44.426,
                    r: -0.364
                },
                "6": {
                    x: -0.002,
                    y: 44.419,
                    r: -0.32
                },
                "7": {
                    x: -0.027,
                    y: 44.452,
                    r: -0.247
                },
                "8": {
                    x: -0.017,
                    y: 44.419,
                    r: -0.138
                },
                "9": {
                    y: 44.404,
                    r: 0.003
                },
                "10": {
                    y: 44.432,
                    r: 0.112
                },
                "11": {
                    x: -0.042,
                    y: 44.449,
                    r: 0.185
                },
                "12": {
                    x: -0.012,
                    y: 44.431,
                    r: 0.229
                },
                "13": {
                    x: -0.025,
                    y: 44.429,
                    r: 0.252
                },
                "14": {
                    x: -0.021,
                    y: 44.453,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 44.4,
                    r: 0.262
                },
                "16": {
                    x: 0.035,
                    y: 44.399,
                    r: 0.261
                },
                "17": {
                    x: 0.027,
                    y: 44.398,
                    r: 0.256
                },
                "18": {
                    x: 0.036,
                    y: 44.389,
                    r: 0.241
                },
                "19": {
                    x: 0.017,
                    y: 44.394,
                    r: 0.212
                },
                "20": {
                    x: 0.024,
                    y: 44.388,
                    r: 0.164
                },
                "21": {
                    x: -0.002,
                    y: 44.42,
                    r: 0.093
                },
                "22": {
                    x: 0.04,
                    y: 44.419,
                    r: -0.006
                },
                "23": {
                    x: 0.009,
                    y: 44.403,
                    r: -0.129
                },
                "24": {
                    x: 0.038,
                    y: 44.429,
                    r: -0.228
                },
                "25": {
                    x: 0.014,
                    y: 44.398,
                    r: -0.299
                },
                "26": {
                    x: 0.026,
                    y: 44.433,
                    r: -0.347
                },
                "27": {
                    x: 0.017,
                    y: 44.435,
                    r: -0.375
                },
                "28": {
                    x: -0.006,
                    y: 44.439,
                    r: -0.39
                },
                "29": {
                    x: 0.036,
                    y: 44.441,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 44.4,
                    r: -0.397
                },
                "32": {
                    x: -0.042,
                    y: 44.433,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 44.443,
                    r: -0.289
                },
                "34": {
                    x: -0.033,
                    y: 44.407,
                    r: -0.155
                },
                "35": {
                    x: -0.012,
                    y: 44.453,
                    r: 0.02
                },
                "36": {
                    x: -0.039,
                    y: 44.432,
                    r: 0.154
                },
                "37": {
                    x: -0.01,
                    y: 44.438,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 44.4,
                    r: 0.262
                },
                "39": {
                    x: 0.042,
                    y: 44.433,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 44.393,
                    r: 0.154
                },
                "41": {
                    x: 0.033,
                    y: 44.407,
                    r: 0.02
                },
                "42": {
                    x: 0.012,
                    y: 44.404,
                    r: -0.155
                },
                "43": {
                    x: -0.011,
                    y: 44.431,
                    r: -0.289
                },
                "44": {
                    x: 0.01,
                    y: 44.437,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 44.4,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Porcupinefish = makeObj("Container", 'Body_Porcupinefish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Porcupine_Fish.png"]))
            .setTransform(-65, -66, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_PorcupineFish = makeObj("Container", 'Tail_PorcupineFish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Porcupine_Fish 1.png"]))
            .setTransform(-18, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_PorcupineFish = makeObj("MovieClip", 'Animated_PorcupineFish',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_PorcupineFish();
        var instance1 = new lib.Body_Porcupinefish();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 44.4,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.003,
                    y: 44.449,
                    r: -0.395
                },
                "4": {
                    x: -0.025,
                    y: 44.447,
                    r: -0.387
                },
                "5": {
                    x: -0.036,
                    y: 44.426,
                    r: -0.364
                },
                "6": {
                    x: -0.002,
                    y: 44.419,
                    r: -0.32
                },
                "7": {
                    x: -0.027,
                    y: 44.452,
                    r: -0.247
                },
                "8": {
                    x: -0.017,
                    y: 44.419,
                    r: -0.138
                },
                "9": {
                    y: 44.404,
                    r: 0.003
                },
                "10": {
                    y: 44.432,
                    r: 0.112
                },
                "11": {
                    x: -0.042,
                    y: 44.449,
                    r: 0.185
                },
                "12": {
                    x: -0.012,
                    y: 44.431,
                    r: 0.229
                },
                "13": {
                    x: -0.025,
                    y: 44.429,
                    r: 0.252
                },
                "14": {
                    x: -0.021,
                    y: 44.453,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 44.4,
                    r: 0.262
                },
                "16": {
                    x: 0.035,
                    y: 44.399,
                    r: 0.261
                },
                "17": {
                    x: 0.027,
                    y: 44.398,
                    r: 0.256
                },
                "18": {
                    x: 0.036,
                    y: 44.389,
                    r: 0.241
                },
                "19": {
                    x: 0.017,
                    y: 44.394,
                    r: 0.212
                },
                "20": {
                    x: 0.024,
                    y: 44.388,
                    r: 0.164
                },
                "21": {
                    x: -0.002,
                    y: 44.42,
                    r: 0.093
                },
                "22": {
                    x: 0.04,
                    y: 44.419,
                    r: -0.006
                },
                "23": {
                    x: 0.009,
                    y: 44.403,
                    r: -0.129
                },
                "24": {
                    x: 0.038,
                    y: 44.429,
                    r: -0.228
                },
                "25": {
                    x: 0.014,
                    y: 44.398,
                    r: -0.299
                },
                "26": {
                    x: 0.026,
                    y: 44.433,
                    r: -0.347
                },
                "27": {
                    x: 0.017,
                    y: 44.435,
                    r: -0.375
                },
                "28": {
                    x: -0.006,
                    y: 44.439,
                    r: -0.39
                },
                "29": {
                    x: 0.036,
                    y: 44.441,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 44.4,
                    r: -0.397
                },
                "32": {
                    x: -0.042,
                    y: 44.433,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 44.443,
                    r: -0.289
                },
                "34": {
                    x: -0.033,
                    y: 44.407,
                    r: -0.155
                },
                "35": {
                    x: -0.012,
                    y: 44.453,
                    r: 0.02
                },
                "36": {
                    x: -0.039,
                    y: 44.432,
                    r: 0.154
                },
                "37": {
                    x: -0.01,
                    y: 44.438,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 44.4,
                    r: 0.262
                },
                "39": {
                    x: 0.042,
                    y: 44.433,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 44.393,
                    r: 0.154
                },
                "41": {
                    x: 0.033,
                    y: 44.407,
                    r: 0.02
                },
                "42": {
                    x: 0.012,
                    y: 44.404,
                    r: -0.155
                },
                "43": {
                    x: -0.011,
                    y: 44.431,
                    r: -0.289
                },
                "44": {
                    x: 0.01,
                    y: 44.437,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 44.4,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Pufferfish = makeObj("Container", 'Body_Pufferfish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Puffer_Fish.png"]))
            .setTransform(-65, -61, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_PufferFish = makeObj("Container", 'Tail_PufferFish', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Puffer_Fish 1.png"]))
            .setTransform(-18, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Pufferfish = makeObj("MovieClip", 'Animated_Pufferfish',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_PufferFish();
        var instance1 = new lib.Body_Pufferfish();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 44.4,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.003,
                    y: 44.449,
                    r: -0.395
                },
                "4": {
                    x: -0.025,
                    y: 44.447,
                    r: -0.387
                },
                "5": {
                    x: -0.036,
                    y: 44.426,
                    r: -0.364
                },
                "6": {
                    x: -0.002,
                    y: 44.419,
                    r: -0.32
                },
                "7": {
                    x: -0.027,
                    y: 44.452,
                    r: -0.247
                },
                "8": {
                    x: -0.017,
                    y: 44.419,
                    r: -0.138
                },
                "9": {
                    y: 44.404,
                    r: 0.003
                },
                "10": {
                    y: 44.432,
                    r: 0.112
                },
                "11": {
                    x: -0.042,
                    y: 44.449,
                    r: 0.185
                },
                "12": {
                    x: -0.012,
                    y: 44.431,
                    r: 0.229
                },
                "13": {
                    x: -0.025,
                    y: 44.429,
                    r: 0.252
                },
                "14": {
                    x: -0.021,
                    y: 44.453,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 44.4,
                    r: 0.262
                },
                "16": {
                    x: 0.035,
                    y: 44.399,
                    r: 0.261
                },
                "17": {
                    x: 0.027,
                    y: 44.398,
                    r: 0.256
                },
                "18": {
                    x: 0.036,
                    y: 44.389,
                    r: 0.241
                },
                "19": {
                    x: 0.017,
                    y: 44.394,
                    r: 0.212
                },
                "20": {
                    x: 0.024,
                    y: 44.388,
                    r: 0.164
                },
                "21": {
                    x: -0.002,
                    y: 44.42,
                    r: 0.093
                },
                "22": {
                    x: 0.04,
                    y: 44.419,
                    r: -0.006
                },
                "23": {
                    x: 0.009,
                    y: 44.403,
                    r: -0.129
                },
                "24": {
                    x: 0.038,
                    y: 44.429,
                    r: -0.228
                },
                "25": {
                    x: 0.014,
                    y: 44.398,
                    r: -0.299
                },
                "26": {
                    x: 0.026,
                    y: 44.433,
                    r: -0.347
                },
                "27": {
                    x: 0.017,
                    y: 44.435,
                    r: -0.375
                },
                "28": {
                    x: -0.006,
                    y: 44.439,
                    r: -0.39
                },
                "29": {
                    x: 0.036,
                    y: 44.441,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 44.4,
                    r: -0.397
                },
                "32": {
                    x: -0.042,
                    y: 44.433,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 44.443,
                    r: -0.289
                },
                "34": {
                    x: -0.033,
                    y: 44.407,
                    r: -0.155
                },
                "35": {
                    x: -0.012,
                    y: 44.453,
                    r: 0.02
                },
                "36": {
                    x: -0.039,
                    y: 44.432,
                    r: 0.154
                },
                "37": {
                    x: -0.01,
                    y: 44.438,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 44.4,
                    r: 0.262
                },
                "39": {
                    x: 0.042,
                    y: 44.433,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 44.393,
                    r: 0.154
                },
                "41": {
                    x: 0.033,
                    y: 44.407,
                    r: 0.02
                },
                "42": {
                    x: 0.012,
                    y: 44.404,
                    r: -0.155
                },
                "43": {
                    x: -0.011,
                    y: 44.431,
                    r: -0.289
                },
                "44": {
                    x: 0.01,
                    y: 44.437,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 44.4,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 64, loop: false });
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Blue_Ray 0.png"]))
            .setTransform(-114, -47, 0.5, 0.5);
        this.addTimedChild(instance1);
    });

    lib.Body_BlueRay = makeObj("Container", 'Body_BlueRay', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Blue_Ray.png"]))
            .setTransform(-75, -60, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_BlueRay = makeObj("MovieClip", 'Animated_BlueRay',{
            duration: 65,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 48,
                dead: 63
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Body_BlueRay();
        var instance1 = new Graphic2(MovieClip.SYNCHED);
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2)
            .addTimedChild(instance1, 0, 64, {
                "0": {
                    x: 2,
                    y: 18.25,
                    r: 0
                },
                "2": {
                    x: 2.047,
                    y: 18.3
                },
                "3": {
                    x: 2.039,
                    y: 18.251,
                    r: 0.001
                },
                "4": {
                    x: 2.025,
                    y: 18.302
                },
                "5": {
                    x: 1.953,
                    y: 18.355,
                    r: 0.003
                },
                "6": {
                    x: 1.973,
                    y: 18.408,
                    r: 0.004
                },
                "7": {
                    x: 1.933,
                    y: 18.512,
                    r: 0.006
                },
                "8": {
                    y: 18.617,
                    r: 0.009
                },
                "9": {
                    x: 1.869,
                    y: 18.724,
                    r: 0.013
                },
                "10": {
                    x: 1.84,
                    y: 18.931,
                    r: 0.017
                },
                "11": {
                    x: 1.743,
                    y: 19.14,
                    r: 0.022
                },
                "12": {
                    x: 1.675,
                    y: 19.4,
                    r: 0.029
                },
                "13": {
                    x: 1.531,
                    y: 19.611,
                    r: 0.037
                },
                "14": {
                    x: 1.41,
                    y: 19.972,
                    r: 0.046
                },
                "15": {
                    x: 1.262,
                    y: 20.434,
                    r: 0.057
                },
                "16": {
                    x: 1.145,
                    y: 20.844,
                    r: 0.069
                },
                "17": {
                    x: 0.974,
                    y: 21.252,
                    r: 0.081
                },
                "18": {
                    x: 0.818,
                    y: 21.706,
                    r: 0.092
                },
                "19": {
                    x: 0.739,
                    y: 22.058,
                    r: 0.102
                },
                "20": {
                    x: 0.539,
                    y: 22.359,
                    r: 0.11
                },
                "21": {
                    x: 0.468,
                    y: 22.609,
                    r: 0.116
                },
                "22": {
                    x: 0.373,
                    y: 22.808,
                    r: 0.122
                },
                "23": {
                    x: 0.348,
                    y: 22.957,
                    r: 0.126
                },
                "24": {
                    x: 0.34,
                    y: 23.106,
                    r: 0.129
                },
                "25": {
                    x: 0.298,
                    y: 23.155,
                    r: 0.131
                },
                "26": {
                    x: 0.217,
                    y: 23.254,
                    r: 0.133
                },
                "27": {
                    x: 0.247,
                    y: 23.253,
                    r: 0.134
                },
                "28": {
                    x: 0.236,
                    y: 23.303
                },
                "29": {
                    x: 0.25,
                    y: 23.25,
                    r: 0.135
                },
                "30": {
                    x: 0.26,
                    y: 23.3,
                    r: 0.134
                },
                "31": {
                    x: 0.24,
                    y: 23.249,
                    r: 0.133
                },
                "32": {
                    x: 0.298,
                    y: 23.149,
                    r: 0.13
                },
                "33": {
                    x: 0.342,
                    y: 22.997,
                    r: 0.126
                },
                "34": {
                    x: 0.432,
                    y: 22.744,
                    r: 0.12
                },
                "35": {
                    x: 0.539,
                    y: 22.438,
                    r: 0.111
                },
                "36": {
                    x: 0.687,
                    y: 21.926,
                    r: 0.099
                },
                "37": {
                    x: 0.95,
                    y: 21.302,
                    r: 0.081
                },
                "38": {
                    x: 1.242,
                    y: 20.466,
                    r: 0.06
                },
                "39": {
                    x: 1.492,
                    y: 19.722,
                    r: 0.04
                },
                "40": {
                    x: 1.626,
                    y: 19.185,
                    r: 0.026
                },
                "41": {
                    x: 1.807,
                    y: 18.806,
                    r: 0.016
                },
                "42": {
                    x: 1.911,
                    y: 18.585,
                    r: 0.009
                },
                "43": {
                    x: 1.963,
                    y: 18.371,
                    r: 0.005
                },
                "44": {
                    x: 1.976,
                    y: 18.262,
                    r: 0.002
                },
                "45": {
                    x: 2.009,
                    y: 18.207,
                    r: 0
                },
                "46": {
                    x: 2,
                    y: 18.25
                },
                "47": {
                    y: 18.3
                },
                "48": {
                    y: 18.5
                },
                "49": {
                    y: 18.9
                },
                "50": {
                    y: 19.5
                },
                "51": {
                    y: 19.95
                },
                "52": {
                    y: 20.2
                },
                "53": {
                    y: 20.25
                },
                "54": {
                    y: 20.2
                },
                "55": {
                    y: 20.1
                },
                "56": {
                    y: 19.9
                },
                "57": {
                    y: 19.4
                },
                "58": {
                    y: 18.75
                },
                "59": {
                    y: 18.45
                },
                "60": {
                    y: 18.3
                },
                "61": {
                    y: 18.25
                }
            })
            .addTimedChild(instance3, 64, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 46)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 61)
            .addAction(function () {
                this.stop();
            }, 64);
    });

    lib.Body_MantraRay = makeObj("Container", 'Body_MantraRay', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Mantra_Ray.png"]))
            .setTransform(-69, -50, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_MantraRay = makeObj("MovieClip", 'Animated_MantraRay',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Body_MantraRay();
        var instance1 = new lib.Body_MantraRay();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2)
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_MantaRay = makeObj("Container", 'Body_MantaRay', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Manta_Ray.png"]))
            .setTransform(-68, -66, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_MantaRay = makeObj("MovieClip", 'Animated_MantaRay',{
            duration: 10,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 5,
                dead: 8
            }
        }, function(){
		this.stop()
        var instance1 = new lib.Body_MantaRay();
        var instance2 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance1)
            .addTimedChild(instance2, 9, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 3)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 6)
            .addAction(function () {
                this.stop();
            }, 9);
    });

    lib.Body_Jomama = makeObj("Container", 'Body_Jomama', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Jomama_.png"]))
            .setTransform(-63, -49, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Jomama = makeObj("Container", 'Tail_Jomama', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Jomama_ 1.png"]))
            .setTransform(-33, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Jomama = makeObj("MovieClip", 'Animated_Jomama',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Jomama();
        var instance1 = new lib.Body_Jomama();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-48, -36, 1.134, 1.134);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    x: 3.2,
                    r: -0.397
                },
                "3": {
                    x: 3.24,
                    y: 50.053,
                    r: -0.395
                },
                "4": {
                    x: 3.121,
                    y: 50.027,
                    r: -0.387
                },
                "5": {
                    x: 2.931,
                    r: -0.364
                },
                "6": {
                    x: 2.409,
                    y: 50.047,
                    r: -0.32
                },
                "7": {
                    x: 1.701,
                    y: 50.017,
                    r: -0.247
                },
                "8": {
                    x: 0.643,
                    y: 50.051,
                    r: -0.138
                },
                "9": {
                    x: -0.746,
                    y: 50.008,
                    r: 0.003
                },
                "10": {
                    x: -1.798,
                    y: 50.031,
                    r: 0.112
                },
                "11": {
                    x: -2.494,
                    y: 50.036,
                    r: 0.185
                },
                "12": {
                    x: -2.95,
                    y: 50.044,
                    r: 0.229
                },
                "13": {
                    x: -3.159,
                    y: 50.025,
                    r: 0.252
                },
                "14": {
                    x: -3.258,
                    y: 50.041,
                    r: 0.261
                },
                "15": {
                    x: -3.2,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: -3.211,
                    y: 50.002,
                    r: 0.261
                },
                "17": {
                    x: -3.188,
                    y: 50.018,
                    r: 0.256
                },
                "18": {
                    x: -2.996,
                    y: 50.005,
                    r: 0.241
                },
                "19": {
                    x: -2.7,
                    y: 49.996,
                    r: 0.212
                },
                "20": {
                    x: -2.216,
                    y: 50.023,
                    r: 0.164
                },
                "21": {
                    x: -1.518,
                    y: 49.977,
                    r: 0.093
                },
                "22": {
                    x: -0.565,
                    y: 50.015,
                    r: -0.006
                },
                "23": {
                    x: 0.633,
                    y: 50,
                    r: -0.129
                },
                "24": {
                    x: 1.549,
                    y: 49.975,
                    r: -0.228
                },
                "25": {
                    x: 2.282,
                    y: 49.992,
                    r: -0.299
                },
                "26": {
                    x: 2.701,
                    y: 50.007,
                    r: -0.347
                },
                "27": {
                    x: 3.027,
                    y: 49.99,
                    r: -0.375
                },
                "28": {
                    x: 3.149,
                    y: 49.982,
                    r: -0.39
                },
                "29": {
                    x: 3.225,
                    y: 49.979,
                    r: -0.396
                },
                "30": {
                    x: 3.2,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: 2.956,
                    y: 50.017,
                    r: -0.37
                },
                "33": {
                    x: 2.118,
                    y: 50.053,
                    r: -0.289
                },
                "34": {
                    x: 0.833,
                    y: 50.011,
                    r: -0.155
                },
                "35": {
                    x: -0.901,
                    y: 50.019,
                    r: 0.02
                },
                "36": {
                    x: -2.193,
                    y: 50.028,
                    r: 0.154
                },
                "37": {
                    x: -2.983,
                    y: 50.047,
                    r: 0.235
                },
                "38": {
                    x: -3.2,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -2.956,
                    y: 50.017,
                    r: 0.235
                },
                "40": {
                    x: -2.118,
                    y: 50.004,
                    r: 0.154
                },
                "41": {
                    x: -0.833,
                    y: 50.01,
                    r: 0.02
                },
                "42": {
                    x: 0.851,
                    y: 50.02,
                    r: -0.155
                },
                "43": {
                    x: 2.144,
                    y: 49.977,
                    r: -0.289
                },
                "44": {
                    x: 2.983,
                    y: 49.996,
                    r: -0.37
                },
                "45": {
                    x: 3.2,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1, 0, 48, {
                "0": {
                    x: -24.05,
                    y: -25
                }
            })
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_WhaleBlue = makeObj("Container", 'Body_WhaleBlue', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Blue_Whale.png"]))
            .setTransform(-65, -92, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_WhaleBlue = makeObj("Container", 'Tail_WhaleBlue', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Blue_Whale 1.png"]))
            .setTransform(-27, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_BlueWhale = makeObj("MovieClip", 'Animated_BlueWhale',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_WhaleBlue();
        var instance1 = new lib.Body_WhaleBlue();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-48, -34, 1.134, 1.134);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Whale = makeObj("Container", 'Body_Whale', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Humpback_Whale.png"]))
            .setTransform(-72, -49, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Whale = makeObj("Container", 'Tail_Whale', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Humpback_Whale_ 1.png"]))
            .setTransform(-27, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_HumpbackWhale = makeObj("MovieClip", 'Animated_HumpbackWhale',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Whale();
        var instance1 = new lib.Body_Whale();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-48, -34, 1.134, 1.134);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Hammered = makeObj("Container", 'Body_Hammered', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Hammered.png"]))
            .setTransform(-94, -117, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Hammered = makeObj("Container", 'Tail_Hammered', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Hammered 1.png"]))
            .setTransform(-28, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_WhammyHead = makeObj("MovieClip", 'Animated_WhammyHead',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Hammered();
        var instance1 = new lib.Body_Hammered();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -41);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_HammeredHead = makeObj("Container", 'Body_HammeredHead', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Hammeredhead.png"]))
            .setTransform(-70, -75, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_HammeredHead = makeObj("Container", 'Tail_HammeredHead', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/HammeredheadT.png"]))
            .setTransform(-28, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_HammeredHead = makeObj("MovieClip", 'Animated_HammeredHead',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_HammeredHead();
        var instance1 = new lib.Body_HammeredHead();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -41);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_HammerHead = makeObj("Container", 'Body_HammerHead', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Hammerhead.png"]))
            .setTransform(-70, -67, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_HammerHead = makeObj("Container", 'Tail_HammerHead', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/HammerheadT.png"]))
            .setTransform(-28, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_HammerHead = makeObj("MovieClip", 'Animated_HammerHead',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_HammerHead();
        var instance1 = new lib.Body_HammerHead();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -41);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_KillerWhale_Psycho = makeObj("Container", 'Body_KillerWhale_Psycho', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Psycho_Killer_Whale.png"]))
            .setTransform(-85, -65, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_KillerWhale_Psycho = makeObj("Container", 'Tail_KillerWhale_Psycho', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Psycho_Killer_WhaleT.png"]))
            .setTransform(-27, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_PsychoKillerWhale = makeObj("MovieClip", 'Animated_PsychoKillerWhale',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_KillerWhale_Psycho();
        var instance1 = new lib.Body_KillerWhale_Psycho();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_KillerWhale_Serial = makeObj("Container", 'Body_KillerWhale_Serial', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Serial_Killer_Whale.png"]))
            .setTransform(-61, -92, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_KillerWhale = makeObj("Container", 'Tail_KillerWhale', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Killer_WhaleT.png"]))
            .setTransform(-27, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_SerialKillerWhale = makeObj("MovieClip", 'Animated_SerialKillerWhale',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_KillerWhale();
        var instance1 = new lib.Body_KillerWhale_Serial();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_KillerWhale = makeObj("Container", 'Body_KillerWhale', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Killer_Whale.png"]))
            .setTransform(-70, -49, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_KillerWhale = makeObj("MovieClip", 'Animated_KillerWhale',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_KillerWhale();
        var instance1 = new lib.Body_KillerWhale();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1, 0, 48, {
                "0": {
                    y: -19.6
                }
            })
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Megalodon = makeObj("Container", 'Body_Megalodon', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Megalodon.png"]))
            .setTransform(-70, -49, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Megalodon = makeObj("Container", 'Tail_Megalodon', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Megalodon 1.png"]))
            .setTransform(-28, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_Megalodon = makeObj("MovieClip", 'Animated_Megalodon',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Megalodon();
        var instance1 = new lib.Body_Megalodon();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_GreatWhiteShark = makeObj("Container", 'Body_GreatWhiteShark', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/GreatWhiteShark.png"]))
            .setTransform(-70, -69, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_GreatWhiteShark = makeObj("Container", 'Tail_GreatWhiteShark', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/GreatWhiteSharkT.png"]))
            .setTransform(-34, 0, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_GreatWhiteShark = makeObj("MovieClip", 'Animated_GreatWhiteShark',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_GreatWhiteShark();
        var instance1 = new lib.Body_GreatWhiteShark();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.Body_Shark = makeObj("Container", 'Body_Shark', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/Shark.png"]))
            .setTransform(-70, -50, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Tail_Shark = makeObj("Container", 'Tail_Shark', undefined, function(){
        var instance1 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/SharkT.png"]))
            .setTransform(-28, -1, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.Animated_BlueShark = makeObj("MovieClip", 'Animated_BlueShark',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_Shark();
        var instance1 = new lib.Body_Shark();
        var instance3 = new Sprite(fromFrame(lib.skin1.assets["images/skin1/DeadEyeStoneBig.png"]))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    x: 0,
                    y: 50,
                    r: 0
                },
                "2": {
                    r: -0.397
                },
                "3": {
                    x: -0.01,
                    y: 50.049,
                    r: -0.395
                },
                "4": {
                    x: -0.029,
                    y: 50.046,
                    r: -0.387
                },
                "5": {
                    x: -0.017,
                    y: 50.023,
                    r: -0.364
                },
                "6": {
                    x: -0.031,
                    y: 50.052,
                    r: -0.32
                },
                "7": {
                    x: -0.013,
                    y: 50.039,
                    r: -0.247
                },
                "8": {
                    x: -0.051,
                    y: 50.032,
                    r: -0.138
                },
                "9": {
                    x: -0.044,
                    y: 50.063,
                    r: 0.003
                },
                "10": {
                    x: -0.043,
                    y: 50.023,
                    r: 0.112
                },
                "11": {
                    x: -0.018,
                    y: 50.028,
                    r: 0.185
                },
                "12": {
                    x: -0.043,
                    y: 50.019,
                    r: 0.229
                },
                "13": {
                    x: -0.059,
                    y: 50.041,
                    r: 0.252
                },
                "14": {
                    x: -0.041,
                    y: 50.037,
                    r: 0.261
                },
                "15": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "16": {
                    x: 0.039,
                    y: 49.999,
                    r: 0.261
                },
                "17": {
                    x: 0.012,
                    y: 49.998,
                    r: 0.256
                },
                "18": {
                    x: 0.004,
                    y: 50.038,
                    r: 0.241
                },
                "19": {
                    x: -0.004,
                    y: 50.037,
                    r: 0.212
                },
                "20": {
                    x: 0.019,
                    y: 50.011,
                    r: 0.164
                },
                "21": {
                    x: 0.037,
                    y: 50.04,
                    r: 0.093
                },
                "22": {
                    x: 0.021,
                    y: 50.019,
                    r: -0.006
                },
                "23": {
                    x: -0.008,
                    y: 50.031,
                    r: -0.129
                },
                "24": {
                    x: 0.022,
                    y: 50.02,
                    r: -0.228
                },
                "25": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.299
                },
                "26": {
                    x: 0.027,
                    y: 50.028,
                    r: -0.347
                },
                "27": {
                    x: -0.001,
                    y: 50.036,
                    r: -0.375
                },
                "28": {
                    x: -0.008,
                    y: 50.04,
                    r: -0.39
                },
                "29": {
                    x: 0.008,
                    y: 50.023,
                    r: -0.396
                },
                "30": {
                    x: 0,
                    y: 50,
                    r: -0.397
                },
                "32": {
                    x: -0.043,
                    y: 50.031,
                    r: -0.37
                },
                "33": {
                    x: -0.013,
                    y: 50.06,
                    r: -0.289
                },
                "34": {
                    x: -0.024,
                    y: 50.044,
                    r: -0.155
                },
                "35": {
                    x: -0.027,
                    y: 50.024,
                    r: 0.02
                },
                "36": {
                    x: -0.02,
                    y: 50.053,
                    r: 0.154
                },
                "37": {
                    x: -0.066,
                    y: 50.058,
                    r: 0.235
                },
                "38": {
                    x: 0,
                    y: 50,
                    r: 0.262
                },
                "39": {
                    x: -0.007,
                    y: 50.031,
                    r: 0.235
                },
                "40": {
                    x: 0.013,
                    y: 50.011,
                    r: 0.154
                },
                "41": {
                    x: 0.024,
                    y: 50.044,
                    r: 0.02
                },
                "42": {
                    x: 0.028,
                    y: 50.025,
                    r: -0.155
                },
                "43": {
                    x: 0.02,
                    y: 50.003,
                    r: -0.289
                },
                "44": {
                    x: 0.016,
                    y: 50.007,
                    r: -0.37
                },
                "45": {
                    x: 0,
                    y: 50,
                    r: -0.397
                }
            })
            .addTimedChild(instance1)
            .addTimedChild(instance3, 47, 1)
            .addAction(function () {
                this.stop()
            }, 1)
            .addAction(function () {
                this.gotoAndPlay('move');
            }, 29)
            .addAction(function () {
                this.gotoAndPlay('skill1');
            }, 44)
            .addAction(function () {
                this.stop();
            }, 47);
    });

    lib.skin1 = makeObj("MovieClip", 'skin1',{
            duration: 1,
            framerate: 60
        }, function(){
		this.stop()
        var instance61 = new lib.Animated_BlueShark()
            .setTransform(172.25, 144.65);
        this[instance61.name = "body"] = instance61;
        var instance60 = new lib.Animated_GreatWhiteShark()
            .setTransform(351.6, 130.85);
        this[instance60.name = "body"] = instance60;
        var instance59 = new lib.Animated_Megalodon()
            .setTransform(569.3, 119.85);
        this[instance59.name = "body"] = instance59;
        var instance58 = new lib.Animated_KillerWhale()
            .setTransform(816.7, 135.85);
        this[instance58.name = "body"] = instance58;
        var instance57 = new lib.Animated_SerialKillerWhale()
            .setTransform(986, 143.65);
        this[instance57.name = "body"] = instance57;
        var instance56 = new lib.Animated_PsychoKillerWhale()
            .setTransform(1184.45, 135.85);
        this[instance56.name = "body"] = instance56;
        var instance55 = new lib.Animated_HammerHead()
            .setTransform(1390.3, 126.65);
        this[instance55.name = "body"] = instance55;
        var instance54 = new lib.Animated_HammeredHead()
            .setTransform(1608.6, 126.65);
        this[instance54.name = "body"] = instance54;
        var instance53 = new lib.Animated_WhammyHead()
            .setTransform(1843.85, 135.85);
        this[instance53.name = "body"] = instance53;
        var instance52 = new lib.Animated_HumpbackWhale()
            .setTransform(208.6, 372.05);
        this[instance52.name = "body"] = instance52;
        var instance51 = new lib.Animated_BlueWhale()
            .setTransform(416.6, 360.45);
        this[instance51.name = "body"] = instance51;
        var instance50 = new lib.Animated_Jomama()
            .setTransform(624.9, 370.55);
        this[instance50.name = "body"] = instance50;
        var instance49 = new lib.Animated_MantaRay()
            .setTransform(833.7, 372.05);
        this[instance49.name = "body"] = instance49;
        var instance48 = new lib.Animated_MantraRay()
            .setTransform(1003.5, 362.05);
        this[instance48.name = "body"] = instance48;
        var instance47 = new lib.Animated_BlueRay()
            .setTransform(1197.45, 367.05);
        this[instance47.name = "body"] = instance47;
        var instance46 = new lib.Animated_Pufferfish()
            .setTransform(1395.3, 374.05);
        this[instance46.name = "body"] = instance46;
        var instance45 = new lib.Animated_PorcupineFish()
            .setTransform(1601.15, 354.45);
        this[instance45.name = "body"] = instance45;
        var instance44 = new lib.Animated_Onifugu()
            .setTransform(1851.15, 354.45);
        this[instance44.name = "body"] = instance44;
        var instance43 = new lib.Animated_BottlenoseDolphin()
            .setTransform(188.95, 548.25);
        this[instance43.name = "body"] = instance43;
        var instance42 = new lib.Animated_CommonDolphin()
            .setTransform(398.45, 564.75);
        this[instance42.name = "body"] = instance42;
        var instance41 = new lib.Animated_SpinnerDolphin()
            .setTransform(583.2, 572.75);
        this[instance41.name = "body"] = instance41;
        var instance40 = new lib.Animated_Goldfish()
            .setTransform(807.05, 555.25);
        this[instance40.name = "body"] = instance40;
        var instance39 = new lib.Animated_Goldenfish()
            .setTransform(991.85, 558.75);
        this[instance39.name = "body"] = instance39;
        var instance38 = new lib.Animated_Diamondfish()
            .setTransform(1174.65, 545.75);
        this[instance38.name = "body"] = instance38;
        var instance37 = new lib.Animated_Narwhal()
            .setTransform(1419.25, 549.25);
        this[instance37.name = "body"] = instance37;
        var instance36 = new lib.Animated_Beluga()
            .setTransform(1608.45, 562.25);
        this[instance36.name = "body"] = instance36;
        var instance35 = new lib.Animated_ArchBeluga()
            .setTransform(1846.2, 575.3);
        this[instance35.name = "body"] = instance35;
        var instance34 = new lib.Animated_DumboOctopus()
            .setTransform(143.6, 775.35);
        this[instance34.name = "body"] = instance34;
        var instance33 = new lib.Animated_Tako()
            .setTransform(394.1, 778);
        this[instance33.name = "body"] = instance33;
        var instance32 = new lib.Animated_Kraken()
            .setTransform(593.85, 787.6);
        this[instance32.name = "body"] = instance32;
        var instance31 = new lib.Animated_MorayEel()
            .setTransform(799.7, 789.35);
        this[instance31.name = "body"] = instance31;
        var instance30 = new lib.Animated_GulperEel()
            .setTransform(1010.5, 793.6);
        this[instance30.name = "body"] = instance30;
        var instance29 = new lib.Animated_ElectricEel()
            .setTransform(1211.45, 781.35);
        this[instance29.name = "body"] = instance29;
        var instance28 = new lib.Animated_GreenSeaTurtle()
            .setTransform(1444.25, 800.6);
        this[instance28.name = "body"] = instance28;
        var instance27 = new lib.Animated_LeatherbackTurtle()
            .setTransform(1647.7, 796);
        this[instance27.name = "body"] = instance27;
        var instance26 = new lib.Animated_AlligatorSnappingTurtle()
            .setTransform(1843.75, 793.6);
        this[instance26.name = "body"] = instance26;
        var instance25 = new lib.Animated_StingRay()
            .setTransform(140.15, 956.8);
        this[instance25.name = "body"] = instance25;
        var instance24 = new lib.Animated_BatRay()
            .setTransform(360.7, 951.2);
        this[instance24.name = "body"] = instance24;
        var instance23 = new lib.Animated_ElectricRay()
            .setTransform(580.85, 950.2);
        this[instance23.name = "body"] = instance23;
        var instance22 = new lib.Animated_SakuraShrimp()
            .setTransform(804.05, 977.8);
        this[instance22.name = "body"] = instance22;
        var instance21 = new lib.Animated_PistolShrimp()
            .setTransform(992.65, 990.2);
        this[instance21.name = "body"] = instance21;
        var instance20 = new lib.Animated_MantisShrimp()
            .setTransform(1213.45, 1002.2);
        this[instance20.name = "body"] = instance20;
        var instance19 = new lib.Animated_FirebellyNewt()
            .setTransform(1446.1, 996.6);
        this[instance19.name = "body"] = instance19;
        var instance18 = new lib.Animated_FireSalamander()
            .setTransform(1646.75, 997.4);
        this[instance18.name = "body"] = instance18;
        var instance17 = new lib.Animated_Axolotl()
            .setTransform(1849.25, 989.9);
        this[instance17.name = "body"] = instance17;
        var instance16 = new lib.Animated_VampireSquid()
            .setTransform(151.5, 1178.8);
        this[instance16.name = "body"] = instance16;
        var instance15 = new lib.Animated_Cuttlefish()
            .setTransform(353.5, 1171.3);
        this[instance15.name = "body"] = instance15;
        var instance14 = new lib.Animated_ColossalSquid()
            .setTransform(568.5, 1166.05);
        this[instance14.name = "body"] = instance14;
        var instance13 = new lib.Animated_Swordfish()
            .setTransform(803.85, 1185.5);
        this[instance13.name = "body"] = instance13;
        var instance12 = new lib.Animated_Marlin()
            .setTransform(994.5, 1200);
        this[instance12.name = "body"] = instance12;
        var instance11 = new lib.Animated_Sailfish()
            .setTransform(1212.45, 1209.8);
        this[instance11.name = "body"] = instance11;
        var instance10 = new lib.Animated_BlueCrab()
            .setTransform(1437.9, 1220);
        this[instance10.name = "body"] = instance10;
        var instance9 = new lib.Animated_KingCrab()
            .setTransform(1632.7, 1214);
        this[instance9.name = "body"] = instance9;
        var instance8 = new lib.Animated_SpiderCrab()
            .setTransform(1831.65, 1205.4);
        this[instance8.name = "body"] = instance8;
        var instance7 = new lib.Animated_SpiderCrabSf1()
            .setTransform(1998.55, 1205.4);
        this[instance7.name = "body"] = instance7;
        var instance6 = new lib.Animated_Crocodile()
            .setTransform(131.15, 1478.2);
        this[instance6.name = "body"] = instance6;
        var instance5 = new lib.Animated_Kronosaurus()
            .setTransform(346, 1472.5);
        this[instance5.name = "body"] = instance5;
        var instance4 = new lib.Animated_Mosasaurus()
            .setTransform(551.1, 1468.25);
        this[instance4.name = "body"] = instance4;
        var instance3 = new lib.Animated_Koi()
            .setTransform(816.7, 1471.5);
        this[instance3.name = "body"] = instance3;
        var instance2 = new lib.Animated_Oarfish()
            .setTransform(996.65, 1476.95);
        this[instance2.name = "body"] = instance2;
        var instance1 = new lib.Animated_Dragon()
            .setTransform(1237.8, 1458.95);
        this[instance1.name = "body"] = instance1;
        this.addChild(instance61, instance60, instance59, instance58, instance57, instance56, instance55, instance54, instance53, instance52, instance51, instance50, instance49, instance48, instance47, instance46, instance45, instance44, instance43, instance42, instance41, instance40, instance39, instance38, instance37, instance36, instance35, instance34, instance33, instance32, instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.skin1.assets = {
        "images/skin1/DeadEyeStoneBig.png": "images/skin1/DeadEyeStoneBig.png",
        "images/skin1/Dragon.png": "images/skin1/Dragon.png",
        "images/skin1/Dragon 1.png": "images/skin1/Dragon 1.png",
        "images/skin1/Oarfish.png": "images/skin1/Oarfish.png",
        "images/skin1/Oarfish 1.png": "images/skin1/Oarfish 1.png",
        "images/skin1/Koi.png": "images/skin1/Koi.png",
        "images/skin1/Koi 1.png": "images/skin1/Koi 1.png",
        "images/skin1/Mosasaurus.png": "images/skin1/Mosasaurus.png",
        "images/skin1/Mosasaurus 1.png": "images/skin1/Mosasaurus 1.png",
        "images/skin1/Kronosaurus.png": "images/skin1/Kronosaurus.png",
        "images/skin1/Kronosaurus 1.png": "images/skin1/Kronosaurus 1.png",
        "images/skin1/Crocodile.png": "images/skin1/Crocodile.png",
        "images/skin1/Crocodile 1.png": "images/skin1/Crocodile 1.png",
        "images/skin1/Spider_Crab_skin 2.png": "images/skin1/Spider_Crab_skin 2.png",
        "images/skin1/Spider_Crab_skin 1.png": "images/skin1/Spider_Crab_skin 1.png",
        "images/skin1/Spider_Crab_skin.png": "images/skin1/Spider_Crab_skin.png",
        "images/skin1/King_Crab.png": "images/skin1/King_Crab.png",
        "images/skin1/Blue_Crab.png": "images/skin1/Blue_Crab.png",
        "images/skin1/Sailfish.png": "images/skin1/Sailfish.png",
        "images/skin1/Sailfish 1.png": "images/skin1/Sailfish 1.png",
        "images/skin1/Sailfish 2.png": "images/skin1/Sailfish 2.png",
        "images/skin1/Marlin.png": "images/skin1/Marlin.png",
        "images/skin1/Marlin 1.png": "images/skin1/Marlin 1.png",
        "images/skin1/Swordfish_.png": "images/skin1/Swordfish_.png",
        "images/skin1/Swordfish_ 1.png": "images/skin1/Swordfish_ 1.png",
        "images/skin1/Colossal_Squid.png": "images/skin1/Colossal_Squid.png",
        "images/skin1/Colossal_Squid 1.png": "images/skin1/Colossal_Squid 1.png",
        "images/skin1/ColossalSquidTentacles.png": "images/skin1/ColossalSquidTentacles.png",
        "images/skin1/Cuttlefish.png": "images/skin1/Cuttlefish.png",
        "images/skin1/Cuttlefish 1.png": "images/skin1/Cuttlefish 1.png",
        "images/skin1/Cuttlefish 3.png": "images/skin1/Cuttlefish 3.png",
        "images/skin1/Cuttlefish 2.png": "images/skin1/Cuttlefish 2.png",
        "images/skin1/Vampire_Squid.png": "images/skin1/Vampire_Squid.png",
        "images/skin1/Vampire_Squid 1.png": "images/skin1/Vampire_Squid 1.png",
        "images/skin1/Axolotl.png": "images/skin1/Axolotl.png",
        "images/skin1/AxolotlTail.png": "images/skin1/AxolotlTail.png",
        "images/skin1/Fire_Salamander.png": "images/skin1/Fire_Salamander.png",
        "images/skin1/Fire_Salamander 1.png": "images/skin1/Fire_Salamander 1.png",
        "images/skin1/Firebelly_Newt.png": "images/skin1/Firebelly_Newt.png",
        "images/skin1/Firebelly_Newt 1.png": "images/skin1/Firebelly_Newt 1.png",
        "images/skin1/Mantis_Shrimp 2.png": "images/skin1/Mantis_Shrimp 2.png",
        "images/skin1/DeadEyeStoneSmall.png": "images/skin1/DeadEyeStoneSmall.png",
        "images/skin1/Mantis_Shrimp.png": "images/skin1/Mantis_Shrimp.png",
        "images/skin1/Mantis_Shrimp 1.png": "images/skin1/Mantis_Shrimp 1.png",
        "images/skin1/Pistol_Shrimp.png": "images/skin1/Pistol_Shrimp.png",
        "images/skin1/Pistol_Shrimp 1.png": "images/skin1/Pistol_Shrimp 1.png",
        "images/skin1/Sakura_Shrimp.png": "images/skin1/Sakura_Shrimp.png",
        "images/skin1/Sakura_Shrimp 1.png": "images/skin1/Sakura_Shrimp 1.png",
        "images/skin1/Electric_Ray.png": "images/skin1/Electric_Ray.png",
        "images/skin1/Electric_Ray 1.png": "images/skin1/Electric_Ray 1.png",
        "images/skin1/Bat_Ray.png": "images/skin1/Bat_Ray.png",
        "images/skin1/Bat_Ray 1.png": "images/skin1/Bat_Ray 1.png",
        "images/skin1/Stingray.png": "images/skin1/Stingray.png",
        "images/skin1/Stingray 1.png": "images/skin1/Stingray 1.png",
        "images/skin1/Snapping_Turtle 2.png": "images/skin1/Snapping_Turtle 2.png",
        "images/skin1/Snapping_Turtle 1.png": "images/skin1/Snapping_Turtle 1.png",
        "images/skin1/Snapping_Turtle.png": "images/skin1/Snapping_Turtle.png",
        "images/skin1/Leatherback_Turtle 1.png": "images/skin1/Leatherback_Turtle 1.png",
        "images/skin1/Leatherback_Turtle 2.png": "images/skin1/Leatherback_Turtle 2.png",
        "images/skin1/Leatherback_Turtle.png": "images/skin1/Leatherback_Turtle.png",
        "images/skin1/Sea_Turtle 1.png": "images/skin1/Sea_Turtle 1.png",
        "images/skin1/Sea_Turtle.png": "images/skin1/Sea_Turtle.png",
        "images/skin1/Electric_Eel.png": "images/skin1/Electric_Eel.png",
        "images/skin1/Electric_Eel 1.png": "images/skin1/Electric_Eel 1.png",
        "images/skin1/Gulper_Eel.png": "images/skin1/Gulper_Eel.png",
        "images/skin1/Gulper_Eel 1.png": "images/skin1/Gulper_Eel 1.png",
        "images/skin1/Moray_Eel.png": "images/skin1/Moray_Eel.png",
        "images/skin1/Moray_Eel 1.png": "images/skin1/Moray_Eel 1.png",
        "images/skin1/Kraken.png": "images/skin1/Kraken.png",
        "images/skin1/Kraken 2.png": "images/skin1/Kraken 2.png",
        "images/skin1/Kraken 1.png": "images/skin1/Kraken 1.png",
        "images/skin1/Tako 1.png": "images/skin1/Tako 1.png",
        "images/skin1/Tako.png": "images/skin1/Tako.png",
        "images/skin1/Tako 2.png": "images/skin1/Tako 2.png",
        "images/skin1/Tako 3.png": "images/skin1/Tako 3.png",
        "images/skin1/Dumbo_Octopus.png": "images/skin1/Dumbo_Octopus.png",
        "images/skin1/Dumbo_Octopus 1.png": "images/skin1/Dumbo_Octopus 1.png",
        "images/skin1/ArchBeluga.png": "images/skin1/ArchBeluga.png",
        "images/skin1/ArchBeluga 1.png": "images/skin1/ArchBeluga 1.png",
        "images/skin1/Beluga.png": "images/skin1/Beluga.png",
        "images/skin1/Beluga 1.png": "images/skin1/Beluga 1.png",
        "images/skin1/Narwhal.png": "images/skin1/Narwhal.png",
        "images/skin1/Narwhal 1.png": "images/skin1/Narwhal 1.png",
        "images/skin1/Diamondfish.png": "images/skin1/Diamondfish.png",
        "images/skin1/Diamondfish 1.png": "images/skin1/Diamondfish 1.png",
        "images/skin1/Goldenfish.png": "images/skin1/Goldenfish.png",
        "images/skin1/Goldenfish_ 1.png": "images/skin1/Goldenfish_ 1.png",
        "images/skin1/Goldfish_.png": "images/skin1/Goldfish_.png",
        "images/skin1/Goldfish_ 1.png": "images/skin1/Goldfish_ 1.png",
        "images/skin1/Spinner_Dolphin.png": "images/skin1/Spinner_Dolphin.png",
        "images/skin1/Spinner_Dolphin 1.png": "images/skin1/Spinner_Dolphin 1.png",
        "images/skin1/Miami_Dolphin.png": "images/skin1/Miami_Dolphin.png",
        "images/skin1/Miami_Dolphin 1.png": "images/skin1/Miami_Dolphin 1.png",
        "images/skin1/Dolphin.png": "images/skin1/Dolphin.png",
        "images/skin1/Dolphin 1.png": "images/skin1/Dolphin 1.png",
        "images/skin1/Onifugu.png": "images/skin1/Onifugu.png",
        "images/skin1/Onifugu 1.png": "images/skin1/Onifugu 1.png",
        "images/skin1/Porcupine_Fish.png": "images/skin1/Porcupine_Fish.png",
        "images/skin1/Porcupine_Fish 1.png": "images/skin1/Porcupine_Fish 1.png",
        "images/skin1/Puffer_Fish.png": "images/skin1/Puffer_Fish.png",
        "images/skin1/Puffer_Fish 1.png": "images/skin1/Puffer_Fish 1.png",
        "images/skin1/Blue_Ray 0.png": "images/skin1/Blue_Ray 0.png",
        "images/skin1/Blue_Ray.png": "images/skin1/Blue_Ray.png",
        "images/skin1/Mantra_Ray.png": "images/skin1/Mantra_Ray.png",
        "images/skin1/Manta_Ray.png": "images/skin1/Manta_Ray.png",
        "images/skin1/Jomama_.png": "images/skin1/Jomama_.png",
        "images/skin1/Jomama_ 1.png": "images/skin1/Jomama_ 1.png",
        "images/skin1/Blue_Whale.png": "images/skin1/Blue_Whale.png",
        "images/skin1/Blue_Whale 1.png": "images/skin1/Blue_Whale 1.png",
        "images/skin1/Humpback_Whale.png": "images/skin1/Humpback_Whale.png",
        "images/skin1/Humpback_Whale_ 1.png": "images/skin1/Humpback_Whale_ 1.png",
        "images/skin1/Hammered.png": "images/skin1/Hammered.png",
        "images/skin1/Hammered 1.png": "images/skin1/Hammered 1.png",
        "images/skin1/Hammeredhead.png": "images/skin1/Hammeredhead.png",
        "images/skin1/HammeredheadT.png": "images/skin1/HammeredheadT.png",
        "images/skin1/Hammerhead.png": "images/skin1/Hammerhead.png",
        "images/skin1/HammerheadT.png": "images/skin1/HammerheadT.png",
        "images/skin1/Psycho_Killer_Whale.png": "images/skin1/Psycho_Killer_Whale.png",
        "images/skin1/Psycho_Killer_WhaleT.png": "images/skin1/Psycho_Killer_WhaleT.png",
        "images/skin1/Serial_Killer_Whale.png": "images/skin1/Serial_Killer_Whale.png",
        "images/skin1/Killer_WhaleT.png": "images/skin1/Killer_WhaleT.png",
        "images/skin1/Killer_Whale.png": "images/skin1/Killer_Whale.png",
        "images/skin1/Megalodon.png": "images/skin1/Megalodon.png",
        "images/skin1/Megalodon 1.png": "images/skin1/Megalodon 1.png",
        "images/skin1/GreatWhiteShark.png": "images/skin1/GreatWhiteShark.png",
        "images/skin1/GreatWhiteSharkT.png": "images/skin1/GreatWhiteSharkT.png",
        "images/skin1/Shark.png": "images/skin1/Shark.png",
        "images/skin1/SharkT.png": "images/skin1/SharkT.png"
    };
})(PIXI, s1 = s1 || {});
var s1;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: s1.skin1,
        background: 0x2f64a6,
        width: 2000,
        height: 2000,
        framerate: 60,
        totalFrames: 1,
        library: s1
    };
}