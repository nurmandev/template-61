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
          // padding: '100px',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'flex-end',
          // alignItems: 'flex-end',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <img src={staticFile('image3.jpg')} style={{ width: WIDTH, height: HEIGHT }} />
        </div>
        <GradientOverlay direction="leftToRight" height={HEIGHT} rate={0.46} delay={45} />
        <div style={{ position: 'absolute', top: '35%', left: 0, width: WIDTH * 0.5 }}>
          <GradientOverlay
            direction="rightToLeft"
            height={HEIGHT * 0.2}
            opacity={0.2}
            rate={0.46} delay={45}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 100,
            right: WIDTH * 0.33,
          }}
        >
          <Logo logo={staticFile('sample_logo.png')} height={150} direction="from-right" />
        </div>

        <div style={{ position: 'absolute', bottom: 100, right: 100 }}>
          <TitleTextFromRight text={titleSplit.text} startAt={48} />
        </div>

        <div style={{ position: 'absolute', top: 100, right: '-35%' }}>
          <AnimatedBorder width={WIDTH * 0.5} height={200} borderWidth={10} />
        </div>

        <div
          style={{ position: 'absolute', bottom: -100, right: '35%', transform: 'rotate(90deg)' }}
        >
          <AnimatedBorder width={WIDTH * 0.2} height={150} borderWidth={10} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene3;
