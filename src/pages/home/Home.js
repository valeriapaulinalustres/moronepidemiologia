import React from 'react';
import BarChart from '../../components/BarChart';
import './home.css'


function Home() {

let anioEnCurso = 2022;
let mesPrevio = "18 a 22";
let ultimaSE = 22;


  return (
    <div className='home-container'>
      <h2>Vigilancia de Enfermedades de Notificación Obligatoria</h2>
      <h3>{anioEnCurso}</h3>
      <div>
        <button className='button acumulado'>Acumulado {anioEnCurso}</button>
        <button className='button actual'>SE {mesPrevio}</button>
      </div>
      <h3>SE 1 a {ultimaSE}</h3>
      <h3>{anioEnCurso}</h3>
   
      <div className='home-charts-container'>
        <div className='barChart-home'><BarChart /></div>
        <div className='barChart-home'><BarChart /></div>
        <div className='barChart-home'><BarChart /></div>
        <div className='barChart-home'><BarChart /></div>

      </div>
      
    </div>
  )
}

export default Home