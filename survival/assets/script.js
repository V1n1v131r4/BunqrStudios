<script id="__script_js__">
function filterTopics(){
const q=(document.querySelector('#q')?.value||'').toLowerCase();
document.querySelectorAll('[data-topic]').forEach(el=>{
const txt=el.getAttribute('data-topic');
el.style.display = (!q || txt.includes(q))? 'block':'none';
});
}
</script>
