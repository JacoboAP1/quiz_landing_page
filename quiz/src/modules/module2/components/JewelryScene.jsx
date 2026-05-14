import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { ContactShadows, Float, Html } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import {
  Box3,
  Color,
  MathUtils,
  MeshPhysicalMaterial,
  Vector3,
} from 'three'
import useInView from '../hooks/useInView.js'

function LoaderMessage() {
  return (
    <Html center>
      <div className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-champagne/70 backdrop-blur-md">
        Loading piece
      </div>
    </Html>
  )
}

function FloatingModel({
  accentColor,
  autoRotateSpeed,
  baseRotation,
  modelPath,
  targetSize,
}) {
  const groupRef = useRef(null)
  const source = useLoader(OBJLoader, modelPath)

  const preparedModel = useMemo(() => {
    const clone = source.clone(true)
    const bounds = new Box3().setFromObject(clone)
    const center = bounds.getCenter(new Vector3())
    const size = bounds.getSize(new Vector3())
    const maxAxis = Math.max(size.x, size.y, size.z) || 1
    const normalizedScale = targetSize / maxAxis

    clone.traverse((child) => {
      if (!child.isMesh) {
        return
      }

      child.castShadow = true
      child.receiveShadow = true
      child.geometry.computeVertexNormals()
      child.material = new MeshPhysicalMaterial({
        color: new Color(accentColor),
        metalness: 1,
        roughness: 0.24,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        reflectivity: 1,
      })
    })

    return {
      clone,
      normalizedScale,
      position: [
        -center.x * normalizedScale,
        -center.y * normalizedScale,
        -center.z * normalizedScale,
      ],
    }
  }, [accentColor, source, targetSize])

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return
    }

    const elapsed = state.clock.getElapsedTime()
    groupRef.current.rotation.y += delta * autoRotateSpeed
    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.18,
      0.05,
    )
    groupRef.current.rotation.z = MathUtils.lerp(
      groupRef.current.rotation.z,
      -state.pointer.x * 0.14,
      0.05,
    )
    groupRef.current.position.y = Math.sin(elapsed * 1.15) * 0.12
  })

  return (
    <group ref={groupRef}>
      <Float floatIntensity={0.35} rotationIntensity={0.12} speed={1.4}>
        <group rotation={baseRotation}>
          <primitive
            object={preparedModel.clone}
            position={preparedModel.position}
            scale={preparedModel.normalizedScale}
          />
        </group>
      </Float>
    </group>
  )
}

function SceneContent({
  accentColor,
  autoRotateSpeed,
  baseRotation,
  modelPath,
  targetSize,
}) {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#050505', 6, 12]} />
      <ambientLight intensity={0.9} color="#fff7ec" />
      <hemisphereLight
        color="#fff9f0"
        groundColor="#1d140c"
        intensity={1.1}
      />
      <directionalLight
        castShadow
        color="#fff1cf"
        intensity={2.8}
        position={[3.8, 5.6, 4.8]}
        shadow-bias={-0.0002}
      />
      <pointLight color="#c98a30" intensity={22} position={[-3, -1, 3]} />
      <spotLight
        angle={0.28}
        castShadow
        color="#ffe2b8"
        intensity={40}
        penumbra={1}
        position={[0, 4, 6]}
      />

      <Suspense fallback={<LoaderMessage />}>
        <FloatingModel
          accentColor={accentColor}
          autoRotateSpeed={autoRotateSpeed}
          baseRotation={baseRotation}
          modelPath={modelPath}
          targetSize={targetSize}
        />
      </Suspense>

      <ContactShadows
        blur={2.4}
        color="#1b1209"
        far={4.5}
        opacity={0.7}
        position={[0, -1.65, 0]}
        scale={6}
      />
    </>
  )
}

function JewelryScene({
  accentColor = '#d7b273',
  autoRotateSpeed = 0.35,
  baseRotation = [0.2, 0.2, 0],
  cameraPosition = [0, 0.35, 4.4],
  className = '',
  modelPath,
  targetSize = 2.7,
}) {
  const [ref, inView] = useInView({ rootMargin: '140px 0px', threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`relative h-[340px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(215,178,115,0.18),rgba(255,255,255,0.02)_38%,rgba(0,0,0,0.92)_72%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-10 top-5 h-px bg-[linear-gradient(90deg,transparent,rgba(240,222,194,0.85),transparent)]" />
      <div className="pointer-events-none absolute inset-6 rounded-[1.3rem] border border-white/6" />
      <div className="pointer-events-none absolute left-8 top-8 h-24 w-24 rounded-full bg-rich-gold/10 blur-2xl" />

      {inView ? (
        <Canvas
          camera={{ fov: 30, position: cameraPosition }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true }}
          shadows
        >
          <SceneContent
            accentColor={accentColor}
            autoRotateSpeed={autoRotateSpeed}
            baseRotation={baseRotation}
            modelPath={modelPath}
            targetSize={targetSize}
          />
        </Canvas>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(255,255,255,0.01)_42%,rgba(0,0,0,0.96)_76%)]" />
      )}
    </div>
  )
}

export default JewelryScene
