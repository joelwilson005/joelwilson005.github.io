import FeaturedApplicationCarousel from "./FeaturedApplicationCarousel";
import spacer1 from "../img/spacer1.svg";
import spacer3 from "../img/spacer3.svg";

const FeaturedProject = () => {
  return (
    <>
      <div
        className="spacer"
        style={{ backgroundImage: `url(${spacer1})` }}
      ></div>
      <div className="min-h-screen bg-section2 text-text font-body P-4">
        <h2 className="pt-10 text-5xl text-center font-body">
          Featured project
        </h2>

        <ul className="grid grid-cols-1 gap-1 px-16 py-10 text-accent xl:px-48">
          <li className="hover:underline">
            <a
              href="https://silly-alfajores-7fb4bf.netlify.app/"
              target="_blank"
            >
              Live demo
            </a>
          </li>
          <li className="hover:underline">
            <a
              href="https://github.com/joelwilson005/todo-application"
              target="_blank"
            >
              Front end code on Github
            </a>
          </li>
          <li className="hover:underline ">
            <a href="https://github.com/joelwilson005/todo" target="_blank">
              Back end code on Github
            </a>
          </li>
          <li className="hover:underline">
            <a
              href="https://app.swaggerhub.com/apis/JOELWILSON/todo_api/1.0"
              target="_blank"
            >
              REST API documentation
            </a>
          </li>
        </ul>

        <div className="grid min-h-screen grid-cols-1 p-10 overflow-hidden md:grid-cols-2">
          <div>
            <p className="mx-auto mb-8 md:px-4 max-w-prose">
              <strong className="text-lg">Project Overview:</strong> This
              featured project showcases my expertise in developing a responsive
              Todo application with a Java backend using Spring Boot, Hibernate,
              and PostgreSQL. The project encompasses both frontend and backend
              technologies to provide a comprehensive solution. The React
              frontend, designed with Redux and Axios, ensures a seamless user
              experience across devices through responsive web design (RWD). The
              RESTful API, created with Swagger UI and the OpenAPI spec,
              reflects a commitment to clear and straightforward communication.
              The project is hosted on Heroku for the backend and Netlify for
              the frontend, leveraging cutting-edge cloud platforms for
              reliability and scalability.
            </p>
            <p className="mx-auto mb-8 md:px-4 max-w-prose">
              <strong className="text-lg">Technological Expertise:</strong> The
              project showcases my proficiency in utilizing a range of
              technologies, including Spring Boot, Hibernate, Redux, and Axios.
              By integrating these technologies, I developed a robust backend
              and a responsive frontend. In addition to the technical aspects, I
              also paid attention to design principles such as the 60-30-10 rule
              for color and the 8-point grid system for layout precision. This
              meticulous approach ensures a visually appealing and user-centric
              interface that adheres to industry best practices. The project
              employs a responsive web design approach, enabling optimal
              usability on various devices.
            </p>
            <p className="mx-auto mb-8 md:px-4 max-w-prose">
              <strong className="text-lg">
                Deployment and Version Control:
              </strong>{" "}
              The project's deployment on Heroku and Netlify highlights my
              commitment to accessibility and reliability. Additionally, version
              control using Git and GitHub played a crucial role in maintaining
              a transparent and organized development history. This streamlined
              approach facilitates efficient project management and ensures a
              smooth and effective development process for the responsive web
              application. To enhance the security measures, the project also
              utilizes Spring Boot Security, providing robust security features
              and protecting the application from potential threats.
            </p>
          </div>
          <FeaturedApplicationCarousel />
        </div>
        <div
          className="spacer"
          style={{ backgroundImage: `url(${spacer3})` }}
        ></div>
      </div>
    </>
  );
};

export default FeaturedProject;
