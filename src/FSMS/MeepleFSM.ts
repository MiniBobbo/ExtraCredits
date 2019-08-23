import { IFSMModule } from "../FSM/IFSMModule";
import { IFSM } from "../FSM/IFSM";
import { Thing } from "../things/Thing";
import { Meeple } from "../things/Meeple";

export class MeepleFSM implements IFSMModule {
    m:Meeple;
    sprite:Phaser.Physics.Arcade.Sprite;
    color:string;

    init(): void {
        this.m = this.parent as Meeple;
        this.sprite = this.m.dynamic;
    }
    
    begin(): void {

    }    
    
    end(): void {

    }
    update(time: number, delta: number): void {
         
    }
    parent:IFSM;


}