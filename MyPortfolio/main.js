var typed=new Typed(".text", {
    strings:["Web Developer", "Data Science Enthusiast", "Experienced Linuxer"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:100,
    loop:true
})

const expStr = `<h1><b>HACK-X Security</b></h1>
<h3>Security Intern</h3>
<br>
<p><p><b>Key Skills</b> - Bash Scripting, Nmap, Burp Suite, Vulnerability Assessment and Penetration Testing(VAPT)</p>
<br>
    <ul>
        <li>Collaborated effectively to develop and deliver engaging social media content, resulting in a notable 20% increase in customer engagement</li>
        <li>Performed comprehensive vulnerability assessments and penetration tests for clients, ensuring 100% protection against potential security threats
        </li>
        <li>Received 100% positive client reviews for demonstrating excellent cooperativeness and communication skills
        </li>
    </ul>
<p>`;

const eduStr = `<h3>MIT World Peace University</h3>
<p style="padding-left:15px">B.Tech in Computer Science</p>
<br>
<h3>MNR School of Excellence</h3>
<p style="padding-left:15px">12th Board Examination (AISSCE)	- Percentage: 91.4</p>
<br>
<h3>DAV International School</h3>
<p style="padding-left:15px">10th Board Examination (AISSE)	- Percentage: 89.4</p>`

const achveStr = `<h3>Skills</h3>
<ul>
    <li>Experienced and highly skilled in Python, MySQL, HTML, CSS, Bootstrap</li>
    <li>Proficient in data models and excellent knowledge of database management systems(DBMS)</li>
</ul>
<br>
<h3>Achievements</h3>
<ul>
    <li>Highly accomplished individual with a Score of 94.94 percentile in the Joint Entrance Examination (JEE)
    </li>
    <li>Received 1st Prize out of 20 teams in the prestigious Data Hunt conducted by DBIT showcasing problem solving abilities
    </li>
    <li>Recognized for presenting an innovative project, "Smart Wallet using IoT," at HACK MIT-WPU
    </li>
</ul>`

const projStr = `<h3>FarmBot : Chabot for farmers using NLP</h3>
<p><b>Key Skills</b>:  Git, Pandas, Flask, Scikit-Learn, NLTK and Python</p>
<ul><li>Provides conversational interface to address farmer queries and offer them useful information
</li>
</ul>
<br>
<h3>Monitoring Workout During Haemophilia Treatment</h3>
<p><b>Key Skills</b>: Seaborn, Matplotlib, Numpy and Pandas</p>
<ul>
    <li>Predicts the severity of Haemophilia B using various machine learning models</li>
<li>Simple web application is created using Flask to showcase the predictions and provide </li>ul>suggestions
</ul>
<br>
<h3>Cirrhosis Prediction Using Gradient Boosting</h3>
<ul><li> Utilizing the Kaggle dataset, I conducted comprehensive exploratory analysis to uncover valuable insights and applied gradient boosting to accurately predict the severity.</li>
</ul>`
function exp(){
    document.getElementById('changeText').innerHTML = expStr;
    
}

function edu(){
    document.getElementById('changeText').innerHTML = eduStr;
}

function achve(){
    document.getElementById('changeText').innerHTML = achveStr;
}

function proj(){
    document.getElementById('changeText').innerHTML = projStr;
}
