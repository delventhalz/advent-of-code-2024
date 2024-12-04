/**
 * --- Advent of Code 2024 ---
 *
 * Day 4: Ceres Search
 * (Part 2)
 *
 * https://adventofcode.com/2024/day/4#part2
 */

import { eachMatrix } from '../lib/index.js';


export default function main({ matrix }) {
  let count = 0;

  eachMatrix(matrix, (char, [x, y]) => {
    if (char === 'A') {
      const fromLeft = `${matrix[y - 1]?.[x - 1]}A${matrix[y + 1]?.[x + 1]}`;
      const fromRight = `${matrix[y - 1]?.[x + 1]}A${matrix[y + 1]?.[x - 1]}`;

      if ((fromLeft === 'MAS' || fromLeft === 'SAM') && (fromRight === 'MAS' || fromRight === 'SAM')) {
        count += 1;
      }
    }
  });

  return count;
}
