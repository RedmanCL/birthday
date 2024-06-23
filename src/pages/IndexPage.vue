<template>
  <q-page style="position: relative">
    <div
      style="
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      "
    >
      <canvas id="test1"></canvas>
      <canvas id="test2"></canvas>
      <canvas id="test3"></canvas>
      <canvas id="test4"></canvas>
      <canvas id="test5"></canvas>
      <canvas id="test6" style="height: 60vh"></canvas>
    </div>
    <div class="q-ma-none justify-center col items-start q-gutter-md">
      <q-card
        class="my-card col-12 col-md-6 q-ma-none"
        flat
        style="height: auto"
      >
        <q-card-section class="" style="background: #a70651">
          <div
            class="text-h6 q-mb-xs flex flex-center"
            style="
              width: 100%;
              height: 100px;
              overflow: hidden;
              position: relative;
            "
          >
            <img
              style="width: 65%; height: 90px; position: absolute; top: -8px"
              src="../assets/hbd1.png"
              alt=""
            />
            <div class="date">July 5<sup>th</sup> '74</div>
            <canvas id="test7" style="position: absolute"></canvas>
          </div>
        </q-card-section>

        <div style="width: 100%; position: relative; margin-bottom: 300px">
          <div style="width: 100%; height: 350px; overflow: hidden">
            <img style="width: 100%" src="../assets/rose/img6.jpg" />
          </div>
          <img
            class=""
            style="
              width: 100%;
              position: absolute;
              bottom: -135px;
              left: 0px;
              background: transparent;
            "
            src="../assets/royal_2.png"
          />
          <div
            style="
              display: flex;
              position: absolute;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 150px;
              bottom: -112px;
              background: rgba(100, 100, 100, 0);
            "
          >
            <img
              class=""
              style="width: 12%; background: transparent"
              src="../assets/rose/fill.png"
            />
          </div>

          <div
            class="flex flex-center"
            style="font-size: 2em; width: 100%; position: absolute; top: 460px"
          >
            <h4 class="dancing-script-titles" style="color: ">
              Celebrating Pst Rose
            </h4>
            <div style="width: 100%">
              <img
                style="
                  width: 100%;
                  transform: scaleY(-1);
                  margin-top: 10px;
                  margin-bottom: 0px;
                "
                src="../assets/fancyline.png"
                alt=""
              />
            </div>
            <p style="font-size: 16px; margin: 5px 10px; text-align: center">
              CELEBRATING PST ROSE ON HER 50TH BIRTHDAY AS WELL AS HER 24 YEARS
              OF SERVICE IN THE MASTER’S TREASURE (HOTR KADUNA)
            </p>
            <p
              style="font-size: 0.5em; margin: 5px 10px; text-align: center"
            ></p>
          </div>
        </div>
      </q-card>

      <div class="col-12 col-md-6 q-ma-none flex col flex-center">
        <div style="width: 90%">
          <q-card
            class=""
            style="
              border-radius: 9px;
              margin-bottom: 30px;
              box-shadow: 5px 5px 15px rgb(225, 235, 235),
                -15px -15px 15px rgb(225, 235, 235);
              width: 100%;
            "
          >
            <div class="" style="width: 100%; overflow: hidden">
              <img src="../assets/rose/img4.jpg" style="width: 100%" />
            </div>

            <q-card-section>
              <div class="text-center" style="font-size: 16px; padding: 15px">
                Pst Rose joined TMT when HOTR Kaduna started in 2000 with Mr
                Harold as the first choir Director with less than 10 members.
                Through her musical skill, commitment and dependability she rose
                to the position she is today in the choir.
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div style="width: 100%"></div>

        <h4 class="text-center dancing-script-titles" style="color: ">
          Overview of TMT
        </h4>
        <div style="width: 100%">
          <img
            style="width: 100%; transform: scaleY(-1); margin-top: 10px"
            src="../assets/fancyline.png"
            alt=""
          />
        </div>

        <section id="pst-rose">
          <p style="font-size: 16px">
            Since the inception of HOTR kaduna, TMT has remained the most
            consistent, demanding and rigorous department which requires at
            least 6hrs of weekly rehearsals which sometimes stretches into the
            dead of the night despite the insecurity and transportation
            challenges. Coupled with the early Sunday rehearsals which requires
            leaving the house sometimes at dawn to be in church.
          </p>
          <p style="font-size: 16px">
            Not forgetting it is the most expensive department because of the
            compulsory demands to look presentable, so there are numerous
            uniforms which all choir members most invest in.
          </p>

          <p style="font-size: 16px">
            Despite all these physical and financial demands, Pst Rose has
            invested 24 years and still counting, diligently and faithfully
            serving TMT infusing high standards and quality in ministration,
            ensuring policies guiding membership of TMT are not compromised and
            instilling discipline in the choir, thus she became a cornerstone.
          </p>

          <p style="font-size: 16px">
            In the last 24 years TMT is adjudged one of the best choirs in
            Kaduna, this is so because of her immense contributions and
            perseverance, irrespective challenges peculiar to the choir.
          </p>
        </section>

        <h4 class="text-center dancing-script-titles" style="color: ">
          Celebration
        </h4>
        <div style="width: 100%">
          <img
            style="width: 100%; transform: scaleY(-1); margin-top: 10px"
            src="../assets/fancyline.png"
            alt=""
          />
        </div>
        <div style="margin: 15px; border-radius: 10px">
          <video
            id="birthday-video"
            autoplay
            muted
            loop
            playsinline
            style="width: 100%; border-radius: 10px"
          >
            <source src="../../src/assets/v1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div style="width: 90%">
          <q-card
            class=""
            style="
              border-radius: 9px;
              margin-bottom: 30px;
              box-shadow: 5px 5px 15px rgb(225, 235, 235),
                -15px -15px 15px rgb(225, 235, 235);
              width: 100%;
            "
          >
            <div class="" style="width: 100%; overflow: hidden">
              <img src="../assets/rose/img5.jpg" style="width: 100%" />
            </div>

            <q-card-section>
              <div class="text-center" style="padding: 15px">
                <p style="font-size: 16px">
                  Pastor Rose's 24 years of steadfast service in the House of
                  God exemplify unwavering dedication and musical excellence.
                  From humble beginnings, her leadership and commitment to high
                  standards have made a profound impact, inspiring all with her
                  faith and passion for ministry.
                </p>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div style="width: 100%">
        <img
          style="
            width: 100%;
            transform: scaleY(-1);
            margin-top: 10px;
            margin-bottom: 0px;
          "
          src="../assets/fancyline.png"
          alt=""
        />
      </div>
      <div>
        <div
          class="bg-white gift"
          style="
            width: 93%;
            padding-bottom: 40px;
            margin: auto;
            position: relative;
            margin-bottom: 30px;
            margin-top: 70px;
            border-radius: 15px;
          "
        >
          <div
            class=""
            style="
              width: 90%;
              height: 350px;
              margin: auto;
              position: relative;
              top: -30px;
              border-radius: 15px;
              overflow: hidden;
              background-image: linear-gradient(
                120deg,
                #89f7fe 0%,
                #66a6ff 100%
              );
            "
          >
            <img
              style="width: 100%; height: 100%; object-fit: cover"
              src="../../src/assets/rose/img2.jpg"
            />
          </div>
          <h4 style="padding-left: 30px; color: ; font-weight: bold">
            Cash Gift
          </h4>
          <div style="padding: 0 30px; font-size: 16px; margin: 10px 0">
            As she celebrates her 50th birthday and 24 years at TMT, let's
            surprise her with a cash gift and our prayers. Please contribute
            WILLINGLY, considering the current challenges. no PRESURE!
          </div>
          <div
            class="accwhite"
            style="
              padding: 7px;
              margin-left: 28px;
              margin-right: 28px;
              margin-bottom: 15px;
              border: 1px solid rgba(0, 0, 0, 0.4);
              border-radius: 10px;
              background: black;
              color: white;
            "
          >
            <p style="margin: 0px 0 0px 0; font-size: 1.2em; color: ">
              <b style="color: ">Bank:</b> GTBank
            </p>
            <p style="margin: 0px 0 0px 0; font-size: 1.2em; color: ">
              <b style="color: ">Account name:</b> Roseline Joseph Umaru
            </p>
            <p id="" style="font-size: 1.2em; color: ">
              <b style="color: ">Account number:</b>
              <span style="color: " id="text-to-copy"> 0022365823</span>
            </p>
          </div>
          <button
            @click="copyText(1), trigger()"
            class="Btn"
            style="
              background-color: #917718;
              background-image: linear-gradient(
                45deg,
                #917718 0%,
                #8f0f69 100%
              );
            "
          >
            <span class="text">Copy Number</span>
            <span class="svgIcon">
              <svg
                fill="white"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
                ></path>
              </svg>
            </span>
          </button>

          <section
            id="notice-section"
            class="notice"
            style="
              background-color: #ffebf5;
              color: #121212;
              border: 2px solid #ff5acd;
              padding: 1px;
              margin: 1.3em 30px 0 30px;
              text-align: center;
              border-radius: 8px;
              font-size: 14px;
            "
          >
            <p>
              Please send cash gifts <strong>ONLY</strong> on
              <strong>5<sup>th</sup> July</strong><br />(birth date).
            </p>
          </section>
        </div>
      </div>

      <h4 class="text-center dancing-script-titles" style="margin-bottom: 10px">
        Gallery
      </h4>
      <div style="width: 100%">
        <img
          style="width: 100%; transform: scaleY(-1); margin-bottom: 20px"
          src="../assets/fancyline.png"
          alt=""
        />
      </div>
      <div>
        <slide />
      </div>

      <h4 class="text-center dancing-script-titles" style="color: ">
        Messages from Loved Ones
      </h4>
      <div style="width: 100%">
        <img
          style="
            width: 100%;
            transform: scaleY(-1);
            margin-top: 10px;
            margin-bottom: 20px;
          "
          src="../assets/fancyline.png"
          alt=""
        />
      </div>

      <div
        id="scrollingDiv"
        class="col-12 col-md-6 q-ma-none flex col flex-center"
        style="padding-top: 20px; height: 250px; overflow: scroll"
      ></div>

      <div
        class="msg"
        style="
          padding-top: 1px;
          margin: 30px 15px;
          padding-bottom: 20px;

          border-radius: 20px;
        "
      >
        <h4
          class="text-center dancing-script-titles"
          style="margin: 30px 0 20px 0; color: white"
        >
          Add Your Message
        </h4>

        <div
          style="
            margin: 0 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        >
          <div class="input-container full-width" style="flex-shrink: 0">
            <label for="name" class="name" style="color: white; font-size: 18px"
              >Name:</label
            >
            <input
              v-model="name"
              placeholder="Enter your name"
              type="text"
              class="input"
            />
            <div class="underline"></div>
          </div>
          <div
            class="input-container full-width"
            style="margin-top: 10px; flex-shrink: 0"
          >
            <label for="name" class="name" style="color: white; font-size: 18px"
              >Message:</label
            >
            <textarea
              v-model="message"
              placeholder="Enter your message"
              type="text"
              class="input"
            ></textarea>
            <div class="underline"></div>
          </div>
          <button
            @click="sendMessage(2)"
            class="btn-donate"
            style="flex-shrink: 0; margin: 10px; font-size: 20px"
          >
            Send
          </button>
        </div>
      </div>

      <div style="width: 100%">
        <img
          style="width: 100%; transform: scaleY(-1); margin-bottom: 20px"
          src="../assets/fancyline.png"
          alt=""
        />
      </div>

      <div id="thank-you-modal" class="modal">
        <div class="modal-content">
          <h5 class="pacifico-regular" style="color: ">
            Thank You for Visiting!
          </h5>
          <p style="font-size: 16px">
            We are grateful for your support as we celebrate Pst. Rose's 50th
            birthday. Your love and support mean the world to us.
          </p>
        </div>
      </div>
    </div>
    <div
      id="floating"
      class="floating"
      style="width: 100%; height: 100vh; overflow: hidden"
    >
      <video id="birthday-video" autoplay muted playsinline style="width: 100%">
        <source src="../../src/assets/v2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button id="cel" class="pacifico-regular cel1" @click="playAudio()"
      style="color: white">
        Celebrate Her
      </button>
    </div>
    <div
      style="
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        z-index: 4000;
        background: red;
      "
    >
      <audio id="myAudio" loop controls>
        <source src="../../src/assets/aud.mp3" type="audio/mpeg" />
        Your browser doesn't support Audio
      </audio>
    </div>
    <footer style="width: 100%; background: #a70651">
      <p>Thank you for celebrating with us!</p>
      <p>&copy; 2024 Happy Birthday</p>
    </footer>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { db } from "../../src/firebase/init";
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { useQuasar } from "quasar";

