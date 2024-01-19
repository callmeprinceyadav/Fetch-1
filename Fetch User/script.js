const fetchButton = document.getElementById('fetchButton');
const usersContainer = document.getElementById('usersContainer');

fetchButton.addEventListener('click', async () => {
  try {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();

    if (response.ok) {
      displayUsers(data.data);
    } else {
      throw new Error(data.error || 'Failed to fetch users');
    }
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
});

function displayUsers(users) {
  usersContainer.innerHTML = '';

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    const avatar = document.createElement('img');
    avatar.src = user.avatar;
    avatar.alt = `${user.first_name} ${user.last_name}'s avatar`;
    avatar.classList.add('avatar');
    userCard.appendChild(avatar);

    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    const name = document.createElement('h3');
    name.textContent = `${user.first_name} ${user.last_name}`;
    userInfo.appendChild(name);

    const email = document.createElement('p');
    email.textContent = user.email;
    userInfo.appendChild(email);

    userCard.appendChild(userInfo);
    usersContainer.appendChild(userCard);
  });
}
