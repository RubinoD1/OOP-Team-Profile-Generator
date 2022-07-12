//engineer card template
const engineerTemplate = function (engineer) {
    return `
<div class="card column is-one-quarter  has-background-grey-lighter">
    <header class="card-header">
        <h2 class="card-header-title is-4 has-background-info">
              ${engineer.name}
        </h2>
    </header>
    <ul class="card-content">
        <li class="content">
             <b>Role: Engineer</b>
        </li>
        <li class="content">
              <b>ID: ${engineer.id}</b>
        </li>
       <li class="content">
              <b>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></b>
        </li>
        <li class="content">
          <b>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></b>
        </li>
       
    </ul>
</div>   
    `
};

//Intern card template
const internTemplate = function (intern) {
    return `
<div class="card column is-one-quarter  has-background-grey-lighter">
    <header class="card-header">
        <h2 class="card-header-title is-4 has-background-info">
             ${intern.name}
        </h2>
    </header>
    <ul class="card-content">
        <li class="content">
               <b>Role: Intern</b>
        </li>
        <li class="content">
                <b>ID: ${intern.id}</b>
        </li>
       <li class="content">
               <b>School: ${intern.school}</b>
        </li>
        <li class="content">
           <b>Email: <a href="mailto:${intern.email}">${intern.email}</a></b>
        </li>
        
    </ul>
</div>
    `
};

//Manager card template
const managerTemplate = function (manager) {
    return `
<div class="card column is-one-quarter  has-background-grey-lighter">
    <header class="card-header">
        <h2 class="card-header-title is-4 has-background-info">
              ${manager.name}
        </h2>
    </header>
    <ul class="card-content">
        <li class="content">
                <b>Role: Manager</b>
        </li>
        <li class="content">
                <b>ID: ${manager.id}</b>
        </li>
        <li class="content">
              <b>Office #: ${manager.officeNumber} </b>
        </li>
        <li class="content">
             <b>Email: <a href="mailto:${manager.email}">${manager.email}</a> </b>
        </li>
        
    </ul>
</div>
    `
};


const createHTML = function(data) {
    //array for the employee cards that will created 
    teamCardsArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        //check role if match, if it is push data to array to be used in employee templates
        if (role === 'Engineer') {
            const engineerCard = engineerTemplate(employee);

            teamCardsArray.push(engineerCard);
        }
        
        if (role === 'Intern') {
            const internCard = internTemplate(employee);

            teamCardsArray.push(internCard);
        }
        
       if (role === 'Manager') {
            const managerCard = managerTemplate(employee);

            teamCardsArray.push(managerCard);
        }
    }
      const teamCards = teamCardsArray.join('')

      const makeHTML = generateHTML(teamCards); 
    
      return makeHTML;
};

//HTML template 
const generateHTML = function (teamCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <title>
            Team Profiles
        </title>
    </head>
<body>
        
        <!--header-->
    <header id="header" class="hero is-link">
           <div class="hero-body">
            <h1 class="title is-1">
                Team Profile
            </h1>
           </div>
    </header>
</br>    
        <!--employee info cards-->
<main class="card columns is-3 is-multiline">
        ${teamCards}
</main>

</body>

</html>
    `;
};



module.exports = createHTML; 