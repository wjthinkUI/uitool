export const ListHeader = () => {
  return (
    <div className="w-[1220px] text-center justify-between border-y bg-grayscale-50 px-5 py-4 relative flex flex-row content-center">
      <p className="w-[24px] basis-1/12" />
      <p className="basis-3/12">페이지명</p>
      <p className="basis-3/12">페이지 경로</p>
      <p className="basis-1/12">메뉴</p>
      <p className="basis-3/12">업데이트 일시</p>
      <p className="w-[153px] text-center basis-2/12">관리</p>
    </div>
  );
};
