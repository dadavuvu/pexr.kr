const dropdownData = {
  '그룹 소개': {
    title: '그룹 소개',
    desc: '',
    items: [
      { label: '인사말', href: '/about/hello' },
      { label: '경영목표', href: '/about/goal' },
      { label: '연혁 및 조직도', href: '/about/history' },
      { label: '그룹상징', href: '/about/branding' },
      { label: '포트폴리오', href: '/about/portfolio' }
    ]
  },
  '브랜드 소개': {
    title: '브랜드 소개',
    desc: '',
    items: [
      { label: '<span class="pexricons align-middle select-none" draggable="false">⠁</span>', href: '/brands/primedash' },
      { label: '<span class="pexricons align-middle select-none" draggable="false">⠆</span>', href: '/brands/emporium' },
      { label: '<span class="pexricons align-middle select-none" draggable="false">⠄</span>', href: '/brands/xr' }
    ]
  },
  '알림마당': {
    title: '알림마당',
    desc: '',
    items: [
      { label: '공지사항', href: '/announce/notice' },
      { label: '자료실', href: '/announce/resources' },
      { label: '정보공개', href: '/announce/opendata' }
    ]
  },
  '문의안내': {
    title: '문의안내',
    desc: '',
    items: [
      { label: '공식 지원 커뮤니티', href: '/links/community', external: true },
      { label: '이메일 문의', href: 'mailto:admin@pexr.kr', external: true },
      { label: '<span class="pexricons align-middle select-none" draggable="false">⠁</span> 커뮤니티', href: '/links/primedash', external: true },
      { label: '<span class="pexricons align-middle select-none" draggable="false">⠆</span> 문의센터', href: '/links/emporium', external: true },
      { label: '<span class="pexricons align-middle select-none" draggable="false">⠄</span> 커뮤니티', href: '/links/xr', external: true }
    ]
  }
};

const dropdownContainer = document.querySelector('#dropdown-container');
const left = document.querySelector('#dropdown-left');
const title = document.querySelector('#dropdown-title');
const desc = document.querySelector('#dropdown-desc');
const right = document.querySelector('#dropdown-right');

// 메뉴 버튼 이벤트 바인딩
document.querySelectorAll('#header [data-dropdown-target]').forEach(button => {
  button.addEventListener('mouseenter', () => {
    const key = button.getAttribute('data-dropdown-target');
    const data = dropdownData[key];
    if (!data) return;

    title.textContent = data.title;
    desc.textContent = data.desc;

    right.innerHTML = data.items.map(item => {
      const label = item.html ?? item.label;
      const href = item.href;
      const icon = item.external
        ? '<span class="material-icons text-lg! align-middle select-none" draggable="false">open_in_new</span>'
        : '';
      return `<a href="${href}" class="flex items-center gap-1 text-xl w-fit"${item.external ? ' target="_blank"' : ""}>${label} ${icon}</a>`;
    }).join('');

    // 드롭다운 표시
    dropdownContainer.style.display = 'flex';
  });
});

// 드롭다운 영역 외 벗어나면 닫기
document.querySelector('#header-wrapper').addEventListener('mouseleave', () => {
  dropdownContainer.style.display = 'none';
});

document.addEventListener('click', (e) => {
    if (!document.querySelector('#select-btn').contains(e.target)) {
        options.classList.add('hidden');
    }
});