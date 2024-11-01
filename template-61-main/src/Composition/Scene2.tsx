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
          <ShowImage src={staticFile('bubble.webp')} height={HEIGHT * 0.5} rate={0.1} />
        </div>
        <div style={{ position: 'absolute', bottom: 100, right: 100 }}>
          <ShowImage
            src={staticFile('image3.jpg')}
            width={WIDTH * 0.5 - 100}
            height={HEIGHT * 0.65}
            rate={0}
          />
        </div>{' '}
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
          }}
        >
          <Logo logo={staticFile('sample_logo.png')} height={100} direction="from-right" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <AnimatedBorder width={WIDTH * 0.2} height={90} borderWidth={10} />
        </div>
        <TitleTextFromRight text={titleSplit.text} />
        <div style={{ marginTop: 50, marginBottom: -20 }}>
          <AnimatedBorder width={WIDTH * 0.2} height={90} borderWidth={10} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene2;
