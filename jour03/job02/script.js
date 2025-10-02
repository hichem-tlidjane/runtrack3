// Dans cet exercice, 6 images s’assemblent pour former un arc-en-ciel, il vous faudra les
// mélanger puis les remettre en ordre.

// Le but de ce job sera dans un premier temps de créer une balise <button>. Cette balise
// servira à mélanger l’ensemble des images de l’arc-en-ciel.
// Par la suite, vous devrez faire en sorte qu’il soit possible de remettre les images dans le
// bon ordre, en utilisant un ou plusieurs conteneurs.
// Une fois que les 6 images sont ordonnées, un message s’affiche en dessous :
// Si l'arc-en-ciel est bien reconstitué, le message “Vous avez gagné” s’affiche en vert.
// Sinon, le message “Vous avez perdu” s’affiche en rouge.

$(function() {
    // Mélange les images
    $('#shuffleButton').click(function() {
        let images = $('#rainbowContainer img').toArray();
        images = images.sort(() => Math.random() - 0.5);
        $('#rainbowContainer').empty().append(images);
        $('#resultMessage').text('');
    });

    // Drag & drop avec jQuery UI
    $('#rainbowContainer').sortable({
        update: function() {
            checkOrder();
        }
    });

    function checkOrder() {
        let win = true;
        $('#rainbowContainer img').each(function(i) {
            if ($(this).data('order') != i + 1) win = false;
        });
        if (win) {
            $('#resultMessage').text('Vous avez gagné').css('color', 'green');
        } else {
            $('#resultMessage').text('Vous avez perdu').css('color', 'red');
        }
    }
});














