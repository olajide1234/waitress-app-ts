export const addRecord = record => async (dispatch) => {

  try {
    // const { data } = await axios({
    //   url: `https://test.com/api/v1/`,
    //   method: 'GET',
    //   headers: {
    //     'x-access-token': token
    //   }
    // });

    dispatch({
      type: 'ADD_RECORD',
      record: record,
    });
    return { message: 'success' };
  } catch (error) {
    return { message: 'failure' };
  }
};

export const editStatus = data => async (dispatch) => {

  try {
    // const { data } = await axios({
    //   url: `https://test.com/api/v1/`,
    //   method: 'GET',
    //   headers: {
    //     'x-access-token': token
    //   }
    // });

    dispatch({
      type: 'EDIT_RECORD',
      data: data,
    });
    return { message: 'success' };
  } catch (error) {
    return { message: 'failure' };
  }
};