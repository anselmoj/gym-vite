import { createSlice } from '@reduxjs/toolkit'
import IPagination from '../../../models/Pagination'
import reducers from './reducers'
import selectors from './selectors'
import IAthlete from '../../../models/Athlete'
import ISelectAthlete from '../../../models/SelectAthlete'

export interface IAthleteInitialData {
  list: {
    data: IAthlete[]
    isLoading: boolean
    pagination: IPagination
    withError: boolean
  }
  create: {
    isLoading: boolean
  }
  edit: {
    isLoading: boolean
  }
  show: {
    isLoading: boolean
    data: IAthlete | null
  }
  enable: {
    isLoading: boolean
  }
  disable: {
    isLoading: boolean
  }
  selectAthlete: {
    isLoading: boolean
    data: ISelectAthlete[]
  }
}

const initialState: IAthleteInitialData = {
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
  edit: {
    isLoading: false,
  },
  show: {
    isLoading: false,
    data: null,
  },
  enable: {
    isLoading: false,
  },
  disable: {
    isLoading: false,
  },
  selectAthlete: {
    isLoading: false,
    data: [],
  },
}

const athleteSlice = createSlice({
  name: '@athlete',
  initialState,
  reducers,
})

export const athleteActions = athleteSlice.actions
export const athleteReducers = athleteSlice.reducer
export const athleteSelectors = selectors
