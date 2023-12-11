
import express from 'express'
import {getUrlImageDrive} from './getImages.js'

const app = express();

// Define a route that includes a parameter in the URL
// https://drive.google.com/file/d/1TA7hHk_RyP74HB-7harW_nEuYw9cmDlK/view?usp=sharing
await app.get('/drive/:name', async (req, res) =>  {
  // Retrieve the parameter from the URL
  
  const name = req.params.name;
  console.log(name)
  const url = await getUrlImageDrive(name)

  // Send a personalized greeting back to the client
  res.send(`URL: ${url} `);
});

app.get('/prova', (req, res) =>  {
  // Retrieve the parameter from the URL
  res.send(`PROVA `);
});


app.get('/', (req, res) =>  {
  // Retrieve the parameter from the URL
  res.send(`HOME `);
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
