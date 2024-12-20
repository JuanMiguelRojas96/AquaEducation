/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';
import { useSetState } from 'react-use';

export default function WaterBottle( {props, finishedLevel }) {

  const [visible, setVisible] = useState(true);

  const onCollisionEnter = ({ manifold, target, other }) => {
    console.log("Choco")

    if (other.colliderObject.name === "character-capsule-collider") {
      finishedLevel();
      setVisible(false);
      // socket.emit('update-speedmenox', { visible: false });
      // catchObject();
    }
  }
  console.log(visible);
  const { nodes, materials } = useGLTF('/models-3d/collectibles/water_bottle.glb')

  return (
    <>
    {visible ? (
    <RigidBody
    colliders="hull"
    type='Fixed'
    onCollisionEnter={(e)=> onCollisionEnter(e)}
    position={[0,1,-9]}
    >
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.65}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material_0.geometry}
            material={materials['Material.001']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
    </RigidBody>
    ) : null}
    </>
  );
}

useGLTF.preload('/models-3d/collectibles/water_bottle.glb');