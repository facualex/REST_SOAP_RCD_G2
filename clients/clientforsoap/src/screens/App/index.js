import cogoToast from "cogo-toast";
import { useState } from "react";
import axios from "axios";
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

  let xmlRequest = `
    <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <splitNames xmlns="names:namesservicewsdl">
            <name>${namesInput}</name>
        </splitNames>
     </Body>
    </Envelope>
  `;

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

      // const response = await fetch(
      // `${process.env.REACT_APP_API_URI}/getDv.php/${rut}`
      //);
      //const jsonResponse = await response.json();

      //if (jsonResponse && jsonResponse.data) {
      //  setState((prevState) => ({
      //    ...prevState,
      //    dv: jsonResponse.data,
      //    isLoading: false,
      //  }));
      //  return cogoToast.success("Digito verificador calculado con éxito!");
      // }

      const response = await axios.post(`${process.env.REACT_APP_API_URI}?wsdl`, xmlRequest, {
        headers: { "Content-Type": "text/xml" }
      })

      console.log(response)

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
      <div className="header">
        <h1 className="header__text">Split de nombres y apellidos</h1>
      </div>
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
