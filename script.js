const $currentDay = $("#currentDay");
const $container = $("div.container");
const $timeBlocks = $(".time-block");
const nowDisplay = dayjs().format("dddd, MMM DD YYYY");
const currentHour = dayjs().hour();

//Function to get and set data in local storage.
const hoursApi = {
  getHours: () => {
    const hours = window.localStorage.getItem('hours');
    return JSON.parse(hours);
  },
  setHours: (hours) => {
    window.localStorage.setItem('hours', JSON.stringify(hours))
  }
}

//Sets hours array with data from local storage
let hours = hoursApi.getHours()

//If there isnt a data object in local storage this function will generate one mapping the value of each hour onto the object.
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

  //Saves new object to local storage and updates hours array.
  hoursApi.setHours(newHours)
  hours = newHours
}

//displays date in header.
$currentDay.text(nowDisplay);

//checks the time value of the hours object to set class of text area to past, present, or future. 
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

//When save is clicked this will get the description using the hours obect id.
//Then save the description by finding the object index using id and changing description to the value of the new description.
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

//Genereates the time block HTML using the hours array and hour check function.
const loadTimeBlocks = () => {
  //deconstructed hours array instead of declaring label, description, and id as variables.
  hours.forEach(({label, description, id}, index) => {
    const timeBlock = $(`
      <div class="time-block row">
        <div class="hour col-2">
          ${label}
        </div>
        <form class="row col-10" id="${id}">
          <textarea class="description col-9 ${hourCheck(index)}" name="description" value="${description}">${description}</textarea>
          <button type="submit" class="saveBtn btn col-3">save</button>
        </form>
      </div>
    `)
    $container.append(timeBlock);
    $(`#${id}`).submit(save)
  })
};

loadTimeBlocks();
