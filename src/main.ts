import * as Phaser from "phaser";
import { Preload } from "./scenes/Preload";
import { GameScene } from "./scenes/GameScene";
import { IH } from "./IH/IH";


class Main extends Phaser.Game {
  constructor() {
    const config: GameConfig = {
      type: Phaser.AUTO,
      // width: 480,
      // height: 270,
      width: 960,
      height: 540,
      zoom:1,
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
      },
      scene:{
        // preload:preload,
        // game:Game
      },
      render: {
        pixelArt:true,
      }
    };
    super(config);

    IH.AddVirtualInput('up');
    IH.AddVirtualInput('down');
    IH.AddVirtualInput('left');
    IH.AddVirtualInput('right');
    IH.AddVirtualInput('switch');
    IH.AddVirtualInput('test');
    IH.AssignKeyToVirtualInput('W', 'up');
    IH.AssignKeyToVirtualInput('S', 'down');
    IH.AssignKeyToVirtualInput('A', 'left');
    IH.AssignKeyToVirtualInput('D', 'right');
    IH.AssignKeyToVirtualInput('SPACE', 'switch');
    IH.MapMouseToVirtualInput('test');
    // this.scene.add("boot", Boot, false);
    this.scene.add("preload", Preload, false);
    this.scene.add("game", GameScene, false);
    // this.scene.add("game", Game, false);
    this.scene.start("preload", {levelName:"test"});
    }

}

window.onload = () => {
  const GameApp: Phaser.Game = new Main();
};