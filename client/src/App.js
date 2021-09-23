import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import Single from './components/Single'
import Footer from './components/Footer'
import Login from './components/Login'
import Registration from './components/Registration'
import Products from './components/Products'
import Contact from './components/Contact'
import Checkout from './components/Checkout'

function App() {
  return (
  <>
      <Router>
        <Header />
        <Route path="/" component={Home} exact></Route>
        <Route path="/Single/:id" component={Single} exact></Route>
        <Route path="/Login" component={Login} exact></Route>
        <Route path="/Registration" component={Registration} exact></Route>
        <Route path="/Products" component={Products} exact></Route>
        <Route path="/Contact" component={Contact} exact></Route>
        <Route path="/Checkout" component={Checkout} exact></Route>
        <Footer />

    </Router>


  </>
  );
}

export default App;
