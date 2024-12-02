/**
 * --- Advent of Code 2024 ---
 *
 * Day 2: Red-Nosed Reports
 * (Part 2)
 *
 * https://adventofcode.com/2024/day/2#part2
 */

import { count } from '../lib/index.js';


const isUnsafeDiff = (diff) => {
  return diff === 0 || Math.abs(diff) > 3;
};

const isSafe = (levels) => {
  const firstDiff = levels[1] - levels[0];
  let lastLevel = levels[1];

  if (isUnsafeDiff(firstDiff)) {
    return false;
  }

  for (const level of levels.slice(2)) {
    const diff = level - lastLevel;

    if (firstDiff * diff < 0) {
      return false;
    }

    if (isUnsafeDiff(diff)) {
      return false;
    }

    lastLevel = level;
  }

  return true;
};

const isSuperSafe = (levels) => {
  if (isSafe(levels)) {
    return true;
  }


  for (let i = 0; i < levels.length; i += 1) {
    const withoutLevel = [...levels.slice(0, i), ...levels.slice(i + 1)];
    if (isSafe(withoutLevel)) {
      return true;
    }
  }

  return false;
};


export default function main({ lines }) {
  const reports = lines.map(line => line.split(' ').map(Number));
  return count(reports, isSuperSafe);
}
