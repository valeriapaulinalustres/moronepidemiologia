import {useState} from 'react'
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import './sifilis.css'

function Sifilis() {

const [ultimoMes, setUltimoMes] = useState(false)

  let sifilisTotalMasculino = 40;
  let sifilisTotalFemenino = 50;

  const totalPorSexoSifilis = [sifilisTotalMasculino, sifilisTotalFemenino]

  return (
    <div className='page-container'>
      <h2>Sífilis</h2>
      <div className='btnElegir-page'>
      <button className={ultimoMes ? "button" : "buttonActive"} onClick={()=>setUltimoMes(false)}>Acumulado 2022</button>
      <button className={ultimoMes ? "buttonActive" : "button"} onClick={()=>setUltimoMes(true)}>Ver último mes</button>
      </div>

     {ultimoMes 
     
     ?
      <div className='totalesGraphs-container'>
        <div className='totales-page-container'>
          <div className='recuadro amarillo'>Total último mes: <p className='totalNumber'>120</p></div>
          <div className='recuadro rojo'>Confirmados: {}</div>
          <div className='recuadro naranja'>Probables: {}</div>
          <div className='recuadro verde'>Descartados: {}</div>
          <div className='recuadro turquesa'>Gestantes: {}</div>
          <div className='recuadro violeta'>Congénitos: {}</div>
        </div>
        <div className='graphs-container'>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        </div>
      </div>

      :
      <div className='totalesGraphs-container'>
        <div className='totales-page-container'>
        <div className='recuadro amarillo'>Total 2022: <p className='totalNumber'>{}</p></div>
          <div className='recuadro rojo'>Confirmados: {}</div>
          <div className='recuadro naranja'>Probables: {}</div>
          <div className='recuadro verde'>Descartados: {}</div>
          <div className='recuadro turquesa'>Gestantes: {}</div>
          <div className='recuadro violeta'>Congénitos: {}</div>
        </div>
        <div className='graphs-container'>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='doughnutChart-sifilis'><DoughnutChart datos={totalPorSexoSifilis} /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
        <div className='barChart-sifilis'><BarChart /></div>
</div>
      </div>
}


    </div>
  )
}

export default Sifilis