const h1 = document.getElementById('ucapan');
const cake = document.getElementById('container-2');
const wrapper_love = document.getElementById('wrapper-love');
const button = document.getElementById('wrapper-4');
const textArea = document.getElementById('textArea');
const img = document.getElementById('img');
const element = document.getElementById('element');
 
 
 function text(){
   var tiped = new Typed('#element1', {
          strings: ['sayangggggggggg'],
          typeSpeed: 100,
          startDelay: 70,
     
      });
 }

function longText(){
  var typed = new Typed('#element', {
    strings: ['selamat ulang tahun my ex, all the best on your special🤍 semoga harapan kamu bisa tercapai sesuai dengan yang kamu mau, semoga banyak pencapaian yang kamu dapatkan di umur kamu yang baru ini, semoga selalu di beri kelancaran dalam segala urusan. buat kita semoga selalu bareng walau udah ngga bareng lagi ,maafff aku selalu buat kamu kecewa aku harap kamu ngga benci aku. terimakasih udah lahir di dunia yaa, walaupun kita udah ngga bareng lagi tapi kamu tetap jadi yang terbaik dan aku beruntung bisa ketemu dan kenal sama kmu. happy birthday to you my ex, long life yaaa '],
    typeSpeed: 25,
    startDelay: 500

  });

};

    let musik = new Audio();
    musik.src = "auid.mp3";
    musik.loop = true;
    musik.play();

    setTimeout(() => {
      text();
    },450)
    setTimeout(() => {
      longText();
      element.style.display = 'flex';
      element.classList.add('fadIn');
    }, 5500);

    // button
    setTimeout(() => {
      button.style.display = 'flex';
      button.classList.add('fadIn');
    }, 20000);


    setTimeout(() => {
      img.classList.add('fadOut');
    }, 5000);

    setTimeout(() => {
      h1.style.display = 'flex';
      img.style.display = 'flex';
      h1.classList.add('fadIn');
      img.classList.add('fadIn');
    }, 450);

