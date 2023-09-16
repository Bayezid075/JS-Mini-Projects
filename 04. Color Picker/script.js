const block = document.getElementsByClassName("block");
for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("mouseover", () => {
    const createdBtn = document.createElement("button");
    createdBtn.textContent = "Click for Copy";
    createdBtn.setAttribute("class", "hover_button");
    block[i].append(createdBtn);
  });
  block[i].addEventListener("mouseout", () => {
    const btn = block[i].querySelector("button");
    btn.remove();
    // console.log("mouseout fired!!!");
  });

  block[i].addEventListener("click", () => {
    const colorCode = block[i].style.background;
    const copyContent = async () => {
      try {
        await navigator.clipboard.writeText(colorCode);
        console.log("Content copied to clipboard");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    };
    copyContent();
    alert(`Your Color Code is ${colorCode}. Copied!!😍`);
  });
}
