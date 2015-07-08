var punishments = ["Buy/make coffee and serve everyone","Write a blog post","Come to next class in formal attire","End convo with 'lunch is coming' until lunchtime","Sing / dance in front of class","Stand in the corner for one hour","Bow to everyone and apologize seriously","Push up x2 for every min. late","Jog to farry pier during lunch and take a selfie"];
var punishment = function(){
    return punishments[Math.floor(Math.random()*punishments.length)]
}

document.getElementById("myBTN").addEventListener("click", function(){
    elem = document.getElementById("hellokitty");
    elem.innerHTML = punishment();
})

document.getElementById("submitp").addEventListener("click", function(){
    punishments.push(document.getElementById("exampleInputEmail1").value)
})
