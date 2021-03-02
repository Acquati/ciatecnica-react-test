/**
 * Filters an array of objects using custom predicates.
 *
 * @param  {Array}  array: the array to filter
 * @param  {Object} filters: an object with the filter criteria
 * @return {Array}
 */
export default function filterArray(array, filters) {
  const filterKeys = Object.keys(filters);
  return array.filter(item => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores non-function predicates
      if (typeof filters[key] !== 'function') return true;
      return filters[key](item[key]);
    });
  });
}

/**
 * The method `filterArray()` has the following signature:
 *
 * `function filterArray<TInput = any>(array: TInput[], filters: IFilters) => TInput[]`
 *
 * Where the function receives an array as the first argument, and a plain object
 * describing the fields to filter as the last argument.
 * The function returns an array of the same type as the input array.
 *
 * The signature of the filters arguments is the following:
 *
 * `interface IFilters {
 *   [key: string]: (value: any) => boolean;
 * }`
 *
 * Where the `filters` argument is an object that contains a `key: string`
 * and its value is a function with the value of the property to evaluate.
 * As the function predicate is evaluated using the `Array.prototype.every()` method,
 * then it must return a boolean value, which will determine if the item
 * must be included or not in the filtered array.
 */