const allData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const datas = await res.json();
    const data = datas.data;
    const id = data[0].category_id;
    allData1(id);
};
const musicData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const datas = await res.json();
    const data = datas.data;
    const id = data[1].category_id;
    
    allData1(id);
};
const DrawingData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const datas = await res.json();
    const data = datas.data;
    const id = data[2].category_id;
    
    allData1(id);
};
const ComedyData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const datas = await res.json();
    const data = datas.data;
    const id = data[3].category_id;
   
    allData1(id);
};

  
//   allData1();
const allData1 = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const datas = await res.json();  
    allData2(datas);
    
};

// all datas show on here

const allData2 = (datas) => {
  const status = datas.status  
  if(status === true){
    
    const data = datas.data;

    
    

    const cardShower = document.getElementById('main-section');
    cardShower.classList = 'grid grid-col-1  md:grid-cols-2 lg:grid-cols-4 gap-4 my-[40px] mx-[15px] lg:mx-[30px]';
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
              <time pubdate datetime="2022-02-08" title="February 8th, 2022"
                >${info.others.views}  <span>${info.authors[0].verified == true? `<i class="fa fa-check-circle"></i>`  : ' '}</span></time>
            </p>
          </div>
        </div>
      `;  
      cardShower.appendChild(div);
    });
    }
    else{
      const cardShower = document.getElementById('main-section');
      cardShower.classList = '';
      cardShower.textContent = '';
      const div = document.createElement('div');
      div.classList = `text-center m-[10vw]`
      div.innerHTML = `
      <img class=" mx-[5rem] md:mx-[16rem] lg:mx-[28rem]" src="./img/Icon.png" alt="">
      <h1 class="text-6xl text-gray-500 dark:text-gray-400">${datas.message}</h1>
      `;
      cardShower.appendChild(div);
    ;
  }
    
    
}
  