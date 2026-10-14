document.documentElement.classList.add('js');
const $=s=>document.querySelector(s),rs=matchMedia('(prefers-reduced-motion:reduce)').matches;
$('#yr').textContent=new Date().getFullYear();
const seen=(el,fn,t=.35)=>{if(el)new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){o.disconnect();fn()}},{threshold:t}).observe(el)};

/* ===== real SVG icons (24x24, stroke) ===== */
const IC={
dashboard:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path<script src="script.js"></script> d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.7 0 4.5 1.8 4.5 5"/>',
userplus:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M19 8v6M16 11h6"/>',
inbox:'<path d="M3 13l3-8h12l3 8v6a1 1 0 01-1 1H4a1 1 0 01-1-1z"/><path d="M3 13h5l1 3h6l1-3h5"/>',
shuffle:'<path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
radio:'<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 010 8.4M7.8 16.2a6 6 0 010-8.4M19.1 4.9a10 10 0 010 14.2M4.9 19.1a10 10 0 010-14.2"/>',
building:'<path d="M6 22V4a1 1 0 011-1h10a1 1 0 011 1v18zM6 12H4a1 1 0 00-1 1v8a1 1 0 001 1h2M18 9h2a1 1 0 011 1v11a1 1 0 01-1 1h-2M10 7h4M10 11h4M10 15h4"/>',
grid:'<path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"/>',
clipboard:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 13l2 2 4-4"/>',
card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/>',
group:'<circle cx="12" cy="8" r="3"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/><path d="M6.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5M1.5 17c0-2 1.5-3.5 3.5-3.5M22.5 17c0-2-1.5-3.5-3.5-3.5"/>',
briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 13h18"/>',
idcard:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="11" r="2.5"/><path d="M5.5 17c.5-2 2-3 3.5-3s3 1 3.5 3M15 9h3M15 13h3"/>',
package:'<path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/>',
megaphone:'<path d="M3 11v3a1 1 0 001 1h2l7 4V6L6 10H4a1 1 0 00-1 1zM17 8a5 5 0 010 8M19.5 5.5a9 9 0 010 13"/>',
chart:'<path d="M3 3v18h18M8 17v-5M13 17V8M18 17v-9"/>',
rupee:'<path d="M6 4h12M6 9h12M9 4c4 0 6 2 6 5s-2 5-6 5l7 6"/>',
truck:'<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
wrench:'<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>',
zap:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
settings:'<path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
check:'<path d="M5 12l5 5 9-10"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
file:'<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h6"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
upload:'<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
moon:'<path d="M21 13A9 9 0 1111 3a7 7 0 0010 10z"/>',
wifi:'<path d="M2 9a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0M12 19.5h.01"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',
bell:'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4zM10 21h4"/>',
db:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
left:'<path d="M15 5l-7 7 7 7"/>',
right:'<path d="M9 5l7 7-7 7"/>'};
const ic=n=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;
document.querySelectorAll('[data-ic]').forEach(e=>e.innerHTML=ic(e.dataset.ic));

/* ===== header: fixed size (no shrink on scroll), progress bar + active link ===== */
const nav=$('#nav'),menu=$('#menu'),ind=$('#ind'),burger=$('#burger'),prog=$('#progress'),
  links=[...menu.querySelectorAll('a:not(.btn)')];
let active=null;
function moveInd(a){if(!a||getComputedStyle(ind).display==='none'){ind.style.opacity=0;return}
  ind.style.opacity=1;ind.style.width=a.offsetWidth+'px';ind.style.transform='translateX('+a.offsetLeft+'px)'}
function onScroll(){
  const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;
  prog.style.width=(max>0?y/max*100:0)+'%';
  let cur=null;links.forEach(a=>{const s=document.querySelector(a.getAttribute('href'));if(s&&s.getBoundingClientRect().top<=160)cur=a});
  if(cur!==active){active=cur;links.forEach(a=>a.classList.toggle('active',a===cur));moveInd(cur)}}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',()=>moveInd(active));onScroll();
links.forEach(a=>a.addEventListener('mouseenter',()=>moveInd(a)));
menu.addEventListener('mouseleave',()=>moveInd(active));
burger.onclick=()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')};
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');burger.setAttribute('aria-expanded',false)}));

/* hero plot layout */
const box=$('#plots'),R=4,C=12,PRICE=1450000,plots=[];
for(let r=0;r<R;r++)for(let c=0;c<C;c++){
  if(r===0&&c===0)box.insertAdjacentHTML('beforeend','<div class="road"></div>');
  const b=document.createElement('button');b.className='plot';b.textContent=(r<2?'A':'B')+(r*C+c+1);
  b.setAttribute('aria-label','Plot '+b.textContent);b.style.gridColumn=c<6?c+1:c+2;b.style.gridRow=r+1;
  b.onclick=()=>{b.classList.toggle('sold');b.classList.remove('hold');pop(b);stats()};
  box.append(b);plots.push(b)}
