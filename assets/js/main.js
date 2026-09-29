  (function(){
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('mobileMenu');
    toggle.addEventListener('click', function(){
      menu.classList.toggle('open');
      var open = menu.classList.contains('open');
      toggle.innerHTML = open ? '<i class="ph ph-x"></i>' : '<i class="ph ph-list"></i>';
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        menu.classList.remove('open');
        toggle.innerHTML = '<i class="ph ph-list"></i>';
      });
    });

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!prefersReduced && 'IntersectionObserver' in window){
      var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
      document.querySelectorAll('.reveal').forEach(function(el){ observer.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
    }

    var counters = document.querySelectorAll('.num[data-count]');
    function animateCount(el){
      var target = parseInt(el.getAttribute('data-count'), 10);
      if(prefersReduced || isNaN(target)){ el.textContent = target; return; }
      var duration = 1400;
      var start = null;
      function ease(t){ return 1 - Math.pow(1 - t, 3); }
      function step(ts){
        if(start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        el.textContent = Math.round(ease(progress) * target);
        if(progress < 1){ requestAnimationFrame(step); }
      }
      requestAnimationFrame(step);
    }
    if(counters.length){
      if(!prefersReduced && 'IntersectionObserver' in window){
        var countObserver = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if(entry.isIntersecting){
              animateCount(entry.target);
              countObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        counters.forEach(function(el){ countObserver.observe(el); });
      } else {
        counters.forEach(function(el){ animateCount(el); });
      }
    }

    var track = document.querySelector('[data-slide-track]');
    if(track){
      var prevBtn = document.querySelector('[data-slide-prev]');
      var nextBtn = document.querySelector('[data-slide-next]');
      var slides = track.querySelectorAll('.testi-slide');
      function slideStep(){
        var first = slides[0];
        return first ? first.getBoundingClientRect().width + 20 : 300;
      }
      function updateNavState(){
        var max = track.scrollWidth - track.clientWidth - 4;
        prevBtn.disabled = track.scrollLeft <= 4;
        nextBtn.disabled = track.scrollLeft >= max;
      }
      prevBtn.addEventListener('click', function(){
        track.scrollBy({ left: -slideStep(), behavior: prefersReduced ? 'auto' : 'smooth' });
      });
      nextBtn.addEventListener('click', function(){
        track.scrollBy({ left: slideStep(), behavior: prefersReduced ? 'auto' : 'smooth' });
      });
      track.addEventListener('scroll', function(){
        window.requestAnimationFrame(updateNavState);
      });
      window.addEventListener('resize', updateNavState);
      updateNavState();
    }

    var loadMoreBtn = document.getElementById('workLoadMore');
    if(loadMoreBtn){
      loadMoreBtn.addEventListener('click', function(){
        document.querySelectorAll('.work-card-extra.is-hidden').forEach(function(card){
          card.classList.remove('is-hidden');
          card.classList.add('in');
        });
        loadMoreBtn.remove();
      });
    }
  })();
