import { QueryButton } from '../queryButton/QueryButton';
import { DocsButton } from '../docsButton/DocsButton';
import { PrettyButton } from '../prettyButton/PrettyButton';

export function Toolbar() {
  return (
    <div>
      <DocsButton />
      <QueryButton />
      <PrettyButton />
    </div>
  );
}
