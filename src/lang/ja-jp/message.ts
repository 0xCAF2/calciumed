import { Messages, messageManager } from '../../block/message-manager'

const CALCIUM_DEF_PARAM_MESSAGE = '引数 %1'

const CALCIUM_LIST_ITEM_MESSAGE = 'リストの要素'

const jaJpMessages: Messages = {
  CALCIUM_DEF_PARAM_MESSAGE,
  CALCIUM_LIST_ITEM_MESSAGE,
}

messageManager.setMessages(jaJpMessages)
