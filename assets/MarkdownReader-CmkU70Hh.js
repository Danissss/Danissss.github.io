import{a as e,n as t,o as n,r,t as i}from"./index-DLmcAptz.js";var a=n(e()),o=r(),s=`markdown-reader:draft`,c=`# Markdown Reader

Write on the left, read on the right. Everything stays in your browser.

## Text

You can write **bold**, *italic*, ~~strikethrough~~, and \`inline code\`.
Links look like [this one](https://commonmark.org/help/).

> Blockquotes are handy for notes and callouts.

## Lists

- Unordered item
- Another item
  - Nested item

1. First step
2. Second step

- [x] Task lists work
- [ ] So do unchecked tasks

## Code

\`\`\`js
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Tables

| Feature   | Supported |
| --------- | :-------: |
| Tables    |    Yes    |
| Footnotes |  Yes[^1]  |

---

[^1]: GitHub Flavored Markdown extras are enabled.
`,l=[{id:`split`,label:`Split`},{id:`editor`,label:`Editor`},{id:`preview`,label:`Preview`}];function u(){try{return window.localStorage.getItem(s)}catch{return null}}function d(e){try{window.localStorage.setItem(s,e)}catch{}}function f(e){let t=e.trim()?e.trim().split(/\s+/).length:0;return{words:t,characters:e.length,lines:e?e.split(`
`).length:0,minutes:Math.max(1,Math.round(t/230))}}function p(e){return e.trim().replace(/\.(md|markdown|html?)$/i,``).replace(/[\\/:*?"<>|]+/g,`-`)||`document`}function m(e,t,n){let r=new Blob([e],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,a.click(),URL.revokeObjectURL(i)}function h(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function g({node:e,href:t=``,...n}){if(t.startsWith(`#`)){let e=e=>{e.preventDefault(),document.getElementById(decodeURIComponent(t.slice(1)))?.scrollIntoView({behavior:`smooth`,block:`center`})};return(0,o.jsx)(`a`,{...n,href:t,onClick:e})}return(0,o.jsx)(`a`,{...n,href:t,target:`_blank`,rel:`noopener noreferrer`})}var _={a:g};function v(){let[e,n]=(0,a.useState)(()=>u()??c),[r,s]=(0,a.useState)(`document`),[g,v]=(0,a.useState)(`split`),[y,b]=(0,a.useState)(!0),[x,S]=(0,a.useState)(!1),[C,w]=(0,a.useState)(!1),T=(0,a.useRef)(null),E=(0,a.useRef)(null),D=(0,a.useRef)(null),O=(0,a.useRef)(null);(0,a.useEffect)(()=>{document.title=`Markdown Reader — Xuan Cao`},[]),(0,a.useEffect)(()=>{let t=window.setTimeout(()=>d(e),300);return()=>window.clearTimeout(t)},[e]),(0,a.useEffect)(()=>{let e=()=>{document.fullscreenElement||w(!1)};return document.addEventListener(`fullscreenchange`,e),()=>{document.removeEventListener(`fullscreenchange`,e),document.fullscreenElement===T.current&&document.exitFullscreen().catch(()=>{})}},[]),(0,a.useEffect)(()=>{if(!C)return;let e=e=>{e.key===`Escape`&&!document.fullscreenElement&&w(!1)},t=document.body.style.overflow;return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,e),()=>{document.body.style.overflow=t,window.removeEventListener(`keydown`,e)}},[C]);let k=f(e),A=e=>{n(e),S(!1)};return(0,o.jsx)(`div`,{className:`markdown-app`,children:(0,o.jsxs)(`div`,{className:`container container--wide`,children:[(0,o.jsxs)(`header`,{className:`markdown-app__header fade-in`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`section-label`,children:`Interactive tool`}),(0,o.jsx)(`h1`,{className:`page-title`,children:`Markdown Reader`}),(0,o.jsx)(`p`,{className:`page-subtitle`,children:`Write or open Markdown, see it rendered live, and download the result as a .md or .html file. Drafts are saved in this browser. Nothing you write or open is uploaded or stored on a server.`})]}),(0,o.jsxs)(`label`,{className:`markdown-app__filename`,children:[(0,o.jsx)(`span`,{children:`File name`}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`input`,{type:`text`,value:r,onChange:e=>s(e.target.value),spellCheck:`false`}),(0,o.jsx)(`span`,{"aria-hidden":`true`,children:`.md`})]})]})]}),(0,o.jsxs)(`div`,{ref:T,className:`markdown-app__studio${C?` is-fullscreen`:``}`,children:[(0,o.jsxs)(`section`,{className:`markdown-app__toolbar fade-in fade-in--delay-1`,children:[(0,o.jsx)(`div`,{className:`markdown-app__segmented`,"aria-label":`Layout`,children:l.map(e=>(0,o.jsx)(`button`,{type:`button`,"aria-pressed":g===e.id,className:g===e.id?`is-active`:``,onClick:()=>v(e.id),children:e.label},e.id))}),(0,o.jsxs)(`label`,{className:`markdown-app__toggle`,children:[(0,o.jsx)(`input`,{type:`checkbox`,checked:y,onChange:e=>b(e.target.checked),disabled:g!==`split`}),(0,o.jsx)(`span`,{children:`Sync scroll`})]}),(0,o.jsxs)(`div`,{className:`markdown-app__actions`,children:[(0,o.jsx)(`button`,{type:`button`,onClick:()=>O.current?.click(),children:`Open file`}),(0,o.jsx)(`input`,{ref:O,type:`file`,accept:`.md,.markdown,.txt,text/markdown,text/plain`,onChange:async e=>{let t=e.target.files?.[0];e.target.value=``,t&&(A(await t.text()),s(p(t.name)))},hidden:!0}),(0,o.jsx)(`button`,{type:`button`,onClick:()=>{(!e||e===c||window.confirm(`Replace your text with the sample document?`))&&A(c)},children:`Sample`}),(0,o.jsx)(`button`,{type:`button`,onClick:async()=>{try{await navigator.clipboard.writeText(e),S(!0),window.setTimeout(()=>S(!1),1600)}catch{S(!1)}},disabled:!e,children:x?`Copied`:`Copy`}),(0,o.jsx)(`button`,{type:`button`,onClick:()=>{(!e||window.confirm(`Clear the editor? This can't be undone.`))&&(A(``),E.current?.focus())},disabled:!e,children:`Clear`}),(0,o.jsx)(`button`,{type:`button`,onClick:()=>{let e=D.current;e&&m(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${h(p(r))}</title>
<style>
body { max-width: 720px; margin: 40px auto; padding: 0 16px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.7; color: #1a1a1a; }
pre, code { font-family: "JetBrains Mono", Consolas, monospace; background: #f0f0f0; border-radius: 3px; }
code { padding: 2px 5px; font-size: 0.9em; }
pre { padding: 16px; overflow-x: auto; }
pre code { padding: 0; }
blockquote { margin: 0; padding-left: 16px; border-left: 2px solid #e4e4e4; color: #5c5c5c; }
table { border-collapse: collapse; }
th, td { border: 1px solid #e4e4e4; padding: 6px 12px; }
img { max-width: 100%; }
</style>
</head>
<body>
${e.innerHTML}
</body>
</html>
`,`${p(r)}.html`,`text/html;charset=utf-8`)},disabled:!e||g===`editor`,title:g===`editor`?`Switch to Split or Preview to export HTML`:void 0,children:`Download HTML`}),(0,o.jsx)(`button`,{type:`button`,className:`markdown-app__primary`,onClick:()=>{m(e,`${p(r)}.md`,`text/markdown;charset=utf-8`)},disabled:!e,children:`Download .md`}),(0,o.jsxs)(`button`,{type:`button`,className:`markdown-app__fullscreen`,onClick:()=>{if(C){w(!1),document.fullscreenElement&&document.exitFullscreen().catch(()=>{});return}w(!0);let e=T.current;e?.requestFullscreen&&e.requestFullscreen().catch(()=>{})},"aria-pressed":C,title:C?`Exit full screen (Esc)`:`Full screen`,children:[(0,o.jsx)(`span`,{"aria-hidden":`true`,children:C?`⤡`:`⤢`}),C?`Exit full screen`:`Full screen`]})]})]}),(0,o.jsxs)(`section`,{className:`markdown-app__workspace markdown-app__workspace--${g} fade-in fade-in--delay-2`,children:[g!==`preview`&&(0,o.jsxs)(`div`,{className:`markdown-app__panel`,children:[(0,o.jsxs)(`div`,{className:`markdown-app__panel-header`,children:[(0,o.jsx)(`h2`,{children:`Markdown`}),(0,o.jsxs)(`p`,{children:[k.lines.toLocaleString(),` lines`]})]}),(0,o.jsx)(`textarea`,{ref:E,value:e,onChange:e=>A(e.target.value),onScroll:()=>{let e=E.current,t=D.current;if(!y||g!==`split`||!e||!t)return;let n=e.scrollHeight-e.clientHeight,r=t.scrollHeight-t.clientHeight;n<=0||(t.scrollTop=e.scrollTop/n*r)},spellCheck:`true`,placeholder:`Start writing Markdown…`,"aria-label":`Markdown editor`})]}),g!==`editor`&&(0,o.jsxs)(`div`,{className:`markdown-app__panel`,children:[(0,o.jsxs)(`div`,{className:`markdown-app__panel-header`,children:[(0,o.jsx)(`h2`,{children:`Preview`}),(0,o.jsxs)(`p`,{children:[k.minutes,` min read`]})]}),(0,o.jsx)(`div`,{ref:D,className:`markdown-app__preview`,"aria-label":`Rendered Markdown preview`,children:e.trim()?(0,o.jsx)(t,{remarkPlugins:[i],components:_,children:e}):(0,o.jsx)(`p`,{className:`markdown-app__empty`,children:`Nothing to preview yet.`})})]})]})]}),(0,o.jsxs)(`section`,{className:`markdown-app__metrics fade-in fade-in--delay-3`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{children:`Words`}),(0,o.jsx)(`strong`,{children:k.words.toLocaleString()})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{children:`Characters`}),(0,o.jsx)(`strong`,{children:k.characters.toLocaleString()})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{children:`Lines`}),(0,o.jsx)(`strong`,{children:k.lines.toLocaleString()})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{children:`Reading time`}),(0,o.jsx)(`strong`,{children:k.words?`${k.minutes} min`:`—`})]})]})]})})}export{v as default};