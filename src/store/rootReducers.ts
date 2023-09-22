import { IAccessInitialData, accessReducers } from './slices/access'
import { IAthleteInitialData, athleteReducers } from './slices/athlete'

export interface IApplicationState {
  athlete: IAthleteInitialData
  access: IAccessInitialData
}

const rootReducers = {
  athlete: athleteReducers,
  access: accessReducers,
}

export default rootReducers
