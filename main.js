let arr = [];
// render();
function render(){
    let innerHtml = '';
    arr.forEach((e, index)=>{
        // const item = e;
        const html = `<div class="post">
    
        <div class="post_avatar">
            <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="">
        </div>
        <div class="post_body">
            <div class="post_header">
                <div class="post_headertext">
                    <h3>Rakshit Chauhan
                        <span class="verified">
                            <span class="material-symbols-rounded">
                                verified
                            </span>@rakshit435
                            <!-- <img src="verified_FILL1_wght200_GRAD0_opsz48.png" alt=""> -->
                        </span>
                    </h3>
                </div>
                <div class="postheader_description">
                    <p>${e}</p>
                </div>
    
            </div>
            
            <img src="https://source.unsplash.com/random/200x200?sig=incrementingIdentifier"
            alt="">
    
            <div class="post_footer">
                <span class="material-symbols-rounded clickhere">
                    chat_bubble
                </span>
                <span class="material-symbols-rounded clickhere">
                    repeat
                </span>
                <i class="fa-regular fa-heart clickhere"  onclick="reactlove(${index})"></i>

                 <button style="border:none;background-color:transparent" onclick="deleteX(${index})"> <span class="material-symbols-outlined clickhere delete-button">
                 delete
                 </span></button> 
            </div>
        </div>
    </div>`;
    innerHtml += html; 

    })
    document.querySelector('.js-div').innerHTML = innerHtml;
        
    }


// const reactlove = (index) =>{
    
// }

function store() {
        const element = document.querySelector('.js-input');
        const name = element.value;
        arr.push(name);
        
        element.value='';
        if(name===''){
            return;
        }
        render();
}

function deleteX(index){
    arr.splice(index, 1);
    render();
}




// arr.forEach((e)=>{
        
//     let post = document.querySelector('.js-div').innerHTML =
// })
    
    
