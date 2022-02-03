/* Slider logic */
let show_slides = 7;
let click_right_btn = 0;
let click_left_btn = 0;
let position = 0;
let step = 240;
let title_left = 210;
let btn_right = $(
  ".product_comparison_two .slider-container .slider-button_right"
);
let btn_left = $(
  ".product_comparison_two .slider-container .slider-button_left"
);
let data_block = $(".product_comparison_two .goods-data");
let slider_block = $(".product_comparison_two .slider-container .slider-track");
let slider_item = $(
  ".product_comparison_two .slider-container .slider-track .slider-item"
);
let data_title = $(".product_comparison_two .goods-data .row .title");
let data_main_title = $(".product_comparison_two .goods-data .main-title");

let slides = slider_item.length;
let click_index = slides / show_slides;

let max_click = 0;

//Check if number is integer
if (!Number.isInteger(click_index)) {
  let left_click = slides - Math.floor(click_index) * show_slides;
  max_click = slides - (left_click + Math.floor(click_index));
} else {
  let left_click = slides / click_index;
  max_click = slides - show_slides * (click_index - 1);
}

btn_right.on("click", function () {
  if (click_left_btn <= max_click + 1) {
    btn_left.css("opacity", "1");
    btn_left.prop("disabled", false);
  }
  if (click_right_btn >= max_click + 1) {
    btn_right.css("opacity", "0.5");
    btn_right.prop("disabled", true);
  } else {
    click_right_btn += 1;
    click_left_btn -= 1;
    position -= step;
    title_left += step;
    slider_block.css("transform", `translateX(${position}px)`);
    data_block.css("transform", `translateX(${position}px)`);
    data_title.css({
      left: `${title_left}px`,
    });
    data_main_title.css({
      left: `${title_left}px`,
    });
  }
});
btn_left.on("click", function () {
  if (click_right_btn <= max_click + 1) {
    btn_right.css("opacity", "1");
    btn_right.prop("disabled", false);
  }
  if (click_left_btn >= max_click + 1 || click_right_btn == 0) {
    btn_left.css("opacity", "0.5");
    btn_left.prop("disabled", true);
  } else {
    btn_left.prop("disabled", false);
    click_left_btn += 1;
    click_right_btn -= 1;
    position += step;
    title_left -= step;
    slider_block.css("transform", `translateX(${position}px)`);
    data_block.css("transform", `translateX(${position}px)`);
    data_title.css({
      left: `${title_left}px`,
    });
    data_main_title.css({
      left: `${title_left}px`,
    });
  }
});
