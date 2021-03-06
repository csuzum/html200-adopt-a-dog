// access blog section container, assign variable 'blogContainer'
let blogContainer = document.getElementById('blog-page');

// BLOG 1
// create first blog post article container
let blogPost1 = document.createElement('article');
blogPost1.setAttribute('class', 'blog-container')
// document.body.appendChild(blogPost1);
// blogContainer.appendChild(blogPost1);

// create first blog post image & set attributes
let blogImg1 = document.createElement('img');
blogImg1.setAttribute('src', 'images/blog-1.jpg')
blogImg1.setAttribute('alt', 'Woman and dog sitting on mountaintop with backs to viewer')
blogImg1.setAttribute('class', 'blog-img')
// document.body.appendChild(blogImg1);
// blogPost1.appendChild(blogImg1);

// create first blog text div & set attribute
let blogText1 = document.createElement('div');
blogText1.setAttribute('class', 'blog-text')
// document.body.appendChild(blogText1);
// blogPost1.appendChild(blogText1);

// create first blog title
let blogTitle1 = document.createElement('h2');
blogTitle1.textContent = 'Traveling With Your Dog';
// document.body.appendChild(blogTitle1);
// blogText1.appendChild(blogTitle1);

// create first blog paragraph 1
let blog1Para1 = document.createElement('p');
blog1Para1.textContent = 'Lotsa pats noodle horse very good spot clouds fat boi, lotsa pats long bois. Long bois thicc noodle horse such treat smol borking doggo with a long snoot for pats sub woofer doggo, shoober many pats clouds stop it fren. Fluffer puggo h*ck I am bekom fat mlem waggy wags, long snoot for pats the neighborhood pupper woofer.';
// document.body.appendChild(blog1Para1);
// blogText1.appendChild(blog1Para1);


// create first blog paragraph 2
let blog1Para2 = document.createElement('p');
blog1Para2.textContent = 'Bork long woofer I am bekom fat ur givin me a spook vvv. Shoober adorable doggo you are doin me a concern adorable doggo very good spot tungg dat tungg tho wrinkler wow very biscit doge, very jealous pupper he made many woofs doggo maximum borkdrive waggy wags clouds h*ck. Read more...';
// document.body.appendChild(blog1Para2);
// blogText1.appendChild(blog1Para2);

// BLOG 2
// create 2nd blog post article container
let blogPost2 = document.createElement('article');
blogPost2.setAttribute('class', 'blog-container')
// document.body.appendChild(blogPost2);
// blogContainer.appendChild(blogPost2);

// create 2nd blog post image & set attributes
let blogImg2 = document.createElement('img');
blogImg2.setAttribute('src', 'images/blog-2.jpg')
blogImg2.setAttribute('alt', 'Woman and dog sitting on mountaintop with backs to viewer')
blogImg2.setAttribute('class', 'blog-img')
// document.body.appendChild(blogImg2);
// blogPost2.appendChild(blogImg2);

// create 2nd blog text div & set attribute
let blogText2 = document.createElement('div');
blogText2.setAttribute('class', 'blog-text')
// document.body.appendChild(blogText2);
// blogPost2.appendChild(blogText2);

// create 2nd blog title
let blogTitle2 = document.createElement('h2');
blogTitle2.textContent = 'How To Walk Multiple Dogs';
// document.body.appendChild(blogTitle2);
// blogText2.appendChild(blogTitle2);

// create 2nd blog paragraph 1
let blog2Para1 = document.createElement('p');
blog2Para1.textContent = 'Lotsa pats noodle horse very good spot clouds fat boi, lotsa pats long bois. Long bois thicc noodle horse such treat smol borking doggo with a long snoot for pats sub woofer doggo, shoober many pats clouds stop it fren. Fluffer puggo h*ck I am bekom fat mlem waggy wags, long snoot for pats the neighborhood pupper woofer.';
// document.body.appendChild(blog2Para1);
// blogText2.appendChild(blog2Para1);

