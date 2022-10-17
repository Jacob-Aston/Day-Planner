const $currentDay = $("#currentDay");
const $container = $("div.container");
const $timeBlocks = $(".time-block");
const nowDisplay = dayjs().format("dddd, MMM DD YYYY");
const currentHour = dayjs().hour();

const hoursApi = {
  getHours: () => {
    const hours = window.localStorage.getItem('hours');
    return JSON.parse(hours);
  },
  setHours: (hours) => {
    window.localStorage.setItem('hours', JSON.stringify(hours))
  }
}

let hours = hoursApi.getHours()
if (!hours) {
  const hoursInDay = [9,10,11,12,13,14,15,16,17];
  const newHours = hoursInDay.map((hour) => {
    const baseTwelveHour = hour % 12;
    return {
      id: hour,
      label: `${baseTwelveHour === 0 ? 12 : baseTwelveHour}${ hour < 12 ? 'am' : 'pm'}`,
      description: '',
      time: hour
    }
  })
  hoursApi.setHours(newHours)
  hours = newHours
}

$currentDay.text(nowDisplay);

const hourCheck = (index) => {
  const {time} = hours[index];
  if (time == currentHour) {
    return "present";
  }
  if (time > currentHour) {
    return "future";
  }
  if (time < currentHour) {
    return "past";
  }
};

const save = (event) => {
  event.preventDefault();
  // The id of the form is the id of the hour object it's related to
  const hourId = parseInt(event.target.id);
  const newDescription = $(`#${hourId} textarea.description`).val();

  // Copy our array
  const updatedHours = hours.slice();
  const hourToUpdateIndex = updatedHours.findIndex(hour => hour.id === hourId);
  updatedHours[hourToUpdateIndex].description = newDescription;

  hoursApi.setHours(updatedHours);
}

const loadTimeBlocks = () => {
  hours.forEach(({label, description, id}, index) => {
    const timeBlock = $(`
      <div class="time-block row">
        <div class="hour col-2">
          ${label}
        </div>
        <form class="row col-10" id="${id}">
          <textarea class="description col-9 ${hourCheck(index)}" name="description" value="${description}" />
          <button type="submit" class="saveBtn btn col-3">save</button>
        </form>
      </div>
    `)
    $container.append(timeBlock);
    $(`#${id}`).submit(save)
  })
};

loadTimeBlocks();
