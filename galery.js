    const container = document.getElementById('cont');
    const jumbo = document.getElementById('jumbo');

    container.addEventListener('click', function (e) {
        if (e.target.className == 'thumb') {
            jumbo.src = e.target.src;
        }
    });
