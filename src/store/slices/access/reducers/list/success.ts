import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IAccessInitialData } from '../..'
import IAccess from '../../../../../models/Access'

interface IListAccessSuccessAction {
  data: {
    list: {
      date_time: string
      gym_student: {
        id: number
        name: string
      }
      id: number
      type: string
    }[]
    totalPages?: number
  }
}

export default function listSuccess(
  draft: Draft<IAccessInitialData>,
  action: PayloadAction<IListAccessSuccessAction>,
): void {
  const access: IAccess[] = action.payload.data.list.map((item) => ({
    date_time: item.date_time,
    gym_student: {
      id: item.gym_student.id,
      name: item.gym_student.name,
    },
    id: item.id,
    type: item.type,
  }))
  draft.list.data = access
  draft.list.isLoading = false
  draft.list.pagination.totalPage = action.payload.data.totalPages || 1
}
