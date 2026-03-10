# ClasherStats - API

A Node.js/Express API server that proxies requests to the official Clash of Clans API. Includes all available endpoints with rate limiting, security middleware, and input validation.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- 🔐 **Secure** - Helmet, CORS, rate limiting, input validation
- 🚀 **Fast** - Response caching to reduce upstream API calls and avoid 429s
- 📦 **Complete** - All Clash of Clans API endpoints implemented
- 🛡️ **Protected** - API key stored securely in environment variables
- 📝 **Logged** - Request logging; optional debug logs for cache hits

## 📦 Response Caching

GET responses are cached in memory so the CoC API is only called when data is missing or expired:

| Data type | TTL | Examples |
|-----------|-----|----------|
| Leagues, locations, labels, gold pass | 15 min | `/leagues`, `/locations`, `/labels/players`, `/goldpass/current` |
| Player / clan by tag | 2 min | `/players/%23XXX`, `/clans/%23XXX` |
| Other | 5 min | Clan search, leaderboards |

Set `DEBUG=true` in `.env` to log cache hits.

## 🌐 API Endpoints

Base path: **`/api/v1`** (or `/api` for backward compatibility).

### Players
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/players?playerTag=XXX` | Get player info |
| POST | `/api/v1/players/verify?playerTag=XXX` | Verify player token |

### Clans
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/clans?clanTag=XXX` | Get clan info |
| GET | `/api/v1/clans/members?clanTag=XXX` | Get clan members |
| GET | `/api/v1/clans/warlog?clanTag=XXX` | Get war log |
| GET | `/api/v1/clans/currentwar?clanTag=XXX` | Get current war |
| GET | `/api/v1/clans/currentwar/leaguegroup?clanTag=XXX` | Get CWL group |
| GET | `/api/v1/clans/clanwarleagues/wars?warTag=XXX` | Get CWL war |
| GET | `/api/v1/clans/capitalraidseasons?clanTag=XXX` | Get raid seasons |

### Locations & Rankings
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/locations` | Get all locations |
| GET | `/api/v1/locations/:id` | Get location by ID |
| GET | `/api/v1/locations/:id/rankings/clans` | Top clans |
| GET | `/api/v1/locations/:id/rankings/players` | Top players |
| GET | `/api/v1/locations/:id/rankings/clans-builder-base` | Top BB clans |
| GET | `/api/v1/locations/:id/rankings/players-builder-base` | Top BB players |
| GET | `/api/v1/locations/:id/rankings/capitals` | Top clan capitals |

### Leagues
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/leagues` | All regular leagues |
| GET | `/api/v1/leagues/:id` | League by ID |
| GET | `/api/v1/leagues/:id/seasons` | Legend League seasons |
| GET | `/api/v1/leagues/:id/seasons/:seasonId` | Season rankings |
| GET | `/api/v1/warleagues` | All war leagues |
| GET | `/api/v1/warleagues/:id` | War league by ID |
| GET | `/api/v1/capitalleagues` | All capital leagues |
| GET | `/api/v1/capitalleagues/:id` | Capital league by ID |
| GET | `/api/v1/builderbaseleagues` | All BB leagues |
| GET | `/api/v1/builderbaseleagues/:id` | BB league by ID |

### Labels
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/labels/players` | Player labels |
| GET | `/api/v1/labels/clans` | Clan labels |

### Gold Pass
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/goldpass/current` | Current gold pass season |

### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Server health status |

## 📁 Project Structure

```
api-clashofclans/
├── config/
│   ├── cors.js          # CORS allowed origins
│   ├── rateLimit.js     # Rate limit middleware
│   └── security.js      # Helmet, HPP, body parser, timeout
├── api/
│   ├── controllers/     # Route handlers
│   ├── models/          # CoC API calls (player, clan, league, etc.)
│   ├── routes/          # Route definitions
│   │   └── index.js     # Mounts all route modules
│   ├── middleware/
│   │   ├── requestLogger.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   └── utils/
│       └── apiClient.js # Axios + response caching
├── .env                 # COC_API_KEY, PORT, NODE_ENV, DEBUG (optional)
├── index.js             # Server entry point
├── package.json
└── vercel.json          # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm
- Clash of Clans API key from [developer.clashofclans.com](https://developer.clashofclans.com)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/api-clashofclans.git
cd api-clashofclans
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
PORT=8000
COC_API_KEY=your_api_key_here
NODE_ENV=development
# DEBUG=true   # Optional: log cache hits
```

4. Start the server:
```bash
npm start
# or for development with nodemon
npm run dev
```

5. Test the API:
```bash
curl http://localhost:8000/health
```

## 🔑 API Key Setup

1. Go to [developer.clashofclans.com](https://developer.clashofclans.com)
2. Create an account and log in
3. Create a new API key
4. **Important**: Whitelist IP `45.79.218.79` (RoyaleAPI proxy server)
5. Copy the key to your `.env` file

> **Note**: We use the RoyaleAPI proxy to avoid IP whitelisting issues during development.

## 🔒 Security Features

| Feature | Description |
|---------|-------------|
| **Helmet** | Sets security HTTP headers |
| **CORS** | Restricts origins to allowed domains |
| **Rate Limiting** | 30 requests/minute per IP |
| **HPP** | Prevents HTTP parameter pollution |
| **Input Validation** | Sanitizes and validates all inputs |
| **Body Size Limit** | Max 10kb request body |
| **Request Timeout** | 30 second timeout |

### Allowed Origins

Edit `config/cors.js` to add domains, or set env var:

```bash
ALLOWED_ORIGINS=https://your-frontend.vercel.app,https://another.domain.com
```

## 📊 Rate Limits

| Scope | Limit |
|-------|-------|
| General | 100 requests / 15 minutes |
| API endpoints | 30 requests / minute |

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel dashboard:
   - `COC_API_KEY`
   - `NODE_ENV=production`

### Other Platforms

The API can be deployed on:
- **Railway**
- **Render**
- **Heroku**
- **DigitalOcean**
- Any Node.js hosting

## 📝 Example Requests

### Get Player Info
```bash
curl "http://localhost:8000/api/v1/players?playerTag=29PUGJQ9P"
```

### Get Clan Info
```bash
curl "http://localhost:8000/api/v1/clans?clanTag=2P9C9U9Y"
```

### Get India Rankings
```bash
curl "http://localhost:8000/api/v1/locations/32000113/rankings/players"
```

### Get Legend League Seasons
```bash
curl "http://localhost:8000/api/v1/leagues/29000022/seasons"
```

## 🐛 Debugging

Enable detailed logging by checking the console output:

```
=== Player Controller Initialized ===
COC_API_KEY loaded: Yes

=== New Player Request ===
Query params: { playerTag: '29PUGJQ9P' }
Searching for player: 29PUGJQ9P
Player found: PlayerName
```

## 📄 License

MIT License - feel free to use this project for learning or personal use.

## 🙏 Acknowledgments

- [Clash of Clans API](https://developer.clashofclans.com/)
- [RoyaleAPI Proxy](https://docs.royaleapi.com/#/proxy) - For handling IP whitelisting
- Supercell for the amazing game

