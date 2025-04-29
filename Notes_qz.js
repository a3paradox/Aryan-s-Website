function searchbar(){
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("content_list");
    const content = document.querySelectorAll(".content_title,.content_phy,.content_che,.content_bio,.content_hrm,.content_mth,.content_ict,.content_eng,.content_srt");
    const productname = document.getElementsByTagName("h3");
    
    
    for (var i = 0; i < productname.length; i++) {
        let match = content[i].getElementsByTagName("h3")[0];
        
        if (match) {
            let textvalue = match.textContent || match.innerHTML
            
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                content[i].style.display = "";
            } else {
                content[i].style.display ="none";
            }
        }
    }
}

const startBtn = document.querySelector('.start_btn');
const subExtBtn = document.querySelector('.sub_ext_btn');
const classExtBtn = document.querySelector('.class_ext_btn');
const subPaletHld = document.querySelector('.subj_palet_ssc_hld');
const subPalet = document.querySelector('.subj_palet_ssc');
const resultHld_iq = document.querySelector('.result_palet_hld_iq');
const resultPalet_iq = document.querySelector('.result_palet_iq');
const guidPalet = document.querySelector('.guid_palet');
const guidExitBtn = document.querySelector('.exit_btn');
const exit2Btn = document.querySelector('.exit2_btn');
const contBtn = document.querySelector('.cont_btn');
const classHld = document.querySelector('.class_palet_hld');
const classPalet = document.querySelector('.class_palet');
const classSSC = document.querySelector('.class_SSC');
const main = document.querySelector('.main');
const quizPalet = document.querySelector('.quiz_palet');
const guidHold = document.querySelector('.guid_hld');
const qzHold = document.querySelector('.qz_palet_hld');
const score = document.querySelector('.score');
const qnnum = document.querySelector('.qn_num');
var nxtBtn = document.querySelector('.next_btn');
var optList = document.querySelectorAll('.option_list');
var qn_grp = document.querySelectorAll('.qn_grp');
var opts = document.querySelectorAll(".option");
var ans = document.querySelectorAll(".ans_btn");
var optvalid = document.querySelectorAll(".optionvalid");
var qaSet = document.querySelector('.qa_set');
const totalscore = document.querySelector('.totalscore_iq');
var qncount = 1;
var count = 0;
var scorecount = 0;

startBtn.onclick = () => {
    guidPalet.classList.add('active');
    guidHold.classList.add('active');
    main.classList.add('active');
}

guidExitBtn.onclick = () => {
    guidHold.classList.remove('active');
    guidPalet.classList.remove('active');
    main.classList.remove('active');
} 

contBtn.onclick = () => {    
    guidPalet.classList.remove('active');
    guidHold.classList.remove('active');
    main.classList.add('active');
    classPalet.classList.add('active');
    classHld.classList.add('active');
}

classSSC.onclick = () => {    
    classPalet.classList.remove('active');
    classHld.classList.remove('active');
    main.classList.add('active');
    subPalet.classList.add('active');
    subPaletHld.classList.add('active');
}

subExtBtn.onclick = () => {
    classPalet.classList.add('active');
    classHld.classList.add('active');
    main.classList.add('active');
    subPalet.classList.remove('active');
    subPaletHld.classList.remove('active');
}

classExtBtn.onclick = () => {
    classPalet.classList.remove('active');
    classHld.classList.remove('active');
    guidHold.classList.remove('active');
    guidPalet.classList.remove('active');
    main.classList.remove('active');
}

nxtBtn.onclick = () => {
    nxtBtn.classList.add('hide');
    qaSet.classList.add('active');
    optshow();
    optvalidshow();
    ansShow();
    result_iq_show();
} 

nxtBtn.addEventListener("click",function(){
    step();
    qncount += 1;
    qnnum.innerHTML = qncount;
    totalscore.innerHTML = scorecount;
    result_iq_show();
}) 

function step(){
    count += 1;
    for(var i = 0; i < qn_grp.length; i++){
        qn_grp[i].className = "qn_grp";
    }
    qn_grp[count].className = "qn_grp active";
} 

function optshow(){
    for(var i = 0; i < opts.length; i++){
        opts[i].className = "option active";
    }
} 

function optvalidshow(){
    for(var i = 0; i < optvalid.length; i++){
        optvalid[i].className = "optionvalid active";
    }
}

