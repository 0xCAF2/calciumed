import * as Blockly from 'blockly'
import { pseudoForDecrementName, pseudoForIncrementName } from '../../block/for'
import { pseudoIfName } from '../../block/if'
import { pseudoWhileName } from '../../block/while'
import { pseudoPrintName } from '../../block/print'
import { pseudoAssignArrayName } from '../../block/array'
import { pseudoNumberName } from '../../block/number'
import {
  CALCIUM_COMPOUND_ASSIGNMENT_NAME,
  calciumAssignmentName,
} from '../../block/assignment'

export const categories: Blockly.utils.toolbox.ToolboxItemInfo[] = [
  {
    kind: 'category',
    name: '基本',
    contents: [
      {
        kind: 'block',
        type: pseudoNumberName,
      },
      {
        kind: 'block',
        type: pseudoAssignArrayName,
      },
      {
        kind: 'block',
        type: calciumAssignmentName,
      },
      {
        kind: 'block',
        type: CALCIUM_COMPOUND_ASSIGNMENT_NAME,
      },
    ],
  },
  {
    kind: 'category',
    name: '条件分岐',
    contents: [
      {
        kind: 'block',
        type: pseudoIfName,
      },
    ],
  },
  {
    kind: 'category',
    name: '繰り返し',
    contents: [
      {
        kind: 'block',
        type: pseudoForIncrementName,
      },
      {
        kind: 'block',
        type: pseudoForDecrementName,
      },
      {
        kind: 'block',
        type: pseudoWhileName,
      },
    ],
  },
  {
    kind: 'category',
    name: '関数',
    contents: [
      {
        kind: 'block',
        type: pseudoPrintName,
      },
    ],
  },
]
