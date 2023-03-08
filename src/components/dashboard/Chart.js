import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import priceData from './btcdata.json'
import moment from 'moment'
import axios from "axios";

async function getData() {
  const [stock, setStock] = React.useState(null);
  const url = "http://localhost/api/stock?ticker=AAPL&tradeDate=2022-01-01,2023-03-05";
  // React.useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setStock(response.data);
  //   });
  // }, []);
  // if (!stock) return null;

  const date = [],
    globalTemp = [],
    northernTemp = [],
    southernTemp = [],
    response = await fetch(url),
    data = await response.text(),
    rows = data.split(/\n/).slice(1);

  rows.forEach(element => {
    const row = element.split(','),
      year = row[0],
      gt = +row[1],
      nt = +row[2],
      st = +row[3];

    date.push(year);
    globalTemp.push(gt);
    northernTemp.push(nt);
    southernTemp.push(st);
  })

  return {
    date,
    globalTemp,
    northernTemp,
    southernTemp
  }
}




export default function Chart() {
  const [stock, setStock] = React.useState(null);
  //const url = "https://api.orats.io/datav2/hist/dailies?token=ab311a4c-71b5-4e0c-af77-61ada27a2df8&ticker=AAPL&tradeDate=2022-01-01,2023-03-05";
  const url = "http://localhost/api/stock?ticker=AAPL&tradeDate=2022-01-01,2023-03-05";
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setStock(response.data);
      //setOptions({ series: [{ data: response.data }] });
    });
  }, []);

  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);
  const configPrice = {
    yAxis: [{
      offset: 20,

      labels: {
        formatter: function () {
          return numberFormat.format(this.value)
        }
        ,
        x: -15,
        style: {
          "color": "#000", "position": "absolute"

        },
        align: 'left'
      },
    },

    ],
    tooltip: {
      shared: true,
      formatter: function () {
        return numberFormat.format(this.y, 0) + '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
      }
    },
    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6,

      }
    },
    rangeSelector: {
      selected: 1
    },
    title: {
      text: `stock price`
    },
    chart: {
      height: 600,
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: true
    },
    xAxis: {
      type: 'date',
    },
    rangeSelector: {
      buttons: [{
        type: 'day',
        count: 1,
        text: '1d',
      }, {
        type: 'day',
        count: 7,
        text: '7d'
      }, {
        type: 'month',
        count: 1,
        text: '1m'
      }, {
        type: 'month',
        count: 3,
        text: '3m'
      },
      {
        type: 'all',
        text: 'All'
      }],
      selected: 4
    },
    series: [{
      name: 'Price',
      type: 'spline',

      data: priceData,
      tooltip: {
        valueDecimals: 2
      },
    }
    ]
  };

  return (
    <div>
      {/* <h1>{stock.data[0].ticker}</h1> */}
      <ReactHighcharts config={configPrice}></ReactHighcharts>
    </div>
  )
}
