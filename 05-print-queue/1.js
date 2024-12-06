/**
 * --- Advent of Code 2024 ---
 *
 * Day 5: Print Queue
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/5
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

export default function main({ input }) {
  const [rulesString, updatesString] = input.split('\n\n');
  const rules = rulesString.split('\n').map(str => str.split('|').map(Number));
  const updates = updatesString.split('\n').map(str => str.split(',').map(Number));

  const rulebook = mapValues(
    groupBy(rules, pair => pair[0]),
    rules => rules.map(pair => pair[1])
  );

  const orderedUpdates = updates.filter(update => isOrdered(rulebook, update));
  const middlePaes = orderedUpdates.map(update => update[Math.floor(update.length / 2)]);

  return sum(middlePaes);
}
