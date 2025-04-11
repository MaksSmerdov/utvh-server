import React from 'react';
import CustomModal from '../../../../../ui/CustomModal/CustomModal';
import CustomAccordion from '../../../../../ui/CustomAccordion/CustomAccordion.tsx';
import { accordionData, accordionTitles } from './accordionData.ts';

interface ModalBoilerProps {
  open: boolean;
  onClose: () => void;
}

const ModalBoiler: React.FC<ModalBoilerProps> = ({ open, onClose }) => {
  return (
    <CustomModal open={open} onClose={onClose} title="Документация">
      <CustomAccordion accordionData={accordionData} titles={accordionTitles} />
    </CustomModal>
  );
};

export default ModalBoiler;
