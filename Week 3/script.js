
document.getElementById('text-input').addEventListener('input', function() {
    const text = this.value;
    document.getElementById('char-count').textContent = text.length;
    document.getElementById('word-count').textContent = text.match(/\b\w+\b/g)?.length || 0;
    document.getElementById('space-count').textContent = (text.match(/\s/g) || []).length;
    document.getElementById('sentence-count').textContent = text.split(/[.?!]+/).filter(Boolean).length;
    document.getElementById('paragraph-count').textContent = text.split(/\n+/).filter(Boolean).length;
    document.getElementById('letter-count').textContent = (text.match(/[a-zA-Z]/g) || []).length;
    document.getElementById('digit-count').textContent = (text.match(/\d/g) || []).length;
    document.getElementById('special-char-count').textContent = (text.match(/[\W_]/g) || []).length - (text.match(/\s/g) || []).length;
});
