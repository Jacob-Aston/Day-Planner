const $currentDay = $('#currentDay');
const $container = $('div')
var now = dayjs();
const hours = ['9','10','11','12','1','2','3','4','5'];



$currentDay.text(now);

const loadTimeBlocks = () => {
    var timeBlock = "<div class ='time-block row'>howdy2</div>"

    hours.forEach(function(){
        $container.append(timeBlock);

    })
}

loadTimeBlocks()
