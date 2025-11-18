import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { AreaDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

interface AreaChartProps {
  data: AreaDataPoint[];
}

export const AreaChartComponent = ({ data }: AreaChartProps) => {
  return (
    <Container title="Area Chart">
      <ResponsiveContainer>
        <AreaChart margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }} data={data}>
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
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

