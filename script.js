// get dom elements 
const gamecontainar=document.querySelector(".containar"),
userresult=document.querySelector(".user_result img"),
cpuresult=document.querySelector(".cpu_result img"),
result=document.querySelector(".result"),
opitionimg=document.querySelectorAll(".option_img ");

opitionimg.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userresult.src=cpuresult.src="images/rock.png";
        result.textContent="Wait ..."
        //  loop through option img again 
        opitionimg.forEach((image2, index2)=>{
            // حذف كلاس ال active 
            index!==index2 && image2.classList.remove("active");
            });
            gamecontainar.classList.add("start");
            // set a timeout to delay the result calculation 
          let time = setTimeout(()=>{
            gamecontainar.classList.remove("start");
            // source clicked option image 
            let imgsrc= e.target.querySelector("img").src;
            userresult.src=imgsrc;
            // generate a random number betwen 0 to 2 
            let randomnum=Math.floor(Math.random()*3);
            // create an array of cpu image option 
            let cpuimg=["images/rock.png","images/paper.png","images/scissors.png"];
            cpuresult.src=cpuimg[randomnum];
            // assign a letter to the cpu option 
            let cpuval=["R","P","S"][randomnum];
            // assign a letter value to the clicked option 
             let userval=["R","P","S"][index];
            //  create an object with all possible outcomes
            let outcomes={
                RR:"Draw",
                RP:"Cpu",
                RS:"User",
                PP:"Draw",
                PR:"User",
                PS:"Cpu",
                SS:"Draw",
                SR:"Cpu",
                SP:"User",
            };
            // look up the outcomes values based on user and cpu optiones 
            let outcomevalue=outcomes[userval+cpuval];
             console.log(outcomevalue);
            //  display the result
                result.textContent=userval===cpuval?"Match Draw": `${outcomevalue} Won !!`;

          },2500)
    });
});

