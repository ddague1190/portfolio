export function addCanvasStyles() {
    document.querySelector('canvas').style.overflow = 'hidden'
    document.querySelector('canvas').style.width = '100vw'
    document.querySelector('canvas').style.height = '100vh'
}

export function removeCanvasStyles() {
    document.querySelector('canvas').style.overflow = 'visible'
    document.querySelector('canvas').style.width = '100%'
    document.querySelector('canvas').style.height = '100%'
}