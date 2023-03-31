function display()
{
var table = document.createElement("table")
var req = new XMLHttpRequest
req.open("GET","https://reqres.in/api/users")
req.send()
req.onload = function(){
console.log(req.status)
var info = JSON.parse(req.response)
console.log(info)
for(var i = 0;i < info.data.length;i++)
{
  var tr1 = document.createElement("tr")
  var td1 = document.createElement("td")
  var td2 = document.createElement("td")
  var td3 = document.createElement("td")
  var td4 = document.createElement("td")
  var td5 = document.createElement("td")
  td1.innerText=info.data[i].id
  td2.innerText=info.data[i].email
  td3.innerText=info.data[i].first_name
  td4.innerText=info.data[i].last_name
  var image1 = document.createElement("img")
  image1.src = info.data[i].avatar
  td5.append(image1)
  tr1.append(td1)
  tr1.append(td2)
  tr1.append(td3)
  tr1.append(td4)
  tr1.append(td5)
  table.append(tr1)
 }document.body.append(table)

}
}
