# slee.pt

A dead simple API service for delayed responses. Perfect for testing timeouts, loading states, and async behavior.

## Features

- **Flexible Time Formats**: Support for milliseconds, seconds, minutes, and hours (e.g., `500ms`, `5s`, `2m`, `1h`)
- **Custom Payloads**: Send data in POST requests and receive it back after the delay
- **GET & POST Support**: Use query parameters or request body
- **SEO Optimized**: Programmatic sitemap with common use cases
- **Dynamic Documentation**: Each delay endpoint shows specific usage examples
- **Type-Safe**: Built with TypeScript

## Quick Start

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### Production

```bash
npm run build
npm start
```

## API Usage

### POST Request

```bash
curl -X POST https://slee.pt/api/delay \
  -H "Content-Type: application/json" \
  -d '{
    "time": "5s",
    "data": {"message": "Your custom payload"}
  }'
```

### GET Request

```bash
curl "https://slee.pt/api/delay?time=5s"
```

## Time Formats

| Format | Example | Description |
|--------|---------|-------------|
| Plain number | `240` | Seconds (default) |
| Milliseconds | `500ms` | Milliseconds |
| Seconds | `5s` | Seconds |
| Minutes | `2m` | Minutes |
| Hours | `1h` | Hours |
| Decimal | `1.5s` | Decimal values supported |

**Maximum delay**: 5 minutes (300 seconds)

## Response Format

```json
{
  "success": true,
  "delayed_by": 5000,
  "requested_delay": "5s",
  "timestamp": "2025-11-19T02:30:45.123Z",
  "data": {
    "message": "Your custom payload"
  },
  "url": null
}
```

## Project Structure

```
├── app/
│   ├── [time]/          # Dynamic route for delay-specific pages
│   ├── api/delay/       # API route handler
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Landing page
│   ├── sitemap.ts       # Programmatic sitemap
│   └── robots.ts        # Robots.txt
├── lib/
│   └── time.ts          # Time parsing utilities
└── public/              # Static assets
```

## Use Cases

- Testing timeout handling
- Simulating slow network conditions
- Testing UI loading states
- Debugging async/await behavior
- Rate limiting tests
- Error boundary testing

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: Edge Runtime
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (recommended)

## Development

### Adding New Features

The codebase is organized for easy extension:

- **Time parsing**: Edit `lib/time.ts`
- **API logic**: Edit `app/api/delay/route.ts`
- **SEO/Sitemap**: Edit `app/sitemap.ts`
- **Documentation**: Edit `app/page.tsx` or `app/[time]/page.tsx`

### Environment

- Node.js 18+ required
- No environment variables needed
- No database required

## License

MIT

## Contributing

Contributions welcome! Please open an issue or PR.

---

Built with ❤️ using Next.js
# slee.pt
