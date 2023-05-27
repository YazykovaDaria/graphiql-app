import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { togglePlay } from 'src/store/slices/responseSectionSlice';
import { useGetGraphQueryMutation } from 'src/store/api/graphQueryApi';
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

export function ResponseSection() {
  const { isPlay } = useAppSelector((state) => state.response);
  const [getQuery] = useGetGraphQueryMutation();
  const dispatch = useAppDispatch();
  const { query, variables } = useAppSelector((state) => state.editor);
  const [data, setData] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

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
            if ('status' in res.error) {
              if (res.error.status === 400) {
                setData(JSON.stringify(res.error, null, 2));
              } else enqueueSnackbar(t('main.networkError'), { variant: 'error' });
            }
          }
        } catch (err) {
          enqueueSnackbar(`${err}`, { variant: 'error' });
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