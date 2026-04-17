// ============================================================
//  ШЕЖІРЕ — Family Tree
// ============================================================

// ── DATA ────────────────────────────────────────────────────
// parentId → id того родителя семьи (тот у кого есть parentId = "дитя семьи")
// spouseId → супруг(а), вошедший в семью (у него/неё parentId = null)
let people = [
  { id: 1,  name: 'Ниязхан',  birth: 1935, death: null, gender: 'male',   note: 'Основатель рода', spouseId: 2,  parentId: null },
  { id: 2,  name: 'Ақыш',    birth: 1938, death: null, gender: 'female', note: '',                spouseId: 1,  parentId: null },

  { id: 3,  name: 'Айгул',    birth: 1960, death: null, gender: 'female', note: '', spouseId: 4,  parentId: 1 },
  { id: 4,  name: 'Бауыржан', birth: 1958, death: null, gender: 'male',   note: '', spouseId: 3,  parentId: null },
  { id: 5,  name: 'Бақытгүл',  birth: 1962, death: null, gender: 'female', note: '', spouseId: null, parentId: 1 },
  { id: 6,  name: 'Алмас',    birth: 1965, death: null, gender: 'male',   note: '', spouseId: 7,  parentId: 1 },
  { id: 7,  name: 'Лаззат',   birth: 1967, death: null, gender: 'female', note: '', spouseId: 6,  parentId: null },
  { id: 8,  name: 'Наргүл',   birth: 1968, death: null, gender: 'female', note: '', spouseId: 9,  parentId: 1 },
  { id: 9,  name: 'Сәкен',    birth: 1966, death: null, gender: 'male',   note: '', spouseId: 8,  parentId: null },
  { id: 10, name: 'Берік',    birth: 1970, death: null, gender: 'male',   note: '', spouseId: 11, parentId: 1 },
  { id: 11, name: 'Жұлдыз',   birth: 1972, death: null, gender: 'female', note: '', spouseId: 10, parentId: null },
  { id: 12, name: 'Серік',    birth: 1973, death: null, gender: 'male',   note: '', spouseId: 13, parentId: 1 },
  { id: 13, name: 'Әсел',      birth: 1975, death: null, gender: 'female', note: '', spouseId: 12, parentId: null },
  { id: 14, name: 'Әсемгүл',    birth: 1978, death: null, gender: 'female', note: '', spouseId: null, parentId: 1 },

  // Дети Айгул
  { id: 15, name: 'Ертөре',   birth: 1993, death: null, gender: 'male',   note: '', spouseId: null, parentId: 3 },
  { id: 16, name: 'Балауса',  birth: 1995, death: null, gender: 'female', note: '', spouseId: null, parentId: 3 },
  { id: 17, name: 'Нуржан',   birth: 2000, death: null, gender: 'male',   note: '', spouseId: null, parentId: 3 },
  { id: 18, name: 'Аяулым',  birth: 2004, death: null, gender: 'female', note: '', spouseId: null, parentId: 3 },

  // Дети Алмас
  { id: 19, name: 'Алмат',  birth: 1993, death: null, gender: 'male',   note: '', spouseId: null, parentId: 6 },
  { id: 20, name: 'Адия',     birth: 2009, death: null, gender: 'female', note: '', spouseId: 38, parentId: 6 },
  { id: 21, name: 'Азамат',    birth: 2010, death: null, gender: 'male',   note: '', spouseId: null, parentId: 6 },
  { id: 38, name: 'Мирас',    birth: 2002, death: null, gender: 'male',   note: '', spouseId: 20, parentId: null },


  // Ребёнок Ажар
  { id: 22, name: 'Алиар',    birth: 2025, death: null, gender: 'male', note: '', spouseId: null, parentId: 20 },

  { id: 29, name: 'Сания',    birth: 2007, death: null, gender: 'female', note: '', spouseId: null, parentId: 10 },
  { id: 30, name: 'Аружан',   birth: 2008, death: null, gender: 'female', note: '', spouseId: null, parentId: 10 },
  { id: 31, name: 'Бекcулан', birth: 2012, death: null, gender: 'male',   note: '', spouseId: null, parentId: 10 },
  { id: 32, name: 'Арлан',    birth: 2003, death: null, gender: 'male',   note: '', spouseId: null, parentId: 10 },


  // Дети Азамат
  { id: 24, name: 'Диас',     birth: 2003, death: null, gender: 'male',   note: '', spouseId: null, parentId: 8 },
  { id: 25, name: 'Ильяс',    birth: 2007, death: null, gender: 'male',   note: '', spouseId: null, parentId: 8 },
  { id: 26, name: 'Алтынай',  birth: 2010, death: null, gender: 'female', note: '', spouseId: null, parentId: 8 },
  { id: 27, name: 'Мирас',    birth: 2012, death: null, gender: 'male',   note: '', spouseId: null, parentId: 8 },
  { id: 28, name: 'Жулдызай', birth: 2017, death: null, gender: 'female', note: '', spouseId: null, parentId: 8 },

  // Дети Берік
  { id: 33, name: 'Дания',    birth: 2006, death: null, gender: 'female', note: '', spouseId: null, parentId: 12 },
  { id: 34, name: 'Аида',     birth: 2010, death: null, gender: 'female', note: '', spouseId: null, parentId: 12 },
  { id: 35, name: 'Нұркен',    birth: 2012, death: null, gender: 'male',   note: '', spouseId: null, parentId: 12 },
  { id: 36, name: 'Ерлен',    birth: 2014, death: null, gender: 'male',   note: '', spouseId: null, parentId: 12 },
  { id: 37, name: 'Ерәмір',  birth: 2022, death: null, gender: 'male',   note: '', spouseId: null, parentId: 12 },
];

