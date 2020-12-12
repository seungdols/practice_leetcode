/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  const sumAccounts = accounts.map(subArr => subArr.reduce((prev, cur) => prev + cur, 0))
  return sumAccounts.reduce((prev, cur) => Math.max(prev, cur)) 
};