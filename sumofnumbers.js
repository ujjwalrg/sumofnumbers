const nums = [1, 2, 3, 4, 5];
function sumFor(list) {
  let sumF = 0;
  for (const num of list) {
    sumF += num;
  }
  return sumF;
}
function sumWhile(list) {
  function mapArr(items) {
    return items;
  }
  const value = list.map(mapArr);
  let sumW = 0;
  while (!value.length < 1) {
    sumW += value.pop();
  }
  return sumW;
}
function sumRecursion(list) {
  let sumR = 0;
  if (list.length === 1) {
    return list.pop();
  }
  sumR = list.pop() + sumRecursion(list);
  return sumR;
}
function sumTheSimpleWay(list) {
  return _.reduce(list, (item, sum) => item + sum, 0);
}

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumTheSimpleWay(nums));
console.log(sumRecursion(nums));
