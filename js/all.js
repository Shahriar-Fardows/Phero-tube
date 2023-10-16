const allData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const datas = await res.json();
    const data = datas.data;
    const id = data[0].category_id;
    console.log(id)
    allData1(id);
};
const musicData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const datas = await res.json();
    const data = datas.data;
    const id = data[1].category_id;
    console.log(id)
    allData1(id);
};


  
//   allData1();
const allData1 = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const datas = await res.json();
    const data = datas.data;
   allData2(data);
    console.log(datas)
};
  
const allData2 = (data) => {
    const cardShower = document.getElementById('main-section');
    cardShower.textContent = '';
    data.forEach(info => {
      console.log('hello ',info);
      const div = document.createElement('div');
      div.classList = `max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`;
      div.innerHTML = `
          <a href="#">
          <img class="rounded-t-lg w-[100vw]" src="${info.thumbnail }" alt="" />
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
  