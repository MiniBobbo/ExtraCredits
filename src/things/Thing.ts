import { GameScene } from "../scenes/GameScene";
import { C } from "../C";
import { IFSM } from "../FSM/IFSM";
import { FSM } from "../FSM/FSM";

export class Thing implements IFSM{
    scene:GameScene;
    dynamic:Phaser.Physics.Arcade.Sprite;
    static:Phaser.Physics.Arcade.Image;
    previousVelocity:Phaser.Math.Vector2;

    immovable:boolean = false;
    gravity:boolean = true;

    fsm:FSM;

    constructor(scene:GameScene) {
        console.log('Thing constructor');
        this.scene = scene;
        this.fsm = new FSM(this);

        // if(this.world != WORLD.NONE) {
        this.dynamic = scene.physics.add
        .sprite(0,0,'atlas')
        .setSize(32,32)
        .setDrag(C.DRAG, 0)
        .setMaxVelocity(C.MAX_SPEED, C.MAX_FALL)
        .setData('parent',this);

        this.dynamic.on('overlap', function(t:Thing) {
            this.Overlap(t);
        }, this);

        this.previousVelocity = new Phaser.Math.Vector2(0,0);

    }

    changeModule(nextModule: string): void {
        this.fsm.ChangeModule(nextModule);
    }

    /**
     * Sets the width and height of both bodies.
     * @param width 
     * @param height 
     */
    setSize(width:number, height:number) {
        if(this.dynamic != null)
            this.dynamic.setSize(width, height);
        // this.static.setSize(width, height);
    }

    update(time:number, dt:number) {
        this.UpdateThing(time, dt);
    }

    UpdateThing(time:number, dt:number) {

    }

    CollideThing(t:Thing) {
        
    }

    Overlap(t:Thing) {
    }

    PlayAnimation(anim:string, ignoreIfPlaying?:boolean) {
        this.dynamic.anims.play(anim, ignoreIfPlaying);
        this.dynamic.setOffset(this.dynamic.width/2 - this.dynamic.body.width/2, this.dynamic.height/2- this.dynamic.body.height/2);
    }


}