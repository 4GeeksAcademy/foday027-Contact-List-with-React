import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const Card = ({ email, phone, address, name, contactId }) => {
  const {store , actions} = useContext(Context)
  const navigate = useNavigate()

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body d-flex">
        <div className="container">
          <figure>
            <img
              className="img-fluid"
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
              alt={name}
            />
            <figcaption>{name}</figcaption>
          </figure>
        </div>
        <div className="container">
          <p> email: {email}</p>
          <p> phone : {phone} </p>
          <p> address : {address} </p>
          <div className="container d-flex justify-content space-between">
            <button className="btn btn-success" onClick={()=>navigate('edit/' +contactId)} >edit</button>
            <button className="btn btn-danger" onClick={()=>actions.deleteContact(contactId)} >delete</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
