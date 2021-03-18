export class Emitter{
  constructor(){
    this.lisners = []
    
  }
  emit(event,...arg){
    if(this.lisners[event]){
      this.lisners[event].forEach(val =>{
        val(...arg)
      })
    }
  }
  subscrube(event,fn){
    this.lisners[event] = this.lisners[event] || []
    this.lisners[event].push(fn)
  }
  
}