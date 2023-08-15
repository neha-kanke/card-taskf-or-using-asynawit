const cl= console.log

const cardcontainerid=document.getElementById("cardcontainerid");
const cardbutton=document.getElementById("cardbutton")


const db=[
        {
            imgUrl: 'https://source.unsplash.com/random/?movies',
            catg: 'city',
            footer:"gallary is best"
        },
    
]





function getmoviesid(){
    return promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error=Math.random()<=.3?false:true;
            if(!error){
                resolve(`sucessfully get id `);
              
             
            }else{
                reject(`not  successful get id `)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Something went wrong while getting ID',
                    showConfirmButton: false,
                    timer: 1500,
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkHtt2rKK3Sa4LTspV8DjUTmkyyLh3Xo1soa-jhLWYnoe9o_Irtc_sh4LuKrn7IzWL1w&usqp=CAU',
                    imageWidth: 100,
                })

            }
            
        }, 1000);
    })
    
}
function deatilmoviescard(){
    return p= new Promise((resolve,reject)=>{
        let error=Math.random()<=.4?false:true;
        if(!error){
            resolve(`Movie Card get sucessfully`)
        }else{
            reject(`not succesfully card id`)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'not get id',
                showConfirmButton: false,
                timer: 2000,
                imageUrl: 'https://previews.123rf.com/images/yayayoy/yayayoy2011/yayayoy201100006/159659237-worried-or-sad-emoji-emoticon-resting-his-face-on-hand-and-looking-up.jpg',
                imageWidth:200,
                imageWidth:200

              })
        }
    })
}
function teamplating(arr){
  let result="";
db.forEach(ele => {
    result+=` <div class="card mt-4">
    <div class="card-header text-uppercase bg-danger">
        <h3>${ele.catg}</h3>
    </div>
    <div class="card-body img-card">
        <img src="${ele.imgUrl}" alt="">
    </div>
    <div class="card-footer">
        <p>${ele.footer}</p>
    </div>
</div> `
    
});
  
cardcontainerid.innerHTML=result
}








const onclickbtn=()=>{
    async function init(){
        try{
            let res= await getmoviesid();
            cl(res)
            let res1=await deatilmoviescard()
            cl(res1)
            Swal.fire({
                title: 'Sweet!',
                text: 'finally card get .',
                imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2003581412/display_1500/stock-vector-emoji-emoticon-proud-of-himself-pointing-oneself-with-fingers-happy-2003581412.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            teamplating()
            cardbutton.classList.add("d-none")
        }catch(err){
            cl(err)
        }
    }
    init()
}





cardbutton.addEventListener("click",onclickbtn)