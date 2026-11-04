// All biographical facts come from the supplied résumé. No external requests.
const content = {
  zh: {
    nav: ['关于我', '教育经历', '职业经历', '研究项目', '专业技能', '联系我'],
    kicker: '计算社会科学 · 人工智能研究', name: '程一鸣', secondary: 'Yiming Cheng',
    lead: '以数据理解社会，<br>以研究连接技术与人。',
    intro: '香港中文大学（深圳）计算社会科学博士生。关注大语言模型、文本挖掘与量化分析，拥有科技行业研究、投资研究与风险咨询的实践经历。',
    explore: '探索我的研究', connect: '联系我', institution: '香港中文大学（深圳）', degree: '计算社会科学 · 博士在读',
    focusLabel: '研究关注', focus: ['大语言模型', '文本挖掘', '量化分析'],
    orbit: ['人工智能', '社会科学', '数据分析'], scroll: '向下探索',
    sectionIntro: ['学习与探索的轨迹', '从行业洞察到实践', '以问题为起点', '研究与实践的工具箱'],
    education: [
      { date: '2025.09 — 至今', name: '香港中文大学（深圳）', location: '中国', title: '计算社会科学博士', note: '全额奖学金', text: '研究方向：大语言模型（LLM）、文本挖掘与量化分析。' },
      { date: '2022.09 — 2023.09', name: '华威大学', location: '英国', title: '经济学硕士', note: '', text: '' },
      { date: '2018.09 — 2022.06', name: '西南大学', location: '中国', title: '经济学学士', note: '211 工程', text: '' }
    ],
    experience: [
      { date: '2026.06 — 2026.08', name: '字节跳动', label: '科技与组织研究', title: '管理研究院 · 高招实习生', summary: '聚焦 AI 行业、组织与人才，连接技术趋势与企业研究。', points: [
        '深度研究 4 家海外 AI 初创企业，结合公开资料与行业访谈，分析产品定位、竞争策略、组织架构及核心人才要求。',
        '将 AI Agent 企业划分为通用、代码、企业级、基础设施及垂直场景五类，梳理核心人才的 0 到 1 项目经验与代表性技术成果，形成重点关注人才名单。',
        '扫描国内外 AI 数据服务企业，筛选 6 家重点公司，梳理业务方向与核心团队。'
      ] },
      { date: '2025.03 — 2025.07', name: '复星创富', label: '产业与投资研究', title: '战略发展部 · 投融资实习生', summary: '围绕存储产业与 AI 眼镜开展研究，参与项目交割与投后管理。', points: [
        '分析 SSD 产业链与企业级存储竞争格局，研究 NAND 闪存、主控芯片及模组的国产替代机会；参与武汉市存储产业生态规划，提出上下游企业引进建议。',
        '从投资方向匹配度、高频应用场景及软件生态成熟度评估 AI 眼镜投资可行性，形成现阶段暂不推进投资的建议。',
        '对接三级政府出资方及被投企业，参与 6 个项目的投后管理及 3 个项目交割，涉及金额超 2,500 万元。'
      ] },
      { date: '2021.07 — 2021.09', name: '毕马威企业咨询（中国）', label: '治理与风险合规', title: '风险咨询 · 暑期实习生', summary: '将跨国法规研究转化为企业海外经营的具体合规建议。', points: [
        '参与世界 500 强企业海外设立机构项目，研究土耳其、孟加拉国、澳大利亚等国的公司治理及劳动用工法规，梳理董事会组成、任免程序与劳动力管理要求。'
      ] }
    ],
    projects: [
      { date: '2026.08 — 至今', category: 'LLM SAFETY', name: '大语言模型安全评测', org: '研究助理', summary: '通过对抗攻击与评测指标，比较大语言模型的安全防护表现。', details: '参与基于 TAP（Tree of Attacks with Pruning）的对抗攻击策略讨论；使用 Python 统计模型拒答率、攻击成功率等指标，对比模型在直接请求与对抗攻击下的安全防护表现。', tags: ['Python', 'TAP', '安全评测'] },
      { date: '2026.04 — 至今', category: 'AI-ASSISTED EVIDENCE', name: '证据与差距图谱（EGM）', org: '联合国儿童基金会驻华办事处 · 研究助理', summary: '将大语言模型用于文献筛选，探索 AI 编码与人工判断的一致性。', details: '参与约 300 篇文献的人工编码，使用 LLM 辅助文献分类；对比人工与 AI 编码结果，识别主要误判类型并迭代优化 Prompt，提升编码一致性。', tags: ['LLM', 'Prompt 优化', '文献编码'] },
      { date: '2024.04 — 2024.06', category: 'SUSTAINABILITY & DATA', name: '可持续发展研究', org: '帝国理工学院（英国）· 兼职研究助理', summary: '以数据清洗、模糊匹配与地理验证支持能源行业研究。', details: '使用 Stata 清洗印度尼西亚能源行业数据，通过模糊匹配完成 300 余条电力公司及基站名称匹配，并结合地理坐标交叉验证，匹配准确率达 95% 以上。', tags: ['Stata', '模糊匹配', '数据清洗'] }
    ],
    details: '项目详情', expDetails: '工作内容',
    skillGroups: [
      { title: '数据与分析', text: '数据清洗、统计分析与量化研究', items: ['Python', 'R', 'Stata', 'Excel'] },
      { title: '大语言模型', text: '将 AI 工具应用于具体研究问题', items: ['LLM API 调用', 'Prompt 优化', '文本挖掘', '模型安全评测'] },
      { title: '研究方法', text: '连接证据、行业与决策', items: ['行业研究', '文献编码', '模糊匹配', '量化分析'] }
    ],
    contactKicker: '让交流成为下一步', contactTitle: '期待与你建立联系。', contactText: '欢迎就实习机会、学术交流或研究相关话题与我联系。', emailLabel: '电子邮箱', phoneLabel: '电话', copy: '复制邮箱', copied: '已复制', copyFail: '未能复制，请手动选择邮箱', footer: '程一鸣 · 学术与职业档案', top: '回到顶部', privacy: '无追踪 · 无第三方字体',
  },
  en: {
    nav: ['About', 'Education', 'Experience', 'Research', 'Skills', 'Contact'],
    kicker: 'COMPUTATIONAL SOCIAL SCIENCE · AI RESEARCH', name: 'Yiming Cheng', secondary: '程一鸣',
    lead: 'Understanding society.<br>Connecting technology & people.',
    intro: 'PhD student in Computational Social Science at The Chinese University of Hong Kong, Shenzhen. Interested in large language models, text mining, and quantitative analysis, with experience in technology research, investment research, and risk consulting.',
    explore: 'Explore my research', connect: 'Get in touch', institution: 'The Chinese University of Hong Kong, Shenzhen', degree: 'PhD student · Computational Social Science',
    focusLabel: 'RESEARCH INTERESTS', focus: ['Large language models', 'Text mining', 'Quantitative analysis'],
    orbit: ['Artificial intelligence', 'Social science', 'Data analysis'], scroll: 'SCROLL TO EXPLORE',
    sectionIntro: ['A foundation for inquiry', 'From insight to practice', 'Questions into exploration', 'Tools for research & practice'],
    education: [
      { date: 'Sep 2025 — Present', name: 'The Chinese University of Hong Kong, Shenzhen', location: 'China', title: 'PhD in Computational Social Science', note: 'Full scholarship', text: 'Research interests: large language models (LLMs), text mining, and quantitative analysis.' },
      { date: 'Sep 2022 — Sep 2023', name: 'University of Warwick', location: 'United Kingdom', title: 'Master’s in Economics', note: '', text: '' },
      { date: 'Sep 2018 — Jun 2022', name: 'Southwest University', location: 'China', title: 'Bachelor’s in Economics', note: 'Project 211 university', text: '' }
    ],
    experience: [
      { date: 'Jun 2026 — Aug 2026', name: 'ByteDance', label: 'TECHNOLOGY & ORGANIZATIONS', title: 'Management Research Institute · Intern', summary: 'Research on the AI industry, organizational structures, and talent.', points: [
        'Studied 4 overseas AI startups through public sources and industry interviews, comparing product positioning, competitive strategy, organizational structures, and key talent requirements.',
        'Grouped AI Agent companies into general-purpose, coding, enterprise, infrastructure, and vertical applications. Reviewed core talent’s zero-to-one project experience and technical work to produce a talent shortlist.',
        'Surveyed AI data service providers in China and abroad, selecting 6 companies for further research on their businesses and core teams.'
      ] },
      { date: 'Mar 2025 — Jul 2025', name: 'Fosun Capital', label: 'INDUSTRY & INVESTMENT', title: 'Strategic Development · Investment & Financing Intern', summary: 'Storage and AI glasses research, alongside investment closing and post-investment management.', points: [
        'Analyzed the SSD value chain, enterprise storage competition, and domestic substitution opportunities in NAND flash, controllers, and modules. Contributed to Wuhan’s storage ecosystem planning with recommendations for attracting upstream and downstream companies.',
        'Assessed AI glasses investments based on investment fit, frequent-use scenarios, and software ecosystem maturity; recommended not proceeding at that stage.',
        'Coordinated with government investors at three levels and portfolio companies; supported post-investment management for 6 projects and 3 project closings involving over RMB 25 million.'
      ] },
      { date: 'Jul 2021 — Sep 2021', name: 'KPMG Advisory (China)', label: 'GOVERNANCE, RISK & COMPLIANCE', title: 'Risk Consulting · Summer Intern', summary: 'Translated cross-border regulatory research into practical compliance recommendations.', points: [
        'Supported an overseas entity establishment project for a Fortune Global 500 company. Researched corporate governance and employment rules in Turkey, Bangladesh, Australia, and other countries, covering board composition, appointment procedures, and workforce management.'
      ] }
    ],
    projects: [
      { date: 'Aug 2026 — Present', category: 'LLM SAFETY', name: 'Large Language Model Safety Evaluation', org: 'Research Assistant', summary: 'Comparing LLM safeguards through adversarial attacks and evaluation metrics.', details: 'Contributed to discussions of adversarial attack strategies based on TAP (Tree of Attacks with Pruning). Used Python to calculate refusal rates and attack success rates, comparing model safeguards under direct requests and adversarial attacks.', tags: ['Python', 'TAP', 'Safety evaluation'] },
      { date: 'Apr 2026 — Present', category: 'AI-ASSISTED EVIDENCE', name: 'Evidence and Gap Map (EGM)', org: 'UNICEF China Office · Research Assistant', summary: 'Using LLMs to support literature screening and improve agreement with human coding.', details: 'Contributed to manual coding of approximately 300 papers and LLM-assisted literature classification. Compared human and AI coding, identified major misclassification patterns, and iteratively refined prompts to improve agreement.', tags: ['LLM', 'Prompt optimization', 'Literature coding'] },
      { date: 'Apr 2024 — Jun 2024', category: 'SUSTAINABILITY & DATA', name: 'Sustainability Research', org: 'Imperial College London · Part-time Research Assistant', summary: 'Supporting energy research with data cleaning, fuzzy matching, and geographic validation.', details: 'Cleaned Indonesian energy-sector data using Stata. Applied fuzzy matching to over 300 power company and base-station names, cross-validated with geographic coordinates, and achieved matching accuracy above 95%.', tags: ['Stata', 'Fuzzy matching', 'Data cleaning'] }
    ],
    details: 'Project details', expDetails: 'Responsibilities',
    skillGroups: [
      { title: 'Data & analytics', text: 'Cleaning, statistical analysis, and quantitative research', items: ['Python', 'R', 'Stata', 'Excel'] },
      { title: 'Large language models', text: 'Applying AI tools to research questions', items: ['LLM APIs', 'Prompt optimization', 'Text mining', 'Model safety evaluation'] },
      { title: 'Research methods', text: 'Connecting evidence, industries, and decisions', items: ['Industry research', 'Literature coding', 'Fuzzy matching', 'Quantitative analysis'] }
    ],
    contactKicker: 'A CONVERSATION STARTS HERE', contactTitle: 'Let’s connect.', contactText: 'For internship opportunities, academic exchange, or conversations about research, feel free to reach out.', emailLabel: 'EMAIL', phoneLabel: 'PHONE', copy: 'Copy email', copied: 'Copied', copyFail: 'Could not copy; please select the email manually', footer: 'Yiming Cheng · Academic & professional profile', top: 'Back to top', privacy: 'No tracking · No third-party fonts',
  }
};

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
  document.querySelector('meta[name="description"]').content = t.intro;
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  const nav = ids.map((id, i) => `<a href="#${id}">${t.nav[i]}</a>`).join('');
  document.getElementById('desktop-nav').innerHTML = nav;
  document.getElementById('mobile-nav').innerHTML = nav;
  document.getElementById('main').innerHTML = `
    <section class="hero container" id="about" aria-labelledby="hero-title">
      <div class="hero-copy"><p class="eyebrow"><span class="small-line"></span>${t.kicker}</p>
        <h1 id="hero-title">${t.name}<span class="secondary-name">${t.secondary}</span><span class="name-dot">.</span></h1>
        <p class="hero-statement">${t.lead}</p><p class="hero-intro">${t.intro}</p>
        <div class="hero-actions"><a class="button primary" href="#research">${t.explore}${arrow}</a><a class="text-link" href="#contact">${t.connect}<span aria-hidden="true">→</span></a></div>
      </div>
      <aside class="profile-card" aria-label="${t.focusLabel}">
        <div class="card-topline"><span>RESEARCH PROFILE</span><span>01 / YC</span></div>
        <div class="research-map" aria-hidden="true"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div><div class="map-center">yc<span>.</span></div><i class="map-point point-one"></i><i class="map-point point-two"></i><i class="map-point point-three"></i><span class="map-label label-one">${t.orbit[0]}</span><span class="map-label label-two">${t.orbit[1]}</span><span class="map-label label-three">${t.orbit[2]}</span><span class="map-cross cross-one">+</span><span class="map-cross cross-two">+</span></div>
        <div class="profile-school"><span class="profile-mark" aria-hidden="true">${arrow}</span><div><strong>${t.institution}</strong><p>${t.degree}</p></div></div>
        <div class="profile-focus"><span class="mini-label">${t.focusLabel}</span>${tags(t.focus)}</div>
      </aside>
      <div class="hero-bottom"><span>AI <span class="dot-separator">/</span> DATA <span class="dot-separator">/</span> SOCIETY</span><a href="#education">${t.scroll}<span aria-hidden="true">↓</span></a></div>
    </section>
    <section class="section container" id="education">${heading(1, t.nav[1], t.sectionIntro[0])}
      <div class="education-list">${t.education.map((e, i) => `<article class="education-row"><div class="date"><span class="timeline-dot ${i === 0 ? 'current' : ''}"></span>${e.date}</div><div class="education-body"><div class="education-title"><h3>${e.name}</h3><span class="location">${e.location}</span></div><div class="degree-line"><p>${e.title}</p>${e.note ? `<span class="badge">${e.note}</span>` : ''}</div>${e.text ? `<p class="muted education-note">${e.text}</p>` : ''}</div></article>`).join('')}</div>
    </section>
    <section class="section experience-section" id="experience"><div class="container">${heading(2, t.nav[2], t.sectionIntro[1])}
      <div class="experience-list">${t.experience.map((e, i) => `<article class="experience-row"><div class="experience-meta"><span class="company-index">0${i + 1}</span><span class="date">${e.date}</span></div><div class="experience-body"><p class="mini-label accent">${e.label}</p><h3>${e.name}</h3><p class="role">${e.title}</p><p class="muted">${e.summary}</p><details class="work-details"${i === 0 ? ' open' : ''}><summary>${t.expDetails}<span class="expand-icon" aria-hidden="true">+</span></summary><ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul></details></div></article>`).join('')}</div>
    </div></section>
    <section class="section container" id="research">${heading(3, t.nav[3], t.sectionIntro[2])}
      <div class="project-grid">${t.projects.map((p, i) => `<article class="project-card"><div class="project-top"><span class="project-number">0${i + 1}</span><span class="project-symbol" aria-hidden="true">${['⌘', '≋', arrow][i]}</span></div><p class="mini-label accent">${p.category}</p><h3>${p.name}</h3><p class="project-org">${p.org}</p><p class="date">${p.date}</p><p class="project-summary">${p.summary}</p>${tags(p.tags)}<details class="project-details"><summary>${t.details}<span class="expand-icon" aria-hidden="true">+</span></summary><p>${p.details}</p></details></article>`).join('')}</div>
    </section>
    <section class="section container" id="skills">${heading(4, t.nav[4], t.sectionIntro[3])}<div class="skills-grid">${t.skillGroups.map((s, i) => `<article class="skill-group"><span class="skill-icon" aria-hidden="true">${['{ }', '✳', '↗'][i]}</span><h3>${s.title}</h3><p class="muted">${s.text}</p>${tags(s.items)}</article>`).join('')}</div></section>
    <section class="contact-section" id="contact"><div class="container contact-layout"><div><p class="eyebrow">${t.contactKicker}</p><h2>${t.contactTitle}</h2><p>${t.contactText}</p></div><div class="contact-links"><span class="mini-label">${t.emailLabel}</span><a class="email-link" href="mailto:Yiming_warwick@outlook.com">Yiming_warwick@outlook.com ${arrow}</a><button type="button" id="copy-email">${t.copy}<span aria-hidden="true">⧉</span></button><span class="copy-status" role="status" aria-live="polite"></span><div class="phone"><span class="mini-label">${t.phoneLabel}</span><a href="tel:+8618625887306">+86 186 2588 7306</a></div></div></div></section>`;
  document.getElementById('footer').innerHTML = `<div class="container footer-content"><a class="wordmark" href="#about" aria-label="Yiming Cheng — Home">yc<span>.</span></a><span>${t.footer}</span><span class="footer-privacy">${t.privacy}</span><a class="back-top" href="#about">${t.top} ↑</a></div>`;
  document.getElementById('copy-email').addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try { await navigator.clipboard.writeText('Yiming_warwick@outlook.com'); status.textContent = t.copied; }
    catch { status.textContent = t.copyFail; }
  });
  observeSections();
}

let observer;
function observeSections() {
  observer?.disconnect();
  observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) document.querySelectorAll('nav a').forEach(a => {
        if (a.hash === `#${entry.target.id}`) a.setAttribute('aria-current', 'location');
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
  language = button.dataset.lang;
  try { localStorage.setItem('yc-language', language); } catch {}
  render(); closeMenu();
  if (sectionId && sectionId !== '#about') document.querySelector(sectionId)?.scrollIntoView({ behavior: 'instant' });
}));
render();
