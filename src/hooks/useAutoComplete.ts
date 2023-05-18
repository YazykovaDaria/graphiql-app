import { useState, ChangeEvent, useRef, useEffect, RefObject } from 'react';
import { autoBracketComplete } from 'src/utils/autoComplete/bracketsAutoComplete';

type SetValue = (value: string) => void;
type HandleChange = (e: ChangeEvent<HTMLInputElement>) => void;

export const useAutoComplete = (
  setValue: SetValue,
  startCursorPosition = 0
): [HandleChange, RefObject<HTMLInputElement | null>] => {
  const [caretPosition, setCaretPosition] = useState(startCursorPosition);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.selectionStart = caretPosition;
      inputRef.current.selectionEnd = caretPosition;
    }
  }, [caretPosition]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [newValue, caretPos] = autoBracketComplete(e);
    setValue(newValue);
    if (caretPos) {
      setCaretPosition(caretPos);
    }
  };
  return [handleChange, inputRef];
};
