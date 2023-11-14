// 순열과 조합

const permutations = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr2) => {
    const rest = arr2.filter((_, i) => i !== idx); // 제외함 1을 제외하면 [2,3,4]
    const perms = permutations(rest, n - 1); // 1을 제외한 2,3,4를 n-1 즉 2개로 만들어줌 [2,3], [2,4]
    const combine = perms.map((el) => [fixed, ...el]); // 1과 perms를 합쳐주면 순열이 만들어 진다.

    result.push(...combine); // 조합을 결과로 넣어준다.
  });

  return result;
};

const combinations = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1); // 아예 제외시켜 버린다. [2,3,4], [3,4], [4] ...[3, 4] , [4] .... [4]
    const comb = combinations(rest, n - 1); // 제외한 배열을 1개가 될때까지 반복 이러면 [2, 3], [2 , 4], [3, 4]
    const combine = comb.map((el) => [fixed, ...el]); // 조합을 해준다 [1,2,3], [1,2,4], [1,3,4]....

    result.push(...combine); // 조합을 결과로 넣어준다.
  });

  return result;
};

// console.log(permutations([1, 2, 3, 4], 3));
// console.log(combinations([1, 2, 3, 4], 3));
