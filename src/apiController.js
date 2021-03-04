let axios = require('axios');
let config = require('/src/config.js');


axios.defaults.baseURL = config.server;
axios.defaults.headers.common['Authorization'] = config.token;

//I've basically created functions for each type of call. Didn't actually have them do anything yet because I haven't fully figured out how to use these.
// They'll also need to have actual stuff written in them to actually use them, but I figure people can fill in the info for their own functions as we go on.
let apiController = {


  // Products API calls
  getProduct: (pages, countNum) => {
    let page = pages || 1;
    let count = countNum || 5;
    let params = {page: page, count: count};
    axios.get('/products', {params})
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  //I'm unsure of whether I'm doing this the right way since I'm not sure how exactly the productId is going to be passed on, but I assume something like this.
  getProductById: (productId) => {
    axios.get(`/product/${productId}`)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },

  getProductStyles: (productId) => {
    axios.get(`/product/${productId}/styles`)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },

  getProductRelated: (productId) => {
    axios.get(`/product/${productId}/related`)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  //Reviews API Calls
  getReviews: (pages, countNum, sortVal, productId) => {
    let page = pages || 1;
    let count = countNum || 5;
    let sort = sortVal
    let product_id = productId
    let params = {page: page, count: count, sort:sort, product_id: product_id};
    axios.get('/reviews', {params})
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  getReivewMetaData: (product_id) => {
    axios.get('/reviews/meta', {product_id})
    .then((data) => {
      console.log(data);
    })
    .then ((err) => {
      console.error('Oh noes ', err);
    })
  },
  // For this next call, it's a post that sends back a lot of data so I figure it's probably better to handle the data in the actual jsx file than here so all we need to get passed into the call is an object of the post data. If you'd rather handle that here let me know and I can change up how this function is set up.
  postReview: (postVal) => {
    axios.post('/reviews', postVal)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  markHelpful: (review_id) => {
    axios.put(`/reviews/${review_id}/helpful`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  reportReview: (review_id) => {
    axios.put(`/reviews/${review_id}/report`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  //Questions and Answers API calls
  getQuestions: (pages, countNum) => {
    let page = pages || 1;
    let count = countNum || 5;
    let params = {page: page, count: count};
    axios.get('/qa/questions', {params})
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  getAnswers: (question_id, pages, countNum) => {
    let page = pages || 1;
    let count = countNum || 5;
    let params = {page: page, count: count};

    axios.get(`/qa/questions/${question_id}/answers`, {params})
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  //handling this in the same way as the reviews POST. Take in an object as a param so we handle all of the gathering in the jsx file.
  postQuestion: (postVal) => {
    axios.post('/qa/questions', postVal)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  postAnswer: (question_id, postVal) => {
    axios.post(`/qa/questions/${question_id}/answers`, postVal)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  markHelpfulQuestion: (question_id) => {
    axios.put(`/qa/questions/${question_id}/helpful`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  reportQuestion: (question_id) => {
    axios.put(`/qa/questions/${question_id}/report`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  markHelpfulAnswer: (answer_id) => {
    axios.put(`/qa/answers/${answer_id}/helpful`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  reportAnswer: (answer_id) => {
    axios.put(`/qa/answers/${answer_id}/report`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  getCart: () => {
    axios.get('/cart')
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  },
  postCart: (sku_id) => {
    axios.post('/cart', {sku_id:sku_id})
    .then((response) => {
      console.log(response);
    })
    .then((err) => {
      console.error('Oh noes ', err);
    })
  },
  //This last one I'm unsure of how to handle it since I don't fully get what an interaction is.
  logInteraction: (params) => {
    axios.post('/interactions', params)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  }
};