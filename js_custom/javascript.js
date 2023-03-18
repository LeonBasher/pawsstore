  document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll('.sidebar .nav-link').forEach(function(element){

      element.addEventListener('click', function (e) {

        let nextEl = element.nextElementSibling;
        let parentEl  = element.parentElement;

        if(nextEl) {
          e.preventDefault();
          let mycollapse = new bootstrap.Collapse(nextEl);

            if(nextEl.classList.contains('show')){
              mycollapse.hide();
            } else {
              mycollapse.show();
              // find other submenus with class=show
              var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
              // if it exists, then close all of them
            if(opened_submenu){
              new bootstrap.Collapse(opened_submenu);
            }

            }
          }
      });
    })
  });


  //Custom Carousel
  // var featured_movement = 0;
  // var featured_pagination_counter = document.getElementById('featured-pagination-counter');
  // document.getElementById('previous-trending-featured').addEventListener('click', slidesFeaturedtoLeft);
  // let featured_item = document.getElementsByClassName('featured-item-col');
  // var featured_pagination_counter_value = 1;
  // featured_pagination_counter.innerHTML = featured_pagination_counter_value + ' / ' + (featured_item.length - 1);
  // function slidesFeaturedtoLeft() {
  //   if (featured_movement <= 0) {
  //     featured_movement = 0;
  //     for (var i = 0; i < featured_item.length; i++) {
  //       featured_item[i].style.transform = 'translateX(-'+featured_movement+'%)';
  //     }
  //   } else {
  //     featured_movement = featured_movement - 100;
  //     featured_pagination_counter_value = featured_pagination_counter_value - 1;
  //     featured_pagination_counter.innerHTML = featured_pagination_counter_value + ' / ' + (featured_item.length - 1);
  //     for (var i = 0; i < featured_item.length; i++) {
  //       featured_item[i].style.transform = 'translateX(-'+featured_movement+'%)';
  //     }
  //   }
  // }
  //
  // document.getElementById('next-trending-featured').addEventListener('click', slidesFeaturedToRight);
  // function slidesFeaturedToRight() {
  //   let calculate_movement = (featured_item.length - 2) * 100;
  //   if (featured_movement >= calculate_movement) {
  //     featured_pagination_counter_value = featured_pagination_counter_value;
  //     return;
  //   } else {
  //     featured_movement = featured_movement + 100;
  //     featured_pagination_counter_value = featured_pagination_counter_value + 1;
  //      featured_pagination_counter.innerHTML = featured_pagination_counter_value + ' / ' + (featured_item.length - 1);
  //     for (var i = 0; i < featured_item.length; i++) {
  //       featured_item[i].style.transform = 'translateX(-'+featured_movement+'%)';
  //     }
  //   }
  // }

