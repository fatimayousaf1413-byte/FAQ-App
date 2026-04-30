const accordinoContent = document.querySelectorAll(".accordino-content");

accordinoContent.forEach((item , index) => {
    const header = item.querySelector("header");

    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".discription");

        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus" , "fa-minus")
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus" , "fa-plus")
        }
        removeOpen(index);
    });
});

function removeOpen (index1){
    accordinoContent.forEach((item2 , index2)=>{
        if(index1 != index2){
            item2.classList.remove("open")
            let des = item2.querySelector(".discription")
            des.style.height= '0px'
            item2.querySelector("i").classList.replace("fa-minus" , "fa-plus")
        }
    })
}