function ansShow(){
    for(var i = 0; i < ans.length; i++){
        ans[i].className = "ans_btn active";
    }
} 

opts.forEach( function (optsSingle){
   optsSingle.addEventListener("click",function () {
        totalscore.innerHTML = scorecount;

        setTimeout(function(){
            step();
            qncount += 1;
            qnnum.innerHTML = qncount;
        },1000)
    })
}) 

optvalid.forEach( function (optvalidSingle){
   optvalidSingle.addEventListener("click",function () {

            setTimeout(function(){
            step();
            qncount += 1;
            qnnum.innerHTML = qncount;
        },800)
        
        var valid = this.getAttribute("valid");
        if(valid == "valid") {
        scorecount += 1;
        score.innerHTML = scorecount;
        totalscore.innerHTML = scorecount;
        }else {
        score.innerHTML = scorecount;
        totalscore.innerHTML = scorecount;
    }
    })
})

ans.forEach( function (ansSingle){
   ansSingle.addEventListener("click",function () {
        totalscore.innerHTML = scorecount;
        scorecount -= 1;
        score.innerHTML = scorecount;
    })
}) 

const typeHld = document.querySelector('.type_palet_iq_hld');
const typepalet = document.querySelector('.type_palet_iq');
const iqBtn = document.querySelector('.sub_iq');
const phyBtn = document.querySelector('.sub_phy');
const typeBnBtn = document.querySelector('.type_btn_iq_bn');
const typeEnBtn = document.querySelector('.type_btn_iq_en');
const typeExtBtn = document.querySelector('.type_ext_btn');

const resultBkBtn_IQ = document.querySelector('.result_bk_btn');
const tryAgainBtn_IQ = document.querySelector('.result_btn_tryagain');
const progressValue = document.querySelector('.progress_value_iq');
const circle = document.querySelector('.circle');
const resultCmntIQ = document.querySelector('.result_comment_iq');

iqBtn.onclick = () => {
    subPalet.classList.remove('active');
    subPaletHld.classList.remove('active');
    main.classList.add('active');
    typeHld.classList.add('active');
    typepalet.classList.add('active');
}

typeBnBtn.addEventListener("click",function(){
    optshow();
    optvalidshow();
})

typeBnBtn.onclick = () => {
    typeHld.classList.remove('active');
    typepalet.classList.remove('active');
    main.classList.add('active');
    quizPalet.classList.add('active');
    qzHold.classList.add('active');
    qaSet.classList.add('active');
    opts.classList.add('active');
    optvalid.classList.add('active');
}

typeExtBtn.onclick = () => {
    typeHld.classList.remove('active');
    typepalet.classList.remove('active');
    main.classList.add('active');
    subPalet.classList.add('active');
    subPaletHld.classList.add('active');
}

