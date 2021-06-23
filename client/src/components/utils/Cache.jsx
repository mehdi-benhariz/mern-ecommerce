import lru from "lru-cache";
const cache = lru({
  maxAge: 30000,
});

export const set = (key, value) => cache.set(key, value);
