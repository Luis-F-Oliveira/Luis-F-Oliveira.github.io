function on1() {
    var layer_1 = document.getElementById("layer-login-1")
    var layer_2 = document.getElementById("layer-login-2")

    if (layer_1.style.display === 'block') {
        layer_1.style.display = 'none'
    } else {
        layer_1.style.display = 'block'
    }

    if (layer_2.style.display === 'none') {
        layer_2.style.display = 'block'
    } else {
        layer_2.style.display = 'none'
    }
}

function on2() {
    var layer_3 = document.getElementById("layer-cad-1")
    var layer_4 = document.getElementById("layer-cad-2")

    if (layer_3.style.display === 'block') {
        layer_3.style.display = 'none'
    } else {
        layer_3.style.display = 'block'
    }

    if (layer_4.style.display === 'none') {
        layer_4.style.display = 'block'
    } else {
        layer_4.style.display = 'none'
    }
}