import * as Blockly from "blockly"

import "./message"
import "./tooltip"

import * as Lang from "blockly/msg/en"

// @ts-ignore
Blockly.setLocale(Lang)

import { CALCIUM_RENDERER_NAME } from "../../editor/calcium-renderer"

import { buildEditor } from "../../editor"

export function buildCalciumEditor(
  parent: HTMLElement,
  height?: string
): Promise<Blockly.Workspace> {
  return buildEditor({
    parent,
    options: {
      renderer: CALCIUM_RENDERER_NAME,
    },
    height,
  })
}
