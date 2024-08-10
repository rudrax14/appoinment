const connectDB = require("./config/dbConnection");
const app = require("./app")

connectDB()
    .then(() => {
        app.listen(5000, () => {
            console.log(`Server is running at port : 5000`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });



