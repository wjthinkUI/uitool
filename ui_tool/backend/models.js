const fs = require('node:fs/promises');
const { v4: uuidv4 } = require('uuid');
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
  return pagesInfo;
}

async function updatePageInfo(id, title, url) {
  const data = await readData();
  const index = data.pages.findIndex((page) => page.pageInfo.key === id);
  const selectedData = data.pages[index];
  data.pages[index] = {
    ...selectedData,
    pageInfo: { ...selectedData.pageInfo, title: title, path: url },
  };
  await writeData(data);
  return getAllPagesInfo();
}

async function duplicatePage(id, title, url) {
  //아이디와 같은 페이지를 title과 url만 변경해서 복제
  const data = await readData();
  const index = data.pages.findIndex((page) => page.pageInfo.key === id);
  const selectedData = data.pages[index];
  selectedData = {
    ...selectedData,
    pageInfo: {
      ...selectedData.pageInfo,
      title: title,
      path: url,
      key: uuidv4(),
    },
  };
  data.pages.push(selectedData);
  await writeData(data);
  return getAllPagesInfo();
}
exports.readData = readData;
exports.getAllPagesInfo = getAllPagesInfo;
exports.updatePageInfo = updatePageInfo;
