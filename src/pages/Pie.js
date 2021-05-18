import React from 'react';
import { Pie as ChartPie, Gauge } from '@ant-design/charts';

const Pie = () => {
    var data = [
        {
          type: '分类一',
          value: 27,
        },
        {
          type: '分类二',
          value: 25,
        },
        {
          type: '分类三',
          value: 18,
        },
        {
          type: '分类四',
          value: 15,
        },
        {
          type: '分类五',
          value: 10,
        },
        {
          type: '其他',
          value: 5,
        },
      ];
      var config = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: { 
            type: 'spider',
            labelHeight: 28,
            content: '{name}\n{percentage}', 
        },
        autoHide: true,
        interactions: [{ type: 'element-active' }],
      };


      var config2 = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.64,
        meta: {
          value: {
            formatter: function formatter(v) {
              return ''.concat(v, ' \xA5');
            },
          },
        },
        label: {
          type: 'inner',
          offset: '-50%',
          style: { textAlign: 'center' },
          autoRotate: false,
          content: '{value}',
        },
        interactions: [
          { type: 'element-selected' },
          { type: 'element-active' },
          { type: 'pie-statistic-active' },
        ],
      };

      var config3 = {
        percent: 0.25,
        range: { color: 'l(0) 0:#bde8ff 1:#9ec9ff' },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        indicator: null,
        statistic: {
          title: {
            offsetY: -36,
            style: {
              fontSize: '36px',
              color: '#4B535E',
            },
            formatter: function formatter() {
              return '30%';
            },
          },
          content: {
            style: {
              fontSize: '24px',
              lineHeight: '44px',
              color: '#4B535E',
            },
            formatter: function formatter() {
                return 'Teste';
            },
          },
        },
      };

    return (
        <>
            <ChartPie {...config} />
            <ChartPie {...config2} />
            <Gauge {...config3} />
        </>
    );
};

export default Pie;