import { createHash } from 'node:crypto';
import sourceCSV from '../../docs/LumiLocalKeywords.csv?raw';
import { analyzeCSV } from '../lib/keyword-analysis.js';

export const source = sourceCSV;
export const research = analyzeCSV(source);
export const fingerprint = createHash('sha256').update(source).digest('hex');
