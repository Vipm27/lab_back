import React, {useState} from 'react';
import { Graphs } from '../Graphs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { faker } from '@faker-js/faker';
const labels = ["01.01","10.01" ,"20.01" ,"30.01" ,"01.02" ,"10.02" ,"20.02","30.02", ];
const GrafPanel = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
      );
      const [options,setOptions] = useState(
        {responsive: true,
        plugins: {
          title: {
            display: true,
          },
        },
      })
      const [data, setData] = useState ({
        labels,
        datasets: [
          {
            label: 'Temperature',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgba(255, 159, 159, 0.9)',
            backgroundColor: 'rgba(255, 159, 159, 0.9)',
          },
        ],
      })

    const clickMan = (e) =>{
        if(e.target.id==="blrb_1"){
            setData({
                labels,
                datasets: [
                  {
                    label: 'Temperature',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    borderColor: 'rgba(255, 159, 159, 0.9)',
                    backgroundColor: 'rgba(255, 159, 159, 0.9)',
                  },
                ],
              })
            setOptions(
                {responsive: true,
                plugins: {
                  title: {
                    display: true,
                  },
                },
              })
        }
        if(e.target.id==="blrb_2"){
            setData({
                labels,
                datasets: [
                  {
                    label: 'Освещенность',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
                    borderColor: 'rgba(255, 159, 159, 0.9)',
                    backgroundColor: 'rgba(255, 159, 159, 0.9)',
                  },
                ],
              })
            setOptions(
                {responsive: true,
                plugins: {
                  title: {
                    display: true,
                  },
                },
              })
        }
        if(e.target.id==="blrb_3"){
            setData({
                labels,
                datasets: [
                  {
                    label: 'Влажность',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    borderColor: 'rgba(255, 159, 159, 0.9)',
                    backgroundColor: 'rgba(255, 159, 159, 0.9)',
                  },
                ],
              })
            setOptions(
                {responsive: true,
                plugins: {
                  title: {
                    display: true,
                  },
                },
              })
        }
    }
    return (

        <div className="bottom__left">

            <div className="bottom__left__title">
                График
            </div>

            <div className="bottom__left__buttons">
                <div className="bottom__left__radio__button" >
                    <input id="blrb_1" type="radio" name="bottom__left__radio__button" value="1" onClick={clickMan} />
                    <label for="blrb_1">Температура</label>
                    
                </div>
                 
                <div className="bottom__left__radio__button" >
                    <input id="blrb_2" type="radio" name="bottom__left__radio__button" value="2" onClick={clickMan}/>
                    <label for="blrb_2">Освещенность</label>
                </div>
                 
                <div className="bottom__left__radio__button" >
                    <input id="blrb_3" type="radio" name="bottom__left__radio__button" value="3" onClick={clickMan}/>
                    <label for="blrb_3">Влажность</label>
                </div>
            </div>

            <div className="graf">
                <Graphs options={options} data={data}/>
            </div>

        </div>
    );
};

export default GrafPanel;