const $q = useQuasar();

function showNotif(message) {
  let notifMsg;

  message == 1
    ? (notifMsg = "Copied to clipboard")
    : (notifMsg = "Message sent");

  $q.notify({
    message: notifMsg,
    color: "purple",
  });
}

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
  var floating = document.getElementById("floating");
  floating.classList.add("close_video");
}

const textToCopy = ref("");

function copyText(getMsg) {
  const textElement = document.getElementById("text-to-copy");
  const text = textElement.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      showNotif(getMsg);
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

function trigger1() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
}

function send() {
  confetti({
    spread: 360,
    ticks: 200,
    gravity: 1,
    decay: 0.94,
    startVelocity: 30,
    particleCount: 100,
    scalar: 3,
    shapes: ["image"],
    shapeOptions: {
      image: [
        {
          src: "https://particles.js.org/images/fruits/apple.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/avocado.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/banana.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/berries.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/cherry.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/grapes.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/lemon.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/orange.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/peach.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/pear.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/pepper.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/plum.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/star.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/strawberry.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/watermelon.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/watermelon_slice.png",
          width: 32,
          height: 32,
        },
      ],
    },
  });
}

function trigger2() {
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}

function start() {
  const duration = 11 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

function start2() {
  const duration = 12 * 1000,
    animationEnd = Date.now() + duration;

  let skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  (function frame() {
    const timeLeft = animationEnd - Date.now(),
      ticks = Math.max(200, 500 * (timeLeft / duration));

    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
}
start2();

function trigger() {
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 },
  });

  randomInRange();
  trigger1();
  trigger2();
}

