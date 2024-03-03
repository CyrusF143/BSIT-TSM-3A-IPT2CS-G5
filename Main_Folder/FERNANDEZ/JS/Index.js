


    const circles = document.querySelectorAll('.circle_2');
    circles.forEach(elem=>{
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots*marked/100);
        var points = "";
        var rotate = 360 / dots;
    
        for(let i = 0 ; i < dots ; i++){
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;
    
        const pointsMarked = elem.querySelectorAll('.points');
        for (let i = 0 ; i<percent ; i++){
            pointsMarked[i].classList.add('marked')
        }
    })

    const coords = { x: 0, y: 0 };
    const circles1 = document.querySelectorAll(".circle");
    
    const colors = [
      "#ffb56b",
      "#fdaf69",
      "#f89d63",
      "#f59761",
      "#ef865e",
      "#ec805d",
      "#e36e5c",
      "#df685c",
      "#d5585c",
      "#d1525c",
      "#c5415d",
      "#c03b5d",
      "#b22c5e",
      "#ac265e",
      "#9c155f",
      "#950f5f",
      "#830060",
      "#7c0060",
      "#680060",
      "#60005f",
      "#48005f",
      "#3d005e"
    ];
    
    circles1.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });
    
    window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
      
    });
    
    function animateCircles() {
      
      let x = coords.x;
      let y = coords.y;
      
      circles1.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        circle.style.scale = (circles1.length - index) / circles1.length;
        
        circle.x = x;
        circle.y = y;
    
        const nextCircle = circles1[index + 1] || circles1[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
     
      requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
    

