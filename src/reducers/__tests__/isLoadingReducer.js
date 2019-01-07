import { isLoadingReducer } from '../isLoadingReducer'

describe('isLoading', () => {
  it('should return a default state', () => {
    const expected = false;
    const result = isLoadingReducer(false, {});

    expect(result).toEqual(expected)
  })

  it('should return a state of a bool', () => {
    const mockAction = {
      type: 'ADD_INFO',
      info: false
    };
    const expected = false

    const result = isLoadingReducer(false, mockAction);
    expect(result).toEqual(expected);
  })
})