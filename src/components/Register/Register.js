export class Register{
  constructor(title){
    this.title = title || 'Регистрация'
    this.styleListe = ['form_box','animate_register-form']
  }
  
  toHtml(){
    return this.title
  }
}