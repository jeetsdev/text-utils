// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container my-3">
        <Main></Main>
      </div>
    </>
  );
}

export default App;
