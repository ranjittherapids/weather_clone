const img = 'https://images.pexels.com/photos/37728/pexels-photo-37728.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
const today = new Date()
const year = (today.getFullYear())
const month = ("0" + (today.getMonth() + 1)).slice(-2)
const todaydate = ("0" + (today.getDate())).slice(-2)
const todaydate1 = ("0" + (today.getDate() + 1)).slice(-2)
const todaydate2 = ("0" + (today.getDate() + 2)).slice(-2)
const todaydate3 = ("0" + (today.getDate() + 3)).slice(-2)
const todaydate4 = ("0" + (today.getDate() + 4)).slice(-2)
const todaydate5 = ("0" + (today.getDate() + 5)).slice(-2)
const fulldate = `${year}-${month}-${todaydate}`
const fulldate1 = `${year}-${month}-${todaydate1}`
const fulldate2 = `${year}-${month}-${todaydate2}`
const fulldate3 = `${year}-${month}-${todaydate3}`
const fulldate4 = `${year}-${month}-${todaydate4}`
const fulldate5 = `${year}-${month}-${todaydate5}`
const inputdata = document.getElementById('searchInput')
inputdata.addEventListener("keypress", () => {
    getcity(inputdata.value)
})
function getcity(city) {  
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=56d6cb4edc01e1c035ad557f2cab09f7`)
        .then(response => {
            var data = (response.data.list)        
            document.getElementById('cityname').innerHTML =(response.data.city.name)
            // filter all date that are given in api
            const currentdate = data.filter(obj => {
                return obj.dt_txt >= `${fulldate} 00:00:00` && obj.dt_txt <= `${fulldate} 21:00:00`;
            })
            const currentdate1 = data.filter(obj => {
                return obj.dt_txt >= `${fulldate1} 00:00:00` && obj.dt_txt <= `${fulldate1} 21:00:00`;
            })
            const currentdate2 = data.filter(obj => {
                return obj.dt_txt >= `${fulldate2} 00:00:00` && obj.dt_txt <= `${fulldate2} 21:00:00`;
            })
            const currentdate3 = data.filter(obj => {
                return obj.dt_txt >= `${fulldate3} 00:00:00` && obj.dt_txt <= `${fulldate3} 21:00:00`;
            })
            const currentdate4 = data.filter(obj => {
                return obj.dt_txt >= `${fulldate4} 00:00:00` && obj.dt_txt <= `${fulldate4} 21:00:00`;
            })
            const currentdate5 = data.filter(obj => {
                return obj.dt_txt >= `${fulldate5} 00:00:00` && obj.dt_txt <= `${fulldate5} 21:00:00`;
            })
            // display data each box
            
            document.getElementById('1').innerHTML = `
                                        <div class='datesection'>
                                        <p>${ new Date(currentdate[0].dt_txt).toLocaleString('en-us', {weekday:'long'})}</p>
                                        <p>${(currentdate[0].dt_txt).slice(0,11)}</P>
                                         </div>
                                         <img class='image' src=${img}/>
                                         <div class='temp_section'>
                                         <small >temp_min:-${(currentdate[0].main.temp_min)}C</small> , 
                                         <small>temp_max:-${(currentdate[0].main.temp_max)}C</small>
                                         </div>
                                        <small class="temp"> temp:-${(currentdate[0].main.temp)}C</small>`

            document.getElementById('1').addEventListener('click', () => { displaytime(currentdate) })
            document.getElementById('2').innerHTML = `
                                         <div class='datesection'>
                                         <p>${ new Date(currentdate1[0].dt_txt).toLocaleString('en-us', {weekday:'long'})}</p>
                                         <p>${(currentdate1[0].dt_txt).slice(0,11)}</P>
                                         </div>
                                         <img class='image' src=${img}/>
                                         <div class='temp_section'>
                                         <small >temp_min:-${(currentdate1[0].main.temp_min)}C</small>, 
                                         <small>temp_max:-${(currentdate1[0].main.temp_max)}C</small>
                                         </div>
                                         <small class="temp"> temp:-${(currentdate1[0].main.temp)}C</small>`

            document.getElementById('2').addEventListener('click', () => { displaytime(currentdate1) })
            document.getElementById('3').innerHTML = `
                                        <div class='datesection'>
                                        <p>${ new Date(currentdate2[0].dt_txt).toLocaleString('en-us', {weekday:'long'})}</p>
                                        <p>${(currentdate2[0].dt_txt).slice(0,11)}</P>
                                        </div>
                                        <img class='image' src=${img}/>
                                        <div class='temp_section'>
                                        <small >temp_min:-${(currentdate2[0].main.temp_min)}C</small>, 
                                        <small>temp_max:-${(currentdate2[0].main.temp_max)}C</small>
                                        </div>
                                         <small class="temp"> temp:-${(currentdate2[0].main.temp)}C</small>`

            document.getElementById('3').addEventListener('click', () => { displaytime(currentdate2) })
            document.getElementById('4').innerHTML = `
                                      <div class='datesection'>
                                      <p>${ new Date(currentdate3[0].dt_txt).toLocaleString('en-us', {weekday:'long'})}</p>
                                      <p>${(currentdate3[0].dt_txt).slice(0,11)}</P>
                                       </div>
                                       <img class='image' src=${img}/>
                                       <div class='temp_section'>
                                       <small >temp_min:-${(currentdate3[0].main.temp_min)}C</small>, 
                                       <small>temp_max:-${(currentdate3[0].main.temp_max)}C</small>
                                       </div>
                                       <small class="temp"> temp:-${(currentdate3[0].main.temp)}C</small>`

            document.getElementById('4').addEventListener('click', () => { displaytime(currentdate3) })
            document.getElementById('5').innerHTML = `
                                 <div class='datesection'>
                                 <p>${ new Date(currentdate4[0].dt_txt).toLocaleString('en-us', {weekday:'long'})}</p>
                                 <p>${(currentdate4[0].dt_txt).slice(0,11)}</P>
                                 </div>
                                 <img class='image' src=${img}/>
                                 <div class='temp_section'>
                                 <small >temp_min:-${(currentdate4[0].main.temp_min)}C</small>, 
                                 <small>temp_max:-${(currentdate4[0].main.temp_max)}C</small>
                                 </div>
                                <small class="temp"> temp:-${(currentdate4[0].main.temp)}C</small>`

            document.getElementById('5').addEventListener('click', () => { displaytime(currentdate4) })

        })
        .catch(err => console.log(err))

    // display all time in the table
    const tbody = document.getElementById('tbody');
    const displaytime = (data) => {
        var row = '';
        data.map(obj => {
            var checking=''
            var timeing=""
          if(obj.dt_txt.slice(11,13)>=12){checking="PM" }
          else{ checking="AM"}
         if((obj.dt_txt).slice(11,13)%12=="0"){timeing="12"}
         else{ timeing=(obj.dt_txt).slice(11,13)%12}
            row += `<tr>
       <td>${timeing}${checking}
       </td>         
       <td>${(obj.main.temp)}C</td>
       <td>${(obj.weather[0].main)}</td>
       </tr>`
        })
        tbody.innerHTML = row

    }
}