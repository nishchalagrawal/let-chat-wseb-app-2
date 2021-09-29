const firebaseConfig = {
    apiKey: "AIzaSyCtjTUJab2UtmPrgJzMRxecV2pBeSAsnAw",
    authDomain: "let-chat-web-app-71417.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-71417-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-71417",
    storageBucket: "let-chat-web-app-71417.appspot.com",
    messagingSenderId: "131598919969",
    appId: "1:131598919969:web:6a0eafa9eac9f529503660"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function logout(){
    window.location = "index.html"
}
