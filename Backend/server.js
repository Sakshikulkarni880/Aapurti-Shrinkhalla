// const express = require('express');
// const mongoose = require('mongoose');
// const postsRouter = require('./routes/posts');
// const usersRouter = require('./routes/users');
// const farmersRouter = require('./routes/farmers');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000; // Change this to your preferred port number
// const mongoURI = "mongodb+srv://sakshikulkarni880:2pbEX5FWclaT56Fi@cluster0.c3zdc0n.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB connection string

// // Add routes
// app.use('/api/posts', postsRouter);
// app.use('/api/users', usersRouter);
// app.use('/api/farmers', farmersRouter);

// // Parse JSON bodies
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Start the server after successful connection
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch((err) => console.log('MongoDB connection error:', err));


const express = require('express');
const mongoose = require('mongoose');
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
const farmersRouter = require('./routes/farmers');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Change this to your preferred port number
const mongoURI = "mongodb+srv://sakshikulkarni880:2pbEX5FWclaT56Fi@cluster0.c3zdc0n.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB connection string

// Parse JSON bodies
app.use(express.json()); // Replace bodyParser.json() with express.json()

// Add routes
app.use('/api/posts', postsRouter);
app.use('/api/users', usersRouter);
app.use('/api/farmers', farmersRouter);

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log('MongoDB connection error:', err));
