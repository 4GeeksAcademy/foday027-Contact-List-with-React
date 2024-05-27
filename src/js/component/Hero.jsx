import React from 'react'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const Hero = () => {
  const {store , actions} = useContext(Context)
 console.log(store)
 console.log(actions)
  return (
    <div>

  <h1>this is my hero cvomponet</h1>
  <p>store info</p>
		<ul>
			<li>{store.user.name}</li>
			<li>{store.user.age}</li>
      <p> user is autechicated? {store.auth ? "ok" : "click on auth"}  </p>
      <button onClick={actions.login}>auth</button>
      <button onClick={actions.modifyAge}>make me older</button>
     
		</ul>
    </div>
  )
}

export default Hero