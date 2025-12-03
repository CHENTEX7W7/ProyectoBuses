document.addEventListener('DOMContentLoaded', function(){
    const revealElements = document.querySelectorAll('.reveal');
    const options = {threshold:0.08};
    const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                entry.target.classList.add(getAnimationByElement(entry.target));
                io.unobserve(entry.target);
            }
        });
    },options);
    revealElements.forEach(el=>io.observe(el));

    function getAnimationByElement(el){
        if(el.closest('.hero')) return 'slide-in';
        if(el.closest('.bento')) return 'zoom-in';
        if(el.closest('.carousel')) return 'fade-in';
        return 'fade-in';
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(c=>{
        c.addEventListener('click', ()=>{ window.scrollTo({top:document.querySelector('.bento').offsetTop - 60, behavior:'smooth'})});
    });

    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    const dotsContainer = document.querySelector('.carousel-dots');
    const itemWidth = items[0].getBoundingClientRect().width + 12;
    let index = 0;
    let autoplay = true;
    let autoplayInterval;

    items.forEach((item, i)=>{
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if(i===0) dot.classList.add('active');
        dot.addEventListener('click', ()=>{goToSlide(i)});
        dotsContainer.appendChild(dot);
    });

    function updateDots(){
        const dots = Array.from(dotsContainer.children);
        dots.forEach(d=>d.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function goToSlide(i){
        index = i;
        const moveX = - (itemWidth * index);
        track.style.transform = `translateX(${moveX}px)`;
        updateDots();
    }

    nextBtn.addEventListener('click', ()=>{ index = Math.min(index + 1, items.length - getVisibleCount()); goToSlide(index); resetAutoplay()});
    prevBtn.addEventListener('click', ()=>{ index = Math.max(index - 1, 0); goToSlide(index); resetAutoplay()});

    function getVisibleCount(){
        const vw = window.innerWidth;
        if(vw < 720) return 1;
        if(vw < 1100) return 2;
        return 4;
    }

    function startAutoplay(){
        stopAutoplay();
        autoplayInterval = setInterval(()=>{
            index = (index + 1) % items.length;
            if(index > items.length - getVisibleCount()) index = 0;
            goToSlide(index);
        },3500);
    }

    function stopAutoplay(){ if(autoplayInterval) clearInterval(autoplayInterval) }
    function resetAutoplay(){ if(autoplay) { stopAutoplay(); startAutoplay() } }

    window.addEventListener('resize', ()=>{
        const newItemWidth = items[0].getBoundingClientRect().width + 12;
        if(newItemWidth !== itemWidth) goToSlide(0);
    });

    if(autoplay) startAutoplay();

    const revealOnLoad = document.querySelectorAll('.hero-text, .hero-img, .bento-title');
    revealOnLoad.forEach((el,i)=>{ setTimeout(()=> el.classList.add('visible'), 160 * (i+1)) });
});
