import { ModalBlockDesignHeader } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignHeader';
import { ModalBlockDesignContainer } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignContainer';
import { ModalBlockDesignSideBar } from '@molecule/Modal/ModalBlockDesign/ModalBlockDesignSideBar';
import { ModalBlockDesignWrapper } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignWrapper';
import { useSelectBlockDesign } from '@hooks/useSelectBlockDesign';

export const ModalBlockDesign = () => {
  const { selectedDesign, selectedType } = useSelectBlockDesign();
  return (
    <ModalBlockDesignContainer>
      <ModalBlockDesignHeader />
      <div className="flex">
        <ModalBlockDesignSideBar />
        <div className="flex justify-center grow">
          <ModalBlockDesignWrapper type={selectedType}>
            {selectedDesign}
          </ModalBlockDesignWrapper>
        </div>
      </div>
    </ModalBlockDesignContainer>
  );
};
