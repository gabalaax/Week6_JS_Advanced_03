const siteContent = {
    "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
    },
    "cta": {
      "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
    },
    "main-content": {
      "features-h4":"Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4":"About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4":"Vision",
      "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
      "contact-h4" : "Contact",
      "address" : "123 Way 456 Street Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    },
    "footer": {
      "copyright" : "Copyright Great Idea! 2018"
    },
  };
  
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"]);

  let menu = document.querySelectorAll("nav  a");

  menu.forEach((item, index) =>{
    item.textContent = siteContent ["nav"] [`nav-item-${index}`]
    item.style.color = 'green'
    
  });

  let navBar = document.querySelector('nav');

  const newL = document.createElement('a');

  newL.textContent = 'gado hada';

  newL.style.color = 'green'

  navBar.appendChild(newL);


  let ctatext = document.querySelector(".cta-text h1");

  ctatext.textContent = siteContent ["cta"] ["h1"];
  
  let ctabutton = document.querySelector(".cta-text button");

  ctabutton.textContent = siteContent ["cta"] ["button"];

  let ctaImg = document.querySelector("#cta-img ");
  
  ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


  let topContent = document.querySelector(".top-content");

  let topHead = document.querySelectorAll(".top-content h4");
  
  topHead[0].textContent = siteContent ["main-content"]  ["features-h4"];
  topHead[1].textContent = siteContent ["main-content"] ["about-h4"];

  let topPara = document.querySelectorAll(".top-content p");

  topPara[0].textContent = siteContent ["main-content"] ["features-content"];
  topPara[1].textContent = siteContent ["main-content"] ["about-content"];
  


  let img = document.querySelector("#middle-img");

  img.setAttribute('src', siteContent["main-content"] ["middle-img-src"]);



  let bottomContent = document.querySelector(".bottom-content");

  let bottomHead = document.querySelectorAll(" .bottom-content h4");

  bottomHead[0].textContent = siteContent ["main-content"] ["services-h4"];
  bottomHead[1].textContent = siteContent ["main-content"] ["product-h4"];
  bottomHead[2].textContent = siteContent ["main-content"] ["vision-h4"];

  let bottomPara = document.querySelectorAll(" .bottom-content p");

  bottomPara[0].textContent = siteContent ["main-content"] ["services-content"];
  bottomPara[1].textContent = siteContent ["main-content"] ["product-content"];
  bottomPara[2].textContent = siteContent ["main-content"] ["vision-content"];

  let contact = document.querySelector(".contact");

  let contacth4 = document.querySelector(".contact  h4");
  contacth4.textContent = siteContent ["contact"] ["contact-h4"];

  let contactpara = document.querySelectorAll(".contact  p");

  contactpara[0].textContent = siteContent ["contact"] ["address"];
  contactpara[1].textContent = siteContent ["contact"] ["phone"];
  contactpara[2].textContent = siteContent ["contact"] ["email"];

  let footer = document.querySelector("footer p");
  
  footer.textContent = siteContent ["footer"] ["copyright"];
