// 0308 헤더 메뉴 수정
$(".gnb li a").on("click", function () {
    $(".gnb li a").removeClass("active");
    $(this).addClass("active");
});

// lnb
// 0217 수정
$(".lnb_wrap li").on("click", function () {
    $(".lnb li").removeClass("on");
    $(this).addClass("on");
});

// pagination
$(".pagination ul li a").on("click", function () {
    $(".pagination ul li a").removeClass("active");
    $(this).addClass("active");
});

// 모달
$(window).scroll(function () {
    let scrTop = $(this).scrollTop();
    //순찰 계획 및 순찰 담당자 / 순찰자 검색
    $(".ptr_sch_btn").on("click", function (e) {
        e.preventDefault();
        $(".dim").css({ display: "block" });
        $(".ptr_modal_box").show();
        $(".ptr_modal_box").css({ top: scrTop + "px" });
        //$('body').css({'overflow' : 'hidden'})
    });

    //순찰 일지 관리 순찰 계획 명 검색
    $(".ptr_pl_sch_btn").on("click", function (e) {
        e.preventDefault();
        $(".dim").css({ display: "block" });
        $(".ptr_pl_modal_box").show();
        $(".ptr_pl_modal_box").css({ top: scrTop + "px" });
        //$('body').css({'overflow' : 'hidden'})
    });

    //순찰 일지 명 검색
    $(".ptr_log_sch_btn").on("click", function (e) {
        e.preventDefault();
        $(".dim").css({ display: "block" });
        $(".ptr_log_modal_box").show();
        $(".ptr_log_modal_box").css({ top: scrTop + "px" });
        //$('body').css({'overflow' : 'hidden'})
    });

    // 울타리 관리 번호 검색
    $(".fcnum_sch_btn").on("click", function (e) {
        e.preventDefault();
        $(".dim").css({ display: "block" });
        $(".fcnum_modal_box").show();
        $(".fcnum_modal_box").css({ top: scrTop + "px" });
        // $('body').css({'overflow' : 'hidden'})
    });

    // 공사 실명부 이름 검색
    $(".nm_list_sch_btn").on("click", function (e) {
        e.preventDefault();
        $(".dim").css({ display: "block" });
        $(".nm_list_modal_box").show();
        $(".nm_list_modal_box").css({ top: scrTop + "px" });
        //$('body').css({'overflow' : 'hidden'})
    });

    // 상단 클로즈 버튼
    $(".close").on("click", function () {
        $(".modal_box").hide();
        $(".dim").css({ display: "none" });
        //$('body').css({'overflow' : 'auto'})
    });

    // 하단 닫기 버튼
    $(".md_cancel_btn").on("click", function () {
        $(".modal_box").hide();
        $(".dim").css({ display: "none" });
        //$('body').css({'overflow' : 'auto'})
    });
});

// 탭
$(document).ready(function () {
    $(".tab_con").hide();
    $(".tab_con").first().show();
    $(".tab_menu li").on("click", function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $(".tab_menu li").removeClass("on");
        $(this).addClass("on");
        $(".tab_con").stop().hide();
        $(".tab_con").eq(idx).stop().show();
    });
});
//0217 수정
//순찰일지관리_등록,유지보수작업관리_등록,민원일지관리_등록 임시저장 버튼 클릭 탭 이동
$(".tab2_btn").click(function () {
    let href = $(this).attr("href");
    console.log(href);
    $(".tab_con").hide();
    $(href).show();
    $(".tab_menu li").removeClass("on");
    $(".tab_menu li:nth-child(2)").addClass("on");
});

$(".tab3_btn").click(function () {
    let href = $(this).attr("href");
    console.log(href);
    $(".tab_con").hide();
    $(href).show();
    $(".tab_menu li").removeClass("on");
    $(".tab_menu li:nth-child(3)").addClass("on");
});

$(".tab4_btn").click(function () {
    let href = $(this).attr("href");
    console.log(href);
    $(".tab_con").hide();
    $(href).show();
    $(".tab_menu li").removeClass("on");
    $(".tab_menu li:nth-child(4)").addClass("on");
});

// 0308 헤더 util

