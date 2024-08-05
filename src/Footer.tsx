import github from "../public/assets/model/textures/github_white.png";
import info from "../public/assets/model/textures/info.png";
import "./style.css";

interface FooterProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ showModal, setShowModal }) => {
  return (
    <footer className="footer no-select">
      <div className="footerRow">
        <div className="github">
          <a
            href="https://github.com/davidebalice/react-fiber-drei-html-frame-on-3d-devices"
            target="_blank"
          >
            <img src={github} />
          </a>
        </div>

        <div className="info">
          <img src={info} onClick={() => setShowModal(true)} />
        </div>
      </div>
      <div className="footerBottom">
        <a href="https://www.davidebalice.dev" target="_blank">
          www.davidebalice.dev
        </a>
      </div>
    </footer>
  );
};

export default Footer;
