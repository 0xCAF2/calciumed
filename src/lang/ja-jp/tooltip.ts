import { ConstantValues, tooltipManager } from '../../constant-manager'

const CALCIUM_ASSIGNMENT_TOOLTIP = '変数に値を代入します。'
const CALCIUM_BREAK_CONTINUE_TOOLTIP =
  'ループを終了するか、次のループに進みます。'
const CALCIUM_CLASS_DEF_TOOLTIP = 'クラスを定義します。'
const CALCIUM_COMPOUND_ASSIGNMENT_TOOLTIP = '変数に計算した値を代入します。'
const CALCIUM_DEF_TOOLTIP = '関数を定義します。'
const CALCIUM_DEF_METHOD_TOOLTIP = 'メソッドを定義します。'
const CALCIUM_DEF_PARAM_TOOLTIP = '関数やメソッドが受け取る引数です。'
const CALCIUM_DICT_TOOLTIP = '辞書を作成します。'
const CALCIUM_EXPR_STMT_TOOLTIP = '関数の呼び出し式を使います。'
const CALCIUM_FOR_TOOLTIP = 'リストや辞書の要素を取り出します。'
const CALCIUM_LIST_TOOLTIP = 'リストを作成します。'
const CALCIUM_LIST_ITEM_TOOLTIP = 'リストの要素を追加します。'
const CALCIUM_NUMBER_TOOLTIP = '数値を表します。'

const tooltips: ConstantValues = {
  CALCIUM_ASSIGNMENT_TOOLTIP,
  CALCIUM_BREAK_CONTINUE_TOOLTIP,
  CALCIUM_CLASS_DEF_TOOLTIP,
  CALCIUM_COMPOUND_ASSIGNMENT_TOOLTIP,
  CALCIUM_DEF_TOOLTIP,
  CALCIUM_DEF_METHOD_TOOLTIP,
  CALCIUM_DEF_PARAM_TOOLTIP,
  CALCIUM_DICT_TOOLTIP,
  CALCIUM_EXPR_STMT_TOOLTIP,
  CALCIUM_FOR_TOOLTIP,
  CALCIUM_LIST_TOOLTIP,
  CALCIUM_LIST_ITEM_TOOLTIP,
  CALCIUM_NUMBER_TOOLTIP,
}

tooltipManager.setValues(tooltips)
