import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import useAllData from '../../contexts/useAllData';


class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    // const [allData, setAllData] = useAllData();
    // const sampleData = allData.slice(0, 10)

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}

        dataSource={[
          { x: 5, yval: 2 },
          { x: 2, yval: 6 },
          { x: 3, yval: 8 },
          { x: 4, yval: 5 },
          { x: 5, yval: 10 },
        ]}


        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;