//search input
const searchUser = document.getElementById('searchUser');

//init github
const github = new GitHub;
//init ui
const ui = new UI;

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        //make http call
        github.getUser(userText)
            .then(data => {
                console.log(data)
                if(data.profile.message === 'Not Found'){
                    ui.showAlert('User not found', 'alert alert-danger')
                }else{
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else{
        ui.clearProfile()
    }

})