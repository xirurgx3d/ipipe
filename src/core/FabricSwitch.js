export function FabricSwitch() {
  let i = -1
  return{
    crateSwitch({title,data}){
      const $swch = document.querySelectorAll('.tarifs_box__text')
      if($swch.length !== 0){
        const $elem = $swch[i +=1]
        $elem.innerHTML = title
        $elem.setAttribute('data-swich',data)
      }
      
    
    }
  }
}