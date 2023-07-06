# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL).

s

## Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


## The challenge
small challeng, just trying to create deffrent ui elements to strength my ui skils. created using HTML, CSS and Javascript.

The HTML code represents a testimonial carousel with two testimonials.

The `main` element with class `"carousel"` contains two `div` elements with class `"testimonial"`. Each testimonial has a left and right section.
The left section contains an image, represented by the `img` element with class `"personimg"`, and two buttons for navigating to the previous and next testimonials. The buttons have class `"prevbtn"` and `"nxtbtn"` respectively, and each button has an `img` element with class `"arrowicons"` for displaying arrow icons.
The right section contains two paragraphs. The first paragraph, with class `"whatbeensaid"`, contains the testimonial text. The second paragraph, with class `"whoname"`, contains the name of the person giving the testimonial and their job title, represented by the `span` element with class `"whojob"`.
The testimonials are styled using CSS classes and can be navigated using the previous and next buttons.

The JavaScript snippet is responsible for creating a slideshow functionality for the testimonials. Here is a breif  explantion of this code:
- The variables `prevBtn` and `nxtBtn` are assigned the elements with class names `"prevbtn"` and `"nxtbtn"` respectively using the `getElementsByClassName` method.
- A for loop is then used to add click event listeners to each element in `prevBtn` and `nxtBtn`, which call the `prevSlide` and `nextSlide` functions respectively when clicked.
- The `slideIndex` variable is initialized to 1.
- The `showSlide` function is called with the initial `slideIndex` value to display the first slide.
- The `nextSlide` function increments the `slideIndex` by 1 and calls `showSlide` with the updated value.
- The `prevSlide` function decrements the `slideIndex` by 1 and calls `showSlide` with the updated value.
- The `showSlide` function takes a parameter `n` and hides all testimonial slides by setting their display property to `"none"`. It then displays the slide at index `slideIndex-1` by setting its display property to `"block"`. It also handles wrapping around when reaching the first or last slide by resetting slideIndex accordingly.
- the `document.addEventListener` method is used to add an event listener for the `"keydown"` event. Inside the event listener function, it checks if the pressed key is the right arrow (`"ArrowRight"`) or the left arrow (`"ArrowLeft"`), and calls the `nextSlide()` or `prevSlide()` functions accordingly.