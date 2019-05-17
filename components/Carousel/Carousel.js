class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;

    // select elements
    this.leftButton = this.carouselElement.querySelector(".left-button");
    this.rightButton = this.carouselElement.querySelector(".right-button");
    this.images = this.carouselElement.querySelector("img");

    this.leftButton.addEventListener("click", () => this.changePicture("prev"));
    this.rightButton.addEventListener("click", () =>
      this.changePicture("next")
    );
  }

  addDataAttribute() {
    // select images
    const images = this.carouselElement.querySelectorAll('.img');
    // loop through images and give them a data attribute of id
    images.forEach((image,index)  =>  {
      image.setAttribute('data-id', index)
    });
  }

  changePicture(direction) {
    // call our addDataAttribute()
    this.addDataAttribute();
    // select the active image
    const activeImage = this.carouselElement.querySelector('.active');
    this.imageId = parseInt(activeImage.dataset.id);
    
    let directionIndex;
    if (direction === 'next') {
      directionIndex = 1;
    } else {
      directionIndex = -1;
    }
    // counter is a sum of imageid and direction index,used to determine which image to show next 
    this.counter = this.imageId + directionIndex;

    const nextImage = this.carouselElement.querySelector(`img[data-id="${this.counter}"]`);
    // check to see if their is a nextimage
    if(nextImage) {
      // check to see if the clicked button is a next
      if(direction === 'next') {
        // if their is a next, teplace the active class of the current image with left(meaning it shoud slide to the left)
        activeImage.classList.replace('active', 'left');
      } else {
        // if their is a prev, teplace the active class of the current image with right(meaning it shoud slide to the right)
        activeImage.classList.replace('active', 'right');
      }
      // since their is a next image, remove both the .left and .right class from the next image and 
      nextImage.classList.remove('left', 'right');
      // and add active to it
      nextImage.classList.add('active');

    }
  }
  
}

let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
