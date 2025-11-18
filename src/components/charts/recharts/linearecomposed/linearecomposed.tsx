import { ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { LineAreaComposedDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

interface LineAreaComposedChartProps {
  data: LineAreaComposedDataPoint[];
}

export const LineAreaComposedChartComponent = ({ data }: LineAreaComposedChartProps) => {
  return (
    <Container title="Line Area Composed Chart">
      <ResponsiveContainer>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="areaValue" 
            fill="#82ca9d" 
            stroke="#82ca9d"
            fillOpacity={0.6}
          />
          <Line 
            type="monotone" 
            dataKey="lineValue" 
            stroke="#8884d8" 
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Container>
  );
};

