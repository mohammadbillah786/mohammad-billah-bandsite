const defaultComments = [
    { names: "Victor Pinto", date: "11/02/2023", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." },
    { names: "Christina Cabrera", date: "10/28/2023", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." },
    { names: "Isaac Tadesse", date: "10/20/2023", comment: "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." },
]


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
    newHeader.innerText = comment.names;
    div.appendChild(newHeader);

    let newDate = document.createElement('h4');
    newDate.innerText = comment.date;
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

defaultComments.forEach(renderComment);

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

form.addEventListener('submit', function(event) {
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

    let obj = {};
    obj['names'] = nameValue;
    obj['date'] = new Date().toLocaleDateString();
    obj['comment'] = commentValue;

    defaultComments.unshift(obj);

    renderdisplay();
    defaultComments.forEach(renderComment);

    nameInput.value = '';
    commentInput.value = '';
});





