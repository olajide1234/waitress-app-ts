interface SubmissionData {
  key: number,
  firstName: string,
  lastName: string,
  tableNo: number,
  order: string,
  state: string,
}


function updateObject(oldObject: {}, newValues: {}) {
  return Object.assign({}, oldObject, newValues)
}

function updateItemInArray(array: { key: number }[], key: number, updateItemCallback: ({ }) => {}) {
  const updatedItems = array.map(record => {
    if (record.key !== key) {
      return record
    }

    const updatedItem = updateItemCallback(record)
    return updatedItem
  })

  return updatedItems
}


const records = (state = [
  {
    key: 1,
    firstName: 'John',
    lastName: 'Brown',
    tableNo: 32,
    order: 'Rice and jollof',
    state: 'Jotted down',
  },
  {
    key: 2,
    firstName: 'Jim',
    lastName: 'Green',
    tableNo: 42,
    order: 'Rice and jollof',
    state: 'Getting cooked',
  },
], action: { type: string, data?: { key: number, status: string }, record?: SubmissionData }) => {
  switch (action.type) {
    case 'ADD_RECORD': {
      return [
        ...state, { ...action.record, key: state.length + 1 }
      ]
    }
    case 'EDIT_RECORD': {
      if (action.data) {
        const { status } = action.data;
        const newRecords = updateItemInArray(
          state,
          action.data.key,
          record => { return updateObject(record, { state: status }) }
        )
        return newRecords;
      }
    }
    default:
      return state
  }
}

export default records
