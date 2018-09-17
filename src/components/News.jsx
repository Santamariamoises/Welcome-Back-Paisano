import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./News.css";

export default class News extends Component {
  render() {
    return (
      <div>
        <style>{"body { background-color: lightblue; }"}</style>
        <Image src="assets/rights-banner.jpg" className="header-image" />
        <Grid>
          <h2>Get to know your rights upon contact with the police</h2>
          <Row>
            <Col xs={12} sm={12} className="main-section">
              <p className="rightsText">
                <h4>Article 10</h4>
                <br />
                Habitants of the Republic may, for their protection, own guns
                and arms in their homes. Only arms approved by the Army may be
                owned, and federal law will state the manner in which they can
                be used (Firearms are prohibited from importation into the
                Republic without proper licensing and documentation. Foreigners
                may not pass the border with unlicensed firearms; the commission
                of such act is a felony, punishable by prison term
              </p>
              <br />
              <p className="rightsText">
                <h4>Article 14</h4>
                <br />
                Prohibits the enactment of{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Ex_post_facto_law"
                  target="_blank"
                >
                  ex post facto
                </a>{" "}
                (retroactive) laws. All persons punished under the law are
                entitled to{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Due_process"
                  target="_blank"
                >
                  due process
                </a>
                , punishments must follow what is dictated by written law. Note
                that due process under Mexican law is not the same as US law as
                Mexico is not a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Common_law"
                  target="_blank"
                >
                  common law
                </a>{" "}
                country.
              </p>
              <p className="rightsText">
                <h4>Article 16</h4>
                <br />
                "In cases of{" "}
                <a
                  href="https://en.wikipedia.org/wiki/In_flagrante_delicto"
                  target="_blank"
                >
                  flagrante delicto
                </a>
                , any person may arrest the offender and his accomplices,
                turning them over without delay to the nearest authorities." In
                other words, a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Citizen%27s_arrest"
                  target="_blank"
                >
                  citizen's arrest
                </a>{" "}
                is allowed.
              </p>
              <p className="rightsText">
                <h4>Article 19</h4>
                <br />
                Prohibits detention in excess of 72 hours (3 days) without
                formal charges. Mandates{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Due_process"
                  target="_blank"
                >
                  due process
                </a>{" "}
                for imprisonable charges. Separate crimes discovered during an
                investigation must be charged separately. Mistreatment during
                detention by authorities, all discomforts that are inflicted
                without legal motive, and all fees or contributions (forced
                bribes) in jails are abuses that will be prohibited by law and
                curbed by the authorities.
              </p>
              <p className="rightsText">
                <h4>Article 20</h4>
                <br />
                Allows people charged to remain silent.
              </p>
              <p className="rightsText">
                <h4>Article 22</h4>
                <br />
                Cruel and unusual punishment is prohibited. Specifically,
                penalties of death, mutilation, infamy, marks, physical
                punishments, torments, excessive fines, confiscation of assets,
                and others are abolished. Confiscation of assets does not
                include the application of said assets to pay for civil
                responsibilities caused by a crime, or when used to pay taxes or
                other fines. Nor will it be confiscation when said assets are
                part of illegal activities, or when they are related to
                organized crime, or when proof of ownership cannot be
                established.
              </p>
              <h2>
                {" "}
                Here is a video where your rights are explained in 3 minutes!
              </h2>
            </Col>
            <iframe
              width="912"
              height="513"
              src="https://www.youtube.com/embed/0VkCUuwOSgQ"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </Row>
        </Grid>
      </div>
    );
  }
}