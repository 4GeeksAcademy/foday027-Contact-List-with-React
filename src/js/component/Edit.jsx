import React from 'react'
import { useParams } from 'react-router'
import FormControler from './FormControler.jsx';

const Edit = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <section>
        <FormControler edit={true} contactId={id} />
    </section>
  )
}

export default Edit