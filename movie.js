
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({
    preserveDrawingBuffer: true
});

function screenie(){
    var imgData, imgNode;
    try {
        imgData = renderer.domElement.toDataURL();
        console.log(imgData);
    } 
    catch(e) {
        console.log("Browser does not support taking screenshot of 3d context");
        return;
    }
   imgNode = document.createElement("img");
   imgNode.src = imgData;
   document.body.appendChild(imgNode);
}

window.addEventListener("keyup", function(e){
    var imgData, imgNode;
    //Listen to 'P' key
    if(e.which !== 80) return;  
    try {
        imgData = renderer.domElement.toDataURL();
        console.log(imgData);
    } 
    catch(e) {
        console.log("Browser does not support taking screenshot of 3d context");
        return;
    }
   imgNode = document.createElement("img");
   imgNode.src = imgData;
   document.body.appendChild(imgNode);
});

function render() {
  requestAnimationFrame(render);
}

function main() {
  setTimeout(screenie, 41)
  render();
}

window.onload = main;