let nextId = 200;
let selectedId = null;

// ── HELPERS ─────────────────────────────────────────────────
const byId    = id => people.find(p => p.id === id);
const emoji   = g  => g === 'male' ? '👨' : '👩';
const yearLabel = p => {
  if (p.birth && p.death) return `${p.birth}–${p.death}`;
  if (p.birth) return String(p.birth);
  return '';
};

// ── LAYOUT CONSTANTS ─────────────────────────────────────────
const SLOT_W  = 230;
const GEN_H   = 180;
const PAD_X   = 120;
const PAD_Y   = 100;

// ── TREE LAYOUT ──────────────────────────────────────────────
// "head" = person WITH a parentId (the family's child).
// Married-in spouses have no parentId; they attach to the head.
// Root = head with no parentId (or the founding couple, both without parentId).

function isHead(id) {
  const p = byId(id);
  if (!p) return false;
  if (p.parentId) return true;
  // No parentId: root if spouse also has no parentId (or no spouse)
  if (!p.spouseId) return true;
  const sp = byId(p.spouseId);
  return !sp || !sp.parentId;
}

function headChildren(headId) {
  const h = byId(headId);
  if (!h) return [];
  // Children are those whose parentId === headId OR headId's spouseId
  const spId = h.spouseId;
  return people.filter(p =>
    isHead(p.id) && (p.parentId === headId || (spId && p.parentId === spId))
  );
}

