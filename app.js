// ============================================================
//  ШЕЖІРЕ — Family Tree  (collapsible)
// ============================================================

let people = [
  { id: 1,  name: 'Ниязхан',  birth: 1942, death: null, gender: 'male',   note: '', spouseId: 2,  parentId: null },
  { id: 2,  name: 'Ақыш',    birth: 1946, death: null, gender: 'female', note: '',                spouseId: 1,  parentId: null },

  { id: 3,  name: 'Айгул',    birth: 1970, death: null, gender: 'female', note: '', spouseId: 4,  parentId: 1 },
  { id: 4,  name: 'Бауыржан', birth: 1972, death: null, gender: 'male',   note: '', spouseId: 3,  parentId: null },
  { id: 5,  name: 'Бақытгүл',  birth: 1972, death: null, gender: 'female', note: '', spouseId: null, parentId: 1 },
  { id: 6,  name: 'Алмас',    birth: 1973, death: null, gender: 'male',   note: '', spouseId: 7,  parentId: 1 },
  { id: 7,  name: 'Лаззат',   birth: 1974, death: null, gender: 'female', note: '', spouseId: 6,  parentId: null },
  { id: 8,  name: 'Наргүл',   birth: 1975, death: null, gender: 'female', note: '', spouseId: 9,  parentId: 1 },
  { id: 9,  name: 'Сәкен',    birth: 1975, death: null, gender: 'male',   note: '', spouseId: 8,  parentId: null },
  { id: 10, name: 'Берік',    birth: 1977, death: null, gender: 'male',   note: '', spouseId: 11, parentId: 1 },
  { id: 11, name: 'Жұлдыз',   birth: 1981, death: null, gender: 'female', note: '', spouseId: 10, parentId: null },
  { id: 12, name: 'Серік',    birth: 1979, death: null, gender: 'male',   note: '', spouseId: 13, parentId: 1 },
  { id: 13, name: 'Әсел',      birth: 1981, death: null, gender: 'female', note: '', spouseId: 12, parentId: null },
  { id: 14, name: 'Әсемгүл',    birth: 1987, death: null, gender: 'female', note: '', spouseId: null, parentId: 1 },


  // Дети Айгул
  { id: 15, name: 'Ертөре',   birth: 1993, death: null, gender: 'male',   note: '', spouseId: null, parentId: 3 },
  { id: 16, name: 'Балауса',  birth: 1995, death: null, gender: 'female', note: '', spouseId: null, parentId: 3 },
  { id: 17, name: 'Нуржан',   birth: 2000, death: null, gender: 'male',   note: '', spouseId: null, parentId: 3 },
  { id: 18, name: 'Аяулым',  birth: 2011, death: null, gender: 'female', note: '', spouseId: null, parentId: 3 },

  // Дети Алмас
  { id: 19, name: 'Алмат',  birth: 1993, death: null, gender: 'male',   note: '', spouseId: null, parentId: 6 },
  { id: 20, name: 'Адия',     birth: 2003, death: null, gender: 'female', note: '', spouseId: 38, parentId: 6 },
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
  { id: 33, name: 'Дания',    birth: 2006, death: null, gender: 'female', note: 'The most beautiful girl', spouseId: null, parentId: 12 },
  { id: 34, name: 'Аида',     birth: 2010, death: null, gender: 'female', note: '', spouseId: null, parentId: 12 },
  { id: 35, name: 'Нұркен',    birth: 2012, death: null, gender: 'male',   note: '', spouseId: null, parentId: 12 },
  { id: 36, name: 'Ерлен',    birth: 2014, death: null, gender: 'male',   note: '', spouseId: null, parentId: 12 },
  { id: 37, name: 'Ерәмір',  birth: 2022, death: null, gender: 'male',   note: '', spouseId: null, parentId: 12 },
];
let nextId   = 200;
let selectedId = null;
let prevVisibleHeads = new Set();
let prevLines        = new Set();

