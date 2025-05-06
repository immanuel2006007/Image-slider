// Select elements
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const seeMoreButtons = document.querySelectorAll('.item .content button');

// URLs for external websites
const externalLinks = [
    'https://en.wikipedia.org/wiki/Sri_Ramakrishna_College_of_Arts_and_Science',
    'https://en.wikipedia.org/wiki/Hindusthan_College_of_Arts_and_Science',
    'https://en.wikipedia.org/wiki/PSGR_Krishnammal_College_for_Women',
    'https://en.wikipedia.org/wiki/KG_College_of_Arts_and_Science',
    'https://en.wikipedia.org/wiki/Rathinam_College_of_Arts_and_Science',
    'https://ta.wikipedia.org/wiki/%E0%AE%9F%E0%AE%BE%E0%AE%95%E0%AF%8D%E0%AE%9F%E0%AE%B0%E0%AF%8D_%E0%AE%8E%E0%AE%A9%E0%AF%8D._%E0%AE%9C%E0%AE%BF._%E0%AE%AA%E0%AE%BF_%E0%AE%95%E0%AE%B2%E0%AF%88_%E0%AE%AE%E0%AE%B1%E0%AF%8D%E0%AE%B1%E0%AF%81%E0%AE%AE%E0%AF%8D_%E0%AE%85%E0%AE%B1%E0%AE%BF%E0%AE%B5%E0%AE%BF%E0%AE%AF%E0%AE%B2%E0%AF%8D_%E0%AE%95%E0%AE%B2%E0%AF%8D%E0%AE%B2%E0%AF%82%E0%AE%B0%E0%AE%BF'
];

// Functionality for next and previous buttons
next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Functionality for "See More" buttons
seeMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        // Redirect to the external link corresponding to the clicked button
        window.open(externalLinks[index], '_blank');
    });
});
