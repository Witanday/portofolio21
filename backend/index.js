const server= require('./api/middleware')


const PORT= process.env.PORT || 8080


server.listen( PORT, ()=>{
    console.log(`\n //***  -WITANDAY.IO APP -  Listening on http://localhost:${PORT} ***//\n`)
})