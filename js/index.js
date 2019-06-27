let cube, scene, camera, renderer, sphere
let ADD = 0.01

const createSphere = () => {
  let geometry = new THREE.SphereGeometry(5, 30, 30)
  let material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
  sphere = new THREE.Mesh(geometry, material)
  scene.add(sphere)
}

const createCube = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({color: 0x00a1cb})
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
}

const init = () => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 20

  //createCube()
  createSphere()

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
}

const mainLoop = () => {
  //cube.position.x += ADD
  //cube.rotation.z -= ADD
  //cube.rotation.y += ADD
  //
  sphere.rotation.x += ADD
  //sphere.rotation.y += ADD

  renderer.render(scene, camera)
  requestAnimationFrame(mainLoop)
}

init()
mainLoop()