$('#totalCount').textContent=' / '+plots.length;
function stats(){const n=plots.filter(p=>p.classList.contains('sold')).length;$('#bookedCount').textContent=n;$('#revenue').textContent='₹'+(n*PRICE/1e7).toFixed(2)+' Cr'}
function pop(p){p.classList.remove('pop');void p.offsetWidth;p.classList.add('pop')}
[3,9,14,20,27,33,41].forEach(i=>plots[i].classList.add('sold'));plots[5].classList.add('hold');plots[30].classList.add('hold');stats();
let today=6;
function book(){const free=plots.filter(p=>!p.classList.contains('sold'));if(!free.length)return plots.forEach(p=>p.classList.remove('sold'));
  const p=free[Math.floor(Math.random()*free.length)];p.classList.remove('hold');p.classList.add('sold');pop(p);
  const f=free[Math.floor(Math.random()*free.length)];if(f!==p&&Math.random()<.5)f.classList.add('hold');$('#today').textContent=++today;stats()}

/* live notifications over the photo (sample events) */
const N=[['phone','Missed call routed','To Kavitha R. · Call back in 10 min'],['userplus','New lead from Facebook','Added to Lead Pool'],['calendar','Site visit scheduled','Tomorrow 11:00 · Green County'],['card','Payment received','₹2,50,000 · Receipt generated'],['clipboard','Plot booked','Plot A12 · Agreement ready'],['group','Partner commission paid','Channel partner payout done'],['zap','Follow-up sent','Automation Center · WhatsApp']];
const nb=$('#notifs');let ni=0;
function notif(){const n=N[ni++%N.length],d=document.createElement('div');d.className='nt';d.innerHTML=`<i>${ic(n[0])}</i><div><b>${n[1]}</b><small>${n[2]}</small></div>`;nb.prepend(d);while(nb.children.length>3)nb.lastChild.remove();if(n[0]==='clipboard')book()}
notif();notif();notif();
if(!rs)setInterval(notif,2600);

