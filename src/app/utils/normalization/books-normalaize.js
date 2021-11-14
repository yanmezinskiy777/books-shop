
const booksNormalization = (response) => response.items.map(item => item.fields)

export default booksNormalization