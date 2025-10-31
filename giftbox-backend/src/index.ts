import express from 'express';
import cors from 'cors';
import { ENV } from './env';
import health from './routes/health';
import products from './routes/products';
import orders from './routes/orders';

const app = express();
app.use(cors({ origin: ENV.CORS_ORIGIN, credentials: true }));
app.use(express.json());

app.use('/health', health);
app.use('/api/products', products);
app.use('/api/orders', orders);

app.listen(ENV.PORT, () => {
  console.log(`Backend listening on http://localhost:${ENV.PORT}`);
});
