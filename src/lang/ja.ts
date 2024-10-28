import * as Blockly from 'blockly'
import { buildEditor } from '../editor/blockly-editor'
import * as jaToolbox from '../toolbox/ja'
import * as pythonToolbox from '../toolbox/python'

const toolbox: Blockly.utils.toolbox.ToolboxDefinition = {
  kind: 'categoryToolbox',
  contents: [...jaToolbox.categories, ...pythonToolbox.categories],
}

buildEditor(document.body, { toolbox })
