let container1 = document.getElementById("first-wrapper");

let headline1 = document.createElement("h1");
headline1.innerText = "See how Harvest helps teams like yours thrive";
headline1.setAttribute("class","headline1");

let headline2 = document.createElement("h3");
headline2.innerText = "Teams of all sizes, across industries, and around the world track time with Harvest.";
headline2.setAttribute("class","headline2");

let trackList = [
    {
        num:"70,000+",
        cus:"customers",
        image:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg",
    },
    {
        num:"2 billion",
        cus:"hours tracked",
        image:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg",
    },
    {
        num:"19.6 million",
        cus:"invoices paid",
        image:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg",
    }
];

let trackDiv = document.createElement("div");
trackDiv.setAttribute("class","trackDiv");


let upperData = (data) => {

    data.forEach(({num,cus,image}) => {

        let factdiv = document.createElement("div");
        factdiv.setAttribute("class","factdiv");

        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class","imgdiv");

        let factnum = document.createElement("h2");
        factnum.innerText = num;
        factnum.setAttribute("class","factnum");

        let factcus = document.createElement("h4");
        factcus.innerText = cus;
        factcus.setAttribute("class","factcus");

        let factimg = document.createElement("img");
        factimg.src = image;
        factimg.setAttribute("class","factimg");

        factdiv.append(factnum,factcus);
        imgdiv.append(factimg);

        trackDiv.append(factdiv,imgdiv);

    })

}

upperData(trackList);

let storyDiv = document.createElement("div");
storyDiv.setAttribute("class","storyDiv");

let storyImageDiv = document.createElement("div");
storyImageDiv.setAttribute("class","storyImageDiv");

let storyFeatureDiv = document.createElement("div");
storyFeatureDiv.setAttribute("class","storyFeatureDiv");

let storyImageDiv_img = document.createElement("img");
storyImageDiv_img.src = "https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg";

storyImageDiv.append(storyImageDiv_img);

let storyFeatureDiv_p = document.createElement("p");
storyFeatureDiv_p.innerText = "Featured Story";

let storyFeatureDiv_h = document.createElement("h3");
storyFeatureDiv_h.innerText = "Startup studio Dovetail tracks time with Harvest to build trust with clients.";

let storyFeatureDiv_a = document.createElement("button");
storyFeatureDiv_a.innerText = "Read customer story";

storyFeatureDiv.append(storyFeatureDiv_p,storyFeatureDiv_h,storyFeatureDiv_a);

storyDiv.append(storyImageDiv,storyFeatureDiv);

container1.append(headline1,headline2,trackDiv,storyDiv);