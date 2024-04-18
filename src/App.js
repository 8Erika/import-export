import "./App.css";
import number from "./Utilitiy/default";
import * as all from "./Utilitiy/named";

function App() {
  return (
    <div className="App">
      <p>Broj1: {number.num1}</p>
      <p>Broj2: {number.num2}</p>
      <p>Broj3: {number.num3}</p>
      <p>Drugi broj: {all.num1}</p>
      <p>Zbroj1: {all.sum(number.num1, number.num2, number.num3)}</p>
      <p>Zbroj2: {all.sum(number.num1, number.num2, 0)}</p>
    </div>
  );
}

export default App;
