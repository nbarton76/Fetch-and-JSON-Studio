window.addEventListener('load', function(){
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
       response.json().then(function(jsonResponse){
           let container = document.getElementById("container");
           let newMarkup = '';

           for(let i = 0; i < jsonResponse.length; i++){
               let skillsMarkup = jsonResponse[i].skills.join(', ');

               let activeText = ' class="red"';
               if(jsonResponse[i].active === true) {
                   activeText = ' class="green"';
               }

               newMarkup += `<div class="astronaut">
                   <div class="bio">
                       <h3>${jsonResponse[i].firstName} ${jsonResponse[i].lastName}</h3>
                       <ul>
                           <li>Hours in space: ${jsonResponse[i].hoursInSpace}</li>
                           <li${activeText}>Active: ${jsonResponse[i].active}</li>
                           <li>Skills: ${skillsMarkup}</li>
                       </ul>
                   </div>
                   <img class="avatar" src="${jsonResponse[i].picture}">
               </div>`;
           }

           container.innerHTML = newMarkup;
       });
   });
});