import React from "react";
import {useParams} from "react-router-dom";
import {useFetchData} from "../../../hooks/useFetchData.ts";
import {BoilerData} from "../../../types/boilerData.ts";
import Loader from "../../../ui/Loader/Loader.tsx";
import ErrorMessage from "../../../ui/ErrorMessage/ErrorMessage.tsx";
import Header from "../../../components/Header/Header.tsx";
import Button from '../../../ui/CustomButton/CustomButton'
import styles from './MnemoBoiler.module.scss'

export const MnemoBoiler: React.FC = () => {
  const {id} = useParams();
  const {loading, data, error} = useFetchData<BoilerData>(`kotel${id}-data`);

  if (loading) return <Loader/>;
  if (error || !data) return <ErrorMessage/>;

  return (
    <>
      <Header title={`Котел №${id}`}/>
      <div className={`${styles['mnemo']}`}>
        <Button>Документация</Button>
        <img src="/img/kotelnaya/kotel.png" alt="Котел" className={styles['mnemo__img']}/>
      </div>
    </>
  );
};
