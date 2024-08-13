import { useGLTF } from "@react-three/drei";
import "./style.css";

export default function Chair() {
  const chair = useGLTF("./public/assets/model/old-chair.gltf");

  return (
    <>
      <primitive
        object={chair.scene}
        position={[0.5, -2.75, 5]}
        scale={[4.0, 4.0, 4.0]}
        receiveShadow
      />
    </>
  );
}
