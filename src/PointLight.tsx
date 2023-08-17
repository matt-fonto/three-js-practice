import * as THREE from "three";

const PointLight = (scene: THREE.Scene) => {
  const light = new THREE.AmbientLight("white", 1);
  light.position.set(0, 0, 0);
  scene.add(light);

  return light;
};

export default PointLight;
