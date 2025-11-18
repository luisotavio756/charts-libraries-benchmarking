import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { LineChartComponent } from '../components/charts/recharts/line/line';
import { BarChartComponent } from '../components/charts/recharts/bar/bar';
import { PieChartComponent } from '../components/charts/recharts/pie/pie';
import { StackBarChartComponent } from '../components/charts/recharts/stackbar/stackbar';
import { AreaChartComponent } from '../components/charts/recharts/area/area';
import { LineAreaComposedChartComponent } from '../components/charts/recharts/linearecomposed/linearecomposed';
import { ScatterChartComponent } from '../components/charts/recharts/scatter/scatter';
import { DonnutChartComponent } from '../components/charts/recharts/donnut/donnut';
import { RadarChartComponent } from '../components/charts/recharts/radar/radar';
import { 
  generateLineData, 
  generateBarData, 
  generatePieData,
  generateStackBarData,
  generateAreaData,
  generateLineAreaComposedData,
  generateScatterData,
  generateDonnutData,
  generateRadarData,
  type SampleSize 
} from '../shared/mockData';

export default function RechartsPage() {
  const [sampleSize, setSampleSize] = useState<SampleSize>('1k');

  const lineData = useMemo(() => generateLineData(sampleSize), [sampleSize]);
  const barData = useMemo(() => generateBarData(sampleSize), [sampleSize]);
  const pieData = useMemo(() => generatePieData(sampleSize), [sampleSize]);
  const stackBarData = useMemo(() => generateStackBarData(sampleSize), [sampleSize]);
  const areaData = useMemo(() => generateAreaData(sampleSize), [sampleSize]);
  const lineAreaComposedData = useMemo(() => generateLineAreaComposedData(sampleSize), [sampleSize]);
  const scatterData = useMemo(() => generateScatterData(sampleSize), [sampleSize]);
  const donnutData = useMemo(() => generateDonnutData(sampleSize), [sampleSize]);
  const radarData = useMemo(() => generateRadarData(sampleSize), [sampleSize]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-800">Recharts Performance Test</h1>
            <Link
              to="/chartjs"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Switch to Chart.js
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sample-size" className="text-sm font-medium text-gray-700">
              Sample Size:
            </label>
            <select
              id="sample-size"
              value={sampleSize}
              onChange={(e) => setSampleSize(e.target.value as SampleSize)}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="500">500</option>
              <option value="1k">1k</option>
              <option value="10k">10k</option>
              <option value="50k">50k</option>
            </select>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-item chart-line">
            <LineChartComponent data={lineData} />
          </div>
          <div className="chart-item chart-bar">
            <BarChartComponent data={barData} />
          </div>
          <div className="chart-item chart-pie">
            <PieChartComponent data={pieData} />
          </div>
          <div className="chart-item chart-stackbar">
            <StackBarChartComponent data={stackBarData} />
          </div>
          <div className="chart-item chart-area">
            <AreaChartComponent data={areaData} />
          </div>
          <div className="chart-item chart-composed">
            <LineAreaComposedChartComponent data={lineAreaComposedData} />
          </div>
          <div className="chart-item chart-scatter">
            <ScatterChartComponent data={scatterData} />
          </div>
          <div className="chart-item chart-donnut">
            <DonnutChartComponent data={donnutData} />
          </div>
          <div className="chart-item chart-radar">
            <RadarChartComponent data={radarData} />
          </div>
        </div>
      </div>
    </div>
  );
}

