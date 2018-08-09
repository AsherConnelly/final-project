$(document).ready(function(){

const reviews = [
  {
    "name": "Dragan Perković",
    "rating": 2,
    "reviewDate": "03/12/2018",
    "comments": "They didn't have enough bear gifs. What's the point if they don't have enough bears?!?!"
  },
  {
    "name": "Frank Metzger",
    "rating": 3,
    "reviewDate": "03/02/2018",
    "comments": "Does exactly what it says it will do so good job!"
  },
  {
    "name": "Corinne Quessy",
    "rating": 5,
    "reviewDate": "05/21/2018",
    "comments": "All the cats I could ever want best site EVER!!!!!!"
  },
  {
    "name": "Hannah Harvey",
    "rating": 3,
    "reviewDate": "05/30/2018",
    "comments": "Highly reccomended if you need a ton of gifs."
  },
  {
    "name": "Kayla Bannan",
    "rating": 5,
    "reviewDate": "06/21/2018",
    "comments": "What are you waiting for!?!? Sign up now!!!"
  },
  {
    "name": "Tyrone H. Singleton",
    "rating": 3,
    "reviewDate": "04/01/2018",
    "comments": "It's ok I guess if this is your thing."
  },
  {
    "name": "Nazario Esposito",
    "rating": 1,
    "reviewDate": "06/30/2018",
    "comments": "I signed up without reading the terms and conditions and didn't realize I would have to pay for this. What the heck!?!"
  },
  {
    "name": "Edvin Nordström",
    "rating": 4,
    "reviewDate": "07/15/2018",
    "comments": "Easy to use, highly reccomended."
  },
  {
    "name": "Anisa Lind",
    "rating": 2,
    "reviewDate": "04/15/2018",
    "comments": "Dumb...."
  },
  {
    "name": "Linda Genovesi",
    "rating": 5,
    "reviewDate": "01/12/2018",
    "comments": "Great site. Perfect 5/7"
  },
  {
    "name": "Gail S. Brown",
    "rating": 4,
    "reviewDate": "02/25/2018",
    "comments": "4/5 stars"
  },
  {
    "name": "Lauren Hayes",
    "rating": 4,
    "reviewDate": "06/06/2018",
    "comments": "Just renewed my membership, tots worth it!"
  },
  {
    "name": "Hanne Madsen",
    "rating": 4,
    "reviewDate": "08/01/2018",
    "comments": "Love this site!"
  },
  {
    "name": "Steve Grabowski",
    "rating": 5,
    "reviewDate": "02/02/2018",
    "comments": "It's a library for gifs just like the advertisement. I mean what else did you want from it?"
  },
  {
    "name": "Reginald J. Farnsworth",
    "rating": 1,
    "reviewDate": "06/18/2018",
    "comments": "This isn't the XBOX remote I ordered! What the frick?"
  }
]


// filters reviews by anything over a 2
var filteredReviews = reviews.filter(reviews => reviews.rating > 2);

// takes filteredReviews and replaces full name with first name
filteredReviews = filteredReviews.map(review =>{
   var firstName = review.name.split(' ')[0]
   review.name = firstName
   return review;
})


    // append filteredReviews to DOM

    for (var i in filteredReviews) {
      $("#data").append(`<tr>
          <td>${filteredReviews[i].name}</td>
          <td>${filteredReviews[i].rating}</td>
          <td>${filteredReviews[i].comments}</td>
          <td>${filteredReviews[i].reviewDate}</td>
        </tr>`);
      }

      // feedback submittion
      $("#submit").click(function() {
      var name = $("#name").val();
      var rating = $("#rating").val();
      var comments = $("#comment").val();
      var date = $("#date").val();
      console.log("working");

      var feedback = {  name: $("#feedbackName").val(),
                        rating: $("#feedbackRating").val(),
                        comment: $("#feedbackComment").val(),
                        date: $("#feedbackDate").val()
                    }
      console.log(feedback);

});
      $('#button').submit(function(e) {
         e.preventDefault();
         console.log("working");
         // Coding
         $('#modal').modal('toggle'); //or  $('#IDModal').modal('hide');
         return false;
      });





      // END
});
