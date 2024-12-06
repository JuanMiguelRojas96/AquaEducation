import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ContaminationSolutionsModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/Cinema.glb')
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI, 0]}>
      <group position={[60.007, 1.308, 26.386]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.001}>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.color_darkBlue}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
            </group>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
            </group>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.color_darkgBrown}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.color_darkgBrown}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.color_darkBlue}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
            </group>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
            </group>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_33.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_321.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_129.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_35.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_323.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_131.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_325.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_37.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_133.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_327.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_39.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_135.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_31.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_329.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_41.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_137.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_319.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_331.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_43.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_139.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_333.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_45.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_141.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_335.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_47.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_143.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_337.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_49.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_145.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_339.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_51.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_147.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_343.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_55.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_151.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_345.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_57.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_153.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_347.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_59.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_155.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_349.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_61.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_157.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_351.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_63.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_159.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_353.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_65.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_161.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_355.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_67.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_163.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_357.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_69.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_165.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_359.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_71.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_167.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_361.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_169.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_341.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_53.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_149.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_365.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_77.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_173.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_367.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_79.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_175.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_369.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_81.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_177.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_371.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_83.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_179.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_373.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_85.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_181.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_375.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_87.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_183.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_377.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_89.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_185.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_379.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_91.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_187.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_381.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_93.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_189.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_383.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_95.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_191.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_363.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_75.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_171.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_387.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_99.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_195.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_389.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_101.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_197.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_391.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_103.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_199.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_393.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_105.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_201.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_203.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_395.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_107.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_205.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_397.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_109.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_207.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_399.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_111.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_209.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_401.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_113.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_211.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_403.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_115.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_385.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_97.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_193.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_213.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_405.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_117.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_127.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_215.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_407.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_119.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_217.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_409.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_121.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_219.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_411.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_123.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_221.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_413.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_125.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_513.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_515.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_517.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_519.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_521.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_523.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_525.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_527.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_529.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_531.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_535.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_537.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_539.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_541.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_543.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_511.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_545.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_547.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_549.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_551.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_553.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_533.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_557.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_559.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_561.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_563.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_565.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_567.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_569.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_571.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_573.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_575.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_555.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_579.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_581.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_583.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_577.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_585.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_587.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_589.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_591.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_593.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_417.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_419.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_421.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_423.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_425.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_427.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_429.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_431.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_433.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_435.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_415.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_439.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_441.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_443.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_445.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_447.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_449.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_451.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_453.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_455.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_457.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_437.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_461.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_463.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_465.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_467.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_469.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_471.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_473.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_475.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_477.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_479.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_459.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_483.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_485.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_487.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_489.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_491.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_493.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_495.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_497.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_499.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_481.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_501.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_503.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_505.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_507.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_509.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_225.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_223.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_227.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_229.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_231.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_233.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_235.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_237.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_239.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_241.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_243.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_247.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_249.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_251.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_253.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_255.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_257.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_259.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_261.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_263.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_265.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_245.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_269.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_271.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_273.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_275.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_277.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_279.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_281.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_283.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_285.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_287.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_267.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_291.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_293.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_295.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_297.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_299.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_301.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_303.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_305.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_307.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_289.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_309.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_311.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_313.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_315.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_317.geometry}
                    material={materials.color_blk}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
              </group>
              <group position={[0, 0, 0.002]}>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_682.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_684.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_686.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_688.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_690.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_692.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_694.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_696.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_698.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_700.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_704.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_706.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_708.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_710.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_712.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_714.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_716.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_718.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_720.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_722.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_702.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_726.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_728.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_730.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_680.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_732.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_734.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_736.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_738.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_740.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_742.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_744.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_724.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_748.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_750.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_752.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_746.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_754.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_756.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_758.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_760.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_762.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_598.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_600.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_602.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_604.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_606.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_608.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_610.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_612.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_614.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_616.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_620.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_622.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_624.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_626.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_628.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_630.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_632.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_634.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_636.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_596.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_638.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_618.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_642.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_644.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_646.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_648.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_650.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_652.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_654.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_656.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_658.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_660.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_640.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_664.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_666.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_668.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_662.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_670.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_672.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_674.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_676.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_678.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_766.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_768.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_770.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_772.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_774.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_776.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_778.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_780.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_782.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_784.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_788.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_790.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_792.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_794.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_796.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_798.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_800.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_802.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_804.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_806.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_786.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_810.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_812.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_814.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_816.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_818.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_820.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_822.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_824.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_764.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_826.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_828.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_808.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_832.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_834.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_836.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_830.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_838.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_840.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_842.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_844.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_846.geometry}
                    material={materials.color_brown}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
              </group>
            </group>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <group position={[0, 0, 0.002]}>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_851.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_853.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_855.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_857.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_859.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_861.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_863.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_865.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_867.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_869.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_871.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_873.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_875.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_877.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_879.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_881.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_883.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_885.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_887.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_889.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_891.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_893.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_895.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_897.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_899.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_901.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_903.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_905.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_907.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_909.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_911.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_913.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_915.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_917.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_919.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_921.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_923.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_925.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_927.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_929.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_931.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_933.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_935.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_937.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_939.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_941.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_943.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_945.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_947.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_949.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_951.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_953.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_955.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_957.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_959.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_961.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_963.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_965.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_967.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_969.geometry}
                      material={materials.color_grey}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                </group>
              </group>
              <group position={[0, 0, 0.002]}>
                <group position={[0, 0, 0.002]}>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_973.geometry}
                      material={materials.material}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                </group>
                <group position={[0, 0, 0.002]}>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_976.geometry}
                      material={materials.material}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                </group>
              </group>
              <group position={[0, 0, 0.002]}>
                <group position={[0, 0, 0.002]}>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_982.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_984.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_986.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_988.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_990.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_992.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_994.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_996.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_998.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_980.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_1000.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_1002.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_1004.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_1006.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_1008.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                  <group position={[0, 0, 0.002]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_1010.geometry}
                      material={materials.color_blk}
                      position={[9482.508, 0, 0.002]}
                    />
                  </group>
                </group>
              </group>
            </group>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1018.geometry}
                  material={materials.color_blk}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
            </group>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1013.geometry}
                  material={materials.color_darkBlue}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1015.geometry}
                  material={materials.color_darkBlue}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
            </group>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1025.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1023.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1027.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1029.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1031.geometry}
                  material={materials.color_darkgGrey}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
            </group>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1034.geometry}
                  material={materials.color_white}
                  position={[9482.508, 0, 0.002]}
                />
              </group>
            </group>
            <group position={[0, 0, 0.002]}>
              <group position={[0, 0, 0.002]}>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1038.geometry}
                    material={materials.color_darkgGrey}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1040.geometry}
                    material={materials.color_darkgGrey}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1042.geometry}
                    material={materials.color_darkgGrey}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
                <group position={[0, 0, 0.002]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1044.geometry}
                    material={materials.color_darkgGrey}
                    position={[9482.508, 0, 0.002]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <group position={[64.935, -6.225, 33.202]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.001}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6001.geometry}
              material={materials['color_darkBlue.001']}
              position={[-78259.852, -25053.908, -31081.004]}
              rotation={[-3.015, -1.538, 1.704]}
              scale={0.5}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/Cinema.glb')
