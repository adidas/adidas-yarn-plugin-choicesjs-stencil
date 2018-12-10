import '../../stencil.core';
export declare type FilterObjectFn = (value: any, key: string | number, obj: object) => boolean;
/**
 * Filter out entries from an object.
 *
 * @param obj - object to filter.
 * @param fn - filter function.
 * @returns a new object without the entries satisfying the filter function.
 */
export declare function filterObject(obj: object, fn: FilterObjectFn): object;
/**
 * Check if given parameter is not undefined.
 *
 * @param value - value to check.
 * @returns whether the value is defined.
 */
export declare function isDefined(value: any): boolean;
/**
 * Create the select options.
 *
 * @param value - List of values used as value and displayed text.
 * @returns List of option elements as JSX element.
 */
export declare function createSelectOptions(value: string | Array<string>): Array<JSX.Element>;
