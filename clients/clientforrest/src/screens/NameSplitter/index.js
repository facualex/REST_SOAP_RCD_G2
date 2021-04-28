import cogoToast from "cogo-toast";
import { useState } from "react";
import API from "../../api"
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
      if (namesInput.split(" ").filter(name => name).length < 3) {
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

      const response = await API.splitNames(namesInput) 
      const jsonResponse = await response.json();

      if (jsonResponse && jsonResponse.data) {
        setState((prevState) => ({
          ...prevState,
          dv: jsonResponse.data,
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
    </div>
  );
}

export default App;
