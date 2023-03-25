let treeLeft = document.querySelector('.tree-left'),
    treeRight = document.querySelector('.tree-right'),
    gateLeft = document.querySelector('.gate-left'),
    gateRight = document.querySelector('.gate-right');

window.addEventListener('scroll', function () {
    let scrollValue = this.window.scrollY

    gateLeft.style.marginLeft = scrollValue * 0.15 + 'px'
    gateRight.style.marginRight = scrollValue * 0.15 + 'px'
    treeLeft.style.left = scrollValue * -1 + 'px'
    treeRight.style.right = scrollValue * -1 + 'px'
})

