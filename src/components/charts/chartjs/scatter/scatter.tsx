import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import type { ScatterDataPoint } from '../../../../shared/mockData';
import Container from '../../../container/container';

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface ScatterChartProps {
  data: ScatterDataPoint[];
}

export const ScatterChartComponent = ({ data }: ScatterChartProps) => {
  const chartData = {
    datasets: [
      {
        label: 'Data Points',
        data: data.map(item => ({ x: item.x, y: item.y })),
        backgroundColor: '#8884d8',
        borderColor: '#8884d8',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options: ChartOptions<'scatter'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const point = context.raw as { x: number; y: number };
            return `X: ${point?.x ?? 0}, Y: ${point?.y ?? 0}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'linear' as const,
        position: 'bottom' as const,
        title: {
          display: true,
          text: 'X',
        },
      },
      y: {
        type: 'linear' as const,
        title: {
          display: true,
          text: 'Y',
        },
      },
    },
  };

  return (
    <Container title="Scatter Chart">
      <Scatter data={chartData} options={options} />
    </Container>
  );
};

