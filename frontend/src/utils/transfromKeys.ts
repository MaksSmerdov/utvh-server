import { SensorData } from '../types/interface';

export const transformKeys = (data: SensorData, removeLastWord?: boolean): SensorData => {
  const transformed: SensorData = {};
  Object.entries(data).forEach(([key, value]) => {
    const parts = key.split(' ').slice(0);
    const filtered = removeLastWord && parts.length > 1 ? parts.slice(0, -2) : parts;
    const transformedKey = filtered.join(' ').replace(/^./, (c) => c.toUpperCase());
    transformed[transformedKey] = value;
  });
  return transformed;
};
