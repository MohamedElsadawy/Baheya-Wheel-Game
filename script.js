
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {
  // Play the sound
  wheel.play();
  // Inisialisasi variabel
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  // Shuffle 450 karena class box1 sudah ditambah 90 derajat diawal. minus 40 per item agar posisi panah pas ditengah.
  // Setiap item memiliki 12.5% kemenangan kecuali item sepeda yang hanya memiliki sekitar 4% peluang untuk menang.
  // Item berupa ipad dan samsung tab tidak akan pernah menang.
  // let Sepeda = shuffle([2210]); //Kemungkinan : 33% atau 1/3
  let one = shuffle([1890, 2250, 2610]);
  let two = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  let three = shuffle([1810, 2170, 2530]);
  let four = shuffle([1770, 2130, 2490]);
  let five = shuffle([1750, 2110, 2470]);
  let six = shuffle([1630, 1990, 2350]);
  let seven = shuffle([1590, 1970, 2230]);
  let eight = shuffle([1550, 1950, 2210]);
  let nine  = shuffle([1510, 1930, 2190]);
  let ten = shuffle([1470, 1910, 2170]);

  // Bentuk acak
  let Hasil = shuffle([
    one[0],
    two[0],
    three[0],
    four[0],
    five[0],
    six[0],
    seven[0],
    eight[0],
    nine[0],
    ten[0],
  ]);
  // console.log(Hasil[0]);
  var imgClass = "";
  // Ambil value item yang terpilih
    if (one.includes(Hasil[0])) {
        SelectedItem = "قول نكتة مجنونة في فيديو ولو جاب ٥٠٠٠ لايك تكسب ";
        imgClass = "emoji_01";
    }
    if (two.includes(Hasil[0])) {
        SelectedItem = "روح لمامتك واحضنها";
        imgClass = "emoji_02";
    }
    if (three.includes(Hasil[0])) {
        SelectedItem = "اطلع في البالكونة وانشر الغسيل";
        imgClass = "emoji_03";
    }
    if (four.includes(Hasil[0])) {
        SelectedItem = "العب ٢٠ اسكواتس يابطل";
        imgClass = "emoji_04";
    }
    if (five.includes(Hasil[0])) {
        SelectedItem = "ادفعلها ٢٥٠ ج";
        imgClass = "emoji_05";
    }
    if (six.includes(Hasil[0])) {
        SelectedItem = " ارسملها صورة";
        imgClass = "emoji_06";
    }
    if (seven.includes(Hasil[0])) {
        SelectedItem = "ارفع دامبلز ٢٠ كيلو لمدة دقيقه";
        imgClass = "emoji_07";
    }
    if (eight.includes(Hasil[0])) {
        SelectedItem = "هي تطلب اي حاجة وانت هتنفذ";
        imgClass = "emoji_08";
    }
    if (nine.includes(Hasil[0])) {
        SelectedItem = "اغسل المواعين";
        imgClass = "emoji_09";
    }
    if (ten.includes(Hasil[0])) {
        SelectedItem = "جرب تلف تاني";
        imgClass = "emoji_10";
    }

  // Proses
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Munculkan Alert
    setTimeout(function () {
    applause.play();
      swal(SelectedItem);
      swal({
        text: SelectedItem,
        buttons: ["تمام", "جرب تاني"],
        className: imgClass,
      });
  }, 5500);

    
  // Delay and set to normal state
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}
// Fakes the loading setting a timeout
setTimeout(function () {
    $('body').addClass('loaded');
}, 5000);
// Modal the loading setting a timeout
var myModal = document.getElementById('formModal');
var modal = new bootstrap.Modal(document.getElementById('formModal'), {
    keyboard: false,
    backdrop: 'static'
})
setTimeout(function () {
    modal.show();
}, 5000);



//form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                var num = $("#phoneNumber").val();
                var phoneValid = false;
                var phoneno = /^\d{11}$/;
                if (num.match(phoneno)) {
                    phoneValid = true;
                }
                else {
                    phoneValid = false;
                }
                if (!form.checkValidity() || phoneValid == false) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    debugger
                    const url = "https://script.google.com/macros/s/AKfycbwdFtcpdsj6Uy4suy-xikujayzl-bnMTg2pW-b1UgkPZjY9T0TQm6hKCe7_ifI042Qp/exec";
                    const form = document.forms['form'];
                    fetch(url, { method: 'POST', body: new FormData(form) })
                        .then(response => console.log('Success!', response))
                        .catch(error => console.error('Error!', error.message))
                    modal.hide()
                    event.preventDefault()
                    event.stopPropagation()
                }

                
            }, false)
        })
})()

