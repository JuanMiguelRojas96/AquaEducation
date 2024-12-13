import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const PostProcessing = () => {
  return (
    <EffectComposer>
      <Noise premultiply blendFunction={BlendFunction.ADD}/>
    </EffectComposer>
  );
};

export default PostProcessing;