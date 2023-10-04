import './App.css';
import Home from './components/Home/home.jsx';
import Category from './components/Top Category/Category.jsx';
import Screen from './components/App/Mobileapp.jsx';
import Appontment from './components/DocterApointment/Docters.jsx';
import Footer from './components/Footer/footer.jsx';
function App() {
  return (
    <>
      <Home />
      <Category />
      <Appontment/>
      <Screen/>
      
      <Footer/>
    </>
  );
}

export default App;
