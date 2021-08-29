//Intro Section

function scrollAppear() {
    const aboutTitle = document.querySelector('.about-title');
    const aboutDescription = document.querySelector('.about-description');
    const introPosition = aboutTitle.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.4;

    if(introPosition < screenPosition) {
        aboutTitle.classList.add('title-appear')
        aboutTitle.addEventListener('transitionend', () => {
            aboutDescription.classList.add('description-appear');
        })
    }
}

window.addEventListener('scroll', scrollAppear)

//Projects Section

const projects = document.querySelectorAll('.project-title')

projects.forEach(project => {
    project.addEventListener('click', () => {
        removeClass();
        console.log(project.parentElement.children[1].classList.toggle('active'))
    });
});

function removeClass() {
    projects.forEach(project => {
        project.parentElement.children[1].classList.remove('active');
    })
}



