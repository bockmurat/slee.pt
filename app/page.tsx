import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              slee.pt
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            A dead simple API for delayed responses.<br />
            Perfect for testing timeouts, loading states, and async behavior.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/5s"
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-full font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
            >
              Try /5s
            </Link>
            <Link
              href="/240"
              className="px-8 py-3 border-2 border-zinc-300 dark:border-zinc-700 rounded-full font-medium hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              Try /240
            </Link>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100">Quick Start</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
              <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">With Payload</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                POST to the delay path with your data - it will be echoed back:
              </p>
              <pre className="overflow-x-auto rounded-xl bg-zinc-900 dark:bg-zinc-950 p-4 text-sm text-zinc-100 border border-zinc-800">
                <code>{`curl -X POST https://slee.pt/5s \\
  -H "Content-Type: application/json" \\
  -d '{"data": {"message": "Hello!"}}'`}</code>
              </pre>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-4">
                Your payload will be returned after 5 seconds.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
              <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Without Payload</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Payload is optional - just POST with an empty body:
              </p>
              <pre className="overflow-x-auto rounded-xl bg-zinc-900 dark:bg-zinc-950 p-4 text-sm text-zinc-100 border border-zinc-800">
                <code>{`curl -X POST https://slee.pt/3s \\
  -H "Content-Type: application/json" \\
  -d '{}'`}</code>
              </pre>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-4">
                Perfect for simple timeout testing.
              </p>
            </div>
          </div>
        </div>

        {/* Time Formats */}
        <div className="mb-20 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Supported Time Formats</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Format</h3>
              <div className="space-y-3 font-mono text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-3">
                  <code className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">240</code>
                  <span className="text-sm">→ 240 seconds (default)</span>
                </div>
                <div className="flex items-center gap-3">
                  <code className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">5s</code>
                  <span className="text-sm">→ 5 seconds</span>
                </div>
                <div className="flex items-center gap-3">
                  <code className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">2m</code>
                  <span className="text-sm">→ 2 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <code className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">1h</code>
                  <span className="text-sm">→ 1 hour</span>
                </div>
                <div className="flex items-center gap-3">
                  <code className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">500ms</code>
                  <span className="text-sm">→ 500 milliseconds</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Limits</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start">
                  <span className="mr-2 text-zinc-400">•</span>
                  <span>Maximum delay: <strong className="text-zinc-900 dark:text-zinc-100">5 minutes (300s)</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-zinc-400">•</span>
                  <span>Minimum delay: <strong className="text-zinc-900 dark:text-zinc-100">0ms</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-zinc-400">•</span>
                  <span>Decimal values supported: <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">1.5s</code></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Response Format */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100">Response Format</h2>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              All successful responses return JSON with the following structure:
            </p>
            <pre className="overflow-x-auto rounded-xl bg-zinc-900 dark:bg-zinc-950 p-6 text-sm text-zinc-100 border border-zinc-800">
              <code>{`{
  "success": true,
  "delayed_by": 5000,
  "requested_delay": "5s",
  "timestamp": "2025-11-19T02:30:45.123Z",
  "data": {
    "message": "Your custom payload"
  },
  "url": null
}`}</code>
            </pre>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Testing Timeouts',
                description: 'Verify your application handles slow responses gracefully',
                example: '/30s'
              },
              {
                title: 'Loading States',
                description: 'Test UI loading indicators and skeleton screens',
                example: '/2s'
              },
              {
                title: 'Rate Limiting',
                description: 'Simulate API rate limits and throttling behavior',
                example: '/1m'
              },
              {
                title: 'Network Conditions',
                description: 'Emulate slow network or high-latency scenarios',
                example: '/10s'
              },
              {
                title: 'Async Workflows',
                description: 'Debug complex async/await patterns',
                example: '/5s'
              },
              {
                title: 'Error Handling',
                description: 'Test timeout error boundaries and retry logic',
                example: '/60s'
              }
            ].map((useCase, idx) => (
              <Link
                key={idx}
                href={useCase.example}
                className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                  {useCase.description}
                </p>
                <code className="text-sm text-zinc-500 dark:text-zinc-500">
                  Example: {useCase.example} →
                </code>
              </Link>
            ))}
          </div>
        </div>

        {/* Language Examples */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100">Code Examples</h2>
          <div className="space-y-6">
            {/* JavaScript */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
              <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">JavaScript / TypeScript</h3>
              <pre className="overflow-x-auto rounded-xl bg-zinc-900 dark:bg-zinc-950 p-4 text-sm text-zinc-100 border border-zinc-800">
                <code>{`async function testDelay() {
  const response = await fetch('https://slee.pt/3s', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: { userId: 123, action: 'test' }
    })
  });

  const result = await response.json();
  console.log(result);
  // Your data is returned after 3 seconds
}`}</code>
              </pre>
            </div>

            {/* Python */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
              <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Python</h3>
              <pre className="overflow-x-auto rounded-xl bg-zinc-900 dark:bg-zinc-950 p-4 text-sm text-zinc-100 border border-zinc-800">
                <code>{`import requests

response = requests.post(
    'https://slee.pt/5s',
    json={'data': {'user_id': 123, 'action': 'test'}}
)

result = response.json()
print(result)
# Your data is returned after 5 seconds`}</code>
              </pre>
            </div>

            {/* Go */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
              <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Go</h3>
              <pre className="overflow-x-auto rounded-xl bg-zinc-900 dark:bg-zinc-950 p-4 text-sm text-zinc-100 border border-zinc-800">
                <code>{`package main

import (
    "bytes"
    "encoding/json"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "data": map[string]interface{}{"userId": 123},
    }

    body, _ := json.Marshal(payload)
    resp, _ := http.Post(
        "https://slee.pt/2s",
        "application/json",
        bytes.NewBuffer(body),
    )
    defer resp.Body.Close()
}`}</code>
              </pre>
            </div>

            {/* Rust */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
              <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Rust</h3>
              <pre className="overflow-x-auto rounded-xl bg-zinc-900 dark:bg-zinc-950 p-4 text-sm text-zinc-100 border border-zinc-800">
                <code>{`use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let res = client
        .post("https://slee.pt/4s")
        .json(&json!({"data": {"userId": 123}}))
        .send()
        .await?;

    let body = res.json::<serde_json::Value>().await?;
    println!("{:?}", body);
    Ok(())
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is there a rate limit?',
                a: 'Currently there are no rate limits, but please use responsibly.'
              },
              {
                q: 'What is the maximum delay?',
                a: 'The maximum delay is 5 minutes (300 seconds) to prevent timeout issues.'
              },
              {
                q: 'Can I pass custom data?',
                a: 'Yes! Include a "data" field in your POST request body, and it will be returned in the response after the delay. The payload is completely optional - you can POST with an empty body {} if you just need a delay.'
              },
              {
                q: 'Is this service free?',
                a: 'Yes, completely free and open for testing purposes.'
              },
              {
                q: 'Can I use this in production?',
                a: 'This service is intended for development and testing. For production, consider self-hosting or using a dedicated service.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
                <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                  {faq.q}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-zinc-500 dark:text-zinc-500 text-sm">
          <p>Built with Next.js • Open source • No tracking</p>
        </div>
      </div>
    </div>
  );
}
