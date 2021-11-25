let hourMoment = moment().get('hour');
const timeData = [
    {
        Timestring: "9am",
        Time: 9
    },
    {
        Timestring: "10am",
        Time: 10
    },
    {
        Timestring: "11am",
        Time: 11
    },
    {
        Timestring: "12pm",
        Time: 12
    },
    {
        Timestring: "1pm",
        Time: 13
    },
    {
        Timestring: "2pm",
        Time: 14
    },
    {
        Timestring: "3pm",
        Time: 15
    },
    {
        Timestring: "4pm",
        Time: 16
    },
    {
        Timestring: "5pm",
        Time: 17
    },
]
timeData.forEach(function (hour, i) {
    $('#container').append(` 
    <div class="container p-1" id="container">
         <div class="row " id="hourrow`+ i + `">
            <div class="time-block">
                `+ hour.Timestring + `
            </div>
             <div class="content-block">
                 <textarea id="content`+ i + `"></textarea>
             </div>
             <button class=saveBtn id="saveBtn`+ i + `">
             <i class="fas fa-save"> save</i>
             </button>
         </div>
     </div>
 `);
    const saveBtnEl = document.getElementById(`saveBtn` + i);
    const contentEl = document.getElementById(`content` + i);
    let savedContent = JSON.parse(localStorage.getItem("contentEl" + i))
    if (savedContent) {
        contentEl.value = savedContent;
    }
    saveBtnEl.addEventListener("click", function () {
        let userInput = contentEl.value;
        localStorage.setItem("contentEl" + i, JSON.stringify(userInput));
        saveBtnEl.innerText = "Saved!"
    })
})