function divShow() {
    document.getElementById('game').style.display = block;
}

function game_rate() {
    satisfied = prompt("Rate this game please (from a scale of 1 to 5):  ");
    if (satisfied < "3")
        document.getElementById('game').innerHTML = ("hmm! you didn't like the game I'll try to satisfied you next time!")
    else if (satisfied > "3")
        document.getElementById('game').innerHTML = ("Yeah! you loved the game, Thank you!!!!")
    else if (satisfied === "3")
        document.getElementById('game').innerHTML = ("THANKS!")
    else
        document.getElementById('game').innerHTML = ("No rate from you, that's fair too!")

}

function outliers_answers() {
    let a = "You have not chosen a valid option,"
    let b = " Therefore the game is closing.."
    let c = " feel free to play back if you're willing to commit to its rules"
    let d = " ..."
    let e = " Bye for now!!!!!"
    document.getElementById('game').innerHTML = a + b + c + d + e;
}

function start_message() {
    alert("Ok I will guess your favorite color in this game OK?" );

    /*if (prmpt === "yes")
        document.getElementById('game').innerHTML = "Awsome! let's start!!!"
    else if (prmpt !== "yes" || prompt !== "no") {
        let response = prompt("Please, enter 'yes' or 'no':  ")
        if (response === 'yes')
            document.getElementById('game').innerHTML = "So am I let's goooo!!!!! "
        else
            document.getElementById('game').innerHTML = "Don't be nervous, it will fun!!"
    }
    else if (prmpt === 'no')
        document.getElementById('game').innerHTML = "Don't be nervous, it will be fun!!"*/
}

function the_game() {
    start_message()

    let answer = "The color you chose is \n"
    const colors = ["BLACK ", "RED ", "GREEN ", "WHITE ", "PURPLE ", "YELLOW ", "SILVER ", "GRAY", "PINK "]
    let number_1 = [ '1', '11', '111', '1111', '12', '13', 'one', 'ONE', 'un', 'UN',]
    let number_2 = ['2', '22', '222', '2222', '21', '23', 'two', 'too', 'TWO', 'deux', 'DEUX',]
    let number_3 = ['3', '33', '333', '3333', '31', '32', 'three', 'tree', 'THREE', 'trois', 'TROIS',]

    let the_yess = [ 'Yes', 'yes', 'YES', 'yyes', 'yee', 'yess', 'wi', 'oui', 'OUI', 'y', 'Y', 'yeah','ya', 'YA']
    let the_nos = ['No', 'no', 'nn', 'nno', 'noo', 'NO', 'non', 'NON','nono','N', 'n', 'na', 'N', 'NA']
    
    alert('Memorize just ONE of the colors: ' + colors +"\n\nWhen Ready click 'OK' ");

    //prompt("Now, I will ask you just 3 questions, to guess your color OK?");
    
    const one = "List 1:" + " "+colors.slice(0, 3) +"\n"+"\n";
    const two = "List 2:"+" "+colors.slice(3, 6) +"\n"+"\n";
    const three = "List 3:"+" "+colors.slice(6, ) +"\n"+"\n";
    let slices = one + ' ' + two + ' ' + three;
    let question = prompt(slices +" Question 1: In which of the lists above is your color? (1 or 2 or 3)  ")

    alert(one + ' ' + two + ' ' + three + ' '+question);
    let secondPhase = ['Black', 'white', 'Silver'];
    let thirdPhase = ['Red', 'Purple', 'Gray'];
    //let question = prompt(colors +" Question 1: In which of the lists above is your color? (1 or 2 or 3)  ")
    if (number_1.includes(question)){
        //let secondPhase = ['Black', 'white', 'Silver'];
        //document.getElementById("game").innerHTML = colors.slice(0, -1, 3);
        let question_2 = prompt(secondPhase +" Question 2: is your color in the list above? \n(yes/no) ")
        if (the_nos.includes(question_2)){
            //let thirdPhase = ['Red', 'Purple', 'Gray'];
            //document.getElementById("game").innerHTML = colors.slice(1, -1, 3);
            let question_3 = prompt(thirdPhase +" last question: is your color in the list above? \n(yes/no) ")
            if (the_nos.includes(question_3)) {
                alert(answer+" "+colors[2]);
                return game_rate()
            }
            else if (the_yess.includes(question_3)){
                alert(answer+" "+colors[1]);
                return game_rate()
            }
            else
                return outliers_answers()
        }

        else if (the_yess.includes(question_2)) {
            alert(answer+" "+colors[0]);
            return game_rate()
        }
        else
            return outliers_answers()
    }
    

    else if (number_2.includes(question)){
        let question_2 = prompt(secondPhase+" Question 2: is your color in the list above? \n(yes/no) ")
        if (the_nos.includes(question_2)) {
            //document.getElementById("game").innerHTML = colors(1, -1, 3)
            let question_3 = prompt(thirdPhase+" last question: is your color in the list above:? \n{yes/no} ")
            if (the_nos.includes(question_3)) {
                alert(answer+" "+colors[5]);
                return game_rate()
            }
            else if (the_yess.includes(question_3)) {
                alert(answer+" "+colors[4]);
                return game_rate()
            }
            else
                return outliers_answers()
        }

        else if (the_yess.includes(question_2)) {
            alert(answer+" "+colors[3]);
            return game_rate()
        }
        else
            return outliers_answers()
    }

    else if (number_3.includes(question)) {
        //document.getElementById("game").innerHTML = colors.slice(0, 1, 3)
        let question_2 = prompt(secondPhase+" Question 2: is your color in the list above: \n(yes/no) ");
        if (the_nos.includes(question_2)) {
            //document.getElementById("game").innerHTML = colors.slice(1, -1, 3);
            let question_3 = prompt(thirdPhase+" last question: is your color in the list above: \n(yes/no) ")
            if (the_nos.includes(question_3)) {
                alert(answer+" "+colors[colors.length-1]);
                return game_rate()
            }
            else if (the_yess.includes(question_3)) {
                alert(answer+" "+colors[colors.length-2]);
                return game_rate()
            }
            else
                return outliers_answers()
        }
        else if (the_yess.includes(question_2)) {
            document.getElementById('game') = answer+" "+colors[colors.length-3];
            return game_rate()
        }
        else
            return outliers_answers()
    }

    else
        return outliers_answers()
}

function noGame() {
    document.getElementById('game').textContent = "That's fine! Feel free to revisite the website whenever you want to play";
}

function readingPic(photos){
    document.getElementById('media').style.backgroundImage = "url("+photos.href+")";
    document.getElementById('media').innerHTML = photos.alt;
}

function codingPic(photos){
    document.getElementById('media').style.backgroundImage = "url("+photos.href+")";
    document.getElementById('media').innerHTML = photos.alt;
}

function watchingMovie(photos){
    document.getElementById('media').style.backgroundImage = "url("+photos.href+")";
    document.getElementById('media').innerHTML = photos.alt;
}
function gymVideo(photos){
    document.getElementById('media').style.backgroundImage = "url("+photos.href+")";
    document.getElementById('media').innerHTML = photos.alt;
}
