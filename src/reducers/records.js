function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues)
}

function updateItemInArray(array, key, updateItemCallback) {
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
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    tableNo: 32,
    order: 'Rice and jollof',
    state: 'Jotted down',
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    tableNo: 42,
    order: 'Rice and jollof',
    state: 'Getting cooked',
  },
], action) => {
  switch (action.type) {
    case 'ADD_RECORD': {
      return [
        ...state, { ...action.record, key: state.length + 1 }
      ]
    }
    case 'EDIT_RECORD': {
      const newRecords = updateItemInArray(state, action.data.key, record => {
        return updateObject(record, { state: action.data.status })
      })

      return newRecords;
    }
    default:
      return state
  }
}

export default records
