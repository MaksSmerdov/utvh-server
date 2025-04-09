import { Navigate, Route, Routes } from 'react-router-dom';
import CurrentBoiler from "../pages/Boiler/CurrentBoiler/CurrentBoiler.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/boiler/:id/current" element={<CurrentBoiler />} />

      <Route path="*" element={<Navigate to="/boiler/1/current" replace />} />
    </Routes>
  );
};

export default AppRoutes;
