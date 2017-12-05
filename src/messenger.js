
export class Messenger {
  constructor() {
    this.subscribers = []
  }

  dispatch(message) {
    this.subscribers.forEach(subscriber => subscriber(message))
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter( sub => sub !== subscriber)
  }
}

export const sidebarChatBoxMessenger = new Messenger()
