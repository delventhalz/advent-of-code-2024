/**
 * --- Advent of Code 2024 ---
 *
 * Day 5: Print Queue
 * (Part 2)
 *
 * https://adventofcode.com/2024/day/5#part2
 */

import { groupBy, mapValues } from 'lodash-es';
import { sum } from '../lib/index.js';

const isOrdered = (rulebook, update) => {
  for (let i = 1; i < update.length; i += 1) {
    const page = update[i];
    const mustFollows = rulebook[page] ?? [];

    for (const mustFollow of mustFollows) {
      const followIndex = update.indexOf(mustFollow);
      if (followIndex !== -1 && followIndex < i) {
        return false;
      }
    }
  }

  return true;
}

export default function main({ parsed }) {
  const [rulesStrings, updates] = parsed;
  const rules = rulesStrings.map(str => str.split('|').map(Number));

  const rulebook = mapValues(
    groupBy(rules, pair => pair[0]),
    rules => rules.map(pair => pair[1])
  );

  const unorderedUpdates = updates.filter(update => !isOrdered(rulebook, update));

  for (const update of unorderedUpdates) {
    update.sort((a, b) => {
      const mustFollows = rulebook[a] ?? [];
      return mustFollows.includes(b) ? -1 : 1;
    });
  }

  const middlePages = unorderedUpdates.map(update => update[Math.floor(update.length / 2)]);
  return sum(middlePages);
}
