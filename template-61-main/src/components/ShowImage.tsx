import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

const ShowImage = ({
  src,
  height,
  width,
  rate,
}: {
  src: string;
  width?: number;
  height?: number;
  rate: number;
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Calculate the scale animation for zoom out effect
  const scaleAnimation = interpolate(frame, [0, durationInFrames * 0.5], [1, 1.05], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Calculate the clip-path percentage for uncropping effect
  const clipPathProgress = interpolate(frame, [0, durationInFrames * 0.15], [1, rate], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.ease),
  });

  // Create the clip-path string based on the animation progress
  const clipPathAnimation = `polygon( ${clipPathProgress * 100}% 0%, 100% 0%, 100% 100%, ${clipPathProgress * 100}% 100%)`;

  return (
    <div
      style={{
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt="Animated"
        style={{
          width: width || 'auto', // Set width to cover the container
          height: height || 'auto', // Maintain aspect ratio
          objectFit: 'cover',
          clipPath: clipPathAnimation,
          transform: `scale(${scaleAnimation})`,
        }}
      />
    </div>
  );
};

export default ShowImage;
