<template>
  <div>
    <div class="navbar-fixed">
      <nav class="opacity-half z-depth-3">
        <div class="container">
          <div class="nav-wrapper">
            <a id="logo" href="#home" class="brand-logo">
              <img src="img/mylogo.png">
            </a>
            <a href="#" data-activates="mobile-demo" class="button-collapse">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#aboutme">About Me</a>
              </li>
              <li>
                <a href="#portofolio">Portofolio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div class="side-nav" id="mobile-demo">
      <div>
        <a class="btn transparent z-depth-0">
          <i class="material-icons">close</i>
        </a>
      </div>
      <div class="center-align">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#portofolio">Portofolio</a>
          </li>
        </ul>
      </div>
    </div>

    <section id="home" class="scrollspy">
      <div class="white-overlay">
        <div class="container center-vertical">
          <h3 class="center-align white-text bold">
            Hi, I'm R. H. Bayu Prabowo.
            <br>
            <span id="demo"></span>
          </h3>
          <div class="center-align" style="padding-top: 120px">
            <a
              href="#aboutme"
              class="white z-depth-0 waves-effect waves-light btn btn-floating pulse"
            >
              <i class="material-icons grey-text text-darken-4" style="font-size: 2rem;">expand_more</i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="aboutme" class="scrollspy opacity-zero">
      <div class="container center-vertical">
        <div class="row">
          <div class="col s12 m5">
            <h5 class="grey-text text-darken-3 left-align">Hello, I am R. H. Bayu Prabowo</h5>
            <p class="left-align">
              A programmer who is passionate, unyielding, and diligent and most importantly loves playing games.
              <i
                class="material-icons"
              >mood</i>
              I am used to developing desktop apps when I was in college as a freelance. I have a passion for building a desktop and web
              app and I think it's cool and satisfied when it's done.
              <i
                class="material-icons"
              >mood</i>
              Right now, I'm excited to learn more about web development technologies. And my great journey has just started now.
            </p>
            <p class="left-align">
              I'm available for work, if you would like to build something together,
              <a
                href="#contacts"
              >get in touch</a>?
            </p>
          </div>
          <div class="col m2 show-on-medium-and-up"></div>
          <div class="col s12 m5">
            <h5 class="grey-text text-darken-3">What I Do</h5>
            <ul>
              <li class="grey-text text-darken-3">
                <div class="bold">Desktop</div>
                <div class="chip grey darken-3 white-text">VB .Net</div>
                <div class="chip grey darken-3 white-text">C#</div>
              </li>
              <li class="grey-text text-darken-3">
                <div class="bold">Front-End</div>
                <div class="chip grey darken-3 white-text">HTML5</div>
                <div class="chip grey darken-3 white-text">CSS3</div>
                <div class="chip grey darken-3 white-text">Javascript</div>
                <div class="chip grey darken-3 white-text">JQuery</div>
                <div class="chip grey darken-3 white-text">Bootstrap</div>
                <div class="chip grey darken-3 white-text">Materialize</div>
              </li>

              <li class="grey-text text-darken-3">
                <div class="bold">Back End</div>
                <div class="chip grey darken-3 white-text">PHP</div>
              </li>

              <li class="grey-text text-darken-3">
                <div class="bold">Database</div>
                <div class="chip grey darken-3 white-text">MySQL</div>
              </li>
              <li class="grey-text text-darken-3">
                <div class="bold">Game Development</div>
                <div class="chip grey darken-3 white-text">XNA</div>
                <div class="chip grey darken-3 white-text">Monogame</div>
                <div class="chip grey darken-3 white-text">Unity</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="portofolio" class="scrollspy opacity-zero grey lighten-4">
      <div class="container center-vertical">
        <!-- <h3 class="center-align dark-text bold">Portofolio</h3> -->
        <div class="row">
          <div class="col l4 m6 s12">
            <div class="card medium z-depth-2">
              <div class="card-image waves-effect waves-light">
                <p></p>
                <img class="activator" src="img/parallax1.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Summy
                  <i class="material-icons right">keyboard_arrow_up</i>
                </span>
                <div class="chip">VB .Net</div>
                <div class="chip">XNA</div>
                <div class="chip">AI</div>
                <div class="chip">Game</div>
              </div>
              <div class="card-action">
                <a href="https://rhbayuprabowo.github.io/summy/" target="_blank">Visit</a>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Summy
                  <i class="material-icons right">keyboard_arrow_down</i>
                </span>
                <p>
                  Summy is a variant of scrabble game. This game is played by arranging the form of addition, subtraction, multiplication,
                  and division. Players will play with artificial intelligence agents that apply the greedy algorithm.
                </p>
              </div>
            </div>
          </div>

          <div class="col l4 m6 s12">
            <div class="card medium z-depth-2">
              <div class="card-image waves-effect waves-light">
                <p></p>
                <img class="activator" src="img/parallax2.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Program Penjualan
                  <i class="material-icons right">keyboard_arrow_up</i>
                </span>
                <div class="chip">VB .Net</div>
                <div class="chip">MySQL</div>
                <div class="chip">Desktop Aplication</div>
              </div>
              <div class="card-action">
                <!-- <a href="https://rhbayuprabowo.github.io/program_penjualan/" target="_blank">Visit</a> -->
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Aplikasi Penjualan
                  <i class="material-icons right">keyboard_arrow_down</i>
                </span>
                <p>
                  Aplikasi Penjualan is a desktop application that has the function to record and print incoming and outgoing
                  transaction reports and display and print all transactions recorded on the database based on the various
                  filters applied.
                </p>
              </div>
            </div>
          </div>

          <div class="col l4 m6 s12">
            <div class="card medium z-depth-2">
              <div class="card-image waves-effect waves-light">
                <p></p>
                <img class="activator" src="img/parallax3.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Patatapo
                  <i class="material-icons right">keyboard_arrow_up</i>
                </span>
                <div class="chip">HTML5</div>
                <div class="chip">CSS3</div>
                <div class="chip">Javascript</div>
                <div class="chip">Paper.js</div>
                <div class="chip">Howler.js</div>
                <div class="chip">Web</div>
              </div>
              <div class="card-action">
                <a href="https://rhbayuprabowo.github.io/patatapo/" target="_blank">Visit</a>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Patatapo
                  <i class="material-icons right">keyboard_arrow_down</i>
                </span>
                <p>
                  This project is a simple cloning site
                  <a href="https://patatap.com/">Patatap</a>.
                </p>
              </div>
            </div>
          </div>

          <div class="col l4 m6 s12">
            <div class="card medium z-depth-2">
              <div class="card-image waves-effect waves-light">
                <p></p>
                <img class="activator" src="img/parallax4.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Aplikasi Boho Outlet
                  <i class="material-icons right">keyboard_arrow_up</i>
                </span>
                <div class="chip">VB .Net</div>
                <div class="chip">MsSQL</div>
                <div class="chip">Desktop Application</div>
              </div>
              <div class="card-action">
                <a
                  href="https://github.com/rhbayuprabowo/aplikasi-boho-outlet/"
                  target="_blank"
                >Visit</a>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Aplikasi Boho Outlet
                  <i class="material-icons right">keyboard_arrow_down</i>
                </span>
                <p>
                  Aplikasi Boho Outlet is a desktop application that has the function to record and print incoming and outgoing
                  transaction reports and display and print all transactions recorded on the database based on the various
                  filters applied.
                </p>
              </div>
            </div>
          </div>

          <div class="col l4 m6 s12">
            <div class="card medium z-depth-2">
              <div class="card-image waves-effect waves-light">
                <p></p>
                <img class="activator" src="img/parallax5.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Mizuxe
                  <i class="material-icons right">keyboard_arrow_up</i>
                </span>
                <div class="chip">HTML5</div>
                <div class="chip">CSS3</div>
                <div class="chip">Bootstrap</div>
                <div class="chip">Web</div>
              </div>
              <div class="card-action">
                <a href="https://rhbayuprabowo.github.io/mizuxe/" target="_blank">Visit</a>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Mizuxe
                  <i class="material-icons right">keyboard_arrow_down</i>
                </span>
                <p>
                  This project was created to learn about html, css, bootstrap, npm and gulp. This is my journey to learn web
                  development.
                </p>
              </div>
            </div>
          </div>

          <div class="col l4 m6 s12">
            <div class="card medium z-depth-2">
              <div class="card-image waves-effect waves-light">
                <p></p>
                <img class="activator" src="img/parallax6.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  LoopLab
                  <i class="material-icons right">keyboard_arrow_up</i>
                </span>
                <div class="chip">HTML5</div>
                <div class="chip">CSS3</div>
                <div class="chip">Bootstrap</div>
                <div class="chip">Web</div>
              </div>
              <div class="card-action">
                <a href="https://rhbayuprabowo.github.io/looplab/" target="_blank">Visit</a>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  LoopLab
                  <i class="material-icons right">keyboard_arrow_down</i>
                </span>
                <p>
                  This project was created to learn about html, css, bootstrap, npm and gulp. This is my journey to learn web
                  development.
                </p>
              </div>
            </div>
          </div>

          <div class="col l4 m6 s12">
            <div class="card medium z-depth-2">
              <div class="card-image waves-effect waves-light">
                <p></p>
                <img class="activator" src="img/parallax7.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Imago Gallery
                  <i class="material-icons right">keyboard_arrow_up</i>
                </span>
                <div class="chip">HTML5</div>
                <div class="chip">CSS3</div>
                <div class="chip">Bootstrap</div>
                <div class="chip">Web</div>
              </div>
              <div class="card-action">
                <a href="https://rhbayuprabowo.github.io/imago-gallery/" target="_blank">Visit</a>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Imago Gallery
                  <i class="material-icons right">keyboard_arrow_down</i>
                </span>
                <p>This project was created to learn about html, css, and bootstrap. This is my journey to learn web development.</p>
              </div>
            </div>
          </div>

          <div class="col l4 m6 s12">
            <div class="card medium z-depth-2">
              <div class="card-image waves-effect waves-light">
                <p></p>
                <img class="activator" src="img/parallax8.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Color Guessing Game
                  <i class="material-icons right">keyboard_arrow_up</i>
                </span>
                <div class="chip">HTML5</div>
                <div class="chip">CSS3</div>
                <div class="chip">Javascript</div>
                <div class="chip">Web</div>
              </div>
              <div class="card-action">
                <a href="https://rhbayuprabowo.github.io/color-guessing-game/" target="_blank">Visit</a>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Color Guessing Game
                  <i class="material-icons right">keyboard_arrow_down</i>
                </span>
                <p>
                  This project was created to learn about javascript, css, html, and simple animation using css. This is my journey
                  to learn web development.
                </p>
              </div>
            </div>
          </div>

          <div class="col l4 m6 s12">
            <div class="card medium z-depth-2">
              <div class="card-image waves-effect waves-light">
                <p></p>
                <img class="activator" src="img/parallax9.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  To Do List
                  <i class="material-icons right">keyboard_arrow_up</i>
                </span>
                <div class="chip">HTML5</div>
                <div class="chip">CSS3</div>
                <div class="chip">Javascript</div>
                <div class="chip">JQuery</div>
                <div class="chip">Web</div>
              </div>
              <div class="card-action">
                <a href="https://rhbayuprabowo.github.io/todo-list/" target="_blank">Visit</a>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  To Do List
                  <i class="material-icons right">keyboard_arrow_down</i>
                </span>
                <p>
                  This project was created to learn about javascript, jQueries, css animation and web development in general.
                  This is my journey to learn web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer id="contacts" class="scrollspy page-footer grey darken-3">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Reza Hidayat Bayu Prabowo</h5>
            <p>
              A programmer who have a passion for building a desktop & web app. Right now, I'm excited to learn more about web
              development technologies.
            </p>
            <br>
            <h5 class="white-text">Links</h5>
            <div class="row">
              <div class="col l4 m4 s12">
                <a
                  class="grey-text text-lighten-3 center-align"
                  target="_blank"
                  href="https://github.com/rhbayuprabowo"
                >
                  <p>
                    <img width="80" src="img/github.png">
                  </p>
                  <p>GitHub</p>
                </a>
              </div>
              <div class="col l4 m4 s12">
                <a
                  class="grey-text text-lighten-3 center-align"
                  target="_blank"
                  href="https://bitbucket.com/rhbayuprabowo"
                >
                  <p>
                    <img width="80" src="img/bitbucket.png">
                  </p>
                  <p>Bitbucket</p>
                </a>
              </div>
              <div class="col l4 m4 s12">
                <a
                  class="grey-text text-lighten-3 center-align"
                  target="_blank"
                  href="https://www.linkedin.com/in/reza-hidayat-bayu-prabowo/"
                >
                  <p>
                    <img width="80" src="img/linkedin.png">
                  </p>
                  <p>Linkedin</p>
                </a>
              </div>
            </div>
          </div>

          <div class="col l5 offset-l1 s12">
            <h5 class="white-text">Contacts</h5>
            <form class="col s12">
              <div class="row">
                <div class="input-field col l12 m12 s12">
                  <input id="name" type="text" class="validate">
                  <label for="name">Name</label>
                </div>
                <div class="input-field col l12 m12 s12">
                  <input id="email" type="email" class="validate">
                  <label for="email">Email</label>
                </div>
                <div class="input-field col l12 m12 s12">
                  <textarea id="message" class="materialize-textarea"></textarea>
                  <label for="message">Message</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col l12 m12 s12">
                  <a
                    id="send"
                    class="white grey-text text-darken-3 waves-effect waves-teal btn center-align"
                  >send</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          Copyright 2018 Reza Hidayat Bayu Prabowo
          <!-- <a class="grey-text text-lighten-4 right" href="#!">More Links</a> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
