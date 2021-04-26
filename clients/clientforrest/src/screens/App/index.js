import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import "./index.css";

const initialState = {
  rut: "",
  dv: "",
  isLoading: false,
};

function App() {
  const [state, setState] = useState(initialState);

  const { rut, dv, isLoading } = state;

  useEffect(() => {
     setState((prevState) => ({
      ...prevState,
      dv: '',
    }));

  }, [rut])

  function setRut(event) {
    const { value } = event.target;

    if (value !== null && isNaN(value)) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      rut: value,
    }));
  }

  async function handleCalculateClick() {
    try {
      if (!rut) {
      setState((prevState) => ({
        ...prevState,
        dv: '',
      }));

        return cogoToast.error(
          "Debes ingresar un rut para calcular el digito verificador."
        );
      }

      setState((prevState) => ({
        ...prevState,
        dv: '',
        isLoading: true,
      }));

      const response = await fetch(
        `${process.env.REACT_APP_API_URI}/getDv.php/${rut}`
      );
      const jsonResponse = await response.json();

      if (jsonResponse && jsonResponse.data) {
        setState((prevState) => ({
          ...prevState,
          dv: jsonResponse.data,
          isLoading: false,
        }));
        return cogoToast.success("Digito verificador calculado con éxito!");
      }
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        dv: '',
        isLoading: false,
      }));

      cogoToast.error(error);
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="header__text">Calculadora de digito verificador</h1>
      </div>
      <div className="input-group-container">
        <div className="input-group">
          <div className="main-rut-group">
            <label htmlFor="main-rut">
              RUT
              <span className="sin-dv-span">(sin digito verificador)</span>
            </label>
            <input
              name="rut"
              value={rut}
              className="main-rut"
              id="main-rut"
              onChange={setRut}
              autoComplete="off"
            />
          </div>
          <div className="dv-group">
            <label htmlFor="dv">DV</label>
            <input className="dv" id="dv" value={dv} disabled />
          </div>
        </div>
        <button className="calculate-button" onClick={handleCalculateClick}>
          {isLoading ? "Cargando..." : "Calcular DV"}
        </button>
      </div>

    </div>
  );
}

export default App;
