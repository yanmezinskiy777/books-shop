import { api } from "../../app/api"
import { booksActionTypes } from "./books-action-types"
import { booksNormalization } from "../../app/utils"

export const fetchBooks = (filter, sorting) => async (dispath) => {
    console.log(filter, sorting)
    const result = await api({ type: 'books' })

    const filtered = booksNormalization(result)
    .filter(({ category }) => {
        if(filter === 'all') {
            return true
        } else if(category === filter){
            return true
        } else {
            return false
        }
    }).sort((a,b) => {
        switch (sorting) {
            case 'popular':
                return b.rating - a.rating
            case 'alphabet':
                  if (a.title > b.title) {
                    return 1;
                  }
                  if (a.title < b.title) {
                    return -1;
                  }
                  return 0;
            case 'price':
                return b.price - a.price
            default:
                return null
        }
    })
  
    dispath(getBooks(filtered))
}

export const getBooks = (books) => ({
    type: booksActionTypes.GET_BOOKS,
    payload: books
})