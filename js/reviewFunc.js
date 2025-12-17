let reviewTab = document.getElementById("review-tab")
document.getElementById("close-btn").addEventListener('click', hideReviewTab)

document.getElementById('Art-1').addEventListener('click', showReviewTab)
document.getElementById('Art-2').addEventListener('click', showReviewTab)
document.getElementById('Art-3').addEventListener('click', showReviewTab)
document.getElementById('Art-4').addEventListener('click', showReviewTab)
document.getElementById('Art-6').addEventListener('click', showReviewTab)
document.getElementById('Art-7').addEventListener('click', showReviewTab)
document.getElementById('Art-10').addEventListener('click', showReviewTab)
document.getElementById('Art-11').addEventListener('click', showReviewTab)
document.getElementById('Art-13').addEventListener('click', showReviewTab)
document.getElementById('Art-15').addEventListener('click', showReviewTab)
// Main Hall Art Works
document.getElementById('Art-18').addEventListener('click', showReviewTab)
document.getElementById('Art-19').addEventListener('click', showReviewTab)
document.getElementById('Art-20').addEventListener('click', showReviewTab)
document.getElementById('Art-21').addEventListener('click', showReviewTab)
document.getElementById('Art-22').addEventListener('click', showReviewTab)
document.getElementById('Art-23').addEventListener('click', showReviewTab)
// LandMarks
document.getElementById('LandMark-1').addEventListener('click', showReviewTab)
document.getElementById('LandMark-2').addEventListener('click', showReviewTab)

document.getElementById('colosseum_rome_italy').addEventListener('click', showReviewTab)


console.log(reviewTab)
function showReviewTab(e) {

    let itemName = document.getElementById("item-name")
    
    // Step 1: Get the form element
    var form = document.getElementById('reviewForm');

    // Step 2: Get the input element
    var artNumField = form.querySelector('#artNumField');

    console.log("Field: "+artNumField);
    
    console.log(e.srcElement.id);
    reviewTab.style.display = "block";
    itemName.innerHTML = e.srcElement.id
    artNumField.value = e.srcElement.id
    // console.log('Mouse entered the box');
}

function hideReviewTab() {
    reviewTab.style.display = "none";
}

document.getElementById('Art-1').addEventListener('mouseenter', showID)
document.getElementById('Art-2').addEventListener('mouseenter', showID)
document.getElementById('Art-3').addEventListener('mouseenter', showID)
document.getElementById('Art-4').addEventListener('mouseenter', showID)
document.getElementById('Art-6').addEventListener('mouseenter', showID)
document.getElementById('Art-7').addEventListener('mouseenter', showID)
document.getElementById('Art-10').addEventListener('mouseenter', showID)
document.getElementById('Art-11').addEventListener('mouseenter', showID)
document.getElementById('Art-13').addEventListener('mouseenter', showID)
document.getElementById('Art-15').addEventListener('mouseenter', showID)
// Main Hall Art Works
document.getElementById('Art-18').addEventListener('mouseenter', showID)
document.getElementById('Art-19').addEventListener('mouseenter', showID)
document.getElementById('Art-20').addEventListener('mouseenter', showID)
document.getElementById('Art-21').addEventListener('mouseenter', showID)
document.getElementById('Art-22').addEventListener('mouseenter', showID)
document.getElementById('Art-23').addEventListener('mouseenter', showID)
// LandMarks
document.getElementById('LandMark-1').addEventListener('mouseenter', showID)
document.getElementById('LandMark-2').addEventListener('mouseenter', showID)

document.getElementById('Art-1').addEventListener('mouseleave', hideID)
document.getElementById('Art-2').addEventListener('mouseleave', hideID)
document.getElementById('Art-3').addEventListener('mouseleave', hideID)
document.getElementById('Art-4').addEventListener('mouseleave', hideID)
document.getElementById('Art-6').addEventListener('mouseleave', hideID)
document.getElementById('Art-7').addEventListener('mouseleave', hideID)
document.getElementById('Art-10').addEventListener('mouseleave', hideID)
document.getElementById('Art-11').addEventListener('mouseleave', hideID)
document.getElementById('Art-13').addEventListener('mouseleave', hideID)
document.getElementById('Art-15').addEventListener('mouseleave', hideID)
// Main Hall Art Works
document.getElementById('Art-18').addEventListener('mouseleave', hideID)
document.getElementById('Art-19').addEventListener('mouseleave', hideID)
document.getElementById('Art-20').addEventListener('mouseleave', hideID)
document.getElementById('Art-21').addEventListener('mouseleave', hideID)
document.getElementById('Art-22').addEventListener('mouseleave', hideID)
document.getElementById('Art-23').addEventListener('mouseleave', hideID)
// LandMarks
document.getElementById('LandMark-1').addEventListener('mouseleave', hideID)
document.getElementById('LandMark-2').addEventListener('mouseleave', hideID)

function showID(e) {
    let artIDShow = document.getElementById("artIDShow");
    artIDShow.innerHTML = e.srcElement.id;
    reviewTab.style.display = "none";
}

function hideID(e) {
    let artIDShow = document.getElementById("artIDShow");
    artIDShow.innerHTML = ""
}