import * as THREE from "three";
import { useEffect, useRef } from "react";
import Square3D from "./Square";
import PointLight from "./PointLight";

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    scene.background = new THREE.Color("gray");
    const camera = new THREE.PerspectiveCamera(
      75, // field of view, this is the default value
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1, // near clipping plane, objects closer than this won't be rendered
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Adding a cube
    // Square3D(scene);
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: "purple" });
    const cube = new THREE.Mesh(boxGeometry, material);
    scene.add(cube);

    // Adding a light
    // PointLight(scene);
    const light = new THREE.AmbientLight("white", 1);
    light.position.set(0, 0, 0);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeScene;
