const thediv = document.getElementById("thediv");
thediv.addEventListener("click",changedvalue);
function changedvalue(e){
  const booleanValue = thediv.contains(e.target);
  console.log(booleanValue);
  
}