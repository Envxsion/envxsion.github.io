const handleMouseMove = e =>{
    const { currentTarget: target } = e; //get position of proj

    //mouse positions relative to each card
    const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for(const proj of document.querySelectorAll(".proj")){
    proj.onmousemove = e => handleMouseMove(e);
}
