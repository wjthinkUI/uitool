const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const {
  duplicatePage,
  getAllPagesInfo,
  updatePageInfo,
  getAllNavInfo,
} = require('./models');
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.get('/adminlist', async (req, res, next) => {
  const pagesInfoData = await getAllPagesInfo();
  const navData = await getAllNavInfo();
  res.json({ ...pagesInfoData, ...navData });
});
// app.get('/adminlist/page', async (req, res, next) => {
//   const data = await getAllPagesInfo();
//   console.log(data);
//   res.json({ data: data });
// });
// app.get('/adminlist/menu', async (req, res, next) => {
//   const data = await getAllPagesInfo();
//   console.log('호출 확인');
//   res.json({ data: data });
// });
app.delete('/adminlist/menu', async (req, res, next) => {
  const { id, idx } = req.body;
  try {
    const filteredData = await deleteNavigations(id, idx);
    res.status(200).json({ message: 'delete success', data: filteredData });
  } catch (err) {
    console.log(err);
  }
});
app.put('/adminlist/page', async (req, res, next) => {
  const { title, url, id } = req.body;
  console.log(title, url, id);
  try {
    const updatedData = await updatePageInfo(id, title, url);
    res.status(200).json({ message: 'updated data', data: updatedData });
  } catch (err) {
    console.log(err);
  }
});
app.post('/adminlist/page', async (req, res, next) => {
  const { id, duplTitle, duplUrl } = req.body;
  console.log('duplication = ', id, duplTitle, duplUrl);
  try {
    const updatedData = await duplicatePage(id, duplTitle, duplUrl);
    res.status(200).json({ message: 'duplication success', data: updatedData });
  } catch (err) {
    console.log(err);
  }
});
app.listen(5174, () => {
  console.log('연결 완료');
});