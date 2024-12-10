/**
 * --- Advent of Code 2024 ---
 *
 * Day 10: Hoof It
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/10
 */

import { uniq } from 'lodash-es';
import { eachAdjacent, eachMatrix, sum } from '../lib/index.js';

const scoreTrailhead = (matrix, trailhead) => {
  const peaks = [];
  const stack = [trailhead];

  while (stack.length > 0) {
    const [x, y] = stack.pop();
    const currentHeight = matrix[y][x];

    eachAdjacent(matrix, [x, y], (height, coords) => {
      if (height - currentHeight === 1) {
        if (height === 9) {
          peaks.push(coords);
        } else {
          stack.push(coords);
        }
      }
    });
  }

  return uniq(peaks.map(String)).length;
};

export default function main({ matrix }) {
  eachMatrix(matrix, (char, [x, y]) => {
    matrix[y][x] = Number(char)
  });

  const trailheads = [];
  eachMatrix(matrix, (height, coords) => {
    if (height === 0) {
      trailheads.push(coords);
    }
  });

  return sum(trailheads.map(trailhead => scoreTrailhead(matrix, trailhead)));
}
