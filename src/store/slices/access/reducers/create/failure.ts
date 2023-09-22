import { Draft } from '@reduxjs/toolkit'
import { IAccessInitialData } from '../..'

export default function createFailure(draft: Draft<IAccessInitialData>): void {
  draft.create.isLoading = false
}
