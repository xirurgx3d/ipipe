export function rootReducer(state,action) {
  let fild;
  let prevState
  switch (action.type){
    case 'HI' :
      fild = 'slider'
      return {
        ...state,
        [fild]:{...state[fild],...action.data}
      }
      break;
    case 'SLIDE_MOVE' :
      fild = 'slider'
      prevState = state[fild]
      
      let slide =  prevState[action.data.id] ? prevState[action.data.id] : prevState[action.data.id] = {};
      slide.nums = action.data.value
      return {
        ...state,
        [fild]:{...prevState}
      }
    default: return state
  }
  
}