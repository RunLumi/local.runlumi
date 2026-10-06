// Adapted from Reef's switchable live collection. MIT, licenses/reef-MIT.txt.
import { defineLiveCollection } from 'astro:content';
import { loader } from '@blog/live';
export const collections = loader ? { _emdash:defineLiveCollection({ loader:loader() }) } : {};
