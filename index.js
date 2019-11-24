var a=1
var b=2
var n=0
var olb=0
var bs=[3]
document.getElementById('space').innerHTML=3
document.getElementById('accuracy').innerHTML=0
function m(){
  n+=1
  olb = b
  b=Math.sqrt(Math.pow((Math.sqrt(Math.pow(olb,2)-Math.pow(a,2))+olb),2)+Math.pow(a,2))
  document.getElementById('space').innerHTML=a*6*Math.pow(2,n)/b
  if(bs.includes(b)){}
  else{
    bs.push(b)
  }
  document.getElementById('accuracy').innerHTML=n
}
function d(){
  if(n>0){
    n-=1
    b=bs[n]
    document.getElementById('space').innerHTML=a*6*Math.pow(2,n)/b
    if(b==3){
      document.getElementById('space').innerHTML=3
      b=2
    }
    document.getElementById('accuracy').innerHTML=n
  }
}
var c=2
var j=1
document.getElementById('spacee').innerHTML=2
document.getElementById('accuracye').innerHTML=1
function h(){
  if(j<4503599627370496){
    j*=2
    c=Math.pow(1+1/j,j)
    document.getElementById('spacee').innerHTML=c
    document.getElementById('accuracye').innerHTML=j
  }
}
function f(){
  if(j>1){
    j/=2
    c=Math.pow(1+1/j,j)
    document.getElementById('spacee').innerHTML=c
    document.getElementById('accuracye').innerHTML=j
  }
}
var sqn=2
var sqa=1
var sqc=1
var olc=0
var sqolb=0
var sqbs=[1]
var sqbbs=[1]
var sqbbbs=[1]
var sn=0
var out=1
document.getElementById('spacesq').innerHTML=1
document.getElementById('accuracysq').innerHTML=0
function x(){
  sqn=document.getElementById('er?').value
  if(sn<7){
    sn+=1
    if(sn+1>sqbs.length){
      olc=sqc
      sqb=sqa
      sqa=sqn*Math.pow(olc,2)+Math.pow(sqb,2)
      sqc=olc*sqb*2
      out=sqa/sqc
      if(sqbs.includes(out)){}
      else{
        if(sqbs.length<9){
          sqbs.push(out)
          sqbbs.push(sqa)
          sqbbbs.push(sqc)
        }
      }
    }
    else{
      out=sqbs[sn]
      sqa=sqbbs[sn]
      sqc=sqbbbs[sn]
    }
    document.getElementById('spacesq').innerHTML=out
    document.getElementById('accuracysq').innerHTML=sn
    console.log(sqbs)
    console.log(sqn)
}
}
function y(){
  if(sn>0){
    sn-=1
    out=sqbs[sn]
    sqa=sqbbs[sn]
    sqc=sqbbbs[sn]
    document.getElementById('spacesq').innerHTML=out
    document.getElementById('accuracysq').innerHTML=sn
    console.log(out)
  }
}
function showe(){
  document.getElementById("er?").style.display="block"
  document.getElementById("erre").style.display="block"
  document.getElementById("erete").style.display="none"
  sqn=2
  sqa=1
  sqc=1
  olc=0
  sqolb=0
  sqbs=[1]
  sqbbs=[1]
  sqbbbs=[1]
  sn=0
  out=1
  document.getElementById('spacesq').innerHTML=1
  document.getElementById('accuracysq').innerHTML=0
}
var equafunc=0
var number1=''
var number2=''
var varshownumber=0
var showvar=number1
var out=''
function addnumber(nummmberrr){
  if(showvar.toString().length<10){
  if(showvar==number1){
    if(number1==''){
      number1=nummmberrr
      showvar=number1
    }
    else{
      number1=(Math.abs(number1)*10+nummmberrr)*Math.abs(number1)/number1
      showvar=number1
    }
  }
  if(showvar==number2){
    if(number2==''){
      number2=nummmberrr
      showvar=number2
    }
    else{
      number2=(Math.abs(number2)*10+nummmberrr)*Math.abs(number2)/number2
      showvar=number2
    }
  }
}
 document.getElementById('showthis').innerHTML=showvar
}
function divide(){
  if(varshownumber==0){
  if(showvar==''){}
  else{
  varshownumber=1-varshownumber
  if(varshownumber==0){
    number1=number1/number2
    showvar=number1
  }
  if(varshownumber==1){
    number2=0
    showvar=number2
  }
  equafunc=4
  console.log(equafunc)
}
}
if(showvar==''){
  document.getElementById('showthis').innerHTML=0
}
else{
  document.getElementById('showthis').innerHTML=showvar
}
console.log(varshownumber)
}

function multiply(){
  if(varshownumber==0){
  if(showvar==''){}
  else{
  varshownumber=1-varshownumber
  if(varshownumber==0){
    number1=number1*number2
    showvar=number1
  }
  if(varshownumber==1){
    number2=0
    showvar=number2
  }
  equafunc=3
  console.log(equafunc)
}
}
if(showvar==''){
  document.getElementById('showthis').innerHTML=0
}
else{
  document.getElementById('showthis').innerHTML=showvar
}
console.log(varshownumber)
}

function subtract(){
  if(varshownumber==0){
  if(showvar==''){}
  else{
  varshownumber=1-varshownumber
  if(varshownumber==0){
    number1=number1-number2
    showvar=number1
  }
  if(varshownumber==1){
    number2=0
    showvar=number2
  }
  equafunc=2
  console.log(equafunc)
}
}
if(showvar==''){
  document.getElementById('showthis').innerHTML=0
}
else{
  document.getElementById('showthis').innerHTML=showvar
}
console.log(varshownumber)
}

function add(){
  if(varshownumber==0){
  if(showvar==''){}
  else{
  varshownumber=1-varshownumber
  if(varshownumber==0){
    number1=number1+number2
    showvar=number1
  }
  if(varshownumber==1){
    number2=0
    showvar=number2
  }
  equafunc=1
  console.log(equafunc)
}
}
if(showvar==''){
  document.getElementById('showthis').innerHTML=0
}
else{
  document.getElementById('showthis').innerHTML=showvar
}
console.log(varshownumber)
}

function equals(){
  console.log(equafunc)
  if(equafunc==4){
    console.log(number1)
    console.log(number2)
    number1=number1/number2
    console.log(number1)
    showvar=number1
    varshownumber=0
  }
  if(equafunc==3){
    console.log(number1)
    console.log(number2)
    number1=number1*number2
    console.log(number1)
    showvar=number1
    varshownumber=0
  }
  if(equafunc==2){
    console.log(number1)
    console.log(number2)
    number1=number1-number2
    console.log(number1)
    showvar=number1
    varshownumber=0
  }
  if(equafunc==1){
    console.log(number1)
    console.log(number2)
    number1=number1+number2
    console.log(number1)
    showvar=number1
    varshownumber=0
  }
  console.log(showvar)
  document.getElementById('showthis').innerHTML=showvar
}
