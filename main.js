
$(document).ready(()=>{

$('#search').on('submit',(e)=>{

var searchBox1=$('#searchBox1').val();
var searchBox2=$('#searchBox2').val();
console.log("you searched for "+searchBox1);
console.log("you searched for "+searchBox2);



//https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=ffa837854afd49928071ede5da9776f6
var url="https://newsapi.org/v1/articles";
axios.get(url,{
params:
{
source:searchBox1,
sortBy:searchBox2,
apiKey:"ffa837854afd49928071ede5da9776f6"

}


})

.then((response)=>{

console.log(response);




let news=response.data.articles;

var output='';
output=`<h3 align="center" class="text-uppercase">    ${response.data.sortBy} on  ${response.data.source}</h3>
`;

$.each(news,(index,new1)=>{
//  console.log(new1.urlToImage);
  output +=`
  <div class="col-md-4">
  <div class="well text-center">
  <img height="225px" width="325px" src=${new1.urlToImage} class=".img-fluid img-rounded">



  <h5><stong></strong>${new1.title}</h5>
    <ul class="list-group">
  <li class="list-group-item"><stong>Description : </strong>${new1.description}</li>

  <li class="list-group-item"><stong>Author : </strong>${new1.author}</li>


  <li class="list-group-item"><stong>Published At : </strong>${new1.publishedAt}</li>
  </ul>


<a class="btn btn-primary" href=${new1.url} target="_blank">More Info.</a>

  </div>
  </div>
  `;
});

var x='<br><hr>';
  $('#news2').html(output);
  $('#news').html(x);
  //$('#soorce').html(x);


  //  $('#news').html(output);
  //  $('#details2').html(aco);



})

.catch((err)=>
{
  console.log(err);
})



e.preventDefault();
});


});
