import coding from "../img/undraw_programming_re_kg9v.svg";

const About = () => {
  return (
    <>
      <div
        className="grid items-center justify-center min-h-screen grid-cols-1 bg-primary md:grid-cols-2"
        id="about"
      >
        <div className="grid order-last grid-cols-1 p-10 md:order-first">
          <img className="block bg-primary" src={coding} alt="coding" />
        </div>
        <div className=" text-text font-body">
          <h2 className="mt-10 text-5xl text-center font-body">About me</h2>
          <div className="p-10">
            <p className="mx-auto mb-8 md:px-4 max-w-prose">
              Hello there! I'm Joel Wilson, a passionate and dedicated full
              stack developer with a flair for crafting robust and innovative
              web solutions. My journey in the world of technology began with a
              curiosity-driven exploration, and it has evolved into a fulfilling
              career where I constantly strive to merge creativity with
              functionality.
            </p>
            <p className="mx-auto md:px-4 max-w-prose">
              Whether you have a specific project in mind or just want to
              explore the possibilities, I'm always up for a challenge. Let's
              collaborate and turn your ideas into reality. Feel free to reach
              out, and let's embark on a journey of innovation and creativity
              together. Thank you for visiting my portfolio, and I look forward
              to the opportunity of working with you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
