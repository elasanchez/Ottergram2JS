// Declare image variable selectors
var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";
var BUTTON_SELECTOR = "[data-image-button=\"button\"]";

// change image detail using imageUrl and titleText
function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}
// grab image url
function imageFromThumb(thumbnail) {
  "user strict";
  return thumbnail.getAttribute("data-image-url");
}
// grab image title
function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}
// Change the image details image and title
function setDetailsFromThumb(thumbnail) {
  "use strict";
  var img = imageFromThumb(thumbnail);
  var title = titleFromThumb(thumbnail);
  setDetails(img, title);
}
// Add click listener to the thumbnails
function addThumbClickedHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function addButtonClickHandler() {
  "use strict";
  var buttons = document.querySelectorAll(BUTTON_SELECTOR);
  var buttonArray = [].slice.call(buttons);
  var leftButton = buttonArray[0];
  var rightButton= buttonArray[1];
  var currentItem = 0;
  var thumbnailArray = getThumbnailsArray();

  leftButton.addEventListener("click", function(event){
    event.preventDefault();
    if(currentItem > 0){
      setDetailsFromThumb(thumbnailArray[currentItem-1]);
      currentItem--;
    }else{
      currentItem = 4;
      setDetailsFromThumb(thumbnailArray[currentItem]);
    }
  });

  rightButton.addEventListener("click", function(event){
    event.preventDefault();
    currentItem = (currentItem + 1)%5;
    setDetailsFromThumb(thumbnailArray[currentItem]);
  });

}
function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickedHandler);
  addButtonClickHandler();
}

initializeEvents();