function computeLayout() {
  const heads = people.filter(p => isHead(p.id));
  const roots = heads.filter(h => {
    if (h.parentId) return false;
    if (!h.spouseId) return true;
    const sp = byId(h.spouseId);
    if (!sp) return true;
    if (sp.parentId) return false;   // married-in spouse → not a root
    return h.id < sp.id;             // both rootless couple → only lower id is root
  });

  // Assign generation depth via BFS
  const depth = {};
  const queue = roots.map(r => ({ id: r.id, d: 0 }));
  const visited = new Set();
  while (queue.length) {
    const { id, d } = queue.shift();
    if (visited.has(id)) continue;
    visited.add(id);
    depth[id] = d;
    headChildren(id).forEach(ch => {
      if (!visited.has(ch.id)) queue.push({ id: ch.id, d: d + 1 });
    });
  }

  // Count leaves (for centering parents)
  const leafCount = {};
  function countLeaves(id) {
    if (id in leafCount) return leafCount[id];
    const kids = headChildren(id);
    leafCount[id] = kids.length === 0 ? 1 : kids.reduce((s, k) => s + countLeaves(k.id), 0);
    return leafCount[id];
  }
  roots.forEach(r => countLeaves(r.id));

  // Assign x positions
  const pos = {};
  let cursor = PAD_X;

  function assignX(id) {
    const d = depth[id] ?? 0;
    const kids = headChildren(id);
    if (kids.length === 0) {
      pos[id] = { x: cursor, y: PAD_Y + d * GEN_H };
      cursor += SLOT_W;
      return;
    }
    const x0 = cursor;
    kids.forEach(k => assignX(k.id));
    const x1 = cursor - SLOT_W;
    pos[id] = { x: (x0 + x1) / 2, y: PAD_Y + d * GEN_H };
  }
  roots.forEach(r => assignX(r.id));

  // Copy position to married-in spouses
  const allPos = { ...pos };
  people.forEach(p => {
    if (allPos[p.id]) return;
    if (p.spouseId && allPos[p.spouseId]) {
      allPos[p.id] = allPos[p.spouseId];
    }
  });

  return allPos;
}

// ── CANVAS PAN / ZOOM ─────────────────────────────────────────
const wrap   = document.getElementById('canvasWrap');
const canvas = document.getElementById('canvas');
let scale = 0.85, tx = 80, ty = 40;
let dragging = false, lastX = 0, lastY = 0;

function applyTransform() {
  canvas.style.transform = `translate(${tx}px,${ty}px) scale(${scale})`;
  const el = document.querySelector('.minimap__zoom');
  if (el) el.textContent = Math.round(scale * 100) + '%';
}

wrap.addEventListener('mousedown', e => {
  if (e.target.closest('.person-card,.panel,.modal-overlay,.header,.legend,.minimap')) return;
  dragging = true; lastX = e.clientX; lastY = e.clientY;
  wrap.style.cursor = 'grabbing';
});
window.addEventListener('mousemove', e => {
  if (!dragging) return;
  tx += e.clientX - lastX; ty += e.clientY - lastY;
  lastX = e.clientX; lastY = e.clientY;
  applyTransform();
});
window.addEventListener('mouseup', () => { dragging = false; wrap.style.cursor = ''; });
wrap.addEventListener('wheel', e => {
  e.preventDefault();
  const f = e.deltaY < 0 ? 1.1 : 0.91;
  const r = wrap.getBoundingClientRect();
  const mx = e.clientX - r.left, my = e.clientY - r.top;
  tx = mx - (mx - tx) * f;
  ty = my - (my - ty) * f;
  scale = Math.min(2.5, Math.max(0.2, scale * f));
  applyTransform();
}, { passive: false });

document.getElementById('btnZoomIn').onclick  = () => { scale = Math.min(2.5, scale * 1.15); applyTransform(); };
document.getElementById('btnZoomOut').onclick = () => { scale = Math.max(0.2,  scale * 0.87); applyTransform(); };
document.getElementById('btnReset').onclick   = () => { scale = 0.85; tx = 80; ty = 40; applyTransform(); };

