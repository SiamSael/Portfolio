import { HashRouter as Router,  Routes, Route} from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';

const App = () => {
  return( 
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;