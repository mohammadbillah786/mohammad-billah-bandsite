import BandSiteApi from './band-site-api.js';

const bandSiteApi = new BandSiteApi();

async function loadAndRenderComments() {
    try {
        const comments = await bandSiteApi.getComments();
        
        renderdisplay();

        comments.forEach(renderComment);

    } catch (error) {
        console.log('Error', error);
    }
}

function renderComment(comment) {

    const anotherdiv = document.createElement('div');
    anotherdiv.className = 'another-div'

    let avatar = document.createElement('img');
    avatar.className = 'new-comment-avatar';
    anotherdiv.appendChild(avatar);

    const theotherdiv = document.createElement('div');
    theotherdiv.className = 'the-other-div';

    const div = document.createElement('div');
    div.className = 'new-comments-list';

    let newHeader = document.createElement('h4');
    newHeader.innerText = comment.name;
    div.appendChild(newHeader);

    let newDate = document.createElement('h4');
    newDate.innerText = new Date(comment.timestamp).toLocaleDateString();
    div.appendChild(newDate);

    theotherdiv.appendChild(div);

    const newdiv = document.createElement('div');
    newdiv.className = "comments-text"

    let newComment = document.createElement('p');
    newComment.className = 'comment-text'
    newComment.innerText = comment.comment;
    theotherdiv.appendChild(newComment);

    const bigdiv = document.createElement('div');
    bigdiv.className = 'big-div';
    bigdiv.appendChild(anotherdiv);
    bigdiv.appendChild(theotherdiv);

    document.getElementById('comments-list').appendChild(bigdiv);
}

loadAndRenderComments();

const commentsList = document.getElementById('comments-list');

function renderdisplay() {
    commentsList.innerHTML='';
}

const form = document.getElementById('commentsForm');

const button = document.querySelector('button');
button.addEventListener('mouseenter', function() {
    button.style.backgroundColor = 'black'; 
});
button.addEventListener('mouseleave', function() {
    button.style.backgroundColor = ''; 
});

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    let nameInput = event.target.Name;
    let commentInput = event.target.comments;

    let nameValue = nameInput.value.trim();
    let commentValue = commentInput.value.trim();

    nameInput.style.border = '';
    commentInput.style.border = '';

    let hasError = false;

    if (!nameValue) {
        nameInput.style.border = '1px solid red';
        hasError = true;
    }

    if (!commentValue) {
        commentInput.style.border = '1px solid red'; 
        hasError = true;
    }

    if (hasError) {
        return;
    }

    const newComment = {
        name: nameValue,
        comment: commentValue
    };

    try {
        await bandSiteApi.postComment(newComment);

        loadAndRenderComments();
    } catch(error) {
        console.error("Error,", error);
    }

    nameInput.value = '';
    commentInput.value = '';
});





