import './App.css';
import React from 'react';
import PersonalCard from './components/PersonalCard';


function App() {
  return (
    <div className="App">
      <PersonalCard firstName={'Samuel'} lastName={'Oak'} age={50} hairColor={'Gray'}/>
      <PersonalCard firstName={'Hakasi'} lastName={'Utsugi'} age={30} hairColor={'Brown'}/>
      <PersonalCard firstName={'Hakasi'} lastName={'Odamaki'} age={35} hairColor={'Brown'}/>
      <PersonalCard firstName={'Hakase'} lastName={'Nanakamado'} age={70} hairColor={'White'}/>
    </div>
  );
}

export default App;
