// import SmoothScroll from 'smooth-scroll';
// var scroll = new SmoothScroll('a[href*="#"]');

// todo: Change focus to selected section
/// todo: If I really wanted to remove smooth scroll, I could try and set data-attributes vs anchors and ID's
// todo: Doesn't really work well in safari, especially without SmoothScroll
// todo: Clean this code! It's a mess and jumble of things right now.

const scrollTriggers = document.querySelectorAll('.js-scrollTrigger');
const scrollTargets = document.querySelectorAll('.js-scrollTarget');
const departmentNav = document.querySelector('.department-nav');


// * cleans user input and set it as section ID
scrollTargets.forEach(target => {
  const id = target.id
  const idCleaned = id.replace(/\W+/g, '-').replace(/^-|-$/g, '').toLowerCase();
  target.id = idCleaned;
});

// * cleans user input and set it as nav HREF anchor
scrollTriggers.forEach(trigger => {
  const id = trigger.getAttribute('href');
  const hrefCleaned = id.replace(/\W+/g, '-').replace(/^-|-$/g, '').toLowerCase();
  trigger.setAttribute('href', `#${hrefCleaned}`);
});

// * on mobile, when clicking the department nav, show all options
if (departmentNav) {
  departmentNav.addEventListener('click', function (e) {
    if (window.innerWidth <= 1024) {
      departmentNav.classList.add('is-open');
    }
  });
}

// * For BigPipe Data, page needs to be loaded. 
var checkReadyState = setInterval(() => {
  // * this checks if the page is loaded
  if (document.readyState === "complete") {
    clearInterval(checkReadyState);

    // *Scroll spy works on Scroll 
    window.onscroll = function () {
      scrollTargets.forEach(target => {
        const sectionID = target.id;
        const triggerEl = document.querySelector(`a[href='#${sectionID}']`);
        const spanEl = triggerEl.querySelector('span');
        const targetHeight = target.offsetHeight;
        const targetBottom = target.offsetTop + targetHeight

        // * checks scroll locations and updates url Hash
        if (targetBottom - window.scrollY > 58 && target.offsetTop - window.scrollY < 58) {
          const location = window.location.toString().split('#')[0];
          history.replaceState(null, null, location + '#' + sectionID);

          // * updates nav indicator
          spanEl.classList.remove('hidden');
          triggerEl.classList.add('is-active');
        } else {
          spanEl.classList.add('hidden');
          triggerEl.classList.remove('is-active');
        }
      });

      // * commented out on 3/15/20 - Seems to work without it.
      // scrollTriggers.forEach((trigger, index) => {
      //   const id = trigger.getAttribute('href');
      //   const spanEl = trigger.querySelector('span');
      //   const target = document.querySelector(`${id}`);
      //   const targetHeight = target.offsetHeight;
      //   const targetBottom = target.offsetTop + targetHeight;

      //   if (index == 0 && targetBottom - window.scrollY > 58) {
      //     trigger.classList.add('is-active')
      //     spanEl.classList.remove('hidden');
      //   }
      // });
    }

    // *sets the first trigger on click
    scrollTriggers.forEach((trigger, index) => {
      const id = trigger.getAttribute('href');
      const spanEl = trigger.querySelector('span');
      const target = document.querySelector(`${id}`);
      const targetHeight = target.offsetHeight;
      const targetBottom = target.offsetTop + targetHeight;

      if (index == 0 && targetBottom - window.scrollY > 0) {
        trigger.classList.add('is-active');
        spanEl.classList.remove('hidden');
      }

      // * makes the scroll spy work on click.
      trigger.addEventListener('click', function (e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();

          if (departmentNav.classList.contains('is-open')) {
            e.stopPropagation();

            departmentNav.classList.remove('is-open');

            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      })
    });

  }
}, 100);

checkReadyState