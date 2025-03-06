import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'

const PSEUDO_FOR_INCREMENT_NAME = 'pseudo_for_increment'
const PSEUDO_FOR_DECREMENT_NAME = 'pseudo_for_decrement'

const pseudoForBlocks: BlockDefinition[] = [
  {
    type: PSEUDO_FOR_INCREMENT_NAME,
    message0: '%1 を %2 から %3 まで %4 ずつ増やしながら %5 繰り返す %6',
    args0: [
      {
        type: 'input_value',
        name: 'VAR',
      },
      {
        type: 'input_value',
        name: 'START',
        check: ['Number'],
      },
      {
        type: 'input_value',
        name: 'STOP',
        check: ['Number'],
      },
      {
        type: 'input_value',
        name: 'STEP',
        check: ['Number'],
      },
      {
        type: 'input_dummy',
      },
      {
        type: 'input_statement',
        name: 'DO',
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 210,
    tooltip: '指定した範囲で変数の値を増やしながら、繰り返します。',
    helpUrl: '',
  },
  {
    type: PSEUDO_FOR_DECREMENT_NAME,
    message0: '%1 を %2 から %3 まで %4 ずつ減らしながら %5 繰り返す %6',
    args0: [
      {
        type: 'input_value',
        name: 'VAR',
      },
      {
        type: 'input_value',
        name: 'START',
        check: ['Number'],
      },
      {
        type: 'input_value',
        name: 'STOP',
        check: ['Number'],
      },
      {
        type: 'input_value',
        name: 'STEP',
        check: ['Number'],
      },
      {
        type: 'input_dummy',
      },
      {
        type: 'input_statement',
        name: 'DO',
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 210,
    tooltip: '変数を指定した範囲で減らしながら、繰り返します。',
    helpUrl: '',
  },
]

Blockly.defineBlocksWithJsonArray(pseudoForBlocks)
