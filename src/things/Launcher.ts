import { Thing } from "./Thing";
import { ATTACK } from "../defs/ATTACK";
import { GameScene } from "../scenes/GameScene";

export class Launcher extends Thing {
    FIRE_DELAY:number = 8000;
    currentDelay:number = 0;
    fireX:number = 200;
    fireY:number = 0;

    constructor(scene:GameScene) {
        super(scene);

    }

    UpdateThing(time:number, dt:number) {
        this.currentDelay += dt;
        if(this.currentDelay >= this.FIRE_DELAY) {
            this.currentDelay -= this.FIRE_DELAY;
            this.scene.LaunchAttack({
                type:ATTACK.BOLT,
                x:this.dynamic.x,
                y:this.dynamic.y,
                data:{},
                vx:this.fireX,
                vy:this.fireY
            });
        }
    }
}