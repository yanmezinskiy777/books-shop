import { filterAction } from "./filter-action-types"

export const setFilter = (filter) => ({
    type: filterAction.SET_FILTER,
    payload: filter
})

export const setCategory = (category) => ({
    type: filterAction.SET_CATEGORY,
    payload: category
})