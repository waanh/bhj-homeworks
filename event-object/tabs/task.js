class Tabs {
    constructor(container) {
      this.container = container;
      this.tabs = Array.from(container.querySelectorAll('.tab'));
      this.contents = Array.from(container.querySelectorAll('.tab__content'));
  
      this.registerEvents();
    }
  
    registerEvents() {
      this.tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          this.switchTab(index);
        });
      });
    }
  
    switchTab(index) {
      this.tabs.forEach((tab, tabIndex) => {
        if (tabIndex === index) {
          tab.classList.add('tab_active');
        } else {
          tab.classList.remove('tab_active');
        }
      });
  
      this.contents.forEach((content, contentIndex) => {
        if (contentIndex === index) {
          content.classList.add('tab__content_active');
        } else {
          content.classList.remove('tab__content_active');
        }
      });
    }
  }
  
  document.querySelectorAll('.tabs').forEach(tabsContainer => {
    new Tabs(tabsContainer);
  });
  