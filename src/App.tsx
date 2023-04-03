import './App.css';
import { Footer } from './components/organisms/footer/Footer';
import { Header } from './components/organisms/header/Header';
import { ToDo } from './pages/ToDo';

const App = () => {
  return (
    <>
      <Header></Header>
      <ToDo></ToDo>
      <Footer></Footer>
    </>
  );
}

export default App;