import { useGetGraphQueryMutation } from 'src/store/api/graphQueryApi';
import { useEffect } from 'react';

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
      alert(JSON.stringify(docs));
    };
    run();
  }, [getDocs]);

  return <p>Docs</p>;
}
