$(function(){
    $('.tabnav li').click(function(){
        $('.tabnav li').removeClass('on')
        $(this).addClass('on')
    })

    $('.tabmenu li').click(function(){
        $('.tabmenu li').removeClass('onn')
        $(this).addClass('onn')
        $('.tworks').hide()

        let idx = $(this).index()
        $('.tworks').eq(idx).show()   
    })
    $('.tabmenu li').eq(0).trigger('click')



    // $('#designcoding .twork').click(function() {
    //     let popidx = $(this).index();
    //     let $popup = $('.popupbox1 .popup').eq(popidx);
        
    //     if (popidx >= 0 && popidx < $('.popupbox1 .popup').length) {
    //         $popup.addClass('show'); // 팝업 표시
    //         $('body').addClass('no-scroll'); // 스크롤 제거
    //     }
    // });

    
    // // 팝업 닫기 버튼 기능
    // $('.close').click(function() {
    //     $(this).closest('.popup').removeClass('show'); // 팝업 숨김
    //     $('body').removeClass('no-scroll'); // 스크롤 복원
    // });

    // $('#design .twork').click(function() {
    //     let popidx = $(this).index();
    //     let $popup = $('.popupbox2 .popup').eq(popidx);
        
    //     if (popidx >= 0 && popidx < $('.popupbox2 .popup').length) {
    //         $popup.addClass('show'); // 팝업 표시
    //         $('body').addClass('no-scroll'); // 스크롤 제거
    //     }
    // });
  

    // $('#coding .twork').click(function() {
    //     let popidx = $(this).index();
    //     let $popup = $('.popupbox3 .popup').eq(popidx);
        
    //     if (popidx >= 0 && popidx < $('.popupbox3 .popup').length) {
    //         $popup.addClass('show'); // 팝업 표시
    //         $('body').addClass('no-scroll'); // 스크롤 제거
    //     }
    // });

    $('#designcoding .twork').click(function(){
        let popidx = $(this).index()
        $('.popupbox1 .popup').eq(popidx).addClass('show')
        $('body').addClass('no-scroll'); // 스크롤 제거
    })

    $('.close').click(function(){
        $(this).closest('.popup').removeClass('show')
        $('body').removeClass('no-scroll'); // 스크롤 복원
    })

    $('#design .twork').click(function(){
        let popidx = $(this).index()
        $('.popupbox2 .popup').eq(popidx).addClass('show')
        $('body').addClass('no-scroll')
    })


    $('#coding .twork').click(function(){
        let popidx = $(this).index()
        $('.popupbox3 .popup').eq(popidx).addClass('show')
        $('body').addClass('no-scroll')
    })



});


function enableDraggable(selector) {
    const draggableElements = document.querySelectorAll(selector);

    draggableElements.forEach(draggableEle => {
        let isDragging = false;
        let dragStartX, dragStartY;
        let initTranslateX = 0, initTranslateY = 0;

        const onPointerDown = (e) => {
            e.preventDefault();
            isDragging = true;
            const { pageX, pageY } = getPointerPosition(e);
            dragStartX = pageX;
            dragStartY = pageY;

            const transform = window.getComputedStyle(draggableEle).transform;
            if (transform !== 'none') {
                const matrix = new DOMMatrixReadOnly(transform);
                initTranslateX = matrix.m41;
                initTranslateY = matrix.m42;
            } else {
                initTranslateX = 0;
                initTranslateY = 0;
            }
        };

        const onPointerMove = (e) => {
            if (!isDragging) return;
            const { pageX, pageY } = getPointerPosition(e);

            const moveX = pageX - dragStartX;
            const moveY = pageY - dragStartY;

            const translateX = initTranslateX + moveX;
            const translateY = initTranslateY + moveY;
            draggableEle.style.transform = `translate(${translateX}px, ${translateY}px)`;
        };

        const onPointerUp = () => {
            isDragging = false;
        };

        // Add event listeners for mouse/touch
        draggableEle.addEventListener('mousedown', onPointerDown);
        document.addEventListener('mousemove', onPointerMove);
        document.addEventListener('mouseup', onPointerUp);

        draggableEle.addEventListener('touchstart', onPointerDown);
        document.addEventListener('touchmove', onPointerMove);
        document.addEventListener('touchend', onPointerUp);
    });

    // Helper function to get pointer position
    function getPointerPosition(e) {
        let pageX, pageY;
        if (e.touches && e.touches.length > 0) {
            pageX = e.touches[0].pageX;
            pageY = e.touches[0].pageY;
        } else {
            pageX = e.pageX;
            pageY = e.pageY;
        }
        return { pageX, pageY };
    }
};


document.addEventListener('mousemove', (event) => {
    const eye = document.querySelector('.cursor-eye');
    const eyeBall = eye.querySelector('.eye-ball');
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
    const eyeBallX = Math.cos(angle) * 10; // 눈동자 이동 범위 조절
    const eyeBallY = Math.sin(angle) * 10;
  
    eye.style.left = `${event.clientX - eyeRect.width / 2}px`;
    eye.style.top = `${event.clientY - eyeRect.height / 2}px`;
    eyeBall.style.transform = `translate(${eyeBallX}px, ${eyeBallY}px)`;
  });
