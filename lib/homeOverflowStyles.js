export function addOverflowHidden () {
    document.querySelector('body').style.overflow = 'hidden'
    document.getElementById('__next').style.overflow = 'hidden'
}

export function removeOverflowHidden () {
    document.querySelector('body').style.overflow = 'scroll'
    document.getElementById('__next').style.overflow = 'scroll'
}