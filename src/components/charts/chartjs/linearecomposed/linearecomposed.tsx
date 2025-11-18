import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
} from 'chart.js';
import type { LineAreaComposedDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineAreaComposedChartProps {
  data: LineAreaComposedDataPoint[];
}

export const LineAreaComposedChartComponent = ({ data }: LineAreaComposedChartProps) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Area Value',
        data: data.map(item => item.areaValue),
        borderColor: '#82ca9d',
        backgroundColor: 'rgba(130, 202, 157, 0.6)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Line Value',
        data: data.map(item => item.lineValue),
        borderColor: '#8884d8',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
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
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <Container title="Line Area Composed Chart">
      <Line data={chartData} options={options} />
    </Container>
  );
};

