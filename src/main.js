import * as THREE from 'three'
import './style.css'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({
  antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
//cube element
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000
})
//create the cube
const cube = new THREE.Mesh(geometry, material)

//cube Animation

cube.rotation.x += 0.01
cube.rotation.y += 0.01

cube.requ

scene.add(cube)
// prespective of the camera 
camera.position.set(1,1,3)
camera.lookAt(cube.position)

//background color 
scene.background = new THREE.Color(0xFEBFBF )

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

animate()