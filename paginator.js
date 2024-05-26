let projects = [];
const projectsPerPage = 4; // Number of projects per page
let currentPage = 1;

async function fetchProjects() {
    try {
        const response = await fetch('paginator.Json');
        projects = await response.json();
        createPaginationButtons();
        displayProjects(currentPage);
        document.getElementById('loading').style.display = 'none'; 
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

function displayProjects(page) {
    const startIndex = (page - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const projectsContainer = document.getElementById('projects');
    projectsContainer.innerHTML = '';

    const pageProjects = projects.slice(startIndex, endIndex);

    pageProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
        <div class="img-overflow">
            <img src="${project.img}" class="project-img" alt="${project.alt}">
            </div>
            <div class="project-text-overflow">
            <h3>${project.heading}</h3>
            <p class="label-p">${project.label}</p>
            <p class="project-disc">${project.description}</p>
            <a href="${project.explore_link}" target="_blank">Explore</a>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });

    document.getElementById('page-numbers').textContent = `Page ${page} of ${Math.ceil(projects.length / projectsPerPage)}`;

    const projectsSection = document.querySelector('.Projects-contain');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}

function createPaginationButtons() {
    const paginationButtons = document.getElementById('pagination-buttons');
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    paginationButtons.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('num-toggle-btn')
        button.id = `button-toggle-${i}`;
        button.textContent = i;
        button.onclick = () => goToPage(i);
        paginationButtons.appendChild(button);
    }
}

function goToPage(page) {
    if (page < 1 || page > Math.ceil(projects.length / projectsPerPage)) return;
    currentPage = page;
    displayProjects(page);
}

function prevPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

function nextPage() {
    if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
        goToPage(currentPage + 1);
    }
}

// Initial setup
fetchProjects();



// Crusal
let currentIntdex=0;
let jsonData;
function UpdateHeader(){
    const imgcontainer=document.getElementById("slider-contain");
    const headingH=document.getElementById("crusal-tittle");
    const discH=document.getElementById("crusal-disc");
    const buttonH=document.getElementById("sliderlink");

    const data=jsonData[currentIntdex];

    imgcontainer.style.backgroundImage=`url(${data.backgroundImage})`;
    headingH.innerText=data.tittle;
    discH.innerText=data.disc;
    buttonH.innerText=data.linktittle;
    buttonH.href=data.link;

    currentIntdex=(currentIntdex+1);
}
function fetchFunction(){
    fetch('./PorjectHeading.json')
    .then(response=>response.json())
    .then(data=>{
        jsonData=data;
        UpdateHeader();
        
    }).catch(error=>console.error('This is the error', error))
};

fetchFunction();