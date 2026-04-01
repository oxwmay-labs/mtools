import {AnyObject} from '#types/common';

export default <T extends AnyObject>(object: T): (keyof T)[] => Object.keys(object);