import testStore from '../../utils/testStore';

describe('dispatch', () => {
  it('Fetched Staff', () => {
    const expectedState = [
      {
        title: 'Example title'
      }
    ];
    const store = testStore();
    let newState = store.getState();
    /// FETCH START
    store.dispatch({ type: 'FETCH_STAFF_START', payload: expectedState });
    newState = store.getState();
    expect(newState.staffTableReducer.isLoading).toBe(true);
    expect(newState.staffTableReducer.error).toBe(null);

    /// FETCH SUCCESS
    store.dispatch({ type: 'FETCH_STAFF_SUCCESS', payload: expectedState });
    newState = store.getState();
    expect(newState.staffTableReducer.staffList.length).toBeGreaterThan(0);
    expect(newState.staffTableReducer.isLoading).toBe(false);
    expect(newState.staffTableReducer.error).toBe(null);

    /// FETCH FAILED
    store.dispatch({ type: 'FETCH_STAFF_FAILURE', payload: 'whatever.' });
    newState = store.getState();
    expect(newState.staffTableReducer.isLoading).toBe(false);
    expect(newState.staffTableReducer.error).toBe('whatever.');

    // SET FILTER STAFF
    store.dispatch({ type: 'SET_FILTER_STAFF', payload: 'whatever.' });
    newState = store.getState();
    expect(newState.staffTableReducer.searchTerm).toBe('whatever.');

    // ADD STAFF START
    store.dispatch({ type: 'ADD_STAFF_START' });
    newState = store.getState();
    expect(newState.staffTableReducer.isLoading).toBe(true);
    expect(newState.staffTableReducer.isPosting).toBe(false);
    expect(newState.staffTableReducer.error).toBe(null);
  });
}); 
