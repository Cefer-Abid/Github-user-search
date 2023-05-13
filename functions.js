const containerUsers = document.querySelector(".container__users");
const errorLabel = document.querySelector(".filter--form__error-msg");

// 1.
const errorMsg = function (msg = "No results") {
  errorLabel.textContent = msg;
};

export const getUserProfil = async function (userName) {
  try {
    errorMsg("");

    // Get User Profil
    const res = await fetch(`https://api.github.com/users/${userName}`);
    if (!res.ok) throw new Error("Can not found profile");
    const data = await res.json();

    // Display User Profil
    // prettier-ignore
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = new Date(data.created_at);
    // prettier-ignore
    const joinDate = `Joined ${date.getDate()} ${month[date.getMonth()].slice(0,3)} ${date.getFullYear()}`;

    displayUserProfil(data, joinDate);
  } catch (err) {
    errorMsg();
  }
};

export const displayUserProfil = function (data, joinDate) {
  containerUsers.innerHTML = ``;
  const str = `
 <div class="user__div">
  <div class="user--logo__div"><img src="${
    data.avatar_url
  }" class="user--logo" /></div>

  <div class="user__header--div">
    <div class="user--info">
      <h2 class="user--name">${data.name ? data.name : "Not Available"}</h2>
      <span class="user--date">${joinDate}</span>
      <a href="#" class="user--link">@${data.login}</a>
    </div>
  </div>
  
  <div class="user__bio--div">
    <p class="user--bio">
      ${data.bio ? data.bio : "Not Available"}
    </p>
  </div>
  
  <div class="user__follow--div">
    <div>
      <span class="user--follow__title">Repos</span>
      <h2 class="nums user--repos">${data.public_repos}</h2>
    </div>
    <div>
      <span class="user--follow__title">Followers</span>
      <h2 class="nums user--followers">${data.followers}</h2>
    </div>
    <div>
      <span class="user--follow__title">Following</span>
      <h2 class="nums user--following">${data.following}</h2>
    </div>
  </div>
  
  <div class="user__address-div">
    <div class="user--address">
      <div><img src="img/icon/icon-location.svg" class="address-icon" /></div>
      <span class="address-text address--location">
      ${data.location ? data.location : "Not Available"}
      </span>
    </div>
    <div class="user--address">
      <div><img src="img/icon/icon-twitter.svg" class="address-icon" /></div>
      <span class="address-text address--twitter">
      ${data.twitter_username ? data.twitter_username : "Not Available"}
      </span>
    </div>
    <div class="user--address">
      <div><img src="img/icon/icon-website.svg" class="address-icon" /></div>
      <a href="#" class="address-text address--blog">
      ${data.blog ? data.blog : "Not Available"}
      </a>
    </div>
    <div class="user--address">
      <div><img src="img/icon/icon-company.svg" class="address-icon" /></div>
      <span class="address-text">@github</span>
    </div>
  </div>
</div>
    `;
  containerUsers.insertAdjacentHTML("beforeend", str);

  if (!data.location)
    document.querySelector(".address--location").style.color = "#697C9A";
  if (!data.twitter_username)
    document.querySelector(".address--twitter").style.color = "#697C9A";
  if (!data.blog)
    document.querySelector(".address--blog").style.color = "#697C9A";
};
