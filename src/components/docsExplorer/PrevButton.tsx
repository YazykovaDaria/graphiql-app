import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
import { delRout } from 'src/store/slices/docsSlice';

export function PrevButton() {
  const dispatch = useAppDispatch();
  const { rout } = useAppSelector((state) => state.docs);
  const isDisabled = rout.length === 1;

  const onClick = () => dispatch(delRout());

  return (
    <div>
      <IconButton aria-label='query' size='small' onClick={onClick} disabled={isDisabled}>
        <ArrowBackIosIcon fontSize='inherit' />
      </IconButton>
    </div>
  );
}
