 
 
 
//  var typed = new Typed('#element', {
//         strings: ['sayanggggg', 'noviiiiii','selamat ulang tahun my ex, all the best on your special🤍 semoga harapan kamu bisa tercapai sesuai dengan yang kamu mau, semoga banyak pencapaian yang kamu dapatkan di umur kamu yang baru ini, semoga selalu di beri kelancaran dalam segala urusan dan kegiatan yang kamu lakuin, sukses terus dalam pendidikan maupun pekerjaan. buat kita semoga selalu bareng walau udah ngga bareng lagi haha, sekarang udah sama sama punya kehidupan baru dan lingkungan baru, semoga kamu lebih nyaman dan bahagia terus dan semoga kamu selalu di kelilingi sama orang orang baik yang bakal temenin kamu terus. terakhirr, terimakasih udah lahir di dunia yaa, walaupun kita udah ngga bareng lagi tapi kamu tetap jadi yang terbaik dan aku beruntung bisa ketemu dan kenal sama kmu. happy birthday to you my ex, long life yaaa '],
//         typeSpeed: 100,
//         startDelay: 700,
//         loop: true
//     });


function longText(){
  var typed = new Typed('#element', {
    strings: ['selamat ulang tahun my ex, all the best on your special🤍 semoga harapan kamu bisa tercapai sesuai dengan yang kamu mau, semoga banyak pencapaian yang kamu dapatkan di umur kamu yang baru ini, semoga selalu di beri kelancaran dalam segala urusan. buat kita semoga selalu bareng walau udah ngga bareng lagi haha, sekarang udah sama sama punya kehidupan baru dan lingkungan baru, semoga kamu lebih nyaman dan bahagia terus dan semoga kamu selalu di kelilingi sama orang orang baik yang bakal temenin kamu terus. terakhirr, terimakasih udah lahir di dunia yaa, walaupun kita udah ngga bareng lagi tapi kamu tetap jadi yang terbaik dan aku beruntung bisa ketemu dan kenal sama kmu. happy birthday to you my ex, long life yaaa '],
    typeSpeed: 50,
  });
};

setTimeout(() => {
  longText();
},1000)

    let musik = new Audio();
    musik.src = "../AUDIO/auid.mp3";
    musik.loop = true;
    musik.play();

    const h1 = document.getElementById('ucapan');
    const cake = document.getElementById('container-2');
    const wrapper_love = document.getElementById('wrapper-love');

    setTimeout(() => {
      cake.classList.add('fadOut');
      wrapper_love.classList.add('fadOut');
    }, 500);

    setTimeout(() => {
      h1.style.display = 'flex'
    }, 450);

