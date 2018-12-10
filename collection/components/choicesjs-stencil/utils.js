export function filterObject(obj, fn) {
    return Object.keys(obj).reduce((accum, property) => {
        const value = obj[property];
        if (fn(value, property, obj)) {
            accum[property] = value;
        }
        return accum;
    }, {});
}
export function isDefined(value) {
    return typeof value !== 'undefined';
}
export function createSelectOptions(value) {
    const values = [].concat(typeof value === 'string' ? (value ? value.split(',') : []) : value);
    return values.map((value) => h("option", { value: value }, value));
}
