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

export const scene1Schema = z.object({
  logo: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
});
type Scene1Props = z.infer<typeof scene1Schema> & { background: BackgroundProps };

const Scene1: React.FC<Scene1Props> = (props) => {
  // we make the text conform to available width, fontFamily, fontWeight, and fontSize and add \n to the text
  const titleSplit = useTextSplitter({
    text: props.title.toUpperCase(),
    fontSize: 120,
    fontWeight: '600',
    letterSpacing: '6px',
    maxLines: 2,
    maxWidth: 1500,
  });
  console.log('title', props.title);

  return (
    <AbsoluteFill>
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          ...titleSplit.style,
          color: colorVar('primaryText'),
          background: 'linear-gradient(0deg, rgba(246,17,115,1) 0%, rgba(227,186,17,1) 100%)',
          padding: 100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: 500 }}>
          <ShowImage src={staticFile('teaching.png')} height={HEIGHT} rate={0.65} delay={5} />
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <ShowImage src={staticFile('books.jpg')} width={500} height={HEIGHT * 0.7} rate={0} />
        </div>{' '}
        <div
          style={{
            marginBottom: 70,
          }}
        >
          <Logo logo={staticFile('sample_logo.png')} height={300} direction="from-right" delay={15} />
        </div>
        <TitleTextFromRight text={titleSplit.text} startAt={16} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <AnimatedBorder width={WIDTH * 0.5} height={90} borderWidth={10} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Scene1;
