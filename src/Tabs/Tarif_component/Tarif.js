import {ComponentsLisner} from "@core/ComponentsLisner";
import {Register} from "../../components/Register/Register";

export class Tarif extends ComponentsLisner{
  static IDName = 'tarif'
  //static Self_components = [Register]
  constructor($root,slider){
    super($root)
    this.$root = $root || ''
    this.title = 'Тарифы'
    this.styleListe = ['serch_domen-section']
    this.slider = new slider(true)
    this.register = new Register()
  }
  init(){
    this.slider.init([
      this,
      this.register
    ])
  }
  toHtml(){
    return this.title
  }
}