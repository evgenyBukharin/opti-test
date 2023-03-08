import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);
const swiper = new Swiper(document.querySelector(".swiper"), {
	spaceBetween: 20,
	breakpoints: {
		1025: {
			slidesPerView: 4,
		},
		769: {
			slidesPerView: 3,
		},
		426: {
			slidesPerView: 2,
		},
	},
	navigation: {
		nextEl: document.querySelector(".hero__btn-next"),
		prevEl: document.querySelector(".hero__btn-prev"),
		disabledClass: "hero__btn-disabled",
	},
});
