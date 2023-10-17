let sortValue = 1000;

const loadCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await (res.json());
  

}



// id part started
const categoriesId = async (Id, isSort = false) => {
    // console.log('clicked', Id)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${Id}`);
    const data = await (res.json());
    const categoryId = data.data;
    console.log(categoryId);

    if (isSort) {
        categoryId.sort((first, second) => {
            const firstView = parseInt(first.others.views.replace(/[^\d.]/g, ""));
            const secondView = parseInt(second.others.views.replace(/[^\d.]/g, ""));
            return secondView - firstView;
        });
    }

    const categoriesCardContainer = document.getElementById('main-section');
    categoriesCardContainer.classList = 'grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-[20px] mx-[15px] lg:mx-[30px]';
    categoriesCardContainer.innerHTML = '';


        categoryId.forEach(id => {
            // console.log(id);

            const divCardContainer = document.createElement('div');
            divCardContainer.classList = `max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`;
            divCardContainer.innerHTML = `
            <a href="#" class="relative">
            <img class=" rounded-t-lg h-[20vh] w-[100vw]" src="${id.thumbnail}" alt="" />
           
          </a>
          <div class="p-5">
            <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img class="mr-4 w-16 h-16 rounded-full" src="${id.authors[0].profile_picture}"alt="Jese Leos"/>
            <div>
              <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white"
                >${id.title}</a>
              <p class="text-base text-gray-500 dark:text-gray-400">
              ${id.authors[0].profile_name}
              </p>
              <p class="text-base text-gray-500 dark:text-gray-400">
              ${id.others.views}  <span>${id.authors[0].verified == true? `<i class="fa fa-check-circle"></i>`  : ' '}</span>
              </p>
            </div>
          </div>`;
            categoriesCardContainer.appendChild(divCardContainer);

        });
    }
// }


const displayTab = (id) => {
    sortValue = id;
    categoriesId(id);
}

const sortingButtonHandler = () => {
    categoriesId(sortValue, true);
}

loadCategories();
