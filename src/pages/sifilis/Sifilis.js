import React from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import './sifilis.css'

function Sifilis() {

  let sifilisTotalMasculino = 40;
  let sifilisTotalFemenino = 50;

const totalPorSexoSifilis = [sifilisTotalMasculino, sifilisTotalFemenino]

  return (
    <div>
        <h2>Sífilis</h2>
        <div className='sifilis-charts-container'>
          <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis}/></div>
          <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis}/></div>
          <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis}/></div>
          <div className='doughnutChart-sifilis'><BarChart /></div>
        <div className='doughnutChart-sifilis'><BarChart /></div>
        <div className='doughnutChart-sifilis'><BarChart /></div>
          
        </div>
        


    </div>
  )
}

export default Sifilis