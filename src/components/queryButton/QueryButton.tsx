import { IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
import { togglePlay } from 'src/store/slices/responseSectionSlice';

export function QueryButton() {
  const { isPlay } = useAppSelector((state) => state.response);
  const dispatch = useAppDispatch();
  // const [getQuery] = useGetGraphQueryMutation();
  // const { query, variables } = useAppSelector((state) => state.editor);

  const run = () => dispatch(togglePlay(true));

  return (
    <IconButton aria-label='query' color='success' size='large' onClick={run} disabled={isPlay}>
      <PlayCircleOutlineIcon fontSize='inherit' />
    </IconButton>
  );
}
