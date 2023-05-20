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
    // добавить обработку ошибок
    const run = async () => {
      if (isPlay) {
        const res = await getQuery({
          newQuery: query,
          newVariables: variables,
        });

        setData(JSON.stringify(res, null, 2));
        dispatch(togglePlay(false));
      }
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay, getQuery]);

  return <div>{data && <pre>{data}</pre>}</div>;
}
