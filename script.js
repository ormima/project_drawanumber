const res = document.getElementById("res");

res.addEventListener("click", () => {
    let nr = Math.floor(Math.random()*50+1);
    res.innerText = nr;
})