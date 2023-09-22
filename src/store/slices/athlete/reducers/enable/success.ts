import { Draft } from '@reduxjs/toolkit'

import { IAthleteInitialData } from '../../index'

function enableSuccess(draft: Draft<IAthleteInitialData>) {
  draft.enable.isLoading = false
}

export default enableSuccess
