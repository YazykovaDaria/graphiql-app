import { IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useGetGraphQueryMutation } from 'src/store/api/graphQueryApi';

export function QueryButton() {
  const [getQuery] = useGetGraphQueryMutation();

  const run = async () => {
    const y = await getQuery({
      newQuery: `query ($id: Int) {
        Media(id: $id, type: ANIME){
          id
          status
        }
      }`,
      newVariables: `{
        "id": 15125
      }`,
    });
    console.log(y);
  };
  return (
    <IconButton aria-label='query' color='success' size='large' onClick={run}>
      <PlayCircleOutlineIcon fontSize='inherit' />
    </IconButton>
  );
}
