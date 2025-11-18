import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import type { StackBarDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface StackBarChartProps {
  data: StackBarDataPoint[];
}

export const StackBarChartComponent = ({ data }: StackBarChartProps) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Value 1',
        data: data.map(item => item.value1),
        backgroundColor: '#8884d8',
        borderColor: '#8884d8',
        borderWidth: 1,
      },
      {
        label: 'Value 2',
        data: data.map(item => item.value2),
        backgroundColor: '#82ca9d',
        borderColor: '#82ca9d',
        borderWidth: 1,
      },
      {
        label: 'Value 3',
        data: data.map(item => item.value3),
        backgroundColor: '#ffc658',
        borderColor: '#ffc658',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
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
        stacked: true,
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        stacked: true,
        beginAtZero: false,
      },
    },
  };

  return (
    <Container title="Stacked Bar Chart">
      <Bar data={chartData} options={options} />
    </Container>
  );
};

