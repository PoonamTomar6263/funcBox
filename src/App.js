import logo from './logo.svg';
//import './App.css';
import Header from './Header';
import MiddlePage from './MiddlePage';
import Facility from './Facility';
import Question from './Question';
import School from './School';
import Footer from './Footer';
import Plans from './Plans';

function App() {
  return (
    <div className="App">
     <Header/>
     <MiddlePage/>
     
     <Facility/>
     <Plans/>
     <Question/>
     <School/>
     <Footer/>
    </div>
  );
}

export default App;
