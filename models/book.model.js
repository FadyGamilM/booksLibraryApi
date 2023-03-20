exports.BookModel = class Book {
  constructor(
    id,
    title,
    authorName,
    isbn,
    pageCount,
    storeId,
    description,
    publisherName
  ) {
    this.id = id;
    this.title = title;
    this.authorName = authorName;
    this.isbn = isbn;
    this.pageCount = pageCount;
    this.storeId = storeId;
    this.description = description;
    this.publisherName = publisherName;
  }
};
