import {AnyObject} from '#types/common';

import {curry} from '../base';

type CurriedProp = (
  <T extends AnyObject, Key extends keyof T>(_field: Key, _object: T) =>
    T[Key]
  ) & (
  <Key extends keyof AnyObject>(_field: Key) =>
    <T extends AnyObject>(_object: T) => T[Key]
  );

const prop: CurriedProp = curry((field: string, object: AnyObject) => {
  const keys = field.split('.');

  return keys.reduce((o: any, k: string) => o?.[k], object);
});

export default prop;