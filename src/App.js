import { HashRouter as Router} from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';

const App = () => {
  return( 
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Home />
      <Footer />
    </Router>
  )
}

export default App;