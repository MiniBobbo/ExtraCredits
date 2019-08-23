import { Thing } from "./Thing";
import { GameScene } from "../scenes/GameScene";
import { Meeple } from "./Meeple";

export class Spike extends Thing {
    constructor(scene:GameScene, rotation?:number) {
        super(scene);
        if(rotation == null || rotation == 0) 
            this.dynamic.body.setSize(32,8);

    }

    Overlap(t:Thing) {
        if(t instanceof Meeple)
            this.scene.events.emit('kill');
    }
}