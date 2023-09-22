import IAccess from '../../../../models/Access'
import { ReduxStore } from '../../../types'

export default function listData(state: ReduxStore): IAccess[] {
  return state.access.list.data
}
