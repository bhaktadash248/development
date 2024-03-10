const comments = []

const submitComment = () => {
    const commentInputVal = document.querySelector("#comment-input").value;

    let newComments = {
        comment: commentInputVal,
        author: "Bhakta",
        child: {
            childComment: "",
            childAuthor: ""
        }
    }

    comments.push(newComments)

console.log(comments)

    listingComments()
}

const listingComments = () => {
    const previousComments = document.querySelectorAll("div")
    if(previousComments.length != 0){
        previousComments.forEach(e => e.remove());
    }
    comments && comments.map((comment) => {
        const parentDiv = document.createElement("div")

        const parentComment = document.createElement("p")
        parentComment.innerText = comment.comment
        parentDiv.appendChild(parentComment)

        const parentAuthor = document.createElement("p")
        parentAuthor.innerText = comment.author
        parentDiv.appendChild(parentAuthor)

        document.body.appendChild(parentDiv)

    })
}

document.querySelector("#comment-button").addEventListener("click", submitComment)