// ── RENDER ───────────────────────────────────────────────────
function render() {
  const nodesEl = document.getElementById('nodes');
  const svgEl   = document.getElementById('svgLines');
  nodesEl.innerHTML = '';
  svgEl.innerHTML   = '';

  let pos;
  try { pos = computeLayout(); }
  catch(e) { console.error('Layout error:', e); return; }

  // ── SVG Lines ──
  people.forEach(p => {
    if (!isHead(p.id)) return;
    const pPos = pos[p.id];
    if (!pPos) return;

    headChildren(p.id).forEach(ch => {
      const cPos = pos[ch.id];
      if (!cPos) return;
      const x1 = pPos.x, y1 = pPos.y + 32;
      const x2 = cPos.x, y2 = cPos.y - 32;
      const mid = (y1 + y2) / 2;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M${x1},${y1} C${x1},${mid} ${x2},${mid} ${x2},${y2}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#8b6a50');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('stroke-opacity', '0.5');
      svgEl.appendChild(path);
    });
  });

  // ── Nodes ──
  const rendered = new Set();

  people.forEach(p => {
    if (rendered.has(p.id)) return;
    const pPos = pos[p.id];
    if (!pPos) return;

    const sp = p.spouseId ? byId(p.spouseId) : null;
    const hasVisibleSpouse = sp && pos[sp.id];

    if (hasVisibleSpouse && !rendered.has(sp.id)) {
      // Render couple — show the "head" member second if they have parentId (more natural)
      // Convention: male on left
      const [left, right] = p.gender === 'male' ? [p, sp] : [sp, p];
      rendered.add(p.id);
      rendered.add(sp.id);

      const wrapper = document.createElement('div');
      wrapper.style.cssText = `position:absolute;left:${pPos.x}px;top:${pPos.y}px;
        transform:translate(-50%,-50%);display:flex;align-items:flex-start;gap:6px;`;

      const isRoot = isHead(p.id) && !p.parentId && !sp.parentId;
      if (isRoot) {
        const badge = document.createElement('div');
        badge.style.cssText = `position:absolute;top:-20px;left:50%;transform:translateX(-50%);
          background:#c9943a;color:#fff;font-size:10px;font-weight:800;padding:2px 10px;
          border-radius:20px;white-space:nowrap;pointer-events:none;`;
        badge.textContent = 'Бабушка и Дедушка';
        wrapper.appendChild(badge);
      }

      wrapper.appendChild(makeCard(left));
      const heart = document.createElement('div');
      heart.style.cssText = 'color:#c96880;font-size:1rem;margin-top:20px;flex-shrink:0;';
      heart.textContent = '♥';
      wrapper.appendChild(heart);
      wrapper.appendChild(makeCard(right));
      nodesEl.appendChild(wrapper);

    } else if (!rendered.has(p.id)) {
      rendered.add(p.id);
      const wrapper = document.createElement('div');
      wrapper.style.cssText = `position:absolute;left:${pPos.x}px;top:${pPos.y}px;
        transform:translate(-50%,-50%);`;
      wrapper.appendChild(makeCard(p));
      nodesEl.appendChild(wrapper);
    }
  });

  applyTransform();
}

function makeCard(person) {
  const card = document.createElement('div');
  card.className = `person-card person-card--${person.gender}` +
    (person.death ? ' person-card--deceased' : '') +
    (selectedId === person.id ? ' selected' : '');
  card.dataset.id = person.id;

  const circle = document.createElement('div');
  circle.className = 'person-card__circle';
  circle.textContent = emoji(person.gender);
  card.appendChild(circle);

  const nm = document.createElement('div');
  nm.className = 'person-card__name';
  nm.textContent = person.name;
  card.appendChild(nm);

  const yr = yearLabel(person);
  if (yr) {
    const yrEl = document.createElement('div');
    yrEl.className = 'person-card__year';
    yrEl.textContent = yr;
    card.appendChild(yrEl);
  }

  card.addEventListener('click', e => { e.stopPropagation(); openPanel(person.id); });
  return card;
}

