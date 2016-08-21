document.addEventListener('DOMContentLoaded', function() {
    var notes;

    notes = document.getElementById('with-notes');
    if (notes !== null) {
        notes.addEventListener('change', function(event) {
            var notesCheckbox;

            notesCheckbox = event.target;
            if (notesCheckbox.checked) {
                document.body.classList.remove('notes-hidden');
            } else {
                document.body.classList.add('notes-hidden');
            }
        }, false);
    }

    Reveal.initialize({
        history: true,
        slideNumber: true,
        width: 1280,
        height: 800,
        margin: 0.1,
        dependencies: [
            {
                src: 'plugin/print-pdf/print-pdf.js', async: true,
                condition: function() {
                    return location.href.indexOf('print-pdf') > -1;
                }
            },
        ],
    });
});
