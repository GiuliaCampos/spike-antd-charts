import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/charts';

const AreaChart = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    asyncFetch();
    asyncFetch2();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const asyncFetch2 = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then((response) => response.json())
      .then((json) => setData2(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  var config = {
    data: data,
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };

  var config2 = {
    data: data2,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
  };

  return (
    <>
        <Area {...config} />
        <Area {...config2} />
    </>
  );
}

export default AreaChart;