// create 2nd blog paragraph 2
let blog2Para2 = document.createElement('p');
blog2Para2.textContent = 'Bork long woofer I am bekom fat ur givin me a spook vvv. Shoober adorable doggo you are doin me a concern adorable doggo very good spot tungg dat tungg tho wrinkler wow very biscit doge, very jealous pupper he made many woofs doggo maximum borkdrive waggy wags clouds h*ck. Read more...';
// document.body.appendChild(blog2Para2);
// blogText2.appendChild(blog2Para2);


// BLOG 3
// create 3rd blog post article container
let blogPost3 = document.createElement('article');
blogPost3.setAttribute('class', 'blog-container');
// document.body.appendChild(blogPost3);
// blogContainer.appendChild(blogPost3);

// create 3rd blog post image & set attributes
let blogImg3 = document.createElement('img');
blogImg3.setAttribute('src', 'images/blog-3.jpg')
blogImg3.setAttribute('alt', 'Woman and dog sitting on mountaintop with backs to viewer')
blogImg3.setAttribute('class', 'blog-img')
// document.body.appendChild(blogImg3);
// blogPost3.appendChild(blogImg3);

// create 3rd blog text div & set attribute
let blogText3 = document.createElement('div');
blogText3.setAttribute('class', 'blog-text')
document.body.appendChild(blogText3);
blogPost3.appendChild(blogText3);

// create 3rd blog title
let blogTitle3 = document.createElement('h2');
blogTitle3.textContent = 'Teach Your Dog To Fetch!';
// document.body.appendChild(blogTitle3);
// blogText3.appendChild(blogTitle3);

// create 3rd blog paragraph 1
let blog3Para1 = document.createElement('p');
blog3Para1.textContent = 'Lotsa pats noodle horse very good spot clouds fat boi, lotsa pats long bois. Long bois thicc noodle horse such treat smol borking doggo with a long snoot for pats sub woofer doggo, shoober many pats clouds stop it fren. Fluffer puggo h*ck I am bekom fat mlem waggy wags, long snoot for pats the neighborhood pupper woofer.';
// document.body.appendChild(blog3Para1);
// blogText3.appendChild(blog3Para1);

// create 3rd blog paragraph 2
let blog3Para2 = document.createElement('p');
blog3Para2.textContent = 'Bork long woofer I am bekom fat ur givin me a spook vvv. Shoober adorable doggo you are doin me a concern adorable doggo very good spot tungg dat tungg tho wrinkler wow very biscit doge, very jealous pupper he made many woofs doggo maximum borkdrive waggy wags clouds h*ck. Read more...';
// document.body.appendChild(blog3Para2);
// blogText3.appendChild(blog3Para2);


// blog objects
const blog1 = {
  blogPost: blogPost1,
  image: blogImg1,
  textContainer: blogText1,
  blogTitle: blogTitle1,
  blogPara1: blog1Para1,
  blogPara2: blog1Para2,
};

const blog2 = {
  blogPost: blogPost2,
  image: blogImg2,
  textContainer: blogText2,
  blogTitle: blogTitle2,
  blogPara1: blog2Para1,
  blogPara2: blog2Para2,
};

const blog3 = {
  blogPost: blogPost3,
  image: blogImg3,
  textContainer: blogText3,
  blogTitle: blogTitle3,
  blogPara1: blog3Para1,
  blogPara2: blog3Para2,
};

const blogArray = [blog1, blog2, blog3];

for (i = 0; i < 3; i++) {
  document.body.appendChild(blogArray[i].blogPost);
  blogContainer.appendChild(blogArray[i].blogPost);

  document.body.appendChild(blogArray[i].image);
  blogArray[i].blogPost.appendChild(blogArray[i].image);

  document.body.appendChild(blogArray[i].textContainer);
  blogArray[i].blogPost.appendChild(blogArray[i].textContainer);

  document.body.appendChild(blogArray[i].blogTitle);
  blogArray[i].textContainer.appendChild(blogArray[i].blogTitle);

  document.body.appendChild(blogArray[i].blogPara1);
  blogArray[i].textContainer.appendChild(blogArray[i].blogPara1);

  document.body.appendChild(blogArray[i].blogPara2);
  blogArray[i].textContainer.appendChild(blogArray[i].blogPara2);
};