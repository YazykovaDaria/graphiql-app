import { Toolbar } from 'src/components/toolbar/Toolbar';
import { Editor } from 'src/components/editor/Editor';
import { ResponseSection } from 'src/components/responseSection/ResponseSection';

export function MainPage() {
  return (
    <div>
      <Toolbar />
      <Editor />
      <ResponseSection />
    </div>
  );
}
