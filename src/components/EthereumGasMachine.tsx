"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import styled from "@emotion/styled";

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



const DEFAULT_BLOCK: BlockData = {
  block: 0,
  gasUsed: "0",
  gasUsedPercentage: "0%",
  percentOfGasTarget: "0%",
  baseFee: "0 gwei",
  burntFeesEth: 0,
  burntFeesPercentage: 0,
  reward: 0,
  txn: 0,
  feeRecipientNametag: "Loading"
};

// API Functions: removed


// Constants
const BLOCK_BG_IMG = `"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' fill-opacity='.4' style='enable-background:new 0 0 500 500'%3E%3Cstyle%3E .st2{fill:rgb(109, 104, 104)} %3C/style%3E%3Cg style='display:none'%3E%3Cpath style='display:inline;fill:%23414042' d='M-8.3-5.7h520.7V511H-8.3z' id='Layer_2'/%3E%3C/g%3E%3Cg id='Layer_1'%3E%3Cpath transform='rotate(-45.001 0 .055)' class='st2' d='M-453.7-3.7h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 31.25 31.306)' class='st2' d='M-422.5 27.6H485v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 62.5 62.556)' class='st2' d='M-391.2 58.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 93.75 93.807)' class='st2' d='M-360 90.1h907.5v7.5H-360z'/%3E%3Cpath transform='rotate(-45.001 125 125.057)' class='st2' d='M-328.7 121.3h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 156.249 156.308)' class='st2' d='M-297.5 152.6H610v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 187.499 187.558)' class='st2' d='M-266.2 183.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 218.749 218.809)' class='st2' d='M-235 215.1h907.5v7.5H-235z'/%3E%3Cpath transform='rotate(-45.001 249.998 250.06)' class='st2' d='M-203.7 246.3h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 281.248 281.31)' class='st2' d='M-172.5 277.6H735v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 312.498 312.56)' class='st2' d='M-141.2 308.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 343.748 343.81)' class='st2' d='M-110 340.1h907.5v7.5H-110z'/%3E%3Cpath transform='rotate(-45.001 374.997 375.061)' class='st2' d='M-78.7 371.3h907.5v7.5H-78.7z'/%3E%3Cpath transform='rotate(-45.001 406.247 406.312)' class='st2' d='M-47.5 402.6H860v7.5H-47.5z'/%3E%3Cpath transform='rotate(-45.001 437.497 437.562)' class='st2' d='M-16.2 433.8h907.5v7.5H-16.2z'/%3E%3Cpath transform='rotate(-45.001 468.747 468.813)' class='st2' d='M15 465.1h907.5v7.5H15z'/%3E%3Cpath transform='rotate(-45.001 499.997 500.064)' class='st2' d='M46.3 496.3h907.5v7.5H46.3z'/%3E%3C/g%3E%3C/svg%3E"`;

export default function EthereumGasMachine() {
  // State management
  const [blockCount, setBlockCount] = useState<number>(0);
  const [blockSpeed] = useState<number>(12000);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [blockData, setBlockData] = useState<BlockData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);




  // Load block data on component mount
  useEffect(() => {
    const loadBlockData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/block-19874196-19874237.json');
        if (!response.ok) throw new Error('Failed to load data');
        const data = await response.json();
        const validData = data.filter((b: any) => b.block !== 0);
        setBlockData(validData);
      } catch (err) {
        console.error('Error loading data:', err);
      }
      setLoading(false);
    };

    loadBlockData();
  }, []);

  // Current block data
  const currentBlockData = useMemo(() => {
    if (blockData.length === 0) return DEFAULT_BLOCK;
    return blockData[blockCount] || blockData[0] || DEFAULT_BLOCK;
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
      {loading && <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>Loading block data...</div>}

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

          {/* <button onClick={playPause} disabled={blockData.length === 0}>
            {intervalId ? "Stop chain" : "Start chain"}
          </button> */}

          <DataInfo>
            <p>Showing data from blocks 19,874,197 to 19,874,237 (May 15th 2024)</p>
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

const Tcount = styled.div`
  margin-top: 10px;
  padding: 0;
  font-size: 16px;
  text-align: center;
`

const DataInfo = styled.div`
  margin-top: 20px;
  padding: 14px 18px;
  color: var(--color-text-primary);
  border-radius: 0 4px 4px 0;
  background: var(--color-bg-secondary);
  border-left: 4px solid var(--color-gold);
  p {
    margin: 0;
  }
`
