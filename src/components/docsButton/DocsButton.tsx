import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { IconButton } from '@mui/material';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { toggleOpen } from '../../store/slices/docsSlice';

export function DocsButton() {
  const dispatch = useAppDispatch();

  return (
    <IconButton
      aria-label='query'
      size='large'
      onClick={() => {
        dispatch(toggleOpen());
      }}
    >
      <AutoStoriesIcon fontSize='inherit' />
    </IconButton>
  );
}
