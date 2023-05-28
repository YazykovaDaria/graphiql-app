import { useAppSelector } from 'src/hooks/reduxHooks';
import { DocsRouter } from './DocsRouter';

export function DocsExplorer() {
  const { scheema } = useAppSelector((state) => state.docs);
  const { data } = scheema;
  // console.log(data);

  return <div>{data ? <DocsRouter /> : <p>data not found</p>}</div>;
}
