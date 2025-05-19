import { Hono } from 'hono';
import { users } from '../utils/appwrite.js';
import { z } from 'zod';

const userRoutes = new Hono();

const bodySchema = z.object({
  userId: z.string()
});

userRoutes.post('/check-user', async (c) => {
  const body = await c.req.json();
  const parse = bodySchema.safeParse(body);
  if (!parse.success) return c.json({ error: 'Invalid data' }, 400);

  try {
    const user = await users.get(parse.data.userId);
    return c.json(user);
  } catch (err) {
    return c.json({ error: err.message }, 500);
  }
});

export default userRoutes;
