
let projects = [{id:0, preview:"dashboard-preview-9.4.2020.png", type:"WEB", linkSource:"stevegustus.me/#",linkText:"Procore Dashboard",description:"Pull data from the Procore API.",stack:["javascript.svg"]},
    {id:0, preview:"dogstagram-preview-9.4.2020.png", type:"WEB", linkSource:"stevegustus.me/#",linkText:"Dogstagram",description:"Instagram for Dogs!",stack:["ruby.svg","rails.svg"]}, 
    {id:0, preview:"caravan-preview.png", type:"WEB", linkSource:"stevegustus.me/#",linkText:"Caravan",description:"Card game from Fallout: New Vegas",stack:["javascript.svg"]}
];

renderProjects();

function renderProjects() {
    let featured = document.querySelector('.featured');
    projects.forEach(proj => {
        let stack = ""
        proj.stack.forEach(tech => {
            stack += `<img class="tech-icon" src="/img/${tech}" />`
        } )

        featured.innerHTML +=  
        `<div class="project" style="background-image: url(./img/${proj.preview});" defer>
            <div class="info">
                <a class="link" href="${proj.linkSource}">${proj.linkText}</a>
                <hr>
                <div class="stack">
                    ${stack}
                </div>
            </div>
        </div>`  ;
    })


}
