import React, { Component } from "react";
import Vdo from "../../components/vdoplayer/Vdo";
import workshopvdo from "../../images/WORKSHOP.mp4";
import classes from "./Workshop.module.css";

class Workshop extends Component {
  state = {
    display: (
      <div className={classes.text}>
        <p>
          Net App patiently waited for his number to be called. She had no
          desire to be there, but her mom had insisted that she go. She's
          resisted at first, but over time she realized it was simply easier to
          appease her and go. Mom tended to be that way. She would keep
          insisting until you wore down and did what she wanted. So, here she
          sat, patiently waiting for her number to be called.
        </p>
        <p>vdghjckop</p>
        <p>
          bvndoinji vewouhviuijnvjdsk ehiuv dvnkjdj vnav lv d vjl .zmcnc djld
          dncjd d;lkbfvk,dv nslv khv
        </p>
        <p>
          adjbv dvkldv n,z n zbv ,v vdbv,zd vdhvbdv d,kvbdvl kjb k,zc
          mbvkjhdblkjnv z zbjhzm vksff,nv fv
        </p>
      </div>
    ),
    style1: { color: "rgb(199, 168, 230)" },
    style2: { color: "rgb(199, 168, 230)" },
    style3: { color: "rgb(199, 168, 230)" },
    style4: { color: "rgb(199, 168, 230)" },
    style5: { color: "rgb(199, 168, 230)" },
    style6: { color: "rgb(199, 168, 230)" },
  };

