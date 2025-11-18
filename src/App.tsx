import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RechartsPage from './pages/RechartsPage';
import ChartJsPage from './pages/ChartJsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RechartsPage />} />
        <Route path="/chartjs" element={<ChartJsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
