const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connected successfully");
});

//sales routes
const salesRouter = require("./routes/sales.js");
const salesmenRouter = require("./routes/salesmen.js");
const salesManagementRouter = require("./routes/salesManagement.js");

app.use("/sales", salesRouter);
app.use("/salesmen", salesmenRouter);
app.use("/salesManagement", salesManagementRouter);

//inventory routes
const invRouter = require( "./routes/product.js")
const orderRouter = require("./routes/newOrder.js")
const reorderRouter = require("./routes/reorderFunction.js")

app.use("/inventory/product",invRouter)
app.use("/inventory/orders",orderRouter)
app.use("/inventory/reorder",reorderRouter)

//staff routes
const salaryRouter = require("./routes/salary.js")

app.use("/staff/salary",salaryRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});