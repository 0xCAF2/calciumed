import * as Blockly from 'blockly'
import {
  pseudoForDecrementName,
  pseudoForIncrementName,
} from '../block/ja-jp/for'
import { pseudoIfName } from '../block/ja-jp/if'
import { pseudoWhileName } from '../block/ja-jp/while'
import { pseudoPrintName } from '../block/ja-jp/print'
import { pseudoAssignArrayName } from '../block/ja-jp/array'
import { calciumNumberName, pseudoNumberName } from '../block/ja-jp/number'
import { calciumListName } from '../block/ja-jp/list'

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
        type: calciumNumberName,
      },
      {
        kind: 'block',
        type: pseudoPrintName,
      },
      {
        kind: 'block',
        type: pseudoAssignArrayName,
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
]
