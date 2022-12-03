//server.js
const app = require('./index.js')


//This is the code that is removed from index.js or app.js
PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Application is running on ${PORT}!! `)})