import { ConstantValues, tooltipManager } from "../../constant-manager"

const PSEUDO_ARRAY_TOOLTIP = "配列の要素を1つだけ指定します。"
const PSEUDO_ARRAY_SLICE_TOOLTIP = "配列の範囲を決めて、要素を指定します。"
const PSEUDO_ASSIGN_ARRAY_TOOLTIP = "新しい配列を代入します。"
const PSEUDO_ASSIGN_ZERO_TOOLTIP = '配列の要素をすべて0に書き換えます。'
const PSEUDO_ASSIGNMENT_TOOLTIP = "変数や配列の中身を変更します。"
const PSEUDO_NUMBER_TOOLTIP = "数値を表します。"
const PSEUDO_STR_TOOLTIP = "文字列を表します。"
const PSEUDO_VARIABLE_TOOLTIP = "変数の名前を表します。"

const tooltips: ConstantValues = {
  PSEUDO_ARRAY_TOOLTIP,
  PSEUDO_ARRAY_SLICE_TOOLTIP,
  PSEUDO_ASSIGN_ARRAY_TOOLTIP,
  PSEUDO_ASSIGN_ZERO_TOOLTIP,
  PSEUDO_ASSIGNMENT_TOOLTIP,
  PSEUDO_NUMBER_TOOLTIP,
  PSEUDO_STR_TOOLTIP,
  PSEUDO_VARIABLE_TOOLTIP,
}

tooltipManager.addValues(tooltips)
