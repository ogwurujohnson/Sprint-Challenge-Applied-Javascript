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
