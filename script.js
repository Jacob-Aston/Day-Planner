const $currentDay = $("#currentDay");
const $container = $("div");
const $timeBlocks = $("div.container > div");
var now = dayjs();
var currentHour = dayjs().hour();
console.log(currentHour);

const hours = [
  {
    hour: "9am",
    description: "",
    time: "9",
  },
  {
    hour: "10am",
    description: "",
    time: "10",
  },
  {
    hour: "11am",
    description: "",
    time: "11",
  },
  {
    hour: "12am",
    description: "",
    time: "12",
  },
  {
    hour: "1pm",
    description: "",
    time: "13",
  },
  {
    hour: "2pm",
    description: "",
    time: "14",
  },
  {
    hour: "3pm",
    description: "",
    time: "15",
  },
  {
    hour: "4pm",
    description: "",
    time: "16",
  },
  {
    hour: "5pm",
    description: "",
    time: "17",
  },
];

//    , "10", "11", "12", "1", "2", "3", "4", "5"];

$currentDay.text(now);

const hourCheck = (i) => {
  var hour = hours[i].time;
  console.log(+hour);
  if (hour == currentHour) {
    return "present";
  }
  if (hour > currentHour) {
    return "future";
  }
  if (hour < currentHour) {
    return "past";
  }
};

const loadTimeBlocks = () => {
  for (i = 0; i < hours.length; i++) {
    var timeBlock = $(
      '<div class ="time-block row">' +
        '<div class="hour col-2">' +
        hours[i].hour +
        "</div>" +
        '<input class="description col-8 ' +
        hourCheck(i) +
        '">' +
        hours[i].description +
        "</input>" +
        '<btn class="saveBtn btn col-2">save</btn>' +
        "</div>"
    );
    $container.append(timeBlock);
  }
};

loadTimeBlocks();
