import { ReduxStore } from '../../../types'

export default function listIsLoading(state: ReduxStore): boolean {
  return state.access.list.isLoading
}
