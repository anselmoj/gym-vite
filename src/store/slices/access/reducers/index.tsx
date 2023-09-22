import createFailure from './create/failure'
import createRequest from './create/request'
import createSuccess from './create/success'
import listFailure from './list/failure'
import listRequest from './list/request'
import listSuccess from './list/success'

const reducers = {
  listFailure,
  listRequest,
  listSuccess,
  createFailure,
  createRequest,
  createSuccess,
}

export default reducers