/* features: 24 modules, every feature listed, with department filter */
const FIN=['Finance Dashboard','Chart of Accounts','Opening Balance','Journal Voucher','Payment Voucher','Receipt Voucher','Contra Voucher','Credit Note','Debit Note','Cash Book','Bank Book','General Ledger','Trial Balance','Profit & Loss','Balance Sheet','Accounts Receivable','Accounts Payable','Cost Center','Financial Year','Budget','Fixed Assets','Depreciation','GST','Audit Log'];
const T=[
['Sales',[
 ['dashboard','Dashboard','KPIs, sales trend, lead sources and tasks on one home screen.',['Leads, site visits, bookings and collections KPIs','Sales trend and lead source charts','Daily tasks card for follow-ups','Own dashboard view for finance, project, inventory, marketing and HR roles']],
 ['users','CRM','Full lead management with a customer timeline of every call and visit.',['7 statuses: New, Contacted, Interested, Site Visit, Negotiation, Booked, Lost','Today, tomorrow and missed follow-up views','Re-engaged, No response, Not interested, Junk and NRI lead views','Mediator (channel partner) leads view','One-tap call, WhatsApp and email','Customer timeline and ownership panel','Add and edit lead forms']],
 ['inbox','Lead Pool','All unassigned leads in one pool, ready to be picked up.',['Unassigned and assigned lead counts','Hot, warm and cold priority queues','Today\'s leads at a glance','Reps available for pickup']],
 ['shuffle','Lead Allocation','Assign leads to employees, so no enquiry waits.',['Manual distribution to eligible employees','Unassigned leads and eligible employee counts','Active leads and average conversion per employee','Distribution logic that spreads leads across the team']],
 ['radio','Media Source','See which social promotion or ad brings real buyers.',['Visitors from social promotions, with a live count on the sidebar','Visitor analytics and conversion rate','Convert a visitor into a CRM lead']]]],
['Operations',[
 ['building','Projects','Projects with details, documents and progress.',['Total projects, total units, units sold and available','Search by name and filter by location','Project details view','Add new project and Excel import']],
 ['grid','Plot Management','Plots, blocks and units with size, rate and live status.',['Area in sq.ft and cents, with dimensions and facing','Rate per sq.ft and total price','Live status for every plot','Highlights: DTCP approved, corner plot, road, water, drainage, street light, park, school and more','Book a plot or block a plot']],
 ['clipboard','Bookings','Book plots, take tokens and generate agreements.',['Booking form and booking detail drawer','Agreement and receipt generation','Totals: bookings, confirmed, booking value, collected, pending','Excel import']],
 ['card','Payments','Receipts, invoices and a payment gateway with every instalment tracked.',['Tabs: All, Paid, Pending, Overdue, Partial','Payment form and receipt view','Payment gateway for online payments']],
 ['phone','IVR & Calls','Call routing, records and a call-center view.',['Inbound, outbound, missed and voicemail views','Routing order: owner, team lead, next available, queue, voicemail','Unknown callers matched to CRM leads by phone','Call history and import of call logs']],
 ['trophy','Agent Performance','Leaderboards that show who is closing.',['Per-agent metrics and leaderboard','Open any agent for a detailed view','Performance data import']]]],
['Partners',[
 ['group','Channel Partners','Partners and their commissions in one place.',['Partner tier, city and contact person','Bank name and IFSC for payouts','Commission amount per booking','Payouts with payment mode and UTR reference','Totals: partners, active, commission paid, pending']],
 ['briefcase','Agents & Brokers','Agents and brokers with their sales and payouts.',['Agencies split into Residential, Commercial and Mixed','Agent and broker records with their sales','Commission and payout view']]]],
['Management',[
 ['idcard','HRM','Employees, attendance and payroll.',['Employee records with add employee form','Payroll and salary tracking','Excel import of employees']],
 ['package','Inventory','Stock and materials with add and issue records.',['Categories: Cement, Steel, Bricks, Sand, Other','Low-stock alerts and total stock value','Reorder, record purchase and record sale','Add and edit items']],
 ['megaphone','Marketing','Campaigns and the leads they generate.',['Campaign status: active, paused, ended, draft','Facebook, Google and WhatsApp lead counts','Campaign ROI','Excel import of campaigns']],
 ['chart','Reports','Analytics and insights you can export.',['Tabs: Overview, Projects, Sales, Leads & Marketing, Agents','KPIs: revenue, bookings, leads, conversion rate, average deal size','Each role sees only its own scope of reports','Export']],
 ['file','Documents','Shared documents with access that follows the role.',['View access for most roles','Channel partners and agencies see only their own documents']]]],
['Construction',[
 ['rupee','Finance','Ledgers, vouchers, GST, bank book, trial balance, P&L and balance sheet.',['Dashboard: total sales value, collection received, pending collection, monthly revenue','Costs: marketing, construction, vendor payments, employee salary','Collection ratio and project revenue table','24 finance sub-modules, listed below'],FIN],
 ['truck','Vendor Management','Suppliers, purchase orders and vendor payments.',['Vendors, purchase orders and payments','Total and active vendors, pending purchase orders','Purchase value, pending vendor payments, total paid','Excel import of vendors']],
 ['wrench','Contractor Management','Teams, work orders and contractor payments.',['Tabs: Contractors, Work Orders, Payments','Labour count, contract value, average completion','Total paid, pending and overdue payments','Release payment and create work order']],
 ['zap','Automation Center','CRM workflows that follow up and assign automatically.',['Triggers: Lead Created, Site Visit Scheduled, Visit Completed, Negotiation Stage, Booking Confirmed, Registration Completed','WhatsApp and email follow-ups','Triggers fired, messages sent and success rate','Send now']],
 ['settings','Settings','Company settings, users, roles and permissions.',['Company settings','Roles and permissions editor','Email, SMS, WhatsApp and push notification switches','Two-factor authentication','Backup and restore','System status: version, server, database, storage, license, last backup, API']]]],
['Account',[
 ['user','Profile','Your own account, available to every role.',['Your details and role','Change password with current, new and confirm fields']]]]];
const ALL=T.flatMap((t,d)=>t[1].map(m=>({d:t[0],c:d%2?'g':'b',i:m[0],n:m[1],t:m[2],f:m[3],x:m[4]})));
const fil=$('#filters'),xl=$('#xpList'),xp=$('#xpPanel');

/* module explorer: department tabs filter the list, the panel always fits its content */
let view=ALL,sel=0;
['All',...T.map(t=>t[0])].forEach((c,i)=>{const b=document.createElement('button');b.role='tab';
  b.textContent=c+' · '+(c==='All'?ALL.length:ALL.filter(m=>m.d===c).length);b.setAttribute('aria-selected',i===0);
  b.onclick=()=>{[...fil.children].forEach(x=>x.setAttribute('aria-selected',x===b));
    view=ALL.filter(m=>c==='All'||m.d===c);buildList();pick(0,false)};fil.append(b)});
function buildList(){
  xl.innerHTML=view.map((m,i)=>`<button type="button" role="tab" class="xi" data-c="${m.c}" data-i="${i}" aria-selected="false"><span class="xi-ic">${ic(m.i)}</span><span><b>${m.n}</b><small>${m.d}</small></span><em>${m.f.length}</em></button>`).join('')}
