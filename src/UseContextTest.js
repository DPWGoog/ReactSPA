import React,{ useContext } from 'react'
 const AppContext = React.createContext({})


const Ceshi = () => { 
  const A =() => {
    const { name ,setName} = useContext(AppContext)
    const addcount = ()=>{
        name = 'oooo'
    }
    return (
      <div>
        <p>
          我是A组件的名字{name}<span>我是A的子组件{name}</span>
        </p>
        <button onClick={addcount}>count++</button>
      </div>
    )
}
const B =() => {
  const { name } = useContext(AppContext)
  return (
      <p>我是B组件的名字{name}</p>
  )
}
  return (
    <AppContext.Provider value={{name: 'hook1234'}}>
    <A/>
    <B/>
    </AppContext.Provider>
  )
}
export default Ceshi 