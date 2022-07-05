import React from 'react'
import DoughnutChart from '../../components/DoughnutChart'

function Sifilis() {

  let sifilisTotalMasculino = 40;
  let sifilisTotalFemenino = 50;

const totalPorSexoSifilis = [sifilisTotalMasculino, sifilisTotalFemenino]

  return (
    <div>
        <h2>Sífilis</h2>
        <DoughnutChart datos={totalPorSexoSifilis}/>


    </div>
  )
}

export default Sifilis