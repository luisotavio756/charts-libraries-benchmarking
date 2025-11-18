import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import type { RadarDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  data: RadarDataPoint[];
}

export const RadarChartComponent = ({ data }: RadarChartProps) => {
  const chartData = {
    labels: data.map(item => item.subject),
    datasets: [
      {
        label: 'Value',
        data: data.map(item => item.value),
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.6)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#8884d8',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
      },
    ],
  };

  const options: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <Container title="Radar Chart">
      <Radar data={chartData} options={options} />
    </Container>
  );
};

