import { ReduxStore } from '../../../types'

function enableIsLoading(state: ReduxStore): boolean {
  return state.athlete.enable.isLoading
}

export default enableIsLoading