function pick(i,anim=true){
  sel=Math.max(0,Math.min(view.length-1,i));const m=view[sel];
  [...xl.children].forEach((b,k)=>{const on=k===sel;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;
    if(on&&anim&&innerWidth<=900)xl.scrollTo({left:b.offsetLeft-xl.clientWidth/2+b.offsetWidth/2,behavior:rs?'auto':'smooth'})});
  xp.dataset.c=m.c;
  xp.innerHTML=`<div class="xp-head"><div class="ico">${ic(m.i)}</div><div class="xp-txt"><span class="dp">${m.d}</span><h3>${m.n}</h3><p>${m.t}</p></div><div class="xp-count"><strong>${m.f.length}</strong><small>features</small></div></div>
  <ol class="xp-ft">${m.f.map((f,k)=>`<li style="--k:${k}"><i>${k+1}</i><span>${f}</span></li>`).join('')}</ol>
  ${m.x?`<div class="xp-sub"><h4>${m.x.length} finance sub-modules</h4><div class="chips">${m.x.map(x=>`<span>${x}</span>`).join('')}</div></div>`:''}
  <div class="xp-nav"><button type="button" class="btn ghost" data-go="-1"${sel===0?' disabled':''}>← Previous</button><button type="button" class="btn" data-go="1"${sel===view.length-1?' disabled':''}>Next module →</button></div>`;
  if(anim&&!rs){xp.classList.remove('swap');void xp.offsetWidth;xp.classList.add('swap')}}
xl.addEventListener('click',e=>{const b=e.target.closest('.xi');if(b)pick(+b.dataset.i)});
xl.addEventListener('keydown',e=>{const k=e.key;
  if(['ArrowDown','ArrowRight','ArrowUp','ArrowLeft'].includes(k)){e.preventDefault();
    pick(sel+(k==='ArrowDown'||k==='ArrowRight'?1:-1));xl.children[sel].focus({preventScroll:true})}});
xp.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g)pick(sel+ +g.dataset.go)});
buildList();pick(1,false);

function glow(g){g.addEventListener('pointermove',e=>{const k=e.target.closest('.card');if(k){const r=k.getBoundingClientRect();k.style.setProperty('--mx',e.clientX-r.left+'px');k.style.setProperty('--my',e.clientY-r.top+'px')}})}

/* platform features (built in under every module) */
const PF=[
['lock','Company login','Sign in with your company ID. New companies can register and get an onboarding walkthrough.'],
['building','Separate data per company','Every record is scoped to your company, so no company sees another\'s data.'],
['key','Password reset with OTP','Forgot password sends an OTP to your email. A strength meter helps set a strong password.'],
['clock','Auto logout','Idle sessions time out automatically.'],
['shield','Role-based permissions','11 roles. Permissions go down to module, button, form and table, with view, create, edit, delete and export flags.'],
['upload','Excel import','Bring in projects, bookings, vendors, contractors, employees, campaigns, call logs and agent data.'],
['radio','Leads from Facebook','A Facebook lead-form webhook adds new leads to your CRM the moment they are filled.'],
['clipboard','Customer timeline','Every call, visit and payment on one history, with an ownership panel for each customer.'],
['card','Receipts and payment gateway','Generate receipts and take payments online from the same screen.'],
['bell','Notifications and 2FA','Email, SMS, WhatsApp and push switches, plus two-factor authentication.'],
['moon','Themes','Switch the look of the app from a theme switcher.'],
['wifi','Offline screen','A clear message when the network drops, so nobody loses work unknowingly.'],
['phone','Mobile bottom navigation','Phone-friendly navigation for agents working from the site.'],
['db','Backup and restore','Back up your data and restore it from Settings.'],
['dashboard','Role-wise dashboards','Finance, project, inventory, marketing and HR roles each land on their own home screen.']];
const pf=$('#pf');
pf.innerHTML=PF.map((m,i)=>`<article class="card" data-c="${i%2?'g':'b'}" style="--i:${i}"><div class="ico">${ic(m[0])}</div><h3>${m[1]}</h3><p>${m[2]}</p></article>`).join('');
glow(pf);

/* hero photo parallax (mouse) */
const ph=$('.photo');
ph.addEventListener('pointermove',e=>{if(rs)return;const r=ph.getBoundingClientRect();ph.style.setProperty('--px',((e.clientX-r.left)/r.width*2-1).toFixed(3));ph.style.setProperty('--py',((e.clientY-r.top)/r.height*2-1).toFixed(3))});
ph.addEventListener('pointerleave',()=>{ph.style.setProperty('--px',0);ph.style.setProperty('--py',0)});

