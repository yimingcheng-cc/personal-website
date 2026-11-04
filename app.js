// Résumé facts are retained; personal introduction and contact updates were supplied by Yiming.
// No analytics or third-party runtime requests.
const content = {
  zh: {
    nav: ['关于我', '教育经历', '职业经历', '研究项目', '专业技能', '联系我'],
    kicker: '计算社会科学 · 人工智能研究', name: '程一鸣', secondary: 'Yiming Cheng',
    intro: '曾在字节跳动、复星创富和毕马威实习，从事 AI 行业研究、投资研究与风险咨询。',
    role: '计算社会科学 · 博士二年级',
    aboutTitle: '关于我', aboutLabel: 'ABOUT ME',
    aboutText: ['你好，我是程一鸣，目前就读于香港中文大学（深圳）计算社会科学专业，是一名博士二年级学生。', '我的研究涉及大语言模型、文本挖掘与量化分析，也对 AI 行业研究和科技投资感兴趣。'],
    personalNote: '还有一个小小的愿望：希望博士毕业后，能拥有一只属于自己的小狗或小猫。',
    universityProfile: '学校个人主页', academicPath: '教育背景',
    overview: '查看经历', personalEmail: '常用邮箱', universityEmail: '学校邮箱',
    connect: '联系我', institution: '香港中文大学（深圳）',
    focusLabel: '研究关注', focus: ['大语言模型', '文本挖掘', '量化分析'],
    sectionIntro: ['教育背景', '实习经历', '研究助理经历', '工具与方法'],
    education: [
      { date: '2025.09 — 至今', name: '香港中文大学（深圳）', location: '中国', title: '计算社会科学博士', note: '全额奖学金', text: '' },
      { date: '2022.09 — 2023.09', name: '华威大学', location: '英国', title: '经济学硕士', note: '', text: '' },
      { date: '2018.09 — 2022.06', name: '西南大学', location: '中国', title: '经济学学士', note: '211 工程', text: '' }
    ],
    experience: [
      { date: '2026.06 — 2026.08', name: '字节跳动', label: '科技与组织研究', title: '管理研究院 · 高招实习生', summary: '主要从事 AI 行业研究、组织分析及 AI 转型背景下的人才研究。', points: [
        '研究 4 家海外 AI 初创企业，结合公开资料与行业访谈，分析产品定位、竞争策略、组织架构及核心人才要求。',
        '将 AI Agent 企业划分为通用、代码、企业级、基础设施及垂直场景五类，梳理核心人才的 0 到 1 项目经验与代表性技术成果，形成重点关注人才名单。',
        '扫描国内外 AI 数据服务企业，筛选 6 家重点公司，梳理业务方向与核心团队。'
      ] },
      { date: '2025.03 — 2025.07', name: '复星创富', label: '产业与投资研究', title: '战略发展部 · 投融资实习生', summary: '围绕存储产业与 AI 眼镜开展研究，参与项目交割与投后管理。', points: [
        '分析 SSD 产业链与企业级存储竞争格局，研究 NAND 闪存、主控芯片及模组的国产替代机会；参与武汉市存储产业生态规划，提出上下游企业引进建议。',
        '从投资方向匹配度、高频应用场景及软件生态成熟度评估 AI 眼镜投资可行性，形成现阶段暂不推进投资的建议。',
        '对接三级政府出资方及被投企业，参与 6 个项目的投后管理及 3 个项目交割，涉及金额超 2,500 万元。'
      ] },
      { date: '2021.07 — 2021.09', name: '毕马威企业咨询（中国）', label: '治理与风险合规', title: '风险咨询 · 暑期实习生', summary: '研究海外机构设立相关的公司治理及劳动用工法规。', points: [
        '参与世界 500 强企业海外设立机构项目，研究土耳其、孟加拉国、澳大利亚等国的公司治理及劳动用工法规，梳理董事会组成、任免程序与劳动力管理要求。'
      ] }
    ],
    projects: [
      { date: '2026.08 — 至今', category: 'LLM SAFETY', name: '大语言模型安全评测', org: '研究助理', summary: '使用 Python 统计拒答率与攻击成功率，比较大语言模型的安全防护表现。', details: '参与基于 TAP（Tree of Attacks with Pruning）的对抗攻击策略讨论；使用 Python 统计模型拒答率、攻击成功率等指标，对比模型在直接请求与对抗攻击下的安全防护表现。', tags: ['Python', 'TAP', '安全评测'] },
      { date: '2026.04 — 至今', category: 'AI-ASSISTED EVIDENCE', name: '证据与差距图谱（EGM）', org: '联合国儿童基金会驻华办事处 · 研究助理', summary: '参与约 300 篇文献的人工编码，并使用 LLM 辅助分类与 Prompt 优化。', details: '参与约 300 篇文献的人工编码，使用 LLM 辅助文献分类；对比人工与 AI 编码结果，识别主要误判类型并迭代优化 Prompt，提升编码一致性。', tags: ['LLM', 'Prompt 优化', '文献编码'] },
      { date: '2024.04 — 2024.06', category: 'SUSTAINABILITY & DATA', name: '可持续发展研究', org: '帝国理工学院（英国）· 兼职研究助理', summary: '匹配 300 余条电力公司及基站名称，通过地理坐标交叉验证，准确率达 95% 以上。', details: '使用 Stata 清洗印度尼西亚能源行业数据，通过模糊匹配完成 300 余条电力公司及基站名称匹配，并结合地理坐标交叉验证，匹配准确率达 95% 以上。', tags: ['Stata', '模糊匹配', '数据清洗'] }
    ],
    details: '项目详情', expDetails: '工作内容',
    skillGroups: [
      { title: '数据与分析', items: ['Python', 'R', 'Stata', 'Excel'] },
      { title: '大语言模型', items: ['LLM API 调用', 'Prompt 优化', '文本挖掘', '模型安全评测'] },
      { title: '研究方法', items: ['行业研究', '文献编码', '模糊匹配', '量化分析'] }
    ],
    contactKicker: 'CONTACT', contactTitle: '联系我', contactText: '欢迎就实习机会、学术交流或研究相关话题与我联系。', copy: '复制邮箱', copied: '已复制', copyFail: '未能复制，请手动选择邮箱', footer: '程一鸣 · 学术与职业档案', top: '回到顶部',
  },
  en: {
    nav: ['About', 'Education', 'Experience', 'Research', 'Skills', 'Contact'],
    kicker: 'COMPUTATIONAL SOCIAL SCIENCE · AI RESEARCH', name: 'Yiming Cheng', secondary: '程一鸣',
    intro: 'Internship experience at ByteDance, Fosun Capital, and KPMG, working on AI industry research, investment research, and risk consulting.',
    role: 'Second-year PhD student · Computational Social Science',
    aboutTitle: 'About Me', aboutLabel: 'ABOUT ME',
    aboutText: ['Hello, I’m Yiming, a second-year PhD student in Computational Social Science at The Chinese University of Hong Kong, Shenzhen.', 'My research involves large language models, text mining, and quantitative analysis. I’m also interested in AI industry research and technology investment.'],
    personalNote: 'A small wish for life after my PhD: a dog or cat of my own.',
    universityProfile: 'University Profile', academicPath: 'EDUCATION',
    overview: 'View experience', personalEmail: 'Personal email', universityEmail: 'University email',
    connect: 'Get in touch', institution: 'The Chinese University of Hong Kong, Shenzhen',
    focusLabel: 'RESEARCH INTERESTS', focus: ['Large language models', 'Text mining', 'Quantitative analysis'],
    sectionIntro: ['Academic background', 'Internships', 'Research assistantships', 'Tools & methods'],
    education: [
      { date: 'Sep 2025 — Present', name: 'The Chinese University of Hong Kong, Shenzhen', location: 'China', title: 'PhD in Computational Social Science', note: 'Full scholarship', text: '' },
      { date: 'Sep 2022 — Sep 2023', name: 'University of Warwick', location: 'United Kingdom', title: 'Master’s in Economics', note: '', text: '' },
      { date: 'Sep 2018 — Jun 2022', name: 'Southwest University', location: 'China', title: 'Bachelor’s in Economics', note: 'Project 211 university', text: '' }
    ],
    experience: [
      { date: 'Jun 2026 — Aug 2026', name: 'ByteDance', label: 'TECHNOLOGY & ORGANIZATIONS', title: 'Management Research Institute · Intern', summary: 'Researched the AI industry, organizational structures, and talent needs during AI transformation.', points: [
        'Studied 4 overseas AI startups through public sources and industry interviews, comparing product positioning, competitive strategy, organizational structures, and key talent requirements.',
        'Grouped AI Agent companies into general-purpose, coding, enterprise, infrastructure, and vertical applications. Reviewed core talent’s zero-to-one project experience and technical work to produce a talent shortlist.',
        'Surveyed AI data service providers in China and abroad, selecting 6 companies for further research on their businesses and core teams.'
      ] },
      { date: 'Mar 2025 — Jul 2025', name: 'Fosun Capital', label: 'INDUSTRY & INVESTMENT', title: 'Strategic Development · Investment & Financing Intern', summary: 'Storage and AI glasses research, alongside investment closing and post-investment management.', points: [
        'Analyzed the SSD value chain, enterprise storage competition, and domestic substitution opportunities in NAND flash, controllers, and modules. Contributed to Wuhan’s storage ecosystem planning with recommendations for attracting upstream and downstream companies.',
        'Assessed AI glasses investments based on investment fit, frequent-use scenarios, and software ecosystem maturity; recommended not proceeding at that stage.',
        'Coordinated with government investors at three levels and portfolio companies; supported post-investment management for 6 projects and 3 project closings involving over RMB 25 million.'
      ] },
      { date: 'Jul 2021 — Sep 2021', name: 'KPMG Advisory (China)', label: 'GOVERNANCE, RISK & COMPLIANCE', title: 'Risk Consulting · Summer Intern', summary: 'Researched corporate governance and employment regulations for overseas entity establishment.', points: [
        'Supported an overseas entity establishment project for a Fortune Global 500 company. Researched corporate governance and employment rules in Turkey, Bangladesh, Australia, and other countries, covering board composition, appointment procedures, and workforce management.'
      ] }
    ],
    projects: [
      { date: 'Aug 2026 — Present', category: 'LLM SAFETY', name: 'Large Language Model Safety Evaluation', org: 'Research Assistant', summary: 'Used Python to calculate refusal and attack success rates when comparing LLM safeguards.', details: 'Contributed to discussions of adversarial attack strategies based on TAP (Tree of Attacks with Pruning). Used Python to calculate refusal rates and attack success rates, comparing model safeguards under direct requests and adversarial attacks.', tags: ['Python', 'TAP', 'Safety evaluation'] },
      { date: 'Apr 2026 — Present', category: 'AI-ASSISTED EVIDENCE', name: 'Evidence and Gap Map (EGM)', org: 'UNICEF China Office · Research Assistant', summary: 'Helped manually code approximately 300 papers and used LLMs for classification and prompt refinement.', details: 'Contributed to manual coding of approximately 300 papers and LLM-assisted literature classification. Compared human and AI coding, identified major misclassification patterns, and iteratively refined prompts to improve agreement.', tags: ['LLM', 'Prompt optimization', 'Literature coding'] },
      { date: 'Apr 2024 — Jun 2024', category: 'SUSTAINABILITY & DATA', name: 'Sustainability Research', org: 'Imperial College London · Part-time Research Assistant', summary: 'Matched over 300 power company and base-station names, with over 95% accuracy after geographic cross-validation.', details: 'Cleaned Indonesian energy-sector data using Stata. Applied fuzzy matching to over 300 power company and base-station names, cross-validated with geographic coordinates, and achieved matching accuracy above 95%.', tags: ['Stata', 'Fuzzy matching', 'Data cleaning'] }
    ],
    details: 'Project details', expDetails: 'Responsibilities',
    skillGroups: [
      { title: 'Data & analytics', items: ['Python', 'R', 'Stata', 'Excel'] },
      { title: 'Large language models', items: ['LLM APIs', 'Prompt optimization', 'Text mining', 'Model safety evaluation'] },
      { title: 'Research methods', items: ['Industry research', 'Literature coding', 'Fuzzy matching', 'Quantitative analysis'] }
    ],
    contactKicker: 'CONTACT', contactTitle: 'Get in touch', contactText: 'For internship opportunities, academic exchange, or conversations about research, feel free to reach out.', copy: 'Copy email', copied: 'Copied', copyFail: 'Could not copy; please select the email manually', footer: 'Yiming Cheng · Academic & professional profile', top: 'Back to top',
  }
};

