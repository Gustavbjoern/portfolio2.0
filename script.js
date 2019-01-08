window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("siden vises");
    showStart();
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#settings_knap").addEventListener("click", showSettings);
    document.querySelector("#luk_settings").addEventListener("click", quitSettings);
    document.querySelector("#spilscene").classList.remove("hide");

}

let points = 0;
let energy = 3;
let timeLeft = 30;
//let timeCounter = 4;
let musicOn = true;
let sfxOn = true;
let timeLeftTimeOut;

function showStart() {
    console.log("show start");
    document.querySelector("#startskaerm").classList.remove("hide");
    document.querySelector("#play_knap").classList.add("pulse");
    document.querySelector("#play_again").classList.add("hide");
    document.querySelector("#play_knap2").classList.add("hide");
    document.querySelector("#tid").classList.add("hide");

    document.querySelector("#play_knap").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hide start");
    document.querySelector("#startskaerm").classList.add("fade_out");
    document.querySelector("#settings_knap").classList.add("hide");
    document.querySelector("#play_again").classList.add("hide");
    document.querySelector("#play_knap2").classList.add("hide");


    showRules();
}

function showRules() {

    console.log("showRules");

    document.querySelector("#button_2").play();

    document.querySelector("#info").classList.remove("hide");
    document.querySelector("#play_knap").classList.add("fade_out");
    document.querySelector("#play_knap").classList.add("hide");
    document.querySelector("#tid").classList.add("hide");

    document.querySelector("#info_pop1").classList.add("pop_up");
    document.querySelector("#info_pop2").classList.add("pop_up");
    document.querySelector("#info_pop3").classList.add("pop_up");
    document.querySelector("#info_pop4").classList.add("pop_up");
    document.querySelector("#play_again").classList.add("hide");

    document.querySelector("#play_knap2").classList.remove("hide");
    document.querySelector("#play_knap2").classList.add("pulse");
    document.querySelector("#play_knap2").classList.add("pop_up");
    document.querySelector("#play_knap2").addEventListener("click", startGame);

    document.querySelector("#settings_knap2").classList.remove("hide");
    document.querySelector("#settings_knap2").addEventListener("click", showSettings2);

    //    clearTimeout(timeLeftFC);



}

function startGame() {
    console.log("startGame");
    document.querySelector("#button_2").play();
    document.querySelector("#musik").play();
    document.querySelector("#settings_knap2").classList.add("hide");
    document.querySelector("#info").classList.add("hide");
    document.querySelector("#spilscene").classList.remove("hide");


    document.querySelector("#play_again").classList.add("hide");
    document.querySelector("#tid").classList.remove("hide");



    document.querySelector("#ond_popup2").classList.remove("hide");
    document.querySelector("#ond_popup2").classList.add("pop_up");
    document.querySelector("#del2").addEventListener("click", clickDel);
    document.querySelector("#slet2").addEventListener("click", clickSlet);
    document.querySelector("#slet2").classList.add("pulse");
    document.querySelector("#del2").classList.add("pulse");

    document.querySelector("#god_popup4").classList.remove("hide");
    document.querySelector("#god_popup4").classList.add("pop_up");
    document.querySelector("#del4").addEventListener("click", clickDel2);
    document.querySelector("#slet4").addEventListener("click", clickSlet2);
    document.querySelector("#slet4").classList.add("pulse");
    document.querySelector("#del4").classList.add("pulse");


    nyPosition();
    nyPosition2();
    timeLeftFC();

}

/**DEL/SLETFUNKTIONER**/

function clickSlet() {
    console.log("clickSlet");


    if (this.parentElement.classList.contains("type1")) {

        points++;
        document.querySelector("#trash").play();

        this.parentElement.classList.add("hide");
        nulstil();

    } else if (this.parentElement.classList.contains("type2")) {
        points++;

        document.querySelector("#trash").play();
        this.parentElement.classList.add("hide");

        nulstil();

    } else if (this.parentElement.classList.contains("type3")) {
        energy--;
        document.querySelector("#omg").play();
        this.parentElement.classList.add("hide");

        nulstil();

    } else if (this.parentElement.classList.contains("type4")) {
        energy--;
        document.querySelector("#omg").play();
        this.parentElement.classList.add("hide");

        nulstil();

    }


    gameStatus();

}

