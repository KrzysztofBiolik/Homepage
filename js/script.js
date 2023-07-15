{
   const welcome = () => {
    console.log("Hello everyone")
   }
   
    const onChangeThemeClick = () => {
        const container = document.querySelector(".js-container");
        const changeWord = document.querySelector(".js-changeWord");

        container.classList.toggle("container--changeColor");
        container.classList.toggle("container--changeTextColor");
        changeWord.innerText = container.classList.contains("container--changeColor") ? "jasny" : "ciemny";
    };

    const init = () => {
        let changeThemeButton = document.querySelector(".js-themeChangeButton");
        changeThemeButton.addEventListener("click", onChangeThemeClick);

        welcome();
    };

    init();
}

