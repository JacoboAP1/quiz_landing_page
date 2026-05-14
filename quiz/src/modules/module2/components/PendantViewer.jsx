import JewelryScene from './JewelryScene.jsx'

function PendantViewer({
  accentColor = '#f0dec2',
  className = '',
  modelPath = '/golden pendant.obj',
}) {
  return (
    <JewelryScene
      accentColor={accentColor}
      autoRotateSpeed={0.28}
      baseRotation={[0.12, 0.35, 0.06]}
      cameraPosition={[0, 0.15, 4.8]}
      className={className}
      modelPath={modelPath}
      targetSize={2.3}
    />
  )
}

export default PendantViewer
