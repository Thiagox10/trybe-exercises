function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercicio 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function creatDayOfMonth (){
    let day = document.getElementById('days')
    for (let cont = 0;cont < dezDaysList.length; cont+=1){
        let dayLi = document.createElement('li');
        dayLi.className = 'day';
        if (dezDaysList === 24 || dezDaysList === 25 || dezDaysList === 31){
          dayLi.className = 'holiday';
        }
        if(dezDaysList === 4 || dezDaysList === 11 || dezDaysList === 18 || dezDaysList === 25){
          dayLi.className = 'friday';
        }
    }

  }

