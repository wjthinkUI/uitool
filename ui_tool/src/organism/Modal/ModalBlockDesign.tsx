// import { ModalBlockDesignHeader } from '../../atom/Modal/ModalBlockDesignHeader';
// import { ModalBlockDesignContainer } from '../../atom/Modal/ModalBlockDesignContainer';
// import { ModalBlockDesignSideBar } from '../../atom/Modal/ModalBlockDesignSideBar';
// import { ModalBlockDesignWrapper } from '../../atom/Modal/ModalBlockDesignWrapper';

import { ModalBlockDesignHeader } from '@atom/Modal/ModalBlockDesignHeader';
import { ModalBlockDesignContainer } from '@atom/Modal/ModalBlockDesignContainer';
import { ModalBlockDesignSideBar } from '@atom/Modal/ModalBlockDesignSideBar';
import { ModalBlockDesignWrapper } from '@atom/Modal/ModalBlockDesignWrapper';

export const ModalBlockDesign = () => {
  return (
    <ModalBlockDesignContainer>
      <ModalBlockDesignHeader />
      <div className="flex">
        <ModalBlockDesignSideBar />
        <ModalBlockDesignWrapper />
      </div>
    </ModalBlockDesignContainer>
  );
};
