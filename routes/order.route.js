import { Router } from "express";
import { celebrate } from "celebrate";
import {
  CreateOrderBodySchema,
  OrderIdSchema,
  UpdateOrderBodySchema,
} from "../schema";
import {
  createOrder,
  getOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} from "../controllers";
import { authenticate } from "../middleware/auth.middleware";

const orderRouter = Router();

orderRouter.post(
  "/",
  authenticate,
  celebrate({ body: CreateOrderBodySchema }),
  createOrder,
);

orderRouter.get(
  "/:orderId",
  authenticate,
  celebrate({ params: OrderIdSchema }),
  getOrder,
);

orderRouter.get("/", authenticate, getOrders);

orderRouter.put(
  "/:orderId",
  authenticate,
  celebrate({ params: OrderIdSchema, body: UpdateOrderBodySchema }),
  updateOrder,
);

orderRouter.delete(
  "/:orderId",
  authenticate,
  celebrate({ params: OrderIdSchema }),
  deleteOrder,
);

export default orderRouter;