let sw = 0;
$(".util >a").on("click", function () {
    sw = !sw;
    if (sw) {
        $(".my_info").show();
        $(".util >a button").addClass("up_arrow");
    } else {
        $(".my_info").hide();
        $(".util >a button").removeClass("up_arrow");
    }
});

// header miniver
//hmbg_btn
$(".hmbg_btn").on("click", function (e) {
    $(".m_menu_btn").removeClass("active");
    e.preventDefault();
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".left_aside.forhmbg").removeClass("active");
        $(".dimm").removeClass("active");
        $("header").removeClass("active");
        $(".wrapper").removeClass("lock");
    } else {
        $(this).addClass("active");
        $(".left_aside.forhmbg").addClass("active");
        $(".dimm").addClass("active");
        $("header").addClass("active");
        $(".wrapper").addClass("lock");
    }
});

// 외부영역 클릭 시 창 닫기
$(document).mouseup(function (e) {
    e.stopPropagation();
    var nonTarget = $(".forhmbg, .hmbg_btn");
    if (nonTarget.has(e.target).length === 0) {
        nonTarget.removeClass("active");
        $(".forhmbg").removeClass("active");
        $(".hmbg_btn").removeClass("active");
        $(".lnb_wrap").removeClass("active");
        $(".dimm").removeClass("active");
        $("header").removeClass("active");
        $(".wrapper").removeClass("lock");
    }
});

//m_menu_btn
$(".m_menu_btn").on("click", function (e) {
    $(".hmbg_btn").removeClass("active");
    e.preventDefault();
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".left_aside.form_menu, .lnb_wrap").removeClass("active");
    } else {
        $(this).addClass("active");
        $(".left_aside.form_menu, .lnb_wrap").addClass("active");
    }
});

// 외부영역 클릭 시 창 닫기
$(document).mouseup(function (e) {
    e.stopPropagation();
    var nonTarget = $(".form_menu, .m_menu_btn");
    if (nonTarget.has(e.target).length === 0) {
        nonTarget.removeClass("active");
        $(".form_menu").removeClass("active");
        $(".m_menu_btn").removeClass("active");
        $(".lnb_wrap").removeClass("active");
    }
});

// map_pin action

$(".map_pin").on("click", function (e) {
    $(this).addClass("selected");
    $(".bottom_aside.formap_pin").addClass("active");
});

// 외부영역 클릭 시 검색창 닫기
$(document).mouseup(function (e) {
    e.stopPropagation();
    var nonTarget = $(".formap_pin, .hmbg_menu_btn.blck");
    if (nonTarget.has(e.target).length === 0) {
        nonTarget.removeClass("active");
        $(".formap_pin").removeClass("active");
        $(".map_pin").removeClass("selected");
    }
});

$(".hmbg_menu_btn.blck").on("click", function (e) {
    $(".map_pin").removeClass("selected");
    $(".bottom_aside.formap_pin").removeClass("active");
});

//필터버튼

// fltr search

$(".fltrwrap").on("click", function (e) {
    if ($(this).hasClass("on")) {
        $(this).removeClass("on");
        $(".bottom_aside.forfltr").removeClass("active");
    } else {
        $(this).addClass("on");
        $(".bottom_aside.forfltr").addClass("active");
    }
});

// 외부영역 클릭 시 검색창 닫기
$(document).mouseup(function (e) {
    e.stopPropagation();
    var nonTarget = $(".fltrwrap, .forfltr.active");
    if (nonTarget.has(e.target).length === 0) {
        $(".forfltr").removeClass("active");
        $(".fltrwrap").removeClass("on");
    }
});

$(".forfltr > ul > li a").on("click", function (e) {
    e.preventDefault();
    $(this).children("span").toggleClass("on");
});

$(".search_input").on("input", function () {
    if ($(".search_input input").val() == "") {
        $(".search_input").removeClass("on");
        $(".search_resultwrap").removeClass("on");
    } else {
        $(".search_input").addClass("on");
        $(".search_resultwrap").addClass("on");
    }
});

// 외부영역 클릭 시 검색창 닫기
$(document).mouseup(function (e) {
    e.stopPropagation();
    var nonTarget = $(".search_input, .search_resultwrap");
    if (nonTarget.has(e.target).length === 0) {
        $(".search_input").removeClass("on");
        $(".search_resultwrap").removeClass("on");
    }
});
