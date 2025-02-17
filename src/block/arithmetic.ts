// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'

export const calciumArithmeticName = 'calcium_arithmetic'

export const calciumArithmetic: BlockDefinition = {
  type: 'calcium_arithmetic',
  message0: '%1 %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'LEFT',
      check: [
        'calcium_variable',
        'calcium_attribute',
        'calcium_subscript',
        'calcium_call',
        'calcium_arithmetic',
        'Number',
        'String',
      ],
    },
    {
      type: 'field_dropdown',
      name: 'OP',
      options: [
        ['+', '+'],
        ['-', '-'],
        ['*', '*'],
        ['//', '//'],
        ['/', '/'],
        ['**', '**'],
        ['%', '%'],
      ],
    },
    {
      type: 'input_value',
      name: 'RIGHT',
      check: [
        'calcium_variable',
        'calcium_attribute',
        'calcium_subscript',
        'calcium_call',
        'calcium_arithmetic',
        'Number',
        'String',
      ],
    },
  ],
  inputsInline: true,
  output: 'calcium_arithmetic',
  colour: 120,
  tooltip: '%{BKY_CALCIUM_ARITHMETIC_TOOLTIP}',
  helpUrl: '',
}