// LASTEST CAROUSEL
  // var lastest_movement = 0;
  // var lastest_pagination_counter = document.getElementById('lastest-pagination-counter');
  // document.getElementById('previous-trending-lastest').addEventListener('click', slidesLastestToLeft);
  // let lastest_item = document.getElementsByClassName('lastest-item-col');
  // var lastest_pagination_counter_value = 1;
  // lastest_pagination_counter.innerHTML = lastest_pagination_counter_value + ' / ' + (lastest_item.length - 1);
  // function slidesLastestToLeft() {
  //   if (lastest_movement <= 0) {
  //     lastest_movement = 0;
  //     for (var i = 0; i < lastest_item.length; i++) {
  //       lastest_item[i].style.transform = 'translateX(-'+lastest_movement+'%)';
  //     }
  //   } else {
  //     lastest_movement = lastest_movement - 100;
  //     lastest_pagination_counter_value = lastest_pagination_counter_value - 1;
  //     lastest_pagination_counter.innerHTML = lastest_pagination_counter_value + ' / ' + (lastest_item.length - 1);
  //     for (var i = 0; i < lastest_item.length; i++) {
  //       lastest_item[i].style.transform = 'translateX(-'+lastest_movement+'%)';
  //     }
  //   }
  // }
  //
  // document.getElementById('next-trending-lastest').addEventListener('click', slidesLastestToRight);
  // function slidesLastestToRight() {
  //   let calculate_movement = (lastest_item.length - 2) * 100;
  //   if (lastest_movement >= calculate_movement) {
  //     lastest_pagination_counter_value = lastest_pagination_counter_value;
  //     return;
  //   } else {
  //     lastest_movement = lastest_movement + 100;
  //     lastest_pagination_counter_value = lastest_pagination_counter_value + 1;
  //      lastest_pagination_counter.innerHTML = lastest_pagination_counter_value + ' / ' + (lastest_item.length - 1);
  //     for (var i = 0; i < lastest_item.length; i++) {
  //       lastest_item[i].style.transform = 'translateX(-'+lastest_movement+'%)';
  //     }
  //   }
  // }

  //  BEST-SELLERS
  // var best_seller_movement = 0;
  // var best_seller_pagination_counter = document.getElementById('best-seller-pagination-counter');
  // document.getElementById('previous-trending-best-seller').addEventListener('click', slidesBestSellertoLeft);
  // let best_seller_item = document.getElementsByClassName('best-seller-item-col');
  // var best_seller_pagination_counter_value = 1;
  // best_seller_pagination_counter.innerHTML = best_seller_pagination_counter_value + ' / ' + (best_seller_item.length - 1);
  // function slidesBestSellertoLeft() {
  //   if (best_seller_movement <= 0) {
  //     best_seller_movement = 0;
  //     for (var i = 0; i < best_seller_item.length; i++) {
  //       best_seller_item[i].style.transform = 'translateX(-'+best_seller_movement+'%)';
  //     }
  //   } else {
  //     best_seller_movement = best_seller_movement - 100;
  //     best_seller_pagination_counter_value = best_seller_pagination_counter_value - 1;
  //     best_seller_pagination_counter.innerHTML = best_seller_pagination_counter_value + ' / ' + (best_seller_item.length - 1);
  //     for (var i = 0; i < best_seller_item.length; i++) {
  //       best_seller_item[i].style.transform = 'translateX(-'+best_seller_movement+'%)';
  //     }
  //   }
  // }
  //
  // document.getElementById('next-trending-best-seller').addEventListener('click', slidesBestSellerToRight);
  // function slidesBestSellerToRight() {
  //   let calculate_movement = (best_seller_item.length - 2) * 100;
  //   if (best_seller_movement >= calculate_movement) {
  //     best_seller_pagination_counter_value = best_seller_pagination_counter_value;
  //     return;
  //   } else {
  //     best_seller_movement = best_seller_movement + 100;
  //     best_seller_pagination_counter_value = best_seller_pagination_counter_value + 1;
  //      best_seller_pagination_counter.innerHTML = best_seller_pagination_counter_value + ' / ' + (best_seller_item.length - 1);
  //     for (var i = 0; i < best_seller_item.length; i++) {
  //       best_seller_item[i].style.transform = 'translateX(-'+best_seller_movement+'%)';
  //     }
  //   }
  // }

  //Featured

  let featured_items = document.querySelectorAll('.carousel .carousel-item-featured')
  featured_items.forEach((el) => {
      const items_per_slide = 2;
      let next = el.nextElementSibling
      for (var i=1; i<items_per_slide; i++) {
          if (!next) {
            next = featured_items[0]
          }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
      }
  })

  //Featured Counter
  var featured_pagination_counter = document.getElementById('featured-pagination');
  document.getElementById('featured-prev').addEventListener('click', countsFeaturedPrev);
  document.getElementById('featured-next').addEventListener('click', countsFeaturedNext);
  let featured_item  = document.getElementsByClassName('carousel-item-featured');
  var featured_pagination_counter_value = 1;
  featured_pagination_counter.innerHTML = featured_pagination_counter_value + '  /  ' + (featured_item.length);

  function countsFeaturedPrev() {
    featured_pagination_counter_value --;
    if (featured_pagination_counter_value <= 0) {
      featured_pagination_counter_value = featured_item.length;
    }
    featured_pagination_counter.innerHTML = featured_pagination_counter_value + '  /  ' + (featured_item.length);
  }

  function countsFeaturedNext() {
    featured_pagination_counter_value ++;
    if (featured_pagination_counter_value >= featured_item.length + 1) {
      featured_pagination_counter_value = 1;
    }
    featured_pagination_counter.innerHTML = featured_pagination_counter_value + '  /  ' + (featured_item.length);
  }

  //Lastest
  let lastest_items = document.querySelectorAll('.carousel .carousel-item-lastest')
  lastest_items.forEach((el) => {
      const items_per_slide = 2;
      let next = el.nextElementSibling
      for (var i=1; i<items_per_slide; i++) {
          if (!next) {
            next = lastest_items[0]
          }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
      }
  })

  //Lastest Counter
  var lastest_pagination_counter = document.getElementById('lastest-pagination');
  document.getElementById('lastest-prev').addEventListener('click', countsLastestPrev);
  document.getElementById('lastest-next').addEventListener('click', countsLastestNext);
  let lastest_item  = document.getElementsByClassName('carousel-item-lastest');
  var lastest_pagination_counter_value = 1;
  lastest_pagination_counter.innerHTML = lastest_pagination_counter_value + '  /  ' + (lastest_item.length);

  function countsLastestPrev() {
    lastest_pagination_counter_value --;
    if (lastest_pagination_counter_value <= 0) {
      lastest_pagination_counter_value = lastest_item.length;
    }
    lastest_pagination_counter.innerHTML = lastest_pagination_counter_value + '  /  ' + (lastest_item.length);
  }

  function countsLastestNext() {
    lastest_pagination_counter_value ++;
    if (lastest_pagination_counter_value >= lastest_item.length + 1) {
      lastest_pagination_counter_value = 1;
    }
    lastest_pagination_counter.innerHTML = lastest_pagination_counter_value + '  /  ' + (lastest_item.length);
  }

  //Best Sellers
  let best_seller_items = document.querySelectorAll('.carousel .carousel-item-best-seller')
  best_seller_items.forEach((el) => {
      const items_per_slide = 2;
      let next = el.nextElementSibling
      for (var i=1; i<items_per_slide; i++) {
          if (!next) {
            next = best_seller_items[0]
          }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
      }
  })

  //Best Seller Counter
  var best_seller_pagination_counter = document.getElementById('best-seller-pagination');
  document.getElementById('best-seller-prev').addEventListener('click', countsBestSellerPrev);
  document.getElementById('best-seller-next').addEventListener('click', countsBestSellerNext);
  let best_seller_item  = document.getElementsByClassName('carousel-item-best-seller');
  var best_seller_pagination_counter_value = 1;
  best_seller_pagination_counter.innerHTML = best_seller_pagination_counter_value + '  /  ' + (best_seller_item.length);

  function countsBestSellerPrev() {
    best_seller_pagination_counter_value --;
    if (best_seller_pagination_counter_value <= 0) {
      best_seller_pagination_counter_value = best_seller_item.length;
    }
    best_seller_pagination_counter.innerHTML = best_seller_pagination_counter_value + '  /  ' + (best_seller_item.length);
  }

  function countsBestSellerNext() {
    best_seller_pagination_counter_value ++;
    if (best_seller_pagination_counter_value >= best_seller_item.length + 1) {
      best_seller_pagination_counter_value = 1;
    }
    best_seller_pagination_counter.innerHTML = best_seller_pagination_counter_value + '  /  ' + (best_seller_item.length);
  }

  //Category
  let category_items = document.querySelectorAll('.carousel .category-carousel-item')
  category_items.forEach((el) => {
      const items_per_slide = 6;
      let next = el.nextElementSibling
      for (var i=1; i<items_per_slide; i++) {
          if (!next) {
          	next = category_items[0]
        	}
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
      }
  })

//

  let partner_items = document.querySelectorAll('.carousel .partner-carousel-item')
  partner_items.forEach((el) => {
      const items_per_slide = 6;
      let next = el.nextElementSibling
      for (var i=1; i<items_per_slide; i++) {
          if (!next) {
          	next = partner_items[0]
        	}
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
      }
  })


  let blog_items = document.querySelectorAll('.carousel .blog-carousel-item')
  blog_items.forEach((el) => {
      const items_per_slide = 4;
      let next = el.nextElementSibling
      for (var i=1; i<items_per_slide; i++) {
          if (!next) {
          	next = blog_items[0]
        	}
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
      }
  })
