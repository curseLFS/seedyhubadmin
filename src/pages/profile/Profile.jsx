import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.scss";

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { Facebook, Gmail, Github, LinkedIn, Skype } from "../../icons";
import { profileSource } from "./profileSource";
import imahi from "../../img/jeo_pic.jpg";

import '../../i18next';
import { useTranslation } from 'react-i18next';

const Profile = () => {

  const { t } = useTranslation();

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="profileName">
            <h1>{t('profile.name')}</h1>
            </div>
          </div>
          <div className="right">
            <div className="profileRole">
            <h1>{t('profile.role')}</h1>
            </div>           
          </div>         
        </div>
        <div className="center">
          <div className="left">
            <div className="profileDetails">
              {profileSource.map((profile) => (
                <Box key={profile.id}>

                  <div className="typo">
                    {t('profile.age')} : 
                    <Typography level="body1" className="typography">
                      {profile.age}
                    </Typography>
                  </div>

                  <div className="typo">
                    {t('profile.occupation')} :
                    <Typography level="body1" className="typography"> 
                      {profile.occupation}
                    </Typography>
                  </div>

                  <div className="typo">
                    {t('profile.status')} : 
                    <Typography level="body1" className="typography">
                      {profile.status}
                    </Typography>
                  </div>
                  
                  <div className="typo">
                    {t('profile.bday')} : 
                    <Typography level="body1" className="typography">
                      {profile.bday}
                    </Typography>
                  </div>
                  
                  <div className="typo">
                    {t('profile.location')} : 
                    <Typography level="body1" className="typography">
                      {profile.location}
                    </Typography>
                  </div>
                  
                  <div className="typo">
                    {t('profile.phone')} : 
                    <Typography level="body1" className="typography">
                      {profile.phone}
                    </Typography>
                  </div>
                  
                  <div className="typo">
                    <a href="https://mail.google.com/">
                      <img src={Gmail} alt="Gmail" className="profileIcons" />
                    </a>                
                  <Typography level="body1" className="typography">                  
                   jheocanda@gmail.com         
                  </Typography>
                  <a href="https://join.skype.com/invite/kt7otG23HWm2">
                      <img src={Skype} alt="Skype" className="profileIcons" />
                    </a>                
                  <Typography level="body1" className="typography">                  
                   jeoganni canda        
                  </Typography>
                  </div>           

                </Box>       
              ))}
            </div>
            <img 
              className="profileImg"
              // src="https://th.bing.com/th/id/R.0e7e012209e572224de9ce8619f56fd2?rik=FLJ7o8iA%2fPCeRQ&riu=http%3a%2f%2fwww.prateekindustries.com%2fimages%2fteam%2f04.png&ehk=5pZhTiolBFHWic93I1x8RmCcW2avm8yIndhiDp0MYeo%3d&risl=&pid=ImgRaw&r=0" 
              src={imahi}
              alt=""
             />           
          </div>
          <div className="right">
            <div className="aboutMe">
              <h1 className="title">{t('title.aboutMe')}</h1>
              <p className="description">{t('profile.aboutMe_body')}</p>
              <hr />
            </div>
              <h1 className="weTitle">{t('title.exp')}</h1>
            <div className="workExperience">
              <div className="weLeft">
                <h1 className="wePosition">{t('title.role')}</h1>
                <p className="company">{t('profile.company')}</p>
              </div>
              <div className="weRight">
                <ul>
                  <li>{t('profile.expDetail_1')}</li>
                  <li>{t('profile.expDetail_2')}</li>
                  <li>{t('profile.expDetail_3')}</li>
                  <li>{t('profile.expDetail_4')}</li>
                  <li>{t('profile.expDetail_5')}</li>
                  <li>{t('profile.expDetail_6')}</li>
                  <li>{t('profile.expDetail_7')}</li>
                  <li>{t('profile.expDetail_8')}</li>
                  <li>{t('profile.expDetail_9')}</li>
                  <li>{t('profile.expDetail_10')}</li>
                  <li>{t('profile.expDetail_11')}</li>
                  <li>{t('profile.expDetail_12')}</li>
                  <li>{t('profile.expDetail_13')}</li>                 
                </ul>
              </div>
            </div>
            <div className="Bottom">
              <div className="education">
              <h1 className="eduTitle">EDUCATION</h1>
              <div className="educationDetails">
                <Box>

                  <div className="eduTypo">
                  <Typography level="h1">                  
                      BACHELOR OF INFORMATION TECHNOLOGY    

                  </Typography>
                  </div>

                  <div className="eduTypo">
                  <Typography level="h3">                  
                    Cebu Institute Of Technology - University    
                  </Typography>
                  </div>

                  <div className="eduTypo">
                  <Typography level="body1">                  
                      2011 - 2014  
                  </Typography>
                  </div>

                </Box>
              </div>
              </div>
              <div className="skills">
                <h1 className="sTitle">{t('title.skills')}</h1>
                <div className="sBody">
                  <ul>
                    <li>{t('skills.1')}</li>
                    <li>{t('skills.2')}</li>
                    <li>{t('skills.3')}</li>
                    <li>{t('skills.4')}</li>
                    <li>{t('skills.5')}</li>                                      
                  </ul>
                  <ul className="ul2">
                  <li>{t('skills.6')}</li>
                    <li>{t('skills.7')}</li>
                    <li>{t('skills.8')}</li>
                    <li>{t('skills.9')}</li>
                    <li>{t('skills.10')}</li>
                  </ul>
                </div>
              </div>
              <div className="socialMedia">
                {/* <h1 className="smTitle">Media</h1> */}
                <div className="smBody">
                  <div className="gmail">
                    <a href="https://mail.google.com/">
                      <img src={Gmail} alt="Gmail" className="mediaIcons" />
                    </a>
                  </div>
                  <div className="facebook">
                    <a href="https://www.facebook.com/">
                      <img src={Facebook} alt="Facebook" className="mediaIcons" />
                    </a>
                  </div>
                  <div className="github">
                    <a href="https://github.com/curseLFS">
                      <img src={Github} alt="Github" className="mediaIcons" />
                    </a>
                  </div>
                  <div className="linkedln">
                    <a href="https://www.linkedin.com/in/jeoganni-canda-67b3a3113/">
                      <img src={LinkedIn} alt="LinkedIn" className="mediaIcons" />
                    </a>
                  </div>
                  <div className="skype">
                    <a href="https://join.skype.com/invite/kt7otG23HWm2">
                      <img src={Skype} alt="Skype" className="mediaIcons" />
                    </a>
                  </div>
                </div>                
              </div>
            </div>   
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile