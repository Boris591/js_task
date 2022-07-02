/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
   if (typeof obj !== "object" || Object.keys(obj).length == 0) {
      return obj;
   }

   const obj_new = {};
   Object.entries(obj).forEach(([key, value]) => {
      obj_new[value] = key;
   });

   return obj_new;
}