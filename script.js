const $currentDay = $("#currentDay");
const $container = $("div");
const $timeBlocks = $("div.container > div");
var now = dayjs();
const hours = [{
    hour : "9am",
    description : "",
    time : ""
}, {
    hour : "10am",
    description : "",
    time : ""
}, {
    hour : "11am",
    description : "",
    time : ""
}, {
    hour : "12am",
    description : "",
    time : ""
}, {
    hour : "1pm",
    description : "",
    time : ""
}, {
    hour : "2pm",
    description : "",
    time : ""
}, {
    hour : "3pm",
    description : "",
    time : ""
}, {
    hour : "4pm",
    description : "",
    time : ""
}, {
    hour : "5pm",
    description : "",
    time : ""
}]

    
//    , "10", "11", "12", "1", "2", "3", "4", "5"];

$currentDay.text(now);

const loadTimeBlocks = () => {
  for (i = 0; i < hours.length; i++) {
    var timeBlock = $('<div class ="time-block row">' + '<div class="hour col-2">' + hours[i].hour + '</div>' + '<input class="description col-8">' + hours[i].description + '</input>' + '<btn class="saveBtn btn col-2">click</btn>' + '</div>');
    $container.append(timeBlock);
}
};

loadTimeBlocks();
