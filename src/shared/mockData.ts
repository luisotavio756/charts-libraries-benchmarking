export type SampleSize = '10' | '50' | '100' | '500' | '1k' | '10k' | '50k';

export interface LineDataPoint {
  name: string;
  value: number;
}

export interface BarDataPoint {
  name: string;
  value: number;
}

export interface PieDataPoint {
  name: string;
  value: number;
}

export interface StackBarDataPoint {
  name: string;
  value1: number;
  value2: number;
  value3: number;
}

export interface AreaDataPoint {
  name: string;
  value: number;
}

export interface LineAreaComposedDataPoint {
  name: string;
  lineValue: number;
  areaValue: number;
}

export interface ScatterDataPoint {
  x: number;
  y: number;
  name?: string;
}

export interface DonnutDataPoint {
  name: string;
  value: number;
}

export interface RadarDataPoint {
  subject: string;
  value: number;
  fullMark?: number;
}

const getSampleSizeNumber = (size: SampleSize): number => {
  switch (size) {
    case '10':
      return 10;
    case '50':
      return 50;
    case '100':
      return 100;
    case '500':
      return 500;
    case '1k':
      return 1000;
    case '10k':
      return 10000;
    case '50k':
      return 50000;
    default:
      return 1000;
  }
};

export const generateLineData = (sampleSize: SampleSize): LineDataPoint[] => {
  const count = getSampleSizeNumber(sampleSize);
  const data: LineDataPoint[] = [];
  
  for (let i = 0; i < count; i++) {
    data.push({
      name: `Point ${i + 1}`,
      value: Math.floor(Math.random() * 1000) + 100,
    });
  }
  
  return data;
};

export const generateBarData = (sampleSize: SampleSize): BarDataPoint[] => {
  const count = getSampleSizeNumber(sampleSize);
  const data: BarDataPoint[] = [];
  
  const categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'];
  const itemsPerCategory = Math.ceil(count / categories.length);
  
  categories.forEach((category) => {
    for (let i = 0; i < itemsPerCategory && data.length < count; i++) {
      data.push({
        name: `${category} - ${i + 1}`,
        value: Math.floor(Math.random() * 500) + 50,
      });
    }
  });
  
  return data;
};

export const generatePieData = (sampleSize: SampleSize): PieDataPoint[] => {
  // Para gráfico de pizza, mantemos um número fixo de categorias
  // mas os valores escalam com o tamanho da amostra
  const multiplier = getSampleSizeNumber(sampleSize) / 1000;
  const categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E', 'Category F'];
  
  return categories.map((category) => ({
    name: category,
    value: Math.floor((Math.random() * 500 + 100) * multiplier),
  }));
};

export const generateStackBarData = (sampleSize: SampleSize): StackBarDataPoint[] => {
  const count = getSampleSizeNumber(sampleSize);
  const data: StackBarDataPoint[] = [];
  
  const categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'];
  const itemsPerCategory = Math.ceil(count / categories.length);
  
  categories.forEach((category) => {
    for (let i = 0; i < itemsPerCategory && data.length < count; i++) {
      data.push({
        name: `${category} - ${i + 1}`,
        value1: Math.floor(Math.random() * 300) + 50,
        value2: Math.floor(Math.random() * 300) + 50,
        value3: Math.floor(Math.random() * 300) + 50,
      });
    }
  });
  
  return data;
};

export const generateAreaData = (sampleSize: SampleSize): AreaDataPoint[] => {
  const count = getSampleSizeNumber(sampleSize);
  const data: AreaDataPoint[] = [];
  
  for (let i = 0; i < count; i++) {
    data.push({
      name: `Point ${i + 1}`,
      value: Math.floor(Math.random() * 1000) + 100,
    });
  }
  
  return data;
};

export const generateLineAreaComposedData = (sampleSize: SampleSize): LineAreaComposedDataPoint[] => {
  const count = getSampleSizeNumber(sampleSize);
  const data: LineAreaComposedDataPoint[] = [];
  
  for (let i = 0; i < count; i++) {
    data.push({
      name: `Point ${i + 1}`,
      lineValue: Math.floor(Math.random() * 800) + 100,
      areaValue: Math.floor(Math.random() * 600) + 150,
    });
  }
  
  return data;
};

export const generateScatterData = (sampleSize: SampleSize): ScatterDataPoint[] => {
  const count = getSampleSizeNumber(sampleSize);
  const data: ScatterDataPoint[] = [];
  
  for (let i = 0; i < count; i++) {
    data.push({
      x: Math.floor(Math.random() * 1000) + 50,
      y: Math.floor(Math.random() * 800) + 50,
      name: `Point ${i + 1}`,
    });
  }
  
  return data;
};

export const generateDonnutData = (sampleSize: SampleSize): DonnutDataPoint[] => {
  // Para gráfico donnut, mantemos um número fixo de categorias
  // mas os valores escalam com o tamanho da amostra
  const multiplier = getSampleSizeNumber(sampleSize) / 1000;
  const categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E', 'Category F'];
  
  return categories.map((category) => ({
    name: category,
    value: Math.floor((Math.random() * 500 + 100) * multiplier),
  }));
};

export const generateRadarData = (sampleSize: SampleSize): RadarDataPoint[] => {
  // Para gráfico radar, mantemos um número fixo de categorias (eixos)
  // mas os valores escalam com o tamanho da amostra
  const multiplier = getSampleSizeNumber(sampleSize) / 10;
  const subjects = ['Math', 'English', 'Science', 'History', 'Geography', 'Art'];
  
  return subjects.map((subject) => ({
    subject,
    value: Math.floor((Math.random() * 100 + 50) * multiplier),
    fullMark: 100,
  }));
};

