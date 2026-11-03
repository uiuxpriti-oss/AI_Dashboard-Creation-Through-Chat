// <lm-icon name="IconsProperty1Search"> — renders a Lumenore icon from components/icons/icon-data.js
(function () {
  const base = new URL('.', document.currentScript ? document.currentScript.src : location.href).href;
  let data = null; const waiting = new Set();
  import(base + 'components/icons/icon-data.js').then(m => { data = m.default; waiting.forEach(el => el._render()); waiting.clear(); });
  class LmIcon extends HTMLElement {
    static get observedAttributes() { return ['name', 'gradient']; }
    connectedCallback() { this._render(); }
    attributeChangedCallback() { this._render(); }
    _render() {
      if (!data) { waiting.add(this); return; }
      const d = data[this.getAttribute('name')];
      if (!d) { this.innerHTML = ''; return; }
      const n = this.getAttribute('name');
      const cur = this.querySelector('svg');
      if (cur && cur.getAttribute('data-n') === n) return;
      // defer so a DOM clone (e.g. screenshot capture) that appends copied children afterwards isn't doubled
      queueMicrotask(() => {
        const c = this.querySelector('svg');
        if (c && c.getAttribute('data-n') === n) return;
        const g = this.getAttribute('gradient');
        let body = d.body, defs = '';
        if (g) {
          const id = 'lmg' + Math.random().toString(36).slice(2, 8);
          const stops = g.split('|').map((c, i, a) => '<stop offset="' + (a.length > 1 ? i / (a.length - 1) : 0) + '" stop-color="' + c.trim() + '"/>').join('');
          defs = '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">' + stops + '</linearGradient></defs>';
          body = body.replace(/currentColor/g, 'url(#' + id + ')');
          const vb = d.viewBox.split(' ').map(Number);
          body = '<g>' + body + '</g>';
          defs = defs.replace('gradientUnits="objectBoundingBox"', 'gradientUnits="userSpaceOnUse"').replace('x1="0" y1="0" x2="1" y2="1"', 'x1="' + vb[0] + '" y1="' + vb[1] + '" x2="' + (vb[0] + vb[2]) + '" y2="' + (vb[1] + vb[3]) + '"');
        }
        this.innerHTML = '<svg data-n="' + n + '" width="100%" height="100%" viewBox="' + d.viewBox + '" fill="none" style="display:block;overflow:hidden">' + defs + body + '</svg>';
      });
    }
  }
  if (!customElements.get('lm-icon')) customElements.define('lm-icon', LmIcon);
})();
