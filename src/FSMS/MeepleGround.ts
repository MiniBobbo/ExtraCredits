import { IFSMModule } from "../FSM/IFSMModule";
import { IFSM } from "../FSM/IFSM";
import { Thing } from "../things/Thing";
import { MeepleFSM } from "./MeepleFSM";
import { Meeple } from "../things/Meeple";
import { IH } from "../IH/IH";
import { C } from "../C";

export class MeepleGround extends MeepleFSM {
    begin(): void {
        this.sprite.setDrag(C.DRAG, 0);
    }    
    
    end(): void {

    }
    update(time: number, delta: number): void {
        const m:Meeple = this.m;
        const ih:IH = m.ih;
        if(!(this.sprite.body.wasTouching.down || this.sprite.body.blocked.down)) {
            this.parent.changeModule('air');
            return;
        }
        const body = m.dynamic.body;
        if(ih.IsPressed('left')) {
            m.dynamic.setAccelerationX(-C.ACCELERATION);
            m.dynamic.flipX = false;
            m.PlayAnimation(`${this.color}run`, true);
        }
        else if(ih.IsPressed('right')) {
            m.dynamic.setAccelerationX(C.ACCELERATION);
            m.dynamic.flipX = true;
            m.PlayAnimation(`${this.color}run`, true);
        }
        else 
            m.dynamic.setAccelerationX(0);
        
            if(m.dynamic.body.velocity.x == 0) {
                m.PlayAnimation(`${this.color}stand`);
            }
        
            if((body.blocked.down || body.wasTouching.down) && ih.IsJustPressed('up'))
                m.dynamic.setVelocityY(-C.JUMP_STR);
            
    }
    parent:IFSM;


}