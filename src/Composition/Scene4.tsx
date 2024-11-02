import { AbsoluteFill, staticFile } from 'remotion';
import { z } from 'zod';
import Logo from '../components/Logo';
import { HEIGHT, WIDTH } from '../lib/consts';

import { BackgroundProps } from '../backgrounds';
import { colorVar } from '../lib/helpers';
import { useTextSplitter } from '../lib/useTextSplitter';
import { TitleTextFromRight } from '../components/animations/TitleTextFromRight';
import GradientOverlay from '../components/GradirntOverlay';
import AnimatedBorder from '../components/AnimatedBorder';

export const scene4Schema = z.object({
  logo: z.string(),
  img: z.string(),
  title: z.string(),
});
type Scene4Props = z.infer<typeof scene4Schema> & { background: BackgroundProps };

const Scene4: React.FC<Scene4Props> = (props) => {
  const titleSplit = useTextSplitter({
    text: props.title.toUpperCase(),
    fontSize: 120,
    fontWeight: '600',
    letterSpacing: '6px',
    maxLines: 1,
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
          // padding: '100px',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'flex-end',
          // alignItems: 'flex-end',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <img src={staticFile('image6.jpg')} style={{ width: WIDTH, height: HEIGHT }} />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: WIDTH * 0.5 }}>
          <GradientOverlay direction="leftToRight" height={HEIGHT} opacity={0.5} rate={0.5} />
        </div>

        <div style={{ position: 'absolute', top: 0, right: 0, width: WIDTH * 0.5 }}>
          <GradientOverlay direction="rightToLeft" height={HEIGHT} opacity={0.5} rate={0.5} />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 50,
            right: WIDTH * 0.5,
            transform: 'translate(50%)',
          }}
        >
          <Logo logo={staticFile('sample_logo.png')} height={120} direction="from-right" />
        </div>

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <TitleTextFromRight text={titleSplit.text} />
        </div>

        <div style={{ position: 'absolute', top: -10, right: '50%', transform: 'translate(50%)' }}>
          <AnimatedBorder width={WIDTH * 0.2} height={300} borderWidth={10} />
        </div>

        <div
          style={{ position: 'absolute', bottom: -10, right: '50%', transform: 'translate(50%)' }}
        >
          <AnimatedBorder width={WIDTH * 0.4} height={150} borderWidth={10} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene4;
