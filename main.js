
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let selectedquote='';
let output = document.getElementById('output');

let quotes1 = 
    [ 
        '"Your time is limited, so don’t waste it living someone else’s life."  -Steve Jobs',
        '"You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future."  -Steve Jobs',
        '"Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected."  -Steve Jobs',
        '"Stay hungry. Stay foolish."  -Steve Jobs',
        '"You cant just ask customers what they want and then try to give that to them. By the time you get it built, they will want something new."  -Steve Jobs'
    ];
let quotes2 = 
    [ 
        '"Turn your wounds into wisdom."    -Oprah Winfrey',
        '"You can have it all. Just not all at once."    -Oprah Winfrey',
        '"Be thankful for what you have; you will end up having more. If you concentrate on what you don not have, you will never, ever have enough"    -Oprah Winfrey',
        '"True forgiveness is when you can say, "Thank you for that experience."    -Oprah Winfrey',
        '"Everyone wants to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down."    -Oprah Winfrey',
    ];
let quotes3 = 
    [ 
        '"Life is what happens to you, While you are busy making other plans."  -John Lennon',
        '"I have always been politically minded and against the status quo."  -John Lennon',
        '"The only way to deal with critics is to go over their heads direct to the public."  -John Lennon',
        '"God is a concept by which we measure our pain."  -John Lennon',
        '"I was a working-class macho guy who was used to being served and Yoko didn not buy that."  -John Lennon',
    ];
let quotes4 = 
    [ 
        '"Knowing yourself is the beginning of all wisdom." -Aristotle',
        '"It is the mark of an educated mind to be able to entertain a thought without accepting it." -Aristotle',
        '"What is a friend? A single soul dwelling in two bodies." -Aristotle',
        '"Educating the mind without educating the heart is no education at all." -Aristotle',
        '"Hope is a waking dream." -Aristotle',
    ];
let quotes5 = 
    [ 
        '"How wonderful it is that nobody need wait a single moment before starting to improve the world."  -Anne Frank',
        '"Think of all the beauty still left around you and be happy."  -Anne Frank',
        '"I can shake off everything as I write; my sorrows disappear, my courage is reborn."  -Anne Frank',
        '"No one has ever become poor by giving."  -Anne Frank',
        '"Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands."  -Anne Frank',
    ];
window.onload=function(){
    document.getElementById("btn6").style.visibility = "hidden";
      
      }
btn1.addEventListener('click', function(){
    selectedquote='btn1';
    document.getElementById("btn6").style.visibility = "visible";
})
btn2.addEventListener('click', function(){
    selectedquote='btn2';
    document.getElementById("btn6").style.visibility = "visible";
})
btn3.addEventListener('click', function(){
    selectedquote='btn3';
    document.getElementById("btn6").style.visibility = "visible";
})
btn4.addEventListener('click', function(){
    selectedquote='btn4';
    document.getElementById("btn6").style.visibility = "visible";
})
btn5.addEventListener('click', function(){
    selectedquote='btn5';
    document.getElementById("btn6").style.visibility = "visible";
})
btn6.addEventListener('click', function(){
    switch(selectedquote){
        case 'btn1': 
            var randomQuote = quotes1[Math.floor(Math. random() * quotes1.length)]
            break;
        case 'btn2':
            var randomQuote = quotes2[Math.floor(Math. random() * quotes2.length)]
            break;
        case 'btn3':
            var randomQuote = quotes3[Math.floor(Math. random() * quotes3.length)]
            break;
        case 'btn4':
            var randomQuote = quotes4[Math.floor(Math. random() * quotes4.length)]
            break;
        case 'btn5':
            var randomQuote = quotes5[Math.floor(Math. random() * quotes5.length)]
            break;
    }
    output.innerHTML = randomQuote;
})
