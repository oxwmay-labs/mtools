import { AnyObject } from '#types/common';

export default <T extends AnyObject>(object: T): [keyof T, T[keyof T]][] =>
  Object.entries(object) as [keyof T, T[keyof T]][];