console.log('Hello World!');

window.addEventListener('load', function () {
    console.log('DOM loaded');
    var username = document.getElementById('uname').value;
    var password = document.getElementById('pwd').value;
    console.log(username);
    console.log(password);
    this.document.getElementById('loginform').addEventListener('submit', function (e) {
        e.preventDefault();
        var username = document.getElementById('uname').value;
    var password = document.getElementById('pwd').value;
        console.log('Button clicked');
        console.log(username);
        console.log(password);
        var b=["test1","test2","test3","test4"]
        var p=["pass1","pass2","pass3","pass4"]
        if(b.includes(username) && p.includes(password))
            window.location.href="./dashboard.html";
    });
});



//console.log(password.innerText);
