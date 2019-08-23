import { Thing } from "./Thing";
import { GameScene } from "../scenes/GameScene";
import { ATTACK } from "../defs/ATTACK";
import { AttackDef } from "../defs/AttackDef";
import { AttackFactory } from "../AttackFactory";
import { C } from "../C";

export class Attack extends Thing {
    active:boolean = false;
    alive:boolean = false;
    type:ATTACK;
    lifeTime:number;

    UpdateThing(time:number, dt:number) {
        this.lifeTime -= dt;
        if(this.lifeTime <=0) {
            this.kill();
            return;
        }
    }
    kill() {
        this.active = false;
        this.alive = false;
        this.dynamic.disableBody(true);
        this.dynamic.setVisible(false);
        this.lifeTime = 0;
    }
    Launch(def:AttackDef) {
        this.lifeTime = C.DEFAULT_ATTACK_LIFETIME;
        this.active = true;
        this.alive = true;
        this.dynamic.setActive(true)
        .enableBody(true, def.x,def.y,true,true);
    }

}