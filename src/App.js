import Header from "./components/Header.jsx";
import Main from './components/Main.jsx';
import Choose from "./components/Choose.jsx";
import List from "./components/List.jsx";
import Final from "./components/Final.jsx";
import "./App.css";
function App() {
  return (
    <div className="appContainer">
      <Header />
      <Main/>
      <Choose/>
      <List/>
      <Final/> 
      <div className="footer">
      <p>© Copyright 2023. Bhive Private Limited</p></div>
    </div>
  );
}

export default App;
