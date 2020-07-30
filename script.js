function moveup() {
    document.getElementById("main").style.height = "300px";
    document.getElementById("start-btn").style.opacity = "0";
    document.getElementById("start-btn").disabled = true;
}


function start() {
    moveup();
    document.getElementById("options").style.display = "block";
}

function generateScript() {
    const optionsBox = document.getElementById("options");
    const scriptBox = document.getElementById("scriptBox");

    const a = document.getElementById("a").value.toLowerCase();
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const d = document.getElementById("d").value;
    const e = document.getElementById("e").value;

    optionsBox.classList.add("animate__animated", "animate__backOutUp");

    setTimeout(function(){
        optionsBox.style.visibility = "hidden";
    }, 800);

    const title = `Minecraft, but ${a}`
    let script = "In this video, ";


    switch(b) {
        case "me":
            script += "I ";
            break;

        case "friend":
            script += "My friend ";
            break;

        case "both":
            script += "Me and my friend ";
            break;
    }

    script += `coded it so that ${a}. `;

    switch(c) {
        case "yes":
            script+= "Our goal is to beat the ender dragon. If one of us dies, we lose. ";
            break;

        case "no":
            script += "My goal is to beat the ender dragon. If I get killed once, I lose. "
            break;
    }

    script += `Also, according to YouTube statistics, only about ${d}
     percent of people who watch my videos are actually subscribed. `;
    script += "So if you end up liking this video, consider subscribing. ";
    script += "It's free, and you can always change your mind later. "

    switch(e) {
        case "merch":
            script += "By the way, I released an awesome new hoodie! Check it out if you want. "
            break;
        case "youtooz":
            script += "By the way, my Youtooz is now released! Youtooz is a collectible figurine you can buy at youtooz.com. "
            script += "It looks amazing, it's awesome. It's very limited, so it might run out quickly. "
            break;
    }

    script += "Anyways, back to the video";

    document.getElementById("title").innerHTML = title;
    document.getElementById("script").innerHTML = script;

    scriptBox.style.display = "block";
    scriptBox.classList.add("animate__animated", "animate__backInUp");
}
