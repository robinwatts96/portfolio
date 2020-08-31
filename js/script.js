
  // Variables =============================================
const projects = document.querySelectorAll('.project');
// loop over each project and attach event listner
projects.forEach( project => project.addEventListener('click', function (){ showProjectDesc(this); }));
// Helpers =============================================
const showProjectDesc = project => {
}

...