/**
 * --- Advent of Code 2024 ---
 *
 * Day 4: Ceres Search
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/4
 */

import { noop } from 'lodash-es';
import { eachMatrix, eachOnPath } from '../lib/index.js';


export default function main({ matrix }) {
  let count = 0;

  eachMatrix(matrix, (char, [x, y]) => {
    if (char === 'X') {
      let word = 'X';

      eachOnPath(matrix, [x, y - 1], noop, (nextChar, [nextX, nextY]) => {
        word += nextChar;
        if (word === 'XMAS') {
          count += 1;
          return null;
        }
        if (!'XMAS'.startsWith(word)) {
          return null;
        }
        return [nextX, nextY - 1];
      });

      word = 'X';
      eachOnPath(matrix, [x + 1, y - 1], noop, (nextChar, [nextX, nextY]) => {
        word += nextChar;
        if (word === 'XMAS') {
          count += 1;
          return null;
        }
        if (!'XMAS'.startsWith(word)) {
          return null;
        }
        return [nextX + 1, nextY - 1];
      });

      word = 'X';
      eachOnPath(matrix, [x + 1, y], noop, (nextChar, [nextX, nextY]) => {
        word += nextChar;
        if (word === 'XMAS') {
          count += 1;
          return null;
        }
        if (!'XMAS'.startsWith(word)) {
          return null;
        }
        return [nextX + 1, nextY];
      });

      word = 'X';
      eachOnPath(matrix, [x + 1, y + 1], noop, (nextChar, [nextX, nextY]) => {
        word += nextChar;
        if (word === 'XMAS') {
          count += 1;
          return null;
        }
        if (!'XMAS'.startsWith(word)) {
          return null;
        }
        return [nextX + 1, nextY + 1];
      });

      word = 'X';
      eachOnPath(matrix, [x, y + 1], noop, (nextChar, [nextX, nextY]) => {
        word += nextChar;
        if (word === 'XMAS') {
          count += 1;
          return null;
        }
        if (!'XMAS'.startsWith(word)) {
          return null;
        }
        return [nextX, nextY + 1];
      });

      word = 'X';
      eachOnPath(matrix, [x - 1, y + 1], noop, (nextChar, [nextX, nextY]) => {
        word += nextChar;
        if (word === 'XMAS') {
          count += 1;
          return null;
        }
        if (!'XMAS'.startsWith(word)) {
          return null;
        }
        return [nextX - 1, nextY + 1];
      });

      word = 'X';
      eachOnPath(matrix, [x - 1, y], noop, (nextChar, [nextX, nextY]) => {
        word += nextChar;
        if (word === 'XMAS') {
          count += 1;
          return null;
        }
        if (!'XMAS'.startsWith(word)) {
          return null;
        }
        return [nextX - 1, nextY];
      });

      word = 'X';
      eachOnPath(matrix, [x - 1, y - 1], noop, (nextChar, [nextX, nextY]) => {
        word += nextChar;
        if (word === 'XMAS') {
          count += 1;
          return null;
        }
        if (!'XMAS'.startsWith(word)) {
          return null;
        }
        return [nextX - 1, nextY - 1];
      });
    }
  });

  return count;
}
