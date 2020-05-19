$('.scroll').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap elemen ybs
    var elemen = $(tujuan);

    $('html, body').animate({
        scrollTop: elemen.offset().top - 56
    },  1000, 'easeInOutQuad');

    e.preventDefault();
})