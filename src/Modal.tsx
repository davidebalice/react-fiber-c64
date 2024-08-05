import "./style.css";
import logoReact from "../public/assets/model/textures/logoReact.png";

interface ModalProps {
  setShowModal: (value: boolean) => void;
}

export default function Modal({ setShowModal }: ModalProps) {
  return (
    <div className="modal">
      <div className="modalContent">
        <div onClick={() => setShowModal(false)} className="modalClose">
          X
        </div>

        <div>
          <img src={logoReact} className="logoReact"/>
          <br />
          <b>3D website visualization on different devices.</b>
          <br />
          <br />
          Developed in React Fiber and drei.
          <br />
          <br />
          Various examples of implementation of html frame in 3d scene.
          <br />
          <br />
          <br />
          <a href="https://www.davidebalice.dev" target="_blank">
            www.davidebalice.dev
          </a>
        </div>
      </div>
    </div>
  );
}
