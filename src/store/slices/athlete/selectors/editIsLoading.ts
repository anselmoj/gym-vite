import { ReduxStore } from '../../../types'

function editIsLoading(state: ReduxStore): boolean {
  return state.athlete.edit.isLoading
}

export default editIsLoading
