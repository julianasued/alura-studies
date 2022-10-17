import React from 'react';
import Chronometer from '../components/Chronometer';
import MyForm from '../components/MyForm';
import MyList from '../components/MyList';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <MyForm />
      <MyList />
      <Chronometer />
    </div>
  );
}

export default App;
