// Take 2 strings s1 and s2 including only letters from a to z.Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// My Solution:

export function longest(s1: string, s2: string): string {
  const res: string[] = []
  s1.concat(s2).split('').forEach(l => {
    if (!res.includes(l)) res.push(l)
  });
  return res.sort().join('')
}