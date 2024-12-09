/**
 * --- Advent of Code 2024 ---
 *
 * Day 9: Disk Fragmenter
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/9
 */

import { isNil } from 'lodash-es';
import { sum } from '../lib/index.js';


export default function main({ input }) {
  const disk = [];
  let isFile = true;
  let id = 0;

  for (const digit of input) {
    if (isFile) {
      disk.push(...Array(Number(digit)).fill(id));
      id += 1;
    } else {
      disk.push(...Array(Number(digit)).fill(null));
    }

    isFile = !isFile;
  }

  let i = 0;
  let j = disk.length - 1;

  while (j > i) {
    if (isNil(disk[j])) {
      j -= 1;
      continue;
    }

    if (!isNil(disk[i])) {
      i += 1;
      continue;
    }

    disk[i] = disk[j];
    disk[j] = null;
    i += 1;
    j -= 1;
  }

  return sum(disk.slice(0, j + 1).map((id, index) => id * index));
}
