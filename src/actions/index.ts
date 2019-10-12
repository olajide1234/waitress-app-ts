interface SubmissionData {
  firstName: string,
  lastName: string,
  tableNo: number,
  order: string,
  state: string,
}

export const addRecord = (record: SubmissionData) => async (dispatch: any) => {

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

export const editStatus = (data: { key: number, status: string }) => async (dispatch: any) => {

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
