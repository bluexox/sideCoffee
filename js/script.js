$(document).ready(function () {

    // Header Scroll Event
    $(function () {
        var prevScrollTop = 0;
        document.addEventListener("scroll", function () {
            // Check screen width
            if (window.innerWidth > 427) {
                var nowScrollTop = $(window).scrollTop();

                if (nowScrollTop > prevScrollTop) {
                    $('#header').addClass('active');
                } else {
                    $('#header').removeClass('active');
                }
                prevScrollTop = nowScrollTop;
            } else {
                $('#header').removeClass('active'); // Ensure the header is not active for narrow screens
            }
        });
    });

    document.getElementById("goTop").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    var swiper = new Swiper(".interiorShow", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $(document).ready(function () {
        // 첫 번째 콘텐츠 보이기
        $(".tab-content").hide();
        $(".tab-content:first").show();

        // 탭 버튼 클릭 이벤트
        $(".tab-menu .tab-item").click(function (e) {
            e.preventDefault();

            // 버튼 활성화
            $(this).addClass("active").siblings().removeClass("active");

            // data-tab 값 가져오기
            const target = $(this).data("tab");

            // 해당 콘텐츠만 보이고 나머지는 숨김
            $("#" + target).fadeIn(300).siblings(".tab-content").hide();

            // Swiper 업데이트 (깨짐 방지)
            const swiperEl = $("#" + target).find(".swiper")[0];
            if (swiperEl && swiperEl.swiper) {
                swiperEl.swiper.update();
            }
        });

        // Coffee (자동 무한 루프)
        new Swiper(".coffee-swiper", {
            slidesPerView: 5,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 20,
            loop: true,
            loopedSlides: 30,
            autoplay: { delay: 0, disableOnInteraction: false },
            speed: 2500,
            allowTouchMove: false,
            breakpoints: {
                0: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
            },
        });

        // Non-Coffee (자동 무한 루프)
        new Swiper(".non-coffee-swiper", {
            slidesPerView: 4,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 20,
            loop: true,
            loopedSlides: 30,
            autoplay: { delay: 0, disableOnInteraction: false },
            speed: 2500,
            allowTouchMove: false,
            breakpoints: {
                0: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            },
        });

        new Swiper(".blended-swiper", {
            slidesPerView: "auto",   // grid 대신 auto
            spaceBetween: 20,
            loop: true,              // 무한 루프
            speed: 5000,             // 속도 (값이 클수록 천천히)
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            allowTouchMove: false,   // 드래그 막기
        });

        new Swiper(".ade-swiper", {
            slidesPerView: 2,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 20,
            allowTouchMove: false,
            centeredSlides: true,
        });

        // Tea (고정, 2줄 중앙정렬)
        new Swiper(".tea-swiper", {
            slidesPerView: 5,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 20,
            allowTouchMove: false,
            centeredSlides: true,
        });

        // Juice (고정, 2줄 중앙정렬)
        new Swiper(".juice-swiper", {
            slidesPerView: 3,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 20,
            allowTouchMove: false,
            centeredSlides: true,
        });
    });

});