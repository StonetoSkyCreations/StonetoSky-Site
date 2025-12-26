(() => {
  const body = document.body;
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const targetSelector = group.getAttribute("data-filter-target");
    const target = targetSelector ? document.querySelector(targetSelector) : null;

    if (!target) {
      return;
    }

    const buttons = Array.from(group.querySelectorAll("button[data-filter]"));
    const items = Array.from(target.querySelectorAll("[data-filter-item]"));

    const setFilter = (filter) => {
      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", button.dataset.filter === filter ? "true" : "false");
      });

      items.forEach((item) => {
        const categories = (item.dataset.filterItem || "").split(" ");
        const isMatch = filter === "all" || categories.includes(filter);
        item.hidden = !isMatch;
      });
    };

    const defaultButton = buttons.find((button) => button.getAttribute("aria-pressed") === "true") || buttons[0];
    if (defaultButton) {
      setFilter(defaultButton.dataset.filter);
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        setFilter(button.dataset.filter);
      });
    });
  });
})();
