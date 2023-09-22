import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'
import IAthlete from '../../../../../models/Athlete'

interface ISelectAthletesSuccessAction {
  data: {
    list: {
      gender: string
      is_active: boolean
      name: string
      id: number
    }[]
    totalPages?: number
  }
}

export default function selectSuccess(
  draft: Draft<IAthleteInitialData>,
  action: PayloadAction<ISelectAthletesSuccessAction>,
): void {
  const athletes: IAthlete[] = action.payload.data.list.map((athlete) => ({
    id: athlete.id,
    name: athlete.name,
    gender: athlete.gender,
    is_active: athlete.is_active,
  }))
  draft.list.data = athletes
  draft.list.isLoading = false
  draft.list.pagination.totalPage = action.payload.data.totalPages || 1
}
