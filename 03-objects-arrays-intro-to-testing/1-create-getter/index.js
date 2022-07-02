/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} field - the strings field separated by dot
 * @returns {function} - function-getter which allow get value from object by set field
 */
export function createGetter(field) {
   const elements = field.split(".");
   return (obj) => {
      if (!obj.hasOwnProperty(elements[0])) {
         return undefined;
      }

      if (typeof obj[elements[0]] !== 'object') {
         return obj[elements[0]];
      }

      let vl = obj[elements[0]];

      for (let i = 1; i < elements.length; i++) {
         if (typeof vl[elements[i]] !== 'object') {
            return vl[elements[i]];
         }
         if (!vl.hasOwnProperty(elements[i])) {
            return vl;
         }

         vl = vl[elements[i]];
      }
   };
}