/* scroll reveal */
const rv=[...document.querySelectorAll('.sec h2,.sec .sub,.filters,.xp,.win,.gal,.fq-side,.fq-list,.rx,.phone-wrap,.note,.pipe,.nums>div')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
rv.forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});

/* ===== pipeline: one lead hops through the stages ===== */
const P=[
 ['New lead from Facebook','₹14.5 L','Day 1'],
 ['Called by Kavitha R.','₹14.5 L','Day 1'],
 ['Site visit done','₹14.5 L','Day 3'],
 ['Price agreed','₹14.2 L','Day 6'],
 ['Plot booked, agreement ready','₹14.2 L','Day 8'],
 ['Instalments paid in full','₹14.2 L ✓','Day 45']];

/* result shown in a stage after the lead has moved on */
const DONE=[
 ['Captured in 2 sec','Auto-assigned to Kavitha'],
 ['Called in 4 min','Interested in Plot A12'],
 ['Site visit completed','Feedback noted'],
 ['Deal at ₹14.2 L','₹30K discount approved'],
 ['Booking confirmed','Token ₹1 L received'],
 ['All 6 instalments paid','Registration done']];

/* mini preview at the bottom of every stage */
const STG=[
 `<b>${ic('radio')}Facebook Lead Form</b><span>Added to Lead Pool</span>`,
 `<b>${ic('phone')}Call · 4:12</b><div class="wave">${'<i></i>'.repeat(14)}</div>`,
 `<b>${ic('calendar')}Tomorrow 11:00</b><span>Green County · Plot A12</span>`,
 `<b>${ic('rupee')}<s>₹14.5 L</s> → ₹14.2 L</b><span>Discount approved</span>`,
 `<b>${ic('file')}Agreement ready</b><span>Token received</span>`,
 `<b>${ic('check')}6 of 6 paid</b><div class="pbar"><i></i></div>`];

document.querySelectorAll('#pipe .col').forEach((c,i)=>{
  c.insertAdjacentHTML('beforeend',
   `<div class="slot"><div class="pend">${ic('clock')}<span>Waiting for lead…</span></div><div class="dn">${ic('check')}<b>${DONE[i][0]}</b><span>${DONE[i][1]}</span></div></div><div class="stg">${STG[i]}</div>`)});

const pipe=$('#pipe'),cols=[...pipe.querySelectorAll('.col')];let pi=0;

function burst(c){
  for(let k=0;k<18;k++){
    const s=document.createElement('span');s.className='cf';
    s.style.setProperty('--dx',(Math.random()*140-70)+'px');
    s.style.setProperty('--dy',(-Math.random()*90-20)+'px');
    s.style.background=['#1366e8','#2fc21f','#2fa8ff','#ffd23f'][k%4];
    c.append(s);setTimeout(()=>s.remove(),1200)}}

function hop(){
  pipe.style.setProperty('--i',pi);
  cols.forEach((c,i)=>{c.classList.toggle('on',i===pi);c.classList.toggle('done',i<pi)});
  $('#leadMsg').textContent=P[pi][0];
  $('#leadAmt').textContent=P[pi][1];
  $('#leadDay').textContent=P[pi][2];
  if(pi===5&&!rs)burst(cols[5]);
  pi=(pi+1)%6}

seen(pipe,()=>{hop();setInterval(hop,rs?4000:1900)},.3);

/* dashboard */
seen($('#line'),()=>$('#line').classList.add('go'),.3);
seen($('.src'),()=>document.querySelectorAll('.bar i').forEach(e=>e.style.width=e.dataset.w+'%'),.3);

