import { Router } from 'express';

import { getSentences, saveSentence } from '../controllers';

const router = Router();

// Return all Sentences
router.get('/', getSentences);

// Save a Sentence
router.post('/', saveSentence);

export default router;