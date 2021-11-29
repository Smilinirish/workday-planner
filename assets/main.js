const timeData = [
    {
        Timestring: "7am",
        Time: 7
    },
    {
        Timestring: "8am",
        Time: 8
    },
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
    {
        Timestring: "6am",
        Time: 18
    },
    {
        Timestring: "7am",
        Time: 19
    },
]
timeData.forEach(function (hour, i) {
    $('#container').append(` 
    <div class="container p-3 d-flex justify-content-center" id="container">
         <div class="row " id="hourrow`+ i + `">
            <div class="time-block" id="time`+ i + `">
                <p>`+ hour.Timestring + `</p>
            </div>
             <div class="content-block" id="textTime`+ i + `">
                 <textarea id="content`+ i + `"></textarea>
             </div>
             <button class=saveBtn id="saveBtn`+ i + `">
             <p><i class="fas fa-save"> save</i></p>
             </button>
         </div>
     </div>
 `);
    const saveBtnEl = document.getElementById(`saveBtn` + i);
    const contentEl = document.getElementById(`content` + i);
    const timeEl = document.getElementById(`time` + i);
    const textTimeEl =document.getElementById(`textTime` + i);
    let savedContent = JSON.parse(localStorage.getItem("contentEl" + i))
    if (savedContent) {
        contentEl.value = savedContent;
    }
    saveBtnEl.addEventListener("click", function () {
        let Input = contentEl.value;
        localStorage.setItem("contentEl" + i, JSON.stringify(Input));
        saveBtnEl.innerText = "Saved!"
    })
    const timeCheck = () => {
        let time = moment().get('hour');
        let calTime = hour.Time
        if (calTime === time) {
            timeEl.classList.add('present');
            textTimeEl.classList.add('present');
        }
        if (calTime > time) {
            timeEl.classList.add('future');
            textTimeEl.classList.add('future');
        }
        if (calTime < time) {
            timeEl.classList.add('past');
            textTimeEl.classList.add('past');
        }
    }
    const timeCheckLoop = () => {
        setInterval(() => {
            timeCheck()
        }, 300, 000)
    }
    timeCheckLoop()
})
const displayTime = () => {
    setInterval(() => {
        document.getElementById('currentDay').innerText = moment().format('MMMM Do YYYY, h:mm a').toString()
    }, 60, 000)
}
displayTime()