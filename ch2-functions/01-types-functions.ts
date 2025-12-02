// Making typed function parameters and return typed makes it easier to work with functions in TypeScript as errors introduced by dynamic typing are caught early:
export function calculateTotal(
  price: number,
  quantity: number,
  discount: number
): number {
  return price * quantity * (1 - discount);
}
