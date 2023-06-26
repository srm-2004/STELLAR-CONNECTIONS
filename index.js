console.log("fu");

let a, b, c, d, e, f, g, h, i, j, k, l, m, fe, title, x, y, connection;

let sign = Array.from(Zodiac.options).map((option) => option.value);
console.log(sign[1]);
let gen = Array.from(Gender.options).map((option) => option.value);
sign.forEach((element) => {
  a = sign[1].value = 1;
  b = sign[2].value = 2;
  c = sign[3].value = 3;
  d = sign[4].value = 4;
  e = sign[5].value = 5;
  f = sign[6].value = 6;
  g = sign[7].value = 7;
  h = sign[8].value = 8;
  i = sign[9].value = 9;
  j = sign[10].value = 10;
  k = sign[11].value = 11;
  l = sign[12].value = 12;
});

gen.forEach((element) => {
  m = gen[1].value = 1;
  fe = gen[2].value = 2;
});
console.log(fe);

let Aries = 1;
let Taurus = 2;
let Gemini = 3;
let Cancer = 4;
let Leo = 5;
let Virgo = 6;
let Libra = 7;
let Scorpio = 8;
let Sagittarius = 9;
let Capricon = 10;
let Aquarius = 11;
let Pisces = 12;

var btn = document.getElementById("btn");
btn.addEventListener("click", data);


function data() {
  Name = document.getElementById("name").value;
  Age = Number(document.getElementById("age").value);
  Dob = Number(document.getElementById("dob").value);
  Zodiac = document.getElementById("Zodiac").value;
  Gender = document.getElementById("Gender").value;
  button = document.getElementById("btn").value;
  for (let i = 1; i < 13; i++) {
    if (Zodiac == sign[i]) {
      x = i;
    }
  }
  for (let i = 1; i < 3; i++) {
    if (Gender == gen[i]) {
      y = i;
    }
  }
  connection = Math.round(Number(((Age + Dob + x + y) / 100) * 12));

  switch (connection) {
    case 1:
      console.log("Aries");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS ARIES"
      document.querySelector(".hint").innerHTML = "YOUR PAIR HAS DIRTY BRAIN AND NAUGHTY"
      break;
    case 2:
      console.log("Taurus");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS TAURUS"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS ADVENTUROUS & EASYGOING"
      break;
    case 3:
      console.log("Gemini");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS GEMINI"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS ANALYTICAL & PERCEPTIVE"
      break;
    case 4:
      console.log("Cancer");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS CANCER"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS A DRAMA QUEEN/KING & SMOOTH OPERATOR"
      break;
    case 5:
      console.log("Leo");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS LEO"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS THE ADVENTURE JUNKIE"
      break;
    case 6:
      console.log("Virgo");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS VIRGO"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS A DAYDREAMER & A PRANKSTER EXTRAORDINAIRE"
      break;
    case 7:
      console.log("Libra");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS LIBRA"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS KINDHEARTED AND A GOOD SOUL"
      break;
    case 8:
      console.log("Scorpio");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS SCORPIO"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS A FASHIONISTA/ FASHIONISTO"
      break;
    case 9:
      console.log("Sagittarius");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS SAGITTARIUS"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS A CLASS CLOWN"
      break;
    case 10:
      console.log("Capricon");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS CAPRICON"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS A FREE SPIRIT"
      break;
    case 11:
      console.log("Aqarius");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS AQUARIUS"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS A SOCIAL BUTTERFLY & THE CHATTERBOX CHAMPION"
      break;
    case 12:
      console.log("Pisces");
      document.querySelector(".answer").innerHTML = "YOUR COMPATIBLE ZODIAC SIGN IS PISCES"
      document.querySelector(".hint").innerHTML = "YOUR PAIR IS ... NOTHING TO SAY ABOUT IT"
      break;
  
    default:
      console.log("invalid input")
      break;
  }


}

