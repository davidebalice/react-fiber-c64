import { useGLTF } from "@react-three/drei";
import "./style.css";

export default function Mug() {
  const mug = useGLTF("./public/assets/model/mug.gltf");


  return (
    <>
      <primitive
        object={mug.scene}
        position-x={-2.2}
        position-y={-0.2}
        rotation-y={-2}
        scale={[0.15, 0.15, 0.15]}
        castShadow
        receiveShadow
      >
      
      </primitive>
    </>
  );
}
