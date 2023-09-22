import { Draft } from '@reduxjs/toolkit'
import { IAccessInitialData } from '../..'

export default function createSuccess(draft: Draft<IAccessInitialData>): void {
  draft.create.isLoading = false
}
