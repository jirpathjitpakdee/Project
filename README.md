
# Project/LastCamp

# ระบบจองลานกางเต็นท์ทั่วประเทศ ผ่านWeb Application 

## Link  to Youtube Video DEMO
[LastCamp ระบบจองลานกางเต็นท์ผ่าน Web Application](https://www.youtube.com/watch?v=AY48f3SCheU&ab_channel=PeerapatBoonsuwan)

# Data Dictionary 📖

```
{
  "record": [
    {
      "location": "ปางหวัน โฮมสเตย์ สวนผึ้ง",
      "name": "Nattanan",
      "mobile": "0972175684",
      "Checkin": "2023-01-07",
      "Checkout": "2023-01-08",
      "Timein": "11:06",
      "camper": {
        "camper_normal": "3",
        "camper_kids": "0",
        "camper_elder": "0"
      },
      "owner": "2",
      "id": 1
    }
  ],
  "account": [
    {
      "id": 1,
      "username": "Test01",
      "email": "Test01@gmail.com",
      "mobile": "123456789",
      "password": "1234"
    },
    {
      "username": "ikiki478",
      "email": "nattanan4398@gmail.com",
      "password": "1234",
      "mobile": "0972175684",
      "id": 2
    }
  ]
}
```
<table style="border: red solid 1px;">
    <thead>
        <h2><b>booking :</b></h2>
    </thead>
    <h4 >ข้อมูลrecord</h3>
    <ul>
      <li>IDผู้ใช้(id) ใช้เป็นการระบุตัวตนของผู้ใช้</li>
      <li>สถานที่(Location) ใช้เป็นการระบุสถานที่ทีลูกค้าเลือกจอง</li>
      <li>ชื่อ(Name) ใช้เป็นการระบุชื่อของตัวผู้ใช้</li>
      <li>เบอร์ติดต่อ(Mobile) ใช้เป็นการระบุเบอร์ติดต่อของตัวผู้ใช้</li>
      <li>วันเข้าใช้บริการ(Checkin) ใช้เพื่อระบุวัน/เดือน/ปีที่ลูกค้าเข้าพักลงในระบบ</li>
      <li>วันออกจากที่พัก(CheckOut) ใช้เพื่อระบุวัน/เดือน/ปีที่ลูกค้าออกจากที่พักลงในระบบ </li>
      <li>เวลาเข้าใช้บริการ(Timein) ใช้เพื่อระบุเวลาที่ลูกค้าเข้าพักลงในระบบ </li>
      <li>จำนวนคน(ผู้ใหญ่)(camper_normal) ใช้เพื่อระบุจำนวนคนว่าผู้ใหญ่เข้าพักกี่คน </li>
      <li>จำนวนคน(เด็ก)(camper_kid) ใช้เพื่อระบุจำนวนคนว่าเด็กเข้าพักกี่คน </li>
      <li>จำนวนคน(สูงอายุ)(camper_elder) ใช้เพื่อระบุจำนวนคนว่าผู้สูงอายุเข้าพักกี่คน </li>
      <li>เก็บid ของuser(owner) เอาไว้แยกว่าของใครเป็นของใคร </li>
    </ul>
     <tr>
        <th>Attribute Name</th>
        <th>Description</th>
        <th>Data Type</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>id</td>
        <td>id ของผู้ใช้</td>
        <td>int</td>
        <td>1</td>
    </tr>
    <tr>
        <td>location</td>
        <td>สถานทีที่ผู้ใช้เลือกจอง</td>
        <td>String</td>
        <td>ปางหวัน โฮมสเตย์ สวนผึ้ง</td>
    </tr>
    <tr>
        <td>name</td>
        <td>ชื่อผู้จอง</td>
        <td>String</td>
        <td>Nattanan</td>
    </tr>
    <tr>
        <td>mobile</td>
        <td>เบอร์ติดต่อ</td>
        <td>String</td>
        <td>0954265568</td>
    </tr>
    <tr>
        <td>CheckIn</td>
        <td>วันที่ผู้ใช้จะ Check In</td>
        <td>Date</td>
        <td>2023-01-07</td>
    </tr>
    <tr>
        <td>Checkout</td>
        <td>วันที่ผู้ใช้จะ Check out</td>
        <td>Date</td>
        <td>2023-01-08</td>
    </tr>
    <tr>
        <td>Timein</td>
        <td>เวลาเข้าCheckin</td>
        <td>Time</td>
        <td>11:06</td>
    </tr>
    <tr>
        <td>camper_normal</td>
        <td>จำนวนคน(ผู้ใหญ่)</td>
        <td>Number</td>
        <td>1</td>
    </tr>
     <tr>
        <td>camper_kid</td>
        <td>จำนวนคน(เด็ก)</td>
        <td>Number</td>
        <td>0</td>
    </tr>
     <tr>
        <td>camper_elder</td>
        <td>จำนวนคน(ผู้สูงอายุ)</td>
        <td>Number</td>
        <td>0</td>
    </tr>
     <tr>
        <td>owner</td>
        <td>เก็บid ของuser</td>
        <td>String</td>
        <td>2</td>
    </tr>
   
    
</table>
<table style="border: red solid 1px;">
    <thead>
        <h2><b>booking :</b></h2>
    </thead>
    <h4 >ข้อมูลaccount</h3>
    <ul>
      <li>IDผู้ใช้(id) ใช้เป็นการระบุตัวตนของผู้ใช้</li>
      <li>ชื่อผู้ใช้(username) ใช้เพื่อระบุชื่อของผู้ใช้</li>
      <li>ชื่อ(Name) ใช้เป็นการระบุชื่อของตัวผู้ใช้</li>
      <li>เบอร์ติดต่อ(Mobile) ใช้เป็นการระบุเบอร์ติดต่อของตัวผู้ใช้</li>
      <li>วันเข้าใช้บริการ(Checkin) ใช้เพื่อระบุวัน/เดือน/ปีที่ลูกค้าเข้าพักลงในระบบ</li>
    </ul>
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
        <th>Data Type</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>id</td>
        <td>id ของผู้ใช้</td>
        <td>int</td>
        <td>1</td>
    </tr>
    <tr>
        <td>username</td>
        <td>username ของผู้ใช้</td>
        <td>String</td>
        <td>Test01</td>
    </tr>
    <tr>
        <td>email</td>
        <td>email ของผู้ใช้</td>
        <td>String</td>
        <td>Test01@gmail.com</td>
    </tr>
    <tr>
        <td>mobile</td>
        <td>เบอร์ติดต่อ</td>
        <td>String</td>
        <td>123456789</td>
    </tr>
    <tr>
        <td>password</td>
        <td> password ของผุ้ใช้ </td>
        <td>String</td>
        <td>1234</td>
    </tr>
    
    
</table>

# Languages and Tools: 🛠
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" width="42"
    alt="javascript logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" width="42"
    alt="html5 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" width="42"
    alt="css3 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30" width="42"
    alt="nodejs logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="30" width="42"
    alt="bootstrap logo" />
<img src="https://openai.com/content/images/2022/05/openai-avatar.png" height="30" width="30"
    alt="git logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="30" width="42"
    alt="vscode logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30" width="42"
    alt="git logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/640px-Google_%22G%22_Logo.svg.png" height="30" width="30"
    alt="ChatGPT logo" />

<br><br>



# สมาชิกในกลุ่ม : 
- 64102122 จิรภัทร จิตรภักดี
- 64104532 พีรภัทร บุญสุวรรณ
<br><br>




# หลักสูตรเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล สำนักวิชาสารสนเทศศาสตร์ 🏫
<div>
    <img height="300" width="300"
        src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/279560270_5821053641244444_1641496247686643675_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0EY1X0Qdhl07UJiFQsaVZWylXctbtv-pbKVdy1u2_6tf9k1Ytpc8jIphmM3ZHSVw5BcDktrmF-SyZmjBluAYm&_nc_ohc=cuLkhutHAIsAX-6WoFW&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfChkK43-YQ1dkymkyoYMlRPgTSO4xj8-EzDtsU5lP-ipw&oe=63BDC9E6" />
