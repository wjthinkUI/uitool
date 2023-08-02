const fs = require('node:fs/promises');
const { v4: uuidv4 } = require('uuid');

function getCurrentDate() {
  function pad(n) {
    return n < 10 ? '0' + n : n;
  }
  let date = new Date();

  let yyyy = date.getFullYear();
  let mm = pad(date.getMonth() + 1); // Months are zero-based
  let dd = pad(date.getDate());
  let hh = pad(date.getHours());
  let mi = pad(date.getMinutes());
  let ss = pad(date.getSeconds());

  let formattedDate = `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;

  return formattedDate;
}

async function readData() {
  const data = await fs.readFile('DB.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('DB.json', JSON.stringify(data));
}

async function getAllPagesInfo() {
  const data = await readData();
  const pagesInfo = data.pages.map((page) => page.pageInfo);
  // const navigations = data.navigations.map((navigation) => navigation);
  return { pagesInfo };
}

async function getAllNavInfo() {
  const data = await readData();
  const navigations = data.navigations.map((navigation) => navigation);
  return { navigations };
}

async function updatePageInfo(id, title, url) {
  const data = await readData();
  const index = data.pages.findIndex((page) => page.pageInfo.id === id);
  const selectedData = data.pages[index];
  console.log('update = ', index, id, title, url);
  data.pages[index] = {
    ...selectedData,
    pageInfo: {
      ...selectedData.pageInfo,
      title: title,
      path: url,
      date: getCurrentDate(),
    },
  };
  await writeData(data);
  return getAllPagesInfo();
}

async function duplicatePage(id, title, url) {
  //아이디와 같은 페이지를 title과 url만 변경해서 복제
  const data = await readData();
  const index = data.pages.findIndex((page) => page.pageInfo.id === id);
  let selectedData = data.pages[index];
  selectedData = {
    ...selectedData,
    pageInfo: {
      ...selectedData.pageInfo,
      id: uuidv4(),
      title: title,
      path: url,
      date: getCurrentDate(),
    },
  };
  data.pages.push(selectedData);
  await writeData(data);
  return getAllPagesInfo();
}

async function createPage(title, url, category) {
  //수정중
  const data = await readData();
  const newPage = {
    pageInfo: {
      id: uuidv4(),
      title: title,
      path: url,
      category: category,
      date: getCurrentDate(),
    },
    page: [{}],
  };
  data.pages.push(newPage);
  await writeData(data);
  return true;
}

async function deleteNavigations(id, idx = undefined) {
  const data = await readData();
  console.log('idx ===', idx);
  if (idx === undefined) {
    const filteredData = data.navigations.filter((el) => el.category.id !== id);
    data.navigations = [...filteredData];
    await writeData(data);
  } else {
    const index = data.navigations.findIndex((el) => el.category.id === id);
    let selectedData = data.navigations[index];
    const filterdChildrenData = selectedData.category.children.filter(
      (el, index) => index !== idx
    );
    data.navigations[index].category.children = [...filterdChildrenData];
    await writeData(data);
  }

  return getAllNavInfo();
}

async function updateNavigation(id, title, url, idx = undefined) {
  const data = await readData();
  console.log('id title url', id, title, url);
  console.log(data);
  const index = data.navigations.findIndex((el) => el.category.id === id);
  if (idx === undefined) {
    data.navigations[index].category = {
      ...data.navigations[index].category,
      name: title,
      path: url,
    };
    await writeData(data);
  } else {
    const childrenIndex = data.navigations[index].category.children.findIndex(
      (el, index) => index === idx
    );
    data.navigations[index].category.children[childrenIndex] = {
      ...data.navigations[index].category.children[childrenIndex],
      name: title,
      path: url,
    };
    await writeData(data);
  }

  return getAllNavInfo();
}
exports.readData = readData;
exports.getAllPagesInfo = getAllPagesInfo;
exports.getAllNavInfo = getAllNavInfo;
exports.updatePageInfo = updatePageInfo;
exports.duplicatePage = duplicatePage;
exports.deleteNavigations = deleteNavigations;
exports.updateNavigation = updateNavigation;
// exports.createPage = createPage;
