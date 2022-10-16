import { GraphicContainer } from './styles'

import { ResponsivePie } from '@nivo/pie'

const colors = {
  Masculino: '#1A75E8',
  Feminino: '#0F1138',
  'Não Binário': '#60A0EE',
}

const getColor = (bar) => {
  return colors[bar.id]
}

const theme = {
  textColor: '#eee',
  fontSize: '16px',
  tickColor: '#eee',
}

export function MyResponsivePie({ data }) {
  return (
    <GraphicContainer>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 50, bottom: 80, left: 80 }}
        startAngle={-156}
        endAngle={245}
        innerRadius={0.4}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        colors={getColor}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['brighter', 100]],
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 150,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
        theme={theme}
      />
    </GraphicContainer>
  )
}
