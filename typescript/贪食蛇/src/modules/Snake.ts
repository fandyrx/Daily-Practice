class Snake {
  head:HTMLElement;
  bodies:HTMLCollectionOf<HTMLElement>;
  element: HTMLElement;
  constructor(){
    this.element = document.getElementById("snake")!
    this.head = document.querySelector('#snake > div')! as HTMLElement;
    this.bodies = this.element.getElementsByTagName("div")
  }

  get X(){
    return this.head.offsetLeft
  }
  get Y(){
    return this.head.offsetTop
  }

  set X(value){
  
    
    if(this.X === value){
      return;

    }
    if(value < 0 ||value >290){
      throw new Error('撞墙了')
    }

    if(this.bodies[1] && this.bodies[1].offsetLeft ===value){
        if(value >this.X){
          value = this.X -10;
        }else {
          value = this.X +10
        }
    }

    this.moveBody()
    this.head.style.left = value + "px";
    this.checkHeadBody()


  }
  set Y(value){
    if(this.Y === value){
      return;
    }
    if(value <0 || value>290){
      throw new Error('撞墙了')
    }

    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop ===value){
      if(value >this.Y){
        value = this.Y -10;
      }else {
        value = this.Y +10
      };
    }
    this.moveBody()
    this.head.style.top = value + "px";
    this.checkHeadBody()

  }

  addBody(){
    this.element.insertAdjacentHTML("beforeend","<div></div>")
  }

  moveBody(){
      //第四节等于第三节位置
      //第三节等于第二节位置
      // 从后往前改

      for(let i = this.bodies.length-1;i>0;i--){
        //获取前面的位置
        let X =(this.bodies[i-1] as HTMLElement).offsetLeft;
        let Y =(this.bodies[i-1] as HTMLElement).offsetTop;

       ( this.bodies[i] as HTMLElement).style.left = X + "px";
       ( this.bodies[i] as HTMLElement).style.top = Y + "px";
      }
  }


  checkHeadBody(){
    for(let i = 1; i <this.bodies.length; i++ ){
        if(this.X === this.bodies[i].offsetLeft && this.Y === this.bodies[i].offsetTop){
          throw new Error('撞到自己了')
        }
    }
  }

}

export default Snake;