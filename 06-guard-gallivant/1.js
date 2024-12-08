/**
 * --- Advent of Code 2024 ---
 *
 * Day 6: Guard Gallivant
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/6
 */

import { uniq } from 'lodash-es';
import { eachMatrix } from '../lib/index.js';


export default function main({ matrix }) {
  let dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  let dir = 0;
  let locs = [];

  eachMatrix(matrix, (char, coords) => {
    if (char === '^') {
      locs.push(coords);
    }
  });

  while (true) {
    const nextX = locs.at(-1)[0] + dirs[dir][0];
    const nextY = locs.at(-1)[1] + dirs[dir][1];

    const next = matrix[nextY]?.[nextX];

    if (!next) {
      return uniq(locs.map(loc => loc.join())).length;
    }

    if (next === '#') {
      dir = (dir + 1) % dirs.length;
    } else {
      locs.push([nextX, nextY]);
    }
  }
}
