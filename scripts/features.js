// import {navbar,openMenu,closeMenu} from '../component/navbar.js';
// console.log(navbar);
// document.querySelector("header").innerHTML=navbar();
// document.querySelector("#openmenu").addEventListener('click',openMenu);
// document.querySelector("#closemenu").addEventListener('click',closeMenu);

// import footer from '../component/footer.js';
// console.log('footer:', footer);
// document.querySelector("footer").innerHTML = footer();

let container = document.querySelector('#container');
let container2 = document.querySelector('#container2');
let container3 = document.querySelector('#container3');

let trackData = [{
    image: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg',
    para: 'Time tracking',
    arrow: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg'
},
{
    image: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg',
    para: 'Reports & analysis',
    arrow: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg'
},
{
    image: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg',
    para: 'Invoicing & payments',
    arrow: 'https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg'
}
];

let sectionfun1 = (dataa) => {
    let wrapper1 = document.createElement("div");
    let heading = document.createElement("h1");
    heading.setAttribute('class', 'head');
    heading.innerText = "Everything your team needs to keep ticking";
    let para = document.createElement('h3');
    para.setAttribute('class', 'para');
    para.innerText = 'Intuitive time tracking and powerful insights that help your team thrive.'

    let div1 = document.createElement('div');
    div1.setAttribute('id', 'features-navigation');

    dataa.forEach(elem => {

        let child1Div = document.createElement('div');
        child1Div.setAttribute('class', 'childDiv');
        child1Div.style.border = "1px solid red";
        let littleSec1 = document.createElement('div');
        littleSec1.setAttribute('class', 'littlesec');
        let image1 = document.createElement("img");
        image1.setAttribute('class', 'imag');
        image1.setAttribute('src', elem.image);
        let content1 = document.createElement("h3");
        content1.setAttribute('class', 'content');
        content1.innerText = elem.para;
        let littleSec2 = document.createElement('div');
        littleSec2.setAttribute('class', 'littlesec2');
        let arrowImg1 = document.createElement('img');
        arrowImg1.setAttribute('src', elem.arrow);
        littleSec1.append(image1, content1);
        littleSec2.append(arrowImg1);
        child1Div.append(littleSec1, littleSec2);
        div1.append(child1Div);

        wrapper1.append(heading, para, div1);
        container.append(wrapper1);
    });
}
sectionfun1(trackData);

let sectionfun2 = () => {
    let wrapper2 = document.createElement('div');
    wrapper2.setAttribute('class', 'wrapper2');
    let childsec1 = document.createElement('div');
    childsec1.setAttribute('class', 'childsec1');
    let head = document.createElement('h2');
    head.innerText = 'Time tracking';
    head.setAttribute('class', 'headh2');
    let p2 = document.createElement('p');
    p2.innerText = 'An intuitive, lightweight time tracking experience that’s easy to adopt and use every day.';
    p2.setAttribute('class', 'p2');
    let btn2 = document.createElement('button');
    btn2.innerText = 'Start your free trial';
    btn2.setAttribute('class', 'btn2');
    childsec1.append(head, p2, btn2);
    let childsec2 = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', 'https://www.getharvest.com/hs-fs/hubfs/screenshot-features-timesheets.png?width=787&name=screenshot-features-timesheets.png');
    image.setAttribute('class', 'image');
    childsec2.append(image);
    wrapper2.append(childsec1, childsec2);
    container2.append(wrapper2);
}
sectionfun2();

let data1 = [{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg",
    head: "Track time from browser, desktop, and mobile",
    para: 'Make it as easy as possible for your team to capture their time with dedicated apps across devices.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg",
    head: "Integrated with your workflow",
    para: 'Harvest integrates with the tools your team knows and loves — capture time the way your team already works.',
},
{
    image: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-reminder.svg",
    head: "Custom reminders for consistent time tracking",
    para: 'Create automated reminders to help your team track time regularly and accurately.',
}];
let sectionfun3 = (data) => {
    let wrapper3 = document.createElement('div');
    wrapper3.setAttribute('class', 'wrapper3');
    data.forEach(elem => {
        let childsec = document.createElement('div');
        childsec.setAttribute('class', 'childsec');
        let smallchild = document.createElement('div');
        smallchild.setAttribute('class', 'smallchild');
        // childsec.style.border='1px solid red';
        let image4 = document.createElement('img');
        image4.setAttribute('src', elem.image);
        let headh4 = document.createElement('h4');
        headh4.setAttribute('class', 'headh4');
        headh4.innerText = elem.head;
        p3 = document.createElement('p');
        p3.setAttribute('class', 'p3');
        p3.innerText = elem.para;
        smallchild.append(image4, headh4);
        childsec.append(smallchild, p3);
        wrapper3.append(childsec);
        container3.append(wrapper3);
    });
}
sectionfun3(data1);

