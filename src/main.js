import './style.css'

// --- IMAGE DATA PER SECTION ---
const sections = {
  keramika: [
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700561566-VICYR73PCYN1NC3F6HXK/Agnesmaltesdotter-0899.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700374734-P2U26PINJ8RPNVX04EAS/Agnesmaltesdotter-9778.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603981809045-DABUL7UZ30UXKDRLM0GD/Agnesmaltesdotter+SJ-2-95.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700451024-4Q86VYRYQZGE6XOSIP5I/Agnesmaltesdotter-5243.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700398850-JN7BTBICLTDF5RY1EXB8/Agnesmaltesdotter-5794.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700277615-BILPULXYQPP8F5SJEAX1/Agnesmaltesdotter-9511.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700281993-83HEOLBI46CPA7MY69FH/Agnesmaltesdotter-9717.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603979735835-8QDQYNKYB88LUYFL79CG/Agnesmaltesdotter-6605.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701021660-1MZE8NS55ZCY4XQ2696K/Agnesmaltesdotter-2-46.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700534808-878DHSPTT9PCPBESHXQ2/Agnesmaltesdotter-1060.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701009461-8XV09MQ179MQH24YDOG2/Agnesmaltesdotter-2-37.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591702153860-XSYPUQU68EILP2ZMCE94/Agnesmaltesdotter-9742.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700482911-KM3K53T1Y2NI1XTJYH74/Agnesmaltesdotter-2364.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700538014-EKUMFGBZQQ7W49OWTKL6/Agnesmaltesdotter-1040.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701132407-EA2T015JB9PBQ4LAJLTO/Agnesmaltesdotter-8313.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700472968-1JDHQ1MERWVDO94XVLAH/Agnesmaltesdotter-2252.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603979713861-C15E554I91O8V12TAN18/Agnesmaltesdotter-8807.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700446719-NOP3CE2NL8M0HZKQMLCT/Agnesmaltesdotter-3724.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591702116537-ABMKM8LCJ8Z5TEJH7TBQ/Agnesmaltesdotter-9542.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701903179-WCVPQW4M4R2P79LDBFP1/Agnesmaltesdotter-5606.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700341024-E09D3Y8P2ACSPOTOJS4B/Agnesmaltesdotter-6107.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700728157-4SIVVLARDLJTJ63S4H79/Agnesmaltesdotter-2-6.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700974978-QH7IXSUW5KAAV8QZ6XO7/Agnesmaltesdotter-8916.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701077844-6C936H7Q60PH76SNUKZT/Agnesmaltesdotter-2-58.jpg",
  ],
  ilustrace: [
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701117529-MH79KM2E71TYO6KL91A6/Agnesmaltesdotter-0224.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701093379-HTN4JEI5HE2TRJE79EYZ/Agnesmaltesdotter-0998.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700422648-0SNGJGP4PSBIOUWISWH4/Agnesmaltesdotter-3999.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700833857-KZTC2MT39IKKC964OPM6/Agnesmaltesdotter-0236.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700837465-92R22HPMLZS3KUM75VA8/Agnesmaltesdotter-0553.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591700926057-OPXR4SAE3AV96XRE1XKB/Agnesmaltesdotter-2991.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701300341-1QNRTR8HLB8DYOTE2D4J/Agnesmaltesdotter-3360.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701594921-EXJAOFAMC1221XLQR8VW/Agnesmaltesdotter-5428.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701635981-W62G45HZIGJPQCKS398J/Agnesmaltesdotter-5539.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701775478-0PDU9IYFYD7G3DSPX901/Agnesmaltesdotter-5574.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701822591-JM71ZELSNRYQY06DBNKC/Agnesmaltesdotter-5593.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591701959050-PXW1O4X3FIEJ65DR493W/Agnesmaltesdotter-5697.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1591702042236-ZBKOG8CZ4980DIELZYYZ/Agnesmaltesdotter-8688.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603979791184-7BOYRBFGLKTRJXI8QF67/Agnesmaltesdotter-7957.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603979855061-2GKCTLEG99CMHZH0BQXT/Agnesmaltesdotter-7552.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603980000817-9O1BX7O9I0AE8UWYT1AT/Agnesmaltesdotter-0563.jpg",
  ],
  'ovci-vlna': [
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603981804164-L00WKSLDAG6ISFNVFEQ0/Agnesmaltesdotter-1115.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603981806700-TAZI84PBEDVUI0CFXYV3/Agnesmaltesdotter+SJ-1013.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603981847765-99F7K3DSWI1W6WQH3LMS/14012016-DSCF6362.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997505100-VAZONBMEPZSPYWVA87E7/Agnesmaltesdotter-2664.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997497640-WTN4LV7LE4DCWIQFK7WP/Agnesmaltesdotter-2-41.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997512021-IIRW9EAMCNZPVA3PNBRE/Agnesmaltesdotter-2602.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997520116-F5A4KFGW8LXE484L3BXF/Agnesmaltesdotter-8580.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997528461-JD5HFOGNYHPPBTKRISIS/Agnesmaltesdotter-0652.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997538055-PWGNDBK02OF5LRXS9VOB/Agnesmaltesdotter-7163.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997550681-3XIHDVBV8CS2VU3VS0W6/Agnesmaltesdotter-0865.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997549979-YVKD5FQYKU3FSI3YSV4U/Agnesmaltesdotter-2483.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997569498-WQS2YO9QMXVFZDUNXXV4/Agnesmaltesdotter-4445.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997568987-OUE6ZRAS2E9FE8279ABZ/Agnesmaltesdotter-4269.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997576367-8DYQL2K4R1QXRS25CAVL/Agnesmaltesdotter-4279.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997584795-CLBV3PAB562NZGK0JSJH/Agnesmaltesdotter-3927-2.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997703732-JS946DJ13G7YFS9UBFFD/AGNESMALTESDOTTER-3757.jpg",
    "https://images.squarespace-cdn.com/content/v1/5858455bcd0f68f9cfc322e1/1603997682371-C1QV4220745JHGYX5ISK/Agnesmaltesdotter+SJ-9627.jpg",
  ],
}

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

  // On mobile: hide right col, put all images in left col sequentially
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
    } else {
      if (i % 2 === 0) colLeft.appendChild(item)
      else colRight.appendChild(item)
    }
  })
}

// Rebuild grid on resize crossing the 640px breakpoint
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