const emails = ['Yiming_warwick@outlook.com', 'yimingcheng1@link.cuhk.edu.cn'];
const ids = ['about', 'education', 'experience', 'research', 'skills', 'contact'];
let language;
try { language = localStorage.getItem('yc-language'); } catch {}
if (!['zh', 'en'].includes(language)) language = 'zh';
const arrow = '<svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const heading = (n, title, subtitle) => `<div class="section-heading"><div><span class="section-number">0${n}</span><h2>${title}</h2></div><p>${subtitle}</p></div>`;
const tags = items => `<div class="tags">${items.map(x => `<span>${x}</span>`).join('')}</div>`;

function render() {
  const t = content[language];
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = language === 'zh' ? '程一鸣 Yiming Cheng — 计算社会科学' : 'Yiming Cheng — Computational Social Science';
  document.querySelector('meta[name="description"]').content = t.aboutText.join(' ');
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  const nav = ids.map((id, i) => `<a href="#${id}">${t.nav[i]}</a>`).join('');
  document.getElementById('desktop-nav').innerHTML = nav;
  document.getElementById('mobile-nav').innerHTML = nav;
  document.getElementById('main').innerHTML = `
    <section class="hero container" id="home" aria-labelledby="hero-title">
      <div class="hero-copy"><p class="eyebrow"><span class="small-line"></span>${t.kicker}</p>
        <h1 id="hero-title">${t.name}<span class="secondary-name">${t.secondary}</span><span class="name-dot">.</span></h1>
        <p class="hero-role">${t.role}</p><p class="hero-institution">${t.institution}</p><div class="hero-focus"><span class="mini-label">${t.focusLabel}</span>${tags(t.focus)}</div><p class="hero-intro">${t.intro}</p>
        <div class="hero-actions"><a class="button primary" href="#experience">${t.overview}${arrow}</a><a class="text-link" href="#contact">${t.connect}<span aria-hidden="true">→</span></a></div>
      </div>
      <aside class="profile-card" aria-label="${t.academicPath}">
        <p class="mini-label">${t.academicPath}</p>
        <div class="profile-degrees">${t.education.map((e, i) => `<div><span class="degree-index">0${i + 1}</span><div><strong>${e.name}</strong><p>${e.title}</p><span class="date">${e.date}</span></div></div>`).join('')}</div>
        <a class="university-link" href="https://hss.cuhk.edu.cn/en/node/1722" target="_blank" rel="noopener noreferrer">${t.universityProfile}${arrow}</a>
      </aside>
    </section>
    <section class="about-section" id="about" aria-labelledby="about-title"><div class="container about-layout">
      <div class="about-heading"><p class="eyebrow">${t.aboutLabel}</p><h2 id="about-title">${t.aboutTitle}</h2><a class="text-link" href="https://hss.cuhk.edu.cn/en/node/1722" target="_blank" rel="noopener noreferrer">${t.universityProfile}${arrow}</a></div>
      <div class="about-copy">${t.aboutText.map(p => `<p>${p}</p>`).join('')}<div class="personal-note"><svg class="paw-icon" viewBox="0 0 32 32" aria-hidden="true"><g fill="currentColor"><ellipse cx="7" cy="12" rx="3" ry="4" transform="rotate(-25 7 12)"/><ellipse cx="13" cy="7" rx="3" ry="4"/><ellipse cx="21" cy="7" rx="3" ry="4"/><ellipse cx="27" cy="13" rx="3" ry="4" transform="rotate(25 27 13)"/><path d="M8 23c0-4 5-10 9-10s9 6 9 10c0 7-6 3-9 3s-9 4-9-3"/></g></svg><p>${t.personalNote}</p></div></div>
    </div></section>
    <section class="section container" id="education">${heading(1, t.nav[1], t.sectionIntro[0])}
      <div class="education-list">${t.education.map((e, i) => `<article class="education-row"><div class="date"><span class="timeline-dot ${i === 0 ? 'current' : ''}"></span>${e.date}</div><div class="education-body"><div class="education-title"><h3>${e.name}</h3><span class="location">${e.location}</span></div><div class="degree-line"><p>${e.title}</p>${e.note ? `<span class="badge">${e.note}</span>` : ''}</div>${e.text ? `<p class="muted education-note">${e.text}</p>` : ''}</div></article>`).join('')}</div>
    </section>
    <section class="section experience-section" id="experience"><div class="container">${heading(2, t.nav[2], t.sectionIntro[1])}
      <div class="experience-list">${t.experience.map((e, i) => `<article class="experience-row"><div class="experience-meta"><span class="company-index">0${i + 1}</span><span class="date">${e.date}</span></div><div class="experience-body"><p class="mini-label accent">${e.label}</p><h3>${e.name}</h3><p class="role">${e.title}</p><p class="muted">${e.summary}</p><details class="work-details"${i === 0 ? ' open' : ''}><summary>${t.expDetails}<span class="expand-icon" aria-hidden="true">+</span></summary><ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul></details></div></article>`).join('')}</div>
    </div></section>
    <section class="section container" id="research">${heading(3, t.nav[3], t.sectionIntro[2])}
      <div class="project-grid">${t.projects.map((p, i) => `<article class="project-card"><div class="project-top"><span class="project-number">0${i + 1}</span><span class="project-symbol" aria-hidden="true">${['⌘', '≋', arrow][i]}</span></div><p class="mini-label accent">${p.category}</p><h3>${p.name}</h3><p class="project-org">${p.org}</p><p class="date">${p.date}</p><p class="project-summary">${p.summary}</p>${tags(p.tags)}<details class="project-details"><summary>${t.details}<span class="expand-icon" aria-hidden="true">+</span></summary><p>${p.details}</p></details></article>`).join('')}</div>
    </section>
    <section class="section container" id="skills">${heading(4, t.nav[4], t.sectionIntro[3])}<div class="skills-grid">${t.skillGroups.map((s, i) => `<article class="skill-group"><span class="skill-icon" aria-hidden="true">${['{ }', '<svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 2v20M3.34 7l17.32 10M3.34 17 20.66 7"/></svg>', arrow][i]}</span><h3>${s.title}</h3>${tags(s.items)}</article>`).join('')}</div></section>
    <section class="contact-section" id="contact"><div class="container contact-layout"><div><p class="eyebrow">${t.contactKicker}</p><h2>${t.contactTitle}</h2><p>${t.contactText}</p></div><div class="contact-links">${emails.map((email, i) => `<div class="email-card"><span class="mini-label">${i === 0 ? t.personalEmail : t.universityEmail}</span><a class="email-link" href="mailto:${email}">${email}${arrow}</a><div class="copy-row"><button type="button" class="copy-email" data-email="${email}" aria-label="${t.copy}: ${email}">${t.copy}<span aria-hidden="true">⧉</span></button><span class="copy-status" role="status" aria-live="polite"></span></div></div>`).join('')}</div></div></section>`;
  document.getElementById('footer').innerHTML = `<div class="container footer-content"><a class="wordmark" href="#home" aria-label="Yiming Cheng — Home">yc<span>.</span></a><span>${t.footer}</span><a class="back-top" href="#home">${t.top} ↑</a></div>`;
  document.querySelectorAll('.copy-email').forEach(button => button.addEventListener('click', async () => {
    const status = button.nextElementSibling;
    try { await navigator.clipboard.writeText(button.dataset.email); status.textContent = t.copied; }
    catch { status.textContent = t.copyFail; }
  }));
  observeSections();
}

let observer;
function observeSections() {
  observer?.disconnect();
  observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) document.querySelectorAll('nav a').forEach(a => {
        if (a.hash === `#${entry.target.id === 'home' ? 'about' : entry.target.id}`) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -65% 0px' });
  document.querySelectorAll('main > section').forEach(section => observer.observe(section));
}
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); mobileNav.hidden = true; }
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open)); mobileNav.hidden = !open;
});
mobileNav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); } });
matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.lang === language) return;
  const sectionId = document.querySelector('nav a[aria-current]')?.hash;
  const atHome = window.scrollY < document.getElementById('about').offsetTop - 100;
  language = button.dataset.lang;
  try { localStorage.setItem('yc-language', language); } catch {}
  render(); closeMenu();
  if (sectionId && !atHome) document.querySelector(sectionId)?.scrollIntoView({ behavior: 'instant' });
}));
render();
