class MessagesApi {
  constructor(store) {
    this.store = store;
  }

  async getAllMessages() {
    const messages = await this.store.messages.findAll();

    return messages;
  }

  async sendMessage({ text, author }) {
    const message = await this.store.messages.create({
      text,
      author,
    });

    return message;
  }
}

module.exports = MessagesApi;
