import React, { useForm } from "react";
import { Form } from "./componentes/Form";
import { List } from "./componentes/List";
import { StoreProvider } from "./componentes/StoreProvider";


function App() {

   

  return (
    <StoreProvider>
      <div>
        <Form />
        <div></div>
        
          <List />
        
      </div>
    </StoreProvider>
  );
}

export default App;
