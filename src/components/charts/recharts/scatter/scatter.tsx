import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ScatterDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

interface ScatterChartProps {
  data: ScatterDataPoint[];
}

export const ScatterChartComponent = ({ data }: ScatterChartProps) => {
  return (
    <Container title="Scatter Chart">
      <ResponsiveContainer>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            type="number"
            dataKey="x"
            name="X"
            domain={['dataMin', 'dataMax']}
          />
          <YAxis 
            type="number"
            dataKey="y"
            name="Y"
            domain={['dataMin', 'dataMax']}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter 
            name="Data Points" 
            data={data} 
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </Container>
  );
};

