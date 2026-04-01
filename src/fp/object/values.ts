import {AnyObject} from '#types/common';

export default <T extends AnyObject>(object: T): T[keyof T][] => Object.values(object);