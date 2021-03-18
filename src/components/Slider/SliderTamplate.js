export class SliderTamplate{
  constructor(components,$root,store){
    this.$rootid = $root.id
    this.state = store
    this.components = components
    this.slide_num = components.length || NaN
    this.chang = document.querySelector(`#${$root.id} .tabs_chang`)
    this.colsbox = document.querySelector(`#${$root.id} .animate_register-col`)
    this.num = 0
  }
  initState(){
    const {slider} = this.state.getStore()
    if(slider[this.$rootid]){
      this.num = slider[this.$rootid].nums
     
    }
    
    
  }
  
  animateCol(){
    this.state.dispatch({type:'SLIDE_MOVE',data:{
      id:this.$rootid,
      value:this.num
    }})
    
    let boxwidth = this.colsbox.clientWidth / this.slide_num
    this.colsbox.style.transform = `translate(-${boxwidth * this.num}px,0)`
  }
  
  
  sliderHeadHTml(){
    this.chang.innerHTML = ''
    
    this.components.forEach((comp,i) => {
      this.chang.insertAdjacentHTML('beforeend',`
        <li class="ctrl-select ${this.num === i ? 'active' : '' }" data-chag="${i}">
          <span class="tabs_chang--number">${i+1}</span>
          <span class="tabs_chang--text">${comp.title}</span></li>
      `)
      
    })
  }
  sliderCrate(){
    this.components.forEach((comp,i) => {
      const slidecol =  document.createElement('section')
      slidecol.classList.add(...comp.styleListe,`slide-col`)
      slidecol.insertAdjacentHTML('beforeend', comp.toHtml())
      this.colsbox.append(slidecol)
    })
    this.animateCol()
  }
  SlideNext(){
    if(this.num === this.slide_num){
      this.num = 0
    }else{
      this.num++
      this.animateCol()
    }
    this.sliderHeadHTml()
  }
  SlidePrev(position){
    
    if(this.num <= position){
      return
    }else{
      this.num = Number(position)
      this.animateCol()
    }
    this.sliderHeadHTml()
   
  }
  render(){
    this.initState()
    this.sliderHeadHTml()
    this.sliderCrate()
  }
  
}