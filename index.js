import notifications from '/data.js'

const notificationsContainer = document.getElementById('notifications-container')


for(let notification of notifications){
    notificationsContainer.innerHTML +=
        `<div class="card">
            <img src="assets/images/${notification.image}" alt="${notification.name}">
            <div class="details-container">
                <div class="details">
                    <div class="inline-elements">
                    <h2 class="hover">${notification.name}</h2>
                    <p>${notification.action}</p>
                    ${notification.group ? `<p><span class="group hover">${notification.group}</span></p>` : ""}
                    ${notification.postName ? `<p class="occasion hover">${notification.postName}</p>` : ''}

                    ${notification.isRead ? '<span class="spot"></span>' : ''}
                    </div>
                    <span class="time">${notification.time}</span>
                </div>
                ${notification.message ? `<div class="message" id="message">${notification.message}</div>` : ""}
            </div>
            ${notification.picture ? `<img class="picture" src="assets/images/${notification.picture}" alt="${notification.picture}">` : ""}
        </div>
        `    
    }
const spots = document.getElementsByClassName('spot')

for(let spot of spots){
    spot.parentElement.parentElement.parentElement.parentElement.style.background = "var(--snow)"
}