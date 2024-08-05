import { useGLTF } from "@react-three/drei";
import "./style.css";

export default function Chair() {
  const chair = useGLTF("./public/assets/model/old-chair.gltf");

  return (
    <>
      <primitive
        object={chair.scene}
        position-y={-6.27}
        scale={[1.4, 1.4, 1.4]}
        receiveShadow
      />
    </>
  );
}
