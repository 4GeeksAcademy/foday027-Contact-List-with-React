import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import NewUser from "../component/NewUser.jsx";
import FormControler from "../component/FormControler.jsx";
import Card from "../component/Card.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <NewUser />
      <FormControler edit={false} />
      <main>
        {store.contacts?.length > 0 ? (
          store.contacts?.map((el, i) => (
            <Card
              key={i}
              name={el.name}
              email={el.email}
              phone={el.phone}
              address={el.address}
              contactId={el.id}
            />
          ))
        ) : (
          <p>add contact</p>
        )}
      </main>
    </div>
  );
};
