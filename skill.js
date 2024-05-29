const SkillDataArr = [
    {
        "id": 1,
        "img": "assets/rear-view-programmer-working-all-night-long.jpg",
        "tittle": "frontend development",
        "disc": "Frontend refers to the visible part of a software or website that users interact with, including design, layout, and functionality. It's the user interface and user experience component."
    },
    {
        "id": 2,
        "img": "assets/medium-shot-woman-working-laptop.jpg",
        "tittle": "backend development",
        "disc": "Backend is the behind-the-scenes part of software,handling data storage, processing, and server operations. It powersthe frontend, ensuring functionality and communication withdatabases and external services."
    },
    {
        "id": 3,
        "img": "assets/b-container.webp",
        "tittle": "financial accounts",
        "disc": "Accounts involve tracking financial transactions, assets,liabilities, income, and expenses to assess an entity's financialhealth and make informed decisions. It's fundamental for financialmanagement and reporting."
    }
];

let contentIndexSkill=0;
let ArrData;
let Image_Skill=document.getElementById("skill-img");
const skillHeading=document.getElementById("heading-skill");
const skillDisc=document.getElementById("text-skill");
const btn_left_skill=document.getElementById("btn-skill-left");
const btn_Right_skill=document.getElementById("btn-skill-right");
// console.log(Image_Skill, skillHeading, skillDisc, btn_left_skill, btn_Right_skill)

window.addEventListener('DOMContentLoaded', ()=>{
    let dataofSkill= SkillDataArr[contentIndexSkill];
    Image_Skill.src=dataofSkill.img;
    skillHeading.innerText=dataofSkill.tittle;
    skillDisc.innerText=dataofSkill.disc;

});

function ShowSkillContent(show_itm){
    const dataofSkill=SkillDataArr[show_itm];
    Image_Skill.src=dataofSkill.img;
    skillHeading.innerText=dataofSkill.tittle;
    skillDisc.innerText=dataofSkill.disc;
};

btn_Right_skill.addEventListener('click', ()=>{
    contentIndexSkill++;
    if(contentIndexSkill>SkillDataArr.length-1){
        contentIndexSkill=0;
    };
    ShowSkillContent(contentIndexSkill);
});

btn_left_skill.addEventListener('click', ()=>{
    contentIndexSkill--;
    if(contentIndexSkill<0){
        contentIndexSkill=ArrData.length-1;
    }
    ShowSkillContent(contentIndexSkill)
})


