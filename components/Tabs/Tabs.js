class TabLink {
  constructor(element) {

    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.element.dataset.tab}"]`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {
      this.select();
  })
  };

  select() {
    const links = document.querySelectorAll(".tabs-link");
    Array.from(links).forEach(link => link.classList.remove("tabs-link-selected"));
    this.element.classList.toggle("tabs-link-selected");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tabs-item");
    Array.from(items).forEach(item=> item.classList.remove("tabs-item-selected"));
    this.element.classList.toggle("tabs-item-selected");
  }
}

const links = document.querySelectorAll(".tabs-link").forEach( tablink => new TabLink(tablink));