// anchor: keeps a clicked node visually in place after layout recalculation
let anchorId   = null;
let anchorOldX = 0;
let anchorOldY = 0;

function setAnchor(headId) {
  const p = computeLayout();
  anchorId   = headId;
  anchorOldX = p[headId]?.x ?? 0;
  anchorOldY = p[headId]?.y ?? 0;
}

// ── EXPAND STATE ─────────────────────────────────────────────
// Set of headIds whose children are currently shown
const expanded = new Set();

// headId → parentHeadId (built by buildParentMap)
let parentHeadMap = {};

function buildParentMap() {
  parentHeadMap = {};
  people.filter(p => isHead(p.id)).forEach(h => {
    headChildren(h.id).forEach(ch => {
      if (!(ch.id in parentHeadMap)) parentHeadMap[ch.id] = h.id;
    });
  });
}

function isVisible(headId) {
  const ph = parentHeadMap[headId];
  if (ph === undefined) return true; // root — always visible
  return expanded.has(ph) && isVisible(ph);
}

function collapseAll(headId) {
  expanded.delete(headId);
  headChildren(headId).forEach(ch => collapseAll(ch.id));
}

// ── HELPERS ──────────────────────────────────────────────────
const byId      = id => people.find(p => p.id === id);
const emoji     = g  => g === 'male' ? '👨' : '👩';
const yearLabel = p  => {
  if (p.birth && p.death) return `${p.birth}–${p.death}`;
  if (p.birth) return String(p.birth);
  return '';
};

function isHead(id) {
  const p = byId(id);
  if (!p) return false;
  if (p.parentId) return true;
  if (!p.spouseId) return true;
  const sp = byId(p.spouseId);
  return !sp || !sp.parentId;
}

function headChildren(headId) {
  const h = byId(headId);
  if (!h) return [];
  const spId = h.spouseId;
  return people.filter(p =>
    isHead(p.id) && (p.parentId === headId || (spId && p.parentId === spId))
  );
}

// ── LAYOUT ───────────────────────────────────────────────────
const SLOT_W = 230;
const GEN_H  = 190;
const PAD_X  = 120;
const PAD_Y  = 100;

