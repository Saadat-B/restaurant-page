(()=>{"use strict";const e=document.querySelector("#content");!function(){const e=document.createElement("div");e.setAttribute("id","nav-bar"),e.innerHTML='\n<button id="homebtn">Home</button>\n<button id="menubtn">Menu</button>\n<button id="contactbtn">Contact</button>\n',content.prepend(e)}();const n=document.querySelector("#homebtn"),t=document.querySelector("#menubtn"),a=document.querySelector("#contactbtn");n.addEventListener("click",(function(){e.children[1]&&e.removeChild(e.children[1]),function(){const e=document.createElement("div");e.setAttribute("id","homepage"),e.innerHTML='\n  <h3>Beary\'s Breakfast</h3>\n          <div class="card">\n            <p>\n              Beary\'s has the best porridge! The atmosphere and customer service\n              make you feel like you are sitting in the middle of the woods,\n              eating like a bear! This is exactly the kind of place that I like\n              to return to again and again.\n            </p>\n          </div>\n          <div class="card">\n            <h4>Goldilocks</h4>\n            <p>\n              Beary\'s has the best porridge! The atmosphere and customer service\n              make you feel like you are sitting in the middle of the woods,\n              eating like a bear! This is exactly the kind of place that I like\n              to return to again and again.\n            </p>\n          </div>\n          <div class="card">\n            <h4>Hours</h4>\n            <p>\n              <li>Sunday: 8am - 8pm</li>\n              <li>Monday: 6am - 6pm</li>\n              <li>Tuesday: 6am - 6pm</li>\n              <li>Wednesday:6am - 6pm</li>\n              <li>Thursday: 6am - 10pm</li>\n              <li>Friday: 6am - 10pm</li>\n              <li>Saturday: 8am -10pm</li>\n            </p>\n          </div>\n          <div class="card">\n            <h4>Location</h4>\n            <p>123 Forest Drive, Forestville, Maine</p>\n          </div>\n  ',content.append(e)}()})),t.addEventListener("click",(function(){e.children[1]&&e.removeChild(e.children[1]),function(){const e=document.createElement("div");e.setAttribute("id","menu"),e.innerHTML="<h3>MENU</h3>\n  <h4>Beverages</h4>\n  <p><h5>Honey Tea</h5>\n      A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!\n  </p>\n  <p><h5>Beary Tea</h5>\n      A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.\n  </p>\n  <h4>Sides</h4>\n  <p><h5>Toast and Jam</h5>\n      A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.\n  </p>",content.append(e)}()})),a.addEventListener("click",(function(){e.children[1]&&e.removeChild(e.children[1]),function(){const e=document.createElement("div");e.setAttribute("id","contact"),e.innerHTML="<h3>CONTACT US</h3>\n    <p>\n        <h4>Mama Bear</h4>\n        Chef\n\n555-555-5554\n\ntotallyRealEmail@notFake.com\n    </p>\n    <p>\n        <h4>Papa Bear</h4>\n        Manager\n\n555-555-5555\n\nperfectlyRealEmail@notFake.com\n    </p>\n    <p>\n        <h4>Baby Bear</h4>\n        Waiter\n\n        555-555-5556\n        \n        totallyRealEmail@notFake.com\n    </p>",content.append(e)}()}))})();