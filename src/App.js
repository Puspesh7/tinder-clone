import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      {/*header*/}
      <Header />
      {/*tinder cards*/}
      <TinderCards />
      {/*Swipe buttons*/}
      <SwipeButtons />
    </div>
  );
}

export default App;
