import { IFSM } from "./IFSM";

export interface IFSMModule {
    init():void;
    begin():void;
    end():void;
    update(time:number, delta:number):void;
    parent:IFSM;
}