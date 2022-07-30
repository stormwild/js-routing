const initMenu = () => {
  const navItems = document.querySelectorAll("#main-menu > li > a");
  navItems.forEach((v) =>
    v.addEventListener("click", (e) => {
      e.preventDefault();
    })
  );
};

export default initMenu;
