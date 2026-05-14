import JewelryScene from './JewelryScene.jsx'

function FloatingRing({
  accentColor = '#d7b273',
  className = '',
  modelPath = '/Free Snake ring - 16,0 obj.obj',
  targetSize = 2.8,
}) {
  return (
    <JewelryScene
      accentColor={accentColor}
      autoRotateSpeed={0.34}
      baseRotation={[0.28, 0.75, -0.1]}
      cameraPosition={[0, 0.35, 4.6]}
      className={className}
      modelPath={modelPath}
      targetSize={targetSize}
    />
  )
}

export default FloatingRing
