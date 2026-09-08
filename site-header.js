(function () {
  var path = window.location.pathname;
  var file = path.substring(path.lastIndexOf('/') + 1);

  // Skip on the index itself (root, empty, or index.html)
  if (file === '' || file === 'index.html') return;

  var bar = document.createElement('div');
  bar.setAttribute('style', [
    'position: sticky',
    'top: 0',
    'z-index: 9999',
    'display: flex',
    'justify-content: space-between',
    'align-items: center',
    'gap: 12px',
    'padding: 8px 16px',
    'background: #1b1b1b',
    'color: #eee',
    'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    'font-size: 13px',
    'box-shadow: 0 1px 4px rgba(0,0,0,0.3)'
  ].join(';'));

  var brand = document.createElement('span');
  brand.textContent = 'anotherpleb';
  brand.setAttribute('style', [
    'position: absolute',
    'left: 50%',
    'top: 50%',
    'transform: translate(-50%, -50%)',
    'color: #fff',
    'font-weight: 600',
    'letter-spacing: 0.03em',
    'pointer-events: none'
  ].join(';'));

  var back = document.createElement('a');
  back.href = './';
  back.textContent = '← Back to index';
  back.setAttribute('style', 'color:#8ab4f8;text-decoration:none;');

  var download = document.createElement('a');
  download.href = file;
  download.download = file;
  download.textContent = 'Download this page';
  download.setAttribute('style', [
    'color:#eee',
    'text-decoration:none',
    'border:1px solid #555',
    'padding:4px 10px',
    'border-radius:4px'
  ].join(';'));

  bar.appendChild(back);
  bar.appendChild(brand);
  bar.appendChild(download);
  document.body.insertBefore(bar, document.body.firstChild);
})();