/* ===== roles: all 11 roles x all 24 modules ===== */
const F='full',V='view',L='limited',O='own';
const MK=[['dashboard','Dashboard'],['crm','CRM'],['leadPool','Lead Pool'],['leadAllocation','Lead Allocation'],['mediaSource','Media Source'],['projects','Projects'],['plots','Plot Management'],['bookings','Bookings'],['payments','Payments'],['ivr','IVR & Calls'],['agentPerf','Agent Performance'],['partners','Channel Partners'],['agencies','Agents & Brokers'],['finance','Finance'],['inventory','Inventory'],['vendors','Vendor Management'],['contractors','Contractor Management'],['marketing','Marketing'],['hrm','HRM'],['reports','Reports'],['automation','Automation Center'],['settings','Settings'],['documents','Documents'],['profile','Profile']];
const LBL={full:'Full access',view:'View only',limited:'Limited',own:'Own data',no_access:'No access',own_assigned:'Assigned to me',view_own:'View own',own_agents:'Own agents',view_agents:'View agents',commission:'Commission only',finance:'Finance view',project:'Project view',inventory:'Inventory view',marketing:'Marketing view',hr:'HR view',operations:'Operations only',crm_automation:'CRM workflows',project_automation:'Project workflows',marketing_automation:'Marketing workflows'};
const cls=a=>a==='full'?'f':(a==='view'||a==='view_own'||a==='view_agents')?'v':a==='no_access'?'n':'s';
const ROLES=[
{n:'Super Admin',home:'Dashboard',base:F,a:{}},
{n:'Admin',home:'Dashboard',base:F,a:{payments:L,finance:L,hrm:L,settings:'operations',documents:V}},
{n:'Sales & CRM Manager',home:'CRM',a:{dashboard:F,crm:F,leadPool:F,leadAllocation:F,mediaSource:V,projects:V,plots:V,bookings:F,payments:V,ivr:F,agentPerf:F,partners:F,agencies:F,inventory:V,marketing:V,reports:F,automation:'crm_automation',documents:V,profile:O}},
{n:'Sales Executive',home:'CRM',a:{dashboard:O,crm:'own_assigned',leadPool:'own_assigned',mediaSource:V,projects:L,plots:L,bookings:O,ivr:O,agentPerf:O,partners:V,agencies:V,reports:O,documents:V,profile:O}},
{n:'Accounts & Finance Manager',home:'Finance',a:{dashboard:'finance',projects:V,plots:V,bookings:V,payments:F,partners:'commission',agencies:'commission',finance:F,inventory:V,vendors:V,reports:'finance',documents:V,profile:O}},
{n:'Project Manager',home:'Projects',a:{dashboard:'project',crm:V,projects:F,plots:F,bookings:V,payments:V,partners:V,agencies:V,finance:V,inventory:V,vendors:F,contractors:F,reports:'project',automation:'project_automation',documents:V,profile:O}},
{n:'Inventory Manager',home:'Inventory',a:{dashboard:'inventory',projects:V,plots:V,bookings:V,inventory:F,vendors:V,contractors:V,reports:'inventory',documents:V,profile:O}},
{n:'Marketing Manager',home:'Marketing',a:{dashboard:'marketing',crm:L,leadPool:V,mediaSource:F,projects:V,plots:V,bookings:V,ivr:V,agentPerf:V,partners:V,agencies:V,marketing:F,reports:'marketing',automation:'marketing_automation',documents:V,profile:O}},
{n:'Human Resource',home:'HRM',a:{dashboard:'hr',hrm:F,reports:'hr',documents:V,profile:O}},
{n:'Channel Partner',home:'Dashboard',a:{dashboard:O,crm:O,leadPool:O,mediaSource:V,projects:V,plots:V,bookings:O,payments:'view_own',ivr:'view_own',agentPerf:'view_own',partners:O,agencies:V,finance:'view_own',marketing:V,reports:O,documents:O,profile:O}},
{n:'Agency',home:'Dashboard',a:{dashboard:O,crm:'own_agents',leadPool:'own_agents',mediaSource:V,projects:V,plots:V,bookings:O,payments:'view_own',ivr:'view_agents',agentPerf:'own_agents',partners:V,agencies:O,finance:'view_own',marketing:V,reports:O,documents:O,profile:O}}];

const RI=['shield','key','users','user','rupee','building','package','megaphone','idcard','group','briefcase'];
const MD={dashboard:['dashboard','Sales'],crm:['users','Sales'],leadPool:['inbox','Sales'],leadAllocation:['shuffle','Sales'],mediaSource:['radio','Sales'],
projects:['building','Operations'],plots:['grid','Operations'],bookings:['clipboard','Operations'],payments:['card','Operations'],ivr:['phone','Operations'],agentPerf:['trophy','Operations'],
partners:['group','Partners'],agencies:['briefcase','Partners'],
hrm:['idcard','Management'],inventory:['package','Management'],marketing:['megaphone','Management'],reports:['chart','Management'],documents:['file','Management'],
finance:['rupee','Construction'],vendors:['truck','Construction'],contractors:['wrench','Construction'],automation:['zap','Construction'],settings:['settings','Construction'],
profile:['user','Account']};
const DEPTS=['Sales','Operations','Partners','Management','Construction','Account'];
const rb=$('#roleBtns'),rp=$('#rolePanel');
const levels=r=>MK.map(([k,n])=>({k,n,a:r.a[k]||r.base||'no_access'}));
rb.innerHTML=ROLES.map((r,i)=>`<button type="button" role="tab" class="ri" data-i="${i}" aria-selected="${i===3}"><span class="ri-ic">${ic(RI[i])}</span><b>${r.n}</b><em>${levels(r).filter(x=>x.a!=='no_access').length}/24</em></button>`).join('');
rb.addEventListener('click',e=>{const b=e.target.closest('.ri');if(!b)return;
  [...rb.children].forEach(x=>x.setAttribute('aria-selected',x===b));show(ROLES[+b.dataset.i],true);
  if(innerWidth<=900)rb.scrollTo({left:b.offsetLeft-rb.clientWidth/2+b.offsetWidth/2,behavior:rs?'auto':'smooth'})});
