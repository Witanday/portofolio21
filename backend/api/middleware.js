const express = require('express');
const cors = require('cors');
const helmet= require('helment');
const morgan = require('morgan');


const server= express();

server.use(
    express.json(),
    cors(),
    helmet(),
    morgan('dev')
);

module.exports= server;