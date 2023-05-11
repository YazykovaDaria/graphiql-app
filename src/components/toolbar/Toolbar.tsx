import { useAppSelector } from 'src/hooks/reduxHooks';
// import { updateQuery } from 'src/store/slices/editorSlice';
import { useGetGraphQueryMutation } from 'src/store/api/graphQueryApi';

export function Toolbar() {
  const { query } = useAppSelector((state) => state.editor);
  const [getQuery] = useGetGraphQueryMutation();
  // console.log(data);

  const prettier = () => {
    const y = JSON.parse(query);
    const j = JSON.stringify(y, null, 2);
    console.log(y, j);
  };

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
    <>
      <button type='button' onClick={run}>
        Run
      </button>
      <button type='button' onClick={prettier}>
        Prettier
      </button>
      <button type='button'>Docs</button>
    </>
  );
}