function show(r,anim){
  const lv=levels(r),open=lv.filter(x=>x.a!=='no_access').length,cnt={f:0,s:0,v:0,n:0};
  lv.forEach(x=>cnt[cls(x.a)]++);
  const groups=DEPTS.map(d=>{
    const items=lv.filter(x=>MD[x.k][1]===d).sort((a,b)=>(a.a==='no_access')-(b.a==='no_access'));
    return items.length?`<div class="rg"><h4>${d}</h4><div class="rg-g">${items.map((x,k)=>{
      const c=cls(x.a);
      return `<div class="mt lv-${c}" style="--k:${k}"><span class="mt-ic">${ic(c==='n'?'lock':MD[x.k][0])}</span><span><b>${x.n}</b><small>${LBL[x.a]}</small></span></div>`}).join('')}</div></div>`:''}).join('');
  rp.innerHTML=`<div class="rx-head">
    <div class="ring" style="--d:${(open/MK.length*264).toFixed(1)}"><svg viewBox="0 0 100 100"><defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1366e8"/><stop offset="1" stop-color="#2fc21f"/></linearGradient></defs><circle class="bg" cx="50" cy="50" r="42"/><circle class="fg" cx="50" cy="50" r="42"/></svg><div><strong>${open}</strong><small>of ${MK.length}</small></div></div>
    <div class="rx-t"><h3>${r.n}</h3><span>Opens on <b>${r.home}</b></span></div>
    <div class="rx-st"><div class="s-f"><strong>${cnt.f}</strong><small>Full</small></div><div class="s-s"><strong>${cnt.s}</strong><small>Scoped</small></div><div class="s-v"><strong>${cnt.v}</strong><small>View</small></div><div class="s-n"><strong>${cnt.n}</strong><small>Locked</small></div></div>
  </div><div class="rx-body">${groups}</div>`;
  if(anim&&!rs){rp.classList.remove('swap');void rp.offsetWidth;rp.classList.add('swap')}}
show(ROLES[3]);

/* ===== faq: topic tabs + animated accordion ===== */
const FQ=[
['Setup','upload','Can we import our existing leads and plots?','Yes. Excel import is built in, so your current sheets move in without retyping. Projects, bookings, vendors, contractors, employees, campaigns, call logs and agent data can all be imported.'],
['Setup','radio','Can leads from Facebook come in automatically?','Yes. A Facebook lead-form webhook adds new leads to your CRM the moment they are filled, and they wait in the Lead Pool until someone picks them up.'],
['Setup','phone','Does it work on phones?','Yes. Agents get phone-friendly bottom navigation, and a clear message appears when the network drops, so nobody loses work unknowingly.'],
['Features','truck','Does it cover construction as well as sales?','Yes. Finance, vendors, contractors and inventory sit beside sales, plots and bookings.'],
['Features','card','Can we take payments online?','Yes. Generate receipts and take payments online from the same screen, with every instalment tracked.'],
['Features','group','Can agents and channel partners use it?','Yes. Channel Partner and Agency are their own roles. They see only their own leads, bookings and payments, and their commissions are tracked.'],
['Access & security','key','Can we change what each role can open?','Yes. Super Admin edits roles and permissions from Settings, down to module, button, form and table level.'],
['Access & security','clock','Are idle sessions logged out?','Yes. Sessions time out automatically and password reset is built in.']];
const fl=$('#faqList'),ft=$('#faqTabs');let fcat='All';
['All','Setup','Features','Access & security'].forEach((c,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('role','tab');
  b.textContent=c+' · '+(c==='All'?FQ.length:FQ.filter(x=>x[0]===c).length);b.setAttribute('aria-selected',i===0);
  b.onclick=()=>{[...ft.children].forEach(x=>x.setAttribute('aria-selected',x===b));fcat=c;buildFaq()};ft.append(b)});
function buildFaq(){
  const items=FQ.filter(x=>fcat==='All'||x[0]===fcat);
  fl.innerHTML=items.map((x,k)=>`<div class="fq-i" style="--k:${k}"><button type="button" class="fq-q" aria-expanded="false" aria-controls="fa${k}"><span class="fq-ic">${ic(x[1])}</span><span><b>${x[2]}</b><small>${x[0]}</small></span><span class="fq-pm" aria-hidden="true"></span></button><div class="fq-a" id="fa${k}" role="region"><div><p>${x[3]}</p></div></div></div>`).join('');
  setFaq(fl.firstElementChild,true)}
