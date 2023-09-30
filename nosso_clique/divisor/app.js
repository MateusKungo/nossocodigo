const $input=document.querySelector('#number')
const $spans=document.querySelectorAll('span')



$input.addEventListener('input',(event)=>{
    const dividend=parseInt(event.target.value);

    if(isNaN(dividend)){
        $span.forEach(($span)=>{
            $span.classList.remove('true')
        })

        return
    }

    $spans.forEach(($span)=>{
        const divisor=$span.dataset.divisor

        if(dividend % divisor ===0){
            $span.classList.add('true')
        }else{
            $span.classList.remove('true') 
        }
    })
})