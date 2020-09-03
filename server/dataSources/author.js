class AuthorApi {
  construct(store) {
    this.store = store;
  }

  async findAuthor({ id: idArg }) {
    const author = await this.store.authors.findOne({ where: { id: idArg } });

    return author;
  }
}

module.exports = AuthorApi;
