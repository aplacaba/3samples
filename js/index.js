let cube, scene, camera, renderer
let ADD = 0.1

const createCube = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({color: 0x00a1cb})
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
}

const init = () => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xababab)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 5

  createCube()

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
}

const mainLoop = () => {
  //cube.position.x += ADD
  //cube.rotation.z -= ADD
  cube.rotation.y += ADD

  //if (cube.position.x <= -3 || cube.position.x >= 3) ADD *= -1

  renderer.render(scene, camera)
  requestAnimationFrame(mainLoop)
}

init()
mainLoop()
