/**
 * --- Advent of Code 2024 ---
 *
 * Day 9: Disk Fragmenter
 * (Part 2)
 *
 * https://adventofcode.com/2024/day/9#part2
 */

import { sum } from '../lib/index.js';


export default function main({ input }) {
  const disk = [];
  let isFile = true;
  let nextId = 0;

  for (const digit of input) {
    if (isFile) {
      disk.push([nextId, Number(digit)]);
      nextId += 1;
    } else {
      disk.push([null, Number(digit)]);
    }

    isFile = !isFile;
  }

  for (let index = disk.length - 1; index >= 0; index -= 1) {
    const [id, length] = disk[index];

    if (id === null) {
      continue;
    }

    const spaceIndex = disk.findIndex(([i, l]) => i === null && l >= length);
    if (spaceIndex === -1 || spaceIndex > index) {
      continue;
    }

    const [_, spaceLength] = disk[spaceIndex];

    disk[index] = [null, length];
    disk.splice(spaceIndex, 1, [id, length], [null, spaceLength - length]);
  }

  const products = disk
    .flatMap(([id, length]) => Array(length).fill(id))
    .map((id, index) => id === null ? 0 : id * index);

  return sum(products);
}
