import { Thing } from "./Thing";
import { GameScene } from "../scenes/GameScene";
import { IH } from "../IH/IH";
import { C } from "../C";
import { MeepleAir } from "../FSMS/MeepleAir";
import { MeepleGround } from "../FSMS/MeepleGround";

export class Meeple extends Thing{
    ih:IH;
    constructor(scene:GameScene, ih:IH) {
        super(scene);
        this.setSize(22,30);
        
        this.ih = ih;

        this.fsm.AddModules('air', new MeepleAir());
        this.fsm.AddModules('ground', new MeepleGround());
        this.fsm.ChangeModule('air');

    }

    Overlap(t:Thing) {
    }

    UpdateThing(time:number, dt:number) {
        const maxVelocityY = (this.dynamic.body.velocity.y < 0) ? 1000 : C.MAX_FALL;
        this.dynamic.setAcceleration(0,0);
        this.fsm.Update(time, dt);

    }


}