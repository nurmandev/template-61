import { AbsoluteFill, staticFile } from 'remotion';
import { z } from 'zod';
import Logo from '../components/Logo';
import Image from '../components/Image';
import { HEIGHT, WIDTH } from '../lib/consts';

import { BackgroundProps } from '../backgrounds';
import { colorVar } from '../lib/helpers';
import ShowImage from '../components/ShowImage';
import { useTextSplitter } from '../lib/useTextSplitter';
import { TitleTextFromRight } from '../components/animations/TitleTextFromRight';

export const scene3Schema = z.object({
  logo: z.string(),
  img: z.string(),
  title: z.string(),
});
type Scene3Props = z.infer<typeof scene3Schema> & { background: BackgroundProps };

const Scene3: React.FC<Scene3Props> = (props) => {
  const titleSplit = useTextSplitter({
    text: props.title.toUpperCase(),
    fontSize: 120,
    fontWeight: '600',
    letterSpacing: '6px',
    maxLines: 3,
    maxWidth: 700,
  });
  return (
    <AbsoluteFill>
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          ...titleSplit.style,
          color: colorVar('primaryText'),
          background: 'linear-gradient(0deg, rgba(246,17,115,1) 0%, rgba(227,186,17,1) 100%)',
          padding: '100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <ShowImage src={staticFile('image3.jpg')} height={HEIGHT} width={WIDTH} rate={0} />
        </div>
        {/* <Image img={props.img} radius={400} strokeColor={colorVar('secondary')} strokeWidth={50} /> */}
        {/* <div style={{ position: 'relative' }}>
          <Logo logo={props.logo} direction="from-right" />
        </div> */}
        <div style={{ position: 'relative' }}>
          <TitleTextFromRight text={titleSplit.text} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene3;
