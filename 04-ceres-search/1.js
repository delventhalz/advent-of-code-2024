/**
 * --- Advent of Code 2024 ---
 *
 * Day 4: Ceres Search
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/4
 */

import {
  count,
  eachMatrix,
  eachUp,
  eachUpRight,
  eachRight,
  eachDownRight,
  eachDown,
  eachDownLeft,
  eachLeft,
  eachUpLeft,
  arrayFromMatrixIterator,
} from '../lib/index.js';


export default function main({ matrix }) {
  let xmasCount = 0;

  eachMatrix(matrix, (char, coords) => {
    if (char === 'X') {
      const words = [
        eachUp,
        eachUpRight,
        eachRight,
        eachDownRight,
        eachDown,
        eachDownLeft,
        eachLeft,
        eachUpLeft,
      ].map((fn) => {
        return arrayFromMatrixIterator(matrix, fn, coords).join('').slice(0, 4);
      });

      xmasCount += count(words, 'XMAS');
    }
  });

  return xmasCount;
}
