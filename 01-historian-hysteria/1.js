/**
 * --- Advent of Code 2024 ---
 *
 * Day 1: Historian Hysteria
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/1
 */

import { sum, zip } from 'lodash-es';


export default function main({ lines }) {
  const tuples = lines.map(line => line.split('   ').map(Number));
  const lefts = tuples.map(tuple => tuple[0]);
  const rights = tuples.map(tuple => tuple[1]);

  lefts.sort((a, b) => a - b);
  rights.sort((a, b) => a - b);

  const diffs = zip(lefts, rights).map(([lft, rt]) => Math.abs(lft - rt));
  return sum(diffs);
}