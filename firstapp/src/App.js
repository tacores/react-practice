import './App.css';
import { DessertsList, desserts }  from "./DessertsList";
import RegisterForm from "./registerForm";
import SwitchThemeRoot from "./switchTheme";
import GiftCard from "./giftCard";
import TimerComponent from './timerComponent';
import FetchUser from './fetchUser';
import WeekDay from './weekDay';
import RadioGroupExample from './radioGroupExample';
import MouseTracker from './mouseTracker';

function App() {
  return (
    <div className="App">
      <div class="example_container">
        <h1>リストのフィルター、ソート、マップの例</h1>
        <DessertsList data={desserts} />
      </div>
      <div className="example_container">
        <h1>フォームとステートの例</h1>
        <RegisterForm />
      </div>
      <div className="example_container">
        <h1>ステート更新の例</h1>
        <GiftCard />
      </div>
      <div className="example_container">
        <h1>コンテキストの例</h1>
        <SwitchThemeRoot />
      </div>
      <div className="example_container">
        <h1>useEffectの例 Timer</h1>
        <TimerComponent />
      </div>
      <div className="example_container">
        <h1>useEffectの例 Fetch</h1>
        <FetchUser />
      </div>
      <div className="example_container">
        <h1>カスタムフックの例 Fetch</h1>
        <WeekDay />
      </div>
      <div className="example_container">
        <h1>React.cloneElement、React.Children.mapの例</h1>
        <RadioGroupExample />
      </div>
      <div className="example_container">
        <h1>レンダーpropsの例</h1>
        <MouseTracker />
      </div>
    </div>
  );
}

export default App;
