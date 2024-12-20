/**
 * --- Advent of Code 2024 ---
 *
 * Day 1: Historian Hysteria
 * (Part 2)
 *
 * https://adventofcode.com/2024/day/1#part2
 */

import { sum, uniq } from 'lodash-es';
import { count } from '../lib/index.js';


export default function main({ parsed }) {
  const lefts = parsed.map(tuple => tuple[0]);
  const rights = parsed.map(tuple => tuple[1]);

  const scores = uniq(lefts).map(left => count(rights, left) * left);
  return sum(scores);
}

