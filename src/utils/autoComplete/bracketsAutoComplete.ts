import { ChangeEvent } from 'react';

interface Brackets {
  [key: string]: string;
}

const completeBrackets: Brackets = {
  '{': '}',
  '[': ']',
  '(': ')',
  '"': '"',
  "'": "'",
};

const brackets = Object.keys(completeBrackets);

const getClosedBracket = (value: string): string => {
  if (brackets.includes(value)) {
    return completeBrackets[value];
  }
  return '';
};

type BracketComplete = [string, number?];

export const autoBracketComplete = (e: ChangeEvent<HTMLInputElement>): BracketComplete => {
  const inputValue = e.target.value;
  const lastEnteredChar = (e.nativeEvent as InputEvent).data;

  if (lastEnteredChar) {
    const closedBracket = getClosedBracket(lastEnteredChar);
    if (closedBracket) {
      const index = inputValue.lastIndexOf(lastEnteredChar) + 1;
      const startStr = inputValue.slice(0, index);
      const endStr = inputValue.slice(index);
      const newValue = `${startStr}${closedBracket}${endStr}`;

      const caretPosition = e.target.selectionStart;
      if (caretPosition) return [newValue, caretPosition];
    }
  }
  return [inputValue];
};
