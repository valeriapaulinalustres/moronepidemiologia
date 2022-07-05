import React from 'react'
import DoughnutChart from '../../components/DoughnutChart'

function Tbc() {

  let tbcTotalMasculino = 90;
  let tbcTotalFemenino = 10;

const totalPorSexoTbc = [tbcTotalMasculino, tbcTotalFemenino]
  return (
    <div>
<h2>TBC</h2>
<DoughnutChart datos={totalPorSexoTbc}/>

    </div>
  )
}

export default Tbc