// ── PANEL ────────────────────────────────────────────────────
function openPanel(id) {
  const person = byId(id);
  if (!person) return;
  selectedId = id;
  render();

  document.getElementById('panelAvatar').className = `panel__avatar panel__avatar--${person.gender}`;
  document.getElementById('panelAvatar').textContent = emoji(person.gender);
  document.getElementById('panelName').textContent  = person.name;
  document.getElementById('panelYear').textContent  = yearLabel(person);
  document.getElementById('panelMeta').textContent  = person.note || 'Нет описания';

  const relBox = document.getElementById('panelRelations');
  relBox.innerHTML = '';

  if (person.spouseId) { const sp = byId(person.spouseId); if (sp) addRel(relBox, 'Супруг(а)', sp); }
  if (person.parentId) {
    const par = byId(person.parentId);
    if (par) {
      addRel(relBox, 'Родитель', par);
      if (par.spouseId) { const sp2 = byId(par.spouseId); if (sp2) addRel(relBox, 'Родитель', sp2); }
    }
  }
  people.filter(p => p.parentId === id || (person.spouseId && p.parentId === person.spouseId))
        .forEach(ch => addRel(relBox, 'Ребёнок', ch));

  document.getElementById('panel').classList.add('open');
  wrap.classList.add('panel-open');
  document.getElementById('panelEdit').onclick     = () => openModal('edit', id);
  document.getElementById('panelAddChild').onclick = () => openModal('child', id);
}

function addRel(box, label, person) {
  const row = document.createElement('div');
  row.className = 'panel__rel-row';
  const lbl = document.createElement('span'); lbl.className = 'panel__rel-label'; lbl.textContent = label;
  const nm  = document.createElement('span'); nm.className  = 'panel__rel-name';  nm.textContent = person.name;
  nm.onclick = () => openPanel(person.id);
  row.appendChild(lbl); row.appendChild(nm);
  box.appendChild(row);
}

document.getElementById('panelClose').onclick = () => {
  document.getElementById('panel').classList.remove('open');
  wrap.classList.remove('panel-open');
  selectedId = null; render();
};

// ── MODAL ────────────────────────────────────────────────────
function openModal(mode, targetId) {
  document.getElementById('memberForm').reset();
  document.getElementById('fId').value = '';
  document.getElementById('fParentId').value = '';

  if (mode === 'add') {
    document.getElementById('modalTitle').textContent = 'Добавить человека';
  } else if (mode === 'child') {
    document.getElementById('modalTitle').textContent = 'Добавить ребёнка';
    document.getElementById('fParentId').value = targetId;
  } else if (mode === 'edit') {
    const p = byId(targetId);
    document.getElementById('modalTitle').textContent = 'Редактировать';
    document.getElementById('fId').value     = p.id;
    document.getElementById('fName').value   = p.name;
    document.getElementById('fBirth').value  = p.birth || '';
    document.getElementById('fDeath').value  = p.death || '';
    document.getElementById('fGender').value = p.gender;
    document.getElementById('fNote').value   = p.note || '';
  }
  document.getElementById('modalOverlay').classList.add('open');
}

const closeModal = () => document.getElementById('modalOverlay').classList.remove('open');
document.getElementById('btnAddMember').onclick = () => openModal('add');
document.getElementById('modalClose').onclick   = closeModal;
document.getElementById('modalCancel').onclick  = closeModal;
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

document.getElementById('memberForm').addEventListener('submit', e => {
  e.preventDefault();
  const id       = parseInt(document.getElementById('fId').value) || null;
  const parentId = parseInt(document.getElementById('fParentId').value) || null;
  const name     = document.getElementById('fName').value.trim();
  const birth    = parseInt(document.getElementById('fBirth').value) || null;
  const death    = parseInt(document.getElementById('fDeath').value) || null;
  const gender   = document.getElementById('fGender').value;
  const note     = document.getElementById('fNote').value.trim();
  if (!name) return;
  if (id) {
    Object.assign(byId(id), { name, birth, death, gender, note });
  } else {
    people.push({ id: nextId++, name, birth, death, gender, note, spouseId: null, parentId });
  }
  closeModal();
  render();
  if (selectedId) openPanel(selectedId);
});

// ── MINIMAP ──────────────────────────────────────────────────
const mm = document.createElement('div');
mm.className = 'minimap';
mm.innerHTML = `<div style="font-size:.7rem;color:#8b6a50">Масштаб</div>
                <div class="minimap__zoom">85%</div>`;
document.body.appendChild(mm);

// ── INIT ─────────────────────────────────────────────────────
render();
applyTransform();
