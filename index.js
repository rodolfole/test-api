import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const port = process.env.PORT || 6000;
console.log(port);

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from PLESK',
  });
});

const startServer = async () => {
  try {
    app.listen(port, () => console.log('Server started on port: '+port));
  } catch (error) {
    console.log(error);
  }
};

startServer();