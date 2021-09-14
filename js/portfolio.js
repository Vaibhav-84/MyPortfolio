function submitted(form) {
    var n=form.name;
    var e=form.email;
    var m=form.msg;
    if(n.value.length==0){
        alert("Please enter your name!");
        return false;
    }else if(e.value.length==0){
        alert("Please enter your email!");
        return false;
    }else if(m.value.length==0){
        alert("Please type your message!");
        return false;
    }else{
        alert("The message has been sent:)");
        return false;
    }
}
