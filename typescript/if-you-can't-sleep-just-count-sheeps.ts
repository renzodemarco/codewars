// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. 

// My Solution:

export function countSheep(n: number): string {
  let res: string = "";
  for (let i = 1; i <= n; i++) {
    res += `${i} sheep...`;
  }
  return res;
}