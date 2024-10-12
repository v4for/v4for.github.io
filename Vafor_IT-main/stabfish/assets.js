function makeObj(type, name, options, build){return {type, name, options, build}}
(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.from;
    var Text = PIXI.Text;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.DragonOrb = makeObj("Container", 'DragonOrb', undefined, function(){
        var instance2 = new Sprite(fromFrame("assets_Mythical_Orb"))
            .setTransform(-22.75, -22.75, 0.7, 0.7);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 370"))
            .setTransform(-27, -27);
        this.addChild(instance2, instance1);
    });

    lib.ColossalSquidOrb = makeObj("Container", 'ColossalSquidOrb', undefined, function(){
        var instance2 = new Sprite(fromFrame("assets_Squid_Orb"))
            .setTransform(-23.1, -23.1, 0.7, 0.7);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 370"))
            .setTransform(-27, -27);
        this.addChild(instance2, instance1);
    });

    lib.SailfishOrb = makeObj("Container", 'SailfishOrb', undefined, function(){
        var instance2 = new Sprite(fromFrame("assets_Sailfish_Orb"))
            .setTransform(-22.75, -22.75, 0.7, 0.7);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 370"))
            .setTransform(-27, -27);
        this.addChild(instance2, instance1);
    });

    lib.SpiderCrabOrb = makeObj("Container", 'SpiderCrabOrb', undefined, function(){
        var instance2 = new Sprite(fromFrame("assets_Spider_Crab_Orb"))
            .setTransform(-23.1, -23.45, 0.7, 0.7);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 370"))
            .setTransform(-27, -27);
        this.addChild(instance2, instance1);
    });

    lib.MosasaurusOrb = makeObj("Container", 'MosasaurusOrb', undefined, function(){
        var instance2 = new Sprite(fromFrame("assets_Mosasaurus_Orb"))
            .setTransform(-22.75, -22.75, 0.7, 0.7);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 370"))
            .setTransform(-27, -27);
        this.addChild(instance2, instance1);
    });

    lib.DragonOrbs = makeObj("Container", 'DragonOrbs', undefined, function(){
        var instance5 = new lib.MosasaurusOrb()
            .setTransform(105.25, 34.35);
        var instance4 = new lib.SpiderCrabOrb()
            .setTransform(65.4, -90.2);
        var instance3 = new lib.SailfishOrb()
            .setTransform(-64.9, -89.85);
        var instance2 = new lib.ColossalSquidOrb()
            .setTransform(-105.65, 34.4);
        var instance1 = new lib.DragonOrb()
            .setTransform(-0.25, 110.75);
        this.addChild(instance5, instance4, instance3, instance2, instance1);
    });

    lib.DischargeMc = makeObj("MovieClip", 'DischargeMc',{
            duration: 4,
            labels: {
                ink: 0,
                electric: 1,
                fireBullet: 2,
                fireRing: 3
            }
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Discharge-ink"));
        var instance2 = new Sprite(fromFrame("assets_Discharge-electric"));
        var instance3 = new Sprite(fromFrame("assets_Fireball 1"));
        var instance4 = new Sprite(fromFrame("assets_Fire_Ring"))
            .setTransform(-40, -40);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -40,
                    y: -38
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -39,
                    y: -37
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -25,
                    y: -54,
                    sx: 1.709,
                    sy: 1.709
                }
            })
            .addTimedChild(instance4, 3, 1);
    });

    lib.HatCon = makeObj("MovieClip", 'HatCon',{
            duration: 40
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_hat0001"));
        var instance2 = new Sprite(fromFrame("assets_hat0002"));
        var instance3 = new Sprite(fromFrame("assets_hat0003"));
        var instance4 = new Sprite(fromFrame("assets_hat0004"));
        var instance5 = new Sprite(fromFrame("assets_hat0005"));
        var instance6 = new Sprite(fromFrame("assets_hat0006"));
        var instance7 = new Sprite(fromFrame("assets_hat0007"));
        var instance8 = new Sprite(fromFrame("assets_hat0008"));
        var instance9 = new Sprite(fromFrame("assets_hat0009"));
        var instance10 = new Sprite(fromFrame("assets_hat0010"));
        var instance11 = new Sprite(fromFrame("assets_hat0011"));
        var instance12 = new Sprite(fromFrame("assets_hat0012"));
        var instance13 = new Sprite(fromFrame("assets_hat0013"));
        var instance14 = new Sprite(fromFrame("assets_hat0014"));
        var instance15 = new Sprite(fromFrame("assets_hat0015"));
        var instance16 = new Sprite(fromFrame("assets_hat0016"));
        var instance17 = new Sprite(fromFrame("assets_hat0017"));
        var instance18 = new Sprite(fromFrame("assets_hat0018"));
        var instance19 = new Sprite(fromFrame("assets_hat0019"));
        var instance20 = new Sprite(fromFrame("assets_hat0020"));
        var instance21 = new Sprite(fromFrame("assets_hat0021"));
        var instance22 = new Sprite(fromFrame("assets_hat0022"));
        var instance23 = new Sprite(fromFrame("assets_Bitmap 25"));
        var instance24 = new Sprite(fromFrame("assets_hat0024"));
        var instance25 = new Sprite(fromFrame("assets_hat0025"));
        var instance26 = new Sprite(fromFrame("assets_hat0026"));
        var instance27 = new Sprite(fromFrame("assets_deco-turtle0001"));
        var instance28 = new Sprite(fromFrame("assets_deco-turtle0002"));
        var instance29 = new Sprite(fromFrame("assets_Bitmap 50"));
        var instance30 = new Sprite(fromFrame("assets_Bitmap 209"));
        var instance31 = new Sprite(fromFrame("assets_Bitmap 248"));
        var instance32 = new Sprite(fromFrame("assets_Bitmap 282"));
        var instance33 = new Sprite(fromFrame("assets_Bitmap 308"));
        var instance34 = new Sprite(fromFrame("assets_Bitmap 320"));
        var instance35 = new Sprite(fromFrame("assets_Bitmap 321"));
        var instance36 = new Sprite(fromFrame("assets_Bitmap 337"));
        var instance37 = new Sprite(fromFrame("assets_Bitmap 356"));
        var instance38 = new Sprite(fromFrame("assets_Bitmap 350"));
        var instance39 = new Sprite(fromFrame("assets_Bitmap 351"))
            .setTransform(-65, -67);
        this.addTimedChild(instance1, 1, 1, {
                "1": {
                    x: -56,
                    y: -56
                }
            })
            .addTimedChild(instance2, 2, 1, {
                "2": {
                    x: -57,
                    y: -63
                }
            })
            .addTimedChild(instance3, 3, 1, {
                "3": {
                    x: -64,
                    y: -66
                }
            })
            .addTimedChild(instance4, 4, 1, {
                "4": {
                    x: -50,
                    y: -51
                }
            })
            .addTimedChild(instance5, 5, 1, {
                "5": {
                    x: -66,
                    y: -66
                }
            })
            .addTimedChild(instance6, 6, 1, {
                "6": {
                    x: -59,
                    y: -55
                }
            })
            .addTimedChild(instance7, 7, 1, {
                "7": {
                    x: -65,
                    y: -65
                }
            })
            .addTimedChild(instance8, 8, 1, {
                "8": {
                    x: -60,
                    y: -58
                }
            })
            .addTimedChild(instance9, 9, 1, {
                "9": {
                    x: -60,
                    y: -63
                }
            })
            .addTimedChild(instance10, 10, 1, {
                "10": {
                    x: -64,
                    y: -68
                }
            })
            .addTimedChild(instance11, 11, 1, {
                "11": {
                    x: -67,
                    y: -64
                }
            })
            .addTimedChild(instance12, 12, 1, {
                "12": {
                    x: -57,
                    y: -62
                }
            })
            .addTimedChild(instance13, 13, 1, {
                "13": {
                    x: -61,
                    y: -61
                }
            })
            .addTimedChild(instance14, 14, 1, {
                "14": {
                    x: -63,
                    y: -66
                }
            })
            .addTimedChild(instance15, 15, 1, {
                "15": {
                    x: -56,
                    y: -61
                }
            })
            .addTimedChild(instance16, 16, 1, {
                "16": {
                    x: -72,
                    y: -83
                }
            })
            .addTimedChild(instance17, 17, 1, {
                "17": {
                    x: -66,
                    y: -66
                }
            })
            .addTimedChild(instance18, 18, 1, {
                "18": {
                    x: -66,
                    y: -41
                }
            })
            .addTimedChild(instance19, 19, 1, {
                "19": {
                    x: -66,
                    y: -66
                }
            })
            .addTimedChild(instance20, 20, 1, {
                "20": {
                    x: -61,
                    y: -63
                }
            })
            .addTimedChild(instance21, 21, 1, {
                "21": {
                    x: -65,
                    y: -59
                }
            })
            .addTimedChild(instance22, 22, 1, {
                "22": {
                    x: -57,
                    y: -66
                }
            })
            .addTimedChild(instance23, 23, 1, {
                "23": {
                    x: -59,
                    y: -68
                }
            })
            .addTimedChild(instance24, 24, 1, {
                "24": {
                    x: -64,
                    y: -65
                }
            })
            .addTimedChild(instance25, 25, 1, {
                "25": {
                    x: -65,
                    y: -65
                }
            })
            .addTimedChild(instance26, 26, 1, {
                "26": {
                    x: -64,
                    y: -64
                }
            })
            .addTimedChild(instance27, 27, 1, {
                "27": {
                    x: -63,
                    y: -62
                }
            })
            .addTimedChild(instance28, 28, 1, {
                "28": {
                    x: -65,
                    y: -65
                }
            })
            .addTimedChild(instance29, 29, 1, {
                "29": {
                    x: -76,
                    y: -73
                }
            })
            .addTimedChild(instance30, 30, 1, {
                "30": {
                    x: -62,
                    y: -63
                }
            })
            .addTimedChild(instance31, 31, 1, {
                "31": {
                    x: -63,
                    y: -65
                }
            })
            .addTimedChild(instance32, 32, 1, {
                "32": {
                    x: -71,
                    y: -63
                }
            })
            .addTimedChild(instance33, 33, 1, {
                "33": {
                    x: -64,
                    y: -63
                }
            })
            .addTimedChild(instance34, 34, 1, {
                "34": {
                    x: -55,
                    y: -46
                }
            })
            .addTimedChild(instance35, 35, 1, {
                "35": {
                    x: -71,
                    y: -74
                }
            })
            .addTimedChild(instance36, 36, 1, {
                "36": {
                    x: -74.25,
                    y: -41.2,
                    r: -0.785
                }
            })
            .addTimedChild(instance37, 37, 1, {
                "37": {
                    x: -52,
                    y: -50
                }
            })
            .addTimedChild(instance38, 38, 1, {
                "38": {
                    x: 59.95,
                    y: -70.95,
                    r: 1.344
                }
            })
            .addTimedChild(instance39, 39, 1);
    });

    lib.FaceCon = makeObj("MovieClip", 'FaceCon',{
            duration: 47
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_mask0002"));
        var instance2 = new Sprite(fromFrame("assets_mask0003"));
        var instance3 = new Sprite(fromFrame("assets_mask0004"));
        var instance4 = new Sprite(fromFrame("assets_mask0005"));
        var instance5 = new Sprite(fromFrame("assets_mask0006"));
        var instance6 = new Sprite(fromFrame("assets_mask0007"));
        var instance7 = new Sprite(fromFrame("assets_mask0008"));
        var instance8 = new Sprite(fromFrame("assets_Bitmap 27"));
        var instance9 = new Sprite(fromFrame("assets_mask0010"));
        var instance10 = new Sprite(fromFrame("assets_mask0011"));
        var instance11 = new Sprite(fromFrame("assets_mask0012"));
        var instance12 = new Sprite(fromFrame("assets_mask0013"));
        var instance13 = new Sprite(fromFrame("assets_mask0014"));
        var instance14 = new Sprite(fromFrame("assets_mask0015"));
        var instance15 = new Sprite(fromFrame("assets_mask0016"));
        var instance16 = new Sprite(fromFrame("assets_mask0017"));
        var instance17 = new Sprite(fromFrame("assets_mask0018"));
        var instance18 = new Sprite(fromFrame("assets_mask0019"));
        var instance19 = new Sprite(fromFrame("assets_mask0020"));
        var instance20 = new Sprite(fromFrame("assets_mask0021"));
        var instance21 = new Sprite(fromFrame("assets_mask0022"));
        var instance22 = new Sprite(fromFrame("assets_mask0023"));
        var instance23 = new Sprite(fromFrame("assets_mask0024"));
        var instance24 = new Sprite(fromFrame("assets_mask0025"));
        var instance25 = new Sprite(fromFrame("assets_mask0026"));
        var instance26 = new Sprite(fromFrame("assets_mask0027"));
        var instance27 = new Sprite(fromFrame("assets_mask0028"));
        var instance28 = new Sprite(fromFrame("assets_deco-turtle0003"));
        var instance29 = new Sprite(fromFrame("assets_Bitmap 8"));
        var instance30 = new Sprite(fromFrame("assets_Bitmap 24"));
        var instance31 = new Sprite(fromFrame("assets_Bitmap 51"));
        var instance32 = new Sprite(fromFrame("assets_Bitmap 249"));
        var instance33 = new Sprite(fromFrame("assets_Bitmap 267"));
        var instance34 = new Sprite(fromFrame("assets_Bitmap 279"));
        var instance35 = new Sprite(fromFrame("assets_Bitmap 283"));
        var instance36 = new Sprite(fromFrame("assets_Bitmap 293"));
        var instance37 = new Sprite(fromFrame("assets_Bitmap 294"));
        var instance38 = new Sprite(fromFrame("assets_Bitmap 295"));
        var instance39 = new Sprite(fromFrame("assets_Bitmap 309"));
        var instance40 = new Sprite(fromFrame("assets_Bitmap 310"));
        var instance41 = new Sprite(fromFrame("assets_Bitmap 323"));
        var instance42 = new Sprite(fromFrame("assets_Bitmap 334"));
        var instance43 = new Sprite(fromFrame("assets_Bitmap 336"));
        var instance44 = new Sprite(fromFrame("assets_Bitmap 357"));
        var instance45 = new Sprite(fromFrame("assets_Bitmap 358"));
        var instance46 = new Sprite(fromFrame("assets_Bitmap 355"))
            .setTransform(-44, -83);
        this.addTimedChild(instance1, 1, 1, {
                "1": {
                    x: -10,
                    y: -48
                }
            })
            .addTimedChild(instance2, 2, 1, {
                "2": {
                    x: -28,
                    y: -58
                }
            })
            .addTimedChild(instance3, 3, 1, {
                "3": {
                    x: -27,
                    y: -53
                }
            })
            .addTimedChild(instance4, 4, 1, {
                "4": {
                    x: -28,
                    y: -58
                }
            })
            .addTimedChild(instance5, 5, 1, {
                "5": {
                    x: 3,
                    y: -61
                }
            })
            .addTimedChild(instance6, 6, 1, {
                "6": {
                    x: 11,
                    y: -54
                }
            })
            .addTimedChild(instance7, 7, 1, {
                "7": {
                    x: -15,
                    y: -45
                }
            })
            .addTimedChild(instance8, 8, 1, {
                "8": {
                    x: -15,
                    y: -54
                }
            })
            .addTimedChild(instance9, 9, 1, {
                "9": {
                    x: -8,
                    y: -51
                }
            })
            .addTimedChild(instance10, 10, 1, {
                "10": {
                    x: -25,
                    y: -64
                }
            })
            .addTimedChild(instance11, 11, 1, {
                "11": {
                    x: -27,
                    y: -46
                }
            })
            .addTimedChild(instance12, 12, 1, {
                "12": {
                    x: -10,
                    y: -49
                }
            })
            .addTimedChild(instance13, 13, 1, {
                "13": {
                    x: 15,
                    y: -67
                }
            })
            .addTimedChild(instance14, 14, 1, {
                "14": {
                    x: -25,
                    y: -48
                }
            })
            .addTimedChild(instance15, 15, 1, {
                "15": {
                    x: -20,
                    y: -49
                }
            })
            .addTimedChild(instance16, 16, 1, {
                "16": {
                    x: -14,
                    y: -47
                }
            })
            .addTimedChild(instance17, 17, 1, {
                "17": {
                    x: -45,
                    y: -20
                }
            })
            .addTimedChild(instance18, 18, 1, {
                "18": {
                    x: 38,
                    y: -30
                }
            })
            .addTimedChild(instance19, 19, 1, {
                "19": {
                    x: 9,
                    y: -63
                }
            })
            .addTimedChild(instance20, 20, 1, {
                "20": {
                    x: -15,
                    y: -67
                }
            })
            .addTimedChild(instance21, 21, 1, {
                "21": {
                    x: -62,
                    y: -15
                }
            })
            .addTimedChild(instance22, 22, 1, {
                "22": {
                    x: -18,
                    y: -59
                }
            })
            .addTimedChild(instance23, 23, 1, {
                "23": {
                    x: -13,
                    y: -70
                }
            })
            .addTimedChild(instance24, 24, 1, {
                "24": {
                    x: -61,
                    y: -26
                }
            })
            .addTimedChild(instance25, 25, 1, {
                "25": {
                    x: -50,
                    y: -9
                }
            })
            .addTimedChild(instance26, 26, 1, {
                "26": {
                    x: -31,
                    y: -52
                }
            })
            .addTimedChild(instance27, 27, 1, {
                "27": {
                    x: -69,
                    y: -35
                }
            })
            .addTimedChild(instance28, 28, 1, {
                "28": {
                    x: -24,
                    y: -64
                }
            })
            .addTimedChild(instance29, 29, 1, {
                "29": {
                    x: -51,
                    y: -58
                }
            })
            .addTimedChild(instance30, 30, 1, {
                "30": {
                    x: -18,
                    y: -65
                }
            })
            .addTimedChild(instance31, 31, 1, {
                "31": {
                    x: -2,
                    y: -67
                }
            })
            .addTimedChild(instance32, 32, 1, {
                "32": {
                    x: -7,
                    y: -62
                }
            })
            .addTimedChild(instance33, 33, 1, {
                "33": {
                    x: -27,
                    y: -39
                }
            })
            .addTimedChild(instance34, 34, 1, {
                "34": {
                    x: -21,
                    y: -33
                }
            })
            .addTimedChild(instance35, 35, 1, {
                "35": {
                    x: -63,
                    y: -41
                }
            })
            .addTimedChild(instance36, 36, 1, {
                "36": {
                    x: -58,
                    y: -8
                }
            })
            .addTimedChild(instance37, 37, 1, {
                "37": {
                    x: -59,
                    y: -19
                }
            })
            .addTimedChild(instance38, 38, 1, {
                "38": {
                    x: 21,
                    y: -35
                }
            })
            .addTimedChild(instance39, 39, 1, {
                "39": {
                    x: -32,
                    y: -60
                }
            })
            .addTimedChild(instance40, 40, 1, {
                "40": {
                    x: -43,
                    y: -47
                }
            })
            .addTimedChild(instance41, 41, 1, {
                "41": {
                    x: -30,
                    y: -54
                }
            })
            .addTimedChild(instance42, 42, 1, {
                "42": {
                    x: -67,
                    y: -61
                }
            })
            .addTimedChild(instance43, 43, 1, {
                "43": {
                    x: 58.1,
                    y: -33.95,
                    r: 1.047
                }
            })
            .addTimedChild(instance44, 44, 1, {
                "44": {
                    x: -27,
                    y: -59
                }
            })
            .addTimedChild(instance45, 45, 1, {
                "45": {
                    x: 28,
                    y: -33,
                    sx: 0.6,
                    sy: 0.6
                }
            })
            .addTimedChild(instance46, 46, 1)
            .addAction(function () {
                /* this.stop()*/
            }, 0);
    });

    lib.LootBubble = makeObj("Container", 'LootBubble', undefined, function(){
        var instance3 = new lib.FaceCon()
            .setTransform(-0.25, 13.45, 0.4, 0.4);
        this[instance3.name = "faceCon"] = instance3;
        var instance2 = new lib.HatCon()
            .setTransform(-0.25, 13.45, 0.4, 0.4);
        this[instance2.name = "hatCon"] = instance2;
        var instance1 = new Sprite(fromFrame("assets_Bitmap 122"))
            .setTransform(-30, -30, 0.5, 0.5);
        this.addChild(instance3, instance2, instance1);
    });

    lib.Bubble = makeObj("MovieClip", 'Bubble',{
            duration: 62
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Bitmap 123"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 169"));
        var instance3 = new Sprite(fromFrame("assets_Bitmap 170"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 171"));
        var instance5 = new Sprite(fromFrame("assets_Bitmap 169"));
        var instance6 = new Sprite(fromFrame("assets_Bitmap 170"));
        var instance7 = new Sprite(fromFrame("assets_Bitmap 171"));
        var instance8 = new Sprite(fromFrame("assets_Bitmap 169"));
        var instance9 = new Sprite(fromFrame("assets_Bitmap 170"));
        var instance10 = new Sprite(fromFrame("assets_Bitmap 171"));
        var instance11 = new Sprite(fromFrame("assets_Bitmap 172"));
        var instance12 = new Sprite(fromFrame("assets_Bitmap 173"));
        var instance13 = new Sprite(fromFrame("assets_Bitmap 174"));
        var instance14 = new Sprite(fromFrame("assets_Bitmap 175"));
        var instance15 = new Sprite(fromFrame("assets_Bitmap 176"));
        var instance16 = new Sprite(fromFrame("assets_Bitmap 58"));
        var instance17 = new Sprite(fromFrame("assets_Bitmap 256"));
        var instance18 = new Sprite(fromFrame("assets_Bitmap 271"));
        var instance19 = new Sprite(fromFrame("assets_Bitmap 53"));
        var instance20 = new Sprite(fromFrame("assets_Bitmap 262"));
        var instance21 = new Sprite(fromFrame("assets_Bitmap 285"));
        var instance22 = new Sprite(fromFrame("assets_Bitmap 296"));
        var instance23 = new Sprite(fromFrame("assets_Bitmap 311"));
        var instance24 = new Sprite(fromFrame("assets_Bitmap 324"));
        var instance25 = new Sprite(fromFrame("assets_Bitmap 339"));
        var instance26 = new Sprite(fromFrame("assets_Bitmap 360"));
        var instance27 = new Sprite(fromFrame("assets_Bitmap 365"))
            .setTransform(-14, -15);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -6,
                    y: -6
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -10,
                    y: -10
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -9,
                    y: -11
                }
            })
            .addTimedChild(instance4, 3, 1, {
                "3": {
                    x: -15,
                    y: -11
                }
            })
            .addTimedChild(instance5, 4, 1, {
                "4": {
                    x: -10,
                    y: -10
                }
            })
            .addTimedChild(instance6, 5, 1, {
                "5": {
                    x: -9,
                    y: -11
                }
            })
            .addTimedChild(instance7, 6, 1, {
                "6": {
                    x: -15,
                    y: -11
                }
            })
            .addTimedChild(instance8, 7, 1, {
                "7": {
                    x: -10,
                    y: -10
                }
            })
            .addTimedChild(instance9, 8, 1, {
                "8": {
                    x: -9,
                    y: -11
                }
            })
            .addTimedChild(instance10, 9, 1, {
                "9": {
                    x: -15,
                    y: -11
                }
            })
            .addTimedChild(instance11, 10, 3, {
                "10": {
                    x: -7,
                    y: -6
                }
            })
            .addTimedChild(instance12, 13, 3, {
                "13": {
                    x: -15,
                    y: -15
                }
            })
            .addTimedChild(instance13, 16, 3, {
                "16": {
                    x: -7,
                    y: -8
                }
            })
            .addTimedChild(instance14, 19, 3, {
                "19": {
                    x: -7,
                    y: -8
                }
            })
            .addTimedChild(instance15, 22, 3, {
                "22": {
                    x: -6,
                    y: -8
                }
            })
            .addTimedChild(instance16, 25, 3, {
                "25": {
                    x: -21,
                    y: -16
                }
            })
            .addTimedChild(instance17, 28, 3, {
                "28": {
                    x: -10,
                    y: -10
                }
            })
            .addTimedChild(instance18, 32, 3, {
                "32": {
                    x: -15,
                    y: -15
                }
            })
            .addTimedChild(instance19, 35, 3, {
                "35": {
                    x: -9,
                    y: -11
                }
            })
            .addTimedChild(instance20, 38, 3, {
                "38": {
                    x: -20,
                    y: -7
                }
            })
            .addTimedChild(instance21, 41, 3, {
                "41": {
                    x: -12,
                    y: -25
                }
            })
            .addTimedChild(instance22, 44, 3, {
                "44": {
                    x: -11,
                    y: -10
                }
            })
            .addTimedChild(instance23, 47, 3, {
                "47": {
                    x: -6,
                    y: -6
                }
            })
            .addTimedChild(instance24, 50, 3, {
                "50": {
                    x: -5,
                    y: -17
                }
            })
            .addTimedChild(instance25, 53, 3, {
                "53": {
                    x: -23,
                    y: -25
                }
            })
            .addTimedChild(instance26, 56, 3, {
                "56": {
                    x: -25,
                    y: -12
                }
            })
            .addTimedChild(instance27, 59, 3);
    });

    lib.Body_Shark = makeObj("Container", 'Body_Shark', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 56"))
            .setTransform(-70, -50);
        this.addChild(instance1);
    });

    lib.Tail_Shark = makeObj("Container", 'Tail_Shark', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 57"))
            .setTransform(-28, -1);
        this.addChild(instance1);
    });

    lib.Animated_Shark = makeObj("MovieClip", 'Animated_Shark',{
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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
        var instance1 = new Sprite(fromFrame("assets_Bitmap 67"))
            .setTransform(-70, -49);
        this.addChild(instance1);
    });

    lib.Tail_KillerWhale = makeObj("Container", 'Tail_KillerWhale', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 70"))
            .setTransform(-27);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_HammerHead = makeObj("Container", 'Body_HammerHead', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 73"))
            .setTransform(-70, -49);
        this.addChild(instance1);
    });

    lib.Tail_HammerHead = makeObj("Container", 'Tail_HammerHead', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 74"))
            .setTransform(-28, -1);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_GreatWhiteShark = makeObj("Container", 'Body_GreatWhiteShark', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 61"))
            .setTransform(-70, -50);
        this.addChild(instance1);
    });

    lib.Tail_GreatWhiteShark = makeObj("Container", 'Tail_GreatWhiteShark', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 62"))
            .setTransform(-34);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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
        var instance1 = new Sprite(fromFrame("assets_Bitmap 69"))
            .setTransform(-70, -49);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_HammeredHead = makeObj("Container", 'Body_HammeredHead', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 75"))
            .setTransform(-70, -49);
        this.addChild(instance1);
    });

    lib.Tail_HammeredHead = makeObj("Container", 'Tail_HammeredHead', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 76"))
            .setTransform(-28, -1);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Megalodon = makeObj("Container", 'Body_Megalodon', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 64"))
            .setTransform(-70, -49);
        this.addChild(instance1);
    });

    lib.Tail_Megalodon = makeObj("Container", 'Tail_Megalodon', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 66"))
            .setTransform(-28, -1);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_KillerWhale_Psycho = makeObj("Container", 'Body_KillerWhale_Psycho', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 71"))
            .setTransform(-70, -49);
        this.addChild(instance1);
    });

    lib.Tail_KillerWhale_Psycho = makeObj("Container", 'Tail_KillerWhale_Psycho', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 72"))
            .setTransform(-27);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Hammered = makeObj("Container", 'Body_Hammered', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 78"))
            .setTransform(-70, -49);
        this.addChild(instance1);
    });

    lib.Tail_Hammered = makeObj("Container", 'Tail_Hammered', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 79"))
            .setTransform(-28);
        this.addChild(instance1);
    });

    lib.Animated_Hammered = makeObj("MovieClip", 'Animated_Hammered',{
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Whale = makeObj("Container", 'Body_Whale', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 81"))
            .setTransform(-72, -49);
        this.addChild(instance1);
    });

    lib.Tail_Whale = makeObj("Container", 'Tail_Whale', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 82"))
            .setTransform(-27);
        this.addChild(instance1);
    });

    lib.Animated_Whale = makeObj("MovieClip", 'Animated_Whale',{
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_WhaleBlue = makeObj("Container", 'Body_WhaleBlue', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 83"))
            .setTransform(-63, -49);
        this.addChild(instance1);
    });

    lib.Tail_WhaleBlue = makeObj("Container", 'Tail_WhaleBlue', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 85"))
            .setTransform(-27);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Jomama = makeObj("Container", 'Body_Jomama', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 91"))
            .setTransform(-63, -49);
        this.addChild(instance1);
    });

    lib.Tail_Jomama = makeObj("Container", 'Tail_Jomama', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 95"))
            .setTransform(-27);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
            .setTransform(-48, -36, 1.134, 1.134);
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

    lib.Body_MantaRay = makeObj("Container", 'Body_MantaRay', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 96"))
            .setTransform(-46, -49);
        this.addChild(instance1);
    });

    lib.Tail_MantaRay = makeObj("Container", 'Tail_MantaRay', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 97"))
            .setTransform(-68, -83);
        this.addChild(instance1);
    });

    lib.Animated_MantaRay = makeObj("MovieClip", 'Animated_MantaRay',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_MantaRay();
        var instance1 = new lib.Body_MantaRay();
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    y: 50,
                    sx: 1
                },
                "4": {
                    sx: 1.001
                },
                "5": {
                    sx: 1.002
                },
                "6": {
                    sx: 1.004
                },
                "7": {
                    sx: 1.008
                },
                "8": {
                    sx: 1.014
                },
                "9": {
                    sx: 1.021
                },
                "10": {
                    sx: 1.027
                },
                "11": {
                    sx: 1.031
                },
                "12": {
                    sx: 1.033
                },
                "13": {
                    sx: 1.034
                },
                "15": {
                    sx: 1.035
                },
                "16": {
                    sx: 1.034
                },
                "18": {
                    sx: 1.033
                },
                "19": {
                    sx: 1.032
                },
                "20": {
                    sx: 1.029
                },
                "21": {
                    sx: 1.026
                },
                "22": {
                    sx: 1.02
                },
                "23": {
                    sx: 1.014
                },
                "24": {
                    sx: 1.009
                },
                "25": {
                    sx: 1.005
                },
                "26": {
                    sx: 1.003
                },
                "27": {
                    sx: 1.001
                },
                "28": {
                    sx: 1
                },
                "32": {
                    sx: 1.001
                },
                "33": {
                    sx: 1.006
                },
                "34": {
                    sx: 1.013
                },
                "35": {
                    sx: 1.022
                },
                "36": {
                    sx: 1.029
                },
                "37": {
                    sx: 1.033
                },
                "38": {
                    sx: 1.035
                },
                "39": {
                    sx: 1.033
                },
                "40": {
                    sx: 1.029
                },
                "41": {
                    sx: 1.022
                },
                "42": {
                    sx: 1.013
                },
                "43": {
                    sx: 1.006
                },
                "44": {
                    sx: 1.001
                },
                "45": {
                    sx: 1
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

    lib.Body_MantraRay = makeObj("Container", 'Body_MantraRay', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 98"))
            .setTransform(-46, -49);
        this.addChild(instance1);
    });

    lib.Tail_MantraRay = makeObj("Container", 'Tail_MantraRay', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 99"))
            .setTransform(-68, -83);
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
        var instance3 = new lib.Tail_MantraRay();
        var instance2 = new lib.Body_MantraRay();
        var instance1 = new lib.Body_MantraRay();
        var instance4 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
            .setTransform(-43, -34);
        this.addTimedChild(instance3, 0, 48, {
                "0": {
                    y: 50,
                    sx: 1
                },
                "4": {
                    sx: 1.001
                },
                "5": {
                    sx: 1.002
                },
                "6": {
                    sx: 1.004
                },
                "7": {
                    sx: 1.008
                },
                "8": {
                    sx: 1.014
                },
                "9": {
                    sx: 1.021
                },
                "10": {
                    sx: 1.027
                },
                "11": {
                    sx: 1.031
                },
                "12": {
                    sx: 1.033
                },
                "13": {
                    sx: 1.034
                },
                "15": {
                    sx: 1.035
                },
                "16": {
                    sx: 1.034
                },
                "18": {
                    sx: 1.033
                },
                "19": {
                    sx: 1.032
                },
                "20": {
                    sx: 1.029
                },
                "21": {
                    sx: 1.026
                },
                "22": {
                    sx: 1.02
                },
                "23": {
                    sx: 1.014
                },
                "24": {
                    sx: 1.009
                },
                "25": {
                    sx: 1.005
                },
                "26": {
                    sx: 1.003
                },
                "27": {
                    sx: 1.001
                },
                "28": {
                    sx: 1
                },
                "32": {
                    sx: 1.001
                },
                "33": {
                    sx: 1.006
                },
                "34": {
                    sx: 1.013
                },
                "35": {
                    sx: 1.022
                },
                "36": {
                    sx: 1.029
                },
                "37": {
                    sx: 1.033
                },
                "38": {
                    sx: 1.035
                },
                "39": {
                    sx: 1.033
                },
                "40": {
                    sx: 1.029
                },
                "41": {
                    sx: 1.022
                },
                "42": {
                    sx: 1.013
                },
                "43": {
                    sx: 1.006
                },
                "44": {
                    sx: 1.001
                },
                "45": {
                    sx: 1
                }
            })
            .addTimedChild(instance2)
            .addTimedChild(instance1)
            .addTimedChild(instance4, 47, 1)
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

    lib.Body_BlueRay = makeObj("Container", 'Body_BlueRay', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 100"))
            .setTransform(-51, -54);
        this.addChild(instance1);
    });

    lib.Tail_BlueRay = makeObj("Container", 'Tail_BlueRay', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 101"))
            .setTransform(-73, -88);
        this.addChild(instance1);
    });

    lib.Animated_BlueRay = makeObj("MovieClip", 'Animated_BlueRay',{
            duration: 48,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 46
            }
        }, function(){
		this.stop()
        var instance2 = new lib.Tail_BlueRay();
        var instance1 = new lib.Body_BlueRay();
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
            .setTransform(-43, -34);
        this.addTimedChild(instance2, 0, 48, {
                "0": {
                    y: 50,
                    sx: 1
                },
                "4": {
                    sx: 1.001
                },
                "5": {
                    sx: 1.002
                },
                "6": {
                    sx: 1.004
                },
                "7": {
                    sx: 1.008
                },
                "8": {
                    sx: 1.014
                },
                "9": {
                    sx: 1.021
                },
                "10": {
                    sx: 1.027
                },
                "11": {
                    sx: 1.031
                },
                "12": {
                    sx: 1.033
                },
                "13": {
                    sx: 1.034
                },
                "15": {
                    sx: 1.035
                },
                "16": {
                    sx: 1.034
                },
                "18": {
                    sx: 1.033
                },
                "19": {
                    sx: 1.032
                },
                "20": {
                    sx: 1.029
                },
                "21": {
                    sx: 1.026
                },
                "22": {
                    sx: 1.02
                },
                "23": {
                    sx: 1.014
                },
                "24": {
                    sx: 1.009
                },
                "25": {
                    sx: 1.005
                },
                "26": {
                    sx: 1.003
                },
                "27": {
                    sx: 1.001
                },
                "28": {
                    sx: 1
                },
                "32": {
                    sx: 1.001
                },
                "33": {
                    sx: 1.006
                },
                "34": {
                    sx: 1.013
                },
                "35": {
                    sx: 1.022
                },
                "36": {
                    sx: 1.029
                },
                "37": {
                    sx: 1.033
                },
                "38": {
                    sx: 1.035
                },
                "39": {
                    sx: 1.033
                },
                "40": {
                    sx: 1.029
                },
                "41": {
                    sx: 1.022
                },
                "42": {
                    sx: 1.013
                },
                "43": {
                    sx: 1.006
                },
                "44": {
                    sx: 1.001
                },
                "45": {
                    sx: 1
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
        var instance1 = new Sprite(fromFrame("assets_Bitmap 102"))
            .setTransform(-65, -61);
        this.addChild(instance1);
    });

    lib.Tail_PufferFish = makeObj("Container", 'Tail_PufferFish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 103"))
            .setTransform(-18, -1);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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
        var instance1 = new Sprite(fromFrame("assets_Bitmap 104"))
            .setTransform(-65, -66);
        this.addChild(instance1);
    });

    lib.Tail_PorcupineFish = makeObj("Container", 'Tail_PorcupineFish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 105"))
            .setTransform(-18, -1);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Onifugu = makeObj("Container", 'Body_Onifugu', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 106"))
            .setTransform(-65, -65);
        this.addChild(instance1);
    });

    lib.Tail_Onifugu = makeObj("Container", 'Tail_Onifugu', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 107"))
            .setTransform(-18, -1);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Dolphin = makeObj("Container", 'Body_Dolphin', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 108"))
            .setTransform(-63, -49);
        this.addChild(instance1);
    });

    lib.Tail_Dolphin = makeObj("Container", 'Tail_Dolphin', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 109"))
            .setTransform(-29, -1);
        this.addChild(instance1);
    });

    lib.Animated_Dolphin = makeObj("MovieClip", 'Animated_Dolphin',{
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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
        var instance1 = new Sprite(fromFrame("assets_Bitmap 110"))
            .setTransform(-63, -49);
        this.addChild(instance1);
    });

    lib.Tail_Dolphin_Miami = makeObj("Container", 'Tail_Dolphin_Miami', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 111"))
            .setTransform(-29, -1);
        this.addChild(instance1);
    });

    lib.Animated_MiamiDolphin = makeObj("MovieClip", 'Animated_MiamiDolphin',{
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Dolphin_Spinner = makeObj("Container", 'Body_Dolphin_Spinner', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 112"))
            .setTransform(-63, -49);
        this.addChild(instance1);
    });

    lib.Tail_Dolphin_Spinner = makeObj("Container", 'Tail_Dolphin_Spinner', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 113"))
            .setTransform(-29, -1);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Goldfish = makeObj("Container", 'Body_Goldfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 114"))
            .setTransform(-60, -54);
        this.addChild(instance1);
    });

    lib.Tail_Goldfish = makeObj("Container", 'Tail_Goldfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 115"))
            .setTransform(-60, -56);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Goldenfish = makeObj("Container", 'Body_Goldenfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 116"))
            .setTransform(-60, -55);
        this.addChild(instance1);
    });

    lib.Tail_Goldenfish = makeObj("Container", 'Tail_Goldenfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 117"))
            .setTransform(-60, -56);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Diamondfish = makeObj("Container", 'Body_Diamondfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 118"))
            .setTransform(-60, -55);
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
        var instance2 = new lib.Tail_Goldfish();
        var instance1 = new lib.Body_Diamondfish();
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Narwhal = makeObj("Container", 'Body_Narwhal', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 119"))
            .setTransform(-62, -49);
        this.addChild(instance1);
    });

    lib.Tail_Narwhal = makeObj("Container", 'Tail_Narwhal', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 120"))
            .setTransform(-29, -1);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Beluga = makeObj("Container", 'Body_Beluga', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 121"))
            .setTransform(-62, -49);
        this.addChild(instance1);
    });

    lib.Tail_Beluga = makeObj("Container", 'Tail_Beluga', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 158"))
            .setTransform(-29, -1);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Archbeluga = makeObj("Container", 'Body_Archbeluga', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 159"))
            .setTransform(-65, -53);
        this.addChild(instance1);
    });

    lib.Tail_Archbeluga = makeObj("Container", 'Tail_Archbeluga', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 160"))
            .setTransform(-31, -3);
        this.addChild(instance1);
    });

    lib.Animated_Archbeluga = makeObj("MovieClip", 'Animated_Archbeluga',{
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_DumboOctopus = makeObj("Container", 'Body_DumboOctopus', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 161"))
            .setTransform(-45, -49);
        this.addChild(instance1);
    });

    lib.Tail_DumboOctopus = makeObj("Container", 'Tail_DumboOctopus', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 162"))
            .setTransform(-50, -4);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 25, loop: false });
        var instance1 = new Sprite(fromFrame("assets_Bitmap 242"))
            .setTransform(-9, -9);
        this.addTimedChild(instance1);
    });

    lib.Animated_Octopus = makeObj("MovieClip", 'Animated_Octopus',{
            duration: 25,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 21,
                dead: 23
            }
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame("assets_Bitmap 229"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 230"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 241"));
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        var instance5 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
            .setTransform(-43, -36);
        this.addTimedChild(instance3, 0, 25, {
                "0": {
                    x: -47,
                    y: -49
                }
            })
            .addTimedChild(instance2, 0, 21, {
                "0": {
                    x: -38,
                    y: 37
                }
            })
            .addTimedChild(instance4, 21, 4, {
                "21": {
                    x: -38,
                    y: 37,
                    kx: 0
                },
                "23": {
                    x: -38.25,
                    y: 38.15,
                    kx: 0.358
                }
            })
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

    lib.Body_Kraken = makeObj("Container", 'Body_Kraken', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 243"))
            .setTransform(-72, -50);
        this.addChild(instance1);
    });

    lib.Tail_Kraken = makeObj("Container", 'Tail_Kraken', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 245"))
            .setTransform(-60, 10);
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
        var instance2 = new lib.Tail_Kraken();
        var instance1 = new lib.Body_Kraken();
        var instance4 = new Sprite(fromFrame("assets_DeadEyeStoneSmall"))
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
            .addTimedChild(instance2, 0, 78, {
                "0": {
                    x: 0,
                    y: 15.05,
                    r: 0
                },
                "2": {
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
            .addTimedChild(instance4, 77, 1)
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

    lib.Body_MorayEel = makeObj("Container", 'Body_MorayEel', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 251"))
            .setTransform(-52, -68);
        this.addChild(instance1);
    });

    lib.Tail_MorayEel = makeObj("Container", 'Tail_MorayEel', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 252"))
            .setTransform(-13, -13);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_GulperEel = makeObj("Container", 'Body_GulperEel', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 253"))
            .setTransform(-57, -58);
        this.addChild(instance1);
    });

    lib.Tail_GulperEel = makeObj("Container", 'Tail_GulperEel', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 254"))
            .setTransform(-5, -9);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneSmall"))
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

    lib.Body_ElectricEel = makeObj("Container", 'Body_ElectricEel', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 255"))
            .setTransform(-55, -49);
        this.addChild(instance1);
    });

    lib.Tail_ElectricEel = makeObj("Container", 'Tail_ElectricEel', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 257"))
            .setTransform(-11, -16);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Tail_SeaTurtle = makeObj("Container", 'Tail_SeaTurtle', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 259"))
            .setTransform(-8, -8);
        this.addChild(instance1);
    });

    lib.Animated_SeaTurtle = makeObj("MovieClip", 'Animated_SeaTurtle',{
            duration: 85,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 81,
                dead: 83
            }
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame("assets_Bitmap 258"))
            .setTransform(-47, -54);
        var instance2 = new lib.Tail_SeaTurtle();
        var instance1 = new lib.Tail_SeaTurtle();
        var instance4 = new Sprite(fromFrame("assets_DeadEyeStoneSmall"))
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

    lib.Tail_LeatherbackTurtle = makeObj("Container", 'Tail_LeatherbackTurtle', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 261"))
            .setTransform(-7, -9);
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
        var instance3 = new Sprite(fromFrame("assets_Bitmap 260"))
            .setTransform(-48, -52);
        var instance2 = new lib.Tail_LeatherbackTurtle();
        var instance1 = new lib.Tail_LeatherbackTurtle();
        var instance4 = new Sprite(fromFrame("assets_DeadEyeStoneSmall"))
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

    lib.Tail_SnappingTurtle = makeObj("Container", 'Tail_SnappingTurtle', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 266"))
            .setTransform(-7, -7);
        this.addChild(instance1);
    });

    lib.Animated_SnappingTurtle = makeObj("MovieClip", 'Animated_SnappingTurtle',{
            duration: 35,
            labels: {
                idle: 0,
                move: 2,
                "skill1": 31,
                dead: 33
            }
        }, function(){
		this.stop()
        var instance3 = new lib.Tail_SnappingTurtle();
        var instance6 = new lib.Tail_SnappingTurtle()
            .setTransform(0, 44.4, 1, 1, -0.397);
        var instance2 = new Sprite(fromFrame("assets_Bitmap 265"));
        var instance1 = new Sprite(fromFrame("assets_Bitmap 264"));
        var instance5 = new Sprite(fromFrame("assets_Bitmap 264"))
            .setTransform(-71, -53);
        var instance4 = new Sprite(fromFrame("assets_DeadEyeStoneSmall"))
            .setTransform(-33, -37);
        this.addTimedChild(instance3, 0, 31, {
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
            .addTimedChild(instance6, 33, 2)
            .addTimedChild(instance2, 0, 35, {
                "0": {
                    x: -58,
                    y: -60
                }
            })
            .addTimedChild(instance1, 0, 31, {
                "0": {
                    x: -71,
                    y: -53
                }
            })
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

    lib.Body_StingRay = makeObj("Container", 'Body_StingRay', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 36"))
            .setTransform(-67, -51);
        this.addChild(instance1);
    });

    lib.Tail_Stingray = makeObj("Container", 'Tail_Stingray', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 39"))
            .setTransform(-11, -6);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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
        var instance1 = new Sprite(fromFrame("assets_Bitmap 41"))
            .setTransform(-68, -50);
        this.addChild(instance1);
    });

    lib.Tail_BatRay = makeObj("Container", 'Tail_BatRay', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 42"))
            .setTransform(-11, -9);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_ElectricRay = makeObj("Container", 'Body_ElectricRay', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 55"))
            .setTransform(-61, -49);
        this.addChild(instance1);
    });

    lib.Tail_ElectricRay = makeObj("Container", 'Tail_ElectricRay', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 68"))
            .setTransform(-11, 9);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_SakuraShrimp = makeObj("Container", 'Body_SakuraShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 77"))
            .setTransform(-63, -72);
        this.addChild(instance1);
    });

    lib.Tail_SakuraShrimp = makeObj("Container", 'Tail_SakuraShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 268"))
            .setTransform(-26, 3);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_PistolShrimp = makeObj("Container", 'Body_PistolShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 269"))
            .setTransform(-72, -97);
        this.addChild(instance1);
    });

    lib.Tail_PistolShrimp = makeObj("Container", 'Tail_PistolShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 270"))
            .setTransform(-26, 3);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.MantisShrimpLegSymbol = makeObj("Container", 'MantisShrimpLegSymbol', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 275"))
            .setTransform(-28, -9);
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
        var instance1 = new Sprite(fromFrame("assets_Bitmap 272"))
            .setTransform(-76, -56);
        this.addChild(instance1);
    });

    lib.Tail_MantisShrimp = makeObj("Container", 'Tail_MantisShrimp', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 273"))
            .setTransform(-36);
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
        var instance4 = new Sprite(fromFrame("assets_DeadEyeStoneSmall"))
            .setTransform(-28, -45, 0.837, 0.837);
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

    lib.Body_FirebellyNewt = makeObj("Container", 'Body_FirebellyNewt', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 280"))
            .setTransform(-58, -48);
        this.addChild(instance1);
    });

    lib.Tail_FirebellyNewt = makeObj("Container", 'Tail_FirebellyNewt', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 281"))
            .setTransform(-11, -7);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_FireSalamander = makeObj("Container", 'Body_FireSalamander', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 286"))
            .setTransform(-58, -48);
        this.addChild(instance1);
    });

    lib.Tail_FireSalamander = makeObj("Container", 'Tail_FireSalamander', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 287"))
            .setTransform(-11, -5);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Axolotl = makeObj("Container", 'Body_Axolotl', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 289"))
            .setTransform(-67, -48);
        this.addChild(instance1);
    });

    lib.Tail_Axolotl = makeObj("Container", 'Tail_Axolotl', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 288"))
            .setTransform(-23, -30);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
            .setTransform(-43, -34);
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

    lib.Body_VampireSquid = makeObj("Container", 'Body_VampireSquid', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 297"))
            .setTransform(-56, -50);
        this.addChild(instance1);
    });

    lib.Tail_VampireSquid = makeObj("Container", 'Tail_VampireSquid', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 298"))
            .setTransform(-60, -13);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Cuttlefish = makeObj("Container", 'Body_Cuttlefish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 301"))
            .setTransform(-42, -49);
        this.addChild(instance1);
    });

    lib.Tail_Cuttlefish = makeObj("Container", 'Tail_Cuttlefish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 300"))
            .setTransform(-65);
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
        var instance3 = new Sprite(fromFrame("assets_Bitmap 299"))
            .setTransform(-65, -31);
        var instance2 = new lib.Tail_Cuttlefish();
        var instance1 = new lib.Body_Cuttlefish();
        var instance4 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
            .setTransform(-43, -34);
        this.addTimedChild(instance3)
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
            .addTimedChild(instance4, 47, 1)
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
        var instance1 = new Sprite(fromFrame("assets_Bitmap 304"))
            .setTransform(-46, -53);
        this.addChild(instance1);
    });

    lib.Tail_ColossalSquid = makeObj("Container", 'Tail_ColossalSquid', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 303"))
            .setTransform(-49, -15);
        this.addChild(instance1);
    });

    lib.ColossalSquidTentacles = makeObj("Container", 'ColossalSquidTentacles', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 302"))
            .setTransform(-25);
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
        var instance4 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Swordfish = makeObj("Container", 'Body_Swordfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 284"))
            .setTransform(-73, -68);
        this.addChild(instance1);
    });

    lib.Tail_Swordfish = makeObj("Container", 'Tail_Swordfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 312"))
            .setTransform(-30, 2);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Marlin = makeObj("Container", 'Body_Marlin', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 313"))
            .setTransform(-73, -74);
        this.addChild(instance1);
    });

    lib.Tail_Marlin = makeObj("Container", 'Tail_Marlin', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 314"))
            .setTransform(-30, 2);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Sailfish = makeObj("Container", 'Body_Sailfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 315"))
            .setTransform(-73, -81);
        this.addChild(instance1);
    });

    lib.Tail_Sailfish = makeObj("Container", 'Tail_Sailfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 316"))
            .setTransform(-30, 2);
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
        var instance2 = new lib.Tail_Sailfish();
        var instance1 = new lib.Body_Sailfish();
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_BlueCrab = makeObj("Container", 'Body_BlueCrab', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 325"))
            .setTransform(-63, -51);
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
        var instance2 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_KingCrab = makeObj("Container", 'Body_KingCrab', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 326"))
            .setTransform(-75, -59);
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
        var instance2 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_SpiderCrab = makeObj("Container", 'Body_SpiderCrab', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 335"))
            .setTransform(-77, -57);
        this.addChild(instance1);
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
        var instance2 = new lib.Body_SpiderCrab();
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
            .setTransform(-43, -34);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 332"))
            .setTransform(-81, -59);
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

    lib.Body_Crocodile = makeObj("Container", 'Body_Crocodile', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 344"))
            .setTransform(-60, -54);
        this.addChild(instance1);
    });

    lib.Tail_Crocodile = makeObj("Container", 'Tail_Crocodile', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 345"))
            .setTransform(-18, -7);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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
        var instance1 = new Sprite(fromFrame("assets_Bitmap 346"))
            .setTransform(-72, -54);
        this.addChild(instance1);
    });

    lib.Tail_Kronosaurus = makeObj("Container", 'Tail_Kronosaurus', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 347"))
            .setTransform(-16, -13);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Mosasaurus = makeObj("Container", 'Body_Mosasaurus', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 348"))
            .setTransform(-72, -56);
        this.addChild(instance1);
    });

    lib.Tail_Mosasaurus = makeObj("Container", 'Tail_Mosasaurus', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 349"))
            .setTransform(-18, -13);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Koi = makeObj("Container", 'Body_Koi', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 322"))
            .setTransform(-67, -48);
        this.addChild(instance1);
    });

    lib.Tail_Koi = makeObj("Container", 'Tail_Koi', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 327"))
            .setTransform(-29);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Oarfish = makeObj("Container", 'Body_Oarfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 328"))
            .setTransform(-51, -85);
        this.addChild(instance1);
    });

    lib.Tail_Oarfish = makeObj("Container", 'Tail_Oarfish', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 333"))
            .setTransform(-20, -16);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.Body_Dragon = makeObj("Container", 'Body_Dragon', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 338"))
            .setTransform(-72, -66);
        this.addChild(instance1);
    });

    lib.Tail_Dragon = makeObj("Container", 'Tail_Dragon', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 340"))
            .setTransform(-22, 3);
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
        var instance3 = new Sprite(fromFrame("assets_DeadEyeStoneBig"))
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

    lib.AllBodies = makeObj("MovieClip", 'AllBodies',{
            duration: 61
        }, function(){
		this.stop()
        var instance1 = new lib.Animated_Shark();
        this[instance1.name = "body"] = instance1;
        var instance2 = new lib.Animated_KillerWhale();
        this[instance2.name = "body"] = instance2;
        var instance3 = new lib.Animated_HammerHead();
        this[instance3.name = "body"] = instance3;
        var instance4 = new lib.Animated_GreatWhiteShark();
        this[instance4.name = "body"] = instance4;
        var instance5 = new lib.Animated_SerialKillerWhale();
        this[instance5.name = "body"] = instance5;
        var instance6 = new lib.Animated_HammeredHead();
        this[instance6.name = "body"] = instance6;
        var instance7 = new lib.Animated_Megalodon();
        this[instance7.name = "body"] = instance7;
        var instance8 = new lib.Animated_PsychoKillerWhale();
        this[instance8.name = "body"] = instance8;
        var instance9 = new lib.Animated_Hammered();
        this[instance9.name = "body"] = instance9;
        var instance10 = new lib.Animated_Whale();
        this[instance10.name = "body"] = instance10;
        var instance11 = new lib.Animated_BlueWhale();
        this[instance11.name = "body"] = instance11;
        var instance12 = new lib.Animated_Jomama();
        this[instance12.name = "body"] = instance12;
        var instance13 = new lib.Animated_MantaRay();
        this[instance13.name = "body"] = instance13;
        var instance14 = new lib.Animated_MantraRay();
        this[instance14.name = "body"] = instance14;
        var instance15 = new lib.Animated_BlueRay();
        this[instance15.name = "body"] = instance15;
        var instance16 = new lib.Animated_Pufferfish();
        this[instance16.name = "body"] = instance16;
        var instance17 = new lib.Animated_PorcupineFish();
        this[instance17.name = "body"] = instance17;
        var instance18 = new lib.Animated_Onifugu();
        this[instance18.name = "body"] = instance18;
        var instance19 = new lib.Animated_Dolphin();
        this[instance19.name = "body"] = instance19;
        var instance20 = new lib.Animated_MiamiDolphin();
        this[instance20.name = "body"] = instance20;
        var instance21 = new lib.Animated_SpinnerDolphin();
        this[instance21.name = "body"] = instance21;
        var instance22 = new lib.Animated_Goldfish();
        this[instance22.name = "body"] = instance22;
        var instance23 = new lib.Animated_Goldenfish();
        this[instance23.name = "body"] = instance23;
        var instance24 = new lib.Animated_Diamondfish();
        this[instance24.name = "body"] = instance24;
        var instance25 = new lib.Animated_Narwhal();
        this[instance25.name = "body"] = instance25;
        var instance26 = new lib.Animated_Beluga();
        this[instance26.name = "body"] = instance26;
        var instance27 = new lib.Animated_Archbeluga();
        this[instance27.name = "body"] = instance27;
        var instance28 = new lib.Animated_DumboOctopus();
        this[instance28.name = "body"] = instance28;
        var instance29 = new lib.Animated_Octopus();
        this[instance29.name = "body"] = instance29;
        var instance30 = new lib.Animated_Kraken();
        this[instance30.name = "body"] = instance30;
        var instance31 = new lib.Animated_MorayEel();
        this[instance31.name = "body"] = instance31;
        var instance32 = new lib.Animated_GulperEel();
        this[instance32.name = "body"] = instance32;
        var instance33 = new lib.Animated_ElectricEel();
        this[instance33.name = "body"] = instance33;
        var instance34 = new lib.Animated_SeaTurtle();
        this[instance34.name = "body"] = instance34;
        var instance35 = new lib.Animated_LeatherbackTurtle();
        this[instance35.name = "body"] = instance35;
        var instance36 = new lib.Animated_SnappingTurtle();
        this[instance36.name = "body"] = instance36;
        var instance37 = new lib.Animated_StingRay();
        this[instance37.name = "body"] = instance37;
        var instance38 = new lib.Animated_BatRay();
        this[instance38.name = "body"] = instance38;
        var instance39 = new lib.Animated_ElectricRay();
        this[instance39.name = "body"] = instance39;
        var instance40 = new lib.Animated_SakuraShrimp();
        this[instance40.name = "body"] = instance40;
        var instance41 = new lib.Animated_PistolShrimp();
        this[instance41.name = "body"] = instance41;
        var instance42 = new lib.Animated_MantisShrimp();
        this[instance42.name = "body"] = instance42;
        var instance43 = new lib.Animated_FirebellyNewt();
        this[instance43.name = "body"] = instance43;
        var instance44 = new lib.Animated_FireSalamander();
        this[instance44.name = "body"] = instance44;
        var instance45 = new lib.Animated_Axolotl();
        this[instance45.name = "body"] = instance45;
        var instance46 = new lib.Animated_VampireSquid();
        this[instance46.name = "body"] = instance46;
        var instance47 = new lib.Animated_Cuttlefish();
        this[instance47.name = "body"] = instance47;
        var instance48 = new lib.Animated_ColossalSquid();
        this[instance48.name = "body"] = instance48;
        var instance49 = new lib.Animated_Swordfish();
        this[instance49.name = "body"] = instance49;
        var instance50 = new lib.Animated_Marlin();
        this[instance50.name = "body"] = instance50;
        var instance51 = new lib.Animated_Sailfish();
        this[instance51.name = "body"] = instance51;
        var instance52 = new lib.Animated_BlueCrab();
        this[instance52.name = "body"] = instance52;
        var instance53 = new lib.Animated_KingCrab();
        this[instance53.name = "body"] = instance53;
        var instance54 = new lib.Animated_SpiderCrab();
        this[instance54.name = "body"] = instance54;
        var instance55 = new lib.Animated_Crocodile();
        this[instance55.name = "body"] = instance55;
        var instance56 = new lib.Animated_Kronosaurus();
        this[instance56.name = "body"] = instance56;
        var instance57 = new lib.Animated_Mosasaurus();
        this[instance57.name = "body"] = instance57;
        var instance58 = new lib.Animated_Koi();
        this[instance58.name = "body"] = instance58;
        var instance59 = new lib.Animated_Oarfish();
        this[instance59.name = "body"] = instance59;
        var instance60 = new lib.Animated_Dragon();
        this[instance60.name = "body"] = instance60;
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance2, 1, 1)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 1)
            .addTimedChild(instance6, 5, 1)
            .addTimedChild(instance7, 6, 1)
            .addTimedChild(instance8, 7, 1)
            .addTimedChild(instance9, 8, 1)
            .addTimedChild(instance10, 9, 1)
            .addTimedChild(instance11, 10, 1)
            .addTimedChild(instance12, 11, 1)
            .addTimedChild(instance13, 12, 1)
            .addTimedChild(instance14, 13, 1)
            .addTimedChild(instance15, 14, 1)
            .addTimedChild(instance16, 15, 1)
            .addTimedChild(instance17, 16, 1)
            .addTimedChild(instance18, 17, 1)
            .addTimedChild(instance19, 18, 1)
            .addTimedChild(instance20, 19, 1)
            .addTimedChild(instance21, 20, 1)
            .addTimedChild(instance22, 21, 1)
            .addTimedChild(instance23, 22, 1)
            .addTimedChild(instance24, 23, 1)
            .addTimedChild(instance25, 24, 1)
            .addTimedChild(instance26, 25, 1)
            .addTimedChild(instance27, 26, 1)
            .addTimedChild(instance28, 27, 1)
            .addTimedChild(instance29, 28, 1)
            .addTimedChild(instance30, 29, 2)
            .addTimedChild(instance31, 31, 1)
            .addTimedChild(instance32, 32, 1)
            .addTimedChild(instance33, 33, 1)
            .addTimedChild(instance34, 34, 1)
            .addTimedChild(instance35, 35, 1)
            .addTimedChild(instance36, 36, 1)
            .addTimedChild(instance37, 37, 1)
            .addTimedChild(instance38, 38, 1)
            .addTimedChild(instance39, 39, 1)
            .addTimedChild(instance40, 40, 1)
            .addTimedChild(instance41, 41, 1)
            .addTimedChild(instance42, 42, 1)
            .addTimedChild(instance43, 43, 1)
            .addTimedChild(instance44, 44, 1)
            .addTimedChild(instance45, 45, 1)
            .addTimedChild(instance46, 46, 1)
            .addTimedChild(instance47, 47, 1)
            .addTimedChild(instance48, 48, 1)
            .addTimedChild(instance49, 49, 1)
            .addTimedChild(instance50, 50, 1)
            .addTimedChild(instance51, 51, 1)
            .addTimedChild(instance52, 52, 1)
            .addTimedChild(instance53, 53, 1)
            .addTimedChild(instance54, 54, 1)
            .addTimedChild(instance55, 55, 1)
            .addTimedChild(instance56, 56, 1)
            .addTimedChild(instance57, 57, 1)
            .addTimedChild(instance58, 58, 1)
            .addTimedChild(instance59, 59, 1)
            .addTimedChild(instance60, 60, 1);
    });

    lib.Shield = makeObj("Container", 'Shield', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 13"))
            .setTransform(-71, -72);
        this.addChild(instance1);
    });

    lib.MiniShield = makeObj("Container", 'MiniShield', undefined, function(){
        var instance1 = new lib.Shield()
            .setTransform(0, 0, 0.75, 0.75);
        this[instance1.name = "shield"] = instance1;
        this.addChild(instance1);
    });

    lib.EmojiButton = makeObj("Container", 'EmojiButton', undefined, function(){
        var instance3 = new Sprite(fromFrame("assets_Bitmap 93"))
            .setTransform(-25, -25);
        var instance2 = new Text("O")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 30,
                fill: "#282828",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 50
            })
            .setAlign("center")
            .setTransform(0, -18.5);
        this[instance2.name = "emoji"] = instance2;
        var instance1 = new Text("1")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 10,
                fill: "#333",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 14.7
            })
            .setAlign("center")
            .setTransform(-20.949999999999996, -2.7);
        this[instance1.name = "no"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.EmojiMessageBar = makeObj("Container", 'EmojiMessageBar', undefined, function(){
        var instance2 = new Sprite(fromFrame("assets_Bitmap 180"))
            .setTransform(0, -25);
        var instance1 = new Text("OOOOOOOOOOOO killed OOOOOOOOOOOO")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 23,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 504.1
            })
            .setTransform(15.65, -16.5);
        this[instance1.name = "message"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.GradientMc = makeObj("Container", 'GradientMc', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Gradient"));
        this.addChild(instance1);
    });

    lib.BountyTarget = makeObj("MovieClip", 'BountyTarget',{
            duration: 4,
            labels: {
                "Bounty Hunting": 0,
                "Wanted Hunter": 1,
                Wanted: 2,
                Invincible: 3
            }
        }, function(){
		this.stop()
        var instance2 = new Sprite(fromFrame("assets_Bitmap 52"));
        var instance1 = new Sprite(fromFrame("assets_Bitmap 177"));
        var instance3 = new Sprite(fromFrame("assets_Bitmap 178"));
        var instance4 = new lib.Shield();
        this.addTimedChild(instance2, 0, 2, {
                "0": {
                    x: -32,
                    y: -52
                }
            })
            .addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -18,
                    y: -18
                }
            })
            .addTimedChild(instance3, 1, 2, {
                "1": {
                    x: -18,
                    y: -18
                }
            })
            .addTimedChild(instance4, 3, 1);
    });

    lib.WeaponCaseActive = makeObj("Container", 'WeaponCaseActive', undefined, function(){
        var instance1 = new Graphics()
            .drawCommands(shapes.assets[0])
            .setTransform(88, 174.95);
        this.addChild(instance1);
    });

    lib.HatCaseText = makeObj("Container", 'HatCaseText', undefined, function(){
        var instance4 = new Graphics()
            .drawCommands(shapes.assets[1])
            .setTransform(88, 174.95);
        var instance3 = new Text("Alfro")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 23,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 179.35
            })
            .setTransform(14.1, 17);
        this[instance3.name = "title"] = instance3;
        var instance2 = new Text("Common")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 16,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 165
            })
            .setTransform(16.1, 58.05);
        this[instance2.name = "rarity"] = instance2;
        var instance1 = new Text("Dropped by Hammerhead family.\nwhen killed by Killer Whale Family")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 16,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 165
            })
            .setTransform(16.1, 86.95);
        this[instance1.name = "desc"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.CaseLabel = makeObj("MovieClip", 'CaseLabel',{
            duration: 4,
            labels: {
                unlocked: 0,
                new: 1,
                none: 2,
                "coming soon": 3
            }
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Bitmap 226"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 227"));
        var instance3 = new Sprite(fromFrame("assets_Bitmap 225"))
            .setTransform(-118, -14);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -90,
                    y: -14
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -48,
                    y: -14
                }
            })
            .addTimedChild(instance3, 3, 1);
    });

    lib.Lock = makeObj("Container", 'Lock', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 59"))
            .setTransform(-25, -31);
        this.addChild(instance1);
    });

    lib.FaceCase = makeObj("Container", 'FaceCase', undefined, function(){
        var instance6 = new Graphics()
            .drawCommands(shapes.assets[2])
            .setTransform(88, 174.95);
        var instance5 = new lib.FaceCon()
            .setTransform(97.85, 154.2, 1.5, 1.5);
        this[instance5.name = "content"] = instance5;
        var instance4 = new lib.Lock()
            .setTransform(97.5, 105)
            .setAlpha(0.9);
        this[instance4.name = "lock"] = instance4;
        var instance3 = new lib.CaseLabel()
            .setTransform(196.65, 14.55);
        this[instance3.name = "label"] = instance3;
        var instance2 = new lib.HatCaseText();
        this[instance2.name = "textCon"] = instance2;
        var instance1 = new lib.WeaponCaseActive();
        this[instance1.name = "activeBorder"] = instance1;
        this.addChild(instance6, instance5, instance4, instance3, instance2, instance1); /* this.cursor = 'pointer'*/
    });

    lib.HatCase = makeObj("Container", 'HatCase', undefined, function(){
        var instance6 = new Graphics()
            .drawCommands(shapes.assets[2])
            .setTransform(88, 174.95);
        var instance5 = new lib.HatCon()
            .setTransform(97.65, 137.8, 1.4, 1.4);
        this[instance5.name = "content"] = instance5;
        var instance4 = new lib.Lock()
            .setTransform(97.5, 105)
            .setAlpha(0.9);
        this[instance4.name = "lock"] = instance4;
        var instance3 = new lib.CaseLabel()
            .setTransform(196.65, 14.55);
        this[instance3.name = "label"] = instance3;
        var instance2 = new lib.HatCaseText();
        this[instance2.name = "textCon"] = instance2;
        var instance1 = new lib.WeaponCaseActive();
        this[instance1.name = "activeBorder"] = instance1;
        this.addChild(instance6, instance5, instance4, instance3, instance2, instance1); /* this.cursor = 'pointer'*/
    });

    lib.UnlockText = makeObj("Container", 'UnlockText', undefined, function(){
        var instance3 = new Sprite(fromFrame("assets_Bitmap 19"))
            .setTransform(-220);
        var instance2 = new Text("Achieve 30 kills using Killer Whale")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fc0",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 594.1
            })
            .setAlign("center")
            .setTransform(0, 40.15);
        this[instance2.name = "desc"] = instance2;
        var instance1 = new Text("Unlock: Chill-Blade [hard]")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 27,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 594.1
            })
            .setAlign("center")
            .setTransform(0, 4);
        this[instance1.name = "title"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.VictimBody = makeObj("MovieClip", 'VictimBody',{
            duration: 62
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Bitmap 288"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 125"));
        var instance3 = new Sprite(fromFrame("assets_Bitmap 126"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 127"));
        var instance5 = new Sprite(fromFrame("assets_Bitmap 128"));
        var instance6 = new Sprite(fromFrame("assets_Bitmap 129"));
        var instance7 = new Sprite(fromFrame("assets_Bitmap 130"));
        var instance8 = new Sprite(fromFrame("assets_Bitmap 131"));
        var instance9 = new Sprite(fromFrame("assets_Bitmap 132"));
        var instance10 = new Sprite(fromFrame("assets_Bitmap 133"));
        var instance11 = new Sprite(fromFrame("assets_Bitmap 134"));
        var instance12 = new Sprite(fromFrame("assets_Bitmap 135"));
        var instance13 = new Sprite(fromFrame("assets_Bitmap 136"));
        var instance14 = new Sprite(fromFrame("assets_Bitmap 137"));
        var instance15 = new Sprite(fromFrame("assets_Bitmap 138"));
        var instance16 = new Sprite(fromFrame("assets_Bitmap 139"));
        var instance17 = new Sprite(fromFrame("assets_Bitmap 140"));
        var instance18 = new Sprite(fromFrame("assets_Bitmap 141"));
        var instance19 = new Sprite(fromFrame("assets_Bitmap 142"));
        var instance20 = new Sprite(fromFrame("assets_Bitmap 143"));
        var instance21 = new Sprite(fromFrame("assets_Bitmap 145"));
        var instance22 = new Sprite(fromFrame("assets_Bitmap 144"));
        var instance23 = new Sprite(fromFrame("assets_Bitmap 146"));
        var instance24 = new Sprite(fromFrame("assets_Bitmap 147"));
        var instance25 = new Sprite(fromFrame("assets_Bitmap 148"));
        var instance26 = new Sprite(fromFrame("assets_Bitmap 149"));
        var instance27 = new Sprite(fromFrame("assets_Bitmap 150"));
        var instance28 = new Sprite(fromFrame("assets_Bitmap 151"));
        var instance29 = new Sprite(fromFrame("assets_Bitmap 152"));
        var instance30 = new Sprite(fromFrame("assets_Bitmap 153"));
        var instance31 = new Sprite(fromFrame("assets_Bitmap 154"));
        var instance32 = new Sprite(fromFrame("assets_Bitmap 155"));
        var instance33 = new Sprite(fromFrame("assets_Bitmap 156"));
        var instance34 = new Sprite(fromFrame("assets_Bitmap 157"));
        var instance35 = new Sprite(fromFrame("assets_Bitmap 43"));
        var instance36 = new Sprite(fromFrame("assets_Bitmap 44"));
        var instance37 = new Sprite(fromFrame("assets_Bitmap 45"));
        var instance38 = new Sprite(fromFrame("assets_Bitmap 244"));
        var instance39 = new Sprite(fromFrame("assets_Bitmap 246"));
        var instance40 = new Sprite(fromFrame("assets_Bitmap 247"));
        var instance41 = new Sprite(fromFrame("assets_Bitmap 276"));
        var instance42 = new Sprite(fromFrame("assets_Bitmap 277"));
        var instance43 = new Sprite(fromFrame("assets_Bitmap 278"));
        var instance44 = new Sprite(fromFrame("assets_Bitmap 290"));
        var instance45 = new Sprite(fromFrame("assets_Bitmap 291"));
        var instance46 = new Sprite(fromFrame("assets_Bitmap 292"));
        var instance47 = new Sprite(fromFrame("assets_Bitmap 305"));
        var instance48 = new Sprite(fromFrame("assets_Bitmap 306"));
        var instance49 = new Sprite(fromFrame("assets_Bitmap 307"));
        var instance50 = new Sprite(fromFrame("assets_Bitmap 317"));
        var instance51 = new Sprite(fromFrame("assets_Bitmap 318"));
        var instance52 = new Sprite(fromFrame("assets_Bitmap 319"));
        var instance53 = new Sprite(fromFrame("assets_Bitmap 329"));
        var instance54 = new Sprite(fromFrame("assets_Bitmap 330"));
        var instance55 = new Sprite(fromFrame("assets_Bitmap 331"));
        var instance56 = new Sprite(fromFrame("assets_Bitmap 352"));
        var instance57 = new Sprite(fromFrame("assets_Bitmap 353"));
        var instance58 = new Sprite(fromFrame("assets_Bitmap 354"));
        var instance59 = new Sprite(fromFrame("assets_Bitmap 366"));
        var instance60 = new Sprite(fromFrame("assets_Bitmap 367"));
        var instance61 = new Sprite(fromFrame("assets_Bitmap 369"))
            .setTransform(-58, -53);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: 30.65,
                    y: -40,
                    sx: 1.072,
                    sy: 1.305,
                    r: 1.571
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -56,
                    y: -39
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -56,
                    y: -39
                }
            })
            .addTimedChild(instance4, 3, 1, {
                "3": {
                    x: -56,
                    y: -39
                }
            })
            .addTimedChild(instance5, 4, 1, {
                "4": {
                    x: -56,
                    y: -39
                }
            })
            .addTimedChild(instance6, 5, 1, {
                "5": {
                    x: -56,
                    y: -39
                }
            })
            .addTimedChild(instance7, 6, 1, {
                "6": {
                    x: -56,
                    y: -39
                }
            })
            .addTimedChild(instance8, 7, 1, {
                "7": {
                    x: -56,
                    y: -39
                }
            })
            .addTimedChild(instance9, 8, 1, {
                "8": {
                    x: -56,
                    y: -39
                }
            })
            .addTimedChild(instance10, 9, 1, {
                "9": {
                    x: -56,
                    y: -39
                }
            })
            .addTimedChild(instance11, 10, 1, {
                "10": {
                    x: -58,
                    y: -39
                }
            })
            .addTimedChild(instance12, 11, 1, {
                "11": {
                    x: -50,
                    y: -39
                }
            })
            .addTimedChild(instance13, 12, 1, {
                "12": {
                    x: -50,
                    y: -39
                }
            })
            .addTimedChild(instance14, 13, 1, {
                "13": {
                    x: -54,
                    y: -39
                }
            })
            .addTimedChild(instance15, 14, 1, {
                "14": {
                    x: -54,
                    y: -39
                }
            })
            .addTimedChild(instance16, 15, 1, {
                "15": {
                    x: -58,
                    y: -43
                }
            })
            .addTimedChild(instance17, 16, 1, {
                "16": {
                    x: -52,
                    y: -49
                }
            })
            .addTimedChild(instance18, 17, 1, {
                "17": {
                    x: -52,
                    y: -53
                }
            })
            .addTimedChild(instance19, 18, 1, {
                "18": {
                    x: -52,
                    y: -52
                }
            })
            .addTimedChild(instance20, 19, 1, {
                "19": {
                    x: -50,
                    y: -39
                }
            })
            .addTimedChild(instance21, 20, 1, {
                "20": {
                    x: -50,
                    y: -39
                }
            })
            .addTimedChild(instance22, 21, 1, {
                "21": {
                    x: -50,
                    y: -39
                }
            })
            .addTimedChild(instance23, 22, 1, {
                "22": {
                    x: -48,
                    y: -43
                }
            })
            .addTimedChild(instance24, 23, 1, {
                "23": {
                    x: -48,
                    y: -44
                }
            })
            .addTimedChild(instance25, 24, 1, {
                "24": {
                    x: -48,
                    y: -39
                }
            })
            .addTimedChild(instance26, 25, 1, {
                "25": {
                    x: -50,
                    y: -39
                }
            })
            .addTimedChild(instance27, 26, 1, {
                "26": {
                    x: -50,
                    y: -39
                }
            })
            .addTimedChild(instance28, 27, 1, {
                "27": {
                    x: -52,
                    y: -42
                }
            })
            .addTimedChild(instance29, 28, 1, {
                "28": {
                    x: -40,
                    y: -39
                }
            })
            .addTimedChild(instance30, 29, 1, {
                "29": {
                    x: -38,
                    y: -39
                }
            })
            .addTimedChild(instance31, 30, 1, {
                "30": {
                    x: -58,
                    y: -40
                }
            })
            .addTimedChild(instance32, 32, 1, {
                "32": {
                    x: -42,
                    y: -54
                }
            })
            .addTimedChild(instance33, 33, 1, {
                "33": {
                    x: -46,
                    y: -46
                }
            })
            .addTimedChild(instance34, 34, 1, {
                "34": {
                    x: -44,
                    y: -39
                }
            })
            .addTimedChild(instance35, 35, 1, {
                "35": {
                    x: -55,
                    y: -43
                }
            })
            .addTimedChild(instance36, 36, 1, {
                "36": {
                    x: -54,
                    y: -42
                }
            })
            .addTimedChild(instance37, 37, 1, {
                "37": {
                    x: -57,
                    y: -48
                }
            })
            .addTimedChild(instance38, 38, 1, {
                "38": {
                    x: -43,
                    y: -41
                }
            })
            .addTimedChild(instance39, 39, 1, {
                "39": {
                    x: -38,
                    y: -40
                }
            })
            .addTimedChild(instance40, 40, 1, {
                "40": {
                    x: -45,
                    y: -39
                }
            })
            .addTimedChild(instance41, 41, 1, {
                "41": {
                    x: -40,
                    y: -58
                }
            })
            .addTimedChild(instance42, 42, 1, {
                "42": {
                    x: -58,
                    y: -78
                }
            })
            .addTimedChild(instance43, 43, 1, {
                "43": {
                    x: -61,
                    y: -45
                }
            })
            .addTimedChild(instance44, 44, 1, {
                "44": {
                    x: -46,
                    y: -38
                }
            })
            .addTimedChild(instance45, 45, 1, {
                "45": {
                    x: -46,
                    y: -38
                }
            })
            .addTimedChild(instance46, 46, 1, {
                "46": {
                    x: -54,
                    y: -38
                }
            })
            .addTimedChild(instance47, 47, 1, {
                "47": {
                    x: -48,
                    y: -40
                }
            })
            .addTimedChild(instance48, 48, 1, {
                "48": {
                    x: -52,
                    y: -39
                }
            })
            .addTimedChild(instance49, 49, 1, {
                "49": {
                    x: -39,
                    y: -45
                }
            })
            .addTimedChild(instance50, 50, 1, {
                "50": {
                    x: -58,
                    y: -54
                }
            })
            .addTimedChild(instance51, 51, 1, {
                "51": {
                    x: -58,
                    y: -59
                }
            })
            .addTimedChild(instance52, 52, 1, {
                "52": {
                    x: -58,
                    y: -65
                }
            })
            .addTimedChild(instance53, 53, 1, {
                "53": {
                    x: -50,
                    y: -41
                }
            })
            .addTimedChild(instance54, 54, 1, {
                "54": {
                    x: -60,
                    y: -47
                }
            })
            .addTimedChild(instance55, 55, 1, {
                "55": {
                    x: -65,
                    y: -47
                }
            })
            .addTimedChild(instance56, 56, 1, {
                "56": {
                    x: -48,
                    y: -43
                }
            })
            .addTimedChild(instance57, 57, 1, {
                "57": {
                    x: -58,
                    y: -43
                }
            })
            .addTimedChild(instance58, 58, 1, {
                "58": {
                    x: -58,
                    y: -45
                }
            })
            .addTimedChild(instance59, 59, 1, {
                "59": {
                    x: -54,
                    y: -38
                }
            })
            .addTimedChild(instance60, 60, 1, {
                "60": {
                    x: -41,
                    y: -68
                }
            })
            .addTimedChild(instance61, 61, 1);
    });

    lib.VictimColorAdjustable = makeObj("Container", 'VictimColorAdjustable', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 54"))
            .setTransform(-42, -45);
        this.addChild(instance1);
    });

    lib.Victim = makeObj("Container", 'Victim', undefined, function(){
        var instance4 = new Graphics()
            .drawCommands(shapes.assets[3])
            .setRenderable(false);
        var instance5 = new lib.HatCon()
            .setTransform(-33.2, 0, 0.8, 0.8, 1.571)
            .setMask(instance4);
        this[instance5.name = "hatCon"] = instance5;
        var instance3 = new lib.VictimColorAdjustable()
            .setTransform(-33, 0, 1, 1, 1.571);
        this[instance3.name = "teamCon"] = instance3;
        var instance2 = new lib.VictimBody()
            .setTransform(-33, 0, 1, 1, 1.571);
        this[instance2.name = "bodyCon"] = instance2;
        var instance1 = new lib.FaceCon()
            .setTransform(-33.2, 0, 0.8, 0.8, 1.571);
        this[instance1.name = "faceCon"] = instance1;
        this.addChild(instance4, instance5, instance3, instance2, instance1);
    });

    lib.ChainBonusYellow = makeObj("Container", 'ChainBonusYellow', undefined, function(){
        var instance1 = new Text("Chain Bonus +99999")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 35,
                fill: "#fc0",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 319.1
            })
            .setAlign("center")
            .setTransform(1.4210854715202004e-14, -35.85);
        this[instance1.name = "text1"] = instance1;
        this.addChild(instance1);
    });

    lib.ChainBonusRed = makeObj("Container", 'ChainBonusRed', undefined, function(){
        var instance1 = new Text("Chain Bonus +99999")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 35,
                fill: "#f03",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 319.1
            })
            .setAlign("center")
            .setTransform(1.4210854715202004e-14, -35.85);
        this[instance1.name = "text2"] = instance1;
        this.addChild(instance1);
    });

    lib.ChainBonusGreen = makeObj("Container", 'ChainBonusGreen', undefined, function(){
        var instance1 = new Text("Chain Bonus +99999")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 35,
                fill: "#096",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 319.1
            })
            .setAlign("center")
            .setTransform(1.4210854715202004e-14, -35.85);
        this[instance1.name = "text3"] = instance1;
        this.addChild(instance1);
    });

    lib.ChainBonusPurple = makeObj("Container", 'ChainBonusPurple', undefined, function(){
        var instance1 = new Text("Chain Bonus +99999")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 35,
                fill: "#63c",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 319.1
            })
            .setAlign("center")
            .setTransform(1.4210854715202004e-14, -35.85);
        this[instance1.name = "text4"] = instance1;
        this.addChild(instance1);
    });

    lib.ChainBonusText = makeObj("MovieClip", 'ChainBonusText',{
            duration: 53
        }, function(){
		this.stop()
        var instance4 = new lib.ChainBonusPurple();
        var instance3 = new lib.ChainBonusGreen();
        var instance2 = new lib.ChainBonusRed();
        var instance1 = new lib.ChainBonusYellow();
        this.addTimedChild(instance4, 0, 53, {
                "0": {
                    x: 3,
                    y: 13.85
                },
                "1": {
                    x: 3.15,
                    y: 10.5
                },
                "2": {
                    x: 3.35,
                    y: 7.2
                },
                "3": {
                    x: 3.5,
                    y: 3.85
                },
                "4": {
                    x: 3.4,
                    y: 3.75
                },
                "5": {
                    x: 3.35,
                    y: 3.7
                },
                "6": {
                    x: 3.25,
                    y: 3.6
                },
                "7": {
                    x: 3,
                    y: 3.35
                },
                "8": {
                    x: 2.7,
                    y: 3.05
                },
                "9": {
                    x: 2.45,
                    y: 2.8
                },
                "10": {
                    x: 2.2,
                    y: 2.55
                },
                "11": {
                    x: 2,
                    y: 2.35
                },
                "12": {
                    x: 1.75,
                    y: 2.1
                },
                "13": {
                    x: 2.1,
                    y: 2.45
                },
                "14": {
                    x: 2.4,
                    y: 2.75
                },
                "15": {
                    x: 2.75,
                    y: 3.1
                },
                "16": {
                    x: 2.65,
                    y: 3
                },
                "17": {
                    x: 2.5,
                    y: 2.85
                },
                "18": {
                    x: 2.4,
                    y: 2.75
                },
                "19": {
                    x: 2.3,
                    y: 2.65
                },
                "20": {
                    x: 2.2,
                    y: 2.55
                },
                "21": {
                    x: 2.1,
                    y: 2.45
                },
                "22": {
                    x: 2.25,
                    y: 2.6
                },
                "23": {
                    x: 2.35,
                    y: 2.7
                },
                "24": {
                    x: 2.5,
                    y: 2.85
                },
                "25": {
                    x: 2.45,
                    y: 2.8
                },
                "26": {
                    x: 2.4,
                    y: 2.75
                },
                "27": {
                    x: 2.35,
                    y: 2.7
                },
                "28": {
                    x: 2.3,
                    y: 2.65
                },
                "30": {
                    x: 2.25,
                    y: 2.6
                },
                "31": {
                    x: 2.3,
                    y: 2.65
                },
                "32": {
                    x: 2.35,
                    y: 2.7
                },
                "33": {
                    x: 2.4,
                    y: 2.75
                },
                "35": {
                    x: 2.35,
                    y: 2.7
                },
                "38": {
                    x: 2.3,
                    y: 2.65
                },
                "41": {
                    x: 2.35,
                    y: 2.7
                }
            })
            .addTimedChild(instance3, 0, 53, {
                "0": {
                    x: 3,
                    y: 13.85
                },
                "1": {
                    x: 3.25,
                    y: 10.5
                },
                "2": {
                    x: 3.5,
                    y: 7.2
                },
                "3": {
                    x: 3.75,
                    y: 3.85
                },
                "4": {
                    x: 2.95,
                    y: 3.05
                },
                "5": {
                    x: 2.2,
                    y: 2.3
                },
                "6": {
                    x: 1.4,
                    y: 1.5
                },
                "7": {
                    x: 1,
                    y: 1.1
                },
                "8": {
                    x: 0.6,
                    y: 0.7
                },
                "9": {
                    x: 0.2,
                    y: 0.3
                },
                "10": {
                    x: -0.15,
                    y: -0.05
                },
                "11": {
                    x: -0.55,
                    y: -0.45
                },
                "12": {
                    x: -0.9,
                    y: -0.8
                },
                "13": {
                    x: -0.4,
                    y: -0.3
                },
                "14": {
                    x: 0.1,
                    y: 0.2
                },
                "15": {
                    x: 0.6,
                    y: 0.7
                },
                "16": {
                    x: 0.45,
                    y: 0.55
                },
                "17": {
                    x: 0.25,
                    y: 0.35
                },
                "18": {
                    x: 0.1,
                    y: 0.2
                },
                "19": {
                    x: -0.05,
                    y: 0.05
                },
                "20": {
                    x: -0.2,
                    y: -0.1
                },
                "21": {
                    x: -0.35,
                    y: -0.25
                },
                "22": {
                    x: -0.15,
                    y: -0.05
                },
                "23": {
                    x: 0,
                    y: 0.1
                },
                "24": {
                    x: 0.2,
                    y: 0.3
                },
                "25": {
                    x: 0.15,
                    y: 0.25
                },
                "26": {
                    x: 0.1,
                    y: 0.2
                },
                "27": {
                    x: 0.05,
                    y: 0.15
                },
                "28": {
                    x: 0,
                    y: 0.1
                },
                "29": {
                    x: -0.05,
                    y: 0.05
                },
                "30": {
                    x: -0.1,
                    y: 0
                },
                "31": {
                    x: -0.05,
                    y: 0.05
                },
                "32": {
                    x: 0.05,
                    y: 0.15
                },
                "33": {
                    x: 0.1,
                    y: 0.2
                },
                "34": {
                    x: 0.05,
                    y: 0.15
                },
                "36": {
                    x: 0,
                    y: 0.1
                },
                "38": {
                    x: -0.05,
                    y: 0.05
                },
                "40": {
                    x: 0,
                    y: 0.1
                },
                "42": {
                    x: 0.05,
                    y: 0.15
                },
                "44": {
                    x: 0,
                    y: 0.1
                }
            })
            .addTimedChild(instance2, 0, 53, {
                "0": {
                    x: 3,
                    y: 13.85
                },
                "1": {
                    x: 3.15,
                    y: 10.5
                },
                "2": {
                    x: 3.35,
                    y: 7.2
                },
                "3": {
                    x: 3.5,
                    y: 3.85
                },
                "4": {
                    x: 2,
                    y: 2.35
                },
                "5": {
                    x: 0.5,
                    y: 0.85
                },
                "6": {
                    x: -1,
                    y: -0.65
                },
                "7": {
                    x: -1.55,
                    y: -1.2
                },
                "8": {
                    x: -2.05,
                    y: -1.7
                },
                "9": {
                    x: -2.6,
                    y: -2.25
                },
                "10": {
                    x: -3.1,
                    y: -2.75
                },
                "11": {
                    x: -3.55,
                    y: -3.2
                },
                "12": {
                    x: -4.05,
                    y: -3.7
                },
                "13": {
                    x: -3.4,
                    y: -3.05
                },
                "14": {
                    x: -2.7,
                    y: -2.35
                },
                "15": {
                    x: -2.05,
                    y: -1.7
                },
                "16": {
                    x: -2.3,
                    y: -1.95
                },
                "17": {
                    x: -2.5,
                    y: -2.15
                },
                "18": {
                    x: -2.75,
                    y: -2.4
                },
                "19": {
                    x: -2.95,
                    y: -2.6
                },
                "20": {
                    x: -3.1,
                    y: -2.75
                },
                "21": {
                    x: -3.3,
                    y: -2.95
                },
                "22": {
                    x: -3.05,
                    y: -2.7
                },
                "23": {
                    x: -2.8,
                    y: -2.45
                },
                "24": {
                    x: -2.55,
                    y: -2.2
                },
                "25": {
                    x: -2.65,
                    y: -2.3
                },
                "26": {
                    x: -2.7,
                    y: -2.35
                },
                "27": {
                    x: -2.8,
                    y: -2.45
                },
                "28": {
                    x: -2.85,
                    y: -2.5
                },
                "29": {
                    x: -2.95,
                    y: -2.6
                },
                "30": {
                    x: -3,
                    y: -2.65
                },
                "31": {
                    x: -2.9,
                    y: -2.55
                },
                "32": {
                    x: -2.85,
                    y: -2.5
                },
                "33": {
                    x: -2.75,
                    y: -2.4
                },
                "35": {
                    x: -2.8,
                    y: -2.45
                },
                "37": {
                    x: -2.85,
                    y: -2.5
                },
                "39": {
                    x: -2.9,
                    y: -2.55
                },
                "40": {
                    x: -2.85,
                    y: -2.5
                },
                "42": {
                    x: -2.8,
                    y: -2.45
                },
                "47": {
                    x: -2.85,
                    y: -2.5
                },
                "50": {
                    x: -2.8,
                    y: -2.45
                }
            })
            .addTimedChild(instance1, 0, 53, {
                "0": {
                    x: 3,
                    y: 13.85
                },
                "1": {
                    y: 10.5
                },
                "2": {
                    y: 7.2
                },
                "3": {
                    y: 3.85
                },
                "4": {
                    x: 0.2,
                    y: 0.8
                },
                "5": {
                    x: -2.55,
                    y: -2.25
                },
                "6": {
                    x: -5.35,
                    y: -5.3
                },
                "7": {
                    x: -5.6,
                    y: -5.6
                },
                "8": {
                    x: -5.85,
                    y: -5.85
                },
                "9": {
                    x: -6.1,
                    y: -6.15
                },
                "10": {
                    x: -6.35,
                    y: -6.4
                },
                "11": {
                    x: -6.55,
                    y: -6.65
                },
                "12": {
                    x: -6.8,
                    y: -6.9
                },
                "13": {
                    x: -6.5,
                    y: -6.55
                },
                "14": {
                    x: -6.15,
                    y: -6.2
                },
                "15": {
                    x: -5.85,
                    y: -5.85
                },
                "16": {
                    x: -5.95,
                    y: -5.95
                },
                "17": {
                    x: -6.05,
                    y: -6.1
                },
                "18": {
                    x: -6.15,
                    y: -6.2
                },
                "19": {
                    x: -6.25,
                    y: -6.3
                },
                "20": {
                    x: -6.3,
                    y: -6.4
                },
                "21": {
                    x: -6.4,
                    y: -6.5
                },
                "22": {
                    x: -6.3,
                    y: -6.35
                },
                "23": {
                    x: -6.15,
                    y: -6.25
                },
                "24": {
                    x: -6.05,
                    y: -6.1
                },
                "25": {
                    x: -6.1,
                    y: -6.15
                },
                "26": {
                    x: -6.15,
                    y: -6.2
                },
                "27": {
                    x: -6.2,
                    y: -6.25
                },
                "28": {
                    x: -6.25,
                    y: -6.3
                },
                "30": {
                    x: -6.3,
                    y: -6.35
                },
                "31": {
                    x: -6.25,
                    y: -6.3
                },
                "32": {
                    x: -6.2,
                    y: -6.25
                },
                "33": {
                    x: -6.15,
                    y: -6.2
                },
                "35": {
                    x: -6.2,
                    y: -6.25
                },
                "38": {
                    x: -6.25,
                    y: -6.3
                },
                "41": {
                    x: -6.2,
                    y: -6.25
                },
                "47": {
                    y: -6.3
                },
                "50": {
                    y: -6.25
                }
            })
            .addAction(function () {
                /* createjs.Tween.get(this).to({
                y: this.y - 200,
                }, 2000);*/
            }, 0)
            .addAction(function () {
                /* this.stop();
                createjs.Tween.get(this).to({
                alpha: 0,
                }, 500).call(() => {
                this.parent.removeChild(this);
                });*/
            }, 52);
    });

    lib.EmojiBubble = makeObj("Container", 'EmojiBubble', undefined, function(){
        var instance2 = new Sprite(fromFrame("assets_Bitmap 92"))
            .setTransform(-9, -56);
        var instance1 = new Text("O")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 30,
                fill: "#282828",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 44.85
            })
            .setAlign("center")
            .setTransform(14.825000000000003, -50.7);
        this[instance1.name = "emoji"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.Crown = makeObj("Container", 'Crown', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 183"))
            .setTransform(-24, -33);
        this.addChild(instance1);
    });

    lib.PlayerName = makeObj("Container", 'PlayerName', undefined, function(){
        var instance5 = new Text("dragonwhites")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 20,
                fill: "#009",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 242.35
            })
            .setAlign("center")
            .setTransform(0.5249999999999844, -95.9);
        this[instance5.name = "text2"] = instance5;
        var instance4 = new Text("dragonwhites")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 20,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 242.35
            })
            .setAlign("center")
            .setTransform(-0.47500000000001563, -96.9);
        this[instance4.name = "text1"] = instance4;
        var instance3 = new lib.Crown()
            .setTransform(0, -114.75);
        this[instance3.name = "crown"] = instance3;
        var instance2 = new lib.Shield();
        this[instance2.name = "shield"] = instance2;
        var instance1 = new lib.EmojiBubble()
            .setTransform(48.7, -54.55);
        this[instance1.name = "emoji"] = instance1;
        this.addChild(instance5, instance4, instance3, instance2, instance1);
    });

    lib.KillScoreText = makeObj("Container", 'KillScoreText', undefined, function(){
        var instance2 = new Text("×9999 Supernatural Kill +9999")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 35,
                fill: "#630",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 491.3
            })
            .setAlign("center")
            .setTransform(1, -33.85);
        this[instance2.name = "text2"] = instance2;
        var instance1 = new Text("×9999 Supernatural Kill +9999")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 35,
                fill: "#fc0",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 491.3
            })
            .setAlign("center")
            .setTransform(0, -35.85);
        this[instance1.name = "text1"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.FoodMc = makeObj("MovieClip", 'FoodMc',{
            duration: 4
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Bitmap 9"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 10"));
        var instance3 = new Sprite(fromFrame("assets_Bitmap 11"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 12"))
            .setTransform(-114, -40);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -48,
                    y: -15
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -61,
                    y: -17
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -99,
                    y: -31
                }
            })
            .addTimedChild(instance4, 3, 1);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Sprite(fromFrame("assets_Bitmap 3"))
            .setTransform(-26, -10);
        this.addTimedChild(instance1);
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Sprite(fromFrame("assets_Bitmap 3"))
            .setTransform(-26, -10);
        this.addTimedChild(instance1);
    });

    lib.EvolveEffect = makeObj("MovieClip", 'EvolveEffect',{
            duration: 55
        }, function(){
		this.stop()
        var instance1 = new Graphic2(MovieClip.SYNCHED);
        var instance2 = new Sprite(fromFrame("assets_Bitmap 7"));
        var instance3 = new Sprite(fromFrame("assets_Bitmap 6"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 5"));
        var instance6 = new Sprite(fromFrame("assets_Bitmap 4"));
        var instance5 = new Sprite(fromFrame("assets_Bitmap 7"));
        var instance7 = new Sprite(fromFrame("assets_Bitmap 6"));
        var instance8 = new Sprite(fromFrame("assets_Bitmap 5"));
        var instance10 = new Graphic3(MovieClip.SYNCHED);
        var instance9 = new Sprite(fromFrame("assets_Bitmap 4"));
        this.addTimedChild(instance1, 0, 15, {
                "0": {
                    x: -1.15,
                    y: -6.2,
                    sx: 1,
                    sy: 1
                },
                "1": {
                    x: -1.192,
                    y: -16.954,
                    sx: 0.95,
                    sy: 1.364
                },
                "2": {
                    x: -1.184,
                    y: -27.708,
                    sx: 0.899,
                    sy: 1.727
                },
                "3": {
                    x: -1.177,
                    y: -38.412,
                    sx: 0.849,
                    sy: 2.091
                },
                "4": {
                    x: -1.169,
                    y: -49.166,
                    sx: 0.799,
                    sy: 2.454
                },
                "5": {
                    x: -1.161,
                    y: -59.92,
                    sx: 0.749,
                    sy: 2.818
                },
                "6": {
                    x: -1.153,
                    y: -70.674,
                    sx: 0.698,
                    sy: 3.181
                },
                "7": {
                    x: -1.195,
                    y: -81.378,
                    sx: 0.648,
                    sy: 3.545
                },
                "8": {
                    x: -1.188,
                    y: -92.132,
                    sx: 0.598,
                    sy: 3.908
                },
                "9": {
                    x: -1.18,
                    y: -102.886,
                    sx: 0.548,
                    sy: 4.272
                },
                "10": {
                    x: -1.172,
                    y: -113.639,
                    sx: 0.497,
                    sy: 4.635
                },
                "11": {
                    x: -1.164,
                    y: -124.394,
                    sx: 0.447,
                    sy: 4.999
                },
                "12": {
                    x: -1.156,
                    y: -135.098,
                    sx: 0.397,
                    sy: 5.363
                },
                "13": {
                    x: -1.199,
                    y: -145.802,
                    sx: 0.347,
                    sy: 5.726
                },
                "14": {
                    x: -1.15,
                    y: -154.1,
                    sx: 0.296,
                    sy: 6.09
                }
            })
            .addTimedChild(instance2, 9, 5, {
                "9": {
                    x: -37,
                    y: -28
                }
            })
            .addTimedChild(instance3, 14, 5, {
                "14": {
                    x: -32,
                    y: -43
                }
            })
            .addTimedChild(instance4, 19, 5, {
                "19": {
                    x: -32,
                    y: -76
                }
            })
            .addTimedChild(instance6, 24, 5, {
                "24": {
                    x: -27,
                    y: -104
                }
            })
            .addTimedChild(instance5, 24, 5, {
                "24": {
                    x: -37,
                    y: -28
                }
            })
            .addTimedChild(instance7, 29, 5, {
                "29": {
                    x: -32,
                    y: -43
                }
            })
            .addTimedChild(instance8, 34, 5, {
                "34": {
                    x: -32,
                    y: -76
                }
            })
            .addTimedChild(instance10, 39, 15, {
                "39": {
                    x: -1.15,
                    y: -6.2,
                    sx: 1,
                    sy: 1
                },
                "40": {
                    x: -1.192,
                    y: -16.954,
                    sx: 0.95,
                    sy: 1.364
                },
                "41": {
                    x: -1.184,
                    y: -27.708,
                    sx: 0.899,
                    sy: 1.727
                },
                "42": {
                    x: -1.177,
                    y: -38.412,
                    sx: 0.849,
                    sy: 2.091
                },
                "43": {
                    x: -1.169,
                    y: -49.166,
                    sx: 0.799,
                    sy: 2.454
                },
                "44": {
                    x: -1.161,
                    y: -59.92,
                    sx: 0.749,
                    sy: 2.818
                },
                "45": {
                    x: -1.153,
                    y: -70.674,
                    sx: 0.698,
                    sy: 3.181
                },
                "46": {
                    x: -1.195,
                    y: -81.378,
                    sx: 0.648,
                    sy: 3.545
                },
                "47": {
                    x: -1.188,
                    y: -92.132,
                    sx: 0.598,
                    sy: 3.908
                },
                "48": {
                    x: -1.18,
                    y: -102.886,
                    sx: 0.548,
                    sy: 4.272
                },
                "49": {
                    x: -1.172,
                    y: -113.639,
                    sx: 0.497,
                    sy: 4.635
                },
                "50": {
                    x: -1.164,
                    y: -124.394,
                    sx: 0.447,
                    sy: 4.999
                },
                "51": {
                    x: -1.156,
                    y: -135.098,
                    sx: 0.397,
                    sy: 5.363
                },
                "52": {
                    x: -1.199,
                    y: -145.802,
                    sx: 0.347,
                    sy: 5.726
                },
                "53": {
                    x: -1.15,
                    y: -154.1,
                    sx: 0.296,
                    sy: 6.09
                }
            })
            .addTimedChild(instance9, 39, 5, {
                "39": {
                    x: -27,
                    y: -104
                }
            })
            .addAction(function () {
                /* this.stop()*/
            }, 54);
    });

    lib.KrakenRunSymbol = makeObj("Container", 'KrakenRunSymbol', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_KrakenRun"))
            .setTransform(-22, -22, 0.2, 0.2);
        this.addChild(instance1);
    });

    lib.KrakenRunSymbolAnimated = makeObj("MovieClip", 'KrakenRunSymbolAnimated',{
            duration: 41
        }, function(){
		this.stop()
        var instance1 = new lib.KrakenRunSymbol();
        this[instance1.name = "krAnimated"] = instance1;
        this.addTimedChild(instance1, 0, 40, {
            "0": {
                sx: 1,
                sy: 1,
                r: 1.571,
                a: 1
            },
            "1": {
                sx: 2.077,
                sy: 2.077,
                a: 0.93
            },
            "2": {
                sx: 2.892,
                sy: 2.892,
                a: 0.87
            },
            "3": {
                sx: 3.537,
                sy: 3.537,
                a: 0.82
            },
            "4": {
                sx: 4.061,
                sy: 4.061,
                a: 0.79
            },
            "5": {
                sx: 4.494,
                sy: 4.494,
                a: 0.76
            },
            "6": {
                sx: 4.857,
                sy: 4.857,
                a: 0.73
            },
            "7": {
                sx: 5.162,
                sy: 5.162,
                a: 0.71
            },
            "8": {
                sx: 5.42,
                sy: 5.42,
                a: 0.69
            },
            "9": {
                sx: 5.639,
                sy: 5.639,
                a: 0.68
            },
            "10": {
                sx: 5.826,
                sy: 5.826,
                a: 0.66
            },
            "11": {
                sx: 5.985,
                sy: 5.985,
                a: 0.65
            },
            "12": {
                sx: 6.119,
                sy: 6.119,
                a: 0.64
            },
            "13": {
                sx: 6.233,
                sy: 6.233
            },
            "14": {
                sx: 6.329,
                sy: 6.329,
                a: 0.63
            },
            "15": {
                sx: 6.41,
                sy: 6.41,
                a: 0.62
            },
            "16": {
                sx: 6.477,
                sy: 6.477
            },
            "17": {
                sx: 6.533,
                sy: 6.533,
                a: 0.61
            },
            "18": {
                sx: 6.578,
                sy: 6.578
            },
            "19": {
                sx: 6.615,
                sy: 6.615
            },
            "20": {
                sx: 6.644,
                sy: 6.644
            },
            "21": {
                sx: 6.666,
                sy: 6.666
            },
            "22": {
                sx: 6.683,
                sy: 6.683
            },
            "23": {
                sx: 6.696,
                sy: 6.696,
                a: 0.6
            },
            "24": {
                sx: 6.705,
                sy: 6.705
            },
            "25": {
                sx: 6.71,
                sy: 6.71
            },
            "26": {
                sx: 6.714,
                sy: 6.714
            },
            "27": {
                sx: 6.715,
                sy: 6.715
            },
            "28": {
                sx: 6.716,
                sy: 6.716
            },
            "30": {
                sx: 6.835,
                sy: 6.835,
                a: 0.54
            },
            "31": {
                sx: 6.954,
                sy: 6.954,
                a: 0.48
            },
            "32": {
                sx: 7.073,
                sy: 7.073,
                a: 0.42
            },
            "33": {
                sx: 7.192,
                sy: 7.192,
                a: 0.36
            },
            "34": {
                sx: 7.312,
                sy: 7.312,
                a: 0.3
            },
            "35": {
                sx: 7.431,
                sy: 7.431,
                a: 0.24
            },
            "36": {
                sx: 7.55,
                sy: 7.55,
                a: 0.18
            },
            "37": {
                sx: 7.669,
                sy: 7.669,
                a: 0.12
            },
            "38": {
                sx: 7.788,
                sy: 7.788,
                a: 0.06
            },
            "39": {
                sx: 7.908,
                sy: 7.908,
                a: 0
            }
        });
    });

    lib.DragonRunSymbol2 = makeObj("Container", 'DragonRunSymbol2', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Dragon_Gem"))
            .setTransform(-41, -31);
        this.addChild(instance1);
    });

    lib.DragonRunSymbolAnimated = makeObj("MovieClip", 'DragonRunSymbolAnimated',{
            duration: 41
        }, function(){
		this.stop()
        var instance1 = new lib.DragonRunSymbol2();
        this[instance1.name = "krAnimated"] = instance1;
        this.addTimedChild(instance1, 0, 40, {
            "0": {
                sx: 1,
                sy: 1,
                r: 1.571,
                a: 0.5
            },
            "1": {
                sx: 2.077,
                sy: 2.077,
                a: 0.46
            },
            "2": {
                sx: 2.892,
                sy: 2.892,
                a: 0.43
            },
            "3": {
                sx: 3.537,
                sy: 3.537,
                a: 0.41
            },
            "4": {
                sx: 4.061,
                sy: 4.061,
                a: 0.39
            },
            "5": {
                sx: 4.494,
                sy: 4.494,
                a: 0.38
            },
            "6": {
                sx: 4.857,
                sy: 4.857,
                a: 0.37
            },
            "7": {
                sx: 5.162,
                sy: 5.162,
                a: 0.36
            },
            "8": {
                sx: 5.42,
                sy: 5.42,
                a: 0.35
            },
            "9": {
                sx: 5.639,
                sy: 5.639,
                a: 0.34
            },
            "10": {
                sx: 5.826,
                sy: 5.826,
                a: 0.33
            },
            "11": {
                sx: 5.985,
                sy: 5.985
            },
            "12": {
                sx: 6.119,
                sy: 6.119,
                a: 0.32
            },
            "13": {
                sx: 6.233,
                sy: 6.233
            },
            "14": {
                sx: 6.329,
                sy: 6.329,
                a: 0.31
            },
            "15": {
                sx: 6.41,
                sy: 6.41
            },
            "16": {
                sx: 6.477,
                sy: 6.477
            },
            "17": {
                sx: 6.533,
                sy: 6.533
            },
            "18": {
                sx: 6.578,
                sy: 6.578,
                a: 0.3
            },
            "19": {
                sx: 6.615,
                sy: 6.615
            },
            "20": {
                sx: 6.644,
                sy: 6.644
            },
            "21": {
                sx: 6.666,
                sy: 6.666
            },
            "22": {
                sx: 6.683,
                sy: 6.683
            },
            "23": {
                sx: 6.696,
                sy: 6.696
            },
            "24": {
                sx: 6.705,
                sy: 6.705
            },
            "25": {
                sx: 6.71,
                sy: 6.71
            },
            "26": {
                sx: 6.714,
                sy: 6.714
            },
            "27": {
                sx: 6.715,
                sy: 6.715
            },
            "28": {
                sx: 6.716,
                sy: 6.716
            },
            "30": {
                sx: 6.835,
                sy: 6.835,
                a: 0.27
            },
            "31": {
                sx: 6.954,
                sy: 6.954,
                a: 0.24
            },
            "32": {
                sx: 7.073,
                sy: 7.073,
                a: 0.21
            },
            "33": {
                sx: 7.192,
                sy: 7.192,
                a: 0.18
            },
            "34": {
                sx: 7.312,
                sy: 7.312,
                a: 0.15
            },
            "35": {
                sx: 7.431,
                sy: 7.431,
                a: 0.12
            },
            "36": {
                sx: 7.55,
                sy: 7.55,
                a: 0.09
            },
            "37": {
                sx: 7.669,
                sy: 7.669,
                a: 0.06
            },
            "38": {
                sx: 7.788,
                sy: 7.788,
                a: 0.03
            },
            "39": {
                sx: 7.908,
                sy: 7.908,
                a: 0
            }
        });
    });

    lib.DragonRunSymbol = makeObj("Container", 'DragonRunSymbol', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Dragon_Gem"))
            .setTransform(-41, -31);
        this.addChild(instance1);
    });

    lib.BurningEffect = makeObj("MovieClip", 'BurningEffect',{
            duration: 9
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Burning_Effect-1"));
        var instance2 = new Sprite(fromFrame("assets_Burning_Effect-2"));
        var instance3 = new Sprite(fromFrame("assets_Burning_Effect-3"))
            .setTransform(-61, -146);
        this.addTimedChild(instance1, 0, 3, {
                "0": {
                    x: -55,
                    y: -148
                }
            })
            .addTimedChild(instance2, 3, 3, {
                "3": {
                    x: -55,
                    y: -128
                }
            })
            .addTimedChild(instance3, 6, 3);
    });

    lib.BuffEffect_Paralyze = makeObj("Container", 'BuffEffect_Paralyze', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 274"))
            .setTransform(-5, -74);
        this.addChild(instance1);
    });

    lib.BuffEffect_Blind = makeObj("Container", 'BuffEffect_Blind', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 14"))
            .setTransform(-7, -65);
        this.addChild(instance1);
    });

    lib.BuffEffects = makeObj("Container", 'BuffEffects', undefined, function(){
        var instance3 = new lib.BuffEffect_Blind();
        this[instance3.name = "blind"] = instance3;
        var instance2 = new lib.BuffEffect_Paralyze();
        this[instance2.name = "paralyzed"] = instance2;
        var instance1 = new lib.BurningEffect()
            .setTransform(0, 0, 1, 1, -1.571);
        this[instance1.name = "burnt"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.BodyEffect = makeObj("MovieClip", 'BodyEffect',{
            duration: 4,
            labels: {
                onifugu: 1,
                minishield: 2
            }
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Bitmap 396"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 341"))
            .setTransform(-123, -124);
        this.addTimedChild(instance1, 1, 1, {
                "1": {
                    x: -76,
                    y: -70
                }
            })
            .addTimedChild(instance2, 2, 2);
    });

    lib.EmptyContainer = makeObj("Container", 'EmptyContainer', undefined, function(){

    });

    lib.SpearLvl_Spike_copy = makeObj("MovieClip", 'SpearLvl_Spike_copy',{
            duration: 4
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Tusk1"));
        var instance2 = new Sprite(fromFrame("assets_Tusk2"));
        var instance3 = new Sprite(fromFrame("assets_Tusk3"));
        var instance4 = new Sprite(fromFrame("assets_Tusk4"))
            .setTransform(-28, -217, 0.5, 0.5);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -18,
                    y: -109,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -22,
                    y: -145,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -24,
                    y: -181,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance4, 3, 1);
    });

    lib.SpearLvl_Trident_copy = makeObj("MovieClip", 'SpearLvl_Trident_copy',{
            duration: 4
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Trident1"));
        var instance2 = new Sprite(fromFrame("assets_Trident2"));
        var instance3 = new Sprite(fromFrame("assets_Trident3"));
        var instance4 = new Sprite(fromFrame("assets_Trident4"))
            .setTransform(-28, -217, 0.5, 0.5);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -22,
                    y: -109,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -22,
                    y: -145,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -25,
                    y: -181,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance4, 3, 1);
    });

    lib.SpearLvl_Sword_copy = makeObj("MovieClip", 'SpearLvl_Sword_copy',{
            duration: 4
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Chillblade1"));
        var instance2 = new Sprite(fromFrame("assets_Chillblade2"));
        var instance3 = new Sprite(fromFrame("assets_Chillblade3"));
        var instance4 = new Sprite(fromFrame("assets_Chillblade4"))
            .setTransform(-28, -217, 0.5, 0.5);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -21,
                    y: -109,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -23,
                    y: -145,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -25,
                    y: -181,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance4, 3, 1);
    });

    lib.SpearLvl_ChainSaw_copy = makeObj("MovieClip", 'SpearLvl_ChainSaw_copy',{
            duration: 4
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Chainsaw1"));
        var instance2 = new Sprite(fromFrame("assets_Chainsaw2"));
        var instance3 = new Sprite(fromFrame("assets_Chainsaw3"));
        var instance4 = new Sprite(fromFrame("assets_Chainsaw4"))
            .setTransform(-28, -217, 0.5, 0.5);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -18,
                    y: -109,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -21,
                    y: -145,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: 25,
                    y: -182,
                    sx: 0.5,
                    sy: 0.5,
                    ky: 3.142
                }
            })
            .addTimedChild(instance4, 3, 1);
    });

    lib.SpearLvl_Firesaber = makeObj("MovieClip", 'SpearLvl_Firesaber',{
            duration: 4
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Firesaber1"));
        var instance2 = new Sprite(fromFrame("assets_Firesaber2"));
        var instance3 = new Sprite(fromFrame("assets_Firesaber3"));
        var instance4 = new Sprite(fromFrame("assets_Firesaber4"))
            .setTransform(-35, -229, 0.5, 0.5);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -30,
                    y: -123,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -32,
                    y: -159,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -32,
                    y: -196,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance4, 3, 1);
    });

    lib.SpearLvl_LightningRod = makeObj("MovieClip", 'SpearLvl_LightningRod',{
            duration: 4
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_LightningRod1"));
        var instance2 = new Sprite(fromFrame("assets_LightningRod2"));
        var instance3 = new Sprite(fromFrame("assets_LightningRod3"));
        var instance4 = new Sprite(fromFrame("assets_LightningRod4"))
            .setTransform(-27, -217, 0.5, 0.5);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -19,
                    y: -110,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -29,
                    y: -146,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -21,
                    y: -181,
                    sx: 0.5,
                    sy: 0.5
                }
            })
            .addTimedChild(instance4, 3, 1);
    });

    lib.Spear = makeObj("MovieClip", 'Spear',{
            duration: 6
        }, function(){
		this.stop()
        var instance1 = new lib.SpearLvl_Spike_copy();
        this[instance1.name = "lvl"] = instance1;
        var instance2 = new lib.SpearLvl_Trident_copy();
        this[instance2.name = "lvl"] = instance2;
        var instance3 = new lib.SpearLvl_Sword_copy();
        this[instance3.name = "lvl"] = instance3;
        var instance4 = new lib.SpearLvl_ChainSaw_copy();
        this[instance4.name = "lvl"] = instance4;
        var instance5 = new lib.SpearLvl_Firesaber();
        this[instance5.name = "lvl"] = instance5;
        var instance6 = new lib.SpearLvl_LightningRod();
        this[instance6.name = "lvl"] = instance6;
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance2, 1, 1)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 1)
            .addTimedChild(instance6, 5, 1);
    });

    lib.SpearCon = makeObj("Container", 'SpearCon', undefined, function(){
        var instance1 = new lib.Spear();
        this[instance1.name = "type"] = instance1;
        this.addChild(instance1);
    });

    lib.PlayerColorAdjustable = makeObj("Container", 'PlayerColorAdjustable', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 343"))
            .setTransform(-70, -70);
        this.addChild(instance1);
    });

    lib.ShadowContainer = makeObj("Container", 'ShadowContainer', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 21"))
            .setTransform(-184.55, 105.35, 1, 1, -0.785);
        this.addChild(instance1);
    });

    lib.Player = makeObj("Container", 'Player', undefined, function(){
        var instance13 = new lib.ShadowContainer();
        this[instance13.name = "shadow"] = instance13;
        var instance12 = new lib.PlayerColorAdjustable()
            .setTransform(0, 0, 1, 1, 1.571);
        this[instance12.name = "teamCon"] = instance12;
        var instance11 = new lib.HatCon()
            .setTransform(0, 0, 1, 1, 1.571);
        this[instance11.name = "hatCon"] = instance11;
        var instance10 = new lib.SpearCon()
            .setTransform(45, 0, 1, 1, 1.571);
        this[instance10.name = "spearCon"] = instance10;
        var instance9 = new lib.EmptyContainer()
            .setTransform(0, 0, 1, 1, 1.571);
        this[instance9.name = "body"] = instance9;
        var instance8 = new lib.BodyEffect()
            .setTransform(0, 0, 1, 1, 1.571);
        this[instance8.name = "specialCon"] = instance8;
        var instance7 = new lib.BuffEffects();
        this[instance7.name = "effectCon"] = instance7;
        var instance6 = new lib.FaceCon()
            .setTransform(0, 0, 1, 1, 1.571);
        this[instance6.name = "faceCon"] = instance6;
        var instance5 = new lib.KrakenRunSymbol()
            .setTransform(-20, 1.5, 1, 1, 1.571);
        this[instance5.name = "kr"] = instance5;
        var instance4 = new lib.DragonRunSymbol()
            .setTransform(42.6, 1.5, 1, 1, 1.571);
        this[instance4.name = "dr"] = instance4;
        var instance3 = new lib.DragonRunSymbolAnimated()
            .setTransform(42.6, 1.5);
        this[instance3.name = "drAnimated"] = instance3;
        var instance2 = new lib.KrakenRunSymbolAnimated()
            .setTransform(-20, 1.5);
        this[instance2.name = "krAnimated"] = instance2;
        var instance1 = new lib.EvolveEffect()
            .setTransform(45, 0, 1, 1, 1.571);
        this[instance1.name = "evolve"] = instance1;
        this.addChild(instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.BlindScreen = makeObj("Container", 'BlindScreen', undefined, function(){
        var instance5 = new Graphics()
            .drawCommands(shapes.assets[6])
            .setTransform(0, 0, 1, 1, -1.571);
        var instance4 = new Graphics()
            .drawCommands(shapes.assets[5])
            .setTransform(0, 0, 1, 1, -1.571);
        var instance3 = new Graphics()
            .drawCommands(shapes.assets[4])
            .setTransform(-2400, 0, 1, 1, -1.571);
        var instance2 = new Graphics()
            .drawCommands(shapes.assets[4])
            .setTransform(0, 0, 1, 1, -1.571);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 362"))
            .setTransform(-480, -480, 4, 4);
        this.addChild(instance5, instance4, instance3, instance2, instance1);
    });

    lib.Assets = makeObj("MovieClip", 'Assets',{
            duration: 2
        }, function(){
		this.stop()
        var instance24 = new Graphics()
            .drawCommands(shapes.assets[7]);
        var instance23 = new lib.HatCaseText()
            .setTransform(63, 32.1);
        this[instance23.name = "textCon"] = instance23;
        var instance22 = new lib.BlindScreen()
            .setTransform(96, 552.95);
        this[instance22.name = "blind"] = instance22;
        var instance21 = new lib.Player()
            .setTransform(99, 542.95, 1, 1, -1.571);
        this[instance21.name = "player"] = instance21;
        var instance20 = new lib.FoodMc()
            .setTransform(683.75, 138.75);
        this[instance20.name = "food"] = instance20;
        var instance19 = new lib.KillScoreText()
            .setTransform(713.8, 265.5);
        this[instance19.name = "killText"] = instance19;
        var instance18 = new lib.PlayerName()
            .setTransform(842.3, 141);
        var instance17 = new lib.ChainBonusText()
            .setTransform(796.55, 179.9);
        this[instance17.name = "chainBonus"] = instance17;
        var instance16 = new lib.Victim()
            .setTransform(256.75, 496.4, 1, 1, -1.571);
        this[instance16.name = "victim"] = instance16;
        var instance15 = new lib.Victim()
            .setTransform(256.75, 532.4, 1, 1, -1.571);
        var instance14 = new lib.Victim()
            .setTransform(256.75, 568.4, 1, 1, -1.571);
        var instance13 = new lib.UnlockText()
            .setTransform(666.95, 48.15);
        var instance12 = new lib.HatCase()
            .setTransform(673.25, 312.1, 0.7, 0.7);
        this[instance12.name = "hat"] = instance12;
        var instance11 = new lib.FaceCase()
            .setTransform(823.5, 312.1, 0.7, 0.7);
        this[instance11.name = "face"] = instance11;
        var instance10 = new lib.BountyTarget()
            .setTransform(591.55, 176.1);
        this[instance10.name = "bountyTargetMc"] = instance10;
        var instance9 = new lib.GradientMc()
            .setTransform(330.75, 331.55);
        var instance8 = new lib.EmojiMessageBar()
            .setTransform(593, 535.5);
        var instance7 = new lib.EmojiButton()
            .setTransform(238.5, 318.1);
        var instance6 = new lib.MiniShield()
            .setTransform(141.5, 331.1);
        var instance5 = new lib.AllBodies()
            .setTransform(463.9, 590.4, 1, 1, 1.571);
        this[instance5.name = "body"] = instance5;
        var instance4 = new lib.Bubble()
            .setTransform(383.9, 253.1);
        var instance3 = new lib.LootBubble()
            .setTransform(421.9, 272.1);
        var instance2 = new lib.DischargeMc()
            .setTransform(417.9, 195.9);
        var instance1 = new lib.DragonOrbs()
            .setTransform(-45.4, 192.85);
        this.addTimedChild(instance24, 1, 1)
            .addTimedChild(instance23, 1, 1)
            .addTimedChild(instance22, 1, 1)
            .addTimedChild(instance21, 1, 1)
            .addTimedChild(instance20, 1, 1)
            .addTimedChild(instance19, 1, 1)
            .addTimedChild(instance18, 1, 1)
            .addTimedChild(instance17, 1, 1)
            .addTimedChild(instance16, 1, 1)
            .addTimedChild(instance15, 1, 1)
            .addTimedChild(instance14, 1, 1)
            .addTimedChild(instance13, 1, 1)
            .addTimedChild(instance12, 1, 1)
            .addTimedChild(instance11, 1, 1)
            .addTimedChild(instance10, 1, 1)
            .addTimedChild(instance9, 1, 1)
            .addTimedChild(instance8, 1, 1)
            .addTimedChild(instance7, 1, 1)
            .addTimedChild(instance6, 1, 1)
            .addTimedChild(instance5, 1, 1)
            .addTimedChild(instance4, 1, 1)
            .addTimedChild(instance3, 1, 1)
            .addTimedChild(instance2, 1, 1)
            .addTimedChild(instance1, 1, 1)
            .addAction(function () {
                /* this.stop();*/
            }, 0);
    });

    lib.MenuCloseButton = makeObj("MovieClip", 'MenuCloseButton',{
            duration: 4
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Bitmap 205"))
            .setTransform(-13, -13);
        this.addTimedChild(instance1);
    });

    lib.Container = makeObj("Container", 'Container', undefined, function(){

    });

    lib.FaceCaseContainer = makeObj("Container", 'FaceCaseContainer', undefined, function(){
        var instance1 = new lib.Container();
        this[instance1.name = "bg"] = instance1;
        this.addChild(instance1);
    });

    lib.FaceMenu = makeObj("Container", 'FaceMenu', undefined, function(){
        var instance4 = new Text("Masks")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 30,
                fill: "#fff",
                leading: 2
            })
            .setTransform(0.15, 21);
        var instance3 = new lib.FaceCaseContainer()
            .setTransform(0, 78);
        this[instance3.name = "container"] = instance3;
        var instance2 = new lib.MenuCloseButton()
            .setTransform(425.5, 52);
        this[instance2.name = "closeButton"] = instance2;
        var instance1 = new Text("Collected 999/999")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 16,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 142.5
            })
            .setAlign("center")
            .setTransform(227.75, 44.5);
        this[instance1.name = "collectedText"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.HatCaseContainer = makeObj("Container", 'HatCaseContainer', undefined, function(){
        var instance1 = new lib.Container();
        this[instance1.name = "bg"] = instance1;
        this.addChild(instance1);
    });

    lib.HatMenu = makeObj("Container", 'HatMenu', undefined, function(){
        var instance4 = new Text("Hats")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 30,
                fill: "#fff",
                leading: 2
            })
            .setTransform(0.15, 21);
        var instance3 = new lib.HatCaseContainer()
            .setTransform(0, 78);
        this[instance3.name = "container"] = instance3;
        var instance2 = new lib.MenuCloseButton()
            .setTransform(425.5, 52);
        this[instance2.name = "closeButton"] = instance2;
        var instance1 = new Text("Collected 999/999")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 16,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 142.5
            })
            .setAlign("center")
            .setTransform(227.75, 44.5);
        this[instance1.name = "collectedText"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.BodyMenu_MasterInfo = makeObj("Container", 'BodyMenu_MasterInfo', undefined, function(){
        var instance2 = new Graphics()
            .drawCommands(shapes.assets[8])
            .setTransform(-7, -27.05);
        var instance1 = new Text("Master Challenges are for those who found normal challenges too easy!\n\nWhenever you unlock any of the 3rd-form-stabfish (eg. Megalodon, Jo Mama, etc.), a Master Challenge will be given and can be found under the fish description.\n\nComplete the challenge and you will get a special boost effect (purely cosmetic) along with a 'MASTER'  badge that will be displayed in the Hall of Fame!\n\nCompleting all master challenges\nwill be rewarded the 'LEGENDARY'\nbadge!")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 232
            })
            .setTransform(19, 12.95);
        this.addChild(instance2, instance1);
    });

    lib.ButtonCaseLabel = makeObj("MovieClip", 'ButtonCaseLabel',{
            duration: 4,
            labels: {
                unlocked: 0,
                new: 1,
                none: 2,
                "coming soon": 3
            }
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Bitmap 207"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 208"));
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -17,
                    y: -18
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -17,
                    y: -18
                }
            });
    });

    lib.BodyMenu_MasterInfoButton = makeObj("MovieClip", 'BodyMenu_MasterInfoButton',{
            duration: 3
        }, function(){
		this.stop()
        var instance2 = new Graphics()
            .drawCommands(shapes.assets[9]);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 204"));
        var instance3 = new Sprite(fromFrame("assets_Bitmap 203"));
        this.addTimedChild(instance2, 0, 3, {
                "0": {
                    x: -211,
                    y: -332.05
                }
            })
            .addTimedChild(instance1, 0, 1)
            .addTimedChild(instance3, 1, 2, {
                "1": {
                    y: 0
                },
                "2": {
                    y: 2
                }
            });
    });

    lib.BodyCaseText_Summon = makeObj("Container", 'BodyCaseText_Summon', undefined, function(){
        var instance3 = new Graphics()
            .drawCommands(shapes.assets[10])
            .setTransform(88, 174.95);
        var instance2 = new Text("Summon skins from \nanother universe &\nget the coolest fish \nin the game!")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 16,
                fill: "#fff",
                leading: 2
            })
            .setTransform(24.5, 11.9);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 35"))
            .setTransform(10, 142);
        this.addChild(instance3, instance2, instance1);
    });

    lib.BodyCase_Summon2 = makeObj("Container", 'BodyCase_Summon2', undefined, function(){
        var instance3 = new Graphics()
            .drawCommands(shapes.assets[11])
            .setTransform(88, 174.95);
        var instance2 = new Sprite(fromFrame("assets_gachaPoster2"));
        var instance1 = new lib.BodyCaseText_Summon();
        this[instance1.name = "textCon"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.BodyCase_Summon1 = makeObj("Container", 'BodyCase_Summon1', undefined, function(){
        var instance3 = new Graphics()
            .drawCommands(shapes.assets[11])
            .setTransform(88, 174.95);
        var instance2 = new Sprite(fromFrame("assets_gachaPoster1"));
        var instance1 = new lib.BodyCaseText_Summon();
        this[instance1.name = "textCon"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.SkinButton = makeObj("MovieClip", 'SkinButton',{
            duration: 4
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame("assets_Bitmap 192"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 84"));
        var instance5 = new Sprite(fromFrame("assets_Bitmap 86"));
        var instance7 = new Sprite(fromFrame("assets_Bitmap 194"))
            .setTransform(-18, -13);
        var instance6 = new Sprite(fromFrame("assets_Bitmap 185"))
            .setTransform(-18, -18);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 22"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 31"));
        this.addTimedChild(instance3, 0, 3, {
                "0": {
                    x: -18,
                    y: -13
                }
            })
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: -18,
                    y: -18
                }
            })
            .addTimedChild(instance5, 1, 2, {
                "1": {
                    x: -18,
                    y: -18
                },
                "2": {
                    y: -15
                }
            })
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1)
            .addTimedChild(instance1, 0, 4, {
                "0": {
                    x: -11,
                    y: -8
                },
                "2": {
                    y: -5
                },
                "3": {
                    y: -8
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: -140,
                    y: -15
                }
            });
    });

    lib.BodyCaseText = makeObj("Container", 'BodyCaseText', undefined, function(){
        var instance3 = new Graphics()
            .drawCommands(shapes.assets[1])
            .setTransform(88, 174.95);
        var instance2 = new Text("Shark")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 23,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 179.35
            })
            .setTransform(15.4, 17);
        this[instance2.name = "title"] = instance2;
        var instance1 = new Text("Beware! \nStabby Sharks are notorious stabbers!")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 16,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 165
            })
            .setTransform(17.4, 58.05);
        this[instance1.name = "desc"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.LegendaryLabel = makeObj("Container", 'LegendaryLabel', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 364"))
            .setTransform(-39, -9);
        this.addChild(instance1);
    });

    lib.MasterLabel = makeObj("Container", 'MasterLabel', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 202"))
            .setTransform(-35, -10);
        this.addChild(instance1);
    });

    lib.BodyCase = makeObj("Container", 'BodyCase', undefined, function(){
        var instance9 = new Graphics()
            .drawCommands(shapes.assets[12]);
        var instance8 = new Graphics()
            .drawCommands(shapes.assets[2])
            .setTransform(88, 174.95);
        var instance7 = new lib.EmptyContainer()
            .setTransform(97.15, 95.55);
        this[instance7.name = "bodyCon"] = instance7;
        var instance6 = new lib.CaseLabel()
            .setTransform(196.65, 14.55);
        this[instance6.name = "label"] = instance6;
        var instance5 = new lib.MasterLabel()
            .setTransform(99.05, 195.65);
        this[instance5.name = "master"] = instance5;
        var instance4 = new lib.LegendaryLabel()
            .setTransform(99.05, 195.65);
        this[instance4.name = "legendary"] = instance4;
        var instance3 = new lib.BodyCaseText();
        this[instance3.name = "textCon"] = instance3;
        var instance2 = new lib.WeaponCaseActive();
        this[instance2.name = "activeBorder"] = instance2;
        var instance1 = new lib.SkinButton()
            .setTransform(176.05, 188.35, 0.799, 0.799);
        this[instance1.name = "skinButton"] = instance1;
        this.addChild(instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1); /* this.cursor = 'pointer'*/
    });

    lib.KrakenRunSymbolWhite = makeObj("Container", 'KrakenRunSymbolWhite', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 23"))
            .setTransform(-22, -22, 0.5, 0.5);
        this.addChild(instance1);
    });

    lib.BodyCase_KrakenRun = makeObj("Container", 'BodyCase_KrakenRun', undefined, function(){
        var instance11 = new Graphics()
            .drawCommands(shapes.assets[12]);
        var instance10 = new Graphics()
            .drawCommands(shapes.assets[15])
            .setTransform(88, 174.95);
        var instance9 = new Graphics()
            .drawCommands(shapes.assets[14]);
        var instance8 = new Graphics()
            .drawCommands(shapes.assets[13]);
        var instance7 = new lib.KrakenRunSymbolWhite()
            .setTransform(96.55, 108.85);
        var instance6 = new lib.Lock()
            .setTransform(164.8, 179.5, 0.571, 0.571)
            .setAlpha(0.9);
        this[instance6.name = "lock"] = instance6;
        var instance5 = new lib.CaseLabel()
            .setTransform(196.65, 14.55);
        this[instance5.name = "label"] = instance5;
        var instance4 = new lib.MasterLabel()
            .setTransform(99.05, 195.65);
        this[instance4.name = "master"] = instance4;
        var instance3 = new lib.LegendaryLabel()
            .setTransform(99.05, 195.65);
        this[instance3.name = "legendary"] = instance3;
        var instance2 = new lib.BodyCaseText();
        this[instance2.name = "textCon"] = instance2;
        var instance1 = new lib.WeaponCaseActive();
        this[instance1.name = "activeBorder"] = instance1;
        this.addChild(instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1); /* this.cursor = 'pointer'*/
    });

    lib.BodyCaseText_Sf2 = makeObj("Container", 'BodyCaseText_Sf2', undefined, function(){
        var instance3 = new Graphics()
            .drawCommands(shapes.assets[16])
            .setTransform(88, 174.95);
        var instance2 = new Text("Test your skills against the top Stabfish players\nin Stabfish2.io and prove you're the ultimate\nchampion!")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 16,
                fill: "#fff",
                leading: 2
            })
            .setTransform(24.5, 24.8);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 368"))
            .setTransform(61, 119);
        this.addChild(instance3, instance2, instance1);
    });

    lib.BodyCase_Sf2 = makeObj("Container", 'BodyCase_Sf2', undefined, function(){
        var instance3 = new Graphics()
            .drawCommands(shapes.assets[17])
            .setTransform(88, 174.95);
        var instance2 = new Sprite(fromFrame("assets_Bitmap 373"))
            .setTransform(3, 3);
        var instance1 = new lib.BodyCaseText_Sf2();
        this[instance1.name = "textCon"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.BodyCase_DragonRun = makeObj("Container", 'BodyCase_DragonRun', undefined, function(){
        var instance11 = new Graphics()
            .drawCommands(shapes.assets[12]);
        var instance10 = new Graphics()
            .drawCommands(shapes.assets[19])
            .setTransform(88, 174.95);
        var instance9 = new Graphics()
            .drawCommands(shapes.assets[18]);
        var instance8 = new Sprite(fromFrame("assets_Bitmap 359"))
            .setTransform(25, 30);
        var instance7 = new Sprite(fromFrame("assets_Bitmap 361"))
            .setTransform(71, 68, 0.669, 0.669);
        var instance6 = new lib.Lock()
            .setTransform(164.8, 179.5, 0.571, 0.571)
            .setAlpha(0.9);
        this[instance6.name = "lock"] = instance6;
        var instance5 = new lib.CaseLabel()
            .setTransform(196.65, 14.55);
        this[instance5.name = "label"] = instance5;
        var instance4 = new lib.MasterLabel()
            .setTransform(99.05, 195.65);
        this[instance4.name = "master"] = instance4;
        var instance3 = new lib.LegendaryLabel()
            .setTransform(99.05, 195.65);
        this[instance3.name = "legendary"] = instance3;
        var instance2 = new lib.BodyCaseText();
        this[instance2.name = "textCon"] = instance2;
        var instance1 = new lib.WeaponCaseActive();
        this[instance1.name = "activeBorder"] = instance1;
        this.addChild(instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1); /* this.cursor = 'pointer'*/
    });

    lib.BodyCaseContainer = makeObj("Container", 'BodyCaseContainer', undefined, function(){
        var instance69 = new lib.Container();
        this[instance69.name = "bg"] = instance69;
        var instance68 = new lib.BodyCase_DragonRun()
            .setTransform(0, 3362.25, 0.7, 0.7);
        this[instance68.name = "option63"] = instance68;
        var instance67 = new lib.BodyCase_Sf2()
            .setTransform(147, 3362.25, 0.7, 0.7);
        this[instance67.name = "option64"] = instance67;
        var instance66 = new lib.BodyCase()
            .setTransform(0, 40, 0.7, 0.7);
        this[instance66.name = "option0"] = instance66;
        var instance65 = new lib.BodyCase()
            .setTransform(147, 40, 0.7, 0.7);
        this[instance65.name = "option1"] = instance65;
        var instance64 = new lib.BodyCase()
            .setTransform(294, 40, 0.7, 0.7);
        this[instance64.name = "option2"] = instance64;
        var instance63 = new lib.BodyCase()
            .setTransform(0, 196, 0.7, 0.7);
        this[instance63.name = "option3"] = instance63;
        var instance62 = new lib.BodyCase()
            .setTransform(147, 196, 0.7, 0.7);
        this[instance62.name = "option4"] = instance62;
        var instance61 = new lib.BodyCase()
            .setTransform(294, 196, 0.7, 0.7);
        this[instance61.name = "option5"] = instance61;
        var instance60 = new lib.BodyCase()
            .setTransform(0, 354, 0.7, 0.7);
        this[instance60.name = "option6"] = instance60;
        var instance59 = new lib.BodyCase()
            .setTransform(147, 354, 0.7, 0.7);
        this[instance59.name = "option7"] = instance59;
        var instance58 = new lib.BodyCase()
            .setTransform(294, 354, 0.7, 0.7);
        this[instance58.name = "option8"] = instance58;
        var instance57 = new lib.BodyCase()
            .setTransform(0, 510, 0.7, 0.7);
        this[instance57.name = "option9"] = instance57;
        var instance56 = new lib.BodyCase()
            .setTransform(147, 510, 0.7, 0.7);
        this[instance56.name = "option10"] = instance56;
        var instance55 = new lib.BodyCase()
            .setTransform(294, 510, 0.7, 0.7);
        this[instance55.name = "option11"] = instance55;
        var instance54 = new lib.BodyCase()
            .setTransform(0, 666, 0.7, 0.7);
        this[instance54.name = "option12"] = instance54;
        var instance53 = new lib.BodyCase()
            .setTransform(147, 666, 0.7, 0.7);
        this[instance53.name = "option13"] = instance53;
        var instance52 = new lib.BodyCase()
            .setTransform(294, 666, 0.7, 0.7);
        this[instance52.name = "option14"] = instance52;
        var instance51 = new lib.BodyCase()
            .setTransform(0, 823, 0.7, 0.7);
        this[instance51.name = "option15"] = instance51;
        var instance50 = new lib.BodyCase()
            .setTransform(147, 823, 0.7, 0.7);
        this[instance50.name = "option16"] = instance50;
        var instance49 = new lib.BodyCase()
            .setTransform(294, 823, 0.7, 0.7);
        this[instance49.name = "option17"] = instance49;
        var instance48 = new lib.BodyCase()
            .setTransform(0, 981.95, 0.7, 0.7);
        this[instance48.name = "option18"] = instance48;
        var instance47 = new lib.BodyCase()
            .setTransform(147, 981.95, 0.7, 0.7);
        this[instance47.name = "option19"] = instance47;
        var instance46 = new lib.BodyCase()
            .setTransform(294, 981.95, 0.7, 0.7);
        this[instance46.name = "option20"] = instance46;
        var instance45 = new lib.BodyCase()
            .setTransform(0, 1139.95, 0.7, 0.7);
        this[instance45.name = "option21"] = instance45;
        var instance44 = new lib.BodyCase()
            .setTransform(147, 1139.95, 0.7, 0.7);
        this[instance44.name = "option22"] = instance44;
        var instance43 = new lib.BodyCase()
            .setTransform(294, 1139.95, 0.7, 0.7);
        this[instance43.name = "option23"] = instance43;
        var instance42 = new lib.BodyCase()
            .setTransform(0, 1297.9, 0.7, 0.7);
        this[instance42.name = "option24"] = instance42;
        var instance41 = new lib.BodyCase()
            .setTransform(147, 1297.9, 0.7, 0.7);
        this[instance41.name = "option25"] = instance41;
        var instance40 = new lib.BodyCase()
            .setTransform(294, 1297.9, 0.7, 0.7);
        this[instance40.name = "option26"] = instance40;
        var instance39 = new lib.BodyCase()
            .setTransform(0, 1454.9, 0.7, 0.7);
        this[instance39.name = "option27"] = instance39;
        var instance38 = new lib.BodyCase()
            .setTransform(147, 1454.9, 0.7, 0.7);
        this[instance38.name = "option28"] = instance38;
        var instance37 = new lib.BodyCase()
            .setTransform(294, 1454.9, 0.7, 0.7);
        this[instance37.name = "option29"] = instance37;
        var instance36 = new lib.BodyCase_KrakenRun()
            .setTransform(0, 1612.85, 0.7, 0.7);
        this[instance36.name = "option30"] = instance36;
        var instance35 = new lib.BodyCase()
            .setTransform(0, 1770.85, 0.7, 0.7);
        this[instance35.name = "option33"] = instance35;
        var instance34 = new lib.BodyCase()
            .setTransform(147, 1770.85, 0.7, 0.7);
        this[instance34.name = "option34"] = instance34;
        var instance33 = new lib.BodyCase()
            .setTransform(294, 1770.85, 0.7, 0.7);
        this[instance33.name = "option35"] = instance33;
        var instance32 = new lib.BodyCase()
            .setTransform(0, 1927.85, 0.7, 0.7);
        this[instance32.name = "option36"] = instance32;
        var instance31 = new lib.BodyCase()
            .setTransform(147, 1927.85, 0.7, 0.7);
        this[instance31.name = "option37"] = instance31;
        var instance30 = new lib.BodyCase()
            .setTransform(294, 1927.85, 0.7, 0.7);
        this[instance30.name = "option38"] = instance30;
        var instance29 = new lib.BodyCase()
            .setTransform(0, 2085.85, 0.7, 0.7);
        this[instance29.name = "option39"] = instance29;
        var instance28 = new lib.BodyCase()
            .setTransform(147, 2085.85, 0.7, 0.7);
        this[instance28.name = "option40"] = instance28;
        var instance27 = new lib.BodyCase()
            .setTransform(294, 2085.85, 0.7, 0.7);
        this[instance27.name = "option41"] = instance27;
        var instance26 = new lib.BodyCase()
            .setTransform(0, 2242.85, 0.7, 0.7);
        this[instance26.name = "option42"] = instance26;
        var instance25 = new lib.BodyCase()
            .setTransform(147, 2242.85, 0.7, 0.7);
        this[instance25.name = "option43"] = instance25;
        var instance24 = new lib.BodyCase()
            .setTransform(294, 2242.85, 0.7, 0.7);
        this[instance24.name = "option44"] = instance24;
        var instance23 = new lib.BodyCase()
            .setTransform(0, 2402.85, 0.7, 0.7);
        this[instance23.name = "option45"] = instance23;
        var instance22 = new lib.BodyCase()
            .setTransform(147, 2402.85, 0.7, 0.7);
        this[instance22.name = "option46"] = instance22;
        var instance21 = new lib.BodyCase()
            .setTransform(294, 2402.85, 0.7, 0.7);
        this[instance21.name = "option47"] = instance21;
        var instance20 = new lib.BodyCase()
            .setTransform(0, 2562.85, 0.7, 0.7);
        this[instance20.name = "option48"] = instance20;
        var instance19 = new lib.BodyCase()
            .setTransform(147, 2562.85, 0.7, 0.7);
        this[instance19.name = "option49"] = instance19;
        var instance18 = new lib.BodyCase()
            .setTransform(294, 2562.85, 0.7, 0.7);
        this[instance18.name = "option50"] = instance18;
        var instance17 = new lib.BodyCase()
            .setTransform(0, 2721.65, 0.7, 0.7);
        this[instance17.name = "option51"] = instance17;
        var instance16 = new lib.BodyCase()
            .setTransform(147, 2721.65, 0.7, 0.7);
        this[instance16.name = "option52"] = instance16;
        var instance15 = new lib.BodyCase()
            .setTransform(294, 2721.65, 0.7, 0.7);
        this[instance15.name = "option53"] = instance15;
        var instance14 = new lib.BodyCase()
            .setTransform(0, 2882.3, 0.7, 0.7);
        this[instance14.name = "option54"] = instance14;
        var instance13 = new lib.BodyCase()
            .setTransform(147, 2882.3, 0.7, 0.7);
        this[instance13.name = "option55"] = instance13;
        var instance12 = new lib.BodyCase()
            .setTransform(294, 2882.3, 0.7, 0.7);
        this[instance12.name = "option56"] = instance12;
        var instance11 = new lib.BodyCase()
            .setTransform(0.8, 3044.6, 0.7, 0.7);
        this[instance11.name = "option57"] = instance11;
        var instance10 = new lib.BodyCase()
            .setTransform(147.8, 3044.6, 0.7, 0.7);
        this[instance10.name = "option58"] = instance10;
        var instance9 = new lib.BodyCase()
            .setTransform(294.8, 3044.6, 0.7, 0.7);
        this[instance9.name = "option59"] = instance9;
        var instance8 = new lib.BodyCase()
            .setTransform(0, 3202.55, 0.7, 0.7);
        this[instance8.name = "option60"] = instance8;
        var instance7 = new lib.BodyCase()
            .setTransform(147, 3202.55, 0.7, 0.7);
        this[instance7.name = "option61"] = instance7;
        var instance6 = new lib.BodyCase()
            .setTransform(294, 3202.55, 0.7, 0.7);
        this[instance6.name = "option62"] = instance6;
        var instance5 = new lib.BodyCase_Summon1()
            .setTransform(147, 1612.85, 0.7, 0.7);
        this[instance5.name = "option31"] = instance5;
        var instance4 = new lib.BodyCase_Summon2()
            .setTransform(294, 1612.85, 0.7, 0.7);
        this[instance4.name = "option32"] = instance4;
        var instance3 = new lib.BodyMenu_MasterInfoButton()
            .setTransform(0, -3);
        this[instance3.name = "masterButton"] = instance3;
        var instance2 = new lib.ButtonCaseLabel()
            .setTransform(11.95, 12.15, 0.657, 0.657);
        this[instance2.name = "masterLabel"] = instance2;
        var instance1 = new lib.BodyMenu_MasterInfo()
            .setTransform(7, 28.05);
        this[instance1.name = "masterInfo"] = instance1;
        this.addChild(instance69, instance68, instance67, instance66, instance65, instance64, instance63, instance62, instance61, instance60, instance59, instance58, instance57, instance56, instance55, instance54, instance53, instance52, instance51, instance50, instance49, instance48, instance47, instance46, instance45, instance44, instance43, instance42, instance41, instance40, instance39, instance38, instance37, instance36, instance35, instance34, instance33, instance32, instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.BodyMenu = makeObj("Container", 'BodyMenu', undefined, function(){
        var instance4 = new Text("Fishes")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 30,
                fill: "#fff",
                leading: 2
            })
            .setTransform(0.15, 21);
        var instance3 = new lib.BodyCaseContainer()
            .setTransform(0, 78);
        this[instance3.name = "container"] = instance3;
        var instance2 = new lib.MenuCloseButton()
            .setTransform(425.5, 52);
        this[instance2.name = "closeButton"] = instance2;
        var instance1 = new Text("Collected 999/999")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 16,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 142.5
            })
            .setAlign("center")
            .setTransform(227.75, 44.5);
        this[instance1.name = "collectedText"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.WeaponCaseText = makeObj("Container", 'WeaponCaseText', undefined, function(){
        var instance3 = new Graphics()
            .drawCommands(shapes.assets[1])
            .setTransform(88, 174.95);
        var instance2 = new Text("Tusk")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 18,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 194
            })
            .setTransform(16.1, 17);
        this[instance2.name = "title"] = instance2;
        var instance1 = new Text("Tusks are the natural weapons born with stabfishes. \nThey are great for beginners as it's final form only requires 6000pts.\nstages: 4, final: 6000pts")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 12,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 165
            })
            .setTransform(18.1, 56);
        this[instance1.name = "desc"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.WeaponCaseBg = makeObj("Container", 'WeaponCaseBg', undefined, function(){
        var instance1 = new Graphics()
            .drawCommands(shapes.assets[20])
            .setTransform(-9.5, 69.95);
        this.addChild(instance1);
    });

    lib.WeaponCase = makeObj("Container", 'WeaponCase', undefined, function(){
        var instance13 = new lib.WeaponCaseBg()
            .setTransform(97.5, 105);
        var instance12 = new lib.Spear()
            .setTransform(22.75, 28.3, 0.698, 0.698, 1.571);
        this[instance12.name = "stage0"] = instance12;
        var instance11 = new lib.Spear()
            .setTransform(22.75, 77.15, 0.698, 0.698, 1.571);
        this[instance11.name = "stage1"] = instance11;
        var instance10 = new lib.Spear()
            .setTransform(22.75, 126, 0.698, 0.698, 1.571);
        this[instance10.name = "stage2"] = instance10;
        var instance9 = new lib.Spear()
            .setTransform(22.5, 177.45, 0.698, 0.698, 1.571);
        this[instance9.name = "stage3"] = instance9;
        var instance8 = new lib.Spear()
            .setTransform(22.75, 28.4, 0.698, 0.698, 0, -1.571, -1.571);
        this[instance8.name = "sil0"] = instance8;
        var instance7 = new lib.Spear()
            .setTransform(22.75, 77.15, 0.698, 0.698, 1.571);
        this[instance7.name = "sil1"] = instance7;
        var instance6 = new lib.Spear()
            .setTransform(22.75, 126, 0.698, 0.698, 1.571);
        this[instance6.name = "sil2"] = instance6;
        var instance5 = new lib.Spear()
            .setTransform(22.5, 177.45, 0.698, 0.698, 1.571);
        this[instance5.name = "sil3"] = instance5;
        var instance4 = new lib.CaseLabel()
            .setTransform(192.55, 12.55, 0.73, 0.731);
        this[instance4.name = "label"] = instance4;
        var instance3 = new lib.WeaponCaseText();
        this[instance3.name = "textCon"] = instance3;
        var instance2 = new lib.Lock()
            .setTransform(100, 99.45)
            .setAlpha(0.9);
        this[instance2.name = "lock"] = instance2;
        var instance1 = new lib.WeaponCaseActive();
        this[instance1.name = "activeBorder"] = instance1;
        this.addChild(instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1); /* this.cursor = 'pointer'*/
    });

    lib.WeaponCaseContainer = makeObj("Container", 'WeaponCaseContainer', undefined, function(){
        var instance7 = new lib.Container();
        this[instance7.name = "bg"] = instance7;
        var instance6 = new lib.WeaponCase();
        this[instance6.name = "wpn0"] = instance6;
        var instance5 = new lib.WeaponCase()
            .setTransform(233);
        this[instance5.name = "wpn1"] = instance5;
        var instance4 = new lib.WeaponCase()
            .setTransform(0, 249);
        this[instance4.name = "wpn2"] = instance4;
        var instance3 = new lib.WeaponCase()
            .setTransform(233, 249);
        this[instance3.name = "wpn3"] = instance3;
        var instance2 = new lib.WeaponCase()
            .setTransform(0, 498);
        this[instance2.name = "wpn4"] = instance2;
        var instance1 = new lib.WeaponCase()
            .setTransform(233, 498);
        this[instance1.name = "wpn5"] = instance1;
        this.addChild(instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.WeaponMenu = makeObj("Container", 'WeaponMenu', undefined, function(){
        var instance4 = new Text("Weapons")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 30,
                fill: "#fff",
                leading: 2
            })
            .setTransform(0.15, 21);
        var instance3 = new lib.MenuCloseButton()
            .setTransform(425.5, 52);
        this[instance3.name = "closeButton"] = instance3;
        var instance2 = new lib.WeaponCaseContainer()
            .setTransform(0, 78);
        this[instance2.name = "container"] = instance2;
        var instance1 = new Text("Collected 999/999")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 16,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 142.5
            })
            .setAlign("center")
            .setTransform(227.75, 44.5);
        this[instance1.name = "collectedText"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.FishShapeButton = makeObj("MovieClip", 'FishShapeButton',{
            duration: 3
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Bitmap 223"));
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: -13,
                y: -12
            },
            "1": {
                y: -13
            },
            "2": {
                y: -11
            }
        });
    });

    lib.AvatarContainer = makeObj("Container", 'AvatarContainer', undefined, function(){
        var instance1 = new lib.Player()
            .setTransform(0, 0, 1, 1, -1.571);
        this[instance1.name = "avatarMc"] = instance1;
        this.addChild(instance1);
    });

    lib.HallOfFameChampion = makeObj("Container", 'HallOfFameChampion', undefined, function(){
        var instance7 = new lib.AvatarContainer()
            .setTransform(194.25, 64.25, 0.55, 0.55, -1.571);
        this[instance7.name = "avatarCon"] = instance7;
        var instance6 = new Text("player_name")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 12,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 160
            })
            .setTransform(27, 2);
        this[instance6.name = "nameText"] = instance6;
        var instance5 = new Text("999999")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 12,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 56.95
            })
            .setAlign("right")
            .setTransform(258);
        this[instance5.name = "scoreText"] = instance5;
        var instance4 = new Text("9999")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 12,
                fill: "#fc0",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 30.6
            })
            .setAlign("right")
            .setTransform(196.6);
        this[instance4.name = "killsText"] = instance4;
        var instance3 = new Text("")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 20,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 22.3
            })
            .setTransform(2, 2);
        this[instance3.name = "rankText"] = instance3;
        var instance2 = new lib.MasterLabel()
            .setTransform(47.4, 25.6, 0.624, 0.624);
        this[instance2.name = "master"] = instance2;
        var instance1 = new lib.LegendaryLabel()
            .setTransform(49.5, 25.6, 0.624, 0.624);
        this[instance1.name = "legendary"] = instance1;
        this.addChild(instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.HallOfFameContent = makeObj("Container", 'HallOfFameContent', undefined, function(){
        var instance8 = new Sprite(fromFrame("assets_Bitmap 32"))
            .setTransform(-135, -44);
        var instance7 = new lib.HallOfFameChampion()
            .setTransform(-129, 7);
        this[instance7.name = "champion0"] = instance7;
        var instance6 = new lib.HallOfFameChampion()
            .setTransform(-129, 122);
        this[instance6.name = "champion1"] = instance6;
        var instance5 = new lib.HallOfFameChampion()
            .setTransform(-129, 237);
        this[instance5.name = "champion2"] = instance5;
        var instance4 = new Text("Today")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 12,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 160
            })
            .setAlign("center")
            .setTransform(0, -17.95);
        this[instance4.name = "dateText"] = instance4;
        var instance3 = new lib.FishShapeButton()
            .setTransform(118, -8.9);
        this[instance3.name = "rightButton"] = instance3;
        var instance2 = new lib.FishShapeButton()
            .setTransform(-118, -8.9, 1, 1, 0, 0, 3.142);
        this[instance2.name = "leftButton"] = instance2;
        var instance1 = new Text("Hall of Fame")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 17,
                fill: "#fc0",
                leading: 2
            })
            .setAlign("center")
            .setTransform(0, -45.95);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.HallOfFame = makeObj("Container", 'HallOfFame', undefined, function(){
        var instance2 = new lib.HallOfFameContent();
        this[instance2.name = "content"] = instance2;
        var instance1 = new lib.MenuCloseButton()
            .setTransform(0, 413.3);
        this[instance1.name = "closeButton"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.BlackPearlButtonLabel = makeObj("Container", 'BlackPearlButtonLabel', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 40"))
            .setTransform(-17, -18);
        this.addChild(instance1);
    });

    lib.BpButton = makeObj("MovieClip", 'BpButton',{
            duration: 3
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_blackpearl-100-s"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 33"))
            .setTransform(-23, 16);
        this.addTimedChild(instance1, 0, 3, {
                "0": {
                    x: -20,
                    y: -18,
                    sx: 0.93,
                    sy: 0.93
                },
                "1": {
                    y: -19
                },
                "2": {
                    y: -17
                }
            })
            .addTimedChild(instance2, 1, 2);
    });

    lib.Motto = makeObj("Container", 'Motto', undefined, function(){
        var instance1 = new Text("Happiness Is Only\nOne Stab Away!")
            .setStyle({
                fontFamily: "Calibri",
                fontSize: 18,
                fill: "#6f6",
                leading: -5
            })
            .setAlign("center")
            .setTransform(-5.329070518200751e-15, -21.5);
        this.addChild(instance1);
    });

    lib.MainMenuButton_HallOfFame = makeObj("MovieClip", 'MainMenuButton_HallOfFame',{
            duration: 4
        }, function(){
		this.stop()
        var instance3 = new Graphics()
            .drawCommands(shapes.assets[21]);
        var instance2 = new Sprite(fromFrame("assets_Bitmap 186"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 190"));
        var instance6 = new Graphics()
            .drawCommands(shapes.assets[22])
            .setTransform(-228.5, -349.55);
        var instance5 = new Sprite(fromFrame("assets_Bitmap 191"))
            .setTransform(-18, -18);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 219"));
        this.addTimedChild(instance3, 0, 3, {
                "0": {
                    x: -228.5,
                    y: -349.55
                }
            })
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: -18,
                    y: -18
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: -18,
                    y: -18
                },
                "2": {
                    y: -15
                }
            })
            .addTimedChild(instance6, 3, 1)
            .addTimedChild(instance5, 3, 1)
            .addTimedChild(instance1, 0, 4, {
                "0": {
                    x: 6,
                    y: -13
                },
                "2": {
                    y: -11
                },
                "3": {
                    y: -13
                }
            });
    });

    lib.MainMenuButton_Hat = makeObj("MovieClip", 'MainMenuButton_Hat',{
            duration: 4
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame("assets_Bitmap 192"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 84"));
        var instance5 = new Sprite(fromFrame("assets_Bitmap 86"));
        var instance7 = new Sprite(fromFrame("assets_Bitmap 194"))
            .setTransform(-18, -13);
        var instance6 = new Sprite(fromFrame("assets_Bitmap 185"))
            .setTransform(-18, -18);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 216"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 215"));
        this.addTimedChild(instance3, 0, 3, {
                "0": {
                    x: -18,
                    y: -13
                }
            })
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: -18,
                    y: -18
                }
            })
            .addTimedChild(instance5, 1, 2, {
                "1": {
                    x: -18,
                    y: -18
                },
                "2": {
                    y: -15
                }
            })
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1)
            .addTimedChild(instance1, 0, 4, {
                "0": {
                    x: -10,
                    y: -7
                },
                "2": {
                    y: -5
                },
                "3": {
                    y: -7
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: -82,
                    y: -54
                }
            });
    });

    lib.MainMenuButton_Face = makeObj("MovieClip", 'MainMenuButton_Face',{
            duration: 4
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame("assets_Bitmap 192"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 84"));
        var instance5 = new Sprite(fromFrame("assets_Bitmap 86"));
        var instance7 = new Sprite(fromFrame("assets_Bitmap 194"))
            .setTransform(-18, -13);
        var instance6 = new Sprite(fromFrame("assets_Bitmap 185"))
            .setTransform(-18, -18);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 214"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 213"));
        this.addTimedChild(instance3, 0, 3, {
                "0": {
                    x: -18,
                    y: -13
                }
            })
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: -18,
                    y: -18
                }
            })
            .addTimedChild(instance5, 1, 2, {
                "1": {
                    x: -18,
                    y: -18
                },
                "2": {
                    y: -15
                }
            })
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1)
            .addTimedChild(instance1, 0, 4, {
                "0": {
                    x: -10,
                    y: -7
                },
                "2": {
                    y: -5
                },
                "3": {
                    y: -7
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: -52,
                    y: -54
                }
            });
    });

    lib.MainMenuButton_Weapon = makeObj("MovieClip", 'MainMenuButton_Weapon',{
            duration: 4
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame("assets_Bitmap 192"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 84"));
        var instance5 = new Sprite(fromFrame("assets_Bitmap 86"));
        var instance7 = new Sprite(fromFrame("assets_Bitmap 194"))
            .setTransform(-18, -13);
        var instance6 = new Sprite(fromFrame("assets_Bitmap 185"))
            .setTransform(-18, -18);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 212"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 211"));
        this.addTimedChild(instance3, 0, 3, {
                "0": {
                    x: -18,
                    y: -13
                }
            })
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: -18,
                    y: -18
                }
            })
            .addTimedChild(instance5, 1, 2, {
                "1": {
                    x: -18,
                    y: -18
                },
                "2": {
                    y: -15
                }
            })
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1)
            .addTimedChild(instance1, 0, 4, {
                "0": {
                    x: -14,
                    y: -7
                },
                "2": {
                    y: -5
                },
                "3": {
                    y: -7
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: -60,
                    y: -54
                }
            });
    });

    lib.MainMenuButton_Body = makeObj("MovieClip", 'MainMenuButton_Body',{
            duration: 4
        }, function(){
		this.stop()
        var instance3 = new Sprite(fromFrame("assets_Bitmap 192"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 84"));
        var instance5 = new Sprite(fromFrame("assets_Bitmap 86"));
        var instance7 = new Sprite(fromFrame("assets_Bitmap 194"))
            .setTransform(-18, -13);
        var instance6 = new Sprite(fromFrame("assets_Bitmap 185"))
            .setTransform(-18, -18);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 210"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 17"));
        this.addTimedChild(instance3, 0, 3, {
                "0": {
                    x: -18,
                    y: -13
                }
            })
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: -18,
                    y: -18
                }
            })
            .addTimedChild(instance5, 1, 2, {
                "1": {
                    x: -18,
                    y: -18
                },
                "2": {
                    y: -15
                }
            })
            .addTimedChild(instance7, 3, 1)
            .addTimedChild(instance6, 3, 1)
            .addTimedChild(instance1, 0, 4, {
                "0": {
                    x: -10,
                    y: -10
                },
                "2": {
                    y: -8
                },
                "3": {
                    y: -10
                }
            })
            .addTimedChild(instance4, 1, 2, {
                "1": {
                    x: -18,
                    y: -54
                }
            });
    });

    lib.AvatarBgFrost = makeObj("Container", 'AvatarBgFrost', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_avatarbg-frost"))
            .setTransform(-91, -30.5);
        this.addChild(instance1);
    });

    lib.LeftColumn = makeObj("Container", 'LeftColumn', undefined, function(){
        var instance19 = new Sprite(fromFrame("assets_Bitmap 28"))
            .setTransform(-82, -2);
        var instance18 = new lib.AvatarBgFrost()
            .setTransform(1, 16.5);
        this[instance18.name = "frost"] = instance18;
        var instance17 = new lib.AvatarBgFrost()
            .setTransform(-0.95, 245.75, 0.902, 0.729, 0, 0, 3.142);
        this[instance17.name = "frost2"] = instance17;
        var instance16 = new lib.AvatarContainer()
            .setTransform(0, 152.7, 0.8, 0.8);
        this[instance16.name = "avatarCon"] = instance16;
        var instance15 = new lib.SkinButton()
            .setTransform(64.35, 221.7, 0.6, 0.6);
        this[instance15.name = "skinButton"] = instance15;
        var instance14 = new lib.MainMenuButton_Body()
            .setTransform(-66, 267);
        this[instance14.name = "bodyButton"] = instance14;
        var instance13 = new lib.MainMenuButton_Weapon()
            .setTransform(-22, 267);
        this[instance13.name = "weaponButton"] = instance13;
        var instance12 = new lib.MainMenuButton_Face()
            .setTransform(22, 267);
        this[instance12.name = "faceButton"] = instance12;
        var instance11 = new lib.MainMenuButton_Hat()
            .setTransform(66, 267);
        this[instance11.name = "hatButton"] = instance11;
        var instance10 = new lib.MainMenuButton_HallOfFame()
            .setTransform(-66, 312.95);
        this[instance10.name = "hofButton"] = instance10;
        var instance9 = new lib.Motto()
            .setTransform(-4.5, 319);
        this[instance9.name = "motto"] = instance9;
        var instance8 = new Sprite(fromFrame("assets_Bitmap 34"))
            .setTransform(-48, 5);
        var instance7 = new Text("0")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fontWeight: "bold",
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 56.3
            })
            .setAlign("center")
            .setTransform(-11.850000000000001, 7);
        this[instance7.name = "numPearlsText"] = instance7;
        var instance6 = new lib.BpButton()
            .setTransform(-57.45, 16.05);
        this[instance6.name = "bpButton"] = instance6;
        var instance5 = new lib.ButtonCaseLabel()
            .setTransform(-5, 253, 0.657, 0.657);
        this[instance5.name = "weaponLabel"] = instance5;
        var instance4 = new lib.ButtonCaseLabel()
            .setTransform(-49, 253, 0.659, 0.659);
        this[instance4.name = "bodyLabel"] = instance4;
        var instance3 = new lib.ButtonCaseLabel()
            .setTransform(83, 253, 0.657, 0.657);
        this[instance3.name = "hatLabel"] = instance3;
        var instance2 = new lib.ButtonCaseLabel()
            .setTransform(39, 253, 0.659, 0.659);
        this[instance2.name = "faceLabel"] = instance2;
        var instance1 = new lib.BlackPearlButtonLabel()
            .setTransform(-37.8, 3.25, 0.659, 0.659);
        this[instance1.name = "bpLabel"] = instance1;
        this.addChild(instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.MainMenu = makeObj("Container", 'MainMenu', undefined, function(){
        var instance6 = new lib.LeftColumn()
            .setTransform(-255, 80);
        this[instance6.name = "left"] = instance6;
        var instance5 = new lib.HallOfFame()
            .setTransform(0, 275);
        this[instance5.name = "hallOfFame"] = instance5;
        var instance4 = new lib.WeaponMenu()
            .setTransform(-160);
        this[instance4.name = "weaponMenu"] = instance4;
        var instance3 = new lib.BodyMenu()
            .setTransform(-160);
        this[instance3.name = "bodyMenu"] = instance3;
        var instance2 = new lib.HatMenu()
            .setTransform(-160);
        this[instance2.name = "hatMenu"] = instance2;
        var instance1 = new lib.FaceMenu()
            .setTransform(-160);
        this[instance1.name = "faceMenu"] = instance1;
        this.addChild(instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.ContinueButton = makeObj("MovieClip", 'ContinueButton',{
            duration: 3
        }, function(){
		this.stop()
        var instance2 = new Graphics()
            .drawCommands(shapes.assets[23])
            .setTransform(-586.15, -424.65);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 197"));
        this.addTimedChild(instance2)
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    x: -110,
                    y: -32
                },
                "1": {
                    y: -34
                },
                "2": {
                    y: -31
                }
            });
    });

    lib.GameOver = makeObj("Container", 'GameOver', undefined, function(){
        var instance8 = new Text("Revenge-Killed by")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 30,
                fill: "#fc0",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 239.5
            })
            .setAlign("center")
            .setTransform(0.03375000000001571, 86.978, 0.811, 0.811);
        this[instance8.name = "killByText"] = instance8;
        var instance7 = new Text("Game Over")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 45,
                fill: "#fff",
                leading: 2
            })
            .setAlign("center")
            .setTransform(0, -4.05);
        var instance6 = new Text("RevengeKiller")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 30,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 930
            })
            .setAlign("center")
            .setTransform(0.06484999999997854, 129.928, 0.811, 0.811);
        this[instance6.name = "killerText"] = instance6;
        var instance5 = new Text("kills")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 25,
                fill: "#f36",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 50.5
            })
            .setAlign("center")
            .setTransform(-97.02145000000002, 174.57799999999997, 0.811, 0.811);
        var instance4 = new Text("score")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 25,
                fill: "#6f6",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 56.6
            })
            .setAlign("center")
            .setTransform(94.62855, 174.57799999999997, 0.811, 0.811);
        var instance3 = new Text("100")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 30,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 242
            })
            .setAlign("center")
            .setTransform(-101.41915, 202.878, 0.811, 0.811);
        this[instance3.name = "killsText"] = instance3;
        var instance2 = new Text("999999")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 30,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 242
            })
            .setAlign("center")
            .setTransform(95.58084999999994, 202.878, 0.811, 0.811);
        this[instance2.name = "scoreText"] = instance2;
        var instance1 = new lib.ContinueButton()
            .setTransform(-0.05, 288.95);
        this[instance1.name = "okButton"] = instance1;
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.LoadingSymbol = makeObj("Container", 'LoadingSymbol', undefined, function(){
        var instance1 = new Graphics()
            .drawCommands(shapes.assets[24]);
        this.addChild(instance1);
    });

    lib.LoadingSymbolAnimated = makeObj("MovieClip", 'LoadingSymbolAnimated',{
            duration: 24
        }, function(){
		this.stop()
        var instance1 = new lib.LoadingSymbol();
        this.addTimedChild(instance1, 0, 24, {
            "0": {
                kx: 0,
                ky: 0,
                r: 0
            },
            "2": {
                r: 0.524
            },
            "4": {
                r: 1.047
            },
            "6": {
                r: 1.571
            },
            "8": {
                kx: 4.189,
                ky: 2.094,
                r: 0
            },
            "10": {
                kx: 3.665,
                ky: 2.618
            },
            "12": {
                kx: 3.142,
                ky: 3.142
            },
            "14": {
                kx: 0,
                ky: 0,
                r: -2.618
            },
            "16": {
                r: -2.094
            },
            "18": {
                r: -1.571
            },
            "20": {
                r: -1.047
            },
            "22": {
                r: -0.524
            }
        });
    });

    lib.PleaseWait = makeObj("MovieClip", 'PleaseWait',{
            duration: 4,
            labels: {
                wait: 0,
                success: 1,
                fail: 2,
                loading: 3
            }
        }, function(){
		this.stop()
        var instance3 = new Graphics()
            .drawCommands(shapes.assets[1]);
        var instance2 = new Sprite(fromFrame("assets_Bitmap 198"));
        var instance4 = new Sprite(fromFrame("assets_Bitmap 199"));
        var instance5 = new Sprite(fromFrame("assets_Bitmap 200"));
        var instance6 = new lib.LoadingSymbolAnimated();
        this[instance6.name = "loading"] = instance6;
        var instance1 = new Text("")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 15,
                fill: "#fff",
                leading: -3,
                wordWrap: true,
                wordWrapWidth: 172.35
            })
            .setAlign("center")
            .setTransform(0.8749999999999929, -50.35);
        this[instance1.name = "reason_txt"] = instance1;
        this.addTimedChild(instance3, 0, 4, {
                "0": {
                    x: -9.5,
                    y: 69.95
                }
            })
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: -85,
                    y: -21
                }
            })
            .addTimedChild(instance4, 1, 1, {
                "1": {
                    x: -85,
                    y: -74
                }
            })
            .addTimedChild(instance5, 2, 1, {
                "2": {
                    x: -85,
                    y: -94
                }
            })
            .addTimedChild(instance6, 3, 1)
            .addTimedChild(instance1);
    });

    lib.ExtraLifeRejectButton = makeObj("MovieClip", 'ExtraLifeRejectButton',{
            duration: 3
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Bitmap 124"));
        this.addTimedChild(instance1, 0, 3, {
            "0": {
                x: -75,
                y: -22
            },
            "2": {
                y: -21
            }
        });
    });

    lib.ExtraLifeButton = makeObj("MovieClip", 'ExtraLifeButton',{
            duration: 3
        }, function(){
		this.stop()
        var instance2 = new Graphics()
            .drawCommands(shapes.assets[25])
            .setTransform(-551.15, -419.15);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 195"));
        this.addTimedChild(instance2)
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    x: -75,
                    y: -19
                },
                "1": {
                    y: -21
                },
                "2": {
                    y: -18
                }
            });
    });

    lib.ExtraLifeButtonNoVideo = makeObj("MovieClip", 'ExtraLifeButtonNoVideo',{
            duration: 3
        }, function(){
		this.stop()
        var instance2 = new Graphics()
            .drawCommands(shapes.assets[25])
            .setTransform(-551.15, -419.15);
        var instance1 = new Sprite(fromFrame("assets_Bitmap 196"));
        this.addTimedChild(instance2)
            .addTimedChild(instance1, 0, 3, {
                "0": {
                    x: -75,
                    y: -19
                },
                "1": {
                    y: -21
                },
                "2": {
                    y: -18
                }
            });
    });

    lib.PinkSquare = makeObj("Container", 'PinkSquare', undefined, function(){
        var instance1 = new Graphics()
            .drawCommands(shapes.assets[27]);
        this.addChild(instance1);
    });

    lib.Heart = makeObj("Container", 'Heart', undefined, function(){
        var instance1 = new Graphics()
            .drawCommands(shapes.assets[28]);
        this.addChild(instance1);
    });

    lib.ExtraLifeMc = makeObj("Container", 'ExtraLifeMc', undefined, function(){
        var instance6 = new Graphics()
            .drawCommands(shapes.assets[26])
            .setRenderable(false);
        var instance9 = new lib.WeaponCaseBg()
            .setTransform(0, -20);
        var instance8 = new lib.Heart()
            .setTransform(0, -30.85);
        var instance7 = new lib.PinkSquare()
            .setTransform(-50, -71.55)
            .setMask(instance6);
        this[instance7.name = "redBar"] = instance7;
        var instance5 = new Text("5")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 40,
                fontWeight: "bold",
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 33.35
            })
            .setAlign("center")
            .setTransform(0.22499999999999432, -55.65);
        this[instance5.name = "secText"] = instance5;
        var instance4 = new lib.ExtraLifeButtonNoVideo()
            .setTransform(0, 44.65, 1, 0.98);
        this[instance4.name = "okButton"] = instance4;
        var instance3 = new Text("Game Over")
            .setStyle({
                fontFamily: "Pacifico",
padding: 10,
                fontSize: 20,
                fill: "#ccc",
                leading: 2
            })
            .setAlign("center")
            .setTransform(0, -124.4);
        var instance2 = new lib.ExtraLifeButton()
            .setTransform(0, 45.05);
        this[instance2.name = "okButtonWithAd"] = instance2;
        var instance1 = new lib.ExtraLifeRejectButton()
            .setTransform(1, 110);
        this[instance1.name = "noButton"] = instance1;
        this.addChild(instance6, instance9, instance8, instance7, instance5, instance4, instance3, instance2, instance1);
    });

    lib.EmojiMenuButton = makeObj("Container", 'EmojiMenuButton', undefined, function(){
        var instance1 = new Sprite(fromFrame("assets_Bitmap 94"))
            .setTransform(-15, -15);
        this.addChild(instance1);
    });

    lib.RandomEvent_Stamp = makeObj("MovieClip", 'RandomEvent_Stamp',{
            duration: 2,
            labels: {
                success: 0,
                failed: 1
            }
        }, function(){
		this.stop()
        var instance1 = new Sprite(fromFrame("assets_Bitmap 188"));
        var instance2 = new Sprite(fromFrame("assets_Bitmap 189"))
            .setTransform(-57, -20);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -57,
                    y: -20
                }
            })
            .addTimedChild(instance2, 1, 1);
    });

    lib.RandomEventBar = makeObj("Container", 'RandomEventBar', undefined, function(){
        var instance1 = new Graphics()
            .drawCommands(shapes.assets[29]);
        this.addChild(instance1);
    });

    lib.EventNames = makeObj("MovieClip", 'EventNames',{
            duration: 15
        }, function(){
		this.stop()
        var instance1 = new Text("Wanted")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance2 = new Text("Weapon Size +50%")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance3 = new Text("Kill Score x2")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance4 = new Text("Kill Streak Score x2")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance5 = new Text("Food Score x2")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance6 = new Text("Unlimited Boost")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance7 = new Text("Abnormal Immunity")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance8 = new Text("Stab-proof")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance9 = new Text("Bounty Hunting")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance10 = new Text("Weapon Size -50%")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance11 = new Text("Body Size +50%")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance12 = new Text("Body Size -50%")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance13 = new Text("Kill Score x1.5")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance14 = new Text("Kill Streak Score x1.5")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center");
        var instance15 = new Text("Food Score x1.5")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#2d2201",
                leading: 2
            })
            .setAlign("center")
            .setTransform(0, -14.25);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance4, 3, 1, {
                "3": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance5, 4, 1, {
                "4": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance6, 5, 1, {
                "5": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance7, 6, 1, {
                "6": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance8, 7, 1, {
                "7": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance9, 8, 1, {
                "8": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance10, 9, 1, {
                "9": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance11, 10, 1, {
                "10": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance12, 11, 1, {
                "11": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance13, 12, 1, {
                "12": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance14, 13, 1, {
                "13": {
                    x: -14,
                    y: -12.25
                }
            })
            .addTimedChild(instance15, 14, 1);
    });

    lib.RandomEventCon = makeObj("Container", 'RandomEventCon', undefined, function(){
        var instance5 = new Graphics()
            .drawCommands(shapes.assets[30]);
        var instance4 = new lib.EventNames()
            .setTransform(2, 3);
        this[instance4.name = "names"] = instance4;
        var instance3 = new Sprite(fromFrame("assets_Bitmap 193"))
            .setTransform(-49, -37);
        var instance2 = new lib.RandomEventBar()
            .setTransform(-135.5, 30);
        this[instance2.name = "bar"] = instance2;
        var instance1 = new lib.RandomEvent_Stamp()
            .setTransform(110, -13.4, 1, 1, 0.785);
        this[instance1.name = "stamp"] = instance1;
        this.addChild(instance5, instance4, instance3, instance2, instance1);
    });

    lib.BoostMeterBar = makeObj("Container", 'BoostMeterBar', undefined, function(){
        var instance1 = new Graphics()
            .drawCommands(shapes.assets[32])
            .setTransform(-486.35, -604, 1.001);
        this.addChild(instance1);
    });

    lib.BoostMeter = makeObj("Container", 'BoostMeter', undefined, function(){
        var instance2 = new Graphics()
            .drawCommands(shapes.assets[31])
            .setRenderable(false)
            .setTransform(-486.35, -604, 1.001);
        var instance4 = new Graphics()
            .drawCommands(shapes.assets[31])
            .setTransform(-486.35, -604, 1.001);
        var instance3 = new lib.BoostMeterBar()
            .setMask(instance2);
        this[instance3.name = "bar"] = instance3;
        var instance1 = new Text("Click To Boost")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 190
            })
            .setAlign("center")
            .setTransform(1.0500000000000007, -21.7);
        this[instance1.name = "instruction"] = instance1;
        this.addChild(instance2, instance4, instance3, instance1);
    });

    lib.MyScores = makeObj("Container", 'MyScores', undefined, function(){
        var instance5 = new Graphics()
            .drawCommands(shapes.assets[33])
            .setTransform(-774, -14.05);
        var instance4 = new Text("9999999")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 60
            })
            .setAlign("right")
            .setTransform(111.39999999999999, 12.25);
        this[instance4.name = "scores"] = instance4;
        var instance3 = new Text("Score\nKills\nAlive")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 40.6
            })
            .setTransform(8, 14.25);
        this[instance3.name = "names"] = instance3;
        var instance2 = new Text("0s")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 60
            })
            .setAlign("right")
            .setTransform(111.39999999999999, 51.35);
        this[instance2.name = "life"] = instance2;
        var instance1 = new Text("10000")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 60
            })
            .setAlign("right")
            .setTransform(111.39999999999999, 32.25);
        this[instance1.name = "kills"] = instance1;
        this.addChild(instance5, instance4, instance3, instance2, instance1);
    });

    lib.ScoreboardRow = makeObj("Container", 'ScoreboardRow', undefined, function(){
        var instance3 = new Text("99.")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 23
            })
            .setTransform(2, 2);
        this[instance3.name = "ranks"] = instance3;
        var instance2 = new Text("9999999")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 57
            })
            .setAlign("right")
            .setTransform(170, 2);
        this[instance2.name = "scores"] = instance2;
        var instance1 = new Text("dragonwhites")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fff",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 96
            })
            .setTransform(21.95, 2);
        this[instance1.name = "names"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.Scoreboard = makeObj("Container", 'Scoreboard', undefined, function(){
        var instance10 = new Graphics()
            .drawCommands(shapes.assets[35])
            .setTransform(-953.95, -14.05);
        var instance9 = new Text("99.")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fc0",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 28
            })
            .setTransform(-171.95, 131.2);
        this[instance9.name = "myRank"] = instance9;
        var instance8 = new Text("10000")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fc0",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 57
            })
            .setAlign("right")
            .setTransform(-3.950000000000003, 129.2);
        this[instance8.name = "myScore"] = instance8;
        var instance7 = new Text("dragonwhites")
            .setStyle({
                fontFamily: "Noto Sans",
                fontSize: 13,
                fill: "#fc0",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 96
            })
            .setTransform(-152, 131.2);
        this[instance7.name = "myName"] = instance7;
        var instance6 = new lib.ScoreboardRow()
            .setTransform(-173.95, 2.25);
        this[instance6.name = "row0"] = instance6;
        var instance5 = new lib.ScoreboardRow()
            .setTransform(-173.95, 27.25);
        this[instance5.name = "row1"] = instance5;
        var instance4 = new lib.ScoreboardRow()
            .setTransform(-173.95, 52.25);
        this[instance4.name = "row2"] = instance4;
        var instance3 = new lib.ScoreboardRow()
            .setTransform(-173.95, 77.25);
        this[instance3.name = "row3"] = instance3;
        var instance2 = new lib.ScoreboardRow()
            .setTransform(-173.95, 102.25);
        this[instance2.name = "row4"] = instance2;
        var instance1 = new Graphics()
            .drawCommands(shapes.assets[34]);
        this.addChild(instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.StabfishStage = makeObj("Container", 'StabfishStage', undefined, function(){
        var instance9 = new lib.Scoreboard()
            .setTransform(945.95, 14.05);
        this[instance9.name = "scoreboard"] = instance9;
        var instance8 = new lib.MyScores()
            .setTransform(15, 14.05);
        this[instance8.name = "myScores"] = instance8;
        var instance7 = new lib.BoostMeter()
            .setTransform(480, 620);
        this[instance7.name = "boostMeter"] = instance7;
        var instance6 = new lib.RandomEventCon()
            .setTransform(480, 550.95);
        this[instance6.name = "randomEvents"] = instance6;
        var instance5 = new lib.EmojiMenuButton()
            .setTransform(25.4, 618.35);
        this[instance5.name = "emojiMenuButton"] = instance5;
        var instance4 = new lib.ExtraLifeMc()
            .setTransform(480, 318.7);
        this[instance4.name = "extraLife"] = instance4;
        var instance3 = new lib.PleaseWait()
            .setTransform(482.5, 410);
        this[instance3.name = "pleaseWait"] = instance3;
        var instance2 = new lib.GameOver()
            .setTransform(480);
        this[instance2.name = "gameOver"] = instance2;
        var instance1 = new lib.MainMenu()
            .setTransform(480);
        this[instance1.name = "mainMenu"] = instance1;
        this.addChild(instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.assets = makeObj("MovieClip", 'assets',{
            duration: 1,
            framerate: 60,
            loop: false
        }, function(){
		this.stop()
        var instance2 = new lib.StabfishStage();
        var instance1 = new lib.Assets();
        this[instance1.name = "assets"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.assets.assets = {
        "assets": "images/assets.shapes.txt?t=1725996980483",
        "assets_atlas_1": "images/assets_atlas_1.json?t=1725996980472"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.assets,
        background: 0x3366ff,
        width: 960,
        height: 640,
        framerate: 60,
        totalFrames: 1,
        library: lib
    };
}