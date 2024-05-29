let gearContainer = document.querySelector('.gear-container');
let jsonData;

async function fetchGearData() {
    try {
        // Example fetch call, replace with your actual URL
        const response = await fetch('./gearfile.json'); // Replace with actual URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        jsonData = data;
        myGearUpdate(jsonData);
    } catch (error) {
        console.error('Error fetching gear data:', error);
    }
}

function myGearUpdate(fullData) {
    // Clear the existing content in the container
    gearContainer.innerHTML = '';

    fullData.categories.forEach(category => {
        let categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        let heading = document.createElement('h2');
        heading.classList.add('gear-heading');
        heading.textContent = category.category;

        categoryContainer.appendChild(heading);
        let itemcontainer=document.createElement('div');
        itemcontainer.classList.add('itemContainer');

        category.data.forEach(item => {
            let gear = document.createElement('div');
            gear.classList.add('gear');

            let gImageContain = document.createElement('div');
            gImageContain.classList.add('gImageContain');

            let Gimage = document.createElement('div');
            Gimage.classList.add('gImage');
            Gimage.style.backgroundImage = `url(${item.img})`;
            Gimage.alt = item.alt;

            gImageContain.appendChild(Gimage);

            let Gcontent = document.createElement('div');
            Gcontent.classList.add('Gcontent');

            let Gtitle = document.createElement('h3');
            Gtitle.classList.add('Gtitle');
            Gtitle.textContent = item.item;

            let Gdisc = document.createElement('p');
            Gdisc.classList.add('Gdisc');
            Gdisc.textContent = item.disc;

            let Gbtn = document.createElement('button');
            Gbtn.classList.add('Gbtn');
            Gbtn.addEventListener('click', () => {
                window.open(item.link, '_blank');
            });

            let btnIcon = document.createElement('i');
            btnIcon.classList.add('bx', 'bxs-shopping-bag');
            Gbtn.appendChild(btnIcon);
            Gbtn.appendChild(document.createTextNode(' shop'));

            Gcontent.appendChild(Gtitle);
            Gcontent.appendChild(Gdisc);
            Gcontent.appendChild(Gbtn);

            gear.appendChild(gImageContain);
            gear.appendChild(Gcontent);



            itemcontainer.appendChild(gear);
        });

        gearContainer.appendChild(categoryContainer)
        gearContainer.appendChild(itemcontainer);
    });
}

// Call fetchGearData to initialize
fetchGearData();
