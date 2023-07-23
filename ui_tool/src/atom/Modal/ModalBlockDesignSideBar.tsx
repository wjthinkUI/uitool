const DUMMY_sideBarList = [
  {
    id: 123,
    listItem: '이미지',
  },
  {
    id: 456,
    listItem: '구분선',
  },
  {
    id: 789,
    listItem: '목록',
  },
  {
    id: 1234,
    listItem: '텍스트',
  },
  {
    id: 123456,
    listItem: '표',
  },
  {
    id: 123123,
    listItem: '레이아웃',
  },
];

export const ModalBlockDesignSideBar = () => {
  return (
    <div className="w-[150px] shrink-0 h-fit">
      <ul className="pt-1 m-5 mt-0 ml-9 w-fit">
        {DUMMY_sideBarList.map((item) => (
          <li key={item.id} className="p-3 pt-0 pb-6 text-body3m">
            <a href="#" className="block focus:text-primary-950">
              {item.listItem}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
