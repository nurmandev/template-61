import { Fragment } from 'react/jsx-runtime';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const TitleTextFromRight = ({
  text,
  startAt = 0,
  gradient = false,
}: {
  text: string;
  startAt?: number;
  gradient?: boolean;
}) => {
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();
  const lines = text.split('\n');

  let wordIndex = 0;

  return (
    <>
      {lines.map((line, lineIndex) => (
        <p
          key={lineIndex}
          style={{
            margin: 0,
            lineHeight: '110px',
            position: 'relative',
            whiteSpace: 'nowrap',
            textShadow: gradient ? '' : '5px 20px 50px #00000020',
            left: interpolate(
              (frame - startAt - lineIndex * 5) / (durationInFrames - startAt),
              [0, 0.23, 0.46, 0.7],
              [100, 15, -5, 0],
              {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }
            ),
          }}
        >
          {line.split(' ').map((word, index) => {
            const delay = 10;
            const startFrame = delay * wordIndex;
            wordIndex += 1;
            const opacity = interpolate(frame, [startFrame, startFrame + delay], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const left = interpolate(frame, [startFrame, startFrame + delay], [50, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });

            return (
              <Fragment key={`word-${index}-${wordIndex}`}>
                <span
                  style={{
                    position: 'relative',
                    top: 0,
                    left,
                    opacity,
                    background: 'linear-gradient(90deg, #f61174ab 0%, rgba(227,186,17,1) 100%)',
                    WebkitBackgroundClip: 'text',
                    color: gradient ? 'transparent' : 'white',
                    display: 'inline-block',
                  }}
                >
                  {word}
                </span>
                {index < line.split(' ').length - 1 && ' '}
              </Fragment>
            );
          })}
          {lineIndex < lines.length - 1 && <br />}
        </p>
      ))}
    </>
  );
};
