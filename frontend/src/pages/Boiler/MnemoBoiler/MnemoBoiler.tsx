import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../../hooks/useFetchData.ts';
import { BoilerData } from '../../../types/boilerData.ts';
import Header from '../../../components/Header/Header.tsx';
import Button from '../../../ui/CustomButton/CustomButton';
import Loader from '../../../ui/Loader/Loader.tsx';
import ErrorMessage from '../../../ui/ErrorMessage/ErrorMessage.tsx';
import styles from './MnemoBoiler.module.scss';
import { FaBook, FaEye, FaEyeSlash } from 'react-icons/fa';
import ParamDisplay from './components/ParamDisplay.tsx';
import { alarmLabels, imLabels, infoLabels, staticLabels } from './components/configBoiler.ts';
import Valve from '../../../components/Valve/Valve.tsx';
import GifDisplay from './components/GifDisplay.tsx';
import LevelIndicator from '../../../components/LevelIndicator/LevelIndicator.tsx';
import ModalBoiler from './components/ModalBoiler/ModalBoiler.tsx';

export const MnemoBoiler: React.FC = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetchData<BoilerData>(`kotel${id}-data`);
  const [tooltipsEnabled, setTooltipsEnabled] = useState(true);
  const [openModal, setOpenModal] = useState(false);

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
          <Button onClick={() => setOpenModal(true)}>
            <FaBook />
            Документация
          </Button>
        </div>
        <img src="/img/boiler/kotel.png" alt="Котел" className={`${styles['mnemo__img']}`} />

        <div className={`${styles['mnemo__valve']} ${styles['mnemo__valve-1']}`}>
          <Valve orientation="horizontal" status={data.info['Клапан отсекатель']} />
        </div>
        <div className={`${styles['mnemo__valve']} ${styles['mnemo__valve-2']}`}>
          <Valve status={data.info['Клапан отсекатель']} />
        </div>
        <div className={`${styles['mnemo__valve']} ${styles['mnemo__valve-3']}`}>
          <Valve status={data.info['Клапан отсекатель']} />
        </div>
        <div className={`${styles['mnemo__valve']} ${styles['mnemo__valve-4']}`}>
          <Valve reverseColorLogic={true} status={data.info['Клапан отсекатель']} />
        </div>

        <GifDisplay data={data} />
        <ParamDisplay data={data} tooltipsEnabled={tooltipsEnabled} />

        {imLabels.map((label) => {
          const value = data.im[`${label.name}`];
          return (
            <div key={label.name} className={`${styles['im']} ${styles[label.className]}`}>
              {value} %
            </div>
          );
        })}
        {alarmLabels.map((label) => {
          const alarmState = data.alarms[`${label.key}`];
          const alarmClass = alarmState
            ? `${styles[label.className]} ${styles['alarm__active']}`
            : `${styles[label.className]} ${styles['alarm__inactive']}`;
          return (
            <div key={label.key} className={`${styles['mnemo__alarm']} ${alarmClass}`}>
              <div className={styles['mnemo__alarm-text']}>{label.name}</div>
            </div>
          );
        })}

        {infoLabels.map((label) => {
          const infoState = data.info[`${label.key}`];
          const infoClass = infoState
            ? `${styles[label.className]} ${styles['info__active']}`
            : `${styles[label.className]} ${styles['info__inactive']}`;
          return (
            <div key={label.name} className={`${styles['mnemo__alarm']} ${infoClass}`}>
              <div className={styles['mnemo__alarm-text']}>{label.name}</div>
            </div>
          );
        })}
        {staticLabels.map((label) => {
          return (
            <div key={label.name} className={`${styles['mnemo__descr']} ${styles[label.className]}`}>
              {label.name}
            </div>
          );
        })}

        <div className={`${styles['mnemo__level']}`}>
          <LevelIndicator
            value={data.parameters['Уровень в барабане котла']}
            range={{ min: -100, max: 100 }}
            threshold={25}
          />
        </div>
      </div>
      <ModalBoiler open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};