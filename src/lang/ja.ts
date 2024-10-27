import * as Blockly from 'blockly'
import { buildEditor } from '../editor/blockly-editor'

console.log('ユーザーは日本語を選択しました')

const toolbox: Blockly.utils.toolbox.ToolboxDefinition = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Logic',
      contents: [
        {
          kind: 'block',
          type: 'controls_if',
        },
      ],
    },
  ],
}

buildEditor(document.body, { toolbox })
