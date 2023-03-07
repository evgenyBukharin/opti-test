import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);
const swiper = new Swiper(document.querySelector(".swiper"), {
	slidesPerView: 4,
	spaceBetween: 20,
	navigation: {
		nextEl: document.querySelector(".hero__btn-next"),
		prevEl: document.querySelector(".hero__btn-prev"),
		disabledClass: "hero__btn-disabled",
	},
});
