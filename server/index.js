const express = require('express');

const app = express();

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });

app.get('/', (req, res)=> {
    res.send({ hi: 'there'})
});

app.listen(5000);