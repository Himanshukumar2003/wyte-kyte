var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show button when scrolling down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



var swiper = new Swiper(".mySwiper", {
  pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2000,
    },
    loop: true,
});
$('.service1,.service2,.service3').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true
});
$('.client-logos').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay:true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
 const items = document.querySelectorAll('.accordion button');
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  items.forEach((item) => item.addEventListener('click', toggleAccordion));

  AOS.init();

  $('.blogs-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  $('.delivery-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay:true,
  autoplaySpeed: 1000,
  slidesToShow: 3.8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1
      }
    }
  ]
});
  $('.why-choose').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true,
});

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click',()=>{
    removeActiveClasses()
    panel.classList.add('active');
}))

function removeActiveClasses(){
    panels.forEach(panel => panel.classList.remove('active'))
}

const multiplier = {
    translate: .1,
    rotate: .01
}

new Swiper('.rotating-sldier', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    arrows: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
})

function calculateWheel() {
    const slides = document.querySelectorAll('.single')
    slides.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect()
        const r = window.innerWidth * .5 - (rect.x + rect.width * .5)
        let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate

        if (ty < 0) {
            ty = 0
        }
        const transformOrigin = r < 0 ? 'left top' : 'right top'
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`
        slide.style.transformOrigin = transformOrigin
    })
}

function raf() {
    requestAnimationFrame(raf)
    calculateWheel()
}

raf();


$('.counter').counterUp({
    delay: 10,
    time: 1000,
    offset: 70,
    beginAt: 100,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
});