function computeLayout() {
  const heads = people.filter(p => isHead(p.id));
  const roots = heads.filter(h => {
    if (h.parentId) return false;
    if (!h.spouseId) return true;
    const sp = byId(h.spouseId);
    if (!sp) return true;
    if (sp.parentId) return false;
    return h.id < sp.id;
  });

  // BFS depth (only visible nodes)
  const depth = {};
  const queue = roots.map(r => ({ id: r.id, d: 0 }));
  const visited = new Set();
  while (queue.length) {
    const { id, d } = queue.shift();
    if (visited.has(id)) continue;
    visited.add(id);
    depth[id] = d;
    if (expanded.has(id)) {
      headChildren(id).forEach(ch => {
        if (!visited.has(ch.id)) queue.push({ id: ch.id, d: d + 1 });
      });
    }
  }

  // Leaf count (visible only)
  const leafCount = {};
  function countLeaves(id) {
    if (id in leafCount) return leafCount[id];
    const kids = expanded.has(id) ? headChildren(id) : [];
    leafCount[id] = kids.length === 0 ? 1 : kids.reduce((s, k) => s + countLeaves(k.id), 0);
    return leafCount[id];
  }
  roots.forEach(r => countLeaves(r.id));

  // Assign X
  const pos = {};
  let cursor = PAD_X;
  function assignX(id) {
    const d = depth[id] ?? 0;
    const kids = expanded.has(id) ? headChildren(id) : [];
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

  // Copy pos to married-in spouses
  const allPos = { ...pos };
  people.forEach(p => {
    if (allPos[p.id]) return;
    if (p.spouseId && allPos[p.spouseId]) allPos[p.id] = allPos[p.spouseId];
  });

  return allPos;
}

// ── CANVAS PAN / ZOOM ─────────────────────────────────────────
const wrap   = document.getElementById('canvasWrap');
const canvas = document.getElementById('canvas');

const isMobile = () => window.innerWidth <= 700;
let scale = isMobile() ? 0.9 : 0.95;
let tx = 0, ty = 0;
let dragging = false, lastX = 0, lastY = 0;

function centerView() {
  const r = wrap.getBoundingClientRect();
  tx = r.width / 2 - PAD_X * scale;
  ty = r.height / 2 - PAD_Y * scale;
}

function applyTransform() {
  canvas.style.transform = `translate(${tx}px,${ty}px) scale(${scale})`;
  const el = document.querySelector('.minimap__zoom');
  if (el) el.textContent = Math.round(scale * 100) + '%';
}

wrap.addEventListener('mousedown', e => {
  if (e.target.closest('.person-card,.heart-btn,.expand-btn,.panel,.modal-overlay,.header,.legend,.minimap')) return;
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
  scale = Math.min(2.5, Math.max(0.15, scale * f));
  applyTransform();
}, { passive: false });

// Touch
let touches = {};
let lastPinchDist = null;

wrap.addEventListener('touchstart', e => {
  if (e.target.closest('.panel,.modal-overlay,.header,.legend,.minimap')) return;
  [...e.changedTouches].forEach(t => { touches[t.identifier] = { x: t.clientX, y: t.clientY }; });
  if (e.touches.length === 2) {
    const a = e.touches[0], b = e.touches[1];
    lastPinchDist = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
  }
}, { passive: true });

wrap.addEventListener('touchmove', e => {
  e.preventDefault();
  if (e.touches.length === 1) {
    const t = e.touches[0], prev = touches[t.identifier];
    if (prev) { tx += t.clientX - prev.x; ty += t.clientY - prev.y; applyTransform(); }
    touches[t.identifier] = { x: t.clientX, y: t.clientY };
  } else if (e.touches.length === 2) {
    const a = e.touches[0], b = e.touches[1];
    const dist = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
    if (lastPinchDist) {
      const f = dist / lastPinchDist;
      const r = wrap.getBoundingClientRect();
      const mx = (a.clientX + b.clientX) / 2 - r.left;
      const my = (a.clientY + b.clientY) / 2 - r.top;
      tx = mx - (mx - tx) * f; ty = my - (my - ty) * f;
      scale = Math.min(2.5, Math.max(0.15, scale * f));
      applyTransform();
    }
    lastPinchDist = dist;
    [...e.touches].forEach(t => { touches[t.identifier] = { x: t.clientX, y: t.clientY }; });
  }
}, { passive: false });

wrap.addEventListener('touchend', e => {
  [...e.changedTouches].forEach(t => delete touches[t.identifier]);
  if (e.touches.length < 2) lastPinchDist = null;
}, { passive: true });

document.getElementById('btnZoomIn').onclick  = () => { scale = Math.min(2.5, scale * 1.2); applyTransform(); };
document.getElementById('btnZoomOut').onclick = () => { scale = Math.max(0.15, scale * 0.83); applyTransform(); };
document.getElementById('btnReset').onclick   = () => { scale = isMobile() ? 0.9 : 0.95; centerView(); applyTransform(); };

// ── RENDER ───────────────────────────────────────────────────
function render() {
  const wasVisible = new Set(prevVisibleHeads);
  const wasLines   = new Set(prevLines);
  const newLines   = new Set();

  const nodesEl = document.getElementById('nodes');
  const svgEl   = document.getElementById('svgLines');
  nodesEl.innerHTML = '';
  svgEl.innerHTML   = '';

  let pos;
  try { pos = computeLayout(); } catch(e) { console.error(e); return; }

  // keep the clicked node visually in place
  if (anchorId != null && pos[anchorId]) {
    tx += (anchorOldX - pos[anchorId].x) * scale;
    ty += (anchorOldY - pos[anchorId].y) * scale;
    anchorId = null;
  }

  const heads = people.filter(p => isHead(p.id));

  // ── SVG lines (visible only) ──
  heads.forEach(h => {
    if (!isVisible(h.id) || !expanded.has(h.id)) return;
    const pPos = pos[h.id];
    if (!pPos) return;
    headChildren(h.id).forEach(ch => {
      if (!isVisible(ch.id)) return;
      const cPos = pos[ch.id];
      if (!cPos) return;
      const x1 = pPos.x, y1 = pPos.y + 34;
      const x2 = cPos.x, y2 = cPos.y - 34;
      const mid = (y1 + y2) / 2;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M${x1},${y1} C${x1},${mid} ${x2},${mid} ${x2},${y2}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', '#8b6a50');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('stroke-opacity', '0.45');
      const lineKey = `${h.id}-${ch.id}`;
      if (!wasLines.has(lineKey)) path.classList.add('line-enter');
      newLines.add(lineKey);
      svgEl.appendChild(path);
    });
  });

  // ── Nodes ──
  const rendered = new Set();

  heads.forEach(h => {
    if (!isVisible(h.id)) return;
    if (rendered.has(h.id)) return;
    const hPos = pos[h.id];
    if (!hPos) return;

    const kids    = headChildren(h.id);
    const hasKids = kids.length > 0;
    const isNew   = !wasVisible.has(h.id);

    if (h.spouseId && pos[h.spouseId]) {
      // ── COUPLE ──
      rendered.add(h.id);
      rendered.add(h.spouseId);
      const sp = byId(h.spouseId);

      const wrapper = document.createElement('div');
      wrapper.style.cssText = `position:absolute;left:${hPos.x}px;top:${hPos.y}px;
        transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:0;`;
      if (isNew) wrapper.classList.add('node-enter');

      // Root badge
      if (!parentHeadMap[h.id]) {
        const badge = document.createElement('div');
        badge.style.cssText = `background:#c9943a;color:#fff;font-size:10px;font-weight:800;
          padding:2px 10px;border-radius:20px;white-space:nowrap;margin-bottom:6px;`;
        badge.textContent = 'Бабушка и Дедушка';
        wrapper.appendChild(badge);
      }

      // Couple row: [card] [heart] [card]
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:flex-start;gap:4px;';

      const [left, right] = h.gender === 'male' ? [h, sp] : [sp, h];
      row.appendChild(makeCard(left));

      // ── HEART BUTTON ──
      const heartBtn = document.createElement('button');
      heartBtn.className = 'heart-btn' + (hasKids ? (expanded.has(h.id) ? ' heart-btn--open' : ' heart-btn--closed') : ' heart-btn--no-kids');
      heartBtn.innerHTML = hasKids
        ? (expanded.has(h.id) ? '♥' : '♡')
        : '♥';
      heartBtn.title = hasKids
        ? (expanded.has(h.id) ? 'Скрыть детей' : 'Показать детей')
        : '';
      if (hasKids) {
        heartBtn.addEventListener('click', e => {
          e.stopPropagation();
          setAnchor(h.id);
          if (expanded.has(h.id)) { collapseAll(h.id); } else { expanded.add(h.id); }
          render();
        });
        heartBtn.addEventListener('touchend', e => {
          e.preventDefault();
          e.stopPropagation();
          setAnchor(h.id);
          if (expanded.has(h.id)) { collapseAll(h.id); } else { expanded.add(h.id); }
          render();
        });
      }

      row.appendChild(heartBtn);
      row.appendChild(makeCard(right));
      wrapper.appendChild(row);
      nodesEl.appendChild(wrapper);

    } else {
      // ── SINGLE ──
      rendered.add(h.id);
      const wrapper = document.createElement('div');
      wrapper.style.cssText = `position:absolute;left:${hPos.x}px;top:${hPos.y}px;
        transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:4px;`;
      if (isNew) wrapper.classList.add('node-enter');
      wrapper.appendChild(makeCard(h));

      // Expand button for single with children
      if (hasKids) {
        const expBtn = document.createElement('button');
        expBtn.className = 'expand-btn' + (expanded.has(h.id) ? ' expand-btn--open' : '');
        expBtn.textContent = expanded.has(h.id) ? '▲' : '▼';
        expBtn.title = expanded.has(h.id) ? 'Скрыть детей' : 'Показать детей';
        const toggle = e => {
          e.preventDefault(); e.stopPropagation();
          setAnchor(h.id);
          if (expanded.has(h.id)) { collapseAll(h.id); } else { expanded.add(h.id); }
          render();
        };
        expBtn.addEventListener('click', toggle);
        expBtn.addEventListener('touchend', toggle);
        wrapper.appendChild(expBtn);
      }

      nodesEl.appendChild(wrapper);
    }
  });

  prevVisibleHeads = new Set(people.filter(p => isHead(p.id) && isVisible(p.id)).map(p => p.id));
  prevLines = newLines;

  applyTransform();
}

// ── PERSON CARD ──────────────────────────────────────────────
function makeCard(person) {
  // married-in: no parentId, has spouseId whose partner IS a family member
  const isMarriedIn = !person.parentId && !!person.spouseId && !!(byId(person.spouseId)?.parentId);

  const card = document.createElement('div');
  card.className = `person-card person-card--${person.gender}` +
    (person.death ? ' person-card--deceased' : '') +
    (isMarriedIn ? ' person-card--married-in' : '') +
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

  if (isMarriedIn) {
    const tag = document.createElement('div');
    tag.className = 'person-card__tag';
    tag.textContent = 'жұбай';
    card.appendChild(tag);
  }

  card.addEventListener('click', e => { e.stopPropagation(); openPanel(person.id); });
  card.addEventListener('touchend', e => {
    e.preventDefault(); e.stopPropagation(); openPanel(person.id);
  });
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
  document.getElementById('panelName').textContent = person.name;
  document.getElementById('panelYear').textContent = yearLabel(person);
  document.getElementById('panelMeta').textContent = person.note || 'Нет описания';

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
  document.getElementById('canvasWrap').classList.add('panel-open');
  document.getElementById('panelEdit').onclick     = () => openModal('edit', id);
  document.getElementById('panelAddChild').onclick = () => openModal('child', id);
}

function addRel(box, label, person) {
  const row = document.createElement('div');
  row.className = 'panel__rel-row';
  const lbl = document.createElement('span'); lbl.className = 'panel__rel-label'; lbl.textContent = label;
  const nm  = document.createElement('span'); nm.className  = 'panel__rel-name';  nm.textContent  = person.name;
  nm.onclick = () => openPanel(person.id);
  row.appendChild(lbl); row.appendChild(nm);
  box.appendChild(row);
}

document.getElementById('panelClose').onclick = () => {
  document.getElementById('panel').classList.remove('open');
  document.getElementById('canvasWrap').classList.remove('panel-open');
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
document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });

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
  if (id) { Object.assign(byId(id), { name, birth, death, gender, note }); }
  else { people.push({ id: nextId++, name, birth, death, gender, note, spouseId: null, parentId }); }
  buildParentMap();
  closeModal();
  render();
  if (selectedId) openPanel(selectedId);
});

// ── MINIMAP ──────────────────────────────────────────────────
const mm = document.createElement('div');
mm.className = 'minimap';
mm.innerHTML = `<div style="font-size:.68rem;color:#8b6a50">Масштаб</div><div class="minimap__zoom">95%</div>`;
document.body.appendChild(mm);

// ── INIT ─────────────────────────────────────────────────────
buildParentMap();
centerView();
render();
applyTransform();
