console.log("JavaScript読み込みOK!")
document.addEventListener("DOMContentLoaded", function () {
    const leafImages = [
      "img/leaf.1.png",
      "",
     
    ];
  
    for (let i = 0; i < 20; i++) {
      const leaf = document.createElement("img");
      leaf.src = leafImages[Math.floor(Math.random() * leafImages.length)];
      leaf.className = "falling-leaf";
      leaf.style.top = "-100px"
      leaf.style.left = Math.random() * 100 + "vw";
      leaf.style.animationDelay = Math.random() * 5 + "s";
      leaf.style.animationDuration = 5 + Math.random() * 5 + "s";
      document.body.appendChild(leaf);
    }
  });

  window.addEventListener('scroll', function() {
    const leaf = document.querySelector('.falling-leaf');
    const menu = document.querySelector('.menu'); // メニューの要素取得
    const menuTop = menu.getBoundingClientRect().top + window.scrollY;
  
    if (window.scrollY + window.innerHeight >= menuTop) {
      // メニューが画面に入ったら葉っぱ非表示
      leaf.style.display = 'none';
    } else {
      // まだメニューより上なら表示
      leaf.style.display = 'block';
    }
  });

  window.addEventListener('scroll', () => {
    const moon = document.querySelector('.moon');
    const cloudMenu = document.querySelector('.cloud-menu');
    const triggerPoint = window.innerHeight * 0.7;
  
    if (moon.getBoundingClientRect().top < triggerPoint) {
      moon.style.opacity = '1';
      moon.style.transform = 'scale(1)';
    }
  
    if (cloudMenu.getBoundingClientRect().top < triggerPoint) {
      cloudMenu.style.opacity = '1';
      cloudMenu.style.transform = 'translateX(0)';
    }
  });

  const moon = document.querySelector('.moon');
  moon.style.opacity = "1";
  moon.style.transform = 'scale(1) translateY(0)';

  window.addEventListener('scroll', function () {
    const menuSection = document.querySelector('.menu-section');
    
  
    // 月が画面上部に近づいたらクラス追加
    const moonRect = moon.getBoundingClientRect();
    if (moonRect.top < window.innerHeight * 0.5) {
      menuSection.classList.add('scrolled');
    } else {
      menuSection.classList.remove('scrolled');
    }
  });

  document.getElementById('fog1').addEventListener('click', () => {
    document.getElementById('fog1').classList.add('hidden');
    document.getElementById('fog2').classList.add('hidden');
  });

  document.getElementById('fog1').addEventListener('click', () => {
    document.getElementById('fog1').classList.add('hidden');
    document.getElementById('fog2').classList.add('hidden');
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".menu-img");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    images.forEach(img => observer.observe(img));
  });


  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".menu-img");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.5 // ← 50%入ったら表示に変更
    });
  
    images.forEach(img => observer.observe(img));
  });

  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".menu-img, .fade-in");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.5
    });
  
    images.forEach(img => observer.observe(img));
  });

  document.addEventListener("DOMContentLoaded", function () {
    // タイトル表示（ふわっと）
    const newsTitle = document.querySelector(".news-title");
    if (newsTitle) {
      const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            titleObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      titleObserver.observe(newsTitle);
    }
  
    // リスト順番に表示（親をトリガーにする）
    const newsSection = document.querySelector(".news-section");
    if (newsSection) {
      const listObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          console.log("entryきてる？",entry.tar)
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("li.fade-in");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, index * 300);
            });
            listObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      listObserver.observe(newsSection);
    }
  });