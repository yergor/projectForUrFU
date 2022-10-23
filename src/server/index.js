require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index')
const cors = require('cors');
const fileUpload = require('express-fileupload');
const errorHandler = require('./middleware/errorHandlerMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5555;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);



app.get('/', (req, res) => {
  res.status(200).json({
    message: 'development of gameshop has started',
  })
})
// app.use('/api', router);
// //обработка ошибок через middleware

const start = async() => {
  try {
    await sequelize.authenticate().then(()=>(console.log('good')));
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started, port: ${PORT}`))
  } catch(e) {
    console.log(e);
  }
};

start();
