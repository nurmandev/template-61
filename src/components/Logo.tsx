import { Img, useCurrentFrame, spring, useVideoConfig } from 'remotion';

interface LogoProps {
  logo: string;
  width?: number;
  height?: number;
  direction?: 'from-left' | 'from-right' | 'center';
}

const leftPoints = (direction: string) => {
  if (direction === 'from-left') {
    return { start: -100, end: 0 };
  }
  if (direction === 'from-right') {
    return { start: 100, end: 0 };
  }
  return { start: 0, end: 0 };
};

const Logo = ({ logo, width, height, direction = 'from-left' }: LogoProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { start, end } = leftPoints(direction);

  const left = spring({
    frame: frame,
    fps: 50,
    from: start,
    to: end,
    config: {
      mass: 1,
      damping: 40,
    },
  });

  const opacity = spring({
    frame: frame,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 20,
  });

  return (
    <div
      style={{
        width: width || 'auto',
        height: height || 'auto',
        position: 'relative',
        left: left,
        opacity: opacity,
      }}
    >
      <Img
        src={logo}
        style={{
          width: width || 'auto',
          height: height || 'auto',
          // position: 'absolute',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Logo;
