import IAthlete from '../../../../models/Athlete'
import { ReduxStore } from '../../../types'

function showData(state: ReduxStore): IAthlete {
  return state.athlete.show.data
}

export default showData
