 const pertanyaan = document.getElementById('question')
 const jawaban = document.getElementById('answer')

let init = 0;

const botsays = (param) => {
    return [
     "haloo ini Fakebot , siapa namamu??",
     `salam kenal ya ${param?.nama} , sekarang umurnya berapa?`,
     `ohh ${param?.usia} ya , btw udah punya pacar belum nih??`,
     `wahh kerenn ya, oh iya hobby nya ngapain aja nih??`,
     `kerenn ,selain hobby ${param?.hobby} kesibukannya yang lain apa aja?`,
     `Siapp , pertahankan trs ya , btw aku udahan dulu ya nanti ngobrol lagi okee`,
    ]
}

pertanyaan.innerHTML = botsays() [0]
let userdata = []


const botclick = () => {
    init++
 if(init===1) {
   console.log({nama: jawaban.value})
   botdelays({nama: jawaban.value})  
}
  else if(init===2) {
    console.log({usia: jawaban.value})
    botdelays({usia: jawaban.value})
 } 
  else if(init===3) {
    console.log({pacar: jawaban.value})
    botdelays({pacar: jawaban.value})
 }
  else if(init===4) {
    console.log({hobby: jawaban.value})
    botdelays({hobby: jawaban.value})
 }
  else if(init===5) {
    console.log({busyness: jawaban.value})
    botdelays({busyness: jawaban.value})
 } 
  else if(init===6) {
     botfinish()
 } else {
     botend()
 }
}


const botdelays = (jawabanuser) => {
   setTimeout(() => {
      console.log({userdata: userdata})
      pertanyaan.innerHTML = botsays(jawabanuser) [init]
     }, [1250])
      userdata.push(jawaban.value)
      jawaban.value = ""

}

function botfinish() {
  pertanyaan.innerHTML = `Terima kasih ya ${userdata[0]} udah main sama aku bye bye`
  jawaban.value = ''
  
}
function botend() {
   setTimeout(window.location.reload(), [1250])
}