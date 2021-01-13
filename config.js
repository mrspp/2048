/**
 * Customer could change these data such as images, avatars, texts
 * In this example, customer should change the Title of the games, message on startup...
 * And then, game developer could handle these data in html source code
 * See index.html for more infomation.
 * @title Title of the app
 * @message Message to end-user
 * @color App's color
 * @google_analytics_code Google analytics code should be here
 */
var data = {
  title: {
    name: "Title",
    placeholder: "Enter the game title here",
    default_value: "This is 2048",
  },
  message: {
    name: "Message",
    placeholder: "Message to the gamer",
    default_value: "This is 2048",
  },
  color: {
    name: "Color",
    placeholder: "Color for the app",
    default_value: "#ad3931",
  },
  google_analytics_code: {
    name: "Google Analytics",
    placeholder: "Enter Google analystic code here",
    default_value: "UA-XXXX-XXX",
  },
};
