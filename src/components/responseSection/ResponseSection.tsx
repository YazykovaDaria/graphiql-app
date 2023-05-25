import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { togglePlay } from 'src/store/slices/responseSectionSlice';
import { useGetGraphQueryMutation } from 'src/store/api/graphQueryApi';
import { useEffect, useState } from 'react';

export function ResponseSection() {
  const { isPlay } = useAppSelector((state) => state.response);
  const [getQuery] = useGetGraphQueryMutation();
  const dispatch = useAppDispatch();
  const { query, variables } = useAppSelector((state) => state.editor);
  const [data, setData] = useState('');

  useEffect(() => {
    const run = async () => {
      if (isPlay) {
        try {
          const res = await getQuery({
            newQuery: query,
            newVariables: variables,
          });
          if ('data' in res) {
            setData(JSON.stringify(res.data, null, 2));
          } else if ('error' in res) {
            setData(JSON.stringify(res.error, null, 2));
          }
        } catch (err) {
          console.log(`Add error handing in response component. Error - ${err}`);
        } finally {
          dispatch(togglePlay(false));
        }
      }
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay, getQuery]);

  return (
    <div>
      {data && (
        <pre
          style={{
            whiteSpace: 'pre-line',
            wordBreak: 'break-all',
          }}
        >
          {data}
        </pre>
      )}
    </div>
  );
}
