import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAthleteInitialData } from '../..'

interface ISelectAthletesSuccessAction {
  data: {
    list: {
      name: string
      id: number
    }[]
  }
}

interface IAthleteList {
  label: string
  value: number
}

export default function selectSuccess(
  draft: Draft<IAthleteInitialData>,
  action: PayloadAction<ISelectAthletesSuccessAction>,
): void {
  const athletes: IAthleteList[] = action.payload.data.list.map((athlete) => ({
    label: athlete.name,
    value: athlete.id,
  }))
  draft.selectAthlete.data = athletes
  draft.selectAthlete.isLoading = false
}
