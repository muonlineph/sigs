function openWindow(sUrl,w,h,cb,sb){
if (cb=='yes')
sProp='';
else {
if ((w==-1) || (h==-1)) {
sProp= 'width='+screen.width+',height='+screen.height+',top=0,left=0,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
} else {
l=(screen.width)?(screen.width-w)/2:100;
t=(screen.height)?(screen.height-h)/2:100;
sProp='width='+ w +',height='+ h +',top='+ t +',left='+ l +',scrollbars='+ sb +',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
}
}
oWin=window.open(sUrl,'',sProp);
oWin.focus();
}
