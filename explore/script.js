const viewport = document.getElementById("viewportDiv"),
    firebaseConfig = {
        apiKey: "AIzaSyBaPvnzqor_4HfPZg6ayk30Tb1RpcMBWfo",
        authDomain: "test-66b58.firebaseapp.com",
        projectId: "test-66b58",
        storageBucket: "test-66b58.appspot.com",
        messagingSenderId: "39985206495",
        appId: "1:39985206495:web:c4200c42a6e7bad4da456a",
        measurementId: "G-G1RBDR6H1S",
    };
firebase.initializeApp(firebaseConfig);
const ddbb = firebase.database().ref();
let url = location.href,
paramaters = new URL(url).searchParams,
link = paramaters.get("post"),
    postItems = "\n<center>\n<div>\n\t<h1 style='color:white;'>Updating.</h1>\n</div>\n</center>\n";
viewport.innerHTML = postItems;
