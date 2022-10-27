import keeper from "./img/keeper-app.png";
import NLSU from "./img/NLSU.png";
import todolist from "./img/todolist.png";
import Blog from "./img/blog.png";
import DrumKit from "./img/drumKit.png";
import Simon from "./img/simon.png";

const products = [
    {
        id: 1,
        img: keeper,
        link: "https://922mku.csb.app/",
        desc: <ul><li>It is a clone of google keeper app.</li>
        <li>Created using <b>HTML,CSS,Javascript.</b></li>
        <li>Framework used is <b>React.js</b></li></ul>,
    },
    {
        id: 2,
        img: Simon,
        link: "https://yash4681.github.io/The-Simon-Game/",
        desc: <ul><li>Its a simple Simon game created using <b>HTML, CSS, javaScript.</b></li></ul>
    },
    {
        id: 3,
        img: Blog,
        link: "https://github.com/Yash4681/Blog-website",
        desc: <ul><li>A blog web site created using <b>HTML, CSS, javaScript</b></li>
        <li>Its database is stored on MongoDB Atlas</li>
        <li>It is hosted on Heroku.</li></ul>
    },
    {
        id: 4,
        img: NLSU,
        link: "https://obscure-shelf-45871.herokuapp.com/",
        desc: <ul><li>It is a sign-up page for fictional news-letter service.</li>
        <li>created using <b>HTML, CSS, Javascript.</b></li>
        <li>Service used is from <b>Mailchimp</b> to store subscribers email.</li>
        <li>It is hosted on <b>Heroku</b>.</li></ul>
    },
    {
        id: 5,
        img: DrumKit,
        link: "https://yash4681.github.io/Drum-Kit-website/",
        desc: <ul><li>Its a drum-kit web site that produces seven different sound based on users input.</li>
        <li>It is created using <b>HTML, CSS, javaScript.</b></li></ul>
    },
    {
        id: 6,
        img: todolist,
        link: "https://lit-oasis-41954.herokuapp.com/",
        desc:<ul><li>It is a ToDoList app.</li>
        <li>Created using <b>HTML,CSS,Javascript.</b></li>
        <li>Used MongoDB for Database.</li>
        <li>It is hosted on Heroku.</li></ul>
    },
]

export default products;