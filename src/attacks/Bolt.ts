import { Attack } from "../things/Attack";
import { AttackDef } from "../defs/AttackDef";
import { GameScene } from "../scenes/GameScene";

export class Bolt extends Attack {
    constructor(scene:GameScene) {
        super(scene);
        this.dynamic.setSize(20,20);
        
    }

    Launch(def:AttackDef) {
        super.Launch(def);
        this.dynamic.setVelocity(def.vx,def.vy);
    }
}