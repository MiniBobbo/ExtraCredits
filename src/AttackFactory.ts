import { Attack } from "./things/Attack";
import { AttackDef } from "./defs/AttackDef";
import { ATTACK } from "./defs/ATTACK";
import { Thing } from "./things/Thing";
import { Meeple } from "./things/Meeple";
import { Bolt } from "./attacks/Bolt";
import { GameScene } from "./scenes/GameScene";

export class AttackFactory {
    static GetAttack(scene:GameScene, type:ATTACK):Attack {
        switch (type) {
            case ATTACK.BOLT:
                    return new Bolt(scene);
                break;
        
            default:
                break;
        }
    }
    
}