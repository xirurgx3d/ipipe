export function createStore(rootReducer, initStore = {}) {
  let store = rootReducer(initStore,{type:'_INIT_'})
  let lisner = []
  return{
    subscribe(fn){
      lisner.push(fn)
    },
    dispatch(action){
      store = rootReducer(store,action)
      lisner.forEach(fn => fn(store))
    },
    getStore(){
      return JSON.parse(JSON.stringify(store))
    }
    
  }
}