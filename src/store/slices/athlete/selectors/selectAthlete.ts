import ISelectAthlete from '../../../../models/SelectAthlete'
import { ReduxStore } from '../../../types'

export default function selectAthlete(state: ReduxStore): ISelectAthlete[] {
  return state.athlete.selectAthlete.data
}
