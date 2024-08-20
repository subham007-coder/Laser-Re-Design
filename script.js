const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let string = document.querySelector("svg");
let pathVal = "M 10 150 Q 335 150 670 150";
let finalPath = "M 10 150 Q 335 150 670 150";

const frames = {
  currentIndex: 0,
  maxIndex: 293,
};

let imagesLoaded = 0;
const images = [];

function preloadImage() {
  for (let i = 1; i <= frames.maxIndex; i++) {
    const imageUrl = `./frames/frame_${i.toString().padStart(4, "0")}.jpg`;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === frames.maxIndex) {
        loadImage(frames.currentIndex);
        startAnimation();
      }
    };
    images.push(img);
  }
}

function loadImage(index) {
    if (index >= 0 && index <= frames.maxIndex) {
      const img = images[index];
      
      if (!img) {
        // If the image is not yet loaded, skip this frame.
        return;
      }
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);
  
      const newWidth = img.width * scale;
      const newHeight = img.height * scale;
  
      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;
  
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingQuality = "high";
      context.imageSmoothingEnabled = true;
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      frames.currentIndex = index;
    }
  }

function startAnimation(){
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".parent",
            start: "top top",
            scrub: 2,
            // markers: true
        }
    })
    tl.to(frames, {
        currentIndex: frames.maxIndex,
        onUpdate: function(){
            loadImage(Math.floor(frames.currentIndex));
        }
    })
}

preloadImage();



// gsap animation

gsap.from(".containerr #img", {
    opacity: 0,
    scale:0,
    duration: 1,
    scrollTrigger:{
        trigger: ".containerr #img",
        scroller: "body",
        scrub: 1,
    }
});

gsap.from(".fst-info #img", {
    opacity: 0,
    x: 400,
    duration: 1,
    scrollTrigger:{
        trigger: ".fst-info #img",
        scroller: "body",
        scrub: 1,
    }
});

gsap.from(".scnd-info #img", {
    opacity: 0,
    x: 400,
    duration: 1,
    scrollTrigger:{
        scrub: 1,
        trigger: ".scnd-info #img",
        scroller: "body",
    }
});

gsap.from(".text-box", {
    opacity: 0,
    // y: -400,
    scale: 0,
    duration: 1,
    scrollTrigger:{
        trigger: ".text-box",
        scroller: "body",
        scrub: 2,
    }
});

gsap.from(".about-text", {
    opacity: 0, 
    y: -200,
    duration: 1,
    scrollTrigger:{
        trigger: ".about-text",
        scroller: "body",
        scrub: 2,
    }
});

gsap.from(".product-text", {
    opacity: 0,
    y: -200,
    duration: 1,
    scrollTrigger:{
        trigger: ".product-text",
        scroller: "body",
        scrub: 2,
    }
});

gsap.from(".card-ani", {
    opacity: 0,
    scale:0,
    duration: 1,
    scrollTrigger:{
        trigger: ".card-ani",
        scroller: "body",
        scrub: 2,
    }
});

// gsap.from(".g-c", {
//     opacity: 0,
//     scale:0,
//     duration: 2,
//     scrollTrigger:{
//         trigger: ".g-c",
//         scroller: "body",
//         scrub: 2,
//     }
// });

// gsap.from(".p-c", {
//     opacity: 0,
//     scale:0,
//     duration: 2,
//     scrollTrigger:{
//         trigger: ".p-c",
//         scroller: "body",
//         scrub: 2,
//     }
// });

// line mousemove
string.addEventListener("mousemove", (event) => {
    path = `M 10 150 Q 335 ${event.y} 670 150`;
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out",
    });
});

  string.addEventListener("mouseleave", (event) => {
    gsap.to("svg path", {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1,0.2)",
    });
});
