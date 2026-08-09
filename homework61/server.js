import express from "express";
import { usersRouter } from "./src/routes/users.js";
import { articlesRouter } from "./src/routes/articles.js";
import { logger } from "./src/middlewares/logger.js";
import { profileRouter } from "./src/routes/profile.js";
import { ordersRouter } from "./src/routes/orders.js";
import { productsRouter } from "./src/routes/products.js";
import { categoriesRouter } from "./src/routes/categories.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();
app.use(express.json());
app.use(logger);


const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Get root route");
});

app.use("/users", usersRouter);
app.use("/articles", articlesRouter);
app.use("/profile", profileRouter);
app.use("/orders", ordersRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);



app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});