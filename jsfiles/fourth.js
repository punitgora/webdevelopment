console.log("hello")

let div;
let container= document.getElementById('container');
// let div = document.createElement("div");

for (let i=1;i<=5;i++) {
    div = document.createElement("div");
    div.innerText = `Box number ${i}`;
    div.onclick = function() {
        alert(`This is box number ${i}`)
    };
    container.appendChild(div);
}
