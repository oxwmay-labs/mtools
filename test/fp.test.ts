import {describe, it, expect} from 'vitest';

import {fp} from '../src';

describe('fp', () => {
  const user = {
    name: {
      first: 'Bob',
      last: 'What'
    },
    age: 30
  };

  describe('fp', () => {
    it('should get by field', () => {
      expect(fp.prop('age', user)).toBe(user.age);
      expect(fp.prop('age')(user)).toBe(user.age);
      expect(fp.prop('name.first')(user)).toBe(user.name.first);
      expect(fp.prop('name.middle')(user)).toBe(undefined);
    });

    it('should get by field in map', () => {
      const users = [user];

      expect(users.map(fp.prop('age'))).toStrictEqual([user.age]);
      expect(users.map(fp.prop('name.first'))).toStrictEqual([user.name.first]);
      expect(users.map(fp.prop('name.last'))).toStrictEqual([user.name.last]);
      expect(users.map(fp.prop('name.middle'))).toStrictEqual([undefined]);
    });
  });
});