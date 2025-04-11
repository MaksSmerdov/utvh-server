import React from 'react';
import styles from './styles/StaticDisplayHvoFirst.module.scss';

interface LabelItem {
  text: string;
  className: string;
}

const labels: LabelItem[] = [
  { text: 'Помещение-2', className: 'pomeshenie-2-text' },
  { text: 'Задание', className: 'zadanie-uroven-e1-1-2-text' },
  { text: 'Ф1/1', className: 'f1-1-text' },
  { text: 'Ф1/2', className: 'f1-2-text' },
  { text: 'Ф1/3', className: 'f1-3-text' },
  { text: 'Ф1/4', className: 'f1-4-text' },
  { text: 'Ф2/1', className: 'f2-1-text' },
  { text: 'Ф2/2', className: 'f2-2-text' },
  { text: 'Ф2/3', className: 'f2-3-text' },
  { text: 'Е1/1', className: 'e1-1-text' },
  { text: 'Е1/2', className: 'e1-2-text' },
  { text: 'H1/1', className: 'n1-1-text' },
  { text: 'H1/2', className: 'n1-2-text' },
  { text: 'H1/3', className: 'n1-3-text' },
  { text: 'H2/1', className: 'n2-1-text' },
  { text: 'H2/2', className: 'n2-2-text' },
  { text: 'H3/1', className: 'n3-1-text' },
  { text: 'H3/2', className: 'n3-2-text' },
  { text: 'Q на промывку', className: 'rashod-na-promyvku-text' },
  { text: 'Q на входе', className: 'rashod-na-vhode-text' },
  { text: 'P на входе', className: 'davl-vhod-ustanivki-text' },
  { text: 'P перед фильтрами', className: 'davl-posle-nasosov-1-1-2-3-text' },
  { text: 'ИМ1', className: 'kontrol-im-1-text' },
  { text: 'P перед Ф3/1-7', className: 'davl-pered-f3-1-7-text' },
  { text: 'P на промывку Ф1/1-4, Ф2/1-3', className: 'davl-posle-nasosov-3-1-2-text' },
];

const StaticDisplayHvoFirst: React.FC = () => {
  return (
    <>
      {labels.map((label, index) => (
        <p
          key={index}
          className={`${styles['mnemo__param-descr']} ${styles[label.className]}`}
        >
          {label.text}
        </p>
      ))}
    </>
  );
};

export default StaticDisplayHvoFirst;
