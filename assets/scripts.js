var card = document.getElementsByClassName('card')[0];

// mouse scroll wheel event
var degrees = 0;
onwheel = (event) => {
  degrees = degrees + event.deltaY;
  card.style.transition = 'transform 1s';
  card.style.transform = `rotateX(${degrees}deg)`;
};

// touch move event
var touchPosition;
ontouchstart = (event) => {
  touchPosition = event.changedTouches[0].clientY;
};
ontouchmove = (event) => {
  let newTouchPosition = event.changedTouches[0].clientY;
  let difference = newTouchPosition - touchPosition;
  touchPosition = newTouchPosition;

  card.style.transition = 'unset';
  degrees = degrees + difference;
  card.style.transform = `rotateX(${degrees}deg)`;
};
