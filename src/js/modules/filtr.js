const filter = () => {
    const wrapper = document.querySelector('.portfolio-wrapper'),
      markAll = wrapper.querySelectorAll('.all'),
      menu = document.querySelector('.portfolio-menu'),
      no = document.querySelector('.portfolio-no'),
      items = menu.querySelectorAll('li');
        
      const typeFilter = (markType) => {
          markAll.forEach(mark => {
              mark.style.display = "none";
              mark.classList.remove('animated', 'fadeIn');
   
          });
   
          no.style.display = "none";
          no.classList.remove('animated', 'fadeIn');
   
          if (markType) {
              markType.forEach(mark => {
                  mark.style.display = 'block';
                  mark.classList.add('animated', 'fadeIn');
              });
          } else {
                  no.style.display = 'block';
                  no.classList.add('animated', 'fadeIn');
          }
      };
   
      const filterAll =(one, two, three=false) => {
          const btn = menu.querySelector(one);
          
          if (three) {
              btn.addEventListener('click', ()=> {
                  typeFilter(wrapper.querySelectorAll(two));
              });
          } else {
              btn.addEventListener('click', ()=> {
                  typeFilter();
              });
          }
      };
   
      filterAll('.all','.all', true);
      filterAll('.lovers','.lovers', true);
      filterAll('.chef','.chef', true);
      filterAll('.girl','.girl', true);
      filterAll('.guy','.guy', true);
      filterAll('.grandmother');
      filterAll('.granddad');
   
      menu.addEventListener('click', (e)=> {
         let target = e.target;
         
         if (target && target.tagName =='LI') {
             items.forEach(btn => btn.classList.remove('active'));
             target.classList.add('active');
         }
      });
  };
   
  export default filter;