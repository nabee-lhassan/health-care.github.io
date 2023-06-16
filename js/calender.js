let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



// Pop up for add new event start

// function openModal(date) {
//   clicked = date;

//   const eventForDay = events.find(e => e.date === clicked);

//   if (eventForDay) {
//     document.getElementById('eventText').innerText = eventForDay.title;
//     deleteEventModal.style.display = 'block';
//   } else {
//     newEventModal.style.display = 'block';
//   }

//   backDrop.style.display = 'block';
// }


// Pop up for add new event end











function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = events.find(e => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }

      daySquare.addEventListener('click', () => openModal(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);    
  }
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}

initButtons();
load();


console.log('calender.........')



// this is for appointment date start

let sidebar = document.querySelector('.colum-for-position')

let sidebar2 = document.querySelector(".colum-for-position2")
let appoint_date = document.querySelector("#calendar").children[6]
appoint_date.classList.add("appoint_date")
appoint_date.addEventListener("click",function(){
  
  
  if (sidebar2.classList.contains("calender-side-bar-inactive")) {

        sidebar2.classList.add("calender-side-bar-active")
        sidebar2.classList.remove("calender-side-bar-inactive")
        sidebar.classList.add("calender-side-bar-inactive")
    
    
    
      } else {
        sidebar2.classList.remove("calender-side-bar-active")
        sidebar2.classList.add("calender-side-bar-inactive")
        sidebar.classList.add("calender-side-bar-inactive")
      }
    
  
  
})



function openModal(date) {
  
  
 if (sidebar.classList.contains("calender-side-bar-inactive")) {

    sidebar.classList.add("calender-side-bar-active")
    sidebar.classList.remove("calender-side-bar-inactive")
    sidebar2.classList.add("calender-side-bar-inactive")


  } else {
    sidebar.classList.remove("calender-side-bar-active")
    sidebar.classList.add("calender-side-bar-inactive")
    sidebar2.classList.add("calender-side-bar-inactive")
  }


}


// this is for appointment date end

let check_box = document.querySelector('.active_time')

function active(){

  

  if (check_box.classList.contains("drop-hidden")){


check_box.classList.add("div-dropdown-time-active-show")
check_box.classList.remove("drop-hidden")
  console.log(check_box)

}else{

  check_box.classList.remove("div-dropdown-time-active-show")
check_box.classList.add("drop-hidden")


}


}



let check_box2 = document.querySelector('.active_time2')

function active2(){

  

  if (check_box2.classList.contains("drop-hidden2")){


check_box2.classList.add("div-dropdown-time-active-show2")
check_box2.classList.remove("drop-hidden2")
  console2.log(check_box)

}else{

  check_box2.classList.remove("div-dropdown-time-active-show2")
check_box2.classList.add("drop-hidden2")


}


}









