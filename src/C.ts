import { LevelDef } from "./defs/LevelDef";

export class C {
    static GRAVITY:number = 1400;
    static MAX_SPEED:number = 300;
    static ACCELERATION:number = 1200;
    static MAX_FALL:number = 400;
    static DRAG:number = 1400;
    static JUMP_STR:number = 500;
    //Meeple Jump time in milliseconds
    static JUMP_TIME:number = 150;
    static DEFAULT_ATTACK_LIFETIME:number = 6000; 

    static CurrentLevel:LevelDef;




    
}