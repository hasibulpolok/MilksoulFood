


// document.addEventListener('DOMContentLoaded', function() {
//     let showDivYes = document.getElementById('yes');
//     let showDivNo = document.getElementById('no');
//     let div1 = document.getElementById('show-it');
    

  
//     showDivYes.addEventListener('change', function() {
//         if (showDivYes.checked) {
//             div1.style.display = 'block';
            
//         }
//     });

//     showDivNo.addEventListener('change', function() {
//         if (showDivNo.checked) {
//             div1.style.display = 'none';
            
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    let yesRadio = document.getElementById('yes');
    let noRadio = document.getElementById('no');
    let displayDiv = document.getElementById('show-it');

    
    yesRadio.addEventListener('change', function() {
        if (yesRadio.checked) {
            displayDiv.style.display = 'block';
        }
    });

    noRadio.addEventListener('change', function() {
        if (noRadio.checked) {
            displayDiv.style.display = 'none';
        }
    });

    
    if (yesRadio.checked) {
        displayDiv.style.display = 'block';
    } else {
        displayDiv.style.display = 'none';
    }
});