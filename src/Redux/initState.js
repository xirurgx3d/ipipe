export const defState = {
  slider:{},
  switch:{}
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }
  localStorage.setItem(key, JSON.stringify(data))
}

const normalize = state => ({
  ...state
})

export const initState = storage('tab-state')
  ? normalize(storage('tab-state'))
  : defState