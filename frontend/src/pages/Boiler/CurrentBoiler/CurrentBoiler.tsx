import React from "react";
import { useParams } from 'react-router-dom';
import {BoilerData} from "../../../types/boilerData.ts";
import {useFetchData} from "../../../hooks/useFetchData.ts";
import ErrorMessage from "../../../ui/ErrorMessage/ErrorMessage.tsx";
import Loader from "../../../ui/Loader/Loader.tsx";
import CurrentTable from "../../../components/CurrentTable/CurrentTable.tsx";
import Header from "../../../components/Header/Header.tsx";

const CurrentBoiler: React.FC = () => {
  const { id } = useParams();
  const {loading, data, error} = useFetchData<BoilerData>(`kotel${id}-data`);

  if (loading) return <Loader />;
  if (error || !data) return <ErrorMessage />;

  return (
    <>
      <Header title={`Котел №${id}`} />
      <CurrentTable sensorData={data.parameters} title="Текущие параметры" />
    </>
  )
}

export default CurrentBoiler;