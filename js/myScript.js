

// script for bar chart start

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'jul','Aug','Sep','Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3 ],
      borderWidth: 1,
      borderRadius: 7,
      backgroundColor: '#f14242',
      
      
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        
      }
    }
  }
});


// script for bar chart end


// script for line chart start

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'jul','Aug','Sep','Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3 ],
      borderWidth: 1,
      borderRadius: 7,
      backgroundColor: '#f14242',
      
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        
        
      }
    }
  }
});


// script for LIne chart end


// script for pie chart start

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ['Allergies', 'Cough & Cold', 'Skincare', 'Vitamin & Supplements', 'Haircare',],
    
    datasets: [{
      label: '# of Votes',
      data: [10, 10, 10, 5, 5, ],
      backgroundColor: ["#B2292E", "#1D2225", "#FFC700", "#50CD89", "#199DE8", ],
borderWidth: 1,
      borderRadius: 7,
      // backgroundColor: '#f14242',
      
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        
        
      }
    }
  }
});


// script for pie chart end








// Dropdown script start


let optionsList = document.querySelectorAll(".option");
optionsList.forEach(function(e){
    e.addEventListener("click", function(e){
        let element = e.target;
        let element2 = element.innerHTML;
        // let code = element.getAttribute("data-code");
        document.querySelector("#txt").innerHTML = element2;
    })
})


// Dropdown script end




// input increase decrease button start

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}


function increaseValue2() {
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number2').value = value;
}

function decreaseValue2() {
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number2').value = value;
}

function increaseValue3() {
  var value = parseInt(document.getElementById('number3').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number3').value = value;
}

function decreaseValue3() {
  var value = parseInt(document.getElementById('number3').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number3').value = value;
}

function increaseValue4() {
  var value = parseInt(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number4').value = value;
}

function decreaseValue4() {
  var value = parseInt(document.getElementById('number4').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number4').value = value;
}

// input increase decrease button end

// input passwords show and hidden button start

function myFunction() {
  var x = document.getElementById("in_pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

let line = document.querySelector('#line')

if (line.classList.contains('line_show')){
  line.classList.remove('line_show')
  line.classList.add('line_hidden')
}else{
  line.classList.add('line_show')
  line.classList.remove('line_hidden')
}

}

function myFunction2() {
  var x = document.getElementById("in_pass2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

  let line = document.querySelector('#line2')

if (line.classList.contains('line_show')){
  line.classList.remove('line_show')
  line.classList.add('line_hidden')
}else{
  line.classList.add('line_show')
  line.classList.remove('line_hidden')
}


}

function myFunction3() {
  var x = document.getElementById("in_pass3");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

  let line = document.querySelector('#line3')

  if (line.classList.contains('line_show')){
    line.classList.remove('line_show')
    line.classList.add('line_hidden')
  }else{
    line.classList.add('line_show')
    line.classList.remove('line_hidden')
  }
 
}




// input passwords show and hidden button end






