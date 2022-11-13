var app = { };

app.navButton = document.getElementById('nav-show-icon');
app.navHideButton = document.getElementById('nav-hide-icon');

app.nav = document.getElementById('primary-nav');

app.navButton.addEventListener('click', function () {
	app.nav.classList.add('visible');
});

app.navHideButton.addEventListener('click', function () {
	app.nav.classList.remove('visible');
});
