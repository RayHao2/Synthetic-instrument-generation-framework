const audioBox = document.getElementById('audio-box') //get the div audio-box
const audioBox2 = document.getElementById('audio-box-2')
let max = 7
let min = 1

var sumbitbutton = document.getElementById('sumbitbutton')
var ids = document.getElementById('ids')
//function that sumbit a form of user chocing audiovar 
function createForm(first,second){
    console.log("first,second",first,second)
    ids.innerHTML = 
        `<select id="ids" name="ids" type="submit"> 
        <option id= "first" value =${first} name="first"> ${first} </option>
        <option id = "second" value =${second} name = "second"> ${second} </option>
        
        </select>`
    sumbitbutton.innerHTML =
        `
        <input id="sumbitbutton" type="submit" value="submit" name="choosen">
        `
}


const handleGetData = (first,second) =>{
    $.ajax({
    type: 'GET',
    url: `/json/${first}/${second}`,
    success: function(response)
    {

        //getting all the data and display in the console
        const firstData = response.firstAudio 
        const secondData = response.secondAudio
        console.log(firstData)
        console.log(secondData)
        firstData.map(post=>{
            console.log(post)
            audioBox.innerHTML =
            //how to get the location right?
            `
            <div class="card p-3 mt-3 mb-3">
                <h> Audio ID: ${first}</h>
                <audio controls>
                <source src= ${post.location} type="audio/wav"> 
                </audio>
            </div>
            `
        })
        secondData.map(post=>{
            console.log(post)
            audioBox2.innerHTML =
            //how to get the location right?
            `
            <div class="card p-3 mt-3 mb-3">
                <h> Audio ID: ${second}</h>
                <audio controls>
                <source src= ${post.location} type="audio/wav"> 
                </audio>
            </div>
            `
        })
        


},//end of success
    error:function(error){
        console.log(error)


    }//end of error

})//end of ajax

}



const startButton = document.getElementById("startButton")
const mainDiv = document.getElementById("hidden")

//starting the rating progcess
startButton.addEventListener('click', ()=>{
    console.log("start button clicked")
    mainDiv.classList.remove("hidden")
    mainDiv.classList.add("show")
    first = Math.floor(Math.random() * (max-min) + min)
    second = Math.floor(Math.random() * (max-min) + min)
    while(first == second)
    {
        first = Math.floor(Math.random() * (max-min) + min)
        second = Math.floor(Math.random() * (max-min) + min)
    }
    handleGetData(first,second)
    createForm(first,second)
    startButton.classList.add("hidden")
})


//Stop Refresh page when form submited


// var form = document.getElementById("selectForm");
// form.addEventListener('submit', function (event) {
//         // event.currentTarget.submit()
//         // event.preventDefault();
//         // do other stuff when the user submits a form
//         first = Math.floor(Math.random() * (max-min) + min)
//         second = Math.floor(Math.random() * (max-min) + min)
//         handleGetData(first,second)
//         createForm(first,second)

// });



// // function handleForm(event) { event.preventDefault(); } 
//  sumbitbutton.addEventListener('click',  (event)=>{
//     console.log("submit button clicked")
//     createForm(first,second)
// })

//using ajax to achice 


$(document).on('submit', '#selectForm', function(e){
    e.preventDefault();

    $.ajax({
        type:'POST',
        url:'/submit',
        data:{
            first:$('#first').val(),
            second:$('#second').val(),
            ids:$('#ids').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),

        },
        success:function(){
            console.log("====submit successfully")
            first = Math.floor(Math.random() * (max-min) + min)
            second = Math.floor(Math.random() * (max-min) + min)
            while(first == second)
            {
                first = Math.floor(Math.random() * (max-min) + min)
                second = Math.floor(Math.random() * (max-min) + min)
            }
            handleGetData(first,second)
            createForm(first,second)
            
        }
    });
    //stop at how access url



});
