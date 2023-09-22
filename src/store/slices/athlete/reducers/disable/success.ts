import { Draft } from '@reduxjs/toolkit'

import { IAthleteInitialData } from '../../index'

export default function disableSuccess(draft: Draft<IAthleteInitialData>) {
  draft.disable.isLoading = false
}
