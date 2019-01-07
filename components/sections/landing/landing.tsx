import * as React from "react";

import "./landing.scss";

interface IAnimated {
  currentClass: string;
  animationClass: string;
  delay: number;
}

interface IState {
  name?: IAnimated;
  title?: IAnimated;
  findOutMore?: IAnimated;
}

interface IProps {
  userDetails: IUserDetails;
}

export interface IUserDetails {
  firstName: string;
  lastName: string;
  title: string;
}

class Landing extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: { currentClass: "hide-down", animationClass: "show", delay: 150 },
      title: { currentClass: "hide-down", animationClass: "show", delay: 450 },
      findOutMore: { currentClass: "hide-down", animationClass: "show", delay: 600 }
    };
  }

  public componentDidMount() {
    Object.keys(this.state).forEach(key => {
      const obj: IAnimated = this.state[key];

      this.animateWithDelay(key, obj);
    });
  }

  public render() {
    const { userDetails } = this.props;
    const  { name, title, findOutMore } = this.state;

    return (
      <section className="landing-container">
        <div className="landing-overlay" />

        <div className="container container-heading">
          <h1
            className={`heading-name ${name && name.currentClass}`}
          >
            {userDetails.firstName} {userDetails.lastName}
          </h1>
          <h2
            className={`heading-title ${title && title.currentClass}`}
          >
            {userDetails.title}
          </h2>
        </div>

        <div className={`container container-footer ${findOutMore && findOutMore.currentClass}`}>
          <span className="find-out">Find out more about {userDetails.firstName}</span>
          <i className="fa fa-chevron-down" />
        </div>
      </section>
    );
  }

  private animateWithDelay(key: string, animateObj: IAnimated) {
    setTimeout(() => {
      this.setState({
        [key]: { ...animateObj, currentClass: animateObj.animationClass }
      });
    }, animateObj.delay);
  }
}

export default Landing;
