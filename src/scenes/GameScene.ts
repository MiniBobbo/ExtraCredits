import { Meeple } from "../things/Meeple";
import { Thing } from "../things/Thing";
import { IH } from "../IH/IH";
import { LevelDef } from "../defs/LevelDef";
import { Spike } from "../things/Spike";
import { Attack } from "../things/Attack";
import { AttackDef } from "../defs/AttackDef";
import { ATTACK } from "../defs/ATTACK";
import { Launcher } from "../things/Launcher";
import { AttackFactory } from "../AttackFactory";

export class GameScene extends Phaser.Scene {
    everything:Array<Thing>;
    debugText:Phaser.GameObjects.Text;
    map:Phaser.Tilemaps.DynamicTilemapLayer;
    keys:IH;
    

    preload() {

    }

    create(def:LevelDef) {
        console.log('Scene create');
        this.everything = [];
        this.keys = new IH(this); 
        this.keys.AllowInput(false);
        this.debugText = this.add.text(5,600,'').setScrollFactor(0,0);


        this.CreateMap({levelName:"test", nextLevel:"test"});
        this.StartLevel();
    }

    Overlap(o1:object, o2:object) {
        let s1 = o1 as Phaser.Physics.Arcade.Sprite;
        let s2 = o2 as Phaser.Physics.Arcade.Sprite;

        let t1 = s1.getData('parent') as Thing;
        let t2 = s2.getData('parent') as Thing;

        s1.emit('overlap', t2);
        s2.emit('overlap', t1);
    }

    /**
     * Adds the thing to the right groups.
     * @param t 
     */
    AddThing(t:Thing) {
        this.everything.push(t);
    }

    StartLevel() {
        this.cameras.main.fadeIn(600);
    }

    update(time, dt) {
        this.keys.update();
        
        //Update all the things in the game.  The thing will determine if it needs to actually be updated.
        this.everything.forEach(element => {
            element.update(time, dt);
        });
        
        if(this.keys.IsJustPressed('test')) {
            // const c = new Chaser(this, WORLD.WHITE);
            // this.AddThing(c);
            // c.dynamic.setPosition(100,100);
        }
        // this.debugText.setText(`BH: ${this.blackHome}\nWH: ${this.whiteHome}`);
        
    }




    CreateMap(def:LevelDef) {
        const allmaps = this.make.tilemap({key:def.levelName});
        const tiles = allmaps.addTilesetImage('defaulttiles', 'tiles');
        this.map = allmaps.createDynamicLayer('collide', tiles, 0,0);
        this.map.setCollisionByProperty({collide:true}, true);


        this.map.setDepth(1);
        this.TransformTiles();

    }

    FindCenterOfTile(x:number, y:number):{x:number, y:number}{
        let xx = Math.floor(x/32);
        let yy = Math.floor(y/32);
        let t = this.map.getTileAt(xx,yy, true);
        return {x:t.getCenterX(), y: t.getCenterY()};
    }

    TransformTiles() {
    }

    TransformTile(tile:Phaser.Tilemaps.Tile) {
        const x = tile.getCenterX();
        const y = tile.getCenterY();
        let removeMe:boolean = false;
            switch (tile.index-1) {
            default:
                break;
        }


    }

    GetAttack(type:ATTACK):Attack {
        let a:Attack;
        if (a == null) {
            a = AttackFactory.GetAttack(this, type);
            a.type = type;
            this.AddThing(a);

        }

        return a;
    }

    LaunchAttack(def:AttackDef) {
        const a = this.GetAttack(def.type);
        a.Launch(def);
    }

}