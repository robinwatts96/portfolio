// Variables =============================================
const portfolio = document.querySelectorAll('.project');

// loop over each project and attach event listner
portfolio.forEach( (project) => {
  project.addEventListener('click', function (){ showProjectDesc(this); })

});

// Helpers =============================================
const showProjectDesc = project => {
  // get the data-title attribute value
  const projectTitle = project.getAttribute('data-title');
  // loop over the projects array and find the project that matches
  projects.filter( p => {
    if (projectTitle === p.title) {
      const {title, desc, gitHub, liveDemo} = p;
      project.innerHTML = 
        `<div class="project-inner-html-container">
          <div class="project-inner-html">
          <h4>${title}</h4>
          <p>${desc}</p>
          </div>
          <div class="project-button-container"> 
            <a id="project-github" href=${gitHub} target="_blank">Git Hub</a>
            <a id="project-demo" href=${liveDemo} target="_blank">Demo</a>
          </div>
        </div>`;
    }
  });
}




















