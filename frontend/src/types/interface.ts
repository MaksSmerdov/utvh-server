export interface SensorData {
  [key: string]: number;
}

export interface BooleanSensorData {
  [key: string]: boolean;
}

export interface KeyItem {
  key?: string;
  name?: string;
  className: string;
  tooltip?: string;
  unit?: string;
}
