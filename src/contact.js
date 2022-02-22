function contact() {
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.innerHTML = `<h3>CONTACT US</h3>
    <p>
        <h4>Mama Bear</h4>
        Chef

555-555-5554

totallyRealEmail@notFake.com
    </p>
    <p>
        <h4>Papa Bear</h4>
        Manager

555-555-5555

perfectlyRealEmail@notFake.com
    </p>
    <p>
        <h4>Baby Bear</h4>
        Waiter

        555-555-5556
        
        totallyRealEmail@notFake.com
    </p>`;
  content.append(contact);
}

export { contact };
