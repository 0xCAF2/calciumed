import * as Blockly from 'blockly'
import '../block/python'

export const pythonCategories: Blockly.utils.toolbox.ToolboxItemInfo[] = [
  {
    kind: 'category',
    name: 'Python1',
    contents: [
      {
        kind: 'block',
        type: 'calcium_attribute',
      },
      {
        kind: 'block',
        type: 'calcium_number',
      },
      {
        kind: 'block',
        type: 'calcium_list',
      },
    ],
  },
  {
    kind: 'category',
    name: 'Python2',
    contents: [
      {
        kind: 'block',
        type: 'calcium_expr_stmt',
      },
      {
        kind: 'block',
        type: 'calcium_break_continue',
      },
      {
        kind: 'block',
        type: 'calcium_def',
      },
      {
        kind: 'block',
        type: 'calcium_def_method',
      },
      {
        kind: 'block',
        type: 'calcium_class_def',
      },
    ],
  },
]