start();
//----------------------------------------------
setTimeout(() => {
  // document.getElementById("floating").style.display = "none";
  var cel = document.getElementById("cel");
  cel.classList.add("cel2");
}, 10000);

//----------------------------------------------
const messages = ref([]);

const name = ref("");
const message = ref("");

async function sendMessage(getMsg) {
  try {
    // Validate if both name and message are provided
    if (!name.value.trim() || !message.value.trim()) {
      alert("Please provide both name and message.");
      return;
    }

    // Prepare data to be stored in Firestore
    const data = {
      name: name.value,
      message: message.value,
      timestamp: Timestamp.now(), // Use Firestore timestamp
    };

    // Add data to Firestore collection
    await addDoc(collection(db, "messages"), data);

    // Clear input fields after successful submission
    name.value = "";
    message.value = "";

    send();
    showNotif(getMsg);
    console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
    console.log("Failed to send message. Please try again later.");
  }
}

//----------------------------------------------

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "messages"));
    querySnapshot.forEach((doc) => {
      messages.value.push(doc.data());
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
  }

  if (messages.value.length > 0) {
    setTimeout(() => {
      const carousel = document.getElementById("scrollingDiv");
      let index = 0;

      function addItem(item) {
        const div = document.createElement("div");
        div.style.margin = "1px 30px";
        div.style.padding = "0 0px";
        div.style.width = "100%";

        const title = document.createElement("span");
        title.style.color = "#9A3334";
        title.style.padding = "5px 0";
        title.style.fontSize = "1.2em";
        title.style.fontWeight = "bold";
        title.textContent = item.name;
        div.appendChild(title);

        const description = document.createElement("p");
        description.style.backgroundImage =
          "linear-gradient(45deg, #917718 0%, #8f0f69 100%)";
        description.style.borderRadius = "0px 50px 50px 50px";
        description.style.padding = "15px";
        description.style.color = "white";
        description.style.fontSize = "16px";
        description.style.width = "100%";
        description.textContent = item.message;
        div.appendChild(description);

        carousel.appendChild(div);
      }

      function createNextItem() {
        addItem(messages.value[index]);
        index = (index + 1) % messages.value.length; // Loop back to the first item after the last one

        setTimeout(createNextItem, 2000);
      }

      createNextItem(); // Start the item creation process

      function autoScroll() {
        const scrollingDiv = document.getElementById("scrollingDiv");
        scrollingDiv.scrollTop += 1;

        if (
          scrollingDiv.scrollTop >=
          scrollingDiv.scrollHeight - scrollingDiv.clientHeight
        ) {
          scrollingDiv.scrollTop = 0;
        }
      }

      let autoScrollInterval = setInterval(autoScroll, 20);

      document
        .getElementById("scrollingDiv")
        .addEventListener("mouseenter", () => {
          clearInterval(autoScrollInterval);
        });

      document
        .getElementById("scrollingDiv")
        .addEventListener("mouseleave", () => {
          autoScrollInterval = setInterval(autoScroll, 50);
        });
    }, 2000);
  }
});

