import IAthlete from '../../../../models/Athlete'
import { ReduxStore } from '../../../types'

function showData(state: ReduxStore): IAthlete | null {
  return state.athlete.show.data
}

export default showData
