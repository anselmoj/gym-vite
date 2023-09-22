import { ReduxStore } from '../../../types'

export default function createIsLoading(state: ReduxStore): boolean {
  return state.athlete.create.isLoading
}
