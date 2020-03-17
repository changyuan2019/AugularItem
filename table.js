

  function addtr(dish, price) {
      var table_2 = document.getElementById('tablenew')
      var tr = table_2.insertRow(-1)
      tr.insertCell(0).innerHTML = '<input type="checkbox" class="choose" onclick="choosePart()">'

      tr.insertCell(1).innerHTML = dish

      tr.insertCell(2).innerHTML = price

      tr.insertCell(3).innerHTML = ' <input type="button" value="-" onclick="countDes(this)"><input type="text" class="count" value="1"><input type="button" value="+" onclick="countAdd(this)">'

      tr.insertCell(4).innerHTML = '<input type="button" value="删除" onclick="deleteOne(this)">'


      car()


      //价格合计
      var rows = table_2.rows;
      var sum1 = 0;
      for (var i = 1; i < rows.length; i++) { //--循环所有的行
          var cells2 = Number(rows[i].cells[2].innerHTML);
        //   var cell3=Number(rows[i].cells[3].children[1].value)
        //   console.log(cell3)
          sum1 += cells2
        //   sum1 += cells2*cell3
      }
      var sum = document.getElementById('sum')
      sum.innerHTML = sum1
   
  }



  function countDes(input) {
      input.nextElementSibling.value--
      if (input.nextElementSibling.value < 1) {
          input.nextElementSibling.value = 1
      }
      car()
  }

  function countAdd(input) {
      input.previousElementSibling.value++
      car()
  }

  function chooseALL() {
      var chooseALLClass = document.getElementsByClassName('choose')
      for (let i = 0; i < chooseALLClass.length; i++) {
          chooseALLClass[i].checked = true;
      }
      
  }

  // 反选
  function choosePart() {
    var count1 = 0;
      var choosepart = document.getElementsByClassName('choose')
      for (let i = 0; i < choosepart.length; i++) {
          if (choosepart[i].checked) {
              count1++
          }
      }
      var totelCheck = document.getElementById('totle')
      if (count1 == choosepart.length) {
        totelCheck.checked = true;
      } else {

        totelCheck.checked = false;
      }
  }

  //删除所有表格
  var tableNode = document.getElementById("tablenew");

  function deleteAll() {
      var rowsCount = document.getElementById("tablenew").rows.length; //行数
      for (let i = rowsCount - 1; i > 0; i--) {
          tableNode.deleteRow(i);
      }
  }

  //   删除单行表格
  function deleteOne(btn) {
      var tr = btn.parentElement.parentElement;
      tableNode.deleteRow(tr.rowIndex)
      choosePart()
  }

   //   购物车数量
   function car(){
       var table_2 = document.getElementById('tablenew')
       var rows = table_2.rows;
       var num = 0;
       for (var i = 1; i < rows.length; i++){
           
           var cell3=Number(rows[i].cells[3].children[1].value)
           num+=cell3     
        }
    var carnum=document.getElementById('carNum')
    carnum.innerHTML=num;
  }


function show(){
    var div1Hide=document.getElementById('div1')
    div1Hide.style.display='none'
    var tableShow=document.getElementById('div2')
    tableShow.style.display='block'

}

function continueOder(){
   
    var tableShow=document.getElementById('div2')
    tableShow.style.display='none'
    var div1Hide=document.getElementById('div1')
    div1Hide.style.display='block'
}