/**
 * --- Advent of Code 2024 ---
 *
 * Day 11: Plutonian Pebbles
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/11
 */

const changeStone = (stone) => {
  if (stone === 0) {
    return [1];
  }

  const digits = String(stone);
  const length = digits.length;

  if (length % 2 === 0) {
    return [
      Number(digits.slice(0, length / 2)),
      Number(digits.slice(length / 2)),
    ];
  }

  return [stone * 2024];
};


export default function main({ parsed }) {
  let stones = parsed;

  for (let i = 0; i < 25; i += 1) {
    stones = stones.flatMap(changeStone);
  }

  return stones.length;
}
