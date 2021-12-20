import Header from "./modules/header";
import Cards from "./modules/main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Cards></Cards>
      </main>
    </div>
  );
}

export default App;
