import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOptions=[{
  id:'1',
  deliveryDays:7,
  PriceCents:0
},
  {
    id:'2',
    deliveryDays:3,
    PriceCents:499
  
},
{
  id:'3',
  deliveryDays:1,
  PriceCents:999
}];

export function getDeliveryOption(deliveryOptionId)
{
  let deliveryOption;
   deliveryOptions.forEach((option)=>{
      if(option.id===deliveryOptionId)
      {
        deliveryOption=option;
      }
    });
    return (deliveryOption)|| deliveryOptions[0];
}
//skip the weekdays
function isWeekend(date)
{
  const dayOfWeek=date.format('dddd');
  return(dayOfWeek==='Saturday' || dayOfWeek==='Sunday')
}
export function calculateDeliveryDate(deliveryOption)
{
  let remainingDays=deliveryOption.deliveryDays;
  let deliveryDate=dayjs();
  //skip the weekdays
while(remainingDays>0)
  {
    deliveryDate=deliveryDate.add(1,'day');
    if(!isWeekend(deliveryDate))
    remainingDays--;
  }  
  const dateString=deliveryDate.format('dddd , MMMM D');
  return dateString;
}

export function verifyDeliveryOptionId(deliveryOptionId)
{
  let flag=false;
  deliveryOptions.forEach((deliveryOption)=>{
    if(deliveryOptionId===deliveryOption.id)
      flag=true;
  });
  return flag;
}