import {ComponentsLisner} from "@core/ComponentsLisner";
import {Params} from "../../components/Params/Params";
import {Register} from "../../components/Register/Register";

export class Domen_tarif extends ComponentsLisner{
  static IDName = 'domen_tarif'
  //static Self_components = [Params,Register]
  constructor($root,options){
    super($root,{
      lisners:['click'],
      ...options
    })
    this.$root = $root || ''
    this.title = 'Тарифы домена'
    this.styleListe = ['serch_domen-section']
    this.slider = new options.slider(this.store)
    this.params = new Params('Настройка тарифа')
    this.register = new Register()
  }
  init(){
    super.init()
    this.slider.init([
      this,
      this.params,
      this.register
    ])
    this.swtich.crateSwitch({
      title:'Настроить тариф',
      data:Domen_tarif.IDName,
    })
    this.$on(Domen_tarif.IDName,fn => {
      console.log(fn)
    })
  }
  execute(target,event){
    console.log(target,event)
  }
  toHtml(){
    return `
      <span>${this.title}</span>
      <a data-next="tarif" >next</a>
    `
    
  }
  
  
  
}
