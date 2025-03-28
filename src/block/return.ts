import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { tooltipManager } from '../constant-manager'

const CALCIUM_RETURN_NAME = 'calcium_return'

const calciumReturnBlock: BlockDefinition = 
{
  type: CALCIUM_RETURN_NAME,
  message0: 'return %1',
  args0: [
    {
      type: 'input_value',
      name: 'VALUE',
    },
  ],
  previousStatement: null,
  colour: 240,
  tooltip: tooltipManager.getValue('CALCIUM_RETURN_TOOLTIP'),
  helpUrl: '',
}

Blockly.defineBlocksWithJsonArray([calciumReturnBlock])