// Professionals
const professionals = [
    {
        id: 1,
        image: "./assets/partner-1.jpg",
      title: "Nukul Sharma",
      category: "frontend developer",
      description: "Exceptional frontend skills, delivering beautiful, responsive designs. A reliable partner who consistently meets deadlines with high-quality code. Highly recommended!"
    },
    {
        id: 2,
        image: "./assets/partner-2.jpg",
      title: "Manjai Kumar",
      category: "frontend developer",
      description: "Impressive technical expertise and design sense. Delivers polished, functional, and visually appealing projects. A trusted and skilled collaborator"
    },
    {
        id: 3,
        image: "./assets/partner-3.jpg",
      title: "Pritam Rao",
      category: "Data Analyst",
      description: "Consistently exceeds expectations with clean, efficient code. Great at problem-solving and enhancing user experience. An invaluable asset to our team!"
    }
  ];
  let PartnerIndex=0;
  const Pimage=document.getElementById("img-partner");
  const Ptittle=document.getElementById('tittle-partner');
  const Pjob=document.getElementById("job-partner");
  const Pdisc=document.getElementById("disc-partner");
  const PbtnPrev=document.getElementById("btn-perv-partner");
  const PbtnNext=document.getElementById("btn-next-partner")




  window.addEventListener('DOMContentLoaded', ()=>{
    let Pcontent=professionals[PartnerIndex];
    Pimage.src=Pcontent.image;
    Ptittle.innerText=Pcontent.title;
    Pjob.innerText=Pcontent.category;
    Pdisc.innerText=Pcontent.description;
  });

  function ShowPartnerContent(show_partners){
    const Pcontent=professionals[show_partners];
    Pimage.src=Pcontent.image;
    Ptittle.innerText=Pcontent.title;
    Pjob.innerText=Pcontent.category;
    Pdisc.innerText=Pcontent.description;
  };

  PbtnNext.addEventListener('click', ()=>{
    PartnerIndex++;
    if(PartnerIndex>professionals.length-1){
        PartnerIndex=0;
    }
    ShowPartnerContent(PartnerIndex);
  })

  PbtnPrev.addEventListener("click", ()=>{
    PartnerIndex--;
    if(PartnerIndex<0){
        PartnerIndex=professionals.length-1;
    }
    ShowPartnerContent(PartnerIndex);
  });


  const customers = [
    {
      id: 1,
      image: "./assets/review-1.jpeg",  
      name: "luis maximanal",
      job: "backend developer",
      description: "Expert in frontend development and Excel data analysis. Delivers stunning interfaces and insightful data reports. A versatile and reliable partner!"
    },
    {
      id: 2,
      image: "./assets/review-2.jpg",  
      name: "peter jhonal",
      job: "frontend developer",
      description: "Combines exceptional frontend skills with advanced Excel data analysis. Creates beautiful websites and detailed data insights. Highly recommended!"
    },
    {
      id: 3,
      image: "./assets/review-3.jpg",  
      name: "rishav gupta",
      job: "sales executive",
      description: "Talented in both frontend development and Excel analysis. Produces user-friendly designs and comprehensive data reports. A valuable asset to any team."
    },
    {
      id: 4,
      image: "./assets/review-4.png",  
      name: "ganesh kashyap",
      job: "sales manager",
      description: "Outstanding frontend developer and Excel analyst. Crafts visually appealing interfaces and insightful data visualizations. Dependable and skilled!"
    },
    {
      id: 5,
      image: "./assets/review-5.webp",  
      name: "sonakshi chauhan",
      job: "assistant developer",
      description: "Excellent at frontend development and Excel data analysis. Delivers elegant designs and precise data insights. A pleasure to work with!"
    },
    {
      id: 6,
      image: "./assets/review-6.jpg",  
      name: "manisha sharma",
      job: "accountant",
      description: "Versatile with frontend and Excel skills. Creates intuitive interfaces and thorough data analysis. Consistently exceeds expectations!"
    },
    {
      id: 7,
      image: "./assets/review-7.jpg",  
      name: "radhika gupta",
      job: "assistant developer",
      description: "Skilled in frontend development and Excel data analysis. Creates engaging interfaces and detailed data insights. A reliable and talented professional."
    }
  ];
  
  let CustomIndex=0;
  const Simage=document.getElementById("img-reviews");
  const Stittle=document.getElementById('tittle-reviews');
  const Sjob=document.getElementById("job-reviews");
  const Sdisc=document.getElementById("disc-reviews");
  const SbtnPrev=document.getElementById("btn-perv-reviews");
  const SbtnNext=document.getElementById("btn-next-reviews")

  window.addEventListener('DOMContentLoaded', ()=>{
    let RevContent=customers[CustomIndex];
    Simage.src=RevContent.image;
    Stittle.innerText=RevContent.name;
    Sjob.innerText=RevContent.job;
    Sdisc.innerText=RevContent.description;
  });

  function ShowReviews(showItms){
    const RevContent=customers[showItms];
    Simage.src=RevContent.image;
    Stittle.innerText=RevContent.name;
    Sjob.innerText=RevContent.job;
    Sdisc.innerText=RevContent.description;
  };

  SbtnNext.addEventListener('click', ()=>{
    CustomIndex++;
    if(CustomIndex>customers.length-1){
        CustomIndex=0;
    }
    ShowReviews(CustomIndex);
  })

  SbtnPrev.addEventListener("click", ()=>{
    CustomIndex--;
    if(CustomIndex<0){
        CustomIndex=customers.length-1;
    }
    ShowReviews(CustomIndex);
  });

  // myProfession
  const MyProfessions = [
    {
      id: 1,
      profession: "Sales Executive",
      description: "Manages client relationships, identifies sales opportunities, and drives business growth through strategic planning, presentations, and customer interactions."
    },
    {
      id: 2,
      profession: "Web Development",
      description: "Designs, codes, and maintains websites and web applications, ensuring functionality, performance, and user experience through front-end and back-end technologies."
    },
    {
      id: 3,
      profession: "Data Entry",
      description: "Inputs, updates, and maintains data in databases or systems, ensuring accuracy and efficiency for business operations and reporting."
    }
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".profession-title");
    const descriptions = document.querySelectorAll(".profession-description");
  
    MyProfessions.forEach((profession, index) => {
      if (titles[index]) {
        titles[index].innerText = profession.profession;
      }
      if (descriptions[index]) {
        descriptions[index].innerText = profession.description;
      }
    });
  });
  // Profession Data Configration
  const ProfessionDataContainer=document.querySelectorAll(".profession-contain");

  ProfessionDataContainer.forEach((DataResponse)=>{
    const ToggleBtnProf=DataResponse.querySelector(".btn-contain-prof");

    ToggleBtnProf.addEventListener('click', ()=>{
      ProfessionDataContainer.forEach((peram)=>{
        if(peram !==DataResponse){
          peram.classList.remove("data-manipulation");
        }
      })
      DataResponse.classList.toggle("data-manipulation");
    })
  })





  // Chart
  const USERNAME = 'Sandeepkumar136'; // Replace with your GitHub username
  const BASE_URL = 'https://api.github.com';
  let DAYS_TO_FETCH = 5;
  let chartInstance = null; // Variable to hold the chart instance
  
  document.addEventListener('DOMContentLoaded', () => {
      const numberInput = document.getElementById('git_days');
      const submitButton = document.getElementById('git_daysBtn');
  
      // Function to validate and set the input value
      const validateAndSetInputValue = () => {
          const value = parseInt(numberInput.value, 10);
          if (!isNaN(value) && value >= 5 && value <= 90) {
              DAYS_TO_FETCH = value;
              renderChart();
          } else {
              alert('Please enter a number between 5 and 90.');
          }
      };
  
      // Event listener for input to restrict to two characters
      numberInput.addEventListener('input', () => {
          const value = numberInput.value;
          if (value.length > 2) {
              numberInput.value = value.slice(0, 2);
          }
      });
  
      // Event listener for submit button click
      submitButton.addEventListener('click', validateAndSetInputValue);
  
      // Initial render of the chart
      renderChart();
  });
  
  const getAllEvents = async (username) => {
      let allEvents = [];
      let page = 1;
      let perPage = 100; // Maximum number of results per page
  
      const sinceDate = new Date();
      sinceDate.setDate(sinceDate.getDate() - DAYS_TO_FETCH);
      const since = sinceDate.toISOString();
  
      while (true) {
          const url = `${BASE_URL}/users/${username}/events?page=${page}&per_page=${perPage}`;
          try {
              const response = await fetch(url);
              if (!response.ok) {
                  throw new Error(`Error fetching events: ${response.statusText}`);
              }
              const events = await response.json();
  
              if (events.length === 0) {
                  break;
              }
  
              const filteredEvents = events.filter(event => new Date(event.created_at) >= sinceDate);
              allEvents = allEvents.concat(filteredEvents);
              page++;
          } catch (error) {
              console.error('Network error:', error);
              break;
          }
      }
  
      return allEvents;
  };
  
  const processEvents = (events) => {
      const data = {};
  
      events.forEach(event => {
          const eventDate = new Date(event.created_at);
          const dateKey = eventDate.toISOString().split('T')[0];
  
          if (!data[dateKey]) {
              data[dateKey] = { repoCreations: 0, commits: 0 };
          }
  
          if (event.type === 'CreateEvent' && event.payload.ref_type === 'repository') {
              data[dateKey].repoCreations++;
          }
  
          if (event.type === 'PushEvent') {
              data[dateKey].commits += event.payload.commits.length;
          }
      });
  
      return data;
  };
  
  const renderChart = async () => {
      const allEvents = await getAllEvents(USERNAME);
      const data = processEvents(allEvents);
  
      const today = new Date();
      const dates = Array.from({ length: DAYS_TO_FETCH }, (_, i) => {
          const date = new Date();
          date.setDate(today.getDate() - i);
          return date.toISOString().split('T')[0];
      }).reverse();
  
      const repoCreations = dates.map(date => data[date]?.repoCreations || 0);
      const commitCounts = dates.map(date => data[date]?.commits || 0);
  
      const ctx = document.getElementById('activityChart').getContext('2d');
  
      // Destroy the existing chart instance if it exists
      if (chartInstance) {
          chartInstance.destroy();
      }
  
      // Create a new chart instance
      chartInstance = new Chart(ctx, {
          type: 'line',
          data: {
              labels: dates,
              datasets: [{
                  label: 'Repositories Created',
                  data: repoCreations,
                  fill: false,
                  borderColor: 'rgba(255, 99, 132, 1)',
                  yAxisID: 'y1',
                  tension: 0.1
              }, {
                  label: 'Commits',
                  data: commitCounts,
                  fill: false,
                  borderColor: 'rgba(54, 162, 235, 1)',
                  yAxisID: 'y2',
                  tension: 0.1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  },
                  y1: {
                      type: 'linear',
                      position: 'left'
                  },
                  y2: {
                      type: 'linear',
                      position: 'right',
                      grid: {
                          drawOnChartArea: false
                      }
                  }
              }
          }
      });
  };
  
  renderChart().catch(error => {
      console.error('Error:', error);
  });
  


  // dialogue box
  const dialogue_box=document.querySelector('.dialog-container');
  const showDialogue=document.getElementById("button-show-dialogue");


  showDialogue.addEventListener('click', ()=>{
    dialogue_box.classList.add('showResume');
  });

