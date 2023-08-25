import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Product from './components/Product';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header>
       <Header/>
       
      </header>
      <main>
        <Product/>
        <Services/>
        <Team/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
