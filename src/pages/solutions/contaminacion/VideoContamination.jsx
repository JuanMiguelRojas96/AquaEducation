import { useVideoTexture } from "@react-three/drei"
import { useCallback, useState, useEffect } from "react";


const VideoContamination = (props) => {
  const texture = useVideoTexture("/videos/contaminacion-del-agua.mp4", {
    muted: false,
    loop: false,
    start: true
  });

  const [pause, setPause] = useState(false);

  const handleVideo = useCallback(
    (e) => {
      e.stopPropagation();
      if (texture?.image) {
        pause ? texture.image.play() : texture.image.pause();
        setPause(!pause);
      }
    },
    [pause, texture]
  );

  useEffect(() => {
    return () => {
      if (texture?.image) {
        texture.image.pause();
        texture.image.currentTime = 0;
      }
    };
  }, [texture]);


  return (
    <mesh {...props} onClick={handleVideo}>
      <planeGeometry args={[2, 1]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  )
}

export default VideoContamination