const whatsAppBtn = document.querySelector(".whatsapp-btn");
const whatsAppChat = document.querySelector(".whatsapp-chat");
const whatsAppHeader = document.querySelector(".whatsapp-chat .main-header a");
const sendBtn = document.querySelector("#whatsapp-send-btn");
const sendBtnImg = document.querySelector(".send-icon");
const modalBg = document.querySelector(".whatsapp-form-section");
const form = document.querySelector(".whatsapp-form");
const btnForm = document.querySelector(".whatsapp-form-submit");

TweenMax.set(whatsAppChat, {
  autoAlpha: 0,
  bottom: -1200
})

TweenMax.set(modalBg, {  autoAlpha: 0 })

TweenMax.set(form, { autoAlpha: 0, scale: 0 })

// Chamar a janela do chat

function callWhatsApp() {
  TweenMax.to(whatsAppBtn, 1, {
    autoAlpha: 0,
    bottom: -1200,
    ease: Power2.easeInOut
  });

  TweenMax.to(whatsAppChat, 1, {
    bottom: 0,
    autoAlpha: 1,
    ease: Power2.easeInOut
  });
};

// Fechar a janela do chat

function callBackWhatsApp() {

  // TweenMax.set([modalBg, form], {
  //   clearProps: 'all'
  // })

  TweenMax.to(whatsAppBtn, 1, {
    autoAlpha: 1,
    bottom: 8,
    delay: 2,
    ease: Power2.easeInOut
  });

  TweenMax.to(whatsAppChat, 1, {
    bottom: -1200,
    autoAlpha: 0,
    delay: 2,
    ease: Power2.easeInOut
  });

};

// Fechar o form e mostrar o chat

function showForm(event) {
  rotate360();

  TweenMax.to(modalBg, 1, {
    autoAlpha: 1,
    ease: Power2.easeInOut
  })

  TweenMax.to(form, 1, {
    autoAlpha: 1,
    scale: 1,
    ease: Power2.easeInOut
  })
}

function sendForm(event) {
  event.preventDefault();

  callBackWhatsApp();

  TweenMax.to(modalBg, 1, {
    autoAlpha: 0,
    ease: Power2.easeInOut
  })

  TweenMax.to(form, 1, {
    autoAlpha: 0,
    scale: 0,
    ease: Power2.easeInOut
  })
}

whatsAppBtn.addEventListener("click", callWhatsApp);
whatsAppHeader.addEventListener("click", callBackWhatsApp);

btnForm.addEventListener("click", sendForm);

// Rotacionar a seta no click

function rotate360() {
  TweenMax.set(sendBtnImg, { clearProps: 'all' });
  TweenMax.to(sendBtnImg, 1, { rotation: "360deg", ease: Power2.easeOut });
}

sendBtn.addEventListener("click", showForm);
