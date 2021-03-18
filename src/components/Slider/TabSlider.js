import {SliderTamplate} from "./SliderTamplate";

export class TabSlider{
  constructor(store){
    this.store = store
  }
  init(components){
    if(Array.isArray(components)){
      this.comp = components[0]
    }else{
      this.comp = components
    }
    
    this.initSide(components)
    this.comp.execute && this.next(this.comp.execute,this.comp.$root)
    
  }
  initSide(components){
    this.slider = new SliderTamplate(components,this.comp.$root,this.store)
    this.slider.render()
    this.prev()
  }
  
  
  next(exec,$root){
    $root.addEventListener('click', event =>{
      const target = event.target.dataset.next
      if(target){
        exec.bind(this.comp)(target,event)
        this.slider.SlideNext()
      }
     
    })
  }
  prev(){
    const chang = document.querySelector(`#${this.comp.$root.id} .tabs_chang`)
    chang.addEventListener('click', event =>{
      const target = event.target
      const chag = target.parentNode.dataset.chag
      if(chag){
        this.slider.SlidePrev(chag)
      }
      
    })
  }
  
}