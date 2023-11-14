/**
 *
 * 재귀 함수는 자기 자신을 호출하는 함수이다.
 * 스택과 유사하게 동작한다.
 * 잘못 작성하면 무한 루프에 빠지게 된다.
 * 자바스크립트에서는 1만개 정도 돌아감
 * 꼬리재귀가 동작하지 않음
 * 성능이 좋지 않다.
 * 재귀함수를 작성할 때에는 반드시 탈출할 수 있는 조건을 작성해야 한다.
 *
 */

// 순열
function permutations(arr, n) {
  // 1개만 뽑는다면 그대로 순열을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.filter((_, index) => index !== idx);

    // 선택된 요소를 제외하고 재귀 호출한다.
    const perms = permutations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐준다.
    const combine = perms.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.

    result.push(...combine);
  });

  // 결과 반환
  return result;
}

// 조합
function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출한다.
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반환
  return result;
}

console.log(permutations([1, 2, 3, 4], 3));
// console.log(combinations([1, 2, 3, 4], 3));
