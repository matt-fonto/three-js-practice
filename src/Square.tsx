import * as THREE from "three";

const Square3D = (scene: THREE.Scene) => {
  const geomertry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: "white" });
  const square = new THREE.Mesh(geomertry, material);
  scene.add(square);

  return square;
};

export default Square3D;
