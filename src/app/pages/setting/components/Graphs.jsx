import React from 'react';
import { Line } from 'react-chartjs-2';



export function Graphs({options,data}) {
  return <Line options={options} data={data} />;
}