function setFaq(it,on){it.classList.toggle('open',on);it.querySelector('.fq-q').setAttribute('aria-expanded',on)}
fl.addEventListener('click',e=>{const q=e.target.closest('.fq-q');if(!q)return;
  const it=q.parentElement,on=!it.classList.contains('open');
  [...fl.children].forEach(x=>setFaq(x,false));setFaq(it,on)});
buildFaq();

$('#offBtn').onclick=e=>{const o=$('#screen').classList.toggle('offline');e.target.textContent=o?'Back online':'Try offline mode'};
document.querySelectorAll('[data-to]').forEach(el=>seen(el,()=>{const to=+el.dataset.to,t0=performance.now();
  (function f(t){const k=rs?1:Math.min((t-t0)/1600,1);el.textContent=el.dataset.pre+Math.round(to*(1-Math.pow(1-k,3))).toLocaleString('en-IN')+el.dataset.suf;if(k<1)requestAnimationFrame(f)})(t0)},.6));

/* ===== demo popup form -> sends the details to your email ===== */
/* ===== demo popup form -> Web3Forms (works from file:// too) ===== */
(function(){
  const ACCESS_KEY='a28c3dc9-4024-4347-af69-51f2eb075943';
  const ENDPOINT='https://api.web3forms.com/submit';

  const mdl=document.getElementById('mdl'),
        form=document.getElementById('demoForm'),
        msg=document.getElementById('demoMsg'),
        submitBtn=form?form.querySelector('button[type="submit"]'):null;
  if(!mdl||!form)return;
  let last=null,busy=false;

  function say(t,type){msg.textContent=t;msg.className='msg '+(type||'')}
  function bad(el){el.classList.remove('bad');void el.offsetWidth;el.classList.add('bad');el.focus()}

  function openM(){
    last=document.activeElement;
    nav.classList.remove('open');burger.setAttribute('aria-expanded',false);
    say('','');
    mdl.classList.add('open');
    document.body.classList.add('modal-open');
    setTimeout(()=>form.elements.n.focus(),350);
  }
  function closeM(){
    mdl.classList.remove('open');
    document.body.classList.remove('modal-open');
    if(last&&last.focus)last.focus();
  }

  document.querySelectorAll('a[href="#demo"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openM()}));
  mdl.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeM));
  addEventListener('keydown',e=>{if(e.key==='Escape'&&mdl.classList.contains('open'))closeM()});

  function setBusy(on){
    busy=on;
    if(!submitBtn)return;
    submitBtn.disabled=on;
    submitBtn.style.opacity=on?'.7':'';
    submitBtn.innerHTML=on?'Sending…':'Submit <span aria-hidden="true">→</span>';
  }

  form.addEventListener('submit',async e=>{
    e.preventDefault();
    if(busy)return;
    const f=form.elements,
      name=f.n.value.trim(),email=f.e.value.trim(),phone=f.p.value.trim(),area=f.a.value.trim();
    form.querySelectorAll('.bad').forEach(x=>x.classList.remove('bad'));

    if(!name){bad(f.n);say('Please enter your name.','err');return}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){bad(f.e);say('Please enter a valid work email.','err');return}
    if(!/^[0-9+ ]{10,14}$/.test(phone)){bad(f.p);say('Please enter a valid WhatsApp number (10 to 14 digits).','err');return}
    if(!f.i.value){bad(f.i);say('Please select your industry type.','err');return}
    if(!f.t.value){bad(f.t);say('Please select your team size.','err');return}
    if(!area){bad(f.a);say('Please enter your area.','err');return}
    if(!f.k.checked){say('Please accept the consent to continue.','err');return}

    const payload={
      access_key:ACCESS_KEY,
      subject:'New MegRevo demo request from '+name,
      from_name:'MegRevo Website',
      replyto:email,
      'Name':name,
      'Email':email,
      'WhatsApp Number':phone,
      'Company':f.c.value.trim()||'-',
      'Industry':f.i.value,
      'Sales & Marketing Team Size':f.t.value,
      'Area / City':area,
      'Consent given':'Yes',
      'Submitted at':new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'})+' (IST)'
    };

    setBusy(true);
    say('Sending your request…','');
    try{
      const res=await fetch(ENDPOINT,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify(payload)
      });
      const out=await res.json().catch(()=>({}));
      if(!res.ok||out.success!==true)throw new Error(out.message||'Request failed');

      say('Thank you, '+name+'. We have received your request and will contact you on '+phone+' within one working day.','ok');
      form.reset();f.k.checked=true;
      setTimeout(closeM,3500);
    }catch(err){
      console.error('Demo request failed',err);
      say('Error: '+err.message,'err');
    }finally{
      setBusy(false);
    }
  });
})();
