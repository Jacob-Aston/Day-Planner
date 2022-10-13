const $currentDay = $('#currentDay');
const $container = $('div')
var now = dayjs();
const hours = ['9','10','11','12','1','2','3','4','5'];



$currentDay.text(now);

const loadTimeBlocks = () => {
    for (i = 0; i < hours.length; i++) {
    var timeBlock = $('<div class ="time-block row">'+ hours[i] + '</div>')
    $container.append(timeBlock);
    }
}

const fillTimeBlocks = () => {
    const $timeBlocks = $("div.container > div")
    $timeBlocks.array.forEach(element => {
        var timeFill = $('<div class="hour"></div>')
        element.append(timeFill)
    });
}



loadTimeBlocks()
fillTimeBlocks()