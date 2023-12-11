import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hello, my name is Joel....",
        2500, // wait 1s before typing next string
        // Same substring at the start will only be typed out once, initially
        "Welcome to my website...",
        3000, // wait 1s before replacing "possibilities" with "creativity"
        "I am a full stack developer...",
        3000,
        "Welcome to a world of creativity...",
        3000,
        "Welcome to a world of inspiration...",
        3000,
        "Welcome to a world of innovation!",
        3000,
      ]}
      wrapper="span"
      speed={50}
      className="text-3xl md:text-4xl text-text font-body text-bold"
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
