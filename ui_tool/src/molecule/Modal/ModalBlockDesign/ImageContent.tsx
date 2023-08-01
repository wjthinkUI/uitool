import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import type { BlockDesignContent } from 'types';
// const modules = import.meta.glob(
//   '../../../assets/emptyImage/*.svg',
//   { eager: true } // 모듈을 직접가저오는 옵션
// );

export const ImageContent = ({ list }: any) => {
  console.log(list);
  // const [svgData, setSvgData] = useState<BlockDesignContent[]>([]);
  // useEffect(() => {
  //   const modulesArr = Object.values(modules);
  //   const data = modulesArr.map((el: any, idx: number) => ({
  //     id: idx,
  //     svgFile: el.ReactComponent(),
  //   }));
  //   if (data) {
  //     setSvgData(data);
  //   }
  //   console.log(imageContentList[0].svgEl.ReactComponent());
  // }, []);

  const tempHandler = (id: number) => {
    console.log('clicked id = ', id);
  };

  return (
    <>
      {list.map((el: any) => (
        <span key={el.id} onClick={() => tempHandler(el.id)}>
          <ModalBlockDesignMediumBox key={el.id}>
            {el.svgEl.ReactComponent()}
          </ModalBlockDesignMediumBox>
        </span>
      ))}
    </>
  );
};

const imageContentList: any[] = [
  {
    hint: '1개',
    imageLayout: 1,
    svgEl: await import('@assets/emptyImage/1-emptyImage-1.svg'),
  },
  {
    hint: '2개',
    imageLayout: 2,
    svgEl: await import('@assets/emptyImage/2-emptyImage-2.svg'),
  },
  {
    hint: '3개',
    imageLayout: 3,
    svgEl: await import('@assets/emptyImage/3-emptyImage-3.svg'),
  },
  {
    hint: '4개',
    imageLayout: 4,
    svgEl: await import('@assets/emptyImage/4-emptyImage-4.svg'),
  },
  {
    hint: '4개',
    imageLayout: 5,
    svgEl: await import('@assets/emptyImage/5-emptyImage-4.svg'),
  },
  {
    hint: '5개',
    imageLayout: 6,
    svgEl: await import('@assets/emptyImage/6-emptyImage-5.svg'),
  },
];
