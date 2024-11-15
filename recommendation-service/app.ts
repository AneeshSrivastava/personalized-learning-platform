import express from 'express';
import recommendationRoutes from './routes/recommendationRoutes';

const app = express();
app.use(express.json());

app.use('/api', recommendationRoutes);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Recommendation Service running on port ${PORT}`);
});

export default app;
