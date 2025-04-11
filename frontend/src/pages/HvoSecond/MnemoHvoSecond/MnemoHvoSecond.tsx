import React from 'react';
import { useFetchData } from '../../../hooks/useFetchData.ts';
import { HvoSecondData } from '../../../types/hvoData.ts';
import Loader from '../../../ui/Loader/Loader.tsx';
import ErrorMessage from '../../../ui/ErrorMessage/ErrorMessage.tsx';
import Header from '../../../components/Header/Header.tsx';
import styles from './MnemoHvoSecond.module.scss';


const MnemoHvoSecond: React.FC = () => {
  const { loading, data, error } = useFetchData<HvoSecondData>(`hvo2-data`);

  if (loading) return <Loader />;
  if (error || !data) return <ErrorMessage />;

  return (
    <>
      <Header title="ХВО щит №2" />
      <div className={styles['mnemo']}>
        <img src="/img/hvo/hvo2.png" alt="ХВО2" className={styles['mnemo__img']} />
      </div>
    </>
  );
};

export default MnemoHvoSecond;
