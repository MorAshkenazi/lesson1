import { FunctionComponent } from "react";

interface FooterProps {
  developerName: string;
}

const Footer: FunctionComponent<FooterProps> = ({ developerName }) => {
  return (
    <>
      <p className="bg-success text-light">
        This site developed by {developerName}
      </p>
      <i className="fa-brands fa-square-instagram"></i>
      <i className="fa-brands fa-square-twitter"></i>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-tiktok"></i>
    </>
  );
};

export default Footer;
