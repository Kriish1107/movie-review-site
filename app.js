document.addEventListener('DOMContentLoaded', function() {
    let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
    let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
    let cards = document.getElementsByClassName('cards')[0];
    let search = document.getElementsByClassName('search')[0];

    left_btn.addEventListener('click', () => {
        cards.scrollLeft -= 200;
    });

    right_btn.addEventListener('click', () => {
        cards.scrollLeft += 200;
    });

    let json_url = "home.json";
    fetch(json_url)
        .then(response => response.json())
        .then((data) => {
            data.forEach((ele, i) => {
                let { name, date, genre, sposter, bposter ,imdb, url } = ele;
                let card = document.createElement('a');
                card.classList.add('card');
                card.href = url;
                card.innerHTML = `
                    <img src="${sposter}" alt="${name}" class="poster">
                    <div class="restcard">
                        <img src="${bposter}" >
                        <div class="descrip">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                            </div>
                        </div>
                    </div>`;
                cards.appendChild(card);
            });

            document.getElementById("title").innerText = data[0].name;
            document.getElementById("genre").innerText = data[0].genre;
            document.getElementById("date").innerText = data[0].date;
            document.getElementById("ratings").innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i> ${data[0].imdb}`;

            data.forEach((ele, i) => {
                let { name, date, genre, sposter,imdb } = ele;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="${sposter}">
                    <div class="cont"><h3>${name}</h3>
                        <p>${genre}, ${date}, <span>IMBD</span><i class="bi bi-star-fill"></i>${imdb}</p>
                    </div>`;
                search.appendChild(card);
            });
        });
    

        var app = angular.module("myApp", []);

        app.controller("searchCtrl", function($scope) {
            $scope.searchText = ""; 
        
           
            $scope.data = [
                { },
               
            ];
        });
        


    const loginForm = document.getElementById('lform');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;

        if (username === 'admin' && password === 'admin123!') {
            if (request.ip === '127.0.0.1') {
                window.location.href = 'http://127.0.0.1/index.html';
            }
        }        
    });
});
