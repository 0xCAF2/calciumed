import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { tooltipManager } from '../../constant-manager'

const CALCIUM_STR_NAME = 'calcium_str'

const calciumStr: BlockDefinition = {
  type: CALCIUM_STR_NAME,
  message0: '"%1"',
  args0: [
    {
      type: 'field_input',
      name: 'STR',
      text: '',
    },
  ],
  inputsInline: true,
  output: 'String',
  colour: 120,
  tooltip: tooltipManager.getValue('CALCIUM_STR_TOOLTIP'),
  helpUrl: '',
}

Blockly.defineBlocksWithJsonArray([calciumStr])
