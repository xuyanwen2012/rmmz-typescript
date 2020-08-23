declare interface Array {
  clone<T>(): T[];
  equals(array: any[]): boolean;
  remove<T>(element: any): T[];
}

declare interface Math {
  randomInt(max: number): number;
}

declare interface Number {
  clamp(min: number, max: number): number;
  mod(n: number): number;
  padZero(length: number): string;
}

declare interface String {
  padZero(length: number): string;

  // TODO:
  format(arg: any): string;
}

export {Array, Math, Number, String};
