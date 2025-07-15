# EIP-1559 Visualization - MDX Structure

## Overview

The EIP-1559 visualization has been restructured to use MDX for better content management and documentation.

## File Structure

```
src/
├── components/
│   └── EthereumGasMachine.tsx    # React component with visualization logic
└── pages/
    └── eip1559.mdx               # MDX page with content and component import
```

## Benefits of MDX Structure

1. **Better Content Management**: Markdown content is easier to edit and maintain
2. **Rich Documentation**: Can include detailed explanations alongside the interactive component
3. **SEO Friendly**: Better structured content for search engines
4. **Reusable Component**: The visualization component can be imported into other pages
5. **Better Developer Experience**: Syntax highlighting and better tooling for content editing

## Usage

The page is now accessible at `/eip1559` and includes:
- Interactive blockchain visualization
- Real-time data toggle
- Comprehensive documentation about EIP-1559
- Technical implementation details
- Setup instructions for API integration

## Component Features

- **Real-time Data**: Fetches live Ethereum block data via Etherscan API
- **Fallback Mode**: Works with sample data when API is unavailable
- **Responsive Design**: Adapts to different screen sizes
- **Error Handling**: Graceful fallbacks and user feedback
- **Performance Optimized**: Efficient state management and API calls

## Configuration

Copy `.env.local.example` to `.env.local` and add your Etherscan API key to enable real-time data features.
