
var x={
  get: function(url, fn) {
    // XMLHttpRequest is used to exchange data with the server in the background
    var xhr = new XMLHttpRequest();            
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      // readyState == 4 indicates that the request has been completed
      if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
        // Get data from the server
        fn.call(this, xhr.responseText);  
      }
    };
    xhr.send();
  },
  // data should be 'a=a1&b=b1'，In jq if the data is an object it converts the object to this string format automatically
  post: function (url, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    // Add HTTP headers to the content encoding type when sending information to the server
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send(data);
  }
}
const methods = {
  /**
   * Find user by email address
   * @param req
   * @param res
   */
  getUser: function(req, res) {
    // Get user data
    UserModel.find({email: req.params.userEmail}, function(err, users) {
      if (err) {
        res.status(500).send(err);
      }

      if (users.length) {
        const userFound = users.pop();

        return res.json({
          success: true,
          user: {
            email: userFound.email
          }
        });
      }

      return res.json({
        success: false,
        message: constants.messages.userNotFound
      });
    });
  },

  /**
   * Add a new user to database
   * @param req
   * @param res
   */
  addUser: function(req, res) {
    // Look up if user exists in database
    UserModel.find({email: req.body.email}, function(err, users) {
      if (err) {
        res.status(500).send(err);
      }

      if (users.length) {
        // User found
        return res.json({
          success: false,
          message: constants.messages.userDuplicated
        });
      } else {
        // Create new user
        const newUser = new UserModel();

        const fields = [
          'fullName',
          'email',
          'phone',
          'address',
          'suburb',
          'state',
          'postcode',
          'country'
        ];

        // Map request's payload to new user fields
        fields.forEach(field => {
          newUser[field] = req.body[field];
        });

        // Hash the password before saving
        newUser.password = md5(req.body.password);

        // TODO: Define admin on more specific condition, only 1 email as admin for now
        newUser.isAdmin = (newUser.email.toLowerCase() === 'quangthien27@gmail.com');

        // Save the user to database
        newUser.save((err, newUser) => {
          if (err) {
            res.status(500).send(err);
          }

          return res.json({
            success: true,
            message: constants.messages.userAdded,
            userID: newUser._id
          });
        });
      }
    });
  },

  /**
   * Authorize user login
   * @param req
   * @param res
   */
  authorizeUser: function(req, res) {
    UserModel.find({email: req.body.email}, function(err, users) {
      if (err) {
        res.status(500).send(err);
      }

      let authorized = true;

      if (!users.length) {
        // Unauthorized if user not found
        authorized = false;
      } else {
        const foundUser = users.pop();

        // Compare the hashed password
        if (foundUser.password !== md5(req.body.password)) {
          authorized = false;
        } else {
          authorized = foundUser._id;
        }
      }

      if (authorized) {
        return res.json({
          success: true,
          message: constants.messages.authSuccess,
          userID: authorized
        });
      }

      return res.json({
        success: false,
        message: constants.messages.authFailed
      });
    });
  }
};
function Login(x, y) {
  return x + y;
}

module.exports = Login;

