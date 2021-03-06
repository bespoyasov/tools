import isString from '../../types/isString'

/**
 * Returns first character of given string
 * @param {String} str
 * @return {String}
 */
const getFirstChar = str => 
  !!str && isString(str) 
    ? str.charAt(0) 
    : ''

export default getFirstChar