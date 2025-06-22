# Technical Context: Relic of Lies

## Technology Stack

### Frontend
- Next.js 15.3.3
- React 19.0.0
- TypeScript
- Shadcn UI
- GraphQL Code Generator
- Apollo Client 3.13.8
- Tailwind CSS 4
- WebSocket client
- WalletKit for Sui integration
- Sui SDK

### Backend
- NestJS
- Apollo Server
- GraphQL
- Prisma ORM
- PostgreSQL
- Colyseus (real-time game server)
- WebSocket server
- Sui blockchain integration
- Game state management

### Smart Contracts
- Move language (2024.beta edition)
- Sui blockchain
- Game contract for match management
- Staking and reward distribution
- Commit-reveal verification
- Contract testing framework

### Development Tools
- npm
- TypeScript
- ESLint
- Prettier
- Jest
- Docker
- GitHub Actions
- Sui CLI
- Move Analyzer
- Move Prover (for contract verification)

### Deployment
- Docker-based deployment
- GitHub Actions CI/CD pipeline
- VPS hosting
- Automated database migrations
- Docker Compose for orchestration
- Sui testnet/mainnet deployment
- Contract verification and publishing

## Development Setup

### Prerequisites
- Node.js (LTS)
- PostgreSQL
- npm
- Git
- Sui CLI
- Move Analyzer
- Move Prover

### Environment Variables
- Database connection
- Sui network configuration
- Game contract address
- API keys
- Service endpoints
- Wallet configuration
- Contract verification keys
- Colyseus server configuration

### Development Workflow
1. Clone repository
2. Install dependencies
3. Set up environment
4. Deploy smart contracts
5. Start development servers
6. Run database migrations
7. Run contract tests

## Technical Constraints
- Real-time game state synchronization
- Turn-based gameplay requirements
- Anti-cheat commit-reveal system
- Staking and reward distribution
- Scalability needs
- Mobile responsiveness
- Blockchain transaction costs
- Wallet compatibility
- Game session management
- Contract upgradeability
- Gas optimization

## Dependencies
- Colyseus game server
- Image storage service
- Email service
- Sui blockchain network
- Wallet providers
- Move standard library
- Sui framework

## Performance Requirements
- Fast page loads
- Real-time updates
- Low latency gameplay
- Reliable game state
- Secure data handling
- Quick wallet connections
- Fast transaction processing
- Low transaction latency
- Efficient contract execution
- Minimal gas usage

## Development Scripts
- `npm run dev`: Run both frontend and backend concurrently
- `npm run dev:api`: Run backend only
- `npm run dev:web`: Run frontend only
- `npm run codegen`: Generate GraphQL types and operations
- `npm run test:contracts`: Run Move contract tests
- `npm run verify:contracts`: Verify contract code
- `npm run deploy:contracts`: Deploy contracts to Sui network