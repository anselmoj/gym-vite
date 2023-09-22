import IAthlete from '../../../../models/Athlete'
import { ReduxStore } from '../../../types'

export default function listData(state: ReduxStore): IAthlete[] {
  return state.athlete.list.data
}
