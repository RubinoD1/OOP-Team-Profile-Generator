const engineerTemplate = function (engineer) {
    return `
    <div class="card column is-one-quarter">
    <header class="card-header">
        <h2 class="card-header-title">
              ${engineer.name}
        </h2>
    </header>
    <ul class="card-content">
        <li class="content">
            Id: ${engineer.id}
        </li>
        <li class="content">
            Email: ${engineer.email}
        </li>
        <li class="content">
            GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
        </li>
        <li class="content">
            Role: Engineer
        </li>
    </ul>
</div>   
    `
};

const internTemplate = function (intern) {
    return `
    <div class="card column is-one-quarter">
    <header class="card-header">
        <h2 class="card-header-title">
             ${intern.name}
        </h2>
    </header>
    <ul class="card-content">
        <li class="content">
             ID: ${intern.id}
        </li>
        <li class="content">
            Email: ${intern.email}
        </li>
        <li class="content">
            School: ${intern.school}
        </li>
        <li class="content">
            Role: Intern
        </li>
    </ul>
</div>
    `
};

const managerTemplate = function (manager) {
    return `
    <div class="card column is-one-quarter">
    <header class="card-header">
        <h2 class="card-header-title">
              ${manager.name}
        </h2>
    </header>
    <ul class="card-content">
        <li class="content">
            Id: ${manager.id}
        </li>
        <li class="content">
            Email: ${manager.email}
        </li>
        <li class="content">
            Office #: ${manager.officeNumber}
        </li>
        <li class="content">
            Role: Manager
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

        //check role if match create engineer employeee card
        if (role === 'Engineer') {
            const engineerCard = engineerTemplate(employee);

            teamCardsArray.push(engineerCard);
        }
        //check role if match create intern employeee card
        if (role === 'Intern') {
            const internCard = internTemplate(employee);

            teamCardsArray.push(internCard);
        }
        
        //check role if match create manager card
        if (role === 'Manager') {
            const managerCard = managerTemplate(employee);

            teamCardsArray.push(managerCard);
        }
    }
    const teamCards = teamCardsArray.join('')

    const makeHTML = generateHTML(teamCards); 
    
    return makeHTML;
};


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
            <h1 class="title">
                Team Profile
            </h1>
           </div>
        </header>
        
        <main class="card columns">
            ${teamCards}
        </main>

    </body>
    </html>
    `;
};



module.exports = createHTML; 