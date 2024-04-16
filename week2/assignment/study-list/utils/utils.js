/**
 * @description 1000단위 콤마 추가 function
 * @param value
 * @returns {string}
 */
export function numberWithCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
