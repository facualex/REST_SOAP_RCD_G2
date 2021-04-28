import cogoToast from "cogo-toast";
import { useState } from "react";
import API from "../../api";
import "./index.css";

const initialState = {
  namesInput: "",
  names: "",
  lastNames: "",
  isLoading: false,
};

function App() {
  const [state, setState] = useState(initialState);

  const { namesInput, names, lastNames, isLoading } = state;

  function setField(event) {
    const { value } = event.target;

    setState((prevState) => ({
      ...prevState,
      namesInput: value,
    }));
  }

  async function handleSplitClick() {
    try {
      if (!namesInput) {
        setState((prevState) => ({
          ...prevState,
          namesInput: "",
        }));

        return cogoToast.error(
          "Debes ingresar nombres y apellidos para realizar el split."
        );
      }

      // Valida que se ingrese al menos un nombre y apellido paterno y materno
      if (namesInput.split(" ").filter((name) => name).length < 3) {
        setState((prevState) => ({
          ...prevState,
          namesInput: "",
        }));

        return cogoToast.error(
          "Debes ingresar al menos un nombre, apellido paterno y apellido materno."
        );
      }

      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const response = await API.splitNames(namesInput);
      const jsonResponse = await response.json();

      if (jsonResponse && jsonResponse.data) {
        const { names, lastNames } = jsonResponse.data;

        setState((prevState) => ({
          ...prevState,
          names,
          lastNames,
          isLoading: false,
        }));
        return cogoToast.success("Operación realizada con éxito!");
      }
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        dv: "",
        isLoading: false,
      }));

      cogoToast.error(error);
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="input-group-container">
        <div className="input-group">
          <div className="main-rut-group">
            <label htmlFor="main-rut">Ingrese nombres y apellidos</label>
            <input
              name="rut"
              placeholder="Ejemplo: Juan José Rodriguez Hernandez"
              value={namesInput}
              className="main-rut"
              id="main-rut"
              onChange={setField}
              autoComplete="off"
            />
          </div>
        </div>
        <button className="calculate-button" onClick={handleSplitClick}>
          {isLoading ? "Cargando..." : "Realizar Split"}
        </button>
      </div>
      {names && lastNames ? (
        <div className="results-container">
          <div className="names-container">
            <h2 className="names-container-title">Nombres</h2>
            {names
              ? names.map((name, index) => (
                  <div className="result-item">
                    <span className="result-item-count">{index + 1}</span>
                    <div className="result-item-text">{name}</div>
                  </div>
                ))
              : null}
          </div>
          <div className="lastNames-container">
            <h2 className="names-container-title">Apellidos</h2>
            {names
              ? lastNames.map((lastName, index) => (
                  <div className="result-item">
                    <span className="result-item-count">{index + 1}</span>
                    <div className="result-item-text">{lastName}</div>
                  </div>
                ))
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
