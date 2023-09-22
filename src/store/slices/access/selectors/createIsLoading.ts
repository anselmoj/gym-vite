import { ReduxStore } from '../../../types'

export default function createIsLoading(state: ReduxStore): boolean {
  return state.access.create.isLoading
}
