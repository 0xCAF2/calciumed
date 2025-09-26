import { ConstantValues, tooltipManager } from "../../constant-manager"

const PSEUDO_ARITHMETIC_TOOLTIP =
  "数値や文字列に対して、四則演算や文字列の結合を行います。"
const PSEUDO_ARRAY_TOOLTIP = "配列の要素を1つだけ指定します。"
const PSEUDO_ARRAY_SLICE_TOOLTIP = "配列の範囲を決めて、要素を指定します。"
const PSEUDO_ASSIGN_ARRAY_TOOLTIP = "新しい配列を代入します。"
const PSEUDO_ASSIGN_ZERO_TOOLTIP = "配列の要素をすべて0に書き換えます。"
const PSEUDO_ASSIGNMENT_TOOLTIP = "変数や配列の中身を変更します。"
const PSEUDO_IF_CONTAINER_TOOLTIP = "条件に応じて、処理を分岐します。"
const PSEUDO_IF_ELIF_TOOLTIP = "条件に応じて、処理を分岐します。"
const PSEUDO_IF_ELSE_TOOLTIP = "条件に応じて、処理を分岐します。"
const PSEUDO_IF_TOOLTIP = "条件に応じて、処理を分岐します。"
const PSEUDO_INPUT_INT_TOOLTIP = "整数を入力から受け取って、変数に代入します。"
const PSEUDO_INPUT_STR_TOOLTIP =
  "文字列を入力から受け取って、変数に代入します。"
const PSEUDO_LOGICAL_TOOLTIP = "2つの条件を論理演算します。"
const PSEUDO_NOT_TOOLTIP = "条件を否定して、反転させます。"
const PSEUDO_NUMBER_TOOLTIP = "数値を表します。"
const PSEUDO_RELATIONAL_TOOLTIP = "2つの値を比較します。"
const PSEUDO_STR_TOOLTIP = "文字列を表します。"
const PSEUDO_VARIABLE_TOOLTIP = "変数の名前を表します。"

const tooltips: ConstantValues = {
  PSEUDO_ARITHMETIC_TOOLTIP,
  PSEUDO_ARRAY_TOOLTIP,
  PSEUDO_ARRAY_SLICE_TOOLTIP,
  PSEUDO_ASSIGN_ARRAY_TOOLTIP,
  PSEUDO_ASSIGN_ZERO_TOOLTIP,
  PSEUDO_ASSIGNMENT_TOOLTIP,
  PSEUDO_IF_CONTAINER_TOOLTIP,
  PSEUDO_IF_ELIF_TOOLTIP,
  PSEUDO_IF_ELSE_TOOLTIP,
  PSEUDO_IF_TOOLTIP,
  PSEUDO_INPUT_INT_TOOLTIP,
  PSEUDO_INPUT_STR_TOOLTIP,
  PSEUDO_LOGICAL_TOOLTIP,
  PSEUDO_NOT_TOOLTIP,
  PSEUDO_NUMBER_TOOLTIP,
  PSEUDO_RELATIONAL_TOOLTIP,
  PSEUDO_STR_TOOLTIP,
  PSEUDO_VARIABLE_TOOLTIP,
}

tooltipManager.addValues(tooltips)
