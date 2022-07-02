/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
   const new_arr = [...arr];
   let sr = null;
   switch (param) {
      case 'asc':
         sr = 1;
         break;
      case 'desc':
         sr = -1;
         break;
   }

   new_arr.sort((a, b) => sr * a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' }));

   return new_arr;
}
