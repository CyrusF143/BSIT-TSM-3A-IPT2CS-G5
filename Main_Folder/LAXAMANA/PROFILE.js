
/** SIDE BAR **/
function show() {
    document.getElementById('sidebar').classList.toggle('active');
}


/** DARKMODE/LIGHTMODE **/
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    document.getElementById('about').classList.toggle('light-bg');
    document.getElementById('sidebarButton').classList.toggle('night-mode');
    document.getElementById('Skill').classList.toggle('night-mode');
    document.getElementById('contacts').classList.toggle('night-mode');
});

