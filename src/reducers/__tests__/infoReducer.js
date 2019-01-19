import { infoReducer } from '../infoReducer'

describe('infoReducer', () => {
  it('should return a default state', () => {
    const expected = [];
    const result = infoReducer([], {});

    expect(result).toEqual(expected);
  })

  it('should return state with an info object', () => {
    const mockInfo = {
      name: "Into the Wild"
    }
    const mockAction = {
      type: 'ADD_INFO',
      info: [mockInfo]
    };
    const expected = mockInfo

    const result = infoReducer({}, mockAction);
    expect(result).toEqual(expected);
  });
})