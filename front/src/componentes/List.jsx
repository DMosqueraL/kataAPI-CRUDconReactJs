import React, { useContext, useEffect } from "react";
import Selector from "./Selector";
import { HOST_API } from "./redireccionamiento/HOST_API";
import { Store } from "./inicialState";

export const List = () => {
  const { dispatch, state } = useContext(Store);

  useEffect(() => {
    fetch(HOST_API + "/todo")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list });
      });
  }, [state.list.lenght, dispatch]);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-item", id });
    });
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo });
  };

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>¿Está completado?</td>
          </tr>
        </thead>
        <tbody>
          {state.list.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{<Selector />}</td>
                <td>
                  <button onClick={() => onDelete(todo.id)}>Eliminar</button>
                </td>
                <td>
                  <button onClick={() => onEdit(todo)}>Editar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
