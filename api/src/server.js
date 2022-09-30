const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const PORT = 8081;

require('./database');

const app = express();

app.use(express.json());
app.use(cors({origin: `http://localhost:8080`}));
app.use(routes);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});