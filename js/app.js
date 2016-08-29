 

 $(document).ready(function(){


 	$(".submit-cart").click(function(){
      event.preventDefault();

var inputval= $('.shopping-input').val()
 var newlist= `<li>

        <span class="shopping-item">`+ inputval +

        `</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>

      </li>`
    

 	   $(".shopping-list").append(newlist)

 	})


    $(".shopping-list").on('click','.shopping-item-delete',function(){

          this.closest("li")
          .remove();
    })


 //    $(".shopping-list").on('click', '.shopping-item-toggle', function(){
 //        this.closest(".shopping-item")  
 // })

       
    $(".shopping-list").on('click','.shopping-item-toggle',function(){

     $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked")

})


     })