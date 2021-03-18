import {ComponentsLisner} from "@core/ComponentsLisner";
import {Params} from "../../components/Params/Params";
import {Register} from "../../components/Register/Register";

export class Domen extends ComponentsLisner{
  static IDName = 'domen'
  static Next = 'tarif'
  constructor($root,options){
    super($root,{
      lisners:['switchs'],
      ...options
    })
    
    this.$root = $root || ''
    this.title = 'Поиск домена'
    this.styleListe = ['serch_domen-section']
    this.slider = new options.slider(this.store)
    this.params = new Params('Настройка тарифа')
    this.register = new Register()
    //options.swtich.switchs('domen',this.dispatchSwtch)
    this.values = undefined
  }
  init(){
    super.init()
    this.slider.init([
      this,
      this.params,
      this.register
    ])
    this.swtich.crateSwitch({
      title:'Готовые решения',
      data:Domen.IDName,
    })
    
  }
  
  execute(target){
    if(target === Domen.Next){
      this.values = 'Привет от домена'
      this.$dispatch({type:'HI',data:{
        [Domen.IDName]:{
          [Domen.Next]:this.values
        }
      }})
    }
  }
  
  dispatchSwtch(event){
    const $elem_target = event.target.dataset.swich
    if(this.values && ($elem_target !== Domen.IDName)){
      this.$emite($elem_target,this.values)
    }
  }
  toHtml(){
    return `
      <span>${this.title}</span>
      <a data-next="${Domen.Next}" >next</a>
    `
  }
  
  
  
}
