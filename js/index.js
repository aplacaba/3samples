let cube, scene, camera, renderer

const createCube = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({color: 0x00a1cb})
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
}

const init = () => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x8FBCD4)
  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 5

  createCube()

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  renderer.render(scene, camera)
}

const mainLoop = () => requestAnimationFrame(mainLoop)

init()
mainLoop()
