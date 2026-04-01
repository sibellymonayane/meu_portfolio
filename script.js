const data = [
      { img: 'https://storage.googleapis.com/operfluxo/projetos_gerais/capa_sibelly.png', titulo: 'Meu Portfólio', link: '#' }
    ];

    document.getElementById('render-projetos').innerHTML = data.map(item => `
      <div class="glass-panel p-card">
        <img src="${item.img}" alt="${item.titulo}">
        <h3>${item.titulo}</h3>
        <a href="${item.link}">Ver GitHub</a>
      </div>
    `).join('');

    const tgl = document.getElementById('theme-toggle');
    tgl.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      tgl.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });