import React from 'react';
import { ChartComponent , SeriesCollectionDirective , SeriesDirective , Inject , Legend , Category , StackingColumnSeries , Tooltip } from '@syncfusion/ej2-react-charts';
import {stackedCustomSeries , stackedPrimaryXAxis , stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({width,height}) => {
  const {currentColor} = useStateContext();

  return (
    <ChartComponent enableAnimation={true} width={width} height={height} palettes={[currentColor,'#4b5563']} id="charts" primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} chartArea={{border: {width:0}}} tooltip={{ enable: true }} LegendSettings={{ background: 'white' }}>
      <Inject services={[Legend, Category, StackingColumnSeries , Tooltip ]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked