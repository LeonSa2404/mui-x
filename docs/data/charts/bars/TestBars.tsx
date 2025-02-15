import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function TestBars() {
  return (
    <BarChart
      series={[
        { data: [2, 5, 3, 4, 1], stack: '1' },
        { data: [10, 3, 1, 2, 10], stack: '1' },
        { data: [10, 3, 1, 2, 10] },
      ]}
      width={600}
      height={500}
    />
  );
}
