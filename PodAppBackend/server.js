import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

// Connect to mongoDB
mongoose.connect('mongodb://localhost/movies');


// Initialize http server
const app = express();

// Logger that outputs all request into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', router);

// Handle / route
// app.get('/', (req, res) =>
//   res.send('Hello World!')
// )

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
