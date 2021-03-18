//---

import {Domen} from "./Tabs/Domen_component/Domen";
import {Domen_tarif} from "./Tabs/Domen_component/Domen_tarif";
import {Tarif} from "./Tabs/Tarif_component/Tarif";
import {TabSlider} from "./components/Slider/TabSlider";
import {Emitter} from "@core/Emitter";
import {FabricSwitch} from "@core/FabricSwitch";
import {createStore} from "./core/Store/createStore";
import {rootReducer} from "./Redux/rootReducer";
import {initState,storage} from "./Redux/initState";



class Tabs{
  constructor(options){
    this.components = options.comp
    this.emitt = new Emitter()
    this.switchs = FabricSwitch()
    this.store = options.store
  }
  getRoot(){
    this.components.forEach(Comp =>{
      const option = {
        store:this.store,
        slider:TabSlider,
        emiter:this.emitt,
      }
      if(Array.isArray(Comp)){
        this.components = Comp.map(fabr =>{
          const $query = document.getElementById(fabr.IDName)
          if($query) {
            //const slider = new TabSlider([fabr, ...fabr.Self_components])
            const component = new fabr($query, {
              ...option,
              swtich:this.switchs
            })
            return component
          }
        })
      }else{
        const $query = document.getElementById(Comp.IDName)
        if($query) {
          //const slider = new TabSlider([Comp, ...Comp.Self_components])
          const component = new Comp($query, option)
          this.components = component
        }
      }
      
    })
    
  }
  
  render(){
    
    this.getRoot()
    //this.store.subscribe(fn => console.log(fn))
    if(Array.isArray(this.components)){
      this.components.forEach(comp => comp && comp.init())
    }else{
      this.components.init()
    }
  }
}

/**
 *
 * @type {{subscribe, dispatch, getStore}|*}
 */
const store = createStore(rootReducer,initState)
store.subscribe(state => {
  console.log('App State: ', state)
  storage('tab-state', state)
})

const tabs = new Tabs({
  comp:[
    [Domen,Domen_tarif],Tarif
    //Domen,Tarif
  ],
  store
})
tabs.render()

