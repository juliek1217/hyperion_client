import React, { Component, useEffect, useState } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import axios from "axios";
import { Select, MenuItem, Grid } from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

async function getData() {
  const [stock, setStock] = React.useState(null);
  const url = process.env.API_HOST_URL + "?ticker=AAPL&tradeDate=2022-01-01,2023-03-05";
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
  const [stocks, setStock] = useState([]);
  const [tickers, setTicker] = useState([]);
  const [isLoading, setLoading] = useState(true); // Check if fetch requests has completed
  const [selectedOption, setSelectedOption] = useState();
  //const url = process.env.API_HOST_URL + "?ticker=AAPL&tradeDate=2022-01-01,2023-03-05";

  const getDataTickers = () => {
    const url1 = "http://localhost/api/tickers";
    let endpoints = [url1];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(result => {
      setTicker(result[0].data.data);
      console.log("Response data:");
      console.log(result[0].data.data);
      setLoading(false);
    });
  }


  const getDataStock = (selectedTicker) => {
    const url = "http://localhost/api/stock?ticker=" + selectedTicker + "&tradeDate=2022-01-01,2023-03-05";
    let endpoints = [url];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(result => {
      setStock(result[0].data);
      console.log("Response data:");
      console.log(result[0].data.data[0]);
      setLoading(false);
    });
  }

  useEffect(() => {
    getDataTickers();
  }, [])

  window.addEventListener("beforeunload", (event) => {
    getDataTickers();
    console.log("API call before page reload");
  });

  window.addEventListener("unload", (event) => {
    getDataTickers();
    console.log("API call after page reload");
  });

  const handleChange = (event, value) => {
    setSelectedOption(value.ticker)
    getDataStock(value.ticker);
  };

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
        return numberFormat.format(this.y, 0) + '</b><br/>' + Date().toLocaleString()//moment(this.x).format('MMMM Do YYYY, h:mm')
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
      text: `Stock Chart`
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

      data: stocks,
      tooltip: {
        valueDecimals: 2
      },
    }
    ]
  };

  return isLoading ? <div> <Grid container justifyContent="center">
    <CircularProgress /></Grid>
  </div> : (
    <div>
      <Autocomplete
        id="combo-box-ticker"
        options={tickers}
        getOptionLabel={(option) => option.ticker}
        onChange={handleChange}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select ticker/symbol" variant="outlined" />
        }
      />

      <h1>{selectedOption}</h1>
      <ReactHighcharts config={configPrice}></ReactHighcharts>
    </div>
  )
}

