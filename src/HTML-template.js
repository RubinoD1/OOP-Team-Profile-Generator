




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