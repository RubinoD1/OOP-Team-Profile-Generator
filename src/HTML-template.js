

const createHTML = function(data) {
    //array for the employee cards that will created 
    teamCardsArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        //check role if match create engineer employeee card
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamCardsArray.push(engineerCard);
        }
        //check role if match create intern employeee card
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamCardsArray.push(internCard);
        }
        
        //check role if match create manager card
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamCardsArray.push(managerCard);
        }
    }
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