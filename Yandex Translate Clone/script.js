const NavbarItem = document.querySelectorAll(".NavbarItem");

NavbarItem.forEach(item => {
    const info = item.querySelector("span");

    item.addEventListener("mouseover", () => {
        info.style.display = "flex";
    });

    item.addEventListener("mouseout", () => {
        info.style.display = "none";
    });
});


const TextArea1 = document.querySelector("#TextArea1");
const CloseBtn = document.querySelector("#CloseBtn");

CloseBtn.addEventListener("click", () => {
    TextArea1.value = "";
});


const CopyBtn = document.querySelector("#CopyBtn");
const CopyInfo = document.querySelector("#CopyInfo");

CopyBtn.addEventListener("click", () => {
    TextArea1.select();
    document.execCommand("copy");
    CopyInfo.style.display = "inline-block";
    setTimeout(() => {
        CopyInfo.style.display = "none";
    }, 750);

}
);


let flag= 0;

const MenuResBtn = document.querySelector ("#MenuResBtn");

MenuResBtn.addEventListener("click", () => {
const ResNavbarItems = document.querySelector("#ResNavbarItems");

if (flag === 0) {
    ResNavbarItems.style.display = "flex";
    flag = 1;    
} else if (flag === 1){
    ResNavbarItems.style.display = "none";
    flag = 0;
}
}
);

