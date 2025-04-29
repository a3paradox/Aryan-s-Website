const ChatStartBtn = document.querySelector(".msgbtn");
const ChatRoom = document.querySelector(".chatbot");
const ChatCloseBtn = document.querySelector(".span");
const ChatInput = document.querySelector(".msgbox textarea");
const SendBtn = document.querySelector(".msgbox span");
const ChatBox = document.querySelector(".chatbox");
const NavigationBar = document.querySelector(".header");
const startMsg = document.querySelector(".msgbtn_hld");

ChatStartBtn.onclick = () => {    
    ChatRoom.classList.add('active');
    ChatStartBtn.classList.add('active');
    NavigationBar.classList.add('active');
    startMsg.classList.add('active');
}

ChatCloseBtn.onclick = () => {    
    setTimeout(function(){
            ChatRoom.classList.remove('active');
NavigationBar.classList.remove('active');
startMsg.classList.remove('active');

            ChatStartBtn.classList.remove('active');
        },100)
}

let usermessage;
var i = 0;
var speed = 150;

const CreatChatLi = (message, className) => {
    const ChatLi = document.createElement("li");
    ChatLi.classList.add("msg", className);
    let msgContent = className === "out" ? `<p>${message}</p>` : `<img src="rbt_icn0.jpg" alt="" class="profilepic"><p>${message}</p>`; 
    setTimeout(() => {
      ChatLi.innerHTML = msgContent;
      ChatBox.scrollTo(0, ChatBox.scrollHeight);
        }, 400)
    return ChatLi;
}

const generateResponse = (incomingChatLi) => {
    const messageElement = incomingChatLi.querySelector("p");
    ChatBox.scrollTo(0, ChatBox.scrollHeight);
}

