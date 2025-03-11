import * as Blockly from 'blockly'

import './message'
import './tooltip'

import { calciumNumberBlock } from '../../block/python/number'

import '../../block/assignment'
import '../../block/compound-assignment'

import '../../block/pseudo/array'
import '../../block/pseudo/number'
import '../../block/pseudo/print'

import '../../block/pseudo/if'

import '../../block/pseudo/for'
import '../../block/pseudo/while'

import * as Lang from 'blockly/msg/ja'

// @ts-ignore
Blockly.setLocale(Lang)

import {
  CalciumRenderer,
  calciumRendererName,
} from '../../editor/calcium-renderer'

import { buildEditor } from '../../editor'

export function buildCalciumEditor(parent: HTMLElement) {
  ;[calciumNumberBlock].forEach((block) => {
    Blockly.common.defineBlocks(block)
  })

  // renderer
  Blockly.blockRendering.register(calciumRendererName, CalciumRenderer)

  buildEditor({
    parent,
    options: {
      renderer: calciumRendererName,
      toolboxUrl: 'toolbox_ja-jp.json',
    },
  })
}
