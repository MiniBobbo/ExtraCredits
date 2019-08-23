import { C } from "../C";

export class Preload extends Phaser.Scene {
    preload() {
        // this.load.setBaseURL('http://labs.phaser.io');
        this.load.image("tiles", "./assets/defaulttiles.png");
        this.load.tilemapTiledJSON("test", "./assets/testlevel.json");
        this.load.atlas('atlas', './assets/atlas.png', './assets/atlas.json');
        this.load.bitmapFont('script', './assets/font_0.png', './assets/font.fnt');
        this.load.bitmapFont('largescript', './assets/largefont_0.png', './assets/largefont.fnt');

    }
    create() {
        this.anims.create({ key: 'whitejumpdown', frames: this.anims.generateFrameNames('atlas', { prefix: 'meeple_whitejumpdown_', end: 2}), repeat: 0 });
        this.anims.create({ key: 'blackjumpdown', frames: this.anims.generateFrameNames('atlas', { prefix: 'meeple_blackjumpdown_', end: 2}), repeat: 0 });
        this.anims.create({ key: 'whitejumpup', frames: this.anims.generateFrameNames('atlas', { prefix: 'whitejumpup_', end: 58}), repeat: 0, frameRate:60 });
        this.anims.create({ key: 'blackjumpup', frames: this.anims.generateFrameNames('atlas', { prefix: 'blackjumpup_', end: 58}), repeat: 0, frameRate:60 });
        this.anims.create({ key: 'whiteshatter', frames: this.anims.generateFrameNames('atlas', { prefix: 'whteshatter_', end: 178}), repeat: 0, frameRate:60 });
        this.anims.create({ key: 'blackshatter', frames: this.anims.generateFrameNames('atlas', { prefix: 'blackshatter_', end: 178}), repeat: 0, frameRate:60 });
        this.anims.create({ key: 'whiterun', frames: this.anims.generateFrameNames('atlas', { prefix: 'meeple_whiterun_', end: 8}), repeat: -1 });
        this.anims.create({ key: 'blackrun', frames: this.anims.generateFrameNames('atlas', { prefix: 'meeple_blackrun_', end: 8}), repeat: -1 });
        this.anims.create({ key: 'blackstand', frames: this.anims.generateFrameNames('atlas', { prefix: 'meeple_black_', end: 0}), repeat: 0 });
        this.anims.create({ key: 'whitestand', frames: this.anims.generateFrameNames('atlas', { prefix: 'meeple_white_', end: 0}), repeat: 0 });
        this.anims.create({ key: 'blackportal', frames: this.anims.generateFrameNames('atlas', { prefix: 'blackportal_', end: 29}), repeat: -1, frameRate:60 });
        this.anims.create({ key: 'whiteportal', frames: this.anims.generateFrameNames('atlas', { prefix: 'whiteportal_', end: 29}), repeat: -1, frameRate:60 });
        this.anims.create({ key: 'whitespike', frames: this.anims.generateFrameNames('atlas', { prefix: 'things_whitespike_', end: 0}), repeat: 0});
        this.anims.create({ key: 'blackspike', frames: this.anims.generateFrameNames('atlas', { prefix: 'things_blackspike_', end: 0}), repeat: 0});
        this.anims.create({ key: 'grayspike', frames: this.anims.generateFrameNames('atlas', { prefix: 'things_grayspike_', end: 0}), repeat: 0});
        this.anims.create({ key: 'whitebolt', frames: this.anims.generateFrameNames('atlas', { prefix: 'things_whitebolt_', end: 0}), repeat: 0});
        this.anims.create({ key: 'blackbolt', frames: this.anims.generateFrameNames('atlas', { prefix: 'things_blackbolt_', end: 0}), repeat: 0});
        this.anims.create({ key: 'whitelauncher', frames: this.anims.generateFrameNames('atlas', { prefix: 'things_whitelauncher_', end: 0}), repeat: 0});

        this.scene.start('game', C.CurrentLevel);
    }
}