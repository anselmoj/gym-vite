import { createSlice } from '@reduxjs/toolkit'
import IPagination from '../../../models/Pagination'
import reducers from './reducers'
import selectors from './selectors'
import IAccess from '../../../models/Access'

export interface IAccessInitialData {
  list: {
    data: IAccess[]
    isLoading: boolean
    pagination: IPagination
    withError: boolean
  }
  create: {
    isLoading: boolean
  }
}

const initialState: IAccessInitialData = {
  list: {
    data: [],
    isLoading: false,
    pagination: {
      currentPage: 1,
      totalPage: 1,
    },
    withError: false,
  },
  create: {
    isLoading: false,
  },
}

const accessSlice = createSlice({
  name: '@access',
  initialState,
  reducers,
})

export const accessActions = accessSlice.actions
export const accessReducers = accessSlice.reducer
export const accessSelectors = selectors
