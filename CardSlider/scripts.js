const cardData = [
    {
        name: "Engineer CPP",
        profession: "Full Stack Developer",
        image: "images/man.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 4
    },
    {
        name: "Bob Johnson",
        profession: "Graphic Designer",
        image: "images/male.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 5
    },
    {
        name: "Charlie Brown",
        profession: "Data Scientist",
        image: "images/female.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 4
    },
    {
        name: "Diana Prince",
        profession: "Product Manager",
        image: "images/female-avatar.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 5
    },
    {
        name: "Eve Adams",
        profession: "UX/UI Designer",
        image: "images/women.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 4
    },
    {
        name: "Frank Castle",
        profession: "Software Engineer",
        image: "images/male-avatar.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 3
    },
    {
        name: "Colliense",
        profession: "Web Developer",
        image: "images/male.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 3
    },
    {
        name: "Jack",
        profession: "Software Engineer",
        image: "images/man.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 3
    },
    {
        name: "Charlotte",
        profession: "Android Developer",
        image: "images/female-avatar.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 5
    },
    {
        name: "James",
        profession: "Full Stack Developer",
        image: "images/man.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 4
    },
    {
        name: "Jennifer",
        profession: "Data Scientist",
        image: "images/female.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 3
    },
    {
        name: "	William",
        profession: "Graphic Designer",
        image: "images/male.png",
        facebook: "#",
        twitter: "#",
        github: "#",
        linkedin: "#",
        rating: 5
    }
];

const cardContainer = document.getElementById('cardContainer');

cardData.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('swiper-slide', 'card');

    card.innerHTML = `
        <div class="swiper-slide card">
            <div class="card-content">
                <div class="image">
                    <img src="${data.image}" alt="">
                </div>
                <div class="social-media">
                    <a href="${data.facebook}"><i class="fa-brands fa-facebook"></i></a>
                    <a href="${data.twitter}"><i class="fa-brands fa-twitter"></i></a>
                    <a href="${data.github}"><i class="fa-brands fa-github"></i></a>
                    <a href="${data.linkedin}"><i class="fa-brands fa-linkedin"></i></i></a>
                </div>
                <div class="name-profession">
                    <span class="name">${data.name}</span>
                    <span class="profession">${data.profession}</span>
                </div>
                <div class="rating">
                    ${Array.from({ length: 5 }, (_, i) =>
        `<i class="${i < data.rating ? 'fa-solid' : 'fa-regular'} fa-star"></i>`
    ).join('')}
                </div>
                <div class="button">
                    <button class="aboutMe">About Me</button>
                    <button class="hireMe">Hire Me</button>
                </div>
            </div>
        </div>
        `;

    cardContainer.appendChild(card);
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        575: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});