dialogue_box.addEventListener('click', ()=>{
  if(event.target===dialogue_box){
    dialogue_box.classList.remove('showResume');
  }
})

let dailog_contain=document.querySelector('.dialog-contain');
let resumefile=`https://drive.google.com/file/d/19G3CJ9nimHHyxcMRXeev_nGzAF5zFpNp/view?usp=drive_link`;
let qr_code=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.com/${resumefile}`;


function myFunction(addData){
  let img_qr_container=document.createElement('div');
  img_qr_container.classList.add('img-qr-container');

  let img=document.createElement('img');
  img.classList.add('img-qr');
  img.src=addData;
  img.alt='Qr-Code';

  let title=document.createElement('p');
  title.classList.add('tittle-qr');
  title.textContent='scan or download resume';

  img_qr_container.appendChild(img);
  img_qr_container.appendChild(title);

  let button=document.createElement('button');
  button.classList.add('resume-dnld-btn');
  button.textContent='Download Anyway';

  button.addEventListener('click', ()=>{
    window.open(resumefile, 'blank');
  })

  dailog_contain.appendChild(img_qr_container);
  dailog_contain.appendChild(button);

  return img_qr_container, button;
};

window.addEventListener('DOMContentLoaded', ()=>{
  dailog_contain.append(myFunction(qr_code))
})