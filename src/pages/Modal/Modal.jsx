import React from "react";
import { Link } from "react-router-dom";
import "./modal.scss";
import video from "../../images/vikings.mp4";
import logo from "../../images/vikings_logo.webp";
import episode from "../../images/vikings_episode.jpg";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ClearOutlined,
  SubtitlesOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";

const Modal = ({ closeModal }) => {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <Link className='cancelButton' to='/'>
          <ClearOutlined className='icon' />
        </Link>
        <div className='title'>
          <video src={video} autoPlay loop></video>
          <img className='logo' src={logo} alt='' />
          <div className='buttons'>
            <button className='playButton'>
              <PlayArrow className='play_icon'></PlayArrow>
              <span>Play</span>
            </button>
            <Add className='icon'></Add>
            <ThumbUpAltOutlined className='icon'></ThumbUpAltOutlined>
          </div>
        </div>
        <div className='body'>
          <div className='infos'>
            <div className='info_materials'>
              <span className='match'>79% Match</span>
              <span className='year'>2013</span>
              <span className='limit'>16+</span>
              <span className='seasons'>6 Seasons</span>
              <span className='hd'>HD</span>
              <SubtitlesOutlined className='subts'></SubtitlesOutlined>
            </div>
            <p className='desc'>
              This gritty drama charts the exploits of Viking hero Ragnar
              Lothbrok <br />
              as he extends the Norse reach by challenging an unfit leader who
              lacks vision
            </p>
          </div>

          <div className='seriesInfo'>
            <p>
              <span className='infoTitles'>Cast:</span> Travis Fimmel, Katheryn
              Winnick, Abdil Cilafi,
              <br /> Clive Standen,
              <i>more</i>
            </p>
            <p>
              <span className='infoTitles'>Genres:</span> Canadian, Political TV
              Shows, <br /> Period Pieces
            </p>
            <p>
              <span className='infoTitles'>This show is:</span> Violent,
              Exciting
            </p>
          </div>
        </div>
        <div className='episodes'>
          <div className='title_episodes'>
            <h2>Episodes</h2>
            <select name='episodeNum' id='episodeNum'>
              <option value='Season_1' key=''>
                Season 1
              </option>
              <option value='Season_2' key=''>
                Season 2
              </option>
              <option value='Season_3' key=''>
                Season 3
              </option>
              <option value='Season_4' key=''>
                Season 4
              </option>
              <option value='Season_5' key=''>
                Season 5
              </option>
              <option value='Season_6' key=''>
                Season 6
              </option>
            </select>
          </div>

          <div className='episode'>
            <div className='first_episode episode_container'>
              <span className='epsiode_number'>1</span>
              <img src={episode} alt='' />
              <div className='episode_info'>
                <div className='episode_header'>
                  <h3>Rites of Passage</h3>
                  <span>46m</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias ratione dignissimos.
                </p>
              </div>
            </div>
            <hr className='h_line' />
            <div className=' episode_container'>
              <span className='epsiode_number'>2</span>
              <img src={episode} alt='' />
              <div className='episode_info'>
                <div className='episode_header'>
                  <h3>Rites of Passage</h3>
                  <span>46m</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias ratione dignissimos.
                </p>
              </div>
            </div>
            <hr className='h_line' />
            <div className=' episode_container'>
              <span className='epsiode_number'>3</span>
              <img src={episode} alt='' />
              <div className='episode_info'>
                <div className='episode_header'>
                  <h3>Rites of Passage</h3>
                  <span>46m</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias ratione dignissimos.
                </p>
              </div>
            </div>
            <hr className='h_line' />
            <div className=' episode_container'>
              <span className='epsiode_number'>4</span>
              <img src={episode} alt='' />
              <div className='episode_info'>
                <div className='episode_header'>
                  <h3>Rites of Passage</h3>
                  <span>46m</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias ratione dignissimos.
                </p>
              </div>
            </div>
            <hr className='h_line' />
            <div className=' episode_container'>
              <span className='epsiode_number'>5</span>
              <img src={episode} alt='' />
              <div className='episode_info'>
                <div className='episode_header'>
                  <h3>Rites of Passage</h3>
                  <span>46m</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias ratione dignissimos.
                </p>
              </div>
            </div>
            <hr className='h_line' />
          </div>
        </div>

        <div className='suggestions'>
          <div className='suggestHeader'>
            <h2>More Like This</h2>
          </div>

          <div className='suggest_containers'>
            <div className='suggest_elements'>
              <img src={episode} alt='' />
              <div className='suggest_info'>
                <div className='suggest_stats'>
                  <span className='match'>95% Match</span>
                  <div className='suggest_sub_stats'>
                    <span className='limit'>16+</span>
                    <span className='release'>2023</span>
                  </div>
                </div>
                <Add className='suggest_icon'></Add>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                assumenda nostrum laudantium amet, totam deleniti odio enim?
                Consectetur ipsam, illum dolorum sit exercitationem deserunt.
              </p>
            </div>
            <div className='suggest_elements'>
              <img src={episode} alt='' />
              <div className='suggest_info'>
                <div className='suggest_stats'>
                  <span className='match'>95% Match</span>
                  <div className='suggest_sub_stats'>
                    <span className='limit'>16+</span>
                    <span className='release'>2023</span>
                  </div>
                </div>
                <Add className='suggest_icon'></Add>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                assumenda nostrum laudantium amet, totam deleniti odio enim?
                Consectetur ipsam, illum dolorum sit exercitationem deserunt.
              </p>
            </div>
            <div className='suggest_elements'>
              <img src={episode} alt='' />
              <div className='suggest_info'>
                <div className='suggest_stats'>
                  <span className='match'>95% Match</span>
                  <div className='suggest_sub_stats'>
                    <span className='limit'>16+</span>
                    <span className='release'>2023</span>
                  </div>
                </div>
                <Add className='suggest_icon'></Add>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                assumenda nostrum laudantium amet, totam deleniti odio enim?
                Consectetur ipsam, illum dolorum sit exercitationem deserunt.
              </p>
            </div>
          </div>
          <hr className='h_line_suggest' />
          <KeyboardArrowDown className='down_arrow'></KeyboardArrowDown>
        </div>

        <div className='about'>
          <div className='about_container'>
            <h2 className='about_header'>About Vikings</h2>
            <p>
              <span className='infoTitles'>Cast:</span> Travis Fimmel, Katheryn
              Winnick, Clive Standen,
              <i>more</i>
            </p>
            <p>
              <span className='infoTitles'>Genres:</span> Canadian, Political TV
              Shows, Period Pieces
            </p>
            <p>
              <span className='infoTitles'>This show is:</span> Violent,
              Exciting
            </p>
            <p>
              <span className='infoTitles'>Maturity rating:</span>
              <span className='limit'>16+</span> Recommended for ages 16 and up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
