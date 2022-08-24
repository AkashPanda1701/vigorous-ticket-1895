// import footer from '../component/footer.js';
// console.log('footer:', footer);
// document.querySelector("footer").innerHTML = footer;
let container = document.querySelector('#container');

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

