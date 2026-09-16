/* ==============================================
   HUZENTRA TECHNOLOGIES
   Main JavaScript
============================================== */


document.addEventListener("DOMContentLoaded", () => {

  buildHeader();

  buildFooter();

  setupMobileNavigation();

  setupScrollReveal();

  setupContactForm();

  loadProjectPage();

});


/* ==============================================
   HEADER
============================================== */

function buildHeader() {

  const header = document.getElementById("site-header");

  if (!header) return;


  const currentPage =
    document.body.dataset.page || "";


  const isLanding =
    currentPage === "landing";


  if (isLanding) {

    header.innerHTML = `
      <div class="site-header">
        <div class="container header-inner">

          <a href="index.html" class="brand-logo">
            <img
              src="assets/images/huzentra-logo.png"
              alt="Huzentra Technologies"
            >
          </a>

          <div>
            <a
              href="home.html"
              class="btn btn-outline-dark"
            >
              Enter Website →
            </a>
          </div>

        </div>
      </div>
    `;

    return;
  }


  const navigationItems = [

    {
      page: "home",
      label: "Home",
      href: "home.html"
    },

    {
      page: "about",
      label: "About",
      href: "about.html"
    },

    {
      page: "services",
      label: "Services",
      href: "services.html"
    },

    {
      page: "projects",
      label: "Projects",
      href: "projects.html"
    },

    {
      page: "insights",
      label: "Insights",
      href: "insights.html"
    },

    {
      page: "contact",
      label: "Contact",
      href: "contact.html"
    }

  ];


  const navLinks =
    navigationItems.map(item => {

      const active =
        item.page === currentPage
          ? "active"
          : "";

      return `
        <a
          href="${item.href}"
          class="${active}"
        >
          ${item.label}
        </a>
      `;

    }).join("");


  header.innerHTML = `
    <div class="site-header">

      <div class="container header-inner">

        <a
          href="index.html"
          class="brand-logo"
          aria-label="Huzentra Technologies Home"
        >

          <img
            src="assets/images/huzentra-logo.png"
            alt="Huzentra Technologies"
          >

        </a>


        <nav
          class="navigation"
          id="main-navigation"
          aria-label="Main navigation"
        >
          ${navLinks}
        </nav>


        <a
          href="contact.html"
          class="btn btn-primary header-cta"
        >
          Start a Project
        </a>


        <button
          class="mobile-menu-btn"
          id="mobile-menu-btn"
          aria-label="Open menu"
          aria-expanded="false"
        >
          ☰
        </button>

      </div>

    </div>
  `;

}


/* ==============================================
   FOOTER
============================================== */

function buildFooter() {

  const footer =
    document.getElementById("site-footer");


  if (!footer) return;


  const year =
    new Date().getFullYear();


  footer.innerHTML = `
    <div class="site-footer">

      <div class="container">

        <div class="footer-grid">

          <div class="footer-brand">

            <img
              src="assets/images/huzentra-logo.png"
              alt="Huzentra Technologies"
            >

            <p>
              Building modern, scalable and user-focused
              digital solutions.
            </p>

            <p style="margin-top:12px;">
              Building Technology.
              Creating Possibilities.
            </p>

          </div>


          <div class="footer-column">

            <h4>Company</h4>

            <a href="home.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="projects.html">Projects</a>
            <a href="insights.html">Insights</a>

          </div>


          <div class="footer-column">

            <h4>Connect</h4>

            <a href="contact.html">
              Contact
            </a>

            <a href="https://www.linkedin.com/in/huzentra-technologies/" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="https://www.facebook.com/profile.php?id=61594163705896" aria-label="Facebook">
              Facebook
            </a>

            <a href="https://www.instagram.com/huzentratechnologies/" aria-label="Instagram">
              Instagram
            </a>

          </div>

        </div>


        <div class="footer-bottom">

          <span>
            © ${year} Huzentra Technologies.
            All rights reserved.
          </span>

          <span>
            Pakistan • Building for a global future
          </span>

        </div>

      </div>

    </div>
  `;

}


/* ==============================================
   MOBILE NAVIGATION
============================================== */

function setupMobileNavigation() {

  const button =
    document.getElementById("mobile-menu-btn");

  const navigation =
    document.getElementById("main-navigation");


  if (!button || !navigation) return;


  button.addEventListener("click", () => {

    const open =
      navigation.classList.toggle("open");


    button.setAttribute(
      "aria-expanded",
      open
    );


    button.textContent =
      open ? "✕" : "☰";

  });


  navigation
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        navigation.classList.remove("open");

        button.setAttribute(
          "aria-expanded",
          "false"
        );

        button.textContent = "☰";

      });

    });

}


/* ==============================================
   SCROLL REVEAL
============================================== */

function setupScrollReveal() {

  const items =
    document.querySelectorAll(".reveal");


  if (!items.length) return;


  if (
    "IntersectionObserver"
    in window
  ) {

    const observer =
      new IntersectionObserver(

        entries => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add("visible");


              observer.unobserve(
                entry.target
              );

            }

          });

        },

        {
          threshold: 0.12
        }

      );


    items.forEach(item =>
      observer.observe(item)
    );

  } else {

    items.forEach(item =>
      item.classList.add("visible")
    );

  }

}


