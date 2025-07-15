# EIP-1559 Real-time Data Setup

## Using Real-time Ethereum Block Data

The EIP-1559 visualization page now supports both static sample data and real-time Ethereum block data.

### Setup Instructions

1. **Get an Etherscan API Key** (Free)
   - Visit [https://etherscan.io/apis](https://etherscan.io/apis)
   - Create a free account
   - Generate an API key

2. **Configure Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Replace `your_etherscan_api_key_here` with your actual API key

3. **Enable Real-time Data**
   - Visit the EIP-1559 page (`/eip1559`)
   - Check the "Use Real-time Ethereum Data" checkbox
   - The page will fetch the latest 20 blocks from the Ethereum mainnet

### Features

- **Fallback Mode**: Works without an API key using sample data
- **Real-time Mode**: Fetches current Ethereum block data via Etherscan API
- **Error Handling**: Gracefully falls back to sample data if API fails
- **Loading States**: Shows loading indicators while fetching data

### API Limitations

- Etherscan free tier: 5 calls/second, 100,000 calls/day
- Rate limiting is handled automatically
- No authentication required for basic usage

### Data Processing

The app automatically converts:
- Hex values to decimal
- Wei to ETH and Gwei
- Calculates gas usage percentages
- Estimates burnt fees and validator rewards

### Alternative APIs

You can easily modify the `fetchBlockData` function to use other Ethereum APIs:
- Alchemy
- Infura
- QuickNode
- Moralis

Just update the API endpoints and data parsing logic in the fetch functions.
