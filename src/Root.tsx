import { Composition, staticFile } from 'remotion';
import Main, { MainSchema } from './Composition/Composition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Template"
        component={Main}
        schema={MainSchema}
        fps={30}
        width={1920}
        height={1080}
        durationInFrames={750}
        defaultProps={{
          audioVolume: 0.5,
          music: staticFile('music.mp3'),
          colors: {
            background: '#151515',
            backgroundText: '#FFFFFF',
            black: '#000000',
            white: '#FFFFFF',
            primary: '#f00',
            primaryText: '#FFFFFF',
            secondary: '#5118DB',
            secondaryText: '#f00',
            accent: '#FFFF08',
            accentText: '#f00',
          },
          background: {
            type: 'crosses',
            background: 'background',
            stroke: 'backgroundText',
          },
          fonts: {
            primary: 'FrancoisOne',
            secondary: 'Abel',
          },
          transitionDuration: 30,
          scene1Duration: 150,
          scene1Props: {
            logo: staticFile('Logo.png'),
            title: 'MASTER ENGLISH, MASTER THE WORLD',
          },
          scene2Duration: 150,
          scene2Props: {
            logo: staticFile('Logo.png'),
            title: 'WANT TO SPEAK ENGLISH FLUENTLY?',
          },
          scene3Duration: 150,
          scene3Props: {
            title: 'BAD SKILLS CAN LIMIT OPPORTUNITIES',
            logo: staticFile('Logo.png'),
            img: staticFile('Media_2.jpg'),
          },
          scene4Duration: 150,
          scene4Props: {
            title: 'EXPERIENCED iNSTRUCTORS',
            logo: staticFile('Logo.png'),
            img: staticFile('Media_2.jpg'),
          },
          scene5Duration: 150,
          scene5Props: {
            title: 'GAIN FLUENCY, CONFIDENCE',
            logo: staticFile('Logo.png'),
            img: staticFile('Media_2.jpg'),
          },
          scene6Duration: 150,
          scene6Props: {
            title: 'ENROLL NOW AND START YOUR JOURNEY TO ENGLISH FLUENCY!',
            logo: staticFile('Logo.png'),
            img: staticFile('Media_2.jpg'),
          },
        }}
      />
    </>
  );
};
