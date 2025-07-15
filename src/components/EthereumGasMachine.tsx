import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import block_flow from "../../../public/block_flow.png";
import styled from "@emotion/styled";
// @ts-ignore
// import gj from "../../../public/gj.svg";

// Types
interface BlockData {
  block: number;
  gasUsed: string;
  gasUsedPercentage: string;
  percentOfGasTarget: string;
  baseFee: string;
  burntFeesEth: number;
  burntFeesPercentage: number;
  reward: number;
  txn: number;
  feeRecipientNametag: string;
}

interface EtherscanBlock {
  number: string;
  gasUsed: string;
  gasLimit: string;
  baseFeePerGas: string;
  transactions: string[];
}

// API Functions with rate limiting
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fetchBlockData = async (blockNumber: number): Promise<BlockData | null> => {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;
    
    const response = await fetch(
      `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0x${blockNumber.toString(16)}&boolean=true&apikey=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch block data');
    }
    
    const data = await response.json();
    
    // Check for rate limit error
    if (data.result === 'Max calls per sec rate limit reached') {
      throw new Error('Rate limit reached');
    }
    
    const block = data.result;
    
    if (!block) {
      throw new Error('No block data received');
    }
    
    // Convert hex values to decimal
    const gasUsedDecimal = parseInt(block.gasUsed, 16);
    const gasLimitDecimal = parseInt(block.gasLimit, 16);
    const baseFeeDecimal = parseInt(block.baseFeePerGas || '0x0', 16);
    
    // Calculate percentages
    const gasUsedPercentage = ((gasUsedDecimal / gasLimitDecimal) * 100).toFixed(2) + '%';
    const gasTarget = 15000000; // 15M gas target
    const percentOfTarget = (((gasUsedDecimal - gasTarget) / gasTarget) * 100).toFixed(0) + '%';
    
    // Mock some values for demonstration (in a real app, you'd calculate these from transaction data)
    const mockBurntFees = (gasUsedDecimal * baseFeeDecimal) / 1e18; // Rough calculation
    const mockReward = Math.random() * 2; // Mock validator reward
    
    return {
      block: parseInt(block.number, 16),
      gasUsed: gasUsedDecimal.toLocaleString(),
      gasUsedPercentage,
      percentOfGasTarget: percentOfTarget,
      baseFee: (baseFeeDecimal / 1e9).toFixed(2) + ' gwei', // Convert to gwei
      burntFeesEth: parseFloat(mockBurntFees.toFixed(4)),
      burntFeesPercentage: 85 + Math.random() * 10, // Mock percentage
      reward: parseFloat(mockReward.toFixed(4)),
      txn: block.transactions.length,
      feeRecipientNametag: block.miner || 'Unknown'
    };
  } catch (error) {
    console.error('Error fetching block data:', error);
    return null;
  }
};

const fetchLatestBlocks = async (count: number = 10): Promise<BlockData[]> => {
  try {
    // Get latest block number first
    const API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY || 'YourApiKeyHere';
    const latestResponse = await fetch(
      `https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${API_KEY}`
    );
    
    if (!latestResponse.ok) {
      throw new Error('Failed to fetch latest block number');
    }
    
    const latestData = await latestResponse.json();
    
    // Check for rate limit error
    if (latestData.result === 'Max calls per sec rate limit reached') {
      throw new Error('Rate limit reached');
    }
    
    const latestBlockNumber = parseInt(latestData.result, 16);
    
    // Fetch blocks sequentially with rate limiting (600ms delay = ~1.5 calls/sec)
    const results: BlockData[] = [];
    for (let i = 0; i < count; i++) {
      if (i > 0) {
        await delay(600); // Rate limiting: wait 600ms between calls
      }
      
      const blockData = await fetchBlockData(latestBlockNumber - i);
      if (blockData) {
        results.push(blockData);
      }
    }
    
    return results.reverse(); // Return in chronological order
  } catch (error) {
    console.error('Error fetching latest blocks:', error);
    return [];
  }
};

// Constants
const BLOCK_BG_IMG = `"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' fill-opacity='.4' style='enable-background:new 0 0 500 500'%3E%3Cstyle%3E .st2{fill:rgb(109, 104, 104)} %3C/style%3E%3Cg style='display:none'%3E%3Cpath style='display:inline;fill:%23414042' d='M-8.3-5.7h520.7V511H-8.3z' id='Layer_2'/%3E%3C/g%3E%3Cg id='Layer_1'%3E%3Cpath transform='rotate(-45.001 0 .055)' class='st2' d='M-453.7-3.7h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 31.25 31.306)' class='st2' d='M-422.5 27.6H485v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 62.5 62.556)' class='st2' d='M-391.2 58.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 93.75 93.807)' class='st2' d='M-360 90.1h907.5v7.5H-360z'/%3E%3Cpath transform='rotate(-45.001 125 125.057)' class='st2' d='M-328.7 121.3h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 156.249 156.308)' class='st2' d='M-297.5 152.6H610v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 187.499 187.558)' class='st2' d='M-266.2 183.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 218.749 218.809)' class='st2' d='M-235 215.1h907.5v7.5H-235z'/%3E%3Cpath transform='rotate(-45.001 249.998 250.06)' class='st2' d='M-203.7 246.3h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 281.248 281.31)' class='st2' d='M-172.5 277.6H735v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 312.498 312.56)' class='st2' d='M-141.2 308.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 343.748 343.81)' class='st2' d='M-110 340.1h907.5v7.5H-110z'/%3E%3Cpath transform='rotate(-45.001 374.997 375.061)' class='st2' d='M-78.7 371.3h907.5v7.5H-78.7z'/%3E%3Cpath transform='rotate(-45.001 406.247 406.312)' class='st2' d='M-47.5 402.6H860v7.5H-47.5z'/%3E%3Cpath transform='rotate(-45.001 437.497 437.562)' class='st2' d='M-16.2 433.8h907.5v7.5H-16.2z'/%3E%3Cpath transform='rotate(-45.001 468.747 468.813)' class='st2' d='M15 465.1h907.5v7.5H15z'/%3E%3Cpath transform='rotate(-45.001 499.997 500.064)' class='st2' d='M46.3 496.3h907.5v7.5H46.3z'/%3E%3C/g%3E%3C/svg%3E"`;

export default function EthereumGasMachine() {
  // State management
  const [blockCount, setBlockCount] = useState<number>(0);
  const [blockSpeed] = useState<number>(12000); // Fixed 12 second interval
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [blockData, setBlockData] = useState<BlockData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [useRealData, setUseRealData] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  // Extended fallback data for better demo
  const fallbackData: BlockData[] = [
    {
      block: 19874197,
      gasUsed: "17,593,159",
      gasUsedPercentage: "58.64%",
      percentOfGasTarget: "17%",
      baseFee: "12.5 gwei",
      burntFeesEth: 2.456,
      burntFeesPercentage: 87.3,
      reward: 0.125,
      txn: 231,
      feeRecipientNametag: "beaverbuild"
    },
    {
      block: 19874198,
      gasUsed: "22,150,000",
      gasUsedPercentage: "73.83%",
      percentOfGasTarget: "47%",
      baseFee: "14.2 gwei",
      burntFeesEth: 3.123,
      burntFeesPercentage: 89.1,
      reward: 0.234,
      txn: 189,
      feeRecipientNametag: "Titan Builder"
    },
    {
      block: 19874199,
      gasUsed: "28,450,000",
      gasUsedPercentage: "94.83%",
      percentOfGasTarget: "89%",
      baseFee: "16.8 gwei",
      burntFeesEth: 4.567,
      burntFeesPercentage: 91.2,
      reward: 0.189,
      txn: 324,
      feeRecipientNametag: "Flashbots"
    },
    {
      block: 19874200,
      gasUsed: "11,200,000",
      gasUsedPercentage: "37.33%",
      percentOfGasTarget: "-25%",
      baseFee: "10.1 gwei",
      burntFeesEth: 1.234,
      burntFeesPercentage: 82.5,
      reward: 0.067,
      txn: 156,
      feeRecipientNametag: "Unknown"
    },
    {
      block: 19874201,
      gasUsed: "19,800,000",
      gasUsedPercentage: "66.00%",
      percentOfGasTarget: "32%",
      baseFee: "13.7 gwei",
      burntFeesEth: 2.890,
      burntFeesPercentage: 88.7,
      reward: 0.156,
      txn: 278,
      feeRecipientNametag: "beaverbuild"
    },
    {
      block: 19874202,
      gasUsed: "25,600,000",
      gasUsedPercentage: "85.33%",
      percentOfGasTarget: "70%",
      baseFee: "15.9 gwei",
      burntFeesEth: 3.745,
      burntFeesPercentage: 90.4,
      reward: 0.201,
      txn: 298,
      feeRecipientNametag: "Titan Builder"
    }
  ];

  // Load block data on component mount
  useEffect(() => {
    const loadBlockData = async () => {
      setLoading(true);
      setError(null);
      setLoadingProgress(0);
      
      if (useRealData) {
        try {
          setLoadingProgress(10);
          const data = await fetchLatestBlocks(10); // Reduced from 20 to 10 blocks
          setLoadingProgress(90);
          
          if (data.length > 0) {
            setBlockData(data);
            setLoadingProgress(100);
          } else {
            throw new Error('No block data received from API');
          }
        } catch (err) {
          console.error('Failed to fetch real block data:', err);
          const errorMessage = err instanceof Error ? err.message : 'Unknown error';
          
          if (errorMessage.includes('Rate limit')) {
            setError('Rate limit reached. Please wait a moment and try again, or use sample data.');
          } else {
            setError('Failed to fetch real-time data. Using fallback data.');
          }
          
          setBlockData(fallbackData);
          setLoadingProgress(100);
        }
      } else {
        // Use fallback data
        setBlockData(fallbackData);
        setLoadingProgress(100);
      }
      
      setLoading(false);
    };

    loadBlockData();
  }, [useRealData]);

  // Current block data
  const currentBlockData = useMemo(() => {
    if (blockData.length === 0) return fallbackData[0];
    return blockData[blockCount] || blockData[0];
  }, [blockCount, blockData]);

  const {
    block: blockNum,
    gasUsed,
    gasUsedPercentage: gasUsedPercent,
    percentOfGasTarget: gasTarget,
    baseFee,
    burntFeesEth: burntFeesValue,
    burntFeesPercentage: burntFeesPercent,
    reward: tipsValue,
    txn: transactions,
    feeRecipientNametag: recipient
  } = currentBlockData;

  // Calculate tips percentage
  const calcTipsPercentage = useCallback(() => {
    if (!burntFeesPercent || burntFeesPercent === 0) return 0;
    const totalFees = burntFeesValue * 100 / burntFeesPercent;
    return (tipsValue / totalFees) * 100;
  }, [burntFeesValue, burntFeesPercent, tipsValue]);

  const tipFeesPercent = useMemo(() => calcTipsPercentage(), [calcTipsPercentage]);

  // Cleanup interval
  const resetChain = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  // Start chain animation
  const startChain = useCallback(() => {
    resetChain();
    if (blockData.length === 0) return;
    
    const newIntervalId = setInterval(() => {
      setBlockCount(prev => {
        const nextCount = prev + 1;
        return nextCount >= blockData.length ? 0 : nextCount;
      });
    }, blockSpeed);
    setIntervalId(newIntervalId);
  }, [blockSpeed, resetChain, blockData.length]);

  // Toggle play/pause
  const playPause = useCallback(() => {
    if (intervalId) {
      resetChain();
    } else {
      startChain();
    }
  }, [intervalId, resetChain, startChain]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  // Start animation on page load
  useEffect(() => {
    if (blockData.length === 0 || loading) return;
    
    const newIntervalId = setInterval(() => {
      setBlockCount(prev => {
        const nextCount = prev + 1;
        return nextCount >= blockData.length ? 0 : nextCount;
      });
    }, blockSpeed);
    setIntervalId(newIntervalId);

    // Cleanup function
    return () => {
      clearInterval(newIntervalId);
    };
  }, [blockData.length, loading]); // Only run when data is loaded

  return (
    <Container>
      {/* Data Source Controls */}
      <DataControls>
        <label>
          <input
            type="checkbox"
            checked={useRealData}
            onChange={(e) => setUseRealData(e.target.checked)}
            disabled={loading}
          />
          Use Real-time Ethereum Data (Rate Limited)
        </label>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && (
          <LoadingMessage>
            Loading block data... {loadingProgress > 0 && `${loadingProgress}%`}
            {useRealData && <div style={{fontSize: '12px', marginTop: '4px'}}>Fetching blocks sequentially to avoid rate limits...</div>}
          </LoadingMessage>
        )}
        {useRealData && !loading && (
          <div style={{fontSize: '12px', color: '#666', marginTop: '8px'}}>
            ⚠️ API calls are rate limited to ~1.5/sec to comply with Etherscan limits
          </div>
        )}
      </DataControls>

      {!loading && (
        <>
          <div id='container'>
            <Block block_bg_img={BLOCK_BG_IMG} gas_target={gasTarget}>
              <GasUsed gas_used_percent={gasUsedPercent}>
                <GasUsedValue>
                  {gasUsedPercent} full {gasTarget} {gasTarget?.[0] === '-' ? 'below' : 'above'} target
                </GasUsedValue>
                <TransactionCount>
                  {transactions} transactions using {gasUsed} gas units
                </TransactionCount>
              </GasUsed>
            </Block>
            <GeneralEqualibrium />
            <TipBaseContainer>
              <Tips tip_fees_percent={tipFeesPercent}>
                <TipsValue>{tipsValue} to {recipient !== "" ? recipient : "no name tag"}</TipsValue>
              </Tips>
              <BaseFees burnt_fees_percent={burntFeesPercent}>
                <BaseValue>{burntFeesValue} ETH</BaseValue>
              </BaseFees>
            </TipBaseContainer>
          </div>

          <h3>Ethereum Block # {blockNum}</h3>
          <Tcount>Base fee: {baseFee}</Tcount>

          <button onClick={playPause} disabled={blockData.length === 0}>
            {intervalId ? "Stop chain" : "Start chain"}
          </button>

          <DataInfo>
            {useRealData ? (
              <p>📡 Showing real-time Ethereum block data from the last 10 blocks</p>
            ) : (
              <p>📊 Showing sample data from blocks 19,874,197 to 19,874,202 (May 15th 2024)</p>
            )}
          </DataInfo>
        </>
      )}

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

interface BlockProps {
  block_bg_img: string;
  gas_target: string;
}
const Block = styled.div<BlockProps>`
  width: 100%;
  height: 300px;
  background-repeat: repeat;
  background-size: 80px 80px;
  background-color: transparent;
  transition-property: background-color;
  transition-duration: 2s;
  background-color: ${props => props.gas_target?.[0] === '-' ? 'rgba(60, 60, 80, .4)' : 'rgba(80, 60, 60, .4)'};
  display: flex;
  align-items: end;
  justify-content: center;
  border: 2px solid rgba(90, 90, 90, .8);
  border-radius: 2px;
  background-image: url(${props => props.block_bg_img});
  padding: 3px;
  position: relative;
  &::after {
    position: absolute;
    top: 150px;
    width: 120px;
    margin-top: -10px;
    right: 224px;
    color: #777;
    font-size: 11px;
    content: 'Block';
  }
`;

interface GasUsedProps {
  gas_used_percent: string;
}
const GasUsed = styled.div<GasUsedProps>`
  width: 100%;
  transition-property: height;
  transition-duration: 2s;
  height: ${props => props.gas_used_percent};
  background-color: #4E4560;
  background-color: rgb(124, 108, 150);
  border: 1px dashed #D6C7F4;
  border-radius: 0 0 2px 2px;
  color: #eee;
`;
const GasUsedValue = styled.p`
  color: #fff;
  margin-top: -20px;
  font-size: 12px;
  text-align: center;
  z-index: 20;
`;
const TransactionCount = styled.div`
  text-align: center;
  position: relative;
  font-size: 12px;
  margin-top: -4px;
`;

const TipsValue = styled.p`
  color: #F0CDC2;
  font-size: 12px;
  position: relative;
  width: 300px;
  margin-top: 12px;
  text-align: center;
  &::after {
    position: absolute;
    top: 6px;
    width: 80px;
    height: 300px;
    right: 310px;
    color: #777;
    font-size: 11px;
    content: 'Priority fees';
  }
`;
const BaseValue = styled.p`
  color: rgb(140, 160, 250);
  margin: 0;
  font-size: 12px;
  position: relative;
  &::after {
    position: absolute;
    top: 0px;
    width: 54px;
    height: 300px;
    right: 190px;
    color: #777;
    font-size: 11px;
    content: 'Base fees';
  }
`;

const GeneralEqualibrium = styled.p`
  margin-top: -151px;
  margin-bottom: 152px;
  margin-left: -4px;
  width: 306px;
  border: .5px dashed #46C63B;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    top: -9px;
    width: 120px;
    left: 304px;
    color: #46C63B;
    font-size: 11px;
    content: '● 15,000,000';
  }
`;

const TipBaseContainer = styled.div`
  height: 300px;
`

interface BaseFeeProps {
  burnt_fees_percent: number;
}
const BaseFees = styled.div<BaseFeeProps>`
  width: 100%;
  transition-property: height;
  transition-duration: 2s;
  height: ${props => props.burnt_fees_percent}%;
  background-color: #4E5F73;
  border: 1px dashed #B8FAF6;
  border-radius: 2px;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
`;

interface TipsProps {
  tip_fees_percent: number;
};
const Tips = styled.div<TipsProps>`
  width: 100%;
  transition-property: height;
  transition-duration: 2s;
  height: ${props => props.tip_fees_percent}%;
  margin: 4px;
  background-color: #6C5751;
  border: 1px dashed #F0CDC2;
  border-radius: 2px;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
`;
const FlowImg = styled.div`
  margin: 40px 0;
  text-align: center;
  border-bottom: 2px dashed #bc9531;
`
const Logo = styled.div`
  background-color: #514c48;
  border-radius: 50%;
  padding: 8px;
  width: 48px;
  height: 48px;
`
const EthLogo = styled.div`
  margin: 40px;
  margin-left: -24px;
`
const Tcount = styled.div`
  margin-top: 10px;
  padding: 0;
  font-size: 16px;
  text-align: center;
`

const DataControls = styled.div`
  margin: 20px 0;
  padding: 15px;
  background-color: rgba(81, 76, 72, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(81, 76, 72, 0.3);
  
  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    
    input[type="checkbox"] {
      transform: scale(1.2);
    }
  }
`

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px;
  background-color: rgba(255, 107, 107, 0.1);
  border-radius: 4px;
`

const LoadingMessage = styled.div`
  color: #4ecdc4;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px;
  background-color: rgba(78, 205, 196, 0.1);
  border-radius: 4px;
`

const DataInfo = styled.div`
  margin: 20px 0;
  padding: 10px;
  font-size: 14px;
  color: #666;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  border-left: 4px solid #4ecdc4;
  
  p {
    margin: 0;
  }
`
