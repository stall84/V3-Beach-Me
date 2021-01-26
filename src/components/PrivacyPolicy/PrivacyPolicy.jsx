import React from 'react'
import { Link } from 'react-router-dom';

import styles from './privacyPolicy.module.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

/***  Material UI Components ***/ 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';



export function PrivacyPolicy() {
    return (
        <Container maxWidth='xl' disableGutters={true}>
            <Grid container>
                <Link to='/'>
                    <Header />
                </Link>
                <Grid item xs={12} className={styles.grid_base}>
                    <div className={styles.policy_section}>              
                    <h4>PRIVACY NOTICE</h4>
                    <span>Last Updated January 25th, 2021</span>
                    <Card className={styles.privacy_card}>
                        <div>
                        Thank you for choosing to be part of our community at Michael Stallings
                        , doing business as <span>Beach-Me</span> ("<span><strong>Beach-Me</strong></span>", "<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>"). 
                        We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, 
                        or our practices with regards to your personal information, please contact us at beach-me@mail.com
                        </div>
                        <div>
                            When you use our mobile application, as the case may be (the "<strong>App</strong>") and more generally, use any of our services 
                            (the "<strong>Services</strong>", which include the "App", we appreciate that you are trusting us with your personal information. We take your privacy very seriously. 
                            In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, 
                            how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. 
                            If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
                            This privacy notice applies to all information collected through our Services (which, as described above, includes our App, as well as, any related services, sales, marketing or events.
                            <br />
                            <span><strong>Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</strong></span>
                        </div>
                    </Card>
                    </div>

                    <div className={styles.policy_section}>
                        <h5>1. WHAT INFORMATION DO WE COLLECT?</h5>
                        <span><strong>Information collected through our App</strong></span>
                        <Card className={styles.privacy_card}>
                            <div>
                                <span><strong><em>In Short: </em></strong><em>We collect information regarding your geo-location, when you use our App.</em></span>
                            </div>
                            <div>
                                If you use our App, we also collect the following information:
                            </div>
                            <div>
                                <em>Geo-Location Information.</em>
                            </div>
                            <div>
                                We may request access or permission to location-based information from your mobile device, only while you are
                                using the app, to provide certain location-based services. If you wish to change our access or permissions,
                                you may do so in your device's settings.
                                <br />
                                This information is primarily needed to maintain the operation of our App.
                            </div>
                        </Card>
                    </div>

                    <div className={styles.policy_section}>
                        <h5>2. HOW DO WE USE YOUR INFORMATION?</h5>
                        <Card className={styles.privacy_card}>
                            <div>
                                <span><strong><em>In Short: </em></strong><em>We process your information for purposes based on 
                                    legitimate business interests, the fulfillment of our contract with you, compliance with our legal
                                    obligations, and/or your consent.
                                </em></span>
                            </div>
                            <div>
                                We use personal information collected via our App for a variety of business purposes described below. We process
                                your personal information for these purposes in reliance on our legitimate business interests, in order to enter
                                into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                                We indicate the specific processing grounds we rely on next to each purpose listed below.
                            </div>
                            <div>
                                <strong>-To deliver and facilitate delivery of services to the user:</strong> We may use your information to provide
                                you with the requested service.
                            </div>
                        </Card>
                    </div>

                    <div className={styles.policy_section}>
                        <h5>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h5>
                        <Card className={styles.privacy_card}>
                            <div>
                                <span><strong><em>In Short: </em></strong><em>We only share information with your consent, to comply with laws, to provide
                                    you with services, to protect your rights, or to fulfill business obligations.</em></span>
                            </div>
                            <div>
                                We may process or share your data that we hold based on the following legal basis:
                            </div>
                            <div>
                                <strong>Consent: </strong> We may process your data if you have given us specific consent to use your personal
                                information for a specific purpose.
                            </div>
                            <div>
                                <strong>Legitimate Interests: </strong> We may process your data when it is reasonably necessary to achieve our legitimate business
                                interests.
                            </div>
                            <div>
                                <strong>Performance of a Contract: </strong> Where we have entered into a contract with you, we may process
                                your personal information to fulfill the terms of our contract.
                            </div>
                            <div>
                                <strong>Legal Obligations: </strong> We may disclose your information where we are legally required to do so in order
                                to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in 
                                response to a court order or a subpoena (including in response to public authorities to meet national security or law 
                                enforcement requirements).
                            </div>
                            <div>
                                <strong>Vital Interests: </strong> We may disclose your information where we believe it is necessary to investigate, 
                                prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety
                                of any person and illegal activities, or as evidence in litigation in which we are involved.
                            </div>
                        </Card>
                    </div>

                    <div className={styles.policy_section}>
                        <h5>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h5>
                        <Card className={styles.privacy_card}>
                                <span><strong><em>In Short: </em></strong><em>While Beach-Me does <storng>not</storng> use cookies, Google-Maps might.</em></span>
                                <br />
                                <div> Please check out Google Maps Cookie policy <strong><a href='https://policies.google.com/technologies/cookies?hl=en-US'>here</a></strong>.
                                </div>
                        </Card>
                    </div>

                    <div className={styles.policy_section}>
                        <h5>5. DO WE USE GOOGLE MAPS PLATFORM APIS?</h5>
                        <Card className={styles.privacy_card}>
                        <span><strong><em>In Short: </em></strong><em>Yes, we use Google Maps Platform APIs for the purpose of providing better service.</em></span>
                        <div>
                            This App uses Google Maps Platform APIs which are subject to Google's Terms of Service. You may find the Google Maps Platform Terms of Service 
                            <strong><a href='https://cloud.google.com/maps-platform/terms/'> here</a></strong>.
                            To find out more about Google's Privacy Policy, please refer to this <strong><a href='https://policies.google.com/privacy'>link</a></strong>.
                        </div>
                        </Card>
                    </div>

                    <div className={styles.policy_section}>
                        <h5>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h5>
                        <Card className={styles.privacy_card}>
                            <span><strong><em>In Short: </em></strong><em>We only use your location information while you are using the App.</em></span>
                            <div>
                                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy
                                notice. No user information is stored on any database owned or operated by Beach Me.
                            </div>
                        </Card>
                    </div>

                    <div className={styles.policy_section}> 
                        <h5>7. WHAT ARE YOUR PRIVACY RIGHTS?</h5>
                        <Card className={styles.privacy_card}>
                            <span><strong><em>In Short: </em></strong><em>You may review, change, or terminate the App at any time</em></span>
                        </Card>
                    </div>

                    <div className={styles.policy_section}>
                        <h5>8. CONTROLS FOR DO-NOT-TRACK FEATURES</h5>
                        <Card className={styles.privacy_card}>
                            <div>
                                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you 
                                can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage
                                no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently
                                respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard
                                for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this 
                                privacy notice.
                            </div>
                        </Card>
                    </div>

                    <div className={styles.policy_section}>
                        <h5>9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h5>
                        <Card className={styles.privacy_card}>
                            <span><strong><em>In Short: </em></strong><em>Yes, if you are a resident of California, you are granted specific rights regarding access
                                to your personal information.</em></span>
                                <div>
                                    California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and 
                                    obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for 
                                    direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately proceeding
                                    calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the
                                    contact information below.
                                </div>
                        </Card>
                    </div>

                    <div className={styles.policy_section}>
                        <h5>10. DO WE MAKE UPDATES TO THIS NOTICE?</h5>
                        <Card className={styles.privacy_card}>
                            <span><strong><em>In Short: </em></strong><em>Yes, we will update this notice as necessary to stay compliant with all relevant laws.</em></span>
                            <div>
                                We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will
                                be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice 
                                of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how e are protecting your information.
                            </div>
                        </Card>
                    </div>

                    <div className={styles.policy_section}>
                        <h5>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h5>
                        <Card className={styles.privacy_card}>
                            <div>
                                If you have any questions or comments about this notice, you may email us at <a href='mailto:beach-me@mail.com'>beach-me@mail.com </a>
                                or by post to: 
                                <br />
                                Michael Stallings
                                <br />
                                635 N Highland Ave NE
                                <br />
                                Apt 10
                                <br />
                                Atlanta, GA 30306
                                <br />
                                United States
                            </div>
                        </Card>
                    </div>

                </Grid>              
            </Grid>
            <Footer />
        </Container>
    )
}
