import React, { useContext, useRef, useState } from "react";
import { HOST_API } from "./redireccionamiento/HOST_API";
import { Store } from "./inicialState";

export const Form = () => {
  const formRef = useRef(null);
  // const register = useForm();
  const {
    dispatch,
    state: { item },
  } = useContext(Store);
  const [state, setState] = useState({ item });

  const onAdd = (event) => {
    //event.preventDefault();
    const request = {
      name: state.name,
      id: null,
      isCompleted: false,
    };

    fetch(HOST_API + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  const onEdit = (event) => {
    //event.preventDefault();
    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
    };

    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  return (
    <form className="form-group row" ref={formRef}>
      <input
        type="text"
        name="name"
        defaultValue={item.name}
        required
        onChange={(event) => {
          setState({ ...state, name: event.target.value });
        }}
      ></input>
      {item.id && <button onClick={onEdit}>Actualizar</button>}
      {!item.id && <button onClick={onAdd}>Agregar</button>}
    </form>
  );
};
