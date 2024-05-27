import React, { useContext } from 'react'
import { Context } from '../store/appContext';

const Contact = () => {
  const {store , actions} = useContext(Context)
  return (
    <div>
        <h1>my contact</h1>
    </div>
  )
}

export default Contact