function clickSlet2() {
    console.log("clickSlet2");
    console.log(this.parentElement);

    if (this.parentElement.classList.contains("type1")) {
        points++;
        this.parentElement.classList.add("hide");
        document.querySelector("#trash").play();
        console.log(points);

        nulstil2();

    } else if (this.parentElement.classList.contains("type2")) {
        points++;
        this.parentElement.classList.add("hide");
        document.querySelector("#trash").play();
        console.log(points);

        nulstil2();

    } else if (this.parentElement.classList.contains("type3")) {
        energy--;
        this.parentElement.classList.add("hide");
        console.log(energy);
        document.querySelector("#omg").play();
        nulstil2();

    } else if (this.parentElement.classList.contains("type4")) {
        energy--;
        this.parentElement.classList.add("hide");
        console.log(energy);
        document.querySelector("#omg").play();
        nulstil2();

    }

    gameStatus();
}

function clickDel() {
    console.log("clickdel");
    console.log(this.parentElement);

    if (this.parentElement.classList.contains("type1")) {
        energy--;
        console.log(energy);
        document.querySelector("#omg").play();

        this.parentElement.classList.add("hide");
        nulstil();
    } else if (this.parentElement.classList.contains("type2")) {
        energy--;
        console.log(energy);
        document.querySelector("#omg").play();


        this.parentElement.classList.add("hide");
        nulstil();
    } else if (this.parentElement.classList.contains("type3")) {
        points++;
        console.log(points);
        document.querySelector("#share").play();

        this.parentElement.classList.add("hide");
        nulstil();

    } else if (this.parentElement.classList.contains("type4")) {
        points++;
        console.log(points);
        document.querySelector("#share").play();

        this.parentElement.classList.add("hide");
        nulstil();

    }

    gameStatus();
}

function clickDel2() {
    console.log("clickDel2");
    console.log(this.parentElement);

    if (this.parentElement.classList.contains("type1")) {
        energy--;
        console.log(energy);
        document.querySelector("#omg").play();

        this.parentElement.classList.add("hide");
        nulstil2();
    } else if (this.parentElement.classList.contains("type2")) {
        energy--;
        console.log(energy);
        document.querySelector("#omg").play();

        this.parentElement.classList.add("hide");
        nulstil2();
    } else if (this.parentElement.classList.contains("type3")) {
        points++;
        console.log(points);

        document.querySelector("#share").play();
        this.parentElement.classList.add("hide");
        nulstil2();

    } else if (this.parentElement.classList.contains("type4")) {
        points++;
        console.log(points);

        document.querySelector("#share").play();
        this.parentElement.classList.add("hide");
        nulstil2();

    }

    gameStatus();
}


function nulstil() {
    console.log("nulstil");
    document.querySelector("#ond_popup2").removeAttribute("class");
    document.querySelector("#ond_popup2").classList.add("hide");
    //        myStopFunction();

    setTimeout(nyPosition, 100);
    //        startPopUpTime();

}

function nulstil2() {
    console.log("nulstil2");
    document.querySelector("#god_popup4").removeAttribute("class");
    document.querySelector("#god_popup4").classList.add("hide");
    //        myStopFunction2();
    setTimeout(nyPosition2, 100);

    //        startPopUpTime2();

}

//**DEL/SLETFUNKTIONER SLUT**/

function nyPosition() {
    console.log("nyPosition");
    let typeNr = Math.floor((Math.random() * 4) + 1);
    let position = Math.floor((Math.random() * 4) + 1);
    document.querySelector("#ond_popup2").classList.remove("hide");
    document.querySelector("#ond_popup2").classList.add("pop_up");
    document.querySelector("#ond_popup2").classList.add("type" + typeNr);
    document.querySelector("#ond_popup2").classList.add("position" + position);

}


