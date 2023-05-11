import { useGetGraphQueryMutation } from 'src/store/api/graphQueryApi';
import { useEffect } from 'react';
// костя, это просто пример запроса, я не уверена что тут есть все нужные данные, смотри нужную схему в документашке апи
// и с типизацией ответа сервака я пока не разобралась
export function DocsExplorer() {
  const [getDocs] = useGetGraphQueryMutation();

  useEffect(() => {
    const run = async () => {
      const docs = await getDocs({
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
      console.log(docs);
    };
    run();
  }, [getDocs]);

  return <p>Docs</p>;
}
