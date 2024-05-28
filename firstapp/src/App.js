import './App.css';
import { DessertsList, desserts }  from "./DessertsList";
import RegisterForm from "./registerForm"
import SwitchThemeRoot from "./switchTheme"

function App() {
  return (
    <div className="App">
      <div class="example_container">
        <h1>リストのフィルター、ソート、マップの例</h1>
        <DessertsList data={desserts} />
      </div>
      <div className="example_container">
        <h1>フォームと状態の例</h1>
        <RegisterForm />
      </div>
      <div className="example_container">
        <h1>コンテキストの例</h1>
        <SwitchThemeRoot />
      </div>
    </div>
  );
}

export default App;