  contentChangeHandler = (workshopName) => {
    let content = null;
    let style1 = { color: "rgb(199, 168, 230)" };
    let style2 = { color: "rgb(199, 168, 230)" };
    let style3 = { color: "rgb(199, 168, 230)" };
    let style4 = { color: "rgb(199, 168, 230)" };
    let style5 = { color: "rgb(199, 168, 230)" };
    let style6 = { color: "rgb(199, 168, 230)" };

    if (workshopName === "Sebi") {
      style2 = { color: "rgb(242, 229, 255)" };
      content = (
        <div className={classes.text}>
          <p>
            SEBI text container content but her mom had insisted that she go.
            She's resisted at first, but over time she realized it was simply
            easier to appease her and go. Mom tended to be that way. She would
            keep insisting until you wore down and did what she wanted. So, here
            she sat, patiently waiting for her number to be called.
          </p>
          <p>vdghjckop</p>
          <p>
            bvndoinji vewouhviuijnvjdsk ehiuv dvnkjdj vnav lv d vjl .zmcnc djld
            dncjd d;lkbfvk,dv nslv khv
          </p>
          <p>
            adjbv dvkldv n,z n zbv ,v vdbv,zd vdhvbdv d,kvbdvl kjb k,zc
            mbvkjhdblkjnv z zbjhzm vksff,nv fv
          </p>
        </div>
      );
    } else if (workshopName === "NetApp") {
      style1 = { color: "rgb(242, 229, 255)" };
      content = (
        <div className={classes.text}>
          <p>
            Net App text container content but her mom had insisted that she go.
            She's resisted at first, but over time she realized it was simply
            easier to appease her and go. Mom tended to be that way. She would
            keep insisting until you wore down and did what she wanted. So, here
            she sat, patiently waiting for her number to be called.
          </p>
          <p>vdghjckop</p>
          <p>
            bvndoinji vewouhviuijnvjdsk ehiuv dvnkjdj vnav lv d vjl .zmcnc djld
            dncjd d;lkbfvk,dv nslv khv
          </p>
          <p>
            adjbv dvkldv n,z n zbv ,v vdbv,zd vdhvbdv d,kvbdvl kjb k,zc
            mbvkjhdblkjnv z zbjhzm vksff,nv fv
          </p>
        </div>
      );
    } else if (workshopName === "Canon") {
      style3 = { color: "rgb(242, 229, 255)" };
      content = (
        <div className={classes.text}>
          <p>
            Canon text container content but her mom had insisted that she go.
            She's resisted at first, but over time she realized it was simply
            easier to appease her and go. Mom tended to be that way. She would
            keep insisting until you wore down and did what she wanted. So, here
            she sat, patiently waiting for her number to be called.
          </p>
          <p>vdghjckop</p>
          <p>
            bvndoinji vewouhviuijnvjdsk ehiuv dvnkjdj vnav lv d vjl .zmcnc djld
            dncjd d;lkbfvk,dv nslv khv
          </p>
          <p>
            adjbv dvkldv n,z n zbv ,v vdbv,zd vdhvbdv d,kvbdvl kjb k,zc
            mbvkjhdblkjnv z zbjhzm vksff,nv fv
          </p>
        </div>
      );
    } else if (workshopName === "GeDigital") {
      style4 = { color: "rgb(242, 229, 255)" };
      content = (
        <div className={classes.text}>
          <p>
            Ge Digital text container content but her mom had insisted that she
            go. She's resisted at first, but over time she realized it was
            simply easier to appease her and go. Mom tended to be that way. She
            would keep insisting until you wore down and did what she wanted.
            So, here she sat, patiently waiting for her number to be called.
          </p>
          <p>vdghjckop</p>
          <p>
            bvndoinji vewouhviuijnvjdsk ehiuv dvnkjdj vnav lv d vjl .zmcnc djld
            dncjd d;lkbfvk,dv nslv khv
          </p>
          <p>
            adjbv dvkldv n,z n zbv ,v vdbv,zd vdhvbdv d,kvbdvl kjb k,zc
            mbvkjhdblkjnv z zbjhzm vksff,nv fv
          </p>
        </div>
      );
    } else if (workshopName === "WellFargo") {
      style5 = { color: "rgb(242, 229, 255)" };
      content = (
        <div className={classes.text}>
          <p>
            WellFargo text container content but her mom had insisted that she
            go. She's resisted at first, but over time she realized it was
            simply easier to appease her and go. Mom tended to be that way. She
            would keep insisting until you wore down and did what she wanted.
            So, here she sat, patiently waiting for her number to be called.
          </p>
          <p>vdghjckop</p>
          <p>
            bvndoinji vewouhviuijnvjdsk ehiuv dvnkjdj vnav lv d vjl .zmcnc djld
            dncjd d;lkbfvk,dv nslv khv
          </p>
          <p>
            adjbv dvkldv n,z n zbv ,v vdbv,zd vdhvbdv d,kvbdvl kjb k,zc
            mbvkjhdblkjnv z zbjhzm vksff,nv fv
          </p>
        </div>
      );
    } else if (workshopName === "Siemens") {
      style6 = { color: "rgb(242, 229, 255)" };
      content = (
        <div className={classes.text}>
          <p>
            Siemens text container content but her mom had insisted that she go.
            She's resisted at first, but over time she realized it was simply
            easier to appease her and go. Mom tended to be that way. She would
            keep insisting until you wore down and did what she wanted. So, here
            she sat, patiently waiting for her number to be called.
          </p>
          <p>vdghjckop</p>
          <p>
            bvndoinji vewouhviuijnvjdsk ehiuv dvnkjdj vnav lv d vjl .zmcnc djld
            dncjd d;lkbfvk,dv nslv khv
          </p>
          <p>
            adjbv dvkldv n,z n zbv ,v vdbv,zd vdhvbdv d,kvbdvl kjb k,zc
            mbvkjhdblkjnv z zbjhzm vksff,nv fv
          </p>
        </div>
      );
    }
    this.setState({
      display: content,
      style1: style1,
      style2: style2,
      style3: style3,
      style4: style4,
      style5: style5,
      style6: style6,
    });
  };
  render() {
    return (
      <div>
        <Vdo name={workshopvdo} loopCondition={true} />
        <div className={classes.title}>
          <h1>Workshops</h1>
        </div>
        <div className={classes.workshopNames}>
          <div
            className={classes.workshop}
            style={this.state.style1}
            onClick={() => this.contentChangeHandler("NetApp")}
          >
            Net App
          </div>
          <div
            className={classes.workshop}
            style={this.state.style2}
            onClick={() => this.contentChangeHandler("Sebi")}
          >
            Sebi
          </div>
          <div
            className={classes.workshop}
            style={this.state.style3}
            onClick={() => this.contentChangeHandler("Canon")}
          >
            Canon
          </div>
          <div
            className={classes.workshop}
            style={this.state.style4}
            onClick={() => this.contentChangeHandler("GeDigital")}
          >
            GE Digital
          </div>
          <div
            className={classes.workshop}
            style={this.state.style5}
            onClick={() => this.contentChangeHandler("WellFargo")}
          >
            Wells Fargo
          </div>
          <div
            className={classes.workshop}
            style={this.state.style6}
            onClick={() => this.contentChangeHandler("Siemens")}
          >
            Siemens
          </div>
        </div>
        {this.state.display}
      </div>
    );
  }
}
export default Workshop;
