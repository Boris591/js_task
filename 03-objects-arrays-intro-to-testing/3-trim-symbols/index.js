/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
   const arr = string.split('');
   size++;
   let check = (arr, size) => { 
      let next = null;
      for (let i = 0; i < arr.length; i++) {
         next = i + size;
         if (next > arr.length) {
            break;
         } else {
            if ([...new Set(arr.slice(i, next))].length === 1) {
               return i;
            }
         }
      }

      return -1;
    };

   let res = null;
   while (true) {
      res = check(arr, size);
      if (res === -1) {
         break;
      }
      arr.splice(res, 1);
   }
   
   return arr.join('');
}