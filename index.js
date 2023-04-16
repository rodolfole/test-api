import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

console.log(process.env.PORT);

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
    app.listen(process.env.PORT, () => console.log('Server started on port: '+process.env.PORT));
  } catch (error) {
    console.log(error);
  }
};

startServer();