import { useGLTF } from "@react-three/drei";
import "./style.css";

export default function OldTable() {
  const oldTable = useGLTF("./public/assets/model/old-table.gltf");

  return (
    <>
      <primitive
        object={oldTable.scene}
        position-y={-3.46}
        position-z={0.7}
        rotation={[0, 4.70, 0]}
        scale={[7.2, 7.2, 7.2]}
        receiveShadow
      />
    </>
  );
}
