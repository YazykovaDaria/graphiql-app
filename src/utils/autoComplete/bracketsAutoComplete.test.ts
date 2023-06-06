import { ChangeEvent } from 'react';
import { autoBracketComplete } from './bracketsAutoComplete';

describe('autoBracketComplete function', () => {
  it('should return the original value if no bracket is entered', () => {
    const inputValue = 'SELECT * FROM (users)';
    const event = {
      target: { value: inputValue },
      nativeEvent: { data: 's' },
    } as unknown as ChangeEvent<HTMLInputElement>;

    expect(autoBracketComplete(event)).toEqual([inputValue]);
  });

  it('should add a closed bracket when an open bracket is entered', () => {
    const inputValue = 'SELECT * FROM users WHERE id = {';
    const expectedValue = 'SELECT * FROM users WHERE id = {}';
    const event = {
      target: { value: inputValue, selectionStart: inputValue.length },
      nativeEvent: { data: '{' },
    } as unknown as ChangeEvent<HTMLInputElement>;
    expect(autoBracketComplete(event)).toEqual([expectedValue, inputValue.length]);
  });

  it('should add a closed bracket at the correct position if there are multiple open brackets', () => {
    const inputValue = 'SELECT * FROM {[}';
    const expectedValue = 'SELECT * FROM {[]}';
    const event = {
      target: { value: inputValue, selectionStart: inputValue.length - 1 },
      nativeEvent: { data: '[' },
    } as unknown as ChangeEvent<HTMLInputElement>;

    expect(autoBracketComplete(event)).toEqual([expectedValue, inputValue.length - 1]);
  });
});
