import { AbsoluteFill, staticFile } from 'remotion';
import { z } from 'zod';
import { useTextSplitter } from '../lib/useTextSplitter';
import { colorVar } from '../lib/helpers';
import { TitleTextFromRight } from '../components/animations/TitleTextFromRight';
import { HEIGHT, WIDTH } from '../lib/consts';
import { BackgroundProps } from '../backgrounds';
import Logo from '../components/Logo';
import ShowImage from '../components/ShowImage';
import AnimatedBorder from '../components/AnimatedBorder';
import LineAnimation from '../components/LineAnimation';
import GradientOverlay from '../components/GradirntOverlay';

export const scene2Schema = z.object({
  logo: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
});
type Scene2Props = z.infer<typeof scene2Schema> & { background: BackgroundProps };

const Scene2: React.FC<Scene2Props> = (props) => {
  // we make the text conform to available width, fontFamily, fontWeight, and fontSize and add \n to the text
  const titleSplit = useTextSplitter({
    text: props.title.toUpperCase(),
    fontSize: 120,
    fontWeight: '600',
    letterSpacing: '6px',
    maxLines: 2,
    maxWidth: 1300,
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
          padding: '0px 100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: WIDTH * 0.5 }}>
          <ShowImage src={staticFile('bubble.webp')} height={HEIGHT * 0.45} delay={34} rate={0.15} />
        </div>
        <div style={{ position: 'absolute', bottom: 100, right: 100 }}>
          <ShowImage
            src={staticFile('Media_4.jpg')}
            width={WIDTH * 0.5 - 100}
            height={HEIGHT * 0.65}
            rate={0}
            delay={34}
          />
        </div>{' '}
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
          }}
        >
          <Logo logo={staticFile('sample_logo.png')} height={100} direction="from-right" delay={50} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <AnimatedBorder width={WIDTH * 0.2} height={90} borderWidth={15} delay={50} />
        </div>
        <TitleTextFromRight text={titleSplit.text} startAt={45} />
        <div style={{ marginTop: 50, marginBottom: -20 }}>
          <AnimatedBorder width={WIDTH * 0.2} height={90} borderWidth={15} delay={50} />
        </div>
      </div>
        <AbsoluteFill style={{left:100,top:100}}>
          <LineAnimation/>
        </AbsoluteFill>
        <AbsoluteFill style={{top:'85%',right:100,left:'auto',width:100}}>
          <LineAnimation startAt={45}/>
        </AbsoluteFill>
        
        <AbsoluteFill style={{  width: WIDTH * 0.11, left:'45%' }}>
          <GradientOverlay direction="topToBottom" height={HEIGHT} opacity={0.3} rate={0.65} delay={30} gradient={true}  />
        </AbsoluteFill>
        <AbsoluteFill style={{  width: WIDTH * 0.12,left:'10%' }}>
          <GradientOverlay direction="topToBottom" height={HEIGHT} opacity={0.15} rate={0} delay={30} gradient={false} />
        </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default Scene2;
