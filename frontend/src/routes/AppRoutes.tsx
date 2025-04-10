import {Navigate, Route, Routes} from 'react-router-dom';
import CurrentBoiler from "../pages/Boiler/CurrentBoiler/CurrentBoiler.tsx";
import {MnemoBoiler} from "../pages/Boiler/MnemoBoiler/MnemoBoiler.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/boiler/:id/current" element={<CurrentBoiler/>}/>
      <Route path="/boiler/:id/mnemo" element={<MnemoBoiler/>}/>
      <Route path="*" element={<Navigate to="/boiler/1/current" replace/>}/>
    </Routes>
  );
};

export default AppRoutes;
