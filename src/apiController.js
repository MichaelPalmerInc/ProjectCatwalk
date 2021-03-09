let axios = require('axios');
let config = require('./config/config.js');

axios.defaults.baseURL = config.server;
axios.defaults.headers.common['Authorization'] = config.token;

//I've basically created functions for each type of call. Didn't actually have them do anything yet because I haven't fully figured out how to use these.
// They'll also need to have actual stuff written in them to actually use them, but I figure people can fill in the info for their own functions as we go on.
let apiController = {
  // Products API calls
  getProducts: ({ pages = 1, count = 5 } = {}) => {
    let params = { page: pages, count: count };
    return axios
      .get('/products', { params })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  //I'm unsure of whether I'm doing this the right way since I'm not sure how exactly the productId is going to be passed on, but I assume something like this.
  getProduct: (productId) => {
    return axios
      .get(`/products/${productId}`)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },

  getProductStyles: (productId) => {
    return axios
      .get(`/products/${productId}/styles`)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },

  getProductRelated: (productId) => {
    return axios
      .get(`/products/${productId}/related`)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  //Reviews API Calls
  getReviews: (productId, { pages = 1, count = 5, sort = 'relevant' } = {}) => {
    pages = pages || 1;
    count = count || 5;
    let params = { page: pages, count: count, sort: sort, product_id: productId };
    return axios
      .get('/reviews', { params })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  getReviewMetaData: (productId) => {
    return axios
      .get('/reviews/meta', { params: { product_id: productId } })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  // For this next call, it's a post that sends back a lot of data so I figure it's probably better to handle the data in the actual jsx file than here so all we need to get passed into the call is an object of the post data. If you'd rather handle that here let me know and I can change up how this function is set up.
  postReview: (postVal) => {
    return axios
      .post('/reviews', postVal)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  markHelpful: (reviewId) => {
    return axios.put(`/reviews/${reviewId}/helpful`).catch((err) => {
      console.error('Oh noes ', err);
    });
  },
  reportReview: (reviewId) => {
    return axios.put(`/reviews/${reviewId}/report`).catch((err) => {
      console.error('Oh noes ', err);
    });
  },


  //Questions and Answers API calls
  //according to the docs the server expects one object with product_id, page, count inside as a parameter
  getQuestions: ({ productId = 21111, page = 1, count = 5 }) => {
    var product_id = productId;
    let params = { product_id, page, count };

    return axios.get('/qa/questions', { params })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  getAnswers: (questionId, { pages = 1, count = 5 }) => {
    let params = { page: pages, count: count };

    return axios
      .get(`/qa/questions/${questionId}/answers`, { params })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },

  //handling this in the same way as the reviews POST. Take in an object as a param so we handle all of the gathering in the jsx file.
  postQuestion: (postVal) => {
    return axios
      .post('/qa/questions', postVal)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  postAnswer: (questionId, postVal) => {
    return axios
      .post(`/qa/questions/${questionId}/answers`, postVal)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  markHelpfulQuestion: (questionId) => {
    return axios
      .put(`/qa/questions/${questionId}/helpful`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  reportQuestion: (questionId) => {
    return axios
      .put(`/qa/questions/${questionId}/report`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  markHelpfulAnswer: (answerId) => {
    return axios
      .put(`/qa/answers/${answerId}/helpful`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  reportAnswer: (answerId) => {
    return axios
      .put(`/qa/answers/${answerId}/report`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  getCart: () => {
    return axios
      .get('/cart')
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
  postCart: (skuId) => {
    return axios
      .post('/cart', { sku_id: skuId })
      .then((response) => {
        console.log(response);
      })
      .then((err) => {
        console.error('Oh noes ', err);
      });
  },
  //This last one I'm unsure of how to handle it since I don't fully get what an interaction is.
  logInteraction: (params) => {
    return axios
      .post('/interactions', params)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('Oh noes ', err);
      });
  },
};

export default apiController;