/* ==============================================
   CONTACT FORM
============================================== */

function setupContactForm() {

  const form =
    document.getElementById("contact-form");


  if (!form) return;


  const message =
    document.getElementById("form-message");


  form.addEventListener("submit", event => {

    event.preventDefault();


    const data =
      new FormData(form);


    const name =
      data.get("name");


    message.textContent =
      `Thank you, ${name}. Your inquiry has been prepared. ` +
      `Connect this form to your business email or backend before launch.`;


    message.style.color =
      "#1F6FE5";


    form.reset();

  });

}


/* ==============================================
   PROJECT DATA
============================================== */

const projects = {

  "cv-maker": {

    title:
      "CV Maker",

    status:
      "Early Development",

    summary:
      "A Flutter application designed to help users create professional and ATS-friendly CVs.",

    description:
      "CV Maker is being designed as a guided resume creation experience. Users will enter their personal, educational and professional information and transform it into structured CV templates. The long-term direction includes free and premium features and downloadable ATS-friendly outputs.",

    progress:
      "Early Stage",

    type:
      "Huzentra Product",

    technologies:
      [
        "Flutter",
        "ATS-Friendly CVs",
        "Product Development"
      ],

    features: [

      {
        title:
          "Guided CV Creation",

        text:
          "Structured forms help users provide their information step by step."
      },

      {
        title:
          "ATS-Friendly Templates",

        text:
          "Templates are designed with readability and applicant tracking systems in mind."
      },

      {
        title:
          "Free & Premium Direction",

        text:
          "The product is planned with both accessible free features and premium functionality."
      }

    ]

  },


  "srt-viewer": {

    title:
      "SRT File Viewer",

    status:
      "Approximately 70% Complete",

    summary:
      "A Flutter-based utility application for viewing subtitle files.",

    description:
      "SRT File Viewer was developed as an internship project and explores file handling, content parsing and user-interface development using Flutter. The application is currently unpublished and remains a development portfolio project.",

    progress:
      "Approximately 70%",

    type:
      "Internship Project",

    technologies:
      [
        "Flutter",
        "File Handling",
        "Subtitle Parsing"
      ],

    features: [

      {
        title:
          "SRT File Reading",

        text:
          "Open and process subtitle files within the application."
      },

      {
        title:
          "Readable Interface",

        text:
          "Subtitle content is presented through a simple application interface."
      },

      {
        title:
          "Flutter Development",

        text:
          "Built as a practical learning project using Flutter."
      }

    ]

  },


  "edunexus": {

    title:
      "EduNexus",

    status:
      "Approximately 70% Complete",

    summary:
      "A university management system developed as a final-year project.",

    description:
      "EduNexus is designed to support university-related academic and administrative workflows through a centralized Flutter application. The project demonstrates the application of mobile development to a larger management-system use case.",

    progress:
      "Approximately 70%",

    type:
      "Final Year Project",

    technologies:
      [
        "Flutter",
        "Education Technology",
        "Management System"
      ],

    features: [

      {
        title:
          "Academic Management",

        text:
          "Supports structured academic information and university workflows."
      },

      {
        title:
          "Centralized Experience",

        text:
          "Designed to bring multiple university-related functions into one system."
      },

      {
        title:
          "Scalable Direction",

        text:
          "Provides a foundation that can evolve into a broader university platform."
      }

    ]

  }

};


/* ==============================================
   PROJECT PAGE
============================================== */

function loadProjectPage() {

  const projectTitle =
    document.getElementById("project-title");


  if (!projectTitle) return;


  const params =
    new URLSearchParams(
      window.location.search
    );


  const projectId =
    params.get("id");


  const project =
    projects[projectId];


  if (!project) {

    window.location.href =
      "projects.html";

    return;

  }


  document.title =
    `${project.title} | Huzentra Technologies`;


  setText(
    "project-title",
    project.title
  );


  setText(
    "project-status",
    project.status
  );


  setText(
    "project-summary",
    project.summary
  );


  setText(
    "project-heading",
    project.title
  );


  setText(
    "project-description",
    project.description
  );


  setText(
    "project-progress",
    project.progress
  );


  setText(
    "project-type",
    project.type
  );


  const techContainer =
    document.getElementById(
      "project-technologies"
    );


  techContainer.innerHTML =
    project.technologies
      .map(
        tech => `<span>${tech}</span>`
      )
      .join("");


  const featureContainer =
    document.getElementById(
      "project-features"
    );


  featureContainer.innerHTML =
    project.features
      .map((feature, index) => `

        <article class="feature-card">

          <div class="card-icon">
            ${String(index + 1).padStart(2, "0")}
          </div>

          <h3>
            ${feature.title}
          </h3>

          <p>
            ${feature.text}
          </p>

        </article>

      `)
      .join("");

}


/* ==============================================
   HELPER
============================================== */

function setText(id, value) {

  const element =
    document.getElementById(id);


  if (element) {

    element.textContent =
      value;

  }

}