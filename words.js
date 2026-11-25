'use strict';
/* words.js – NỘI DUNG bài học: MÀU SẮC (Colours)
   Từ vựng: purple, red, grey, pink, green
   Mẫu câu: What colour is it? – It’s + colour. / What colour are they? – They’re + colour.
   Muốn thêm màu: thêm 1 dòng vào COLORS. Muốn thêm đồ vật: thêm vào OBJ. File index.html không cần sửa. */
const svg=b=>`<svg class="pic" viewBox="0 0 120 120" role="img" aria-hidden="true">${b}</svg>`;
const COLORS=[
 {w:'purple',vi:'màu tím',c:'#8e44ad'},
 {w:'red',vi:'màu đỏ',c:'#e0272f'},
 {w:'grey',vi:'màu xám',c:'#9aa3ab'},
 {w:'pink',vi:'màu hồng',c:'#ff8fc0'},
 {w:'green',vi:'màu xanh lá',c:'#2fa84f'}
];
/* Mẫu câu: it = 1 vật, they = nhiều vật */
const PATTERNS={
 it:{q:'What colour is it?',a:c=>`It’s ${c}.`},
 they:{q:'What colour are they?',a:c=>`They’re ${c}.`}
};
/* Đồ vật được tô màu (vẽ trong khung 120×120) */
const ST='rgba(0,0,0,.28)',HL='rgba(255,255,255,.55)';
const OBJ=[
 {n:'ball',f:c=>`<circle cx="60" cy="62" r="46" fill="${c}" stroke="${ST}" stroke-width="3"/><path d="M28 46Q40 26 64 24" stroke="${HL}" stroke-width="8" fill="none" stroke-linecap="round"/>`},
 {n:'balloon',f:c=>`<ellipse cx="60" cy="48" rx="36" ry="44" fill="${c}" stroke="${ST}" stroke-width="3"/><path d="M53 90L60 99L67 90Z" fill="${c}" stroke="${ST}" stroke-width="2"/><path d="M60 99Q48 108 60 116" stroke="#777" stroke-width="3" fill="none"/><path d="M36 38Q40 24 54 18" stroke="${HL}" stroke-width="8" fill="none" stroke-linecap="round"/>`},
 {n:'bag',f:c=>`<path d="M42 42Q42 14 60 14Q78 14 78 42" stroke="${ST}" stroke-width="7" fill="none"/><rect x="20" y="38" width="80" height="72" rx="14" fill="${c}" stroke="${ST}" stroke-width="3"/><rect x="20" y="58" width="80" height="9" fill="${HL}"/>`},
 {n:'kite',f:c=>`<path d="M60 6L100 48L60 94L20 48Z" fill="${c}" stroke="${ST}" stroke-width="3" stroke-linejoin="round"/><path d="M60 6V94M20 48H100" stroke="${HL}" stroke-width="3"/><path d="M60 94Q46 104 58 110Q72 114 62 120" stroke="#777" stroke-width="3" fill="none"/>`}
];
/* Hình: num='it' → 1 vật, num='they' → 2 vật */
const pic=(o,c,num)=>num=='it'?svg(o.f(c.c)):svg(`<g transform="translate(0,16) scale(.5)">${o.f(c.c)}</g><g transform="translate(60,44) scale(.5)">${o.f(c.c)}</g>`);
const sent=(num,c)=>PATTERNS[num].a(c.w);