//--------------------------

setTimeout(() => {
  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById("test"),
    ctx = canvas.getContext("2d"),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array(),
    colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
  var mouse = { x: 0, y: 0 };

  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);

  function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
      parts[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }
  }

  function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener("mousemove", MouseMove, false);
    for (var i = 0; i < arc; i++) {
      var li = parts[i];
      var distanceFactor = DistanceBetween(mouse, parts[i]);
      var distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
      ctx.beginPath();
      ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
      ctx.fillStyle = li.c;
      ctx.strokeStyle = li.c;
      if (i % 2 == 0) ctx.stroke();
      else ctx.fill();

      li.x = li.x + li.toX * (time * 0.05);
      li.y = li.y + li.toY * (time * 0.05);

      if (li.x > w) {
        li.x = 0;
      }
      if (li.y > h) {
        li.y = 0;
      }
      if (li.x < 0) {
        li.x = w;
      }
      if (li.y < 0) {
        li.y = h;
      }
    }
    if (time < speed) {
      time++;
    }
    setTimeout(particles, 1000 / rate);
  }
  function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;

    //context.fillRect(e.layerX, e.layerY, 5, 5);
    //Draw( e.layerX, e.layerY );
  }
  function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  create();
  particles();
}, 5000);
setTimeout(() => {
  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById("test1"),
    ctx = canvas.getContext("2d"),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array(),
    colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
  var mouse = { x: 0, y: 0 };

  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);

  function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
      parts[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }
  }

  function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener("mousemove", MouseMove, false);
    for (var i = 0; i < arc; i++) {
      var li = parts[i];
      var distanceFactor = DistanceBetween(mouse, parts[i]);
      var distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
      ctx.beginPath();
      ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
      ctx.fillStyle = li.c;
      ctx.strokeStyle = li.c;
      if (i % 2 == 0) ctx.stroke();
      else ctx.fill();

      li.x = li.x + li.toX * (time * 0.05);
      li.y = li.y + li.toY * (time * 0.05);

      if (li.x > w) {
        li.x = 0;
      }
      if (li.y > h) {
        li.y = 0;
      }
      if (li.x < 0) {
        li.x = w;
      }
      if (li.y < 0) {
        li.y = h;
      }
    }
    if (time < speed) {
      time++;
    }
    setTimeout(particles, 1000 / rate);
  }
  function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;

    //context.fillRect(e.layerX, e.layerY, 5, 5);
    //Draw( e.layerX, e.layerY );
  }
  function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  create();
  particles();
}, 5000);
setTimeout(() => {
  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById("test2"),
    ctx = canvas.getContext("2d"),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array(),
    colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
  var mouse = { x: 0, y: 0 };

  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);

  function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
      parts[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }
  }

  function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener("mousemove", MouseMove, false);
    for (var i = 0; i < arc; i++) {
      var li = parts[i];
      var distanceFactor = DistanceBetween(mouse, parts[i]);
      var distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
      ctx.beginPath();
      ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
      ctx.fillStyle = li.c;
      ctx.strokeStyle = li.c;
      if (i % 2 == 0) ctx.stroke();
      else ctx.fill();

      li.x = li.x + li.toX * (time * 0.05);
      li.y = li.y + li.toY * (time * 0.05);

      if (li.x > w) {
        li.x = 0;
      }
      if (li.y > h) {
        li.y = 0;
      }
      if (li.x < 0) {
        li.x = w;
      }
      if (li.y < 0) {
        li.y = h;
      }
    }
    if (time < speed) {
      time++;
    }
    setTimeout(particles, 1000 / rate);
  }
  function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;

    //context.fillRect(e.layerX, e.layerY, 5, 5);
    //Draw( e.layerX, e.layerY );
  }
  function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  create();
  particles();
}, 5000);
setTimeout(() => {
  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById("test3"),
    ctx = canvas.getContext("2d"),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array(),
    colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
  var mouse = { x: 0, y: 0 };

  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);

  function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
      parts[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }
  }

  function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener("mousemove", MouseMove, false);
    for (var i = 0; i < arc; i++) {
      var li = parts[i];
      var distanceFactor = DistanceBetween(mouse, parts[i]);
      var distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
      ctx.beginPath();
      ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
      ctx.fillStyle = li.c;
      ctx.strokeStyle = li.c;
      if (i % 2 == 0) ctx.stroke();
      else ctx.fill();

      li.x = li.x + li.toX * (time * 0.05);
      li.y = li.y + li.toY * (time * 0.05);

      if (li.x > w) {
        li.x = 0;
      }
      if (li.y > h) {
        li.y = 0;
      }
      if (li.x < 0) {
        li.x = w;
      }
      if (li.y < 0) {
        li.y = h;
      }
    }
    if (time < speed) {
      time++;
    }
    setTimeout(particles, 1000 / rate);
  }
  function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;

    //context.fillRect(e.layerX, e.layerY, 5, 5);
    //Draw( e.layerX, e.layerY );
  }
  function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  create();
  particles();
}, 5000);
setTimeout(() => {
  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById("test4"),
    ctx = canvas.getContext("2d"),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array(),
    colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
  var mouse = { x: 0, y: 0 };

  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);

  function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
      parts[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }
  }

  function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener("mousemove", MouseMove, false);
    for (var i = 0; i < arc; i++) {
      var li = parts[i];
      var distanceFactor = DistanceBetween(mouse, parts[i]);
      var distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
      ctx.beginPath();
      ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
      ctx.fillStyle = li.c;
      ctx.strokeStyle = li.c;
      if (i % 2 == 0) ctx.stroke();
      else ctx.fill();

      li.x = li.x + li.toX * (time * 0.05);
      li.y = li.y + li.toY * (time * 0.05);

      if (li.x > w) {
        li.x = 0;
      }
      if (li.y > h) {
        li.y = 0;
      }
      if (li.x < 0) {
        li.x = w;
      }
      if (li.y < 0) {
        li.y = h;
      }
    }
    if (time < speed) {
      time++;
    }
    setTimeout(particles, 1000 / rate);
  }
  function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;

    //context.fillRect(e.layerX, e.layerY, 5, 5);
    //Draw( e.layerX, e.layerY );
  }
  function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  create();
  particles();
}, 5000);
setTimeout(() => {
  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById("test5"),
    ctx = canvas.getContext("2d"),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array(),
    colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
  var mouse = { x: 0, y: 0 };

  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);

  function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
      parts[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }
  }

  function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener("mousemove", MouseMove, false);
    for (var i = 0; i < arc; i++) {
      var li = parts[i];
      var distanceFactor = DistanceBetween(mouse, parts[i]);
      var distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
      ctx.beginPath();
      ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
      ctx.fillStyle = li.c;
      ctx.strokeStyle = li.c;
      if (i % 2 == 0) ctx.stroke();
      else ctx.fill();

      li.x = li.x + li.toX * (time * 0.05);
      li.y = li.y + li.toY * (time * 0.05);

      if (li.x > w) {
        li.x = 0;
      }
      if (li.y > h) {
        li.y = 0;
      }
      if (li.x < 0) {
        li.x = w;
      }
      if (li.y < 0) {
        li.y = h;
      }
    }
    if (time < speed) {
      time++;
    }
    setTimeout(particles, 1000 / rate);
  }
  function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;

    //context.fillRect(e.layerX, e.layerY, 5, 5);
    //Draw( e.layerX, e.layerY );
  }
  function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  create();
  particles();
}, 5000);
setTimeout(() => {
  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById("test6"),
    ctx = canvas.getContext("2d"),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array(),
    colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
  var mouse = { x: 0, y: 0 };

  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);

  function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
      parts[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }
  }

  function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener("mousemove", MouseMove, false);
    for (var i = 0; i < arc; i++) {
      var li = parts[i];
      var distanceFactor = DistanceBetween(mouse, parts[i]);
      var distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
      ctx.beginPath();
      ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
      ctx.fillStyle = li.c;
      ctx.strokeStyle = li.c;
      if (i % 2 == 0) ctx.stroke();
      else ctx.fill();

      li.x = li.x + li.toX * (time * 0.05);
      li.y = li.y + li.toY * (time * 0.05);

      if (li.x > w) {
        li.x = 0;
      }
      if (li.y > h) {
        li.y = 0;
      }
      if (li.x < 0) {
        li.x = w;
      }
      if (li.y < 0) {
        li.y = h;
      }
    }
    if (time < speed) {
      time++;
    }
    setTimeout(particles, 1000 / rate);
  }
  function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;

    //context.fillRect(e.layerX, e.layerY, 5, 5);
    //Draw( e.layerX, e.layerY );
  }
  function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  create();
  particles();
}, 5000);
setTimeout(() => {
  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById("test7"),
    ctx = canvas.getContext("2d"),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array(),
    colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
  var mouse = { x: 0, y: 0 };

  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);

  function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
      parts[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }
  }

  function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener("mousemove", MouseMove, false);
    for (var i = 0; i < arc; i++) {
      var li = parts[i];
      var distanceFactor = DistanceBetween(mouse, parts[i]);
      var distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
      ctx.beginPath();
      ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
      ctx.fillStyle = li.c;
      ctx.strokeStyle = li.c;
      if (i % 2 == 0) ctx.stroke();
      else ctx.fill();

      li.x = li.x + li.toX * (time * 0.05);
      li.y = li.y + li.toY * (time * 0.05);

      if (li.x > w) {
        li.x = 0;
      }
      if (li.y > h) {
        li.y = 0;
      }
      if (li.x < 0) {
        li.x = w;
      }
      if (li.y < 0) {
        li.y = h;
      }
    }
    if (time < speed) {
      time++;
    }
    setTimeout(particles, 1000 / rate);
  }
  function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;

    //context.fillRect(e.layerX, e.layerY, 5, 5);
    //Draw( e.layerX, e.layerY );
  }
  function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  create();
  particles();
}, 5000);
setTimeout(() => {
  var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById("test8"),
    ctx = canvas.getContext("2d"),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array(),
    colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
  var mouse = { x: 0, y: 0 };

  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);

  function create() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
      parts[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      };
    }
  }

  function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener("mousemove", MouseMove, false);
    for (var i = 0; i < arc; i++) {
      var li = parts[i];
      var distanceFactor = DistanceBetween(mouse, parts[i]);
      var distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
      ctx.beginPath();
      ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
      ctx.fillStyle = li.c;
      ctx.strokeStyle = li.c;
      if (i % 2 == 0) ctx.stroke();
      else ctx.fill();

      li.x = li.x + li.toX * (time * 0.05);
      li.y = li.y + li.toY * (time * 0.05);

      if (li.x > w) {
        li.x = 0;
      }
      if (li.y > h) {
        li.y = 0;
      }
      if (li.x < 0) {
        li.x = w;
      }
      if (li.y < 0) {
        li.y = h;
      }
    }
    if (time < speed) {
      time++;
    }
    setTimeout(particles, 1000 / rate);
  }
  function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;

    //context.fillRect(e.layerX, e.layerY, 5, 5);
    //Draw( e.layerX, e.layerY );
  }
  function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  create();
  particles();
}, 5000);
</script>


