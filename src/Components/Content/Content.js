import React from 'react';
import classes from './Content.scss';
import Teams from './Teams/Teams';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';

const content = (props) => {
    let childItem = props.countries.filter( (item, i) => {
            if (item.code === props.activeCode) {
                return item;
            } else {
                return null;
            }
        }),
        contentteamsClasses = props.currentMode ? [classes.content__teams, classes.light].join(' ') : [classes.content__teams, classes.dark].join(' '),
        abouttextClasses = props.currentMode ? [classes.about__text, classes.light].join(' ') : [classes.about__text, classes.dark].join(' '),
        aboutgithubClasses = props.currentMode ? [classes.about__github, classes.light].join(' ') : [classes.about__github, classes.dark].join(' '),
        contentwrapperClasses = props.currentMode ? [classes.content__wrapper, classes.light].join(' ') : [classes.content__wrapper, classes.dark].join(' ');

    if (props.activeCode){
        return (
            <div className={contentwrapperClasses}>
                <div className={contentteamsClasses}>
                    <Breadcrumbs
                        country={childItem[0].name}
                        handleClick={props.handleClick}
                        currentMode={props.currentMode}
                    />
                    <div className={classes.itemWrapper}>
                        {
                            childItem[0].childs.map((item, i) => {
                                return (
                                    <Teams
                                        key={i}
                                        team={item}
                                        currentMode={props.currentMode}
                                    >
                                    </Teams>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={contentwrapperClasses}>
                <div className={classes.content__home}>
                    <div className={classes.about}>
                        <div className={abouttextClasses}>
                            Thank you for downloading my small template created in <span className={classes.number}>2018</span>.<br/>
                            I'll really appreciate if you'll contribute to project as well.<br/>
                        </div>
                        <div className={aboutgithubClasses}>
                            Created using <span className={classes.logo}>collectio</span>.
                            <br/>
                            Want website like this? Feel free to <a href="https://github.com/mam1konyan/collectio-react" target="_blank" rel="noopener noreferrer">download project from GitHub</a>. <FontAwesomeIcon icon={faHeart} className={classes.heart} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default content;