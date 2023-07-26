import { ModalBlockDesignHeader } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignHeader';
import { ModalBlockDesignContainer } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignContainer';
import { ModalBlockDesignSideBar } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignSideBar';
import { ModalBlockDesignWrapper } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignWrapper';
import { useSelectBlockDesign } from '@hooks/useSelectBlockDesign';

export const ModalBlockDesign = () => {
  const { selectedDesign, type } = useSelectBlockDesign();
  return (
    <ModalBlockDesignContainer>
      <ModalBlockDesignHeader />
      <div className="flex">
        <ModalBlockDesignSideBar />
        <div className="flex justify-center grow">
          <ModalBlockDesignWrapper type={type}>
            {selectedDesign}
          </ModalBlockDesignWrapper>
        </div>
      </div>
    </ModalBlockDesignContainer>
  );
};
