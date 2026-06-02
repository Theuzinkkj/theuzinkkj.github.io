const consoleTabs = document.querySelectorAll('.console-tab');
const consolePanels = document.querySelectorAll('.console-panel');
const stackFilters = document.querySelectorAll('.stack-filter');
const stackItems = document.querySelectorAll('.stack-cloud span');
const tiltTargets = document.querySelectorAll('[data-tilt]');

consoleTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const panelName = tab.dataset.panel;

    consoleTabs.forEach((item) => item.classList.remove('is-active'));
    consolePanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.panelContent === panelName);
    });

    tab.classList.add('is-active');
  });
});

stackFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const activeFilter = filter.dataset.filter;

    stackFilters.forEach((item) => item.classList.remove('is-active'));
    filter.classList.add('is-active');

    stackItems.forEach((item) => {
      const groups = item.dataset.stack.split(' ');
      item.classList.toggle('is-dimmed', !groups.includes(activeFilter));
    });
  });
});

tiltTargets.forEach((target) => {
  target.addEventListener('mousemove', (event) => {
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -4;

    target.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  target.addEventListener('mouseleave', () => {
    target.style.transform = '';
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
