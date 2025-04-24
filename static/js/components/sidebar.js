export function initSidebarToggle() {
    const sidebar = document.querySelector('.app-sidebar');
    const navbar = document.querySelector('.app-navbar');
    const content = document.querySelector('.app-content');
    const toggleButton = document.getElementById('button-sidebar-trigger');

    if (!sidebar || !navbar || !content || !toggleButton) return;

    toggleButton.addEventListener('click', () => {
        const collapsed = sidebar.classList.toggle('collapsed');

        if (collapsed) {
            sidebar.style.width = '64px';
            navbar.style.left = '64px';
            navbar.style.width = 'calc(100% - 64px)';
            content.style.left = '64px';
            content.style.width = 'calc(100% - 64px)';
          } else {
            sidebar.style.width = '248px';
            navbar.style.left = '248px';
            navbar.style.width = 'calc(100% - 248px)';
            content.style.left = '248px';
            content.style.width = 'calc(100% - 248px)';
          }
    })
}