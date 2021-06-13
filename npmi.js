const { exec } = require("child_process");
 
exec("npm i @keyv/mongo @keyv/mysql @keyv/postgres @keyv/redis @keyv/sqlite chalk ejs express express-session express-ws keyv node-fetch", (error, stdout, stderr) => {
   if (error) {
       console.log(`error: ${error.message}`);
       return;
   }
   if (stderr) {
       console.log(`stderr: ${stderr}`);
       return;
   }
   console.log(`stdout: ${stdout}`);
});
