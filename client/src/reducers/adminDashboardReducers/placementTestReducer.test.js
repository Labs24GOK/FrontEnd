import testStore from '../../utils/testStore';

describe('Placement Tests', () => {
  const expectedState = {
    title: 'Example title'
  };
  const store = testStore();
  let newState = store.getState();
  it('FETCH ALL PLACEMENT TESTS', () => {
    /// FETCH START
    store.dispatch({ type: 'FETCH_PLACEMENTTESTS_START' });
    newState = store.getState();
    expect(newState.placementTestReducer.isLoading).toBe(true);
    expect(newState.placementTestReducer.error).toBe(null);

    /// FETCH SUCCESS
    store.dispatch({
      type: 'FETCH_PLACEMENTTESTS_SUCCESS',
      payload: [expectedState]
    });
    newState = store.getState();
    expect(newState.placementTestReducer.placementTest.length).toBeGreaterThan(
      0
    );
    expect(newState.placementTestReducer.isLoading).toBe(false);
    expect(newState.placementTestReducer.error).toBe(null);

    /// FETCH FAILED
    store.dispatch({
      type: 'FETCH_PLACEMENTTESTS_FAILURE',
      payload: 'whatever.'
    });
    newState = store.getState();
    expect(newState.placementTestReducer.isLoading).toBe(false);
    expect(newState.placementTestReducer.error).toBe('whatever.');
  });
  it('FETCH PLACEMENT TEST BY ID', () => {
    /// FETCH START
    store.dispatch({ type: 'FETCH_PLACEMENTTESTTBYID_START' });
    newState = store.getState();
    expect(newState.placementTestReducer.isLoading).toBe(true);
    expect(newState.placementTestReducer.error).toBe(null);

    /// FETCH SUCCESS
    store.dispatch({
      type: 'FETCH_PLACEMENTTESTTBYID_SUCCESS',
      payload: expectedState
    });
    newState = store.getState();
    expect(
      Object.keys(newState.staffByIdReducer.staffById).length
    ).toBeGreaterThan(0);
    expect(newState.placementTestReducer.isEditing).toBe(false);
    expect(newState.placementTestReducer.isEdited).toBe(true);

    /// FETCH FAILED
    store.dispatch({ type: 'EDIT_STAFFBYID_FAILURE', payload: 'whatever.' });
    newState = store.getState();
    expect(newState.staffByIdReducer.isLoading).toBe(false);
    expect(newState.staffByIdReducer.error).toBe('whatever.');
  });
});
