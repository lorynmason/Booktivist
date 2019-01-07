import { messageReducer } from '../messageReducer'

describe('messageReducer', () => {
  it('should return a defaul state', () => {
    const expected = '';
    const result = messageReducer('', {});
    expect(result).toEqual(expected);
  });

  it('should return state with a message', () => {
    const mockAction = {
      type: 'ADD_MESSAGE',
      message: 'message'
    };
    const expected = 'message';
    const result = messageReducer('', mockAction);
    expect(result).toEqual(expected);
  });
});