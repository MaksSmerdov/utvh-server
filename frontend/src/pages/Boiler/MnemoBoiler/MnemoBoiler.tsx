import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../../hooks/useFetchData.ts';
import { BoilerData } from '../../../types/boilerData.ts';
import Header from '../../../components/Header/Header.tsx';
import Button from '../../../ui/CustomButton/CustomButton';
import Loader from '../../../ui/Loader/Loader.tsx';
import ErrorMessage from '../../../ui/ErrorMessage/ErrorMessage.tsx';
import styles from './MnemoBoiler.module.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ParamDisplay from './components/ParamDisplay.tsx';
import { imLabels } from './configBoiler.tsx';

export const MnemoBoiler: React.FC = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetchData<BoilerData>(`kotel${id}-data`);
  const [tooltipsEnabled, setTooltipsEnabled] = useState(true);

  if (loading || !data) return <Loader />;
  if (error) return <ErrorMessage />;

  return (
    <>
      <Header title={`Котел №${id}`} />
      <div className={`${styles['mnemo']}`}>
        <div className={`${styles['mnemo__control']}`}>
          <Button
            onClick={() => setTooltipsEnabled(!tooltipsEnabled)}
            isActive={tooltipsEnabled}
          >
            {tooltipsEnabled ? <FaEyeSlash /> : <FaEye />}
            {tooltipsEnabled ? 'Выкл. всплывающие подсказки' : 'Вкл. всплывающие подсказки'}
          </Button>
          <Button>Документация</Button>
        </div>
        <img src="/img/kotelnaya/kotel.png" alt="Котел" className={`${styles['mnemo__img']}`} />

        <ParamDisplay data={data} tooltipsEnabled={tooltipsEnabled} />

        {imLabels.map((label) => {
          const value = data.im[`${label.key}`];
          return (
            <div key={label.key} className={`${styles['im']} ${styles[label.className]}`}>
              {value} %
            </div>
          );
        })}

      </div>
    </>
  );
};