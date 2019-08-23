import { IFSMModule } from "../FSM/IFSMModule";
import { IFSM } from "../FSM/IFSM";
import { Thing } from "../things/Thing";
import { MeepleFSM } from "./MeepleFSM";
import { Meeple } from "../things/Meeple";
import { IH } from "../IH/IH";
import { C } from "../C";

export class MeepleAir extends MeepleFSM {
    previousYVelocity:number;
    airTime:number;
    begin(): void {
        this.sprite.setDrag(C.DRAG, 0);
        // this.sprite.anims.play(`${this.color}jump`);
        if(this.sprite.body.velocity.y >= 0)
            this.m.PlayAnimation(`${this.color}jumpdown`, true);
        else {
            this.m.PlayAnimation(`${this.color}jumpup`, true);
            this.airTime = 0;
        }
        this.previousYVelocity = this.sprite.body.velocity.y;
    }    
    
    end(): void {
        this.airTime = C.JUMP_TIME;
    }
    update(time: number, delta: number): void {
        const m:Meeple = this.m;
        const ih:IH = m.ih;
        if(this.sprite.body.wasTouching.down || this.sprite.body.blocked.down) {
            this.parent.changeModule('ground');
            return;
        }
        const body = m.dynamic.body;
        if(body.velocity.y < 0 && this.airTime < C.JUMP_TIME && this.m.ih.IsPressed('up')) {
            body.velocity.y = -C.JUMP_STR;
            this.airTime += delta;
        } else {
            this.airTime = C.JUMP_TIME; 
        }

        if(body.velocity.y > 0 && this.previousYVelocity <= 0) {
            this.m.PlayAnimation(`${this.color}jumpdown`, true);
        }
        if(ih.IsPressed('left')) {
            m.dynamic.setAccelerationX(-C.ACCELERATION);
            m.dynamic.flipX = false;
        }
        else if(ih.IsPressed('right')) {
            m.dynamic.setAccelerationX(C.ACCELERATION);
            m.dynamic.flipX = true;
        }
        else 
            m.dynamic.setAccelerationX(0);
        
            if((body.blocked.down || body.wasTouching.down) && ih.IsJustPressed('up'))
                m.dynamic.setVelocityY(-C.JUMP_STR);
        // this.UpdateAnimation();
        this.previousYVelocity = this.sprite.body.velocity.y;

    }
    parent:IFSM;


}