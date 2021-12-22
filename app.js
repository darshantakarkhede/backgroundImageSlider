(function() {
let button = document.querySelectorAll('.btn');
let picture = document.querySelector('.bg-img');
let slider = ['img-1','img-2','img-3','img-4'];
let i = 0;
button.forEach(function (button) {
    button.addEventListener("click",
        function (e) {
            if (button.classList.contains('prevImg')) {
                i--;
                if(i < 0){
                    i = slider.length-1
                  }
                picture.src = 'image/' + slider[i] + '.jpg'

                    
                
            }
            if (button.classList.contains('nxtImg')) {
                i++;
                if(i > slider.length-1){
                    i =0;
                  }
                  picture.src = 'image/' + slider[i] + '.jpg'
            }

        }
    )
}
)
})()