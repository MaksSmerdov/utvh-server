import React, { useState } from 'react';
import { useFetchData } from '../../../hooks/useFetchData.ts';
import { HvoSecondData } from '../../../types/hvoData.ts';
import Loader from '../../../ui/Loader/Loader.tsx';
import ErrorMessage from '../../../ui/ErrorMessage/ErrorMessage.tsx';
import Header from '../../../components/Header/Header.tsx';
import styles from './MnemoHvoSecond.module.scss';
import StaticLabels from '../../../components/StaticLabels/StaticLabels.tsx';
import { labels } from './components/Labels/labels.ts';
import Button from '../../../ui/CustomButton/CustomButton.tsx';
import { FaBook, FaEye, FaEyeSlash } from 'react-icons/fa';
import ModalHvoSecond from './components/ModalHvoSecond/ModalHvoSecond.tsx';
import GifDisplayHvoSecond from './components/Display/GifDisplayHvoSecond.tsx';

const MnemoHvoSecond: React.FC = () => {
  const { loading, data, error } = useFetchData<HvoSecondData>(`hvo2-data`);
  const [tooltipsEnabled, setTooltipsEnabled] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  if (loading) return <Loader />;
  if (error || !data) return <ErrorMessage />;

  return (
    <>
      <Header title="ХВО щит №2" />
      <div className={styles['mnemo']}>
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
        <img src="/img/hvo/hvo2.png" alt="ХВО2" className={styles['mnemo__img']} />
        <StaticLabels labels={labels} />
        <GifDisplayHvoSecond data={data} />
      </div>
      <ModalHvoSecond open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default MnemoHvoSecond;
