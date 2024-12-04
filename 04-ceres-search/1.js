/**
 * --- Advent of Code 2024 ---
 *
 * Day 4: Ceres Search
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/4
 */

import { count, eachMatrix } from '../lib/index.js';


export default function main({ matrix }) {
  let xmasCount = 0;

  eachMatrix(matrix, (char, [x, y]) => {
    if (char === 'X') {
      const words = [
        matrix[y - 1]?.[x] + matrix[y - 2]?.[x] + matrix[y - 3]?.[x],
        matrix[y - 1]?.[x + 1] + matrix[y - 2]?.[x + 2] + matrix[y - 3]?.[x + 3],
        matrix[y]?.[x + 1] + matrix[y]?.[x + 2] + matrix[y]?.[x + 3],
        matrix[y + 1]?.[x + 1] + matrix[y + 2]?.[x + 2] + matrix[y + 3]?.[x + 3],
        matrix[y + 1]?.[x] + matrix[y + 2]?.[x] + matrix[y + 3]?.[x],
        matrix[y + 1]?.[x - 1] + matrix[y + 2]?.[x - 2] + matrix[y + 3]?.[x - 3],
        matrix[y]?.[x - 1] + matrix[y]?.[x - 2] + matrix[y]?.[x - 3],
        matrix[y - 1]?.[x - 1] + matrix[y - 2]?.[x - 2] + matrix[y - 3]?.[x - 3],
      ];

      xmasCount += count(words, 'MAS');
    }
  });

  return xmasCount;
}
