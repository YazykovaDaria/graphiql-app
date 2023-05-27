import { useAppSelector } from 'src/hooks/reduxHooks';
import { Docs } from './Docs';

export function DocsExplorer() {
  const { scheema } = useAppSelector((state) => state.docs);
  const { data } = scheema;
  // console.log(data);

  return <div>{data ? <Docs /> : <p>data not found</p>}</div>;
}
