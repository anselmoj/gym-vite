import { ReduxStore } from '../../../types'

function showIsLoading(state: ReduxStore): boolean {
  return state.athlete.show.isLoading
}

export default showIsLoading
