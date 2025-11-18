import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { StackBarDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

interface StackBarChartProps {
  data: StackBarDataPoint[];
}

export const StackBarChartComponent = ({ data }: StackBarChartProps) => {
  return (
    <Container title="Stacked Bar Chart"> 
      <ResponsiveContainer>
        <BarChart data={data}>
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
          <Bar dataKey="value1" stackId="a" fill="#8884d8" />
          <Bar dataKey="value2" stackId="a" fill="#82ca9d" />
          <Bar dataKey="value3" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

