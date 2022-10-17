import { ResponsiveBar } from '@nivo/bar'
import { GraphicContainer } from './styles'

const colors = {
  0: '#1A75E8',
  1: '#0F1138',
}

const getColor = (bar) => {
  if (bar.index % 2 === 0) return colors[1]
  if (bar.index % 2 !== 0) return colors[0]
}

const theme = {
  fontSize: '16px',
  axis: {
    legend: {
      text: {
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
  },
}

export function MyResponsiveBar({ data, colors }) {
  return (
    <GraphicContainer>
      <ResponsiveBar
        theme={theme}
        data={data}
        keys={['Popularidade']}
        indexBy="country"
        margin={{ top: 50, right: 100, bottom: 50, left: 100 }}
        padding={0.4}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={getColor}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Trilhas',
          legendPosition: 'middle',
          legendOffset: 43,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Popularidade',
          legendPosition: 'middle',
          legendOffset: -60,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['brighter', 100]],
        }}
        role="application"
        barAriaLabel={function (e) {
          return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
        }}
      />
    </GraphicContainer>
  )
}
