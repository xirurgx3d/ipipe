export class Params{
  constructor(title){
    this.title = title || 'Параметры'
    this.styleListe = ['form_box','animate_register-form']
  }
  toHtml(){
    return `
      <span>${this.title}</span>
      <a data-next="register" >next</a>
    `
  }
}