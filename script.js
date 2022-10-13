const $currentDay = $('#currentDay');
const $container = $('div')
$currentDay.text(now);

var now = dayjs();

const loadTimeBlocks = () => {
    var timeBlock = "<div class ='time-block'>howdy2</div>"
    $container.append("<div>howdy</div>");
    $container.append(timeBlock);

}

loadTimeBlocks()
