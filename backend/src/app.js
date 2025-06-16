import express from 'express';
import cors from 'cors';
import aiRoutes from './routes/ai.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/ai', aiRoutes); // ✅ Mounts all /ai routes

export default app;
