import { HvoFirstData } from './hvoData.ts';

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

export interface HvoItem {
  key: string;
  source: keyof HvoFirstData;
  className: string;
  tooltip?: string;
  unit?: string;
}

export interface ModalDocumentationProps {
  open: boolean;
  onClose: () => void;
}