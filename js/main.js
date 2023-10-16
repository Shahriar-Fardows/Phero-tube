// call api data on here


const getDatas = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
  const datas = await res.json();
  const data = datas.data;
  getData(data);
};

// datas showing by this function

const getData = (data) => {
  const cardShower = document.getElementById('main-section');
  cardShower.textContent = '';
  data.forEach(info => {
          // convert hera time 
          function secondsToHms(d) {
            d = Number(d);
            var h = Math.floor(d / 3600);
            var m = Math.floor(d % 3600 / 60);
            var s = Math.floor(d % 3600 % 60);
        
            var hDisplay = h > 0 ? h + (h == 1 ? "hrs, " : "hrs, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? "min ago, " : "min ago ") : "";
            
            return hDisplay + mDisplay ; 
        }
      
        const time = secondsToHms(info.others.posted_date)
        // class="text-white text-xs rounded-lg text-center absolute bottom-[2%] right-[2%] bg-gray-800"
    // console.log('hello ',info);
    const div = document.createElement('div');
    div.classList = `max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`;
    div.innerHTML = `
        <a href="#" class="relative">
        <img class=" rounded-t-lg h-[20vh] w-[100vw]" src="${info.thumbnail}" alt="" />
        <p class="text-xs text-white rounded-lg text-center rounded   absolute bottom-[2%] right-[2%] p-[5px]   bg-gray-800">
        ${time}
          </p>
      </a>
      <div class="p-5">
        <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
        <img class="mr-4 w-16 h-16 rounded-full" src="${info.authors[0].profile_picture}"alt="Jese Leos"/>
        <div>
          <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white"
            >${info.title}</a>
          <p class="text-base text-gray-500 dark:text-gray-400">
          ${info.authors[0].profile_name}
          </p>
          <p class="text-base text-gray-500 dark:text-gray-400">
          ${info.others.views}  <span>${info.authors[0].verified == true? `<i class="fa fa-check-circle"></i>`  : ' '}</span>
          </p>
        </div>
      </div>
    `;  
    cardShower.appendChild(div);
  });
}



getDatas();