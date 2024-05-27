import { json } from "react-router";
import Contact from '../component/Contact.jsx';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      baseUrl: "https://playground.4geeks.com/contact/agendas/",
      user : null ,

      
      auth: false,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: 
    {
      editContact : async (id , formData) => {
        try {
          const opt = {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
					};
          const resp = await fetch(`${getStore().baseUrl}${getStore().user}/contacts/${id}`,opt);
          const data = await resp.json();
          console.log("edit contact ", data);
         
          await  getActions().getContacts();
        } catch (error) {
          console.log('edit error check' , error)
          
        }

      },
      deleteContact : async (id) => {
        try {
          const opt = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const resp = await fetch(`${getStore().baseUrl}${getStore().user}/contacts/${id}`, opt);
          const data = await resp.json();
          console.log("dtlete contact ", data);
          setStore({ user: user });
          await  getActions().getContacts();
          
        } catch (error) {
          console .log('check error' , error)
          
        }
      },
      createAgenda: async (user) => {
        try {
          const opt = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const resp = await fetch(`${getStore().baseUrl}${user}`, opt);
          const data = await resp.json();
          console.log("create agenda ", data);
          setStore({ user: user });
          await  getActions().getContacts();
        } catch (error) {
          console.log("error creating  agenda", error);
        }
      },
      getContacts: async () => {
        try {
        
          
          const resp = await fetch(
            `${getStore().baseUrl}${getStore().user}/contacts`);
          const data = await resp.json();
          console.log(data);
          setStore({contacts : data.contacts})
          //setStore({contacts : data.contacts})
        } catch (error) {
          console.log("error getting conatct", error);
        }
      },
      createContact : async (newContact) => {
        try { 
           const opt = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body : JSON.stringify(newContact)
        };
        const resp = await fetch(`${getStore().baseUrl}${getStore().user}/contacts`, opt);
        const data = await resp.json();
        console.log("create contact ", data);
      
        await getActions().getContacts();
        } catch (error) {
          console.log('error creating contact' , error)
          
        }
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      login: () => {
        setStore({ auth: true });
      },
      modifyAge: () => {
        setStore({ user: { ...getStore().user, age: 55 } });
      },

      loadSomeData: async () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        try {
          const res = await fetch("");
          const data = await res.json();
        } catch (error) {}
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
