"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Html,
  useFBX,
  useGLTF,
} from "@react-three/drei";
import { Loader2 } from "lucide-react";

function GloveModel3D() {
  const { scene } = useGLTF(
    "https://firebasestorage.googleapis.com/v0/b/flowai-48928.firebasestorage.app/o/glove.glb?alt=media&token=b5b21b06-7f80-47f6-bd80-060f5a6cc2d9"
  );
  return (
    <primitive
      object={scene}
      rotation={[Math.PI, 0, 0]}
      position={[0, 1.5, 0]}
    />
  );
}

function ModelLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 text-foreground">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
      </div>
    </Html>
  );
}

export function GloveModel() {
  return (
    <div className="w-full h-screen rounded-2xl bg-secondary/20 overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[3, 2, 3]} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1.5}
          minDistance={2}
          maxDistance={8}
        />

        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <spotLight
          position={[-10, -10, -10]}
          angle={0.15}
          penumbra={1}
          intensity={0.5}
        />

        <Suspense fallback={<ModelLoader />}>
          <GloveModel3D />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-3">
        <p className="text-xs text-muted-foreground text-center">
          Drag to rotate • Scroll to zoom • Right-click to pan
        </p>
      </div>
    </div>
  );
}
