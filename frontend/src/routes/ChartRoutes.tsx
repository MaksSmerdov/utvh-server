import { Route } from 'react-router-dom';
import LevelBoiler from '../pages/Boiler/ChartBoiler/LevelBoiler.tsx';
import GazBoiler from '../pages/Boiler/ChartBoiler/GazBoiler.tsx';
import VacuumBoiler from '../pages/Boiler/ChartBoiler/VacuumBoiler.tsx';
import AirBoiler from '../pages/Boiler/ChartBoiler/AirBoiler.tsx';
import SteamBoiler from '../pages/Boiler/ChartBoiler/SteamBoiler.tsx';

const ChartRoutes = () => {
  return (
    <>
      <Route path="/boiler/:id/levelChart" element={<LevelBoiler />} />
      <Route path="/boiler/:id/gazChart" element={<GazBoiler />} />
      <Route path="/boiler/:id/vacuumChart" element={<VacuumBoiler />} />
      <Route path="/boiler/:id/airChart" element={<AirBoiler />} />
      <Route path="/boiler/:id/steamChart" element={<SteamBoiler />} />
    </>
  );
};
export default ChartRoutes;
