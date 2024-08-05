import { Html, useGLTF, useProgress } from "@react-three/drei";

import { useEffect } from "react";
import "./style.css";

interface C64Props {
  occlude: number;
  websiteUrl: string;
  setLoading: (loading: boolean) => void;
}

export default function C64({
  occlude,
  websiteUrl,
  setLoading,
}: C64Props) {
  const c64 = useGLTF("./public/assets/model/c64.gltf");

  const { progress } = useProgress();

  useEffect(() => {
    console.log(progress);
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress]);

  return (
    <>
      <primitive
        object={c64.scene}
        position-y={-0.2}
        scale={[0.8, 0.8, 0.8]}
        castShadow
        receiceShadow
      />
      <Html
        wrapperClass="c64"
        position={[0, 1.60, -0.4]}
        transform
        rotation-x={-0}
        distanceFactor={1.18}
        {...((occlude === 0 || occlude === 1|| occlude === 2) && { occlude: "blending" })}
      >
        {<iframe src={websiteUrl} />}
      </Html>
    </>
  );
}
