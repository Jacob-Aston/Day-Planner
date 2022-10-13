const $currentDay = $("#currentDay");
const $container = $("div");
const $timeBlocks = $("div.container > div");
var now = dayjs();
const hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

$currentDay.text(now);

const loadTimeBlocks = () => {
  for (i = 0; i < hours.length; i++) {
    var timeBlock = $('<div class ="time-block row">' + '<div class="hour col-2">' + hours[i] + '</div>' + '<input class="description col-8"></input>' + '<btn class="saveBtn btn col-2">click</btn>' + '</div>');
    $container.append(timeBlock);
}
};

loadTimeBlocks();
