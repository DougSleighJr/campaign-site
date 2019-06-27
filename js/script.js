//Index.html cycling photo of children and family
function cycle(img) {
    $('.main-container').ready(function() {
    var img = $('.kids-portrait');
    img.delay(4000)
    .queue(function(next) {img.attr('src', 'images/family.jpg'); next();} )
    .delay(4000)
    .queue(function(next) {img.attr('src', 'images/img_8954v2.jpg'); next();} )
});
}
setInterval(() => {
    cycle();
}, 1000);

//supportLeslie.html helping buttons
$('.col-images + p').hide();

$('.col-images').on('click', function() {
    $(this).next().slideDown();
});




    
