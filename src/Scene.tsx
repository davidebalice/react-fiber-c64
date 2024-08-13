import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Euler, Quaternion, Vector3 } from "three";
import C64 from "./C64.js";
import DbLogo from "./DbLogo";
import Mug from "./Mug";
import Table from "./Table.js";
import Chair from "./Chair.js";

interface SceneProps {
  device: string;
  initialPosition: [number, number, number];
  finalPosition: [number, number, number];
  cameraPosition: [number, number, number];
  setCameraPosition: (position: [number, number, number]) => void;
  cameraPositionIndex: number;
  setCameraPositionIndex: (index: number) => void;
  initialRotation: [number, number, number];
  finalRotation: [number, number, number];
  setCameraRotation: (position: [number, number, number]) => void;
  cameraRotation: [number, number, number];
  websiteUrl: string;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const CameraController: React.FC<{
  targetPosition: [number, number, number];
  targetRotation: [number, number, number];
}> = ({ targetPosition, targetRotation }) => {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.lerp(
      new Vector3(targetPosition[0], targetPosition[1], targetPosition[2]),
      0.05
    );
    camera.updateProjectionMatrix();

    const targetQuaternion = new Quaternion().setFromEuler(
      new Euler(targetRotation[0], targetRotation[1], targetRotation[2])
    );
    camera.quaternion.slerp(targetQuaternion, 0.05);

    camera.updateProjectionMatrix();
  });
  return null;
};

export default function Scene({
  device,
  initialPosition,
  finalPosition,
  cameraPosition,
  setCameraPosition,
  cameraPositionIndex,
  setCameraPositionIndex,
  cameraRotation,
  websiteUrl,
  loading,
  setLoading,
}: SceneProps) {
  useEffect(() => {
    const handleWheel = (event: { deltaY: number }) => {
      if (event.deltaY > 0) {
        setCameraPosition(finalPosition);
        setCameraPositionIndex(1);
      } else {
        setCameraPosition(initialPosition);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event: { deltaY: number }) => {
      if (event.deltaY > 0) {
        setCameraPositionIndex(1);
      } else {
        setCameraPositionIndex(0);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const renderDevice = (websiteUrl: string) => {
    switch (device) {
      case "c64":
        return (
          <C64
            occlude={cameraPositionIndex}
            websiteUrl={websiteUrl}
            setLoading={setLoading}
          />
        );
      case "monitor":
        return (
          <C64
            occlude={cameraPositionIndex}
            websiteUrl={websiteUrl}
            setLoading={setLoading}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <PresentationControls
        global
        polar={cameraPositionIndex === 1 ? [-0.5, 0] : [-1, 0.5]}
        azimuth={cameraPositionIndex === 1 ? [-0.5, 0] : [-1, 0.5]}
      >
        <Environment preset="warehouse" />
        <ambientLight intensity={0.1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <ContactShadows
          position={[0, -2, -0.16]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.8}
          opacity={0.1}
          blur={0.5}
          color="black"
        />
        <CameraController
          targetPosition={cameraPosition}
          targetRotation={cameraRotation}
        />

        <Mug />
        <DbLogo />
        <Table />
        <Chair />

        {renderDevice(websiteUrl)}
      </PresentationControls>
    </>
  );
}
