import './App.css';
// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

// Main
import Main from './components/Main'

function App() {
  return (
    <Provider className='App' store={store}>
      <Main />
    </Provider>
  );
}

export default App;
