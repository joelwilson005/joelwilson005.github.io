import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [year]);

  return (
    <>
      <footer className="flex flex-col p-10 bg-primary">
        <p className="mx-auto text-lg tracking-normal text-text font-body">
          <span className="mb-4 text-lg">Made with ❤️ in &#x1F1EF;&#x1F1F2;</span>
        </p>
        <p className="mx-auto text-sm tracking-normal text-text font-body">
          © {year} Joel Wilson{" "}
        </p>
      </footer>
    </>
  );
};

export default Footer;
