
function choose_profile() {
    let book_for = document.getElementById("book_for_").value;

    let single_room = document.getElementById("single_room");
    let double_room = document.getElementById("double_room");
    let triple_room = document.getElementById("triple_room");

    let msg = document.querySelector(".message");



    if (book_for == "human") {
        msg.textContent = "Humans are welcome";
        triple_room.disabled = true;


    }
    else if (book_for == "monster")
        {
            msg.textContent = "Monsters are welcome";
            single_room.disabled = true;
        }
}

// email send js  


function sendmail(){
    
    let user= document.getElementById("user_name").value;
    let email= document.getElementById("user_email").value;
    let arrival= document.getElementById("user_arrival").value;
    // let rooms= document.getElementById("no._rooms").value;
    // let people= document.getElementById("no.people").value;
    // let room_type= document.getElementById("roome_type").value;
   

    // let Body='Name: ' + user +"\n Email: "+email+ "\nSubject: "+subject +"\nMessage: " + message;
    // //console.log(name, phone, email, message);


    Email.send({
SecureToken:"3e2ac407-b09f-46c8-a1f2-e79da3f7540c",
        // To: 'ashishkumarsharma411@gmail.com',
        To : 'ashishkumarsharma411@gmail.com',
        From: "anupeshforcloud@gmail.com",
        Subject: "New message on contact from ",
        Body:"hie hte r ",
    }).then(function(message) {
            alert("Your room has been booked sucessfully . Please check your email to view your submitted details.")
        });
       
}