import { Draft } from '@reduxjs/toolkit'
import { IAccessInitialData } from '../..'

function listFailure(draft: Draft<IAccessInitialData>): void {
  draft.list.isLoading = false
  draft.list.withError = true
}

export default listFailure
