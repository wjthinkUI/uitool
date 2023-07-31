const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { readData, getAllPagesInfo, updatePageInfo } = require('./models');

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/adminlist/page', async (req, res, next) => {
  const data = await getAllPagesInfo();
  // console.log(data);
  res.json({ data: data });
});
app.get('/adminlist/menu', async (req, res, next) => {
  const data = await getAllPagesInfo();
  console.log('호출 확인');
  res.json({ data: data });
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
  const { id, title, url } = req.body;
});
app.listen(5174, () => {
  console.log('연결 완료');
});
