# Product Context: Relic of Lies

## Problem Statement
Traditional card games lack transparency, fair play guarantees, and the ability to earn real rewards. Players often face issues with cheating, lack of verifiable game outcomes, and no way to monetize their gaming skills. Existing Web3 games often sacrifice gameplay quality for blockchain integration.

## Solution
Relic of Lies provides a Web3 card game where:
- Players connect via Sui wallet for decentralized identity
- Game mechanics are enforced by smart contracts for fairness
- Players can stake Sui coins to compete for rewards
- Real-time multiplayer experience with Colyseus integration
- Commit-reveal system prevents cheating and ensures fair play
- Turn-based elimination gameplay with strategic depth

## User Experience Goals
- Intuitive card game interface with clear game state
- Smooth real-time multiplayer experience
- Transparent staking and reward system
- Easy wallet connection and transaction management
- Clear game rules and card effects
- Engaging fantasy dungeon theme
- Fair and verifiable gameplay outcomes

## Key Features
1. Game System
   - 2-6 player matches
   - Best-of-N round system (3 points to win)
   - Turn-based elimination gameplay
   - 10 unique cards with special effects
   - Real-time game state synchronization

2. Staking System
   - Optional staking for matches
   - Automatic reward distribution to winners
   - Transparent pot management
   - Fair distribution via smart contracts

3. Real-time Experience
   - WebSocket-based communication
   - Live game state updates
   - Player turn indicators
   - Action history and logs

## Core User Flow
1. Wallet Connection
   - User connects Sui wallet
   - System creates/retrieves player profile

2. Room Creation/Joining
   - Create room with optional stake
   - Join existing room with room code
   - Commit card hash to blockchain

3. Gameplay
   - Host starts the match
   - Players take turns playing cards
   - Backend validates moves and updates state
   - Real-time updates via WebSocket

4. Round Management
   - Players reveal cards with salt
   - System determines round winner
   - Points are awarded
   - New round begins or match ends

5. Reward Distribution
   - Match winner receives pot
   - Smart contract handles distribution
   - Game session resets for new match

## Purpose
This monorepo exists to provide a complete Web3 card game experience with blockchain integration, real-time multiplayer capabilities, and fair play guarantees through smart contracts.

## Problems Solved
1. Lack of transparency in traditional card games
2. Cheating and unfair play in online games
3. No way to earn real rewards from gaming
4. Poor real-time multiplayer experience in Web3 games
5. Complex blockchain integration that sacrifices gameplay

## How It Works
The game provides:
1. Smart contract-enforced game rules
2. Real-time multiplayer via Colyseus
3. Transparent staking and rewards
4. Anti-cheat commit-reveal system
5. Engaging fantasy-themed gameplay

## Success Metrics
1. Number of active players and matches
2. Game completion rates
3. Staking volume and distribution
4. Player retention and engagement
5. Smart contract security and reliability
6. Real-time performance metrics 