import { useGetGraphQueryMutation } from 'src/store/api/graphQueryApi';
import { useEffect } from 'react';
// костя, это просто пример запроса, я не уверена что тут есть все нужные данные, смотри нужную схему в документашке апи
export function DocsExplorer() {
  const [getDocs] = useGetGraphQueryMutation();

  useEffect(() => {
    const docs = async () => {
      const y = await getDocs({
        newQuery: `query {
          __schema{
        queryType{
          kind
          name
          description
          fields {
            name
            description
            args {
              description
              defaultValue
            }
            type {
              name
              description
            }
          }
        }
          }
        }`,
      });
      console.log(y);
    };
    docs();
  }, [getDocs]);

  return <p>Docs</p>;
}
