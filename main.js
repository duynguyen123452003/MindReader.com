var eye = document.querySelector('i');
var input = document.querySelector('.input__number');
eye.addEventListener('click',function(){
    if(eye.classList.value == 'fa-solid fa-eye'){
        eye.setAttribute('class','fa-solid fa-eye-slash');
        input.type = 'text';
    }else{
        eye.setAttribute('class','fa-solid fa-eye');
        input.type = 'password';
    }
})

input.oninput = function(){
    eye.style.display = 'inline-block';
    if(input.value === ''){
        input.onblur = function(){
            eye.style.display = 'none';
        }
    }else{
        input.onblur = function(){
            eye.style.display = 'inline-block';
        }
    }
}

var btn = document.querySelector('.btn');
var overlay = document.querySelector('.overlay');
var load = document.querySelector('.loader');
var loadText = document.querySelector('.loader__text');
var alert = document.querySelector('.alert');

btn.addEventListener('click',function(){
    if(input.value >=0 && input.value <= 9999 && input.value != ''){
        overlay.style = 'display: block;';
        load.style = 'display: block;';
        loadText.style = 'display: block;';
        function loading(datas){
            return new Promise(function(resolve){
                setTimeout(function(){
                    resolve(datas.value);
                },2000);
            });
        }
    
        loading(loadText)
            .then(function(){
                var data = loadText.innerText = 'Kết nối với bộ não ...';
                return new Promise(function(resolve){
                    setTimeout(function(){
                        resolve(data);
                    },2000);
                });
            })
            .then(function(data){
                var data = loadText.innerText = 'Lọc bộ nhớ ngắn hạn ...';
                alert.innerText = 'Cảnh báo:Thiếu Iốt...';
                alert.style = 'display: block;';
                return new Promise(function(resolve){
                    setTimeout(function(){
                        resolve(data);
                    },2000);
                });
            })
            .then(function(data){
                alert.style.animation = 'alertRemove linear 0.9s';
                alert.style.opacity = '0';
                var data = loadText.innerText = 'Lọc các số từ 0 đến 9 ...';
                return new Promise(function(resolve){
                    setTimeout(function(){
                        resolve(data);
                    },2000);
                });
            })
            .then(function(data){
                var data = loadText.innerText = 'Lọc số cuối cùng ...';
                return new Promise(function(resolve){
                    setTimeout(function(){
                        resolve(data);
                    },2000);
                });
            })
            .then(function(data){
                var boxNumber = document.querySelector('.overlay-black');
                var num = document.querySelector('.number');
                var btnClose = document.querySelector('.btn-close');
                overlay.style = 'display: none;';
                boxNumber.style = 'display: block;';
                num.innerText = input.value;
                btnClose.addEventListener('click',function(){
                    boxNumber.style = 'display: none;';
                })
            })
    }else{
        alert.innerText = 'Vui lòng nhập các số từ 0 đến 9999';
        alert.style = 'display: block; background-color: #ED4337;';
        setTimeout(function(){
            alert.style.animation = 'alertRemove linear 0.9s';
            alert.style.opacity = '0';
        },3000);
    }
})
