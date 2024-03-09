const server = require("./src/app")
const { dataBase } = require("./src/DB_connection");
const PORT = 3001;


//! LISTEN
// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });

dataBase
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => console.log(`Server on Port: ${PORT}`));
  })
  .catch((err) => console.log(err));