function nyPosition2() {
    console.log("nyPosition2");
    let typeNr = Math.floor((Math.random() * 4) + 1);
    let position = Math.floor((Math.random() * 4) + 1);
    document.querySelector("#god_popup4").classList.remove("hide");
    document.querySelector("#god_popup4").classList.add("pop_up");
    document.querySelector("#god_popup4").classList.add("type" + typeNr);
    document.querySelector("#god_popup4").classList.add("position" + position);
}


function timeLeftFC() {
    console.log("timeLeftFC timeLeft er" + timeLeft);
    if (timeLeft > 0) {
        timeLeft--;
        timeLeftTimeOut = setTimeout(timeLeftFC, 1000);
        document.querySelector("#tid").innerHTML = timeLeft;
    } else if (timeLeft == 0) {
        checkGameOver();

    }
}

//function myStopFunction() {
//    clearTimeout(timeLeft);
//}


function gameStatus() {
    console.log("gameStatus");
    document.querySelector("#points").innerHTML = points;

    if (energy === 0) {
        gameOver();
        document.querySelector("#liv1").classList.add("hide");
    } else if (energy == 2) {
        document.querySelector("#liv3").classList.add("hide");
    } else if (energy == 1) {
        document.querySelector("#liv2").classList.add("hide");
    }


}

function checkGameOver() {
    console.log("checkgameover");
    if (points == 10) {
        levelComplete1();
    } else if (points == 11) {
        levelComplete1();
    } else if (points == 12) {
        levelComplete1();

    } else if (points == 13) {
        levelComplete1();
    } else if (points == 14) {
        levelComplete1();

    } else if (points == 15) {
        levelComplete2();
    } else if (points == 16) {
        levelComplete2();
    } else if (points == 17) {
        levelComplete2();
    } else if (points == 18) {
        levelComplete2();

    } else if (points == 19) {
        levelComplete2();
    } else if (points == 20) {
        levelComplete3();

    } else if (points == 21) {
        levelComplete3();
    } else if (points == 22) {
        levelComplete3();
    } else if (points == 23) {
        levelComplete3();

    } else if (points == 24) {
        levelComplete3();
    } else if (points == 25) {
        levelComplete3();

    } else if (points == 26) {
        levelComplete3();
    } else if (points == 27) {
        levelComplete3();

    }
    else if (points == 28) {
        levelComplete3();

    } else if (points == 29) {
        levelComplete3();
    } else if (points == 30) {
        levelComplete3();

    }

    else {
        gameOver();
    }
}


function gameOver() {
    clearTimeout(timeLeftTimeOut);
    console.log("gameOver");

    document.querySelector("#gameover_sound").play();
    document.querySelector("#musik").pause();

    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#play_again").classList.remove("hide");
    document.querySelector("#play_again").classList.add("pulse");
    document.querySelector("#tid").classList.add("hide");

    //    myStopFunction();
    document.querySelector("#play_again").addEventListener("click", restartGame);


}

function levelComplete1() {
    console.log("levelComplete");
    clearTimeout(timeLeftTimeOut);

    document.querySelector("#victory_sound").play();
    document.querySelector("#musik").pause();

    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#play_again").classList.remove("hide");
    document.querySelector("#play_again").classList.add("pulse");
    document.querySelector("#tid").classList.add("hide");
    document.querySelector("#highscore").innerHTML = "Points: " + points;



    document.querySelector("#play_again2").addEventListener("click", restartGame);

}

function levelComplete2() {
    console.log("levelComplete2");
    clearTimeout(timeLeftTimeOut);

    document.querySelector("#victory_sound").play();
    document.querySelector("#musik").pause();

    document.querySelector("#levelcomplete2").classList.remove("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#play_again").classList.remove("hide");
    document.querySelector("#play_again").classList.add("pulse");
    document.querySelector("#tid").classList.add("hide");
    document.querySelector("#highscore2").innerHTML = "Points: " + points;



    document.querySelector("#play_again3").addEventListener("click", restartGame);

}

