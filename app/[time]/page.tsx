import { Metadata } from 'next';
import { getTimeDescription } from '@/lib/time';
import Link from 'next/link';
import CodeBlock from '../components/CodeBlock';

interface Props {
  params: Promise<{ time: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { time } = await params;

  try {
    const { formatted } = getTimeDescription(time);
    return {
      title: `slee.pt/${time} - API with ${formatted} delay`,
      description: `Generate API responses with a ${formatted} delay. Perfect for testing timeouts, loading states, and async behavior.`,
    };
  } catch {
    return {
      title: `slee.pt/${time} - Delayed API Response`,
      description: 'Generate delayed API responses for testing purposes.',
    };
  }
}

export default async function DelayPage({ params }: Props) {
  const { time } = await params;

  let timeInfo;
  let isValid = true;

  try {
    timeInfo = getTimeDescription(time);
  } catch {
    isValid = false;
  }

  const curlExample = `curl -X POST https://slee.pt/${time} \\
  -H "Content-Type: application/json" \\
  -d '{"data": "your custom data"}'`;

  const curlEmptyExample = `curl -X POST https://slee.pt/${time} \\
  -H "Content-Type: application/json" \\
  -d '{}'`;

  const jsExample = `fetch('https://slee.pt/${time}', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    data: { message: 'Hello' }
  })
})
.then(res => res.json())
.then(data => console.log(data));`;

  const pythonExample = `import requests

response = requests.post(
    'https://slee.pt/${time}',
    json={'data': 'your data'}
)
print(response.json())`;

  const getExample = `# Also available via /api/delay endpoint:
curl "https://slee.pt/api/delay?time=${time}"`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <Link href="/" className="inline-block mb-6 text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300">
            ← Back to home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              slee.pt/{time}
            </span>
          </h1>
          {isValid && timeInfo ? (
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              API endpoint with <span className="font-semibold text-zinc-900 dark:text-zinc-100">{timeInfo.formatted}</span> delay
            </p>
          ) : (
            <p className="text-xl text-red-600 dark:text-red-400">
              Invalid time format. Try /5s, /240, /1m, /30ms
            </p>
          )}
        </div>

        {/* Expected Response */}
        {isValid && timeInfo && (
          <div className="mb-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Expected Response</h2>
            <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <p><span className="font-medium text-zinc-900 dark:text-zinc-100">Delay:</span> {timeInfo.formatted} ({timeInfo.ms}ms)</p>
              <p><span className="font-medium text-zinc-900 dark:text-zinc-100">Maximum:</span> 5 minutes (300s)</p>
              <p><span className="font-medium text-zinc-900 dark:text-zinc-100">Response:</span> JSON with timestamp and delay info</p>
            </div>
          </div>
        )}

        {/* Usage Examples */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">Usage Examples</h2>

            {/* cURL POST with data */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3 text-zinc-800 dark:text-zinc-200">cURL with Payload</h3>
              <CodeBlock code={curlExample} />
            </div>

            {/* cURL POST without data */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3 text-zinc-800 dark:text-zinc-200">cURL without Payload (Optional)</h3>
              <CodeBlock code={curlEmptyExample} />
            </div>

            {/* JavaScript/Fetch */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3 text-zinc-800 dark:text-zinc-200">JavaScript (Fetch API)</h3>
              <CodeBlock code={jsExample} language="javascript" />
            </div>

            {/* Python */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3 text-zinc-800 dark:text-zinc-200">Python (Requests)</h3>
              <CodeBlock code={pythonExample} language="python" />
            </div>

            {/* GET Request */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3 text-zinc-800 dark:text-zinc-200">Alternative API Endpoint</h3>
              <CodeBlock code={getExample} />
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Common Use Cases</h2>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Testing timeout handling in applications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Simulating slow network conditions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Testing loading states in UI components</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Debugging async/await behavior</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Rate limiting and throttling tests</span>
              </li>
            </ul>
          </div>

          {/* Time Format Guide */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Time Format Guide</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-2 text-zinc-900 dark:text-zinc-100">Supported formats:</p>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-mono text-sm">
                  <li>• 240 (seconds, default)</li>
                  <li>• 5s (seconds)</li>
                  <li>• 2m (minutes)</li>
                  <li>• 1h (hours)</li>
                  <li>• 500ms (milliseconds)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2 text-zinc-900 dark:text-zinc-100">Examples:</p>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
                  <li>• /5s → 5 seconds</li>
                  <li>• /240 → 240 seconds</li>
                  <li>• /1.5m → 90 seconds</li>
                  <li>• /100ms → 0.1 seconds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
