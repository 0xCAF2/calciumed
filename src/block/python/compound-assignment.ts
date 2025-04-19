import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'

export const CALCIUM_COMPOUND_ASSIGNMENT_NAME = 'calcium_compound_assignment'

const compoundAssignmentBlock: { [key: string]: BlockDefinition } = {
  [CALCIUM_COMPOUND_ASSIGNMENT_NAME]: {
    init() {
      this.jsonInit({
        type: CALCIUM_COMPOUND_ASSIGNMENT_NAME,
        message0: '%1 %2 %3',
        args0: [
          {
            type: 'input_value',
            name: 'REF',
            check: [
              'calcium_variable',
              'calcium_attribute',
              'calcium_subscription',
            ],
          },
          {
            type: 'field_dropdown',
            name: 'OP',
            options: [
              ['+=', '+='],
              ['-=', '-='],
              ['*=', '*='],
            ],
          },
          {
            type: 'input_value',
            name: 'VALUE',
          },
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: 240,
        tooltip: '',
        helpUrl: '',
      })
    },
  },
}

Blockly.common.defineBlocks(compoundAssignmentBlock)
