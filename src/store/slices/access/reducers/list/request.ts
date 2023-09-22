import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAccessInitialData } from '../..'

interface IListAccessRequestAction {
  data: {
    page: number
  }
}

export default function listRequest(
  draft: Draft<IAccessInitialData>,
  action: PayloadAction<IListAccessRequestAction>,
): void {
  draft.list.isLoading = true
  draft.list.withError = false
  draft.list.data = []
  draft.list.pagination.currentPage = action.payload.data.page
}

export type { IListAccessRequestAction }
