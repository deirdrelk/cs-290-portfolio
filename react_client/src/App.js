import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';
import Navigation from './components/Navigation';
import { GiWeightLiftingUp } from 'react-icons/gi';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <GiWeightLiftingUp className='App-logo' />
          <h1>Exercise Tracker</h1>
          <p><strong>Brought to you by Buff Guys, Inc.</strong></p>
        </header>
        <Navigation />
        <main>
        <Route path='/' exact><HomePage setExerciseToEdit={setExerciseToEdit}/></Route>
        <Route path='/add-exercise'><AddExercisePage /></Route>
        <Route path='/edit-exercise'><EditExercisePage exerciseToEdit={exerciseToEdit} /></Route>
        </main>
        <footer>
          <p>&copy; 2022 Deirdre Lyons-Keefe</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