function levelComplete3() {
    console.log("levelComplete3");
    clearTimeout(timeLeftTimeOut);

    document.querySelector("#victory_sound").play();
    document.querySelector("#musik").pause();

    document.querySelector("#levelcomplete2").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");

    document.querySelector("#levelcomplete3").classList.remove("hide");
    document.querySelector("#play_again").classList.remove("hide");
    document.querySelector("#play_again").classList.add("pulse");
    document.querySelector("#tid").classList.add("hide");
    document.querySelector("#highscore3").innerHTML = "Points: " + points;



    document.querySelector("#play_again4").addEventListener("click", restartGame);

}

function restartGame() {
    console.log("RESTART GAME");

    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#levelcomplete2").classList.add("hide");
    document.querySelector("#levelcomplete3").classList.add("hide");
    points = 0;
    energy = 3;
    timeLeft = 30;
    document.querySelector(".antal").textContent = points;
    document.querySelector("#tid").textContent = timeLeft;
    document.querySelector("#liv1").classList.remove("hide");
    document.querySelector("#liv2").classList.remove("hide");
    document.querySelector("#liv3").classList.remove("hide");
    document.querySelector("#ond_popup2").removeAttribute("class");
    document.querySelector("#god_popup4").removeAttribute("class");
    document.querySelector("#info_pop1").removeAttribute("class");
    document.querySelector("#info_pop2").removeAttribute("class");
    document.querySelector("#info_pop3").removeAttribute("class");
    document.querySelector("#info_pop4").removeAttribute("class");
    document.querySelector("#play_knap2").removeAttribute("class");


    showRules();

}

function showSettings() {
    console.log("showSettings");

    document.querySelector("#button").play();

    document.querySelector("#settings_menu").classList.remove("hide");
    document.querySelector("#luk_settings").classList.remove("hide");
    document.querySelector("#startskaerm").classList.add("blur");
    document.querySelector("#settings_knap").classList.add("blur");
    document.querySelector("#play_knap").classList.add("hide");
    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSfx);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);

}

function showSettings2() {
    console.log("showSettings");

    document.querySelector("#button").play();


    document.querySelector("#settings_menu").classList.remove("hide");
    document.querySelector("#luk_settings_2").classList.remove("hide");
    document.querySelector("#info").classList.add("blur");
    document.querySelector("#settings_knap2").classList.add("blur");
    document.querySelector("#play_knap2").classList.add("hide");
    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSfx);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);
    document.querySelector("#luk_settings_2").addEventListener("click", quitSettings2);

}

function quitSettings() {
    document.querySelector("#settings_menu").classList.add("hide");
    document.querySelector("#luk_settings").classList.add("hide");
    document.querySelector("#play_knap").classList.remove("hide");
    document.querySelector("#startskaerm").classList.remove("blur");
    document.querySelector("#settings_knap").classList.remove("blur");
    document.querySelector("#button_2").play();

}

function quitSettings2() {
    document.querySelector("#settings_menu").classList.add("hide");
    document.querySelector("#luk_settings_2").classList.add("hide");
    document.querySelector("#play_knap2").classList.remove("hide");
    document.querySelector("#info").classList.remove("blur");
    document.querySelector("#settings_knap2").classList.remove("blur");
    document.querySelector("#button_2").play();
}


function toggleMusic() {
    console.log("toggleMusic");

    if (musicOn == true) {
        musicOn = false;


        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").classList.add("on_off");

        document.querySelector("#music_sprite").addEventListener("animationend", musicTurnedOff);

        document.querySelector("#musik").muted = true;

    } else {
        musicOn = true;
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").classList.add("off_on");

        document.querySelector("#music_sprite").addEventListener("animationend", musicTurnedOn);
        document.querySelector("#musik").muted = false;

    }
}

function musicTurnedOn() {
    console.log("musicTurnedOn");
    document.querySelector("#music_sprite").classList.add("on");
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").removeEventListener("animationend", musicTurnedOn);
}

function musicTurnedOff() {
    console.log("musicTurnedOff");
    document.querySelector("#music_sprite").classList.add("off");
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").removeEventListener("animationend", musicTurnedOff);
}



