setTimeout(function () {
    console.log(10);
    document.getElementById("show").innerText = 10;
    document.body.style.backgroundColor = "deeppink"
    setTimeout(function () {
        console.log(9);
        document.getElementById("show").innerText = 9;
        document.body.style.backgroundColor = "blue"
        setTimeout(function () {
            console.log(8);
            document.getElementById("show").innerText = 8;
            document.body.style.backgroundColor = "pink"
            setTimeout(function () {
                console.log(7);
                document.getElementById("show").innerText = 7;
                document.body.style.backgroundColor = "green"
                setTimeout(function () {
                    console.log(6);
                    document.getElementById("show").innerText = 6;
                    document.body.style.backgroundColor = "red"
                    setTimeout(function () {
                        console.log(5);
                        document.getElementById("show").innerText = 5;
                        document.body.style.backgroundColor = "lightblue"
                        setTimeout(function () {
                            console.log(4);
                            document.getElementById("show").innerText = 4;
                            document.body.style.backgroundColor = "lightgreen"
                            setTimeout(function () {
                                console.log(3);
                                document.getElementById("show").innerText = 3;
                                document.body.style.backgroundColor = "orange"
                                setTimeout(function () {
                                    console.log(2);
                                    document.getElementById("show").innerText = 2;
                                    document.body.style.backgroundColor = "crimson"
                                    setTimeout(function () {
                                        console.log(1);
                                        document.getElementById("show").innerText = 1;
                                        document.body.style.backgroundColor = "violet"
                                        setTimeout(function () {
                                            console.log(1);
                                            document.getElementById("show").innerText = "Happy Independence Day";
                                            document.body.style.backgroundColor = "hotpink"
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);

        }, 1000)
    }, 1000)
}, 1000)