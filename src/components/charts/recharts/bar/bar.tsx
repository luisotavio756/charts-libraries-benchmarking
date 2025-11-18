import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { BarDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

interface BarChartProps {
  data: BarDataPoint[];
}

export const BarChartComponent = ({ data }: BarChartProps) => {
  return (
    <Container title="Bar Chart">
      <ResponsiveContainer>
        <BarChart 
          data={data}
        >
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
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

