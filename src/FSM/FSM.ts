import { IFSMModule } from "./IFSMModule";
import { IFSM } from "./IFSM";

export class FSM {
    private modules:Map<string, IFSMModule>;
    currentModule:IFSMModule;
    parent:IFSM;
    enabled:boolean = true;

    constructor(parent:IFSM) {
        this.parent = parent;
    }
    
    AddModules(name:string, module:IFSMModule) {
        if(this.modules == null) {
            this.modules = new Map<string, IFSMModule>();
        } 
        module.parent = this.parent;
        this.modules.set(name, module);
        module.init();
    }

    ChangeModule(nextModule:string) {
        if(this.modules.has(nextModule)) {  
            if(this.currentModule != null) 
                this.currentModule.end();
            const m = this.modules.get(nextModule);
            m.begin();
            this.currentModule = m;
        }
    }

    Update(time, dt) {
        if(this.currentModule != null && this.enabled )
            this.currentModule.update(time, dt);
    }
}