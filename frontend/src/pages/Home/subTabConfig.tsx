import { JSX } from 'react';
import { FaChartBar, FaTable, FaWrench } from 'react-icons/fa';

export interface SubtabItem {
  label: string;
  value: string;
  icon: JSX.Element;
}

export const subtabsConfig: Record<string, SubtabItem[]> = {
  boiler: [
    { label: 'Параметры', value: 'current', icon: <FaTable /> },
    { label: 'Мнемосхема', value: 'mnemo', icon: <FaWrench /> },
    { label: 'Графики температур', value: 'temperChart', icon: <FaChartBar /> },
    { label: 'Графики разрежения', value: 'pressureChart', icon: <FaChartBar /> },
    { label: 'Графики уровня', value: 'levelChart', icon: <FaChartBar /> },
  ],
  hvo: [
    { label: 'Параметры', value: 'current', icon: <FaTable /> },
    { label: 'Мнемосхема', value: 'mnemo', icon: <FaWrench /> },
    { label: 'Графики температур', value: 'temperChart', icon: <FaChartBar /> },
    { label: 'Графики разрежения', value: 'vacuumChart', icon: <FaChartBar /> },
  ],
};
