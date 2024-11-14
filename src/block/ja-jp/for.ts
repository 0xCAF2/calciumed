// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'

export const pseudoForIncrementName = 'pseudo_for_increment'
export const pseudoForDecrementName = 'pseudo_for_decrement'

export const pseudoForIncrement: BlockDefinition = {
  type: pseudoForIncrementName,
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
  tooltip: '変数を指定した範囲で増やしながら、繰り返します。',
  helpUrl: '',
}

export const pseudoForDecrement: BlockDefinition = {
  type: pseudoForDecrementName,
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
}