function toggleSfx() {
    console.log("toggleSfx");

    if (musicOn == true) {
        musicOn = false;


        document.querySelector("#sfx_sprite").classList.remove("on");
        document.querySelector("#sfx_sprite").classList.add("on_off");

        document.querySelector("#sfx_sprite").addEventListener("animationend", sfxTurnedOff);

        document.querySelector("#omg").muted = true;
        document.querySelector("#trash").muted = true;
        document.querySelector("#share").muted = true;

    } else {
        musicOn = true;

        document.querySelector("#sfx_sprite").classList.remove("off");
        document.querySelector("#sfx_sprite").classList.add("off_on");

        document.querySelector("#sfx_sprite").addEventListener("animationend", sfxTurnedOn);
        document.querySelector("#omg").muted = false;
        document.querySelector("#trash").muted = false;
        document.querySelector("#share").muted = false;


    }
}

function sfxTurnedOn() {
    console.log("sfxTurnedOn");
    document.querySelector("#sfx_sprite").classList.add("on");
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").removeEventListener("animationend", sfxTurnedOn);
}

function sfxTurnedOff() {
    console.log("sfxTurnedOff");
    document.querySelector("#sfx_sprite").classList.add("off");
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").removeEventListener("animationend", sfxTurnedOff);
}

//SPIL SLUT!//

// lav ny timer der kører samtidig med main time.
// den skal 3 sekunder
//pop up forsvinder
//enten gain eller lose point/enery
//kald typer sjofel eller godt billed

//lav ny function kaldPopUp();
//functionen skal gøre 2 ting, tilføje popup og start ny time function.
//clearTimeout
//        startPopUpTime();
//        startPopUpTime2();

//let popUpTime;
//let popUpTime2;
//
//function startPopUpTime() {
//    popUp = document.querySelector("#ond_popup2");
//
//    popUpTime = setTimeout(function () {
//        console.log('startpopuptime');
//
//        if (popUp.classList.contains("type1")) {
//            energy--;
//            //            console.log(energy);
//
//            popUp.classList.add("hide");
//
//        } else if (popUp.classList.contains("type2")) {
//            energy--;
//            //            console.log(energy);
//
//            popUp.classList.add("hide");
//
//        } else if (popUp.classList.contains("type3")) {
//            points++;
//            //            console.log(points);
//
//            popUp.classList.add("hide");
//
//
//        } else if (popUp.classList.contains("type4")) {
//            points++;
//            //            console.log(points);
//            popUp.classList.add("hide");
//
//        }
//
//        nulstil();
//        gameStatus();
//
//    }, 5000);
//}
//
//function myStopFunction() {
//    clearTimeout(popUpTime);
//}
//
//function startPopUpTime2() {
//    popUp = document.querySelector("#god_popup4");
//
//    popUpTime2 = setTimeout(function () {
//        console.log('startpopuptime2');
//
//        if (popUp.classList.contains("type1")) {
//            energy--;
//            //            console.log(energy);
//
//            popUp.classList.add("hide");
//
//        } else if (popUp.classList.contains("type2")) {
//            energy--;
//            //            console.log(energy);
//
//            popUp.classList.add("hide");
//
//        } else if (popUp.classList.contains("type3")) {
//            points++;
//            //            console.log(points);
//
//            popUp.classList.add("hide");
//
//
//        } else if (popUp.classList.contains("type4")) {
//            points++;
//            //            console.log(points);
//            popUp.classList.add("hide");
//
//        }
//
//
//        nulstil2();
//        gameStatus();
//
//    }, 5000);
//}
//
//function myStopFunction2() {
//    clearTimeout(popUpTime2);
//}





//function popTime() {
//    setInterval(function () {
//        if (timeCounter === 0) {
//            newPicNoClick();
//            timeCounter = 4;
//        }
//        timeCounter--;
//        console.log("timecounter" + counter)
//
//    }, 1000)
//}
//
//
//function newPicNoClick() {
//    let picture = document.querySelector("#ond_popup2");
//    picture.className = "";
//    picture.classList.add("typeNr" + Math.floor((Math.random() * 4) + 1));
//    picture.classList.add("position" + Math.floor((Math.random() * 4) + 1));
//
//
//}
