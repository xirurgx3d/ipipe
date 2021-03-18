import {domLisner} from "@core/domLisner";

export class ComponentsLisner extends domLisner{
  constructor($root,optinons = {}){
    super($root,{
      lisner:optinons.lisners,
      switchs:optinons.swtich
    })
    this.store = optinons.store
    this.emite = optinons.emiter
  }
  init(){
    this.lisners()
    this.emiteSwtitch()
  }
  dispatchSwtch(){
  
  }
  $emite(event,...arg){
    this.emite.emit(event,...arg)
  }
  $on(event,fn){
    this.emite.subscrube(event,fn)
  }
  $dispatch(action){
    this.store.dispatch(action)
  }
  $subscribe(fn){
    this.store.subscribe(fn)
  }
}