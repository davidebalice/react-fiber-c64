import { useGLTF } from "@react-three/drei";
import "./style.css";

export default function DbLogo() {
  const dblogo = useGLTF("./public/assets/model/dblogo.gltf");

  return (
    <>
      <primitive
        object={dblogo.scene}
        position-x={2}
        position-y={-0.15}
        rotation-x={1.55}
        rotation-y={0}
        rotation-z={0.5}
        scale={[25, 25, 25]}
        CastShadow
        ReceiceShadow
      />
    </>
  );
}
