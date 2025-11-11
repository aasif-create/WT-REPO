
document.addEventListener('DOMContentLoaded', function () {
  const nodes = Array.from(document.querySelectorAll('.node'));
  const titleEl = document.getElementById('infoTitle');
  const descEl  = document.getElementById('infoDesc');

  nodes.forEach(n => {
    n.setAttribute('tabindex', '0');
  });

  function showInfo(node) {
    const t = node.dataset.title || 'Untitled';
    const d = node.dataset.desc || 'No description available.';
    titleEl.textContent = t;
    descEl.textContent  = d;
 
    nodes.forEach(x => x.classList.remove('active'));
    node.classList.add('active');
  }

  nodes.forEach(node => {
    node.addEventListener('click', () => showInfo(node));
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showInfo(node);
      }
    });
  });

  
  const defaultNode = document.querySelector('.highlighted') || nodes[0];
  if (defaultNode) showInfo(defaultNode);
});
