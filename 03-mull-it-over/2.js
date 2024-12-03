/**
 * --- Advent of Code 2024 ---
 *
 * Day 3: Mull It Over
 * (Part 2)
 *
 * https://adventofcode.com/2024/day/3#part2
 */

export default function main({ input }) {
  const commands = [...input.matchAll(/(?:mul\((\d{1,3}),(\d{1,3})\))|(?:do\(\))|(?:don't\(\))/g)];

  let isEnabled = true;
  let sum = 0;

  for (const [command, x, y] of commands) {
    if (command.startsWith('mul') && isEnabled) {
      sum += x * y;
    } else if (command === 'do()') {
      isEnabled = true;
    } else if (command === "don't()") {
      isEnabled = false;
    }
  }

  return sum;
}
