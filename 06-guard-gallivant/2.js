/**
 * --- Advent of Code 2024 ---
 *
 * Day 6: Guard Gallivant
 * (Part 2)
 *
 * https://adventofcode.com/2024/day/6#part2
 */

import { uniq } from 'lodash-es';
import { count, eachMatrix } from '../lib/index.js';

const getPath = (matrix, start) => {
  let dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  let dir = 0;

  const locs = [start.join()];

  while (true) {
    const [x, y] = locs.at(-1).split(',').map(Number);
    const nextX = x + dirs[dir][0];
    const nextY = y + dirs[dir][1];

    const nextLoc = [nextX, nextY].join();
    const next = matrix[nextY]?.[nextX];

    if (!next) {
      return locs;
    }

    if (next === '#') {
      dir = (dir + 1) % dirs.length;
    } else {
      locs.push(nextLoc);
    }
  }
}

const isLoop = (matrix, start, obstruction) => {
  const dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  let dir = 0;

  const locs = [[...start, dir].join()];
  const obs = obstruction.join();

  while (true) {
    const [x, y] = locs.at(-1).split(',').map(Number);
    const nextX = x + dirs[dir][0];
    const nextY = y + dirs[dir][1];

    const nextLoc = [nextX, nextY, dir].join();
    const next = matrix[nextY]?.[nextX];

    if (locs.includes(nextLoc)) {
      return true;
    }

    if (!next) {
      return false;
    }

    if (next === '#' || nextLoc.startsWith(obs)) {
      dir = (dir + 1) % dirs.length;
    } else {
      locs.push(nextLoc);
    }
  }
}

export default function main({ matrix }) {
  let start;

  eachMatrix(matrix, (char, coords) => {
    if (char === '^') {
      start = coords;
    }
  });

  const path = getPath(matrix, start);
  const cands = uniq(path)
    .map(loc => {
      const [x, y] = loc.split(',').map(Number);
      return [x, y]
    })
    .filter(([x, y]) => {
      return matrix[y]?.[x] === '.';
    });

  return count(cands, cand => isLoop(matrix, start, cand));
}
