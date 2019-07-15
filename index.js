function driversWithRevenueOver(array,number){
  const result = array.filter(arif => arif.revenue > number);
  return result;
}
function driverNamesWithRevenueOver(array,number){
  const result = array.filter(arif => arif.revenue > number);
  const result2 =result.map(isim=>isim.name);
  return result2;
}

function exactMatch(array,obj){
  for (const key in obj){
return array.filter(driver => driver[key] === obj[key]);
}}


function exactMatchToList(array, obj){
const list = exactMatch(array, obj)
return list.map(driver => driver.name)
}
