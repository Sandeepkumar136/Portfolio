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
  