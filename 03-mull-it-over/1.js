/**
 * --- Advent of Code 2024 ---
 *
 * Day 3: Mull It Over
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/3
 */

import { sum } from '../lib/index.js';


export default function main({ input }) {
  const matches = [...input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)];
  return sum(matches.map(([_, x, y]) => x * y));
}
