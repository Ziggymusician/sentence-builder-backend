import { Router } from 'express';

import sentencesRoutes from './sentences';
import typesRoutes from './types';

export const routes: Record<string, Router> = {
    sentencesRoutes,
    typesRoutes
};