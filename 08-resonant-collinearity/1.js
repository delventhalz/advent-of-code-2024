/**
 * --- Advent of Code 2024 ---
 *
 * Day 8: Resonant Collinearity
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/8
 */

import { uniq } from 'lodash-es';
import { count, eachMatrix } from '../lib/index.js';

const getAntinodes = (antennas) => {
  const antinodes = [];

  for (let a = 0; a < antennas.length; a += 1) {
    for (let b = 0; b < antennas.length; b += 1) {
      if (a !== b) {
        const [aX, aY] = antennas[a];
        const [bX, bY] = antennas[b];
        const diffX = aX - bX;
        const diffY = aY - bY;

        antinodes.push(
          [aX + diffX, aY + diffY],
          [bX - diffX, bY - diffY],
        );
      }
    }
  }

  return antinodes;
}

export default function main({ matrix }) {
  const antennaCoords = {};

  eachMatrix(matrix, (cell, coords) => {
    if (cell !== '.') {
      if (!antennaCoords[cell]) {
        antennaCoords[cell] = [];
      }
      antennaCoords[cell].push(coords);
    }
  });

  const antinodeStrings = Object.values(antennaCoords)
    .flatMap(getAntinodes)
    .filter(([x, y]) => matrix[y]?.[x])
    .map(String);

  return count(uniq(antinodeStrings));
}
