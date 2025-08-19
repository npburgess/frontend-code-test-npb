import ReactMarkdown from 'react-markdown';
import readmeContent from '../../README.md?raw';
import { Card } from 'flowbite-react';

export function Home() {
  return (
    <Card className="max-w-4xl p-6">
      <div className="prose dark:prose-invert">
        <ReactMarkdown>{readmeContent}</ReactMarkdown>
      </div>
    </Card>
  );
}