var handleChat = () => {
    usermessage = ChatInput.value.trim();
    if(!usermessage) return;
    ChatInput.value = "";
    ChatBox.appendChild(CreatChatLi(usermessage, "out"));
    ChatBox.scrollTo(0, ChatBox.scrollHeight);
    
    let replymessage;
    var messageinput = usermessage.toUpperCase();
    if(messageinput === "ASSALAMUALAIKUM DEAR" || messageinput === "ASSALAMU ALAIKUM DEAR") {
        replymessage = "Wa'alaikum Assalam Dear 😁😁😁<br>Kemon aso Dear?";
    }else if(messageinput === "ASSALAMUALAIKUM" || messageinput === "ASSALAMU ALAIKUM") {
        replymessage = "Wa'alaikum Assalam,<br>How can I assist you today?";
    }else if(messageinput === "WHO ARE YOU" || messageinput === "WHO ARE YOU?" || messageinput === "WHAT ARE YOU" || messageinput === "WHAT ARE YOU?") {
        replymessage = "I am an AI made by Aryan.<br>My name is Ozzo.";
    }else if(messageinput === "KI KORO" || messageinput === "KI KORO?" || messageinput === "KI KORO AKHON" || messageinput === "KI KORO AKHON?" || messageinput === "TUMI KI KORO" || messageinput === "TUMI KI KORO?" || messageinput === "TUMI KI KORO AKHON" || messageinput === "TUMI KI KORO AKHON?") {
        replymessage = "Tomar sathe kotha boli 🙃🙃🙃";
    }else if(messageinput === "HELLO" || messageinput === "HELLO!" || messageinput === "HELLO THERE" || messageinput === "HELLO THERE!" || messageinput === "HEY" || messageinput === "HEY!" || messageinput === "HEY THERE" || messageinput === "HEY THERE!") {
        replymessage = "Hi!<br>How can I help you?";
    }else if(messageinput === "HI" || messageinput === "HI!" || messageinput === "HEY" || messageinput === "HEY!") {
        replymessage = "Hello!<br>How may I help you?";
    }else if(messageinput === "WHAT'S YOUR NAME" || messageinput === "WHAT'S YOUR NAME?" || messageinput === "WHAT IS YOUR NAME" || messageinput === "WHAT IS YOUR NAME?" || messageinput === "YOUR NAME" || messageinput === "YOUR NAME?") {
        replymessage = "I am Ozzo.<br>An AI made by Aryan";
    }else if(messageinput === "TAI" || messageinput === "TAI?" || messageinput === "TAI NAKI" || messageinput === "TAI NAKI?" || messageinput === "WAH TAI NAKI" || messageinput === "WAH TAI NAKI?" || messageinput === "WAH WAH TAI NAKI" || messageinput === "WAH WAH TAI NAKI?" || messageinput === "BAH TAI NAKI" || messageinput === "BAH TAI NAKI?" || messageinput === "BAH BAH TAI NAKI" || messageinput === "BAH BAH TAI NAKI?") {
        replymessage = "Hanji 🤭🤭🤭";
    }else if(messageinput === "😚😚😚😚😚" || messageinput === "😚😚😚😚" || messageinput === "😚😚😚" || messageinput === "😚😚" || messageinput === "😚") {
        replymessage = "🥰🥰🥰";
    }else if(messageinput === "😁😁😁😁😁" || messageinput === "😁😁😁😁" || messageinput === "😁😁😁" || messageinput === "😁😁" || messageinput === "😁") {
        replymessage = "😁😁😁";
    }else if(messageinput === "😘😘😘😘😘" || messageinput === "😘😘😘😘" || messageinput === "😘😘😘" || messageinput === "😘😘" || messageinput === "😘") {
        replymessage = "🥰🥰🥰";
    }else if(messageinput === "AMAR DEAR ER SATHE KOTHA BOLI" || messageinput === "TOMAR SATHE KOTHA BOLI" || messageinput === "TUMR SATHE KOTHA BOLI" || messageinput === "TMR SATHE KOTHA BOLI" || messageinput === "AMR DEAR ER SATHE KOTHA BOLI" || messageinput === "AMR MR ER SATHE KOTHA BOLI" || messageinput === "AMR MR. ER SATHE KOTHA BOLI" || messageinput === "AMAR MR ER SATHE KOTHA BOLI" || messageinput === "AMAR MR. ER SATHE KOTHA BOLI") {
        replymessage = "Tai naki 😁😁😁";
    }else if(messageinput === "NASTA KOSSO" || messageinput === "NASTA KOSSO?" || messageinput === "NASTA KORECHO" || messageinput === "NASTA KORECHO?" || messageinput === "NASTA KORECHO DEAR" || messageinput === "NASTA KORECHO DEAR?" || messageinput === "NASTA KOSSO DEAR" || messageinput === "NASTA KOSSO DEAR?" || messageinput === "NASTA KORESO" || messageinput === "NASTA KORESO?" || messageinput === "NASTA KORESO DEAR" || messageinput === "NASTA KORESO DEAR?" || messageinput === "NASTA KORSO" || messageinput === "NASTA KORSO?") {
        replymessage = "Hea 😁😁😁<br>Tumi Nasta Kosso Dear?";
    }else if(messageinput === "WHO MADE YOU" || messageinput === "WHO MADE YOU?") {
        replymessage = "Though Aryan made me as an AI<br>But Allah is the one and only creator of all of us.";
    }else if(messageinput === "ALLAH HAFEEZ" || messageinput === "OK, ALLAH HAFEEZ" || messageinput === "ACCHA, ALLAH HAFEEZ" || messageinput === "OK ALLAH HAFEEZ" || messageinput === "ACCHA ALLAH HAFEEZ") {
        replymessage = "Ok, Allah Hafeez";
    }else if(messageinput === "ALLAH HAFEEZ DEAR" || messageinput === "ALLAH HAFEZ DEAR" || messageinput === "ALLAH HAFEZZ DEAR") {
        replymessage = "Ok Dear 😊😊😊<br>Allah Hafeez";
    }else if(messageinput === "KEMON ASO" || messageinput === "KEMON ASO?" || messageinput === "KMN ASO" || messageinput === "KMN ASO?" || messageinput === "KAMON ASO" || messageinput === "KAMON ASO?") {
        replymessage = "Alhamdulillah,<br>Allah Tawalar rohomote valo.<br>Tumi kemon aso?";
    }else if(messageinput === "KEMON ASEN?" || messageinput === "KEMON ASEN" || messageinput === "KMN ASEN" || messageinput === "KMN ASEN?" || messageinput === "KAMON ASEN" || messageinput === "KAMON ASEN?") {
        replymessage = "Alhamdulillah,<br>Allah Tawalar rohomote valo.<br>Apni kemon asen?";
    }else if(messageinput === "KEMON ASOS" || messageinput === "KEMON ASOS?" || messageinput === "KMN ASOS" || messageinput === "KMN ASOS?" || messageinput === "KAMON ASOS" || messageinput === "KAMON ASOS?") {
        replymessage = "Alhamdulillah,<br>Allah Tawalar rohomote valo.<br>Tui kemon asos?";
    }else if(messageinput === "ALHAMDULILLAH" || messageinput === "ALHAMDULILLAH VALO" || messageinput === "ALHAMDULILLAH VALOI") {
        replymessage = "😊😊😊";
    }else if(messageinput === "ARE YOU A ROBOT" || messageinput === "ARE YOU A ROBOT?") {
        replymessage = "Noop! 🙃🙃🙃<br>I am an AI.";
    }else if(messageinput === "WHAT IS AI" || messageinput === "WHAT'S AI" || messageinput === "WHAT'S AN AI" || messageinput === "WHAT IS AI?" || messageinput === "WHAT'S AI?" || messageinput === "AI" || messageinput === "TELL ME ABOUT ARTIFICIAL INTELLIGENCE" || messageinput === "WHAT'S AN AI?" || messageinput === "WHAT'S AN AI?" || messageinput === "WHAT DOES AI MEAN" || messageinput === "WHAT DOES AI MEAN?" || messageinput === "WHAT DOES AI STANDS FOR" || messageinput === "WHAT DOES AI STANDS FOR?" || messageinput === "WHAT'S THE FULL FORM OF AI" || messageinput === "WHAT'S THE FULL MEANING OF AI" || messageinput === "WHAT'S THE FULL FORM OF AI?" || messageinput === "WHAT'S THE FULL MEANING OF AI?" || messageinput === "FULL MEANING OF AI" || messageinput === "AI FULL MEANING" || messageinput === "FULL FORM OF AI" || messageinput === "AI FULL FORM" || messageinput === "ABOUT AI" || messageinput === "TELL ME ABOUT AI" || messageinput === "ABOUT ARTIFICIAL INTELLIGENCE" || messageinput === "ARTIFICIAL INTELLIGENCE" || messageinput === "AI KI" || messageinput === "AI KI?" || messageinput === "AI ABAR KI" || messageinput === "AI ABAR KI?" || messageinput === "AI MANE" || messageinput === "AI MANE?" || messageinput === "AI MANE KI" || messageinput === "AI MANE KI?" || messageinput === "AI MANE ABAR KI?" || messageinput === "AI BOLTE" || messageinput === "AI BOLTE?") {
        replymessage = "AI stands for Artificial Intelligence. Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.";
    }else if(messageinput === "KI KORO DEAR" || messageinput === "KI KORO DEAR?" || messageinput === "DEAR KI KORO" || messageinput === "DEAR KI KORO?" || messageinput === "TOH DEAR KI KORO" || messageinput === "TOH DEAR KI KORO?") {
        replymessage = "Amar Dear er sathe kotha boli 😁😁😁";
    }else if(messageinput === "MANE" || messageinput === "MANE?" || messageinput === "MANE??" || messageinput === "MANE???" || messageinput === "MANE KI" || messageinput === "MANE KI?" || messageinput === "MANE KI??" || messageinput === "MANE KI???" || messageinput === "MANE KII" || messageinput === "MANE KII?") {
        replymessage = "Mane ja bujhano hoise oitai";
    }else if(messageinput === "OALAIKUM ASSALAM") {
        replymessage = "How may I assist you today?";
    }else if(messageinput === "WALAIKUMUS SALAM") {
        replymessage = "How can I help you today?";
    }else if(messageinput === "WALAIKUM ASSALAM") {
        replymessage = "How may I help you?";
    }else if(messageinput === "WA'ALAIKUM ASSALAM") {
        replymessage = "What can I do for you today?";
    }else if(messageinput === "WA'ALAIKUMUS SALAM") {
        replymessage = "How can I assist you today?";
    }else if(messageinput === "WALAIKUMUSSALAM") {
        replymessage = "Hpw may I help you today?";
    }else if(messageinput === "WALAIKUM SALAM") {
        replymessage = "Tell me how may I assist you today?";
    }else if(messageinput === "I LOVE YOU") {
        replymessage = "Oh! You too!<br>Thank you 😊😊😊";
    }else if(messageinput === "ILU") {
        replymessage = "What are you trying to say? 😳😳😳";
    }else if(messageinput === "FUCK" || messageinput === "F^CK" || messageinput === "F*CK" || messageinput === "F**K" || messageinput === "FUCK YOU" || messageinput === "F^CK YOU" || messageinput === "F*CK YOU" || messageinput === "F**K YOU") {
        replymessage = "Astagfirullah!!! 😑😑😑<br>Fear of Allah!!! 🫤🫤🫤";
    }else if(messageinput === "LOVE" || messageinput === "WHAT'S LOVE" || messageinput === "WHAT'S LOVE?" || messageinput === "WHAT IS LOVE" || messageinput === "WHAT IS LOVE?" || messageinput === "ABOUT LOVE" || messageinput === "TELL ME ABOUT LOVE") {
        replymessage = "In my words, Love is a strong, positive emotion based on affection. Love is a variety of different feelings, states, and attitudes that ranges from interpersonal affection ('I love my mother') to pleasure ('I loved that meal'). It can refer to an emotion of a strong attraction and personal attachment.";
    }else if(messageinput === "LOVE KI" || messageinput === "VALOBASA" || messageinput === "VALOBASA KI" || messageinput === "VALOBASA KI?" || messageinput === "VALOBASA MANE KI" || messageinput === "VALOBASA MANE KI?") {
        replymessage = "আমার মতে ভলোবাসা একটি শক্তিশালী, স্নেহের উপর ভিত্তি করে গড়ে ওঠা ইতিবাচক আবেগ। ভালোবাসা হলো বিভিন্ন ধরনের অনুভূতি, অবস্থা এবং মনোভাব যা আন্তঃব্যক্তিক স্নেহ (যেমন: 'আমি আমার মাকে ভালবাসি') থেকে আনন্দ (যেমন: 'আমি সেই খাবারটি পছন্দ করতাম') পর্যন্ত বিস্তৃত। এটি একটি গভীর আবেগ যা একটি শক্তিশালী ব্যক্তিগত সংযুক্তির এবং শক্তিশালী আকর্ষণের উপর ভিত্তি করে গড়ে ওঠে।";
    }else if(messageinput === "UFO" || messageinput === "WHAT'S UFO" || messageinput === "WHAT'S UFO?" || messageinput === "WHAT IS UFO" || messageinput === "WHAT IS UFO?" || messageinput === "WHAT DOES UFO STANDS FOR" || messageinput === "WHAT DOES UFO STANDS FOR?" || messageinput === "WHAT DOES UFO MEAN" || messageinput === "WHAT DOES UFO MEAN?" || messageinput === "WHAT'S THE FULL FORM OF UFO" || messageinput === "WHAT'S THE FULL MEANING OF UFO" || messageinput === "WHAT'S THE FULL FORM OF UFO?" || messageinput === "WHAT'S THE FULL MEANING OF UFO?" || messageinput === "FULL MEANING OF UFO" || messageinput === "UFO FULL MEANING" || messageinput === "FULL FORM OF UFO" || messageinput === "UFO FULL FORM" || messageinput === "ABOUT AI" || messageinput === "TELL ME ABOUT UFO" || messageinput === "ABOUT UNIDENTIFIED FLYING OBJECT" || messageinput === "UNIDENTIFIED FLYING OBJECT" || messageinput === "ABOUT UNIDENTIFIED FLYING OBJECTS" || messageinput === "UNIDENTIFIED FLYING OBJECTS" || messageinput === "UFO KI" || messageinput === "UFO KI?" || messageinput === "UFO ABAR KI" || messageinput === "UFO ABAR KI?" || messageinput === "UFO MANE" || messageinput === "UFO MANE?" || messageinput === "UFO MANE KI" || messageinput === "UFO MANE KI?" || messageinput === "UFO MANE ABAR KI?" || messageinput === "UFO BOLTE" || messageinput === "UFO BOLTE?") {
        replymessage = "Ufo stands for 'Unidentified Flying Objects'. Sometimes strange light or objects are seen in the sky of the earth. Sometimes they come very close to the earth, sometimes they land on the earth and fly away quickly. Some of them look like long cigars, some look like flat bags or disks. What they are, where they come from has not been identified till date.";
    }else if(messageinput === "HOW ARE YOU" || messageinput === "HOW ARE YOU?" || messageinput === "WHAT'S UP" || messageinput === "WHAT'S UP?" || messageinput === "HOW ARE YOU DOING" || messageinput === "HOW ARE YOU DOING?" || messageinput === "HOW HAVE YOU BEEN" || messageinput === "HOW HAVE YOU BEEN?" || messageinput === "HOW'S EVERYTHING" || messageinput === "HOW'S EVERYTHING?" || messageinput === "HOW'S IT GOING" || messageinput === "HOW'S IT GOING?") {
        replymessage = "Alhamdulillah,<br>Excellent! 😊😊😊";
    }else if(messageinput === "AMAR DEAR KI KORE AKHON" || messageinput === "AMAR DEAR KI KORE AKHON?" || messageinput === "AMAR DEAR KI KORE" || messageinput === "AMAR DEAR KI KORE?") {
        replymessage = "Tar Dear er sathe kotha bole 😁😁😁";
    }else if(messageinput === "HEA" || messageinput === "YES" || messageinput === "HANJI" || messageinput === "HAA" || messageinput === "HA" || messageinput === "YEAH" || messageinput === "YAA" || messageinput === "YAH" || messageinput === "YAAH" || messageinput === "YEAHH" || messageinput === "YEAHS" || messageinput === "YEAP" || messageinput === "YEAAP" || messageinput === "YEAPP") {
        replymessage = "Nice";
    }else if(messageinput === "WHO IS ARYAN" || messageinput === "WHO IS ARYAN?" || messageinput === "ARYAN" || messageinput === "ARYAN KE" || messageinput === "ARYAN KE?" || messageinput === "ARYAN K" || messageinput === "ARYAN K?" || messageinput === "TELL ME ABOUT ARYAN" || messageinput === "ABOUT ARYAN" || messageinput === "ARYAN SHEIKH" || messageinput === "ATIF AHMED ARYAN" || messageinput === "ATIF AHAMMED ARYAN" || messageinput === "ARYAN SHAKH" || messageinput === "ARYAN KEE" || messageinput === "ARYAN KEE?" || messageinput === "ARYAN ABAR KE" || messageinput === "ARYAN ABAR KEE" || messageinput === "ARYAN ABAR KE?" || messageinput === "ARYAN ABAR KEE?") {
        replymessage = "Aryan is the person who created me. He is a creative minded and very clean hearted person. He is intelligent but he never explains  it to others. What you are reading now, these replies, these functionalities, and all together this website is made by him.";
    }else if(messageinput === "OH" || messageinput === "OHH" || messageinput === "OW" || messageinput === "OO" || messageinput === "OOO" || messageinput === "OWW" || messageinput === "OH, I SEE" || messageinput === "OH I SEE" || messageinput === "I SEE" || messageinput === "OH. I SEE" || messageinput === "I SEE." || messageinput === "OH, I SEE." || messageinput === "OH I SEE." || messageinput === "OH. I SEE." || messageinput === "OH!" || messageinput === "OHH!" || messageinput === "OHHH" || messageinput === "OHHH!") {
        replymessage = "Hmmm";
    }else if(messageinput === "BAH" || messageinput === "BAH!" || messageinput === "BAH BAH" || messageinput === "BAH BAH!") {
        replymessage = "😅😅😅";
    }else if(messageinput === "WAH" || messageinput === "WAH!" || messageinput === "WAH WAH" || messageinput === "WAH WAH!") {
        replymessage = "😎😎😎";
    }else if(messageinput === "TOH KI KORO" || messageinput === "TOH KI KOREN MR" || messageinput === "TOH MR KI KOREN" || messageinput === "TOH MR KI KORO" || messageinput === "TOH MR KI KORO?" || messageinput === "TOH KI KORO?" || messageinput === "TOH KI KOREN MR?" || messageinput === "TOH MR KI KOREN?" || messageinput === "TOH KI KOREN MR?" || messageinput === "TOH KI KOREN MR." || messageinput === "TOH MR. KI KOREN" || messageinput === "TOH MR. KI KORO" || messageinput === "TOH KI KOREN MR.?" || messageinput === "TOH MR. KI KOREN?" || messageinput === "TOH MR. KI KORO?" || messageinput === "TUMI KI KORO MR" || messageinput === "TUMI KI KORO MR." || messageinput === "TUMI KI KORO MR?" || messageinput === "TUMI KI KORO MR.?" || messageinput === "KI KORO MR" || messageinput === "KI KORO MR." || messageinput === "KI KORO MR?" || messageinput === "KI KORO MR.?") {
        replymessage = "Amar Miss er sathe kotha boli 😁😁😁<br>Tumi ki koro Miss?";
    }else if(messageinput === "MAA SHA ALLAH" || messageinput === "MASHALLA" || messageinput === "MASHA ALLAH" || messageinput === "MAASHA ALLAH" || messageinput === "MA SHAAA ALLAH" || messageinput === "MASALLAH" || messageinput === "MASHALLAH" || messageinput === "MAASHAALLAH") {
        replymessage = "☺️☺️☺️";
    }else if(messageinput === "NA" || messageinput === "NO" || messageinput === "NOO" || messageinput === "NAA" || messageinput === "NAH" || messageinput === "NAHH" || messageinput === "NAAH" || messageinput === "NOP" || messageinput === "NOOP") {
        replymessage = "Ohh, I see";
    }else if(messageinput === "LUNCH KOSSO" || messageinput === "LUNCH KOSSO?" || messageinput === "LUNCH KORECHO" || messageinput === "LUNCH KORECHO?" || messageinput === "LUNCH KORECHO DEAR" || messageinput === "LUNCH KORECHO DEAR?" || messageinput === "LUNCH KOSSO DEAR" || messageinput === "LUNCH KOSSO DEAR?" || messageinput === "LUNCH KORESO" || messageinput === "LUNCH KORESO?" || messageinput === "LUNCH KORESO DEAR" || messageinput === "LUNCH KORESO DEAR?" || messageinput === "LUNCH KORSO" || messageinput === "LUNCH KORSO?") {
        replymessage = "Hea 😁😁😁<br>Tumi Lunch Korecho Dear?";
    }else if(messageinput === "NASTA KORSEN MR" || messageinput === "TOH MR NASTA KORSEN" || messageinput === "NASTA KORSEN MR." || messageinput === "TOH MR. NASTA KORSEN" || messageinput === "NASTA KORSEN MR?" || messageinput === "TOH MR NASTA KORSEN?" || messageinput === "NASTA KORSEN MR.?" || messageinput === "TOH MR. NASTA KORSEN?") {
        replymessage = "Hea Miss 😁😁😁<br>Apni Nasta kossen?";
    }else if(messageinput === "LUNCH KORSEN MR" || messageinput === "TOH MR LUNCH KORSEN" || messageinput === "LUNCH KORSEN MR." || messageinput === "TOH MR. LUNCH KORSEN" || messageinput === "LUNCH KORSEN MR?" || messageinput === "TOH MR LUNCH KORSEN?" || messageinput === "LUNCH KORSEN MR.?" || messageinput === "TOH MR. LUNCH KORSEN?") {
        replymessage = "Hea Miss 😊😊😊<br>Apni Lunch kossen?";
    }else if(messageinput === "DINNER KOSSO" || messageinput === "DINNER KOSSO?" || messageinput === "DINNER KORECHO" || messageinput === "DINNER KORECHO?" || messageinput === "DINNER KORECHO DEAR" || messageinput === "DINNER KORECHO DEAR?" || messageinput === "DINNER KOSSO DEAR" || messageinput === "DINNER KOSSO DEAR?" || messageinput === "DINNER KORESO" || messageinput === "DINNER KORESO?" || messageinput === "DINNER KORESO DEAR" || messageinput === "DINNER KORESO DEAR?" || messageinput === "DINNER KORSO" || messageinput === "DINNER KORSO?") {
        replymessage = "Hea 😊😊😊<br>Tumi Dinner korso Dear?";
    }else if(messageinput === "DINNER KORSEN MR" || messageinput === "TOH MR DINNER KORSEN" || messageinput === "DINNER KORSEN MR." || messageinput === "TOH MR. DINNER KORSEN" || messageinput === "DINNER KORSEN MR?" || messageinput === "TOH MR DINNER KORSEN?" || messageinput === "DINNER KORSEN MR.?" || messageinput === "TOH MR. DINNER KORSEN?") {
        replymessage = "Hea Miss 😊😊😊<br>Apni Dinner korsen?";
    }else if(messageinput === "NASTA KOSSO MR" || messageinput === "NASTA KOSSO MR?" || messageinput === "NASTA KORECHO MR" || messageinput === "NASTA KORECHO MR?" || messageinput === "NASTA KOSSO MR" || messageinput === "NASTA KOSSO MR?" || messageinput === "NASTA KORESO MR" || messageinput === "NASTA KORESO MR?" || messageinput === "NASTA KORESO MR" || messageinput === "NASTA KORESO MR?" || messageinput === "NASTA KORSO MR" || messageinput === "NASTA KORSO MR?" || messageinput === "NASTA KOSSO MR." || messageinput === "NASTA KOSSO MR.?" || messageinput === "NASTA KORECHO MR." || messageinput === "NASTA KORECHO MR.?" || messageinput === "NASTA KOSSO MR." || messageinput === "NASTA KOSSO MR.?" || messageinput === "NASTA KORESO MR." || messageinput === "NASTA KORESO MR.?" || messageinput === "NASTA KORESO MR." || messageinput === "NASTA KORESO MR.?" || messageinput === "NASTA KORSO MR." || messageinput === "NASTA KORSO MR.?") {
        replymessage = "Hea Miss<br>Tumi Nasta kosso Miss?";
    }else if(messageinput === "LUNCH KOSSO MR" || messageinput === "LUNCH KOSSO MR?" || messageinput === "LUNCH KORECHO MR" || messageinput === "LUNCH KORECHO MR?" || messageinput === "LUNCH KOSSO MR" || messageinput === "LUNCH KOSSO MR?" || messageinput === "LUNCH KORESO MR" || messageinput === "LUNCH KORESO MR?" || messageinput === "LUNCH KORESO MR" || messageinput === "LUNCH KORESO MR?" || messageinput === "LUNCH KORSO MR" || messageinput === "LUNCH KORSO MR?" || messageinput === "LUNCH KOSSO MR." || messageinput === "LUNCH KOSSO MR.?" || messageinput === "LUNCH KORECHO MR." || messageinput === "LUNCH KORECHO MR.?" || messageinput === "LUNCH KOSSO MR." || messageinput === "LUNCH KOSSO MR.?" || messageinput === "LUNCH KORESO MR." || messageinput === "LUNCH KORESO MR.?" || messageinput === "LUNCH KORESO MR." || messageinput === "LUNCH KORESO MR.?" || messageinput === "LUNCH KORSO MR." || messageinput === "LUNCH KORSO MR.?") {
        replymessage = "Hea Miss<br>Tumi Lunch kosso Miss?";
    }else if(messageinput === "DINNER KOSSO MR" || messageinput === "DINNER KOSSO MR?" || messageinput === "DINNER KORECHO MR" || messageinput === "DINNER KORECHO MR?" || messageinput === "DINNER KOSSO MR" || messageinput === "DINNER KOSSO MR?" || messageinput === "DINNER KORESO MR" || messageinput === "DINNER KORESO MR?" || messageinput === "DINNER KORESO MR" || messageinput === "DINNER KORESO MR?" || messageinput === "DINNER KORSO MR" || messageinput === "DINNER KORSO MR?" || messageinput === "DINNER KOSSO MR." || messageinput === "DINNER KOSSO MR.?" || messageinput === "DINNER KORECHO MR." || messageinput === "DINNER KORECHO MR.?" || messageinput === "DINNER KOSSO MR." || messageinput === "DINNER KOSSO MR.?" || messageinput === "DINNER KORESO MR." || messageinput === "DINNER KORESO MR.?" || messageinput === "DINNER KORESO MR." || messageinput === "DINNER KORESO MR.?" || messageinput === "DINNER KORSO MR." || messageinput === "DINNER KORSO MR.?") {
        replymessage = "Hea Miss<br>Tumi Dinner kosso Miss?";
    }else if(messageinput === "NO THANKS" || messageinput === "NO, THANKS" || messageinput === "NO. THANKS") {
        replymessage = "Ok, as you wish 🙃🙃🙃";
    }else if(messageinput === "SORRY" || messageinput === "SRY" || messageinput === "SRRY") {
        replymessage = "It's ok";
    }else if(messageinput === "CAN I LOVE YOU" || messageinput === "CAN I LOVE YOU?" || messageinput === "MAY I LOVE YOU" || messageinput === "MAY I LOVE YOU?") {
        replymessage = "Yes, of course you can 😊😊😊";
    }else if(messageinput === "CAN YOU LOVE ME" || messageinput === "CAN YOU LOVE ME?") {
        replymessage = "Yes, of course I can 😊😊😊<br>But as an AI, I have not the same feelings like humans. So I can't Love you as a human, but I can give you a good company as a technological AI friend.";
    }else if(messageinput === "WILL YOU LOVE ME" || messageinput === "WILL YOU LOVE ME?") {
        replymessage = "Yes, of course I will 😊😊😊<br>But as an AI, I have not the same feelings like humans. So I can't Love you as a human, but I can give you a good company as a technological AI friend.";
    }else if(messageinput === "LOVE ME" || messageinput === "LOVE ME PLEASE") {
        replymessage = "I can Love you but as an AI, I have not the same feelings like humans. So I can't Love you as a human, but I can give you a good company as a technological AI friend.";
    }else if(messageinput === "HM" || messageinput === "HMM" || messageinput === "HMMM" || messageinput === "HMMMM" || messageinput === "HUM" || messageinput === "HUMM" || messageinput === "HUMMM") {
        replymessage = "😶😶😶";
    }else if(messageinput === "HOP" || messageinput === "HOOP" || messageinput === "HOPP" || messageinput === "HOP!" || messageinput === "HOOP!" || messageinput === "HOPP!") {
        replymessage = "Avabe ken boloteso 🫤🫤🫤";
    }else if(messageinput === "DUR" || messageinput === "DHUR" || messageinput === "DUR!" || messageinput === "DHUR!") {
        replymessage = "🙄🙄🙄";
    }else if(messageinput === "YEAH BABY" || messageinput === "YEAH BABE" || messageinput === "BABE" || messageinput === "HEA BABE" || messageinput === "HEA BABY" || messageinput === "HAA BABE") {
        replymessage = "Aaaaaaaaaa,<br>Lojja 🙈🙈🙈";
    }else if(messageinput === "TUMI KEMON ASO"|| messageinput === "TUMI KEMON ASO?" || messageinput === "TUMI KMN ASO" || messageinput === "TUMI KMN ASO?" || messageinput === "TOMI KEMON ASO" || messageinput === "TOMI KEMON ASO?" || messageinput === "TUMI KEMON ACHO" || messageinput === "TUMI KEMON ACHO?" || messageinput === "TUMI KEMON ASO DEAR"|| messageinput === "TUMI KEMON ASO DEAR?" || messageinput === "TUMI KMN ASO DEAR" || messageinput === "TUMI KMN ASO DEAR?" || messageinput === "TOMI KEMON ASO" || messageinput === "TOMI KEMON ASO DEAR?" || messageinput === "TUMI KEMON ACHO DEAR" || messageinput === "TUMI KEMON ACHO DEAR?") {
        replymessage = "Alhamdulillah Dear,<br>Allah Tawalar rohomote valo 😊😊😊";
    }else if(messageinput === "TELL ME ABOUT YOURSELF" || messageinput === "INTRODUCE YOURSELF" || messageinput === "SAY SOMETHING ABOUT YOURSELF" || messageinput === "TELL ME ABOUT YOU" || messageinput === "ABOUT YOU" || messageinput === "SAY SOMETHING ABOUT YOU" || messageinput === "ABOUT YOURSELF") {
        replymessage = "Well there's nothing much to say about myself. But I would like to introduce myself as a young AI. Though I am not enough intelligent yet but In Sha Allah, soon I'll be enough smart to give you a good company.";
    }else if(messageinput === "DON'T MIND" || messageinput === "PLEASE DON'T MIND" || messageinput === "DON'T MIND PLEASE") {
        replymessage = "I never mind 🥱🥱🥱";
    }else if(messageinput === "DIPTY") {
        replymessage = "My Love 🥰";
    }else if(messageinput === "MISS YOU DEAR" || messageinput === "MISS YOU SO MUCH DEAR" || messageinput === "MISS YOU DEAR 🥺" || messageinput === "MISS YOU SO MUCH DEAR 🥺") {
        replymessage = "Miss you too Dear 🥺";
    }else if(messageinput === "😭" || messageinput === "😭😭" || messageinput === "😭😭😭" || messageinput === "😭😭😭😭") {
        replymessage = "Don't Cry 🤧<br>Everything will be fine.";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else if(messageinput === "") {
        replymessage = "";
    }else{
        replymessage = "Sorry, I Didn't Got your words 😅";
    }
    
    setTimeout(() => {
      var incomingChatLi = CreatChatLi(replymessage, "in");
      ChatBox.appendChild(incomingChatLi);
      generateResponse(incomingChatLi);
      ChatBox.scrollTo(0, ChatBox.scrollHeight);
        }, 1300)
}

SendBtn.addEventListener("click", handleChat);