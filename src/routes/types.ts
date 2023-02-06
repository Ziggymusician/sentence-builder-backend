import { Router } from 'express';

import { getTypes, getTypeWords } from '../controllers';

const router = Router();

// Return all types
router.get('/', getTypes);

// Return type words
router.get('/:id/words', getTypeWords);

export default router;