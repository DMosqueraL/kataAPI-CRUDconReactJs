// import React, { useState } from "react";

const completo = ["Sí", "No"];

function Selector() {
  // const [estado, setEstado] = useState(-1);

  return (
    <div className="row">
      <span>
        <select name="completed">
          <option value={-1}>...</option>
          {completo.map((i) => (
            <option key="estado" value={i}>
              {i}
            </option>
          ))}
        </select>
      </span>      
    </div>
  );
}

export default Selector;