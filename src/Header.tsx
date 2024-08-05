import logo from "../public/assets/model/textures/logoWhite.png";
import minus from "../public/assets/model/textures/minus.png";
import plus from "../public/assets/model/textures/plus.png";

import "./style.css";

interface HeaderProps {
  setDevice: (device: string) => void;
  setCameraPosition: (position: [number, number, number]) => void;
  initialPosition: [number, number, number];
  midPosition: [number, number, number];
  finalPosition: [number, number, number];
  setCameraPositionIndex: (index: number) => void;
  initialRotation: [number, number, number];
  finalRotation: [number, number, number];
  setCameraRotation: (position: [number, number, number]) => void;
}

const Header: React.FC<HeaderProps> = ({
  setDevice,
  setCameraPosition,
  initialPosition,
  midPosition,
  finalPosition,
  initialRotation,
  finalRotation,
  setCameraRotation,
  setCameraPositionIndex,
}) => {
  return (
    <>
      <header className="header">
        <div className="deviceContainer no-select">
          <p>
            <img src={logo} className="dbLogo" />
          </p>
          <div
            onClick={() => {
              setDevice("notebook");
              setCameraPosition(initialPosition);
              setCameraPositionIndex(0);
            }}
          >
            ddddd
          </div>

          <div
            onClick={() => {
              setDevice("monitor");
              setCameraPosition(initialPosition);
              setCameraPositionIndex(0);
            }}
          >
            ffff
          </div>
        </div>
      </header>
      <div className="zoomContainer no-select">
        <p>Zoom</p>
        <div
          onClick={() => {
            setCameraPosition(initialPosition);
            setCameraPositionIndex(0);
            setCameraRotation(initialRotation);
          }}
        >
          <img src={minus} />
        </div>
        <div
          onClick={() => {
            setCameraPosition(midPosition);
            setCameraPositionIndex(1);
            setCameraRotation(initialRotation);
          }}
        >
          <img src={minus} />
        </div>
        <div
          onClick={() => {
            setCameraPosition(finalPosition);
            setCameraPositionIndex(2);
            setCameraRotation(finalRotation);
          }}
        >
          <img src={plus} />
        </div>
      </div>
    </>
  );
};
export default Header;
