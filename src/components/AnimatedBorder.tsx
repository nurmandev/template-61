import { useCurrentFrame, interpolate, Easing, useVideoConfig } from 'remotion';

const AnimatedBorder = ({
  width,
  height,
  borderWidth,
}: {
  width: number;
  height: number;
  borderWidth: number;
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const topBottomDuration = (width / (width + height)) * durationInFrames;
  const sideDuration = (height / (width + height)) * durationInFrames;

  // Frame Ranges
  const topBottomFrames = topBottomDuration / 4;
  const sideFrames = sideDuration / 2;

  // Top Border
  const horizontalTopProgress = interpolate(frame, [0, topBottomFrames], [0, 50], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Left and Right Borders
  const verticalProgress = interpolate(
    frame,
    [topBottomFrames, topBottomFrames + sideFrames],
    [0, 100],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Bottom Border
  const horizontalBottomProgress = interpolate(
    frame,
    [topBottomFrames + sideFrames, durationInFrames / 2],
    [0, 50],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.ease),
    }
  );

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      {/* Top Border - Expands horizontally */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          right: '50%',
          width: `${horizontalTopProgress}%`,
          height: borderWidth,
          backgroundColor: 'white',
        }}
      />
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: `${horizontalTopProgress}%`,
          height: borderWidth,
          backgroundColor: 'white',
        }}
      />

      {/* Left Border - Expands vertically */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: `${verticalProgress}%`,
          width: borderWidth,
          backgroundColor: 'white',
        }}
      />

      {/* Right Border - Expands vertically */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: `${verticalProgress}%`,
          width: borderWidth,
          backgroundColor: 'white',
        }}
      />

      {/* Bottom Border - Expands horizontally */}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: `${horizontalBottomProgress}%`,
          height: borderWidth,
          backgroundColor: 'white',
        }}
      />
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: `${horizontalBottomProgress}%`,
          height: borderWidth,
          backgroundColor: 'white',
        }}
      />
    </div>
  );
};

export default AnimatedBorder;
