export class domLisner{
  constructor($root,option){
    this.$root = $root
    this.lisner = option.lisner || ''
    this.swtich = option.switchs || ''
    this.dispatchSwtch = this.dispatchSwtch.bind(this)
  }
  lisners(){
    //console.log(this.lisner)
  }
  emiteSwtitch(){
    //dispatchSwtch
    const $switchbox = document.querySelector('.tarifs_box')
    $switchbox && $switchbox.addEventListener('click', this.dispatchSwtch)
    //
  }
}