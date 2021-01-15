const toggleClass = elem => {
  elem.classList.toggle("active");
};
const initDelIconEvent = ()=>{
  let delIcon;
  let delIconCol= [...document.querySelectorAll('.tab-list .icon-trash')];
  delIconCol.forEach((icon,i)=>{
      icon.addEventListener('click', e=>{
        delIcon = e.target.parentNode;
        let parent = delIcon.parentNode;
        parent.removeChild(delIcon);
      })
    }
  )
}
const addRes = (value,parent,dialog) => {
  let arr = value.split(",");
  let div = document.createElement('div');
  div.className ="d-flex col-sm-10 col-md-auto"
  arr.forEach(val => {
   let btn = document.createElement('button');
   btn.className ="font-size-16 ui-button-default ml-5px";
   let span = document.createElement('span');
   span.innerHTML = val
   let icon = document.createElement('i');
   icon.className ="icon-trash";
   icon.addEventListener('click',e=>{

           const delIcon = e.target.parentNode;
           let parent = delIcon.parentNode;
           parent.removeChild(delIcon);

   });
   btn.appendChild(span)
   btn.appendChild(icon)
   div.appendChild(btn)
  });
  const lastChild = parent.children[parent.children.length-1];
  parent.insertBefore(div,lastChild)
  dialog.classList.toggle('active');
  inputValue.value ="";
};
class Cruise {
  constructor(elem) {
    this.elem = "nav";
    this.menu = ".layout-container ";
    this.dialog = ".dialog";
    this.menuClose = ".menu-close";
    this.layout = ".layout-mask";
    this.profile = ".profile-item";
    this.closeDia = ".close-dialog";
    this.cancelDiaBtn = ".dia-cancel-btn";
    this.addResource = ".add-resource";
    this.inputRsource = ".input-resource";
    this.backdrop = ".backdrop";
    this.delIcon = ".icon-trash";
    this.initEvent();
  }
  initEvent() {
    const nav = document.getElementById(`${this.elem}`);
    const menu = document.querySelector(`${this.menu}`);
    const dialog = document.querySelector(`${this.dialog}`);
    const menuClose = document.querySelector(`${this.menuClose}`);
    const layout = document.querySelector(`${this.layout}`);
    const dialogClose = document.querySelector(`${this.closeDia}`);
    const profile = document.querySelector(`${this.profile}`);
    const cancelDiaBtn = document.querySelector(`${this.cancelDiaBtn}`);
    const addResource = document.querySelector(`${this.addResource}`);
    const backdrop = document.querySelector(`${this.backdrop}`);
    let parent = null;
    initDelIconEvent();
    // 添加plus icon 事件
    let iconCol = [...document.querySelectorAll(".tab-list .icon-plus")];
    iconCol.forEach((icon, i) => {
      icon.addEventListener("click", e => {
        parent = e.target.parentNode;
        let DiaLog = document.querySelector(".dialog");
        if (!DiaLog.classList.contains("active")) {
          DiaLog.classList.add("active");
        }
        let DiaLogWrapper = document.querySelector(".dialog-wrapper");
        if(window.innerWidth > 1024) {
            DiaLogWrapper.style.left = e.pageX - 32 + "px";
            DiaLogWrapper.style.top = e.pageY + 30  + "px";
            DiaLogWrapper.style.width = '570px';
            DiaLogWrapper.style.bottom = 'auto';
        }else if(768< window.innerWidth &&  window.innerWidth < 1024){
            DiaLogWrapper.style.width = '400px';
            DiaLogWrapper.style.left = '50%';
            DiaLogWrapper.style.top = '50%';
            DiaLogWrapper.style.bottom = 'auto';

        }else if(window.innerWidth < 768){
            DiaLogWrapper.style.top = 'auto';
            DiaLogWrapper.style.left = '0%';
            DiaLogWrapper.style.width = '100%';
            DiaLogWrapper.style.bottom = '0px';
        }
      });
    });
    menuClose.addEventListener("click", () => toggleClass(menu));
    nav.addEventListener("click", () => toggleClass(menu));
    layout.addEventListener("click", () => toggleClass(menu));
    dialogClose.addEventListener("click", () => toggleClass(dialog));
    backdrop.addEventListener('click',()=> toggleClass(dialog))
    profile.addEventListener("click", () => toggleClass(profile));
    cancelDiaBtn.addEventListener("click", () => toggleClass(dialog));
    addResource.addEventListener("click", event =>
      addRes(inputValue.value,parent,dialog)
    );
 
  }
}
export default Cruise;
