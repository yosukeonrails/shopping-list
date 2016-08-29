 
 var newlist= `<li>

        <span class="shopping-item">bread</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>

      </li>`
      

 $(document).ready(function(){


 	$(".submit-cart").click(function(){

 	   $(".shopping-list").append(newlist)
 	})




 })