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
        `<div class="project-inner-html-container">
          <div class="project-inner-html">
            <h4>${title}</h4>
            <p>${desc}</p>
          </div>
          <div class="project-button-container"> 
            <a id="project-github" href="gitHub" target="_blank">Git Hub</a>
            <a id="project-demo" href="Demo" target="_blank">Demo</a>
          </div>
        </div>`;
    }
  });
}


// Filter
const filterArea = document.querySelector('.display-port');

function activate(target) {
  if (target.tagName === 'LI') {
    const removeActive = document.querySelector('.filter').children;
    if (target.className !== 'active') {
      for (i = 0; i < removeActive.length; i++) {
        removeActive[i].className = '';
      }
      target.className = 'active';
    }
  }
}

function filter(target) {
  if (target.tagName === 'LI') {
    const searchType = target.getAttribute('id');
    const card = document.querySelectorAll('.project');

    if (searchType === 'all') {
      for (i = 0; i < card.length; i++) {
        card[i].style.display = '';
      }
    } else {
      for (i = 0; i < card.length; i++) {

        const compare = document.querySelectorAll('.project')[i].className;
        const indexSearch = compare.indexOf(searchType);

        if (indexSearch > -1) {
          card[i].style.display = '';
        } else {
          card[i].style.display = 'none';
        }

      }
    }
  }
}