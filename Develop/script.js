
var day = dayjs();
var saveBtn = $('#saveBtn');
var words = $('.description');

var savedEv = localStorage.getItem('event');


$('.saveBtn').on('click', function(){
  var id = $(this).parent().attr('id');
  var description = $(this).siblings('.description').val();
  localStorage.setItem(id, description);
});
for (var i =7; i <= 21; i++){
  var id = 'hour-' + i;
  var savedEv = localStorage.getItem(id);
  if (savedEv !== null) {
    $('#' + id + ' .description').val(savedEv);
  }
}

var currentDay = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(currentDay);
var currentTime = dayjs().hour();
updateBlockClasses(currentTime);

function updateBlockClasses(currentTime) {
  $('.time-block').each(function() {
    var hour = parseInt($(this).attr('id').split('-')[1]);
    if (hour < currentTime) {
      $(this).removeClass('present future').addClass('past');
    } else if (hour === currentTime) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
}
