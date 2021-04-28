import { useState } from "react";
import { DvCalculator, NameSplitter } from "./screens";

const selectOptions = {
  DV_CALCULATOR: "dvCalculator",
  NAME_SPLITTER: "nameSplitter",
};

const styles = {
  buttonGroup: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1.6rem",
  },
  button: {
    backgroundColor: "white",
    color: "#89C6D3",
    fontSize: "0.8rem",
    border: "1px solid #89C6D3",
    minWidth: "10rem",
    padding: "1rem 1.5rem",
  },
  selectedButton: {
    backgroundColor: "#89C6D3",
    color: "white",
  },
};

const initialState = {
  selectedOption: selectOptions.DV_CALCULATOR,
};

function App() {
  const  [state, setState] = useState(initialState);

  const { selectedOption } = state

  function handleOptionChange(event) {
    const { target } = event;

    setState((prevState) => ({ ...prevState, selectedOption: target.name }))
  }

  return (
    <>
      <div style={styles.buttonGroup}>
        <button
          name={selectOptions.DV_CALCULATOR}
          onClick={handleOptionChange}
          style={
            selectedOption === selectOptions.DV_CALCULATOR
              ? { ...styles.button, ...styles.selectedButton }
              : { ...styles.button }
          }
        >
          Calculadora de DV
        </button>
        <button
          name={selectOptions.NAME_SPLITTER}
          onClick={handleOptionChange}
          style={
            selectedOption === selectOptions.NAME_SPLITTER
              ? { ...styles.button, ...styles.selectedButton }
              : { ...styles.button }
          }
        >
          Split de nombres
        </button>
      </div>
      { selectedOption === selectOptions.DV_CALCULATOR ? <DvCalculator /> : <NameSplitter /> }
    </>
  );
}

export default App;