<script>
import { ref } from "vue";
import slide from "../components/slide.vue";

export default {
  name: "IndexPage",
  components: {
    slide,
  },
  data() {
    return {
      name: "",
      message: "",
    };
  },
  methods: {},
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style scoped>
.date {
  width: 100%;
  position: absolute;
  font-size: 1.5em;
  left: 0;
  top: 55px;
  text-align: center;
  color: #ff69b4;
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  color: white;
  font-weight: 900;
}
.cel1 {
  padding: 10px;
  border-radius: 100px;
  border: none;
  background-color: rgb(189, 7, 95);
  box-shadow: 0px 0px 35px 20px red;
  margin-top: 80px;
  color: white;
  opacity: 0;
  transition: all .5s;
}
.cel2 {
  margin-top: 30px;
  opacity: 1;
  animation: cele 3s linear infinite;
}
@keyframes cele {
  50% {
    box-shadow: 0px 0px 0px 0px red;
  }
  90% {
    box-shadow: 0px 0px 35px 20px rgba(54, 30, 44, .5);
  }
}
.date * {
  font-weight: 900;
  color: #ff69b4;
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  color: white;
}
.accwhite {
  box-shadow: 3px 3px 20px rgb(201, 200, 200);
}
.accwhite * {
  color: white;
}
canvas {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
/*  */
* {
  margin: 0px;
  padding: 0px;
  color: black;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.dancing-script-titles {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  color: #a70651;
}

.pacifico-regular {
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
  color: #a70651;
}
.msg {
  background-color: #917718;
  background-image: linear-gradient(45deg, #917718 0%, #8f0f69 100%);
}
#pst-rose {
  color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 0 15px;
}

#pst-rose h2,
#pst-rose h3 {
  color: #ff6347;
}

#pst-rose p {
  line-height: 1.6;
  margin: 1em 0;
}

.floating {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9005px;
  background-color: black;
}
.close_video {
  animation: close_video 2s ease-in-out forwards;
}
@keyframes close_video {
  0% {
    height: 100vh;
    width: 100%;
    opacity: 1;
  }

  50% {
    height: 1vh;
    width: 100%;
    opacity: 0;
    /* Optional: if you want to hide the element when height is reduced */
  }

  50.1% {
    height: 1vh;
    width: 100%;
    opacity: 0;
  }

  100% {
    height: 1vh;
    width: 10%;
    opacity: 0;
    /* Adjust this if you want different opacity at the end */
  }
}
.modal {
  display: block;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.modal-content {
  background-color: #ffffff;
  margin: auto;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 10px;
  text-align: center;
  color: white;
}
footer {
  background-color: #373838;
  color: white;
  text-align: center;
  padding: 2em 0;
}
footer > p {
  color: white;
}
.Btn {
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  margin: auto;
  font-size: 16px;
}

.text {
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.svgIcon {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-left: 1px solid white;
}
.gift {
  box-shadow: 5px 5px 25px rgb(226, 226, 226), -5px -5px 25px rgb(226, 226, 226);
}
.msg-button {
  width: 205px;
  height: 45px;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  border-radius: 1rem;
  border: none;
  position: relative;
  background: #100720;
  transition: 0.1s;
  box-sizing: content-box;
}

.msg-button::after {
  content: "";
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 94, 247, 1) 17.8%,
    rgba(2, 245, 255, 1) 100.2%
  );
  filter: blur(15px);
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
}

.msg-button:active {
  transform: scale(0.9) rotate(3deg);
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 94, 247, 1) 17.8%,
    rgba(2, 245, 255, 1) 100.2%
  );
  transition: 0.5s;
}

.input-container {
  position: relative;
  margin: 0px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
  color: #333;
  width: 100%;
  outline: none;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  transition: width 0.3s;
}

.input[type="text"]:focus + .underline {
  width: 100%;
}

@keyframes floating-label {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-25px);
    opacity: 0;
  }
}

.input[type="text"]:placeholder-shown + label {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 14px;
  color: #777;
  pointer-events: none;
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
}

.input[type="text"]:focus:not(:placeholder-shown) + label {
  transform: translateY(-25px);
  font-size: 12px;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  animation: floating-label 0.3s forwards;
}

.btn-donate {
  --radii: 0.5em;
  cursor: pointer;
  padding: 5px;
  width: 120px;
  height: 54px;
  font-family: "Segoe UI", system-ui, sans-serif;
  font-weight: 500;
  transition: 0.8s;
  background-size: 280% auto;
  background-color: #917718;
  background-image: linear-gradient(45deg, #bb9a20 0%, #8f0f69 100%);
  border: none;
  border-radius: var(--radii);
  color: white;
  box-shadow: 0px 0px 20px -1px rgb(224, 71, 71),
    0px 5px 25px -1px rgb(149, 129, 70);
}
</style>
