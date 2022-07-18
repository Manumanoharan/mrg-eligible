var martial='single';
var age1=25;
var age2 =21;
var gender1='male';
var gender2='female';
if(martial=='single')
{
   console.log('martial status is single');
}
 else if(gender1=='male')
{
   console.log('gender is male');
   if(age1>=25)
   {
      console.log('eligible for marriage');
   }
   else{
      console.log('not eligible for marriage');
   }
}
  else if(gender2=='female')
   {
      console.log('gender is female')
       if(age2>=21)
       {
          console.log('eligible for marriage');
       }
       else{
          console.log('not eligible for marriager');
       }
   }

else{
   console.log('martial    not a single');
}