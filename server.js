import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { mongoose } from 'mongoose';

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/auth';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('secret', (req, res) => {
  res.json({ secret: 'This is a super secret message.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
