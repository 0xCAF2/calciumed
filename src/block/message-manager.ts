class MessageManager {
  private messages!: Messages
  setMessages(messages: Messages) {
    this.messages = messages
  }
  getMessage(key: string): string {
    return this.messages[key]
  }
}

export const messageManager = new MessageManager()

export type Messages = {
  [key: string]: string
}
