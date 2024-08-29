// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// My Solution:

export function mango(quantity: number, price: number): number{
  return quantity * price - Math.floor(quantity / 3) * price
}