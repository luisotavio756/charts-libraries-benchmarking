import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import type { PieDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

interface PieChartProps {
  data: PieDataPoint[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

export const PieChartComponent = ({ data }: PieChartProps) => {
  return (
    <Container title="Pie Chart">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data as unknown as Array<Record<string, unknown>>}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={(props: { name?: string; percent?: number }) => 
              `${props.name || ''}: ${props.percent ? (props.percent * 100).toFixed(0) : '0'}%`
            }
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
};

