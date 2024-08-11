import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../store/appContext";

const NewUser = () => {
  const [user, setUser] = useState("");
  const {store , actions} = useContext(Context)

  const handleSubmit = e => {
    e.preventDefault();
    actions.createAgenda(user)
  };

  const handleDelete = (i) => {
    let aux = todos;
    aux = aux.filter((el, index) => i !== index);
    setTodos(aux);
};

  return (
    <div className="container">
      <h3>create agenda</h3>
      <form onSubmit={e=>handleSubmit(e)} className="form-control">
        <input
          onChange={e => setUser(e.target.value)}
          value={user}
          name="user"
          type="text"
          placeholder="contact"
          className="form-control"
        />
        <input type="submit" className="btn btn-dark"  />
      </form>
    
    </div>
  );
};

export default NewUser;