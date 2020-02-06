import testStore from '../../utils/testStore';

describe('dispatch', () => {

    const store = testStore();
    let newState = store.getState();

  it('Fetched Student', () => {
    const expectedState = [
      {
        title: 'Example title'
      }
    ];
    /// FETCH START
    store.dispatch({ type: 'FETCH_STUDENTS_START', payload: expectedState });
    newState = store.getState();
    expect(newState.studentTableReducer.listIsLoading).toBe(true);
    expect(newState.studentTableReducer.listError).toBe(null);

    /// FETCH SUCCESS
    store.dispatch({ type: 'FETCH_STUDENTS_SUCCESS', payload: expectedState });
    newState = store.getState();
    expect(newState.studentTableReducer.studentList.length).toBeGreaterThan(0);
    expect(newState.studentTableReducer.listIsLoading).toBe(false);
    expect(newState.studentTableReducer.listError).toBe(null);

    /// FETCH FAILED
    store.dispatch({ type: 'FETCH_STUDENTS_FAILURE', payload: 'whatever.' });
    newState = store.getState();
    expect(newState.studentTableReducer.listIsLoading).toBe(false);
    expect(newState.studentTableReducer.listError).toBe('whatever.');
  }); 

  it('Filter Student', () => {
    /// SET_FILTER_STUDENT
    store.dispatch({ type: 'SET_FILTER_STUDENT', payload: 'whatever.' });
    newState = store.getState();
    expect(newState.studentTableReducer.searchTerm).toBe('whatever.');
  }); 


});
