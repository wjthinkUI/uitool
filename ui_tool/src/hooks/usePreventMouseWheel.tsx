import { useEffect } from 'react';

/**
 *
 * @description 모달생성시 마우스 휠 사용을 일시적으로 비활성화
 */
export const usePreventMouseWheel = () => {
  function preventScroll(event: WheelEvent) {
    event.preventDefault();
  }
  return useEffect(() => {
    document.body.addEventListener('wheel', preventScroll, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener('wheel', preventScroll);
    };
  }, []);
};
