// Variables =============================================
const portfolio = document.querySelectorAll('.project');
// loop over each project and attach event listner
portfolio.forEach( project => project.addEventListener('click', function (){ showProjectDesc(this); }));
// Helpers =============================================
const showProjectDesc = project => {
  // get the data-title attribute value
  const projectTitle = project.getAttribute('data-title');
  // loop over the projects array and find the project that matches
  projects.filter( p => {
    if (projectTitle === p.title) {
      const {title, desc, gitHub} = p;
      project.innerHTML = 
        `<div>
          <h2>${title}</h2>
          <p>${desc}</p>
          <a href="gitHub" target="_blank">Git Hub</a>
          <a href="Demo" target="_blank">Demo</a>
        </div>`;
    }
  });
}