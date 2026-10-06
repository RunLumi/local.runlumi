import { page, csv } from '../../.data-build/research.js';
import { createDataHandler } from '../../server/data-auth.js';

export const onRequest = createDataHandler(page, csv);
