import './style.css'

// --- IMAGE DATA PER SECTION ---
const imageModulesBySection = {
  keramika: import.meta.glob('./assets/images/keramika/*.{jpg,jpeg,png}', { eager: true, import: 'default' }),
  ilustrace: import.meta.glob('./assets/images/ilustrace/*.{jpg,jpeg,png}', { eager: true, import: 'default' }),
  'ovci-vlna': import.meta.glob('./assets/images/vlna/*.{jpg,jpeg,png}', { eager: true, import: 'default' }),
}

function toSortedImageList(modules) {
  return Object.entries(modules)
    .sort(([pathA], [pathB]) => {
      const fileA = pathA.split('/').pop() || ''
      const fileB = pathB.split('/').pop() || ''
      const nameA = fileA.replace(/\.[^.]+$/, '')
      const nameB = fileB.replace(/\.[^.]+$/, '')
      const numA = Number(nameA)
      const numB = Number(nameB)
      const hasNumA = Number.isFinite(numA)
      const hasNumB = Number.isFinite(numB)

      if (hasNumA && hasNumB) return numA - numB
      if (hasNumA) return -1
      if (hasNumB) return 1
      return fileA.localeCompare(fileB)
    })
    .map(([, src]) => src)
}

const sections = Object.fromEntries(
  Object.entries(imageModulesBySection).map(([section, modules]) => [section, toSortedImageList(modules)])
)

// --- STATE ---
let currentSection = 'keramika'
let currentImages = sections[currentSection]
let currentLbIndex = 0

// --- DOM ---
const colLeft = document.getElementById('col-left')
const colRight = document.getElementById('col-right')
const lb = document.getElementById('lightbox')
const lbImg = document.getElementById('lb-img')
const lbCounter = document.getElementById('lb-counter')
const mobileLabel = document.getElementById('mobile-nav-label')
const mobileDropdown = document.getElementById('mobile-dropdown')

// --- GRID ---
function isMobile() {
  return window.innerWidth < 640
}

function buildGrid(images) {
  colLeft.innerHTML = ''
  colRight.innerHTML = ''

  const mobile = isMobile()
  colRight.style.display = mobile ? 'none' : ''

  images.forEach((src, i) => {
    const item = document.createElement('div')
    item.className = 'grid-item cursor-pointer overflow-hidden relative bg-gray-100'
    item.dataset.index = i
    const img = document.createElement('img')
    img.src = src
    img.alt = ''
    img.loading = 'lazy'
    img.className = 'w-full h-full object-cover block'
    item.appendChild(img)
    item.addEventListener('click', () => openLightbox(i))

    if (mobile) {
      colLeft.appendChild(item)
    } else if (i % 2 === 0) {
      colLeft.appendChild(item)
    } else {
      colRight.appendChild(item)
    }
  })
}

let lastMobile = isMobile()
window.addEventListener('resize', () => {
  const nowMobile = isMobile()
  if (nowMobile !== lastMobile) {
    lastMobile = nowMobile
    buildGrid(currentImages)
  }
})
// --- NAV ---
function setSection(section) {
  currentSection = section
  currentImages = sections[section]

  // Update nav underline
  document.querySelectorAll('.nav-link').forEach(a => {
    const isActive = a.dataset.section === section
    a.classList.toggle('border-b', isActive)
    a.classList.toggle('border-[#e6b800]', isActive)
  })

  // Update mobile label
  const labels = { keramika: 'Keramika', ilustrace: 'Ilustrace', 'ovci-vlna': 'Ovčí vlna' }
  if (mobileLabel) mobileLabel.textContent = labels[section]

  buildGrid(currentImages)
}

document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault()
    mobileDropdown.classList.add('hidden')
    mobileDropdown.classList.remove('flex')
    setSection(a.dataset.section)
  })
})

// Mobile toggle
document.getElementById('mobile-nav-toggle')?.addEventListener('click', () => {
  const hidden = mobileDropdown.classList.contains('hidden')
  mobileDropdown.classList.toggle('hidden', !hidden)
  mobileDropdown.classList.toggle('flex', hidden)
})

// --- LIGHTBOX ---
function openLightbox(idx) {
  currentLbIndex = idx
  lbImg.src = currentImages[currentLbIndex]
  lbCounter.textContent = `${currentLbIndex + 1} / ${currentImages.length}`
  lb.classList.remove('hidden')
  lb.classList.add('flex')
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lb.classList.add('hidden')
  lb.classList.remove('flex')
  document.body.style.overflow = ''
}

function lbGo(dir) {
  currentLbIndex = (currentLbIndex + dir + currentImages.length) % currentImages.length
  lbImg.src = currentImages[currentLbIndex]
  lbCounter.textContent = `${currentLbIndex + 1} / ${currentImages.length}`
}

document.getElementById('lb-close').addEventListener('click', closeLightbox)
document.getElementById('lb-prev').addEventListener('click', () => lbGo(-1))
document.getElementById('lb-next').addEventListener('click', () => lbGo(1))

document.addEventListener('keydown', e => {
  if (lb.classList.contains('hidden')) return
  if (e.key === 'ArrowLeft') lbGo(-1)
  if (e.key === 'ArrowRight') lbGo(1)
  if (e.key === 'Escape') closeLightbox()
})

let touchX = 0
lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX })
lb.addEventListener('touchend', e => {
  const diff = touchX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 40) lbGo(diff > 0 ? 1 : -1)
})

// --- INIT ---
setSection('keramika')
