import nc from 'next-connect';
import { onError } from '../../../utils/error';
import { isAuth } from '../../../utils/auth';
import db from '../../../utils/db';
import Order from '../../../models/Order';

const handler = nc({
  onError,
});
handler.use(isAuth);

// Create order
handler.post(async (req, res) => {
  await db.connect();
  const newOrder = new Order({
    ...req.body,
    user: req.user._id,
  })
  const order = await newOrder.save();
  res.status(201).send(order);
})

export default handler;