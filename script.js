const preview = document.getElementById('preview');
const styleEl = document.getElementById('style');
const wallColorEl = document.getElementById('wallColor');
const floorMaterialEl = document.getElementById('floorMaterial');
const lightnessEl = document.getElementById('lightness');
const layoutEl = document.getElementById('layout');
const statusText = document.getElementById('statusText');

const styleNames = {
  modern: '现代简约',
  scandinavian: '北欧',
  industrial: '工业风',
  japandi: '日式侘寂'
};

const layoutNames = {
  living: '客厅',
  bedroom: '卧室',
  studio: '一体化空间'
};

const floorTextures = {
  wood: `repeating-linear-gradient(90deg, rgba(112, 78, 50, 0.24), rgba(112, 78, 50, 0.24) 12px, rgba(93, 62, 40, 0.22) 12px, rgba(93, 62, 40, 0.22) 24px), linear-gradient(180deg, #ba9672, #8c6746)`,
  tile: `repeating-linear-gradient(0deg,#d1d5db,#d1d5db 20px,#9ca3af 20px,#9ca3af 22px), repeating-linear-gradient(90deg,#d1d5db,#d1d5db 20px,#9ca3af 20px,#9ca3af 22px)`,
  stone: `linear-gradient(135deg,#78716c,#a8a29e,#57534e)`
};

function applyDesign() {
  preview.classList.remove('modern', 'scandinavian', 'industrial', 'japandi');
  preview.classList.remove('living', 'bedroom', 'studio');

  preview.classList.add(styleEl.value);
  preview.classList.add(layoutEl.value);

  preview.style.setProperty('--wall-color', wallColorEl.value);
  preview.style.setProperty('--light-level', `${lightnessEl.value}%`);
  preview.style.setProperty('--floor-texture', floorTextures[floorMaterialEl.value]);

  statusText.textContent = `风格：${styleNames[styleEl.value]} ｜ 布局：${layoutNames[layoutEl.value]}`;
}

function randomize() {
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  styleEl.value = random(Object.keys(styleNames));
  layoutEl.value = random(Object.keys(layoutNames));
  floorMaterialEl.value = random(Object.keys(floorTextures));
  lightnessEl.value = String(Math.floor(Math.random() * 35) + 60);
  wallColorEl.value = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;

  applyDesign();
}

function reset() {
  styleEl.value = 'modern';
  wallColorEl.value = '#f2efe9';
  floorMaterialEl.value = 'wood';
  lightnessEl.value = '78';
  layoutEl.value = 'living';
  applyDesign();
}

[styleEl, wallColorEl, floorMaterialEl, lightnessEl, layoutEl].forEach((el) => {
  el.addEventListener('input', applyDesign);
  el.addEventListener('change', applyDesign);
});

document.getElementById('randomize').addEventListener('click', randomize);
document.getElementById('reset').addEventListener('click', reset);

applyDesign();
