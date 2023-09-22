import createFailure from './create/failure'
import createRequest from './create/request'
import createSuccess from './create/success'
import editFailure from './edit/failure'
import editRequest from './edit/request'
import editSuccess from './edit/success'
import disableFailure from './disable/failure'
import disableRequest from './disable/request'
import disableSuccess from './disable/success'
import enableFailure from './enable/failure'
import enableRequest from './enable/request'
import enableSuccess from './enable/success'
import listFailure from './list/failure'
import listRequest from './list/request'
import listSuccess from './list/success'
import showFailure from './show/failure'
import showRequest from './show/request'
import showSuccess from './show/success'
import selectFailure from './selectAthlete/failure'
import selectRequest from './selectAthlete/request'
import selectSuccess from './selectAthlete/success'

const reducers = {
  listFailure,
  listRequest,
  listSuccess,
  createFailure,
  createRequest,
  createSuccess,
  editFailure,
  editRequest,
  editSuccess,
  enableFailure,
  enableRequest,
  enableSuccess,
  disableFailure,
  disableRequest,
  disableSuccess,
  showFailure,
  showRequest,
  showSuccess,
  selectFailure,
  selectRequest,
  selectSuccess,
}

export default reducers