function result_iq_show() {
    if(qncount > 11) {
            resultPalet_iq.className = "result_palet_iq active";
            resultHld_iq.className = "result_palet_hld_iq active";
            main.classList.add('active');
            quizPalet.classList.remove('active');
            qzHold.classList.remove('active');
            qaSet.classList.remove('active');
            opts.classList.remove('active');
            optvalid.classList.remove('active');
        }
        
        
         if(scorecount == 1) {
         let progressStartValue = 0;
         let progressEndValue = 10;
         circle.classList.add('qo');
         resultCmntIQ.innerHTML = "Not So Good";
         
         let progress = setInterval(() => {
         progressStartValue++;
         progressValue.innerHTML = progressStartValue + "%";
            if(progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            }, 30)
         }
         
         if(scorecount == 2) {
         let progressStartValue = 0;
         let progressEndValue = 20;
         circle.classList.add('wo');
         resultCmntIQ.innerHTML = "Not Good At All";
         
         let progress = setInterval(() => {
         progressStartValue++;
         progressValue.innerHTML = progressStartValue + "%";
            if(progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            }, 30)
         }
         
         if(scorecount == 3) {
         let progressStartValue = 0;
         let progressEndValue = 30;
         circle.classList.add('eo');
         resultCmntIQ.innerHTML = "Not Bad, Keep Trying...";
         
         let progress = setInterval(() => {
         progressStartValue++;
         progressValue.innerHTML = progressStartValue + "%";
            if(progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            }, 30)
         }
         
         if(scorecount == 4) {
         let progressStartValue = 0;
         let progressEndValue = 40;
         circle.classList.add('ro');
         resultCmntIQ.innerHTML = "Not very Bad But need Progress";
         
         let progress = setInterval(() => {
         progressStartValue++;
         progressValue.innerHTML = progressStartValue + "%";
            if(progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            }, 30)
         }
         
         if(scorecount == 5) {
         let progressStartValue = 0;
         let progressEndValue = 50;
         circle.classList.add('to');
         resultCmntIQ.innerHTML = "Well Done! Keep trying...";
         
         let progress = setInterval(() => {
         progressStartValue++;
         progressValue.innerHTML = progressStartValue + "%";
            if(progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            }, 30)
         }
         
         if(scorecount == 6) {
         let progressStartValue = 0;
         let progressEndValue = 60;
         circle.classList.add('yo');
         resultCmntIQ.innerHTML = "Nice! Carry on";
         
         let progress = setInterval(() => {
         progressStartValue++;
         progressValue.innerHTML = progressStartValue + "%";
            if(progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            }, 30)
         }
         
         if(scorecount == 7) {
         let progressStartValue = 0;
         let progressEndValue = 70;
         circle.classList.add('uo');
         resultCmntIQ.innerHTML = "Good! You’ve Done Better";
         
         let progress = setInterval(() => {
         progressStartValue++;
         progressValue.innerHTML = progressStartValue + "%";
            if(progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            }, 30)
         }
         
         if(scorecount == 8) {
         let progressStartValue = 0;
         let progressEndValue = 80;
         circle.classList.add('io');
         resultCmntIQ.innerHTML = "Good! Need a Little Bit Progress";
         
         let progress = setInterval(() => {
         progressStartValue++;
         progressValue.innerHTML = progressStartValue + "%";
            if(progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            }, 30)
         }
         
         if(scorecount == 9) {
         let progressStartValue = 0;
         let progressEndValue = 90;
         circle.classList.add('oo');
         resultCmntIQ.innerHTML = "Very Good! You were too close!";
         
         let progress = setInterval(() => {
         progressStartValue++;
         progressValue.innerHTML = progressStartValue + "%";
            if(progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            }, 20)
         }
         
         if(scorecount == 10) {
         let progressStartValue = 0;
         let progressEndValue = 100;
         circle.classList.add('qpo');
         resultCmntIQ.innerHTML = "Excellent! You Are Brilliant!";
         
         let progress = setInterval(() => {
         progressStartValue++;
         progressValue.innerHTML = progressStartValue + "%!";
            if(progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
            }, 20)
         }
        
}

    var LO = document.getElementById("LO");
    var LC = document.getElementById("LC");
    var LoginPass = document.getElementById("password");

function LockShow(){

    if(LoginPass.type === "password") {
        LoginPass.type = "text";
        LO.style.display = "block";
        LC.style.display = "none";
    }else {
        LoginPass.type = "password";
        LO.style.display = "none";
        LC.style.display = "block";
    }
}

const typePhyHld = document.querySelector('.type_palet_phy_hld');
const typePhypalet = document.querySelector('.type_palet_phy');
const typePhyExtBtn = document.querySelector('.type_ext_btn_phy');

phyBtn.onclick = () => {
    subPalet.classList.remove('active');
    subPaletHld.classList.remove('active');
    main.classList.add('active');
    typePhyHld.classList.add('active');
    typePhypalet.classList.add('active');
}

typePhyExtBtn.onclick = () => {
    typePhyHld.classList.remove('active');
    typePhypalet.classList.remove('active');
    main.classList.add('active');
    subPalet.classList.add('active');
    subPaletHld.classList.add('active');8
}

const LoginBtn = document.querySelector('.login_btn');
const LoginPaletHld = document.querySelector('.login_palet_hld');
const LoginPalet = document.querySelector('.login_palet');
const LoginSubmitBtn = document.querySelector('.submit_btn');

LoginBtn.onclick = () => {
    LoginPaletHld.classList.add('active');
    LoginPalet.classList.add('active');
    main.classList.add('active');
}

LoginSubmitBtn.onclick = () => {
    LoginPaletHld.classList.remove('active');
    LoginPalet.classList.remove('active');
    main.classList.remove('active');
}

LoginSubmitBtn.addEventListener("click",function(){
    emailSend();
})

function emailSend(){
    alert("Your Info is Processing, Please Wait for an Email");
}
