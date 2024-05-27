import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const FormControler = ({edit , contactId}) => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate()

  const contact = store.contacts?.filter(el => el.id == contactId)[0]
  console.log( 'filter contact', contact)

  const [formData, setFormData ] = useState({
    name: contact?.name || '',
    email: contact?.email || '',
    phone: contact?.phone || '',
    address: contact?.address || '',
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) return actions.createContact(formData);
      return actions.editContact(contactId ,formData)
    console.log(formData)
  };
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <section>
      <form onSubmit={e => handleSubmit (e)} action="" className="form-control">
        <h3>Create Contact</h3>
        <input
          type="text"
          className="form-control"
          value={formData.name}
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="username"
        />
        <input
          type="email"
          className="form-control"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="email"
        />
        <input
          type="text"
          className="form-control"
          value={formData.phone}
          name="phone"
          onChange={(e) => handleChange(e)}
          placeholder="phone"
        />
        <input
          type="text"
          className="form-control"
          value={formData.address}
          name="address"
          onChange={(e) => handleChange(e)}
          placeholder="address"
        />
        <input type="submit" value={edit ? 'edit' : 'create'} />
      </form>
      {edit && <button className="btn btn-dark" onClick={()=> navigate('/')}> Go back</button>}
    </section>
  );
};

export default FormControler;
