function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues)
}

function updateItemInArray(array, key, updateItemCallback) {
  const updatedItems = array.map(record => {
    if (record.key !== key) {
      // Since we only want to update one record, preserve all others as they are now
      return record
    }

    // Use the provided callback to create an updated item
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
