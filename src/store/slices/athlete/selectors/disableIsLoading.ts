import { ReduxStore } from '../../../types'

function disableIsLoading(state: ReduxStore): boolean {
  return state.athlete.disable.isLoading
}

export default disableIsLoading
