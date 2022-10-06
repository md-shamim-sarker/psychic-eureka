import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Left from './components/Left/Left';
import Right from './components/Right/Right';

const App = () => {
  const [excercises, setExcercises] = useState([]);
  const [gyms, setGyms] = useState(0);

  const gymHandler = (time) => {
    setGyms(gyms + time);
  };

  useEffect(() => {
    fetch('./api.json')
      .then(r => r.json())
      .then(r => setExcercises(r));
  }, []);

  return (
    <div className='App'>
      <div>
        <Header></Header>
      </div>
      <div className='body'>
        <Left
          excercises={excercises}
          gymHandler={gymHandler}
        ></Left>
        <Right
          gyms={gyms}
        ></Right>
      </div>
    </div>
  );
};

export default App;