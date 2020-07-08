const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    recorder
  `;
};

// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
  <div class="recorder">
  <h1>Audio Recording Test</h1>
    <p>Talk for 3 seconds, then you will hear your recording played back</p>
    <button id="action" class="btn-light" onclick="handleAction()">Start recording...</button> 
  </div>
`;
};

// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control">
  </div>
  <button type="submit">Submit</button>
  </form>
`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});