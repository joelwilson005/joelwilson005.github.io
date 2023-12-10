import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Welcome to a world of possibilities!",
        3000, // wait 1s before replacing "possibilities" with "creativity"
        "Welcome to a world of creativity!",
        3000,
        "Welcome to a world of inspiration!",
        3000,
        "Welcome to a world of innovation!",
        3000,
      ]}
      wrapper="span"
      speed={50}
      className="text-3xl md:text-4xl text-text font-heading text-bold"
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
