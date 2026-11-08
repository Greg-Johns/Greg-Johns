import Image from 'next/image';
import block_flow from '../../public/block_flow.png';
import block_flow_light from '../../public/block_flow_light.png';

const imgStyle = { maxWidth: '100%', height: 'auto' } as const;
const alt = 'Block flow diagram showing EIP-1559 fee structure';

const ThemeAwareBlockFlow = () => (
  <div style={{ margin: '40px 0', textAlign: 'center' }}>
    <Image className='theme-img-dark' src={block_flow} alt={alt} style={imgStyle} />
    <Image className='theme-img-light' src={block_flow_light} alt={alt} style={imgStyle} />
  </div>
);

export default ThemeAwareBlockFlow;
