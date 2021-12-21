let score = 0 ;
        
AFRAME.registerComponent("shootable", {
    init: function(){

    this.el.onclick = () => {
        score++
        document.querySelector('[text]').setAttribute('value', score + " barcos derribados")
        this.el.removeAttribute('shootable')
        this.el.setAttribute('animation', 'property: position; to: 0 -300 0; dur: 4000')
                                        
        }
    }
})
  