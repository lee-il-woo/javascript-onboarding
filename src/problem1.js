//페이지 숫자의 합
function sumPageNumber(page_number) {
  let sum_score = 0;
  page_number.map((element) => {
    sum_score = sum_score + element;
  });
  return sum_score;
}

//페이지 숫자의 곱
function mulPageNumber(page_number) {
  let mul_score = 1;
  page_number.map((element) => {
    mul_score = mul_score * element;
  });
  return mul_score;
}

//player의 페이지를 받아 가장 큰 점수를 계산하는 함수
function maxScore(player) {
  let first_page = Array.from(String(player[0]));
  first_page = first_page.map((element) => Number(element));
  let second_page = Array.from(String(player[1]));
  second_page = second_page.map((element) => Number(element));

  let first_page_sum = sumPageNumber(first_page);
  let second_page_sum = sumPageNumber(second_page);
  let first_page_mul = mulPageNumber(first_page);
  let second_page_mul = mulPageNumber(second_page);

  return Math.max(
    first_page_sum,
    first_page_mul,
    second_page_sum,
    second_page_mul
  );
}
//예외사항
function exception(pobi, crong) {
  if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) {
    return true;
  }
  if (pobi[1] <= 2 && pobi[0] >= 399 && crong[1] <= 2 && crong[0] >= 399) {
    return true;
  }
  if (pobi.length != 2 && crong.length != 2) {
    return true;
  }
  return false;
}

function problem1(pobi, crong) {
  if (exception(pobi, crong)) {
    return -1;
  }

  let pobi_score = maxScore(pobi);
  let crong_score = maxScore(crong);
  if (pobi_score > crong_score) {
    return 1;
  }
  if (pobi_score == crong_score) {
    return 0;
  }
  if (pobi_score < crong_score) {
    return 2;
  }
}
module.exports = problem1;
