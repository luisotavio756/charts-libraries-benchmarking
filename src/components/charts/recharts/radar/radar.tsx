import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import type { RadarDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

interface RadarChartProps {
  data: RadarDataPoint[];
}

export const RadarChartComponent = ({ data }: RadarChartProps) => {
  return (
    <Container title="Radar Chart">
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />
          <Radar
            name="Value"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  );
};

