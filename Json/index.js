

async function userdatafetchfunction() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        return Promise.reject(new Error(response.statusText));
    } catch (error) {
        console.log(error);
    }
}

const userdataParentElement = document.getElementsByClassName("userData-div")[0];

userdatafetchfunction().then((response) => {
    response.forEach((item) => {
        const divElement = document.createElement("div");
        divElement.classList.add("user-card");
        divElement.innerHTML = `<div class="user-header">
      <div class="user-info">
        <h2>${item.name}</h2>
        <span class="username">${item.username}</span>
      </div>
    </div>

    <div class="user-body">
      <div class="info-block">
        <p><strong>Email:</strong> <a href="mailto:${item.email}">${item.email}</a></p>
        <p><strong>Phone:</strong> ${item.phone}</p>
        <p><strong>Website:</strong> <a href="http://${item.website}" target="_blank">${item.website}</a></p>
      </div>
      <div class="accordion">
        <button class="accordion-btn">Address</button>
        <div class="accordion-content">
          <p>${item.address.street},${item.address.suite}</p>
          <p>${item.address.city},${item.address.zipcode}</p>
          <p class="geo">Lat:${item.address.geo.lat} | Lng: ${item.address.geo.lng}</p>
        </div>

        <button class="accordion-btn">Company</button>
        <div class="accordion-content">
          <p><strong>Name:</strong> ${item.company.name}</p>
          <p><strong>Catch Phrase:</strong>${item.company.catchPhrase}</p>
          <p><strong>Business:</strong>${item.company.bs}</p>
        </div>
      </div>
    </div `;
        userdataParentElement.append(divElement);
    })
    document.querySelectorAll('.accordion-btn').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            document.querySelectorAll('.accordion-btn').forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('active');
                    btn.nextElementSibling.style.display = 'none';
                }
            });

            const isOpen = content.style.display === 'block';
            button.classList.toggle('active', !isOpen);
            content.style.display = isOpen ? 'none' : 'block';
        });
    });
}).catch((error) => {
    